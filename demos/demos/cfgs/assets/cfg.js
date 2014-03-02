!function(a){window.jQuery?a(jQuery):window.webshims&&webshims.ready("jquery",a)}(function(a){function b(b){return b.map(function(){var b=$.prop(this,"elements");return b?a.makeArray(b):this}).filter(":input").get()}function c(b){var c,e={};return a.each(b,function(b,f){c=e[f.name],e[f.name]=c===d?f:a.isArray(c)?c.concat(f):[c,f]}),e}var d,e=Array.prototype.push,f=/^(?:radio|checkbox)$/i,g=/\+/g,h=/^(?:option|select-one|select-multiple)$/i,i=/^(?:button|color|date|datetime|datetime-local|email|hidden|month|number|password|range|reset|search|submit|tel|text|textarea|time|url|week)$/i;a.fn.deserialize=function(j,k){var l,m,n=b(this),o=[];if(!j||!n.length)return this;if(a.isArray(j))o=j;else if(a.isPlainObject(j)){var p,q;for(p in j)a.isArray(q=j[p])?e.apply(o,a.map(q,function(a){return{name:p,value:a}})):e.call(o,{name:p,value:q})}else if("string"==typeof j){var r;for(j=j.split("&"),l=0,m=j.length;m>l;l++)r=j[l].split("="),e.call(o,{name:decodeURIComponent(r[0]),value:decodeURIComponent(r[1].replace(g,"%20"))})}if(!(m=o.length))return this;var s,t,u,v,w,x,y,q,z=a.noop,A=a.noop,B={};for(k=k||{},n=c(n),a.isFunction(k)?A=k:(z=a.isFunction(k.change)?k.change:z,A=a.isFunction(k.complete)?k.complete:A),l=0;m>l;l++)if(s=o[l],w=s.name,q=s.value,(t=n[w])&&(y=(v=t.length)?t[0]:t,y=(y.type||y.nodeName).toLowerCase(),x=null,i.test(y)?(v&&(u=B[w],t=t[B[w]=u==d?0:++u]),z.call(t,$.prop(t,"value",q))):f.test(y)?x="checked":h.test(y)&&(x="selected"),x))for(v||(t=[t],v=1),u=0;v>u;u++)s=t[u],s.value==q&&z.call(s,$.prop(s,x,!0)&&q);return A.call(this),this}}),webshims.ready("jquery",function(a){a(function(a){a("#code").each(function(){var b,c,d,e=a(this),f=a("#cfg-feature").val()||"forms-ext",g=function(){c=(a("#config-type").val()||a("#config-type option").eq(0).val()).split("-"),d=a("#markup-format").val()},h=function(){window.Prism&&Prism.highlightElement(this)},i=/([A-Z])/g,j=function(a,b){return"-"+b.toLowerCase()},k=function(b){var d,e="";return"markup"==c[0]?(b.classes.length&&(b.attr["class"]=b.classes.join(" ")),a.isEmptyObject(b.data)||("json"==c[1]?b.attr["data-"+b.cfgtype]=b.data:a.each(b.data,function(a,c){b.attr["data-"+b.cfgtype+"-"+a.replace(i,j)]=c}))):(d={},b.classes.length&&(b.data.classes=b.classes.join(" ")),a.isEmptyObject(b.data)||(d["type"==c[1]?b.cfgtype:"widgets"]=b.data,e+="<script>\n",e+="//configure before calling webshims.polyfill\n",e+='webshims.setOptions("'+f+'", ',e+=JSON.stringify(d,null,"	")+");",e+="forms-ext"==f?'\n\n//webshims.polyfill("forms forms-ext");':'\n\n//webshims.polyfill("'+f+'");',e+="\n</script>\n")),e},l=function(b){var c=["<input"];return a.each(b.attr,function(a,b){"object"==typeof b?c.push(a+"='"+JSON.stringify(b,null,"verbose"==d?"	":null)+"'"):(a.indexOf("data-")<0&&"boolean"==typeof b&&(b=""),c.push(a+'="'+b+'"'))}),c.push("/>"),b.attr.list&&c.push("\n"+a("#"+b.attr.list).prop("outerHTML")),c.join("verbose"==d?"\n ":" ")},m=function(c){var d="\n";c?b=c:c=b,c=a.extend(!0,{},c),d+=k(c),d+="\n",d+=l(c),d+="\n",a("code",e).text(d).each(h)};g(),a(this).on("change",function(){g(),m()}),a(this).on("render",function(a,b){m(b)})}),a("#dir").each(function(){var b=function(){a("#output").attr("dir",a(this).val()),a("form.input-widget fieldset").eq(0).trigger("change")};a(this).on("change",b).each(b)}),a("#widget-scale").each(function(){var b=a('<div hidden="" />').appendTo("body").get(0),c=function(){var c=a.prop(this,"value"),d="x<style>#output .ws-popover, #output .input-picker, #output .ws-range, body >  .ws-popover { font-size:"+c+"px;}</style>";b.innerHTML=d,a(document).trigger("updatelayout")};a(this).on("input",c).each(c)}),a("form.input-widget").each(function(){var b,c=a(this),d=c.data("type"),e=function(){var e=c.serialize(),f={},g=a("<input />");e!==b&&(b=e,d&&g.attr("type",d),a("fieldset[data-method]",c).each(function(){var b={},c=a(this).data("method");a(a.prop(this,"elements")).filter("[name]").each(function(){var c,d;if(!a(this).is(":invalid")&&!a(this).is(":disabled")){if(d=a.prop(this,"name"),"checkbox"==a.prop(this,"type")){if(c=a.prop(this,"checked"),c==a.prop(this,"defaultChecked"))return}else{if(c=a(this).val(),!c||!a(this).is(".init-value")&&(c===a.prop(this,"defaultValue")||a("option:checked",this).prop("defaultSelected")))return;try{c=JSON.parse(c)}catch(e){}}"object"==typeof b[d]&&"object"==typeof c?a.extend(!0,b[d],c):b[d]=c}}),g[c](a(this).data("name")||b,b),"data"!=c||d||(d=a(this).data("name")),"prop"==c&&(c="attr"),f[c]?a.extend(f[c],b):f[c]=b}),f.classes=[],a("fieldset[data-classes] input[name]:checked",c).each(function(){f.classes.push(a.prop(this,"name"))}),a("#output").html('<label for="'+d+'">'+d+" label</label>").appendPolyfill(g.addClass("form-control "+f.classes.join(" ")).prop("id",d)),f.attr.type||(f.attr.type=d),f.cfgtype=d,a("#code").trigger("render",[f]),location.replace&&location.replace("#"+e))};a("> fieldset",c).on("change input",function(){var a;return function(b){clearTimeout(a),a=setTimeout(e,"input"==b.type?200:9)}}()),c.on("submit",!1),c.deserialize&&c.deserialize(location.hash.substr(1)),e()}),function(){var b=function(a,b){return a.split(" ").map(function(a){return b.prop(a)})},c=function(b){return a.prop(b,"checked")};a("[data-needs]").each(function(){var d=a(this),e=(d.jProp("form"),b(d.data("needs"),d.jProp("form"))),f=function(){d.prop("disabled",!e.some(c))};d.each(f),a(e).on("change",f)}),a("[data-excludes]").each(function(){var d=a(this),e=b(d.data("excludes"),d.jProp("form")),f=function(){d.prop("disabled",e.some(c))},g=function(){var b=a.data(this,"excludeFlags")||a.data(this,"excludeFlags",{});b[d.prop("name")]=!0},h=function(){var b=a.data(this,"excludeFlags");b&&delete b[d.prop("name")],(!b||a.isEmptyObject(b))&&a.prop(this,"disabled",!1)};d.each(f).on("change",function(){a(this).prop("checked")?(a(e).prop("disabled",!0),a(e).each(g)):a(e).each(h)}),a(e).on("change",f),f()})}()})});