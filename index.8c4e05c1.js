var t,e,n,r,i,o,a,s,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function f(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var c={};t=void 0!==l?l:"undefined"!=typeof window?window:c,e=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// REPORT: Default Settings: begin
var e,n={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},i=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},o=function(e){return e||(e="head"),null!==t.document[e]||(i('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},a=function(e,n){// check doc head
if(!o("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var r=t.document.createElement("style");r.id=n,r.innerHTML=e(),t.document.head.appendChild(r)}},s=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=s(t[r],n[r]):t[r]=n[r])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},f=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},c=function(i,a,f,c,u,h){// check doc body
if(!o("body"))return!1;e||p.Report.init({});// create a backup for settings
var m,d,g,b,y,x,w,k,v={};// check callbackOrOptions and options: begin
if("object"==typeof u&&!Array.isArray(u)||"object"==typeof h&&!Array.isArray(h)){// new options
var E={};"object"==typeof u?E=u:"object"==typeof h&&(E=h),// extend the backup settings with new settings
v=s(!0,e,{}),// extend new settings with the options
e=s(!0,e,E)}// check callbackOrOptions and callback: end
// report type
var R=e[i.toLocaleLowerCase("en")];"string"!=typeof a&&(a="Notiflix "+i),"string"!=typeof f&&(i===n.Success?f='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':i===n.Failure?f='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':i===n.Warning?f='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':i===n.Info&&(f='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof c&&(c="Okay"),e.plainText&&(a=l(a),f=l(f),c=l(c)),!e.plainText&&(a.length>e.titleMaxLength&&(a="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',c="Okay"),f.length>e.messageMaxLength&&(a="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',c="Okay"),c.length>e.buttonMaxLength&&(a="Possible HTML Tags Error",f='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',c="Okay")),a.length>e.titleMaxLength&&(a=a.substring(0,e.titleMaxLength)+"..."),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),c.length>e.buttonMaxLength&&(c=c.substring(0,e.buttonMaxLength)+"..."),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// report wrap: begin
var N=t.document.createElement("div");N.id=r.ID,N.className=e.className,N.style.zIndex=e.zindex,N.style.borderRadius=e.borderRadius,N.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),// rtl: end
// position: begin
N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center";// position: end
// overlay: begin
var S="",A=!0===e.backOverlayClickToClose;e.backOverlay&&(S='<div class="'+e.className+"-overlay"+(e.cssAnimation?" nx-with-animation":"")+(A?" nx-report-click-to-close":"")+'" style="background:'+(R.backOverlayColor||e.backOverlayColor)+";animation-duration:"+e.cssAnimationDuration+'ms;"></div>');// overlay: end
// svg icon: begin
var O="";// if there is no report element
if(i===n.Success?(m=e.svgSize,d=R.svgColor,m||(m="110px"),d||(d="#32c682"),O='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+m+'" height="'+m+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):i===n.Failure?(g=e.svgSize,b=R.svgColor,g||(g="110px"),b||(b="#ff5549"),O='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+g+'" height="'+g+'" fill="'+b+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):i===n.Warning?(y=e.svgSize,x=R.svgColor,y||(y="110px"),x||(x="#eebf31"),O='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+y+'" height="'+y+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):i===n.Info&&(w=e.svgSize,k=R.svgColor,w||(w="110px"),k||(k="#26c0d3"),O='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+w+'" height="'+w+'" fill="'+k+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'),// svg icon: end
N.innerHTML=S+'<div class="'+e.className+"-content"+(e.cssAnimation?" nx-with-animation ":"")+" nx-"+e.cssAnimationStyle+'" style="width:'+e.width+"; background:"+e.backgroundColor+"; animation-duration:"+e.cssAnimationDuration+'ms;"><div style="width:'+e.svgSize+"; height:"+e.svgSize+';" class="'+e.className+'-icon">'+O+'</div><h5 class="'+e.className+'-title" style="font-weight:500; font-size:'+e.titleFontSize+"; color:"+R.titleColor+';">'+a+'</h5><p class="'+e.className+'-message" style="font-size:'+e.messageFontSize+"; color:"+R.messageColor+';">'+f+'</p><a id="NXReportButton" class="'+e.className+'-button" style="font-weight:500; font-size:'+e.buttonFontSize+"; background:"+R.buttonBackground+"; color:"+R.buttonColor+';">'+c+"</a></div>",!t.document.getElementById(N.id)){// append
t.document.body.appendChild(N);// report remove: begin
var B=function(){var n=t.document.getElementById(N.id);n.classList.add("nx-remove");var r=setTimeout(function(){null!==n.parentNode&&n.parentNode.removeChild(n),clearTimeout(r)},e.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",function(){"function"==typeof u&&u(),// if callback: end
// remove report
B()}),S&&A&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",function(){B()});// overlay click to close: end
}// report wrap: end
// extend new settings with the backup settings
e=s(!0,e,v)},p={Report:{// Init
init:function(t){// extend options
e=s(!0,r,t),// internal css if exist
a(f,"NotiflixReportInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return i("You have to initialize the Report module before call Merge function."),!1;e=s(!0,e,t)},// Success
success:function(t,e,r,i,o){c(n.Success,t,e,r,i,o)},// Failure
failure:function(t,e,r,i,o){c(n.Failure,t,e,r,i,o)},// Warning
warning:function(t,e,r,i,o){c(n.Warning,t,e,r,i,o)},// Info
info:function(t,e,r,i,o){c(n.Info,t,e,r,i,o)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Report:p.Report}):{Report:p.Report}},"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof c?c=e(t):t.Notiflix=e(t);function p(t,e){return function(){return t.apply(e,arguments)}}!function(){function t(){return Math.random().toString(36).substring(2,10)}class e{constructor(e){if(this.id=e.id&&""!==e.id?e.id:t(),this.label=e.label||"",this.selectAll=void 0!==e.selectAll&&e.selectAll,this.selectAllText=e.selectAllText||"Select All",this.closable=e.closable||"off",this.options=[],e.options)for(let t of e.options)this.options.push(new Option(t))}}class Option{constructor(e){this.id=e.id&&""!==e.id?e.id:t(),this.value=void 0===e.value?e.text:e.value,this.text=e.text||"",this.html=e.html||"",this.selected=void 0!==e.selected&&e.selected,this.display=void 0===e.display||e.display,this.disabled=void 0!==e.disabled&&e.disabled,this.mandatory=void 0!==e.mandatory&&e.mandatory,this.placeholder=void 0!==e.placeholder&&e.placeholder,this.class=e.class||"",this.style=e.style||"",this.data=e.data||{}}}}();// utils is a library of generic helper functions non-specific to axios
const{toString:u}=Object.prototype,{getPrototypeOf:h}=Object,m=(n=Object.create(null),t=>{let e=u.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())}),d=t=>(t=t.toLowerCase(),e=>m(e)===t),g=t=>e=>typeof e===t,{isArray:b}=Array,y=g("undefined"),x=d("ArrayBuffer"),w=g("string"),k=g("function"),v=g("number"),E=t=>null!==t&&"object"==typeof t,R=t=>{if("object"!==m(t))return!1;let e=h(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},N=d("Date"),S=d("File"),A=d("Blob"),O=d("FileList"),B=d("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function T(t,e,{allOwnKeys:n=!1}={}){let r,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),b(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{let i;// Iterate over object keys
let o=n?Object.getOwnPropertyNames(t):Object.keys(t),a=o.length;for(r=0;r<a;r++)i=o[r],e.call(null,t[i],i,t)}}}function C(t,e){let n;e=e.toLowerCase();let r=Object.keys(t),i=r.length;for(;i-- >0;)if(e===(n=r[i]).toLowerCase())return n;return null}const L=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:l,I=t=>!y(t)&&t!==L,U=(r="undefined"!=typeof Uint8Array&&h(Uint8Array),t=>r&&t instanceof r),z=d("HTMLFormElement"),j=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),F=d("RegExp"),P=(t,e)=>{let n=Object.getOwnPropertyDescriptors(t),r={};T(n,(n,i)=>{let o;!1!==(o=e(n,i,t))&&(r[i]=o||n)}),Object.defineProperties(t,r)},_="abcdefghijklmnopqrstuvwxyz",M="0123456789",X={DIGIT:M,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+M},D=d("AsyncFunction");var W={isArray:b,isArrayBuffer:x,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!y(t)&&null!==t.constructor&&!y(t.constructor)&&k(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||k(t.append)&&("formdata"===(e=m(t))||// detect form-data instance
"object"===e&&k(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&x(t.buffer)},isString:w,isNumber:v,isBoolean:t=>!0===t||!1===t,isObject:E,isPlainObject:R,isUndefined:y,isDate:N,isFile:S,isBlob:A,isRegExp:F,isFunction:k,isStream:t=>E(t)&&k(t.pipe),isURLSearchParams:B,isTypedArray:U,isFileList:O,forEach:T,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=I(this)&&this||{},n={},r=(r,i)=>{let o=e&&C(n,i)||i;R(n[o])&&R(r)?n[o]=t(n[o],r):R(r)?n[o]=t({},r):b(r)?n[o]=r.slice():n[o]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],r);return n},extend:(t,e,n,{allOwnKeys:r}={})=>(T(e,(e,r)=>{n&&k(e)?t[r]=p(e,n):t[r]=e},{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,o,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)a=i[o],(!r||r(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==n&&h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype)return e},kindOf:m,kindOfTest:d,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;let r=t.indexOf(e,n);return -1!==r&&r===n},toArray:t=>{if(!t)return null;if(b(t))return t;let e=t.length;if(!v(e))return null;let n=Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{let n;let r=t&&t[Symbol.iterator],i=r.call(t);for(;(n=i.next())&&!n.done;){let r=n.value;e.call(t,r[0],r[1])}},matchAll:(t,e)=>{let n;let r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:z,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:P,freezeMethods:t=>{P(t,(e,n)=>{// skip restricted props in strict mode
if(k(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let r=t[n];if(k(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,e)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(b(t)?t:String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:C,global:L,isContextDefined:I,ALPHABET:X,generateString:(t=16,e=X.ALPHA_DIGIT)=>{let n="",{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&k(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),n=(t,r)=>{if(E(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;let i=b(t)?[]:{};return T(t,(t,e)=>{let o=n(t,r+1);y(o)||(i[e]=o)}),e[r]=void 0,i}}return t};return n(t,0)},isAsyncFn:D,isThenable:t=>t&&(E(t)||k(t))&&k(t.then)&&k(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function $(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}W.inherits($,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:W.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=$.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{H[t]={value:t}}),Object.defineProperties($,H),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
$.from=(t,e,n,r,i,o)=>{let a=Object.create(q);return W.toFlatObject(t,a,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),$.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,o&&Object.assign(a,o),a},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,n=t.length,r=n%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,a=n-r;o<a;o+=16383// must be multiple of 3
)i.push(function(t,e,n){for(var r,i=[],o=e;o<n;o+=3)i.push(J[(r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+J[r>>12&63]+J[r>>6&63]+J[63&r]);return i.join("")}(t,o,o+16383>a?a:o+16383));return 1===r?i.push(J[(e=t[n-1])>>2]+J[e<<4&63]+"=="):2===r&&i.push(J[(e=(t[n-2]<<8)+t[n-1])>>10]+J[e>>4&63]+J[e<<2&63]+"="),i.join("")};for(var J=[],V=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y=0,Q=G.length;Y<Q;++Y)J[Y]=G[Y],V[G.charCodeAt(Y)]=Y;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
V["-".charCodeAt(0)]=62,V["_".charCodeAt(0)]=63,a=function(t,e,n,r,i){var o,a,s=8*i-r-1,l=(1<<s)-1,f=l>>1,c=-7,p=n?i-1:0,u=n?-1:1,h=t[e+p];for(p+=u,o=h&(1<<-c)-1,h>>=-c,c+=s;c>0;o=256*o+t[e+p],p+=u,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=r;c>0;a=256*a+t[e+p],p+=u,c-=8);if(0===o)o=1-f;else{if(o===l)return a?NaN:(h?-1:1)*(1/0);a+=Math.pow(2,r),o-=f}return(h?-1:1)*a*Math.pow(2,o-r)},s=function(t,e,n,r,i,o){var a,s,l,f=8*o-i-1,c=(1<<f)-1,p=c>>1,u=23===i?5960464477539062e-23:0,h=r?0:o-1,m=r?1:-1,d=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+p>=1?e+=u/l:e+=u*Math.pow(2,1-p),e*l>=2&&(a++,l/=2),a+p>=c?(s=0,a=c):a+p>=1?(s=(e*l-1)*Math.pow(2,i),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,i),a=0));i>=8;t[n+h]=255&s,h+=m,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[n+h]=255&a,h+=m,a/=256,f-=8);t[n+h-m]|=128*d};const Z="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function tt(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,te.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function te(t,e,n){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return ti(t)}return tn(t,e,n)}function tn(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!te.isEncoding(e))throw TypeError("Unknown encoding: "+e);let n=0|tl(t,e),r=tt(n),i=r.write(t,e);return i!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(r=r.slice(0,i)),r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tC(t,Uint8Array)){let e=new Uint8Array(t);return ta(e.buffer,e.byteOffset,e.byteLength)}return to(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tC(t,ArrayBuffer)||t&&tC(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tC(t,SharedArrayBuffer)||t&&tC(t.buffer,SharedArrayBuffer)))return ta(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return te.from(r,e,n);let i=function(t){var e;if(te.isBuffer(t)){let e=0|ts(t.length),n=tt(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?tt(0):to(t):"Buffer"===t.type&&Array.isArray(t.data)?to(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return te.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tr(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function ti(t){return tr(t),tt(t<0?0:0|ts(t))}function to(t){let e=t.length<0?0:0|ts(t.length),n=tt(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function ta(t,e,n){let r;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),te.prototype),r)}function ts(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tl(t,e){if(te.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tC(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return tO(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return tB(t).length;default:if(i)return r?-1:tO(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function tf(t,e,n){let r=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=tL[t[r]];return i}(this,e,n);case"utf8":case"utf-8":return th(this,e,n);case"ascii":return function(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}(this,e,n);case"latin1":case"binary":return function(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}(this,e,n);case"base64":var i,a;return i=e,a=n,0===i&&a===this.length?o(this):o(this.slice(i,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){let r=t.slice(e,n),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}(this,e,n);default:if(r)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function tc(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tp(t,e,n,r,i){var o;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(o=n=+n// Coerce to Number.
)!=o&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return -1;n=t.length-1}else if(n<0){if(!i)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=te.from(e,r)),te.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tu(t,e,n,r,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):tu(t,[e],n,r,i);throw TypeError("val must be string, number or Buffer")}function tu(t,e,n,r,i){let o,a=1,s=t.length,l=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,n/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){let r=-1;for(o=n;o<s;o++)if(f(t,o)===f(e,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===l)return r*a}else -1!==r&&(o-=o-r),r=-1}else for(n+l>s&&(n=s-l),o=n;o>=0;o--){let n=!0;for(let r=0;r<l;r++)if(f(t,o+r)!==f(e,r)){n=!1;break}if(n)return o}return -1}function th(t,e,n){n=Math.min(t.length,n);let r=[],i=e;for(;i<n;){let e=t[i],o=null,a=e>239?4:e>223?3:e>191?2:1;if(i+a<=n){let n,r,s,l;switch(a){case 1:e<128&&(o=e);break;case 2:(192&(n=t[i+1]))==128&&(l=(31&e)<<6|63&n)>127&&(o=l);break;case 3:n=t[i+1],r=t[i+2],(192&n)==128&&(192&r)==128&&(l=(15&e)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:n=t[i+1],r=t[i+2],s=t[i+3],(192&n)==128&&(192&r)==128&&(192&s)==128&&(l=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,a=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tm(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function td(t,e,n,r,i,o){if(!te.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(n+r>t.length)throw RangeError("Index out of range")}function tg(t,e,n,r,i){tR(e,r,i,t,n,7);let o=Number(e&BigInt(4294967295));t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,n}function tb(t,e,n,r,i){tR(e,r,i,t,n,7);let o=Number(e&BigInt(4294967295));t[n+7]=o,o>>=8,t[n+6]=o,o>>=8,t[n+5]=o,o>>=8,t[n+4]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a>>=8,t[n+2]=a,a>>=8,t[n+1]=a,a>>=8,t[n]=a,n+8}function ty(t,e,n,r,i,o){if(n+r>t.length||n<0)throw RangeError("Index out of range")}function tx(t,e,n,r,i){return e=+e,n>>>=0,i||ty(t,e,n,4,34028234663852886e22,-34028234663852886e22),s(t,e,n,r,23,4),n+4}function tw(t,e,n,r,i){return e=+e,n>>>=0,i||ty(t,e,n,8,17976931348623157e292,-17976931348623157e292),s(t,e,n,r,52,8),n+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */te.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),te.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(te.prototype,"parent",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.buffer}}),Object.defineProperty(te.prototype,"offset",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.byteOffset}}),te.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/te.from=function(t,e,n){return tn(t,e,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(te.prototype,Uint8Array.prototype),Object.setPrototypeOf(te,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/te.alloc=function(t,e,n){return(tr(t),t<=0)?tt(t):void 0!==e?"string"==typeof n?tt(t).fill(e,n):tt(t).fill(e):tt(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */te.allocUnsafe=function(t){return ti(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */te.allocUnsafeSlow=function(t){return ti(t)},te.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==te.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},te.compare=function(t,e){if(tC(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),tC(e,Uint8Array)&&(e=te.from(e,e.offset,e.byteLength)),!te.isBuffer(t)||!te.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},te.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},te.concat=function(t,e){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return te.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;let r=te.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){let e=t[n];if(tC(e,Uint8Array))i+e.length>r.length?(te.isBuffer(e)||(e=te.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else if(te.isBuffer(e))e.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return r},te.byteLength=tl,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
te.prototype._isBuffer=!0,te.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tc(this,e,e+1);return this},te.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tc(this,e,e+3),tc(this,e+1,e+2);return this},te.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tc(this,e,e+7),tc(this,e+1,e+6),tc(this,e+2,e+5),tc(this,e+3,e+4);return this},te.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?th(this,0,t):tf.apply(this,arguments)},te.prototype.toLocaleString=te.prototype.toString,te.prototype.equals=function(t){if(!te.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===te.compare(this,t)},te.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Z&&(te.prototype[Z]=te.prototype.inspect),te.prototype.compare=function(t,e,n,r,i){if(tC(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),!te.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;let o=i-r,a=n-e,s=Math.min(o,a),l=this.slice(r,i),f=t.slice(e,n);for(let t=0;t<s;++t)if(l[t]!==f[t]){o=l[t],a=f[t];break}return o<a?-1:a<o?1:0},te.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},te.prototype.indexOf=function(t,e,n){return tp(this,t,e,n,!0)},te.prototype.lastIndexOf=function(t,e,n){return tp(this,t,e,n,!1)},te.prototype.write=function(t,e,n,r){var i,o,a,s,l,f,c,p;// Buffer#write(string)
if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let u=this.length-e;if((void 0===n||n>u)&&(n=u),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let h=!1;for(;;)switch(r){case"hex":return function(t,e,n,r){let i;n=Number(n)||0;let o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;let a=e.length;for(r>a/2&&(r=a/2),i=0;i<r;++i){let r=parseInt(e.substr(2*i,2),16);if(r!=r)break;t[n+i]=r}return i}(this,t,e,n);case"utf8":case"utf-8":return i=e,o=n,tT(tO(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=e,s=n,tT(function(t){let e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,f=n,tT(tB(t),this,l,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,p=n,tT(function(t,e){let n,r;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)r=(n=t.charCodeAt(o))>>8,i.push(n%256),i.push(r);return i}(t,this.length-c),this,c,p);default:if(h)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),h=!0}},te.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},te.prototype.slice=function(t,e){let n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);let r=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r,te.prototype),r)},te.prototype.readUintLE=te.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let r=this[t],i=1,o=0;for(;++o<e&&(i*=256);)r+=this[t+o]*i;return r},te.prototype.readUintBE=te.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},te.prototype.readUint8=te.prototype.readUInt8=function(t,e){return t>>>=0,e||tm(t,1,this.length),this[t]},te.prototype.readUint16LE=te.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tm(t,2,this.length),this[t]|this[t+1]<<8},te.prototype.readUint16BE=te.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tm(t,2,this.length),this[t]<<8|this[t+1]},te.prototype.readUint32LE=te.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tm(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},te.prototype.readUint32BE=te.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tm(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},te.prototype.readBigUInt64LE=tI(function(t){tN(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let r=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(r)+(BigInt(i)<<BigInt(32))}),te.prototype.readBigUInt64BE=tI(function(t){tN(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let r=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),te.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let r=this[t],i=1,o=0;for(;++o<e&&(i*=256);)r+=this[t+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},te.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let r=e,i=1,o=this[t+--r];for(;r>0&&(i*=256);)o+=this[t+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},te.prototype.readInt8=function(t,e){return(t>>>=0,e||tm(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},te.prototype.readInt16LE=function(t,e){t>>>=0,e||tm(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},te.prototype.readInt16BE=function(t,e){t>>>=0,e||tm(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},te.prototype.readInt32LE=function(t,e){return t>>>=0,e||tm(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},te.prototype.readInt32BE=function(t,e){return t>>>=0,e||tm(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},te.prototype.readBigInt64LE=tI(function(t){tN(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),te.prototype.readBigInt64BE=tI(function(t){tN(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let r=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),te.prototype.readFloatLE=function(t,e){return t>>>=0,e||tm(t,4,this.length),a(this,t,!0,23,4)},te.prototype.readFloatBE=function(t,e){return t>>>=0,e||tm(t,4,this.length),a(this,t,!1,23,4)},te.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tm(t,8,this.length),a(this,t,!0,52,8)},te.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tm(t,8,this.length),a(this,t,!1,52,8)},te.prototype.writeUintLE=te.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;td(this,t,e,n,r,0)}let i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},te.prototype.writeUintBE=te.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;td(this,t,e,n,r,0)}let i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},te.prototype.writeUint8=te.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,1,255,0),this[e]=255&t,e+1},te.prototype.writeUint16LE=te.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeUint16BE=te.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeUint32LE=te.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},te.prototype.writeUint32BE=te.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigUInt64LE=tI(function(t,e=0){return tg(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeBigUInt64BE=tI(function(t,e=0){return tb(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){let r=Math.pow(2,8*n-1);td(this,t,e,n,r-1,-r)}let i=0,o=1,a=0;for(this[e]=255&t;++i<n&&(o*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+n},te.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){let r=Math.pow(2,8*n-1);td(this,t,e,n,r-1,-r)}let i=n-1,o=1,a=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+n},te.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},te.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},te.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||td(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigInt64LE=tI(function(t,e=0){return tg(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeBigInt64BE=tI(function(t,e=0){return tb(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeFloatLE=function(t,e,n){return tx(this,t,e,!0,n)},te.prototype.writeFloatBE=function(t,e,n){return tx(this,t,e,!1,n)},te.prototype.writeDoubleLE=function(t,e,n){return tw(this,t,e,!0,n)},te.prototype.writeDoubleBE=function(t,e,n){return tw(this,t,e,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
te.prototype.copy=function(t,e,n,r){if(!te.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);let i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
te.prototype.fill=function(t,e,n,r){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!te.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===t.length){let e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{let o=te.isBuffer(t)?t:te.from(t,r),a=o.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=o[i%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tk={};function tv(t,e,n){tk[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tE(t){let e="",n=t.length,r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function tR(t,e,n,r,i,o){if(t>n||t<e){let r;let i="bigint"==typeof e?"n":"";throw r=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new tk.ERR_OUT_OF_RANGE("value",r,t)}tN(i,"offset"),(void 0===r[i]||void 0===r[i+o])&&tS(i,r.length-(o+1))}function tN(t,e){if("number"!=typeof t)throw new tk.ERR_INVALID_ARG_TYPE(e,"number",t)}function tS(t,e,n){if(Math.floor(t)!==t)throw tN(t,n),new tk.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new tk.ERR_BUFFER_OUT_OF_BOUNDS;throw new tk.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}tv("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tv("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tv("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?i=tE(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=tE(i)),i+="n"),r+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
const tA=/[^+/0-9A-Za-z-_]/g;function tO(t,e){let n;e=e||1/0;let r=t.length,i=null,o=[];for(let a=0;a<r;++a){// is surrogate component
if((n=t.charCodeAt(a))>55295&&n<57344){// last char was a lead
if(!i){// no lead yet
if(n>56319||a+1===r){// unexpected trail
(e-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=n;continue}// 2 leads in a row
if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}// valid surrogate pair
n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return o}function tB(t){return function(t){var e,n,r=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}(t),i=r[0],o=r[1],a=new K((i+o)*3/4-o),s=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)e=V[t.charCodeAt(n)]<<18|V[t.charCodeAt(n+1)]<<12|V[t.charCodeAt(n+2)]<<6|V[t.charCodeAt(n+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=255&e;return 2===o&&(e=V[t.charCodeAt(n)]<<2|V[t.charCodeAt(n+1)]>>4,a[s++]=255&e),1===o&&(e=V[t.charCodeAt(n)]<<10|V[t.charCodeAt(n+1)]<<4|V[t.charCodeAt(n+2)]>>2,a[s++]=e>>8&255,a[s++]=255&e),a}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tA,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tT(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length)&&!(i>=t.length);++i)e[i+n]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tC(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tL=function(){let t="0123456789abcdef",e=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();// Return not function with Error if BigInt not supported
function tI(t){return"undefined"==typeof BigInt?tU:t}function tU(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tz(t){return W.isPlainObject(t)||W.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tj(t){return W.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tF(t,e,n){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tj(t),!n&&e?"["+t+"]":t)}).join(n?".":""):e}const tP=W.toFlatObject(W,{},null,function(t){return/^is[A-Z]/.test(t)});var t_=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,n){if(!W.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
n=W.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!W.isUndefined(e[t])});let r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=n.Blob||"undefined"!=typeof Blob&&Blob,l=s&&W.isSpecCompliantForm(e);if(!W.isFunction(i))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(W.isDate(t))return t.toISOString();if(!l&&W.isBlob(t))throw new $("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(t)||W.isTypedArray(t)?l&&"function"==typeof Blob?new Blob([t]):te.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,n,i){let s=t;if(t&&!i&&"object"==typeof t){if(W.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=r?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var l;if(W.isArray(t)&&(l=t,W.isArray(l)&&!l.some(tz))||(W.isFileList(t)||W.endsWith(n,"[]"))&&(s=W.toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=tj(n),s.forEach(function(t,r){W.isUndefined(t)||null===t||e.append(!0===a?tF([n],r,o):null===a?n:n+"[]",f(t))}),!1)}}return!!tz(t)||(e.append(tF(i,n,o),f(t)),!1)}let p=[],u=Object.assign(tP,{defaultVisitor:c,convertValue:f,isVisitable:tz});if(!W.isObject(t))throw TypeError("data must be an object");return!function t(n,r){if(!W.isUndefined(n)){if(-1!==p.indexOf(n))throw Error("Circular reference detected in "+r.join("."));p.push(n),W.forEach(n,function(n,o){let a=!(W.isUndefined(n)||null===n)&&i.call(e,n,W.isString(o)?o.trim():o,r,u);!0===a&&t(n,r?r.concat(o):[o])}),p.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tM(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tX(t,e){this._pairs=[],t&&t_(t,this,e)}const tD=tX.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tW(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t$(t,e,n){let r;/*eslint no-param-reassign:0*/if(!e)return t;let i=n&&n.encode||tW,o=n&&n.serialize;if(r=o?o(e,n):W.isURLSearchParams(e)?e.toString():new tX(e,n).toString(i)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}tD.append=function(t,e){this._pairs.push([t,e])},tD.toString=function(t){let e=t?function(e){return t.call(this,e,tM)}:tM;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tq=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){W.forEach(this.handlers,function(e){null!==e&&t(e)})}},tH={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tJ="undefined"!=typeof URLSearchParams?URLSearchParams:tX,tV="undefined"!=typeof FormData?FormData:null,tK="undefined"!=typeof Blob?Blob:null,tG={};f(tG,"hasBrowserEnv",function(){return tY}),f(tG,"hasStandardBrowserEnv",function(){return tQ}),f(tG,"hasStandardBrowserWebWorkerEnv",function(){return tZ});const tY="undefined"!=typeof window&&"undefined"!=typeof document,tQ=(i="undefined"!=typeof navigator&&navigator.product,tY&&0>["ReactNative","NativeScript","NS"].indexOf(i)),tZ="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t0={...tG,isBrowser:!0,classes:{URLSearchParams:tJ,FormData:tV,Blob:tK},protocols:["http","https","file","blob","url","data"]},t1=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(W.isFormData(t)&&W.isFunction(t.entries)){let e={};return W.forEachEntry(t,(t,n)=>{!function t(e,n,r,i){let o=e[i++],a=Number.isFinite(+o),s=i>=e.length;if(o=!o&&W.isArray(r)?r.length:o,s)return W.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a;r[o]&&W.isObject(r[o])||(r[o]=[]);let l=t(e,n,r[o],i);return l&&W.isArray(r[o])&&(r[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,n;let r={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)r[n=i[e]]=t[n];return r}(r[o])),!a}(W.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,e,0)}),e}return null};const t6={transitional:tH,adapter:["xhr","http"],transformRequest:[function(t,e){let n;let r=e.getContentType()||"",i=r.indexOf("application/json")>-1,o=W.isObject(t);o&&W.isHTMLForm(t)&&(t=new FormData(t));let a=W.isFormData(t);if(a)return i&&i?JSON.stringify(t1(t)):t;if(W.isArrayBuffer(t)||W.isBuffer(t)||W.isStream(t)||W.isFile(t)||W.isBlob(t))return t;if(W.isArrayBufferView(t))return t.buffer;if(W.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1){var s,l;return(s=t,l=this.formSerializer,t_(s,new t0.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return t0.isNode&&W.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},l))).toString()}if((n=W.isFileList(t))||r.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return t_(n?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,n){if(W.isString(t))try{return(0,JSON.parse)(t),W.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t6.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&W.isString(t)&&(n&&!this.responseType||r)){let n=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&r){if("SyntaxError"===t.name)throw $.from(t,$.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t0.classes.FormData,Blob:t0.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],t=>{t6.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t2=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */t5=t=>{let e,n,r;let i={};return t&&t.split("\n").forEach(function(t){r=t.indexOf(":"),e=t.substring(0,r).trim().toLowerCase(),n=t.substring(r+1).trim(),!e||i[e]&&t2[e]||("set-cookie"===e?i[e]?i[e].push(n):i[e]=[n]:i[e]=i[e]?i[e]+", "+n:n)}),i};const t4=Symbol("internals");function t3(t){return t&&String(t).trim().toLowerCase()}function t8(t){return!1===t||null==t?t:W.isArray(t)?t.map(t8):String(t)}const t7=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function t9(t,e,n,r,i){if(W.isFunction(r))return r.call(this,e,n);if(i&&(e=n),W.isString(e)){if(W.isString(r))return -1!==e.indexOf(r);if(W.isRegExp(r))return r.test(e)}}class et{constructor(t){t&&this.set(t)}set(t,e,n){let r=this;function i(t,e,n){let i=t3(e);if(!i)throw Error("header name must be a non-empty string");let o=W.findKey(r,i);o&&void 0!==r[o]&&!0!==n&&(void 0!==n||!1===r[o])||(r[o||e]=t8(t))}let o=(t,e)=>W.forEach(t,(t,n)=>i(t,n,e));return W.isPlainObject(t)||t instanceof this.constructor?o(t,e):W.isString(t)&&(t=t.trim())&&!t7(t)?o(t5(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=t3(t)){let n=W.findKey(this,t);if(n){let t=this[n];if(!e)return t;if(!0===e)return function(t){let e;let n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=r.exec(t);)n[e[1]]=e[2];return n}(t);if(W.isFunction(e))return e.call(this,t,n);if(W.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t3(t)){let n=W.findKey(this,t);return!!(n&&void 0!==this[n]&&(!e||t9(this,this[n],n,e)))}return!1}delete(t,e){let n=this,r=!1;function i(t){if(t=t3(t)){let i=W.findKey(n,t);i&&(!e||t9(n,n[i],i,e))&&(delete n[i],r=!0)}}return W.isArray(t)?t.forEach(i):i(t),r}clear(t){let e=Object.keys(this),n=e.length,r=!1;for(;n--;){let i=e[n];(!t||t9(this,this[i],i,t,!0))&&(delete this[i],r=!0)}return r}normalize(t){let e=this,n={};return W.forEach(this,(r,i)=>{let o=W.findKey(n,i);if(o){e[o]=t8(r),delete e[i];return}let a=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n):String(i).trim();a!==i&&delete e[i],e[a]=t8(r),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return W.forEach(this,(n,r)=>{null!=n&&!1!==n&&(e[r]=t&&W.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){let e=this[t4]=this[t4]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){let e=t3(t);n[e]||(!function(t,e){let n=W.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})})}(r,t),n[e]=!0)}return W.isArray(t)?t.forEach(i):i(t),this}}function ee(t,e){let n=this||t6,r=e||n,i=et.from(r.headers),o=r.data;return W.forEach(t,function(t){o=t.call(n,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function en(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function er(t,e,n){$.call(this,null==t?"canceled":t,$.ERR_CANCELED,e,n),this.name="CanceledError"}et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),W.reduceDescriptors(et.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[n]=t}}}),W.freezeMethods(et),W.inherits(er,$,{__CANCEL__:!0});var ei=t0.hasStandardBrowserEnv?{write(t,e,n,r,i,o){let a=[t+"="+encodeURIComponent(e)];W.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),W.isString(r)&&a.push("path="+r),W.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function eo(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var ea=t0.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function r(t){let r=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=r(window.location.href),function(e){let n=W.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},es=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let n;t=t||10;let r=Array(t),i=Array(t),o=0,a=0;return e=void 0!==e?e:1e3,function(s){let l=Date.now(),f=i[a];n||(n=l),r[o]=s,i[o]=l;let c=a,p=0;for(;c!==o;)p+=r[c++],c%=t;if((o=(o+1)%t)===a&&(a=(a+1)%t),l-n<e)return;let u=f&&l-f;return u?Math.round(1e3*p/u):void 0}};function el(t,e){let n=0,r=es(50,250);return i=>{let o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s);n=o;let f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:i};f[e?"download":"upload"]=!0,t(f)}}const ef="undefined"!=typeof XMLHttpRequest;var ec=ef&&function(t){return new Promise(function(e,n){let r,i,o=t.data,a=et.from(t.headers).normalize(),{responseType:s,withXSRFToken:l}=t;function f(){t.cancelToken&&t.cancelToken.unsubscribe(r),t.signal&&t.signal.removeEventListener("abort",r)}if(W.isFormData(o)){if(t0.hasStandardBrowserEnv||t0.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);// Let the browser set it
else if(!1!==(i=a.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[t,...e]=i?i.split(";").map(t=>t.trim()).filter(Boolean):[];a.setContentType([t||"multipart/form-data",...e].join("; "))}}let c=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";a.set("Authorization","Basic "+btoa(e+":"+n))}let p=eo(t.baseURL,t.url);function u(){if(!c)return;// Prepare the response
let r=et.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?c.response:c.responseText,o={data:i,status:c.status,statusText:c.statusText,headers:r,config:t,request:c};!function(t,e,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}(function(t){e(t),f()},function(t){n(t),f()},o),// Clean up request
c=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(t.method.toUpperCase(),t$(p,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
c.timeout=t.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(u)},// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(n(new $("Request aborted",$.ECONNABORTED,t,c)),// Clean up request
c=null)},// Handle low level network errors
c.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new $("Network Error",$.ERR_NETWORK,t,c)),// Clean up request
c=null},// Handle timeout
c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||tH;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new $(e,r.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,t,c)),// Clean up request
c=null},t0.hasStandardBrowserEnv&&(l&&W.isFunction(l)&&(l=l(t)),l||!1!==l&&ea(p))){// Add xsrf header
let e=t.xsrfHeaderName&&t.xsrfCookieName&&ei.read(t.xsrfCookieName);e&&a.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&a.setContentType(null),"setRequestHeader"in c&&W.forEach(a.toJSON(),function(t,e){c.setRequestHeader(e,t)}),W.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",el(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",el(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
r=e=>{c&&(n(!e||e.type?new er(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(r),t.signal&&(t.signal.aborted?r():t.signal.addEventListener("abort",r)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(p);if(h&&-1===t0.protocols.indexOf(h)){n(new $("Unsupported protocol "+h+":",$.ERR_BAD_REQUEST,t));return}// Send the request
c.send(o||null)})};const ep={http:null,xhr:ec};W.forEach(ep,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});const eu=t=>`- ${t}`,eh=t=>W.isFunction(t)||null===t||!1===t;var em={getAdapter:t=>{let e,n;t=W.isArray(t)?t:[t];let{length:r}=t,i={};for(let o=0;o<r;o++){let r;if(n=e=t[o],!eh(e)&&void 0===(n=ep[(r=String(e)).toLowerCase()]))throw new $(`Unknown adapter '${r}'`);if(n)break;i[r||"#"+o]=n}if(!n){let t=Object.entries(i).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new $("There is no suitable adapter to dispatch the request "+(r?t.length>1?"since :\n"+t.map(eu).join("\n"):" "+eu(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n},adapters:ep};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function ed(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new er(null,t)}function eg(t){ed(t),t.headers=et.from(t.headers),// Transform request data
t.data=ee.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=em.getAdapter(t.adapter||t6.adapter);return e(t).then(function(e){return ed(t),// Transform response data
e.data=ee.call(t,t.transformResponse,e),e.headers=et.from(e.headers),e},function(e){return!en(e)&&(ed(t),e&&e.response&&(e.response.data=ee.call(t,t.transformResponse,e.response),e.response.headers=et.from(e.response.headers))),Promise.reject(e)})}const eb=t=>t instanceof et?t.toJSON():t;function ey(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let n={};function r(t,e,n){return W.isPlainObject(t)&&W.isPlainObject(e)?W.merge.call({caseless:n},t,e):W.isPlainObject(e)?W.merge({},e):W.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,n){return W.isUndefined(e)?W.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}// eslint-disable-next-line consistent-return
function o(t,e){if(!W.isUndefined(e))return r(void 0,e)}// eslint-disable-next-line consistent-return
function a(t,e){return W.isUndefined(e)?W.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}// eslint-disable-next-line consistent-return
function s(n,i,o){return o in e?r(n,i):o in t?r(void 0,n):void 0}let l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(t,e)=>i(eb(t),eb(e),!0)};return W.forEach(Object.keys(Object.assign({},t,e)),function(r){let o=l[r]||i,a=o(t[r],e[r],r);W.isUndefined(a)&&o!==s||(n[r]=a)}),n}const ex="1.6.2",ew={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ew[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const ek={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ew.transitional=function(t,e,n){function r(t,e){return"[Axios v"+ex+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,i,o)=>{if(!1===t)throw new $(r(i," has been removed"+(e?" in "+e:"")),$.ERR_DEPRECATED);return e&&!ek[i]&&(ek[i]=!0,// eslint-disable-next-line no-console
console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}};var ev={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,n){if("object"!=typeof t)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);let r=Object.keys(t),i=r.length;for(;i-- >0;){let o=r[i],a=e[o];if(a){let e=t[o],n=void 0===e||a(e,o,t);if(!0!==n)throw new $("option "+o+" must be "+n,$.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new $("Unknown option "+o,$.ERR_BAD_OPTION)}},validators:ew};const eE=ev.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eR{constructor(t){this.defaults=t,this.interceptors={request:new tq,response:new tq}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let n,r;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=ey(this.defaults,e);let{transitional:i,paramsSerializer:o,headers:a}=e;void 0!==i&&ev.assertOptions(i,{silentJSONParsing:eE.transitional(eE.boolean),forcedJSONParsing:eE.transitional(eE.boolean),clarifyTimeoutError:eE.transitional(eE.boolean)},!1),null!=o&&(W.isFunction(o)?e.paramsSerializer={serialize:o}:ev.assertOptions(o,{encode:eE.function,serialize:eE.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let s=a&&W.merge(a.common,a[e.method]);a&&W.forEach(["delete","get","head","post","put","patch","common"],t=>{delete a[t]}),e.headers=et.concat(s,a);// filter out skipped interceptors
let l=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,l.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let p=0;if(!f){let t=[eg.bind(this),void 0];for(t.unshift.apply(t,l),t.push.apply(t,c),r=t.length,n=Promise.resolve(e);p<r;)n=n.then(t[p++],t[p++]);return n}r=l.length;let u=e;for(p=0;p<r;){let t=l[p++],e=l[p++];try{u=t(u)}catch(t){e.call(this,t);break}}try{n=eg.call(this,u)}catch(t){return Promise.reject(t)}for(p=0,r=c.length;p<r;)n=n.then(c[p++],c[p++]);return n}getUri(t){t=ey(this.defaults,t);let e=eo(t.baseURL,t.url);return t$(e,t.params,t.paramsSerializer)}}W.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eR.prototype[t]=function(e,n){return this.request(ey(n||{},{method:t,url:e,data:(n||{}).data}))}}),W.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(n,r,i){return this.request(ey(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}eR.prototype[t]=e(),eR.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eN{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let r=new Promise(t=>{n.subscribe(t),e=t}).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t(function(t,r,i){n.reason||(n.reason=new er(t,r,i),e(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eN(function(e){t=e});return{token:e,cancel:t}}}const eS={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eS).forEach(([t,e])=>{eS[e]=t});// Create the default instance to be exported
const eA=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let n=new eR(e),r=p(eR.prototype.request,n);return W.extend(r,eR.prototype,n,{allOwnKeys:!0}),W.extend(r,n,null,{allOwnKeys:!0}),// Factory for creating new instances
r.create=function(n){return t(ey(e,n))},r}(t6);// Expose Axios class to allow class inheritance
eA.Axios=eR,// Expose Cancel & CancelToken
eA.CanceledError=er,eA.CancelToken=eN,eA.isCancel=en,eA.VERSION=ex,eA.toFormData=t_,// Expose AxiosError class
eA.AxiosError=$,// alias for CanceledError for backward compatibility
eA.Cancel=eA.CanceledError,// Expose all/spread
eA.all=function(t){return Promise.all(t)},eA.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eA.isAxiosError=function(t){return W.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eA.mergeConfig=ey,eA.AxiosHeaders=et,eA.formToJSON=t=>t1(W.isHTMLForm(t)?new FormData(t):t),eA.getAdapter=em.getAdapter,eA.HttpStatusCode=eS,eA.default=eA;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:eO,AxiosError:eB,CanceledError:eT,isCancel:eC,CancelToken:eL,VERSION:eI,all:eU,Cancel:ez,isAxiosError:ej,spread:eF,toFormData:eP,AxiosHeaders:e_,HttpStatusCode:eM,formToJSON:eX,getAdapter:eD,mergeConfig:eW}=eA;eA.defaults.headers.common["x-api-key"]="live_lkLcnlkMV7otiB4qZPOrW3QlwL7BDqdsWR4rKHqw4y2tltnJOakPXbxreE5g6Nas";const e$={breedSelectEl:document.querySelector(".breed-select"),catInfoEl:document.querySelector(".cat-info"),pLoaderEl:document.querySelector(".loader"),pErrorEl:document.querySelector(".error")};function eq({id:t,name:e}){return`<option value="${t}">${e}</option>`}window.addEventListener("DOMContentLoaded",function(){e$.breedSelectEl.classList.add("is-hidden"),e$.pLoaderEl.classList.remove("is-hidden"),e$.pErrorEl.classList.add("is-hidden"),eA.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data).catch(t=>{console.log(t)}).then(t=>{e$.breedSelectEl.innerHTML=t.map(eq).join("");// new SlimSelect({
//   select: '#single',
//   settings: {
//     alwaysOpen: false,
//     text: 'text', // Required
//     value: 'value', // Optional - value will be set by text if not set
//     html: '<b>Html</b>', // Optional - will be used for display purposes if set
//     selected: false, // Optional - default is false
//     display: true, // Optional - default is true
//     disabled: false, // Optional - default is false
//     mandatory: false, // Optional - default is false
//     placeholder: false, // Optional - default is false
//     class: '',
//   },
// });
}).then(t=>{e$.breedSelectEl.classList.remove("is-hidden"),e$.pLoaderEl.classList.add("is-hidden")}).catch(t=>{e$.pLoaderEl.classList.add("is-hidden"),e$.pErrorEl.classList.remove("is-hidden"),(0,c.Report).failure("Oops! Something went wrong!","Try reloading the page!")})}),e$.breedSelectEl.addEventListener("change",function(t){e$.catInfoEl.classList.add("is-hidden"),e$.pLoaderEl.classList.remove("is-hidden"),e$.pErrorEl.classList.add("is-hidden"),(function(t){let e=`?breed_ids=${t}`;return eA.get("https://api.thecatapi.com/v1/images/search"+e).then(t=>t.data[0]).catch(t=>{console.log(t)})})(t.target.value).then(t=>{e$.catInfoEl.innerHTML=function(t){let{description:e,name:n,temperament:r}=t.breeds[0];return`<img class="img-cat" src="${t.url}" alt="${n}" width="500px">
  <div class="cat-txt"><h2 class="title-cat">${n}</h2>
  <p>${e}</p>
  <p><span class="span">Temperament:</span> ${r}</p></div>`}//# sourceMappingURL=index.8c4e05c1.js.map
(t)}).then(t=>{e$.breedSelectEl.classList.remove("is-hidden"),e$.pLoaderEl.classList.add("is-hidden")}).catch(t=>{e$.pLoaderEl.classList.add("is-hidden"),e$.pErrorEl.classList.remove(".is-hidden"),(0,c.Report).failure("Oops! Something went wrong!","Try reloading the page!")})});
//# sourceMappingURL=index.8c4e05c1.js.map
