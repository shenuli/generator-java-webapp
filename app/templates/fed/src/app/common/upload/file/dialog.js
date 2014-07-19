define(function (require, exports, module) {

/**
 * 上传
 *
 * @module Upload
 */

'use strict';

var $ = require('$');

var CoreDialog = require('../base/dialog');

/**
 * FileDialog
 *
 * @class FileDialog
 * @constructor
 * @extends {Class} CoreDialog
 */
var FileDialog = CoreDialog.extend({

  defaults: {

    title: '上传文件',

    fileName: 'file',

    uploadOptions: {
      classPrefix: 'file-upload',
      url: 'ftpAdd',
      queueOptions: { },
      selectOptions: {
        accept: '.inc,text/plain,text/html,application/javascript,text/css,text/xml,application/x-shockwave-flash,audio/mp3,.wml,application/xhtml+xml',
        label: '添加文件',
        // 1M
        maxSize: 10 * 1024 * 1024
      },
      buttonOptions: { }
    }
  }

});

module.exports = FileDialog;

});
