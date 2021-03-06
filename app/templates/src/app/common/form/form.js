  /**
   * 表单提交
   *
   * @module Form
   */

  'use strict';

  var Validate = require('pandora-validate');

  var XHR = require('../xhr');

  var Core = require('./core'),
    Data = require('./data');

  /**
   * Form
   *
   * @class Form
   * @constructor
   */
  var Form = Core.extend({

    type: 'form',

    defaults: {
      url: '',
      method: 'POST',
      enctype: XHR.ENC_APPLI,
      // validating on values change
      eventType: 'change',
      data: {
        layout: 'horizontal',
        novalidate: true,
        buttons: [{
          value: '确定',
          attrs: {
            'class': 'btn btn-primary',
            type: 'submit'
          }
        }, {
          value: '取消',
          attrs: {
            'class': 'btn btn-default',
            type: 'reset'
          }
        }]
      },
      // 事件代理
      delegates: {
        'submit': function(e) {
          e.preventDefault();
          this.submit();
        }
      },
      formData: {},
      // 添加表单验证
      validate: true,
      // 包含 XHR 提交
      xhr: true
    },

    setup: function() {
      var self = this;

      if (self.option('validate')) {
        self.initValidate();
      }

      Form.superclass.setup.apply(self);
    },

    submit: function() {
      var self = this;
      if (self.validate && !self.option('skipValidate')) {
        self.validate.submit();
      } else {
        self.option('xhr') && self.xhrSend();
      }
    },

    initValidate: function() {
      var self = this;

      self.once('render', function() {

        self.validate = new Validate({
          customRules: self.option('customRules') || {},
          customMessages: self.option('customMessages') || {},
          element: self.element,
          events: {
            all: function(e) {
              self.fire.apply(self, arguments);
            },
            valid: function() {
              self.option('xhr') && self.xhrSend();
              return false;
            }
          },
          eventType: self.option('eventType'),
          helpHook: function(elem) {
            var wrap,
              help = elem.data('validate-help');

            if (!help) {
              wrap = elem.data('validate-wrap');
              help = wrap.find('.help-block');

              if (help.length === 0) {
                wrap.append('<span class="help-block"></span>');
                help = wrap.find('.help-block');
              }

              help.on('click', function() {
                elem.trigger('mousedown');
                elem.focus();
              });

              elem.data('validate-help', help);
            }

            return help;
          },
          wrapHook: function(elem) {
            var wrap = elem.data('validate-wrap');

            if (!wrap) {
              wrap = elem.closest('div');

              elem.data('validate-wrap', wrap);
            }

            return wrap;
          }
        });

        self.validate.form = self;
      });
    },

    initXHR: function() {
      var self = this;

      self.xhr = new XHR({
        url: self.option('url'),
        method: self.option('method'),
        enctype: self.option('enctype'),
        events: {
          all: function(e, data) {
            self.fire.apply(self, arguments);
          },
          // done 与 fail 后，都会触发 load
          load: function(e) {
            self.$(':submit').attr('disabled', false);
          }
        }
      });
    },

    makeFormData: function() {
      var self = this,
        form = self.role('form'),
        formData,
        optionFormData = self.option('formData'),
        key;

      // TODO: 排除文件域为空的情况
      if (form.find(':file[name]').length) {
        self.xhr.option('enctype', XHR.ENC_MULTI);
        // native FormData
        formData = new FormData(form[0]);
      } else {
        formData = new Data(form.prop('elements'));
      }

      for (key in optionFormData) {
        formData.append(key, optionFormData[key]);
      }

      return (self.formData = formData);
    },

    xhrSend: function() {
      var self = this,
        formData;

      if (!self.xhr) {
        self.initXHR();
      }

      self.makeFormData();

      if (self.fire('formData') === false) {
        return;
      }

      formData = self.formData;

      if (typeof formData.paramify === 'function') {
        formData = formData.paramify(true);
      }

      if (self.fire('beforeSubmit')) {
        self.$(':submit').attr('disabled', true);
        self.xhr.submit(formData);
      }
    },

    reset: function() {
      this.$('form')[0].reset();
    }

  });

  module.exports = Form;

