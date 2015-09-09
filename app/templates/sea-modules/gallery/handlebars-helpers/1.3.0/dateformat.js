/*! handlebars-helpers-1.3.0 2014-07-07 14:58:39 */
define("gallery/handlebars-helpers/1.3.0/dateformat",[],function(a,b,c){function d(){this._constructor.apply(this,arguments)}d.ISO8601=d.W3C=d.ATOM=d.JSON="yyyy-MM-ddTHH:mm:sszzz",d.RFC822=d.RFC1123=d.RFC2822=d.RSS="ddd, dd MMM yyyy HH:mm:ss zzz",d.RFC850=d.RFC1036=d.COOKIE="dddd, dd-MMM-yy HH:mm:ss zzz",d.CTIME="ddd MMM d HH:mm:ss yyyy",d.DATE_TIME="yyyy-MM-dd HH:mm:ss",d.prototype={},d.names={},d.names.en={era:{abbr:["BC","AD"],full:["B.C.","A.D."]},month:{abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],full:["January","February","March","April","May","June","July","August","September","October","November","December"]},day:{abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},amPm:{abbr:["AM","PM"],full:["A.M.","P.M."]}},d.prototype.asUTC=!1,d.prototype.locale="en",d.prototype._chunks=null,d.prototype._charMaxLengthMap={d:4,f:3,F:3,g:2,h:2,H:2,j:3,K:1,m:2,M:4,s:2,t:2,y:5,z:4},d.prototype._patternParserMap={d:{type:"RegExp",value:/\d{1,2}/},dd:{type:"RegExp",value:/\d{2}/},f:{type:"RegExp",value:/\d/},ff:{type:"RegExp",value:/\d{2}/},fff:{type:"RegExp",value:/\d{3}/},F:{type:"RegExp",value:/\d?/},FF:{type:"RegExp",value:/(\d{2})?/},FFF:{type:"RegExp",value:/(\d{3})?/},h:{type:"RegExp",value:/\d{1,2}/},hh:{type:"RegExp",value:/\d{2}/},H:{type:"RegExp",value:/\d{1,2}/},HH:{type:"RegExp",value:/\d{2}/},j:{type:"RegExt",value:/\d{1,3}/},K:{type:"RegExp",value:/(?:UTC|Local)/},m:{type:"RegExp",value:/\d{1,2}/},mm:{type:"RegExp",value:/\d{2}/},M:{type:"RegExp",value:/\d{1,2}/},MM:{type:"RegExp",value:/\d{2}/},s:{type:"RegExp",value:/\d{1,2}/},ss:{type:"RegExp",value:/\d{2}/},y:{type:"RegExp",value:/\d/},yy:{type:"RegExp",value:/\d{2}/},yyy:{type:"RegExp",value:/\d{3,4}/},yyyy:{type:"RegExp",value:/\d{4}/},yyyyy:{type:"RegExp",value:/\d{5}/},z:{type:"RegExp",value:/(?:Z|[\-\+]\d{1,2})/},zz:{type:"RegExp",value:/(?:Z|[\-\+]\d{2})/},zzz:{type:"RegExp",value:/(?:Z|[\-\+]\d{2}\d{2})/},zzzz:{type:"RegExp",value:/(?:Z|[\-\+]\d{2}\:\d{2})/}},d.prototype._constructor=function(a,b){a||(a=d.DATE_TIME);for(var c,e,f,g=this._charMaxLengthMap,h=a.length,i=0,j="",k=[],l="",m=function(a){""!==j&&(k[k.length]={type:a,value:j},j="")};h>i;)if(c=a.charAt(i),i++,""===l&&c in g){for(m("text"),j=c,e=0,f=g[c]-1;f>e&&a.charAt(i+e)===c;e++)j+=c;i+=e,m("pattern")}else'"'===c||"'"===c?a.charAt(i)===c?(j+=c,i++):""===l&&-1!==a.indexOf(c,i)?l=c:c===l?(m("text"),l=""):j+=c:j+=c;m("text"),this._chunks=k,this.asUTC=!!b},d.prototype.format=function(a){a||(a=new Date);var b,c,e,f,g,h,i,j,k,l,m,n,o,g,p,j,q,r,s,t,u,v,w,x=this._chunks,y=this.asUTC,z=d.names[this.locale],A=function(a,b){for(a=a.toString();a.length<b;)a="0"+a;return a};y?(b=a.getUTCDate(),c=a.getUTCDay(),e=a.getUTCMilliseconds(),f=a.getUTCHours(),h=a.getUTCMonth(),i=a.getUTCMinutes(),k=a.getUTCFullYear(),l=a.getUTCSeconds(),m=0):(b=a.getDate(),c=a.getDay(),e=a.getMilliseconds(),f=a.getHours(),h=a.getMonth(),i=a.getMinutes(),k=a.getFullYear(),l=a.getSeconds(),m=a.getTimezoneOffset()),n=A(e,3),o=n.substr(0,2),e=n.substr(0,1),r=0>k?0:1,g=f%12,p=h+1,j=12>f?0:1,q=A(k,5),t=(0>m?-m:m)/60>>0,s=0>=m?"+":"-",u=A(t,2),v=m%60,w=A(v,2);var B,C,D,E={d:b.toString(),dd:A(b,2),ddd:z.day.abbr[c],dddd:z.day.full[c],f:e,ff:o,fff:n,F:0===parseInt(e,10)?"":"."+e,FF:0===parseInt(o,10)?"":"."+o,FFF:0===parseInt(n,10)?"":"."+n,g:z.era.abbr[r],gg:z.era.full[r],h:g.toString(),hh:A(g,2),H:f.toString(),HH:A(f,2),j:A(c,3),K:y?"UTC":"Local",m:i.toString(),mm:A(i,2),M:p.toString(),MM:A(p,2),MMM:z.month.abbr[h],MMMM:z.month.full[h],s:l.toString(),ss:A(l,2),t:z.amPm.abbr[j],tt:z.amPm.full[j],y:q.substr(4),yy:q.substr(3),yyy:1e3>k?q.substr(2):k.toString(),yyyy:q.substr(1),yyyyy:q,z:s+t.toString(),zz:s+u,zzz:s+u+w,zzzz:s+u+":"+w},F="";for(B=0,C=x.length;C>B;B++)D=x[B],F+="pattern"===D.type?E[D.value]:D.value;return F},d.prototype.parse=function(a){var b=this._chunks,c=this.asUTC,e=d.names[this.locale],f=this._patternParserMap;f.ddd={type:"Array",value:e.day.abbr},f.dddd={type:"Array",value:e.day.full},f.g={type:"Array",value:e.era.abbr},f.gg={type:"Array",value:e.era.full},f.MMM={type:"Array",value:e.month.abbr},f.MMMM={type:"Array",value:e.month.full},f.t={type:"Array",value:e.amPm.abbr},f.tt={type:"Array",value:e.amPm.full};var g,h,i,j,k,l,m,n,o,p,q,r,s={};for(g=0,h=b.length,i=0,j=a.length;h>g&&j>i;g++)if(k=b[g],"text"===k.type)i+=k.value.length;else if(l=k.value,m=f[l],"Array"===m.type){for(n=m.value,q=0,r=n.length;r>q;q++)if(a.indexOf(n[q],i)===i){p=n[q],s[l]=p,i+=p.length;break}}else o=a.substr(i).match(m.value),o&&o.length>0&&(p=o[0],s[k.value]=p,i+=p.length);var t,u,v,w,x,y,z,A,B,C,D,E=new Date,F=E.getUTCFullYear();(u=s.yyyyy||s.yyyy||s.yyy)?u=parseInt(u,10):(u=s.yy)?(u=100*(F/100>>0)+parseInt(u,10),u>F&&(u-=100)):(u=s.y)?(u=10*(F/10>>0)+parseInt(u,10),u>F&&(u-=10)):u=0,v=(v=s.gg)?e.era.full.indexOf(v):(v=s.g)?e.era.abbr.indexOf(v):1,0===v&&(u*=-1),w=(w=s.MMMM)?parseInt(e.month.full.indexOf(w),10):(w=s.MMM)?parseInt(e.month.abbr.indexOf(w),10):(w=s.MM||s.M)?parseInt(w,10)-1:0,(x=s.j)?(x=parseInt(x,10),w=0):x=(x=s.dd||s.d)?parseInt(x,10):0,A=(A=s.HH||s.H)?parseInt(A,10):(z=s.hh||s.h)?(y=s.tt)?parseInt(z,10)+12*e.amPm.full.indexOf(y):(y=s.t)?parseInt(z,10)+12*e.amPm.abbr.indexOf(y):0:0,B=(B=s.mm||s.m)?parseInt(B,10):0,C=(C=s.ss||s.s)?parseInt(C,10):0,D=(D=s.fff||s.ff||s.f||s.FFF||s.F||s.F)?parseInt(D,10):0;var G=new Date;if(G.setUTCFullYear(u,w,x),t=s.zzzz||s.zzz||s.zz||s.z)if("Z"===t)G.setUTCHours(A,B,C,D);else{t=t.match(/^([\+\-])(\d{1,2})\:?(\d{0,2})$/);var H=60*parseInt(t[2],10);2===t.length&&(H+=parseInt(t[3],10)),t=("-"===t[1]?1:-1)*H,G.setUTCHours(A,B+t,C,D)}else c?G.setUTCHours(A,B,C,D):G.setHours(A,B,C,D);return G},d.prototype.toString=function(){var a,b,c,d=this._chunks,e="";for(a=0,b=d.length;b>a;a++)c=d[a],e+="pattern"===c.type?"{"+c.value+"}":c.value;return"[DateFormat "+e+"]"},"undefined"!=typeof c&&c.exports&&(c.exports=d)});