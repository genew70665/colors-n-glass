//tealium universal tag - utag.143 ut4.0.202210041637, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"ga_property_heartbeat":"tid","page_name":"dt","heartbeat_clean_path":"dp","heartbeat_hostname":"dh","event_name":"cd1","ordered_cookie_options":"cd2,cd3,cd4","heartbeat_cd5":"cd5","heartbeat_cd6":"cd6","heartbeat_cd7":"cd7","tealium_profile":"cd8","heartbeat_cd9":"cd9","heartbeat_cid":"cid","heartbeat_event_type":"t","heartbeat_cb":"a,z","_sm_143_15":"v,aip"};u.extend=[function(a,b){try{b['_sm_143_15']="1";}catch(e){utag.DB(e);}},function(a,b,c,d,e,f,g){if(1){d=b['ut.env'];if(typeof d=='undefined')return;c=[{'prod':'UA-60717701-17'},{'qa':'UA-60717701-16'},{'dev':'UA-60717701-16'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['ga_property_heartbeat']=c[e][f];m=true};};if(m)break};if(!m)b['ga_property_heartbeat']='UA-60717701-16';}},function(a,b){try{if(1){function validCat(val){if(val){if(parseInt(val)===0||parseInt(val)===1)return true;}else return false;}
function sortOptions(multi){if(multi&&multi!=="false"){var parts=multi.split('|'),cat6=false,cat7=false,cat8=false;for(var m=0;m<parts.length;m+=1){var catDat=parts[m].split(':');if(catDat[0]==="c7")cat6=catDat[1];else if(catDat[0]==="c8")cat7=catDat[1];else if(catDat[0]==="c9")cat8=catDat[1];}
var newVal='0:0'
+(validCat(cat6)?('|c7:'+cat6):'')
+(validCat(cat7)?('|c8:'+cat7):'')
+(validCat(cat8)?('|c9:'+cat8):'');return newVal;}
else return multi;}
try{var multiCook=utag.loader.RC('OPTOUTMULTI');if(multiCook){b["ordered_cookie_options"]=sortOptions(decodeURIComponent(multiCook));}else{b["ordered_cookie_options"]='na';}
if(/&cd2.*c7\:0\&|&cd2.*c7\:0$/gm.test(b["ordered_cookie_options"])){return false;}}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){function buildCleanUrl(which){var cUrl=document.location.hostname+(document.location.pathname.split('\?'))[0],cRef=document.referrer,cPath=(document.location.pathname.split('\?'))[0];var pathChecks=['/user-access/users/user-details/','user-access/users/','products-services/industry-collection/','orders/contracts/','orders/subscriptions/','/users/','/user/','/profile/','/emailaddress','/emailAddress'],allowList=['user-access/users/user-list'],urls=[cUrl,cRef,cPath];for(var y=0;y<urls.length;y+=1){for(var x=0;x<pathChecks.length;x+=1){if(urls[y].indexOf(pathChecks[x])>-1&&urls[y].indexOf(allowList[x])<0){var splitO=urls[y].split(pathChecks[x]);urls[y]=splitO[0]+pathChecks[x]+'-masked-';break;}}}
var cleanUrlOfUniqueness=function(originalUrl){try{var newUrl=originalUrl;if(strChk(newUrl,'/account/resetpassword')){newUrl=newUrl.replace(new RegExp("/account/resetpassword.*","gm"),"/account/resetpassword");}
if(strChk(newUrl,'/user/verifyemail')){newUrl=newUrl.replace(new RegExp("/user/verifyemail.*","gm"),"/user/verifyemail");}
if(strChk(newUrl,'/authenticate/otp')){newUrl=newUrl.replace(new RegExp("/authenticate/otp.*","gm"),"/authenticate/otp");}
if(strChk(newUrl,'/authenticate/alternate')){newUrl=newUrl.replace(new RegExp("/authenticate/alternate.*","gm"),"/authenticate/alternate");}
if(strChk(newUrl,'/provisionregister')){newUrl=newUrl.replace(new RegExp("/provisionregister.*","gm"),"/provisionregister");}
if(strChk(newUrl,'/users/')&&strChk(newUrl,'/view')){newUrl=newUrl.replace(new RegExp("/users/.*/view.*","gm"),"/users/user/view/profile");}
if(strChk(newUrl,'/user-access/user/')){newUrl=newUrl.replace(new RegExp("/user-access/user/.*","gm"),"/user-access/user/");}
if(strChk(newUrl,'/products-services/industry-collection/')){newUrl=newUrl.replace(new RegExp("/products-services/industry-collection/.*","gm"),"/products-services/industry-collection/");}
if(strChk(newUrl,'/orders/contracts/')){newUrl=newUrl.replace(new RegExp("/orders/contracts/.*","gm"),"/orders/contracts/");}
if(strChk(newUrl,'/orders/subscriptions/')){newUrl=newUrl.replace(new RegExp("/orders/subscriptions/.*","gm"),"/orders/subscriptions/");}
return newUrl;}catch(err){return newUrl;}};var url=cleanUrlOfUniqueness(urls[0]);switch(which){case'url':url=cleanUrlOfUniqueness(urls[0]);break;case'referrer':url=cleanUrlOfUniqueness(urls[1]);break;case'path':url=cleanUrlOfUniqueness(urls[2]);break;}
return url;}
try{b["heartbeat_clean_path"]=buildCleanUrl('path');b["heartbeat_clean_url"]=buildCleanUrl('url');}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(document.querySelectorAll('.adsk-gdpr-footer-wrapper:not(.adsk-gdpr-footer-wrapper--mirror)').length>0){b["heartbeat_cd5"]="true";b["heartbeat_cd6"]="true";b["heartbeat_cd7"]="true";}else{b["heartbeat_cd5"]="false";b["heartbeat_cd6"]="false";b["heartbeat_cd7"]="false";}
var iframeContextDetected=(window.top!==window.self)?true:false;if(iframeContextDetected){b["heartbeat_cd3"]="iframe-child";}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['heartbeat_cd9']=b['cp.OPTOUTMULTI_GEO'];try{b['heartbeat_cd9']=b['heartbeat_cd9']||window.adskGdpr&&window.adskGdpr.optGeoUsed}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['page_name']=='undefined'){try{b['page_name']=utag.data.page_name||'no utag.data.page_name'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['heartbeat_cb']=(new Date()).getTime()}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){b['heartbeat_cid']=b['anonBaseGuid']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){b['heartbeat_event_type']='pageview'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['heartbeat_hostname']=document.location.hostname}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){window.analytics=window.analytics||{};window.analytics.context=window.analytics.context||{};window.analytics.context.heartbeatExecuted=!!window.analytics.context.heartbeatExecuted;if(window.analytics.context.heartbeatExecuted){return false;}
window.analytics.context.heartbeatExecuted=true;}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"//google-analytics.com/collect?","qsp_delim":"&"
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];c.push(e[f]+"="+b[d]);}}}
u.loader_cb=function(){u.initialized=true;};u.loader({"type":"img","src":u.data.base_url+c.join(u.data.qsp_delim)});}};utag.o[loader].loader.LOAD(id);})("143","autodesk.micro-basic");}catch(error){utag.DB(error);}
