(function(e){function n(n){for(var a,o,s=n[0],u=n[1],i=n[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,o=1;o<t.length;o++){var s=t[o];0!==r[s]&&(a=!1)}a&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d7e6f":"50edaddd","chunk-33d18b1e":"7d35db82","chunk-3cfbdc6d":"5f6d3353","chunk-4a394468":"bd62f17e","chunk-680eb430":"9f18d32b","chunk-1166e09c":"857ff901","chunk-1199b49e":"76ce2814","chunk-1a3fa292":"2e422702","chunk-5092664c":"aaad50c1","chunk-5ed2f5c6":"0f45eb74","chunk-6e868b20":"a76d3e21","chunk-0365bc82":"bb365fcb","chunk-497fb0b8":"72d05122","chunk-6630a621":"8a871a36","chunk-6d67553c":"a5c1ddb3","chunk-e7a9d8ba":"885bf808","chunk-265e93d4":"4de92287"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-33d18b1e":1,"chunk-3cfbdc6d":1,"chunk-1199b49e":1,"chunk-1a3fa292":1,"chunk-5092664c":1,"chunk-5ed2f5c6":1,"chunk-0365bc82":1,"chunk-497fb0b8":1,"chunk-6630a621":1,"chunk-6d67553c":1,"chunk-e7a9d8ba":1,"chunk-265e93d4":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0d7e6f":"31d6cfe0","chunk-33d18b1e":"bdb9dff8","chunk-3cfbdc6d":"d8e9abca","chunk-4a394468":"31d6cfe0","chunk-680eb430":"31d6cfe0","chunk-1166e09c":"31d6cfe0","chunk-1199b49e":"8d97a7f6","chunk-1a3fa292":"fad1aab8","chunk-5092664c":"769ed611","chunk-5ed2f5c6":"7b9fc61c","chunk-6e868b20":"31d6cfe0","chunk-0365bc82":"6e89e41a","chunk-497fb0b8":"effd1327","chunk-6630a621":"4eeff5d9","chunk-6d67553c":"27ced92e","chunk-e7a9d8ba":"e1df1b84","chunk-265e93d4":"0aae291b"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===a||f===r))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],f=i.getAttribute("data-href");if(f===a||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],l.parentNode.removeChild(l),t(c)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(e);var d=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3ea0":function(e,n,t){"use strict";n["a"]={HOST:"http://localhost:4050",WS_HOST:"ws://localhost:4050"}},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},r=[],c={data:function(){return{}}},s=c,u=t("2877"),i=Object(u["a"])(s,o,r,!1,null,"431ddf88",null),f=i.exports,d=(t("d3b7"),t("8c4f")),l=d["a"].prototype.push;d["a"].prototype.push=function(e){return l.call(this,e).catch((function(e){return e}))},a["default"].use(d["a"]);var b=[{path:"/",name:"Login",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-e7a9d8ba")]).then(t.bind(null,"a55b"))}},{path:"/terminal",name:"Terminal",component:function(){return Promise.all([t.e("chunk-33d18b1e"),t.e("chunk-3cfbdc6d")]).then(t.bind(null,"61b1"))},children:[{path:"/terminal/console",name:"Console",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-5092664c")]).then(t.bind(null,"bc2d"))}},{path:"/terminal/file",name:"FileManagement",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-6e868b20"),t.e("chunk-497fb0b8")]).then(t.bind(null,"cc07"))}},{path:"/terminal/monitor",name:"Monitor",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-5ed2f5c6")]).then(t.bind(null,"a373"))}}]},{path:"/content",name:"Content",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-33d18b1e"),t.e("chunk-1a3fa292")]).then(t.bind(null,"29ff"))},children:[{path:"/content",name:"Home",component:function(){return t.e("chunk-4a394468").then(t.bind(null,"bb51"))}},{path:"/content/image",name:"Image",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-6e868b20"),t.e("chunk-6630a621")]).then(t.bind(null,"feec"))}},{path:"/content/container_create",name:"Container",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-6e868b20"),t.e("chunk-0365bc82")]).then(t.bind(null,"acb8"))}},{path:"/content/container",name:"Container",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-6e868b20"),t.e("chunk-6d67553c")]).then(t.bind(null,"4cf2"))}},{path:"/content/volume",name:"Volume",component:function(){return Promise.all([t.e("chunk-6e868b20"),t.e("chunk-265e93d4")]).then(t.bind(null,"4732"))}},{path:"/content/network",name:"Network",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-1199b49e")]).then(t.bind(null,"c3c1"))}},{path:"/content/secret",name:"Secret",component:function(){return t.e("chunk-2d0d7e6f").then(t.bind(null,"7990"))}},{path:"/content/setting",name:"Setting",component:function(){return Promise.all([t.e("chunk-680eb430"),t.e("chunk-1166e09c")]).then(t.bind(null,"4ef5"))}}]}],m=new d["a"]({routes:b}),h=m,p=t("2f62"),j=(t("b680"),t("ac1f"),t("1276"),t("bc3a")),g=t.n(j),k=t("ed08"),v={state:{imageList:[],imageInfo:{Id:":",Parent:":",Author:"",Size:0,Architecture:"",Os:"",GraphDriver:{Name:""},Config:{},DockerVersion:""}},mutations:{setImageList:function(e,n){e.imageList=n},setImageInfo:function(e,n){e.imageInfo=n}},actions:{updateImageList:function(e){g.a.get("/api/image").then((function(n){for(var t=n.data,a=[],o=0;o<t.length;o++){var r=t[o],c=r.RepoTags;for(var s in c)a.push({key:c[s],rep:c[s],size:(r.Size/1e6).toFixed(2)+"M",imageLongId:Object(k["parseId"])(r.Id),imageId:r.Id.split(":")[1].substring(0,12),created:Object(k["formatDate"])(r.Created)});var u=a.sort((function(e,n){var t=e.created,a=n.created;return t===a?0:t>a?-1:1}));e.commit("setImageList",u)}}))},getImageInfo:function(e,n){var t=n.imageId;g.a.get("/api/image/".concat(t)).then((function(n){e.commit("setImageInfo",n.data)}))},removeImage:function(){}}},y=v,w=(t("2ca0"),{created:"已创建",running:"运行中",paused:"暂停中",restarting:"重启中",exited:"已停止",destroyed:"已销毁"}),x={state:{containerList:[],createContainerStore:{maxRestartCount:0,cpuCoreLimit:0,memoryLimit:0,envList:[],mountDirList:[],readonly:!1,portMapping:[]},containerInfo:{HostConfig:{},State:{Status:""}}},mutations:{setContainerList:function(e,n){e.containerList=n},setContainerInfo:function(e,n){e.containerInfo=n}},actions:{updateContainerInfo:function(e,n){n&&g.a.get("/api/container/".concat(n,"/info")).then((function(n){var t=n.data.Data;e.commit("setContainerInfo",t)}))},updateContainerList:function(e){g.a.get("/api/container").then((function(n){for(var t=n.data,a=[],o=0;o<t.length;o++){var r=t[o],c=r.Names;for(var s in c){var u=r.Image;u.startsWith("sha256")&&(u=u.substring(7,19)),a.push({key:Object(k["parseId"])(r.Id),containerLongId:r.Id,containerId:r.Id.substring(0,12),containerName:c[s].substring(1),imageName:u,created:Object(k["formatDate"])(r.Created),state:w[r.State]})}}var i=a.sort((function(e,n){var t=e.containerName.toLocaleLowerCase(),a=n.containerName.toLocaleLowerCase();return t===a?0:t>a?1:-1}));e.commit("setContainerList",i)}))}}},I={state:{currentMenuKey:[]},mutations:{setCurrentMenuKey:function(e,n){e.currentMenuKey=[n]}}},C={state:{list:[],info:{}},mutations:{setList:function(e,n){e.list=n},setInfo:function(e,n){e.info=n}},actions:{updateNetworkList:function(e){g.a.get("/api/network").then((function(n){for(var t=n.data.Data,a=[],o=0;o<t.length;o++){var r=t[o];a.push({Id:Object(k["parseId"])(r.Id),LongId:r.Id,Name:r.Name,Driver:r.Driver,Scope:r.Scope,Created:Object(k["formatUTCTime"])(r.Created)})}var c=a.sort((function(e,n){var t=e.Created,a=n.Created;return t===a?0:t>a?-1:1}));e.commit("setList",c)}))},updateNetworkInfo:function(e,n){n&&g.a.get("/api/network/".concat(n,"/info")).then((function(n){var t=n.data.Data;e.commit("setInfo",t)}))}}},L=C,S={state:{list:[],info:{}},mutations:{setList:function(e,n){e.list=n},setInfo:function(e,n){e.info=n}},actions:{updateVolumeList:function(e){g.a.get("/api/volume").then((function(n){var t=n.data.Data;if(t){for(var a=t.Volumes,o=[],r=0;r<a.length;r++){var c=a[r];o.push({key:c.Name,LongName:c.Name,Name:Object(k["parseId"])(c.Name),Driver:c.Driver,Scope:c.Scope,Created:Object(k["formatUTCTime"])(c.CreatedAt)})}var s=o.sort((function(e,n){var t=e.Created,a=n.Created;return t===a?0:t>a?-1:1}));e.commit("setList",s)}else e.commit("setList",[])}))},updateVolumeInfo:function(e,n){g.a.get("/api/volume/".concat(n,"/info")).then((function(n){var t=n.data,a=t.Code,o=t.Data;"OK"!==a?e.commit("setInfo",{}):e.commit("setInfo",o)}))}}},O=S,D=t("2ef0"),P=t.n(D),z={state:{info:{},dockerPlugins:{}},mutations:{setDockerPlugins:function(e,n){e.dockerPlugins=n},setInfo:function(e,n){e.info=n}},actions:{updateDockerInfo:function(e){g.a.get("/api/docker/info").then((function(n){var t=n.data,a=t.Data,o=t.Code;if("OK"===o){var r={Volume:[],Network:[],Log:[]},c=P.a.get(a,"Plugins",r);e.commit("setDockerPlugins",c),e.commit("setInfo",a)}}))}}},M=z;a["default"].use(p["a"]);var N=new p["a"].Store({modules:{image:y,container:x,menu:I,network:L,volume:O,dockerInfo:M}}),T=t("f23d"),_=(t("202f"),t("3ea0")),E=t("1232");g.a.defaults.baseURL=_["a"].HOST,g.a.interceptors.request.use((function(e){if("/api/system/login"===e.url)return e;if(localStorage.token){var n=localStorage.token,t=Object(E["a"])(n);return new Date(t.exp).getTime()<(new Date).getTime()?(localStorage.setItem("token",""),h.push("/").then(),Promise.reject()):(e.headers.Authorization=localStorage.token,e)}return h.push("/").then(),Promise.reject()})),g.a.interceptors.response.use((function(e){return e}),(function(e){if(403!==e.response.status)return Promise.resolve();console.log("接到到未授权的请求"),h.push("/").then()}));var H=g.a;a["default"].prototype.$lodash=P.a,a["default"].config.productionTip=!1,a["default"].prototype.$axios=H,a["default"].use(T["a"]),a["default"].directive("focus",{inserted:function(e){e.querySelector("input").focus()}}),new a["default"]({router:h,store:N,render:function(e){return e(f)}}).$mount("#app")},ed08:function(e,n,t){t("d3b7"),t("ac1f"),t("25f0"),t("3ca3"),t("5319"),t("ddb0"),t("2b3d"),e.exports={formatDate:function(e){var n=new Date(1e3*e),t=n.getFullYear()+"-",a=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=n.getDate()<10?"0"+n.getDate():n.getDate(),r=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",c=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",s=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return t+a+o+" "+r+c+s},formatUTCTime:function(e){var n=new Date(e),t=n.getFullYear()+"-",a=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=n.getDate()<10?"0"+n.getDate():n.getDate(),r=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",c=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",s=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return t+a+o+" "+r+c+s},nullToLine:function(e){return e||"-"},parseId:function(e){return e?e.replace("sha256:","").substring(0,12):"-"},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0,t="x"==e?n:3&n|8;return t.toString(16)}))},download:function(e,n){if(window.navigator&&window.navigator.msSaveOrOpenBlob){var t=new Blob([e],{type:"application/vnd.ms-excel"});window.navigator.msSaveOrOpenBlob(t,n)}else{var a=new Blob([e]),o=document.createElement("a"),r=window.URL.createObjectURL(a);o.href=r,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}}}}});
//# sourceMappingURL=app.07357667.js.map