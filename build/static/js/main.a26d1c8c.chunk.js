(this["webpackJsonpmqtt-trial-3"]=this["webpackJsonpmqtt-trial-3"]||[]).push([[0],{101:function(e,t){},147:function(e,t){},153:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t),a.d(t,"Levitation",(function(){return c}));var n=a(0),r=a.n(n),l=a(23);function c(e){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("span",{style:{color:"white"}},"Levitation"))}},161:function(e,t,a){"use strict";a.r(t),a.d(t,"Braking",(function(){return c}));var n=a(0),r=a.n(n),l=a(23);function c(e){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("span",{style:{color:"white"}}," Braking"))}},162:function(e,t,a){"use strict";a.r(t),a.d(t,"Battery",(function(){return c}));var n=a(0),r=a.n(n),l=a(23);function c(e){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("span",{style:{color:"white"}},"Battery Packs"))}},167:function(e,t,a){"use strict";a.r(t),a.d(t,"Send",(function(){return o}));var n=a(0),r=a.n(n),l=a(26),c=a(174);function o(e){return r.a.createElement(l.a,{style:{width:"50%",margin:"auto"},onSubmit:e.handleSubmit},r.a.createElement(l.a.Group,null,r.a.createElement(l.a.Label,null,"Topic: "),r.a.createElement(l.a.Control,{type:"text",placeholder:"Enter topic",value:e.topic,onChange:e.onChangeTopic})),r.a.createElement(l.a.Group,null,r.a.createElement(l.a.Label,null,"Message: "),r.a.createElement(l.a.Control,{type:"text",placeholder:"Enter message",value:e.message,onChange:e.onChangeMessage})),r.a.createElement("div",{className:"slidecontainer"},r.a.createElement("input",{type:"range",min:"0",max:"12",step:"0.1",onChange:e.onChangeSlider,value:e.height,className:"slider",id:"myRange"})),r.a.createElement("div",{className:"slidecontainer"},r.a.createElement("input",{type:"range",min:"0",max:"180",step:"1",onChange:e.onChangeSlider2,value:e.speed,className:"slider",id:"myRange"})),r.a.createElement("div",{className:"slidecontainer"},r.a.createElement("input",{type:"range",min:"0",max:"400",step:"0.1",onChange:e.onChangeSlider3,value:e.position,className:"slider",id:"myRange"})),r.a.createElement(c.a,{style:{position:"absolute",marginTop:"10px",width:"20vw",right:"25vw"},variant:"outline-primary",type:"submit"},"Send"))}},170:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return I}));var n=a(0),r=a.n(n),l=a(4),c=a(181),o=a(74);a(153),a(29);function i(e){var t=Object(n.useState)({temp:0,volt:0}),a=Object(l.a)(t,2),i=a[0],m=a[1],s=e.temp>20?e.temp>50?"bg-red":"bg-orange":"bg-green";return r.a.createElement(c.a,{placement:"right",delay:{show:250,hide:400},overlay:function(e){return r.a.createElement(o.a,Object.assign({id:"button-tooltip"},e),"Temperature: ",i.temp,"C")}},r.a.createElement("div",{onMouseEnter:function(){m({temp:e.temp,volt:e.voltage})},className:"bms-cell ".concat(s)},e.voltage,"V"))}function m(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"white-text sub-section container-grid"},e.array[0].map((function(e){return r.a.createElement(i,{temp:e.temp,voltage:e.voltage})})),e.array[1].map((function(e){return r.a.createElement(i,{temp:e.temp,voltage:e.voltage})})),e.array[2].map((function(e){return r.a.createElement(i,{temp:e.temp,voltage:e.voltage})}))))}var s=a(23),u=(a(156),a(79)),g=a.n(u),p=a(80),d=a.n(p),E=a(172),b=a(173),h=a(41);function f(e){return r.a.createElement(E.a,{className:"sub-section white-text",style:{width:"70%",marginTop:"1rem"}},r.a.createElement("h4",{style:{textAlign:"center"}},"Velocity"),r.a.createElement(b.a,null,r.a.createElement(h.a,{className:"parent",style:{textAlign:"center"}},r.a.createElement("img",{height:"100%",className:"image1",src:g.a}),r.a.createElement("img",{className:"image2",height:"100%",style:{transform:"rotate(".concat(4*e.speed/3,"deg)")},src:d.a}),r.a.createElement("div",{className:"overlay"},e.speed?e.speed:0,r.a.createElement("span",{style:{fontSize:"0.7rem",color:"white"}}," km/h")))))}a(157);var v=a(81),x=a.n(v),y=a(82),S=a.n(y),N=function(e){var t=e.height,a=e.gap,n=r.a.useState(8),c=Object(l.a)(n,2),o=c[0],i=c[1],m=r.a.useState(0),s=Object(l.a)(m,2),u=s[0],g=s[1];return r.a.useEffect((function(){i(a),g(2*a-4)})),r.a.createElement(E.a,{style:{marginTop:"1rem"},className:"sub-section white-text"},r.a.createElement("h4",null,"Levitation"),r.a.createElement(b.a,{className:"sub-sub-section",style:{height:"".concat(t,"px")}},r.a.createElement(h.a,null,r.a.createElement("div",{style:{color:"rgb(250,150,150)",textAlign:"right"}},"\u2192\u2192")),r.a.createElement(h.a,{style:{textAlign:"left"}},r.a.createElement("img",{src:S.a,style:{marginTop:"-55px"}}),r.a.createElement("img",{src:x.a,style:{transform:"rotate(180deg)",position:"absolute",marginLeft:"-36px",marginTop:"".concat(u,"px")}}))),r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{className:"center"},r.a.createElement("span",{style:{fontWeight:"600"}},"Air gap: "),r.a.createElement("span",{style:{marginLeft:"0.5rem",border:"red solid 1px",borderRadius:"5px",padding:"0.3rem"}},o||0," mm")))))};function j(e){return r.a.createElement("div",null,r.a.createElement(N,{style:{margin:"auto"},height:100,gap:e.height}))}var O=a(174);a(72);function w(e){return r.a.createElement("div",{className:"white-text",style:{marginTop:"1rem",padding:"2rem 0rem 2rem 0rem",backgroundColor:"rgba(25,25,25,0.5)",boxShadow:"1px 2px 3px #22252B, inset 2px 2px 2px #35393F",textAlign:"center"}},r.a.createElement("h4",{style:{fontSize:"1.2em",marginBottom:"1em"}},"Command Station"),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"Precharge on")),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"Precharge off")),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"Levitate")),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"PWM")),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"Brakes actuate")),r.a.createElement("div",null,r.a.createElement(O.a,{className:"cmd-btn"},"Brakes retract")))}var C=a(83),T=a.n(C);function k(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){o(e.position)})),r.a.createElement(E.a,{className:"sub-section white-text",style:{width:"70%",marginTop:"1rem"}},r.a.createElement("h4",null,"Position"),r.a.createElement("div",{style:{boxShadow:"1px 1px 2px rgba(64, 68, 76, 0.3), -1px -1px 2px rgba(18, 20, 22, 0.5), inset -3px 3px 6px rgba(18, 20, 22, 0.2),  inset 3px -3px 6px rgba(18, 20, 22, 0.2), inset -3px -3px 6px rgba(64, 68, 76, 0.9), inset 3px 3px 8px rgba(18, 20, 22, 0.9)",margin:"1rem 1.5rem 2rem 1.5rem",borderRadius:"1rem",backgroundColor:"#333333",padding:"0.6rem 0rem 2rem 0rem"}},r.a.createElement("div",{style:{position:"relative",height:"0.2rem",borderRadius:"0.2rem",margin:"2rem 1rem 0rem 1rem",backgroundColor:"rgb(140,140,140)"}},[0,80,160,240,320,400].map((function(e){return r.a.createElement("div",{style:{backgroundColor:"white",position:"absolute",left:"".concat(e/400*99,"%"),width:"0.3rem",height:"0.6rem",borderRadius:"1rem"}})})),r.a.createElement("img",{style:{height:"1rem",position:"absolute",top:"-1rem",left:"".concat(c/400*95,"%")},src:T.a}))),r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement("span",{className:"center",style:{marginLeft:"0.5rem",border:"red solid 1px",borderRadius:"5px",padding:"0.3rem"}},c||0," mm"))))}function M(e){return r.a.createElement("div",{className:"white-text",style:{marginTop:"1rem",height:"fit-content",padding:"2rem 1rem 8rem 1rem",backgroundColor:"rgba(25,25,25,0.5)",boxShadow:"1px 2px 3px #22252B, inset 2px 2px 2px #35393F",textAlign:"center"}},r.a.createElement("h4",{style:{marginBottom:"1rem",fontSize:"1.2em"}},"Sub-Modules"),r.a.createElement("a",{className:"nav-link",href:"/levitation"},r.a.createElement("div",null,"Levitation")),r.a.createElement("a",{className:"nav-link",href:"/battery"},r.a.createElement("div",null,"Battery Packs")),r.a.createElement("a",{className:"nav-link",href:"/propulsion"},r.a.createElement("div",null,"Propulsion")))}var R=a(84),B=a.n(R);a(158);function L(e){var t=[{name:"EMS",temp:e.temp1},{name:"LIM",temp:e.temp2}];return r.a.createElement(E.a,{className:"sub-section white-text",style:{width:"100%",marginTop:"2rem",padding:"2rem"}},r.a.createElement("h4",null,"Temperature"),r.a.createElement(b.a,null,t.map((function(e){return r.a.createElement(h.a,{className:"sub-sub-section"},r.a.createElement("h6",null,e.name),r.a.createElement(b.a,{className:"thermometer"},r.a.createElement(h.a,{className:"thermometer-tube"},r.a.createElement(B.a,{min:0,max:100,width:10,height:70,backgroundColor:"rgb(0,0,0,0.1)",fillColor:e.temp<20?"rgb(0,0,150)":e.temp<35?"rgb(0,100,0)":e.temp<50?"rgb(0,100,100)":e.temp<65?"orange":"red",current:e.temp?e.temp:10})),r.a.createElement(h.a,{style:{textAlign:"left"}},e.temp?e.temp:0," C")))}))))}var A=a(180);function P(e){var t=e.title,a=e.data;return r.a.createElement(E.a,{style:{marginTop:"1rem"},className:"sub-section white-text"},r.a.createElement("h4",null,t),r.a.createElement(A.a,{bordered:!0,hover:!0,variant:"dark"},r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1),r.a.createElement("td",null,e))})))))}a(159);function I(e){return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(E.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(h.a,{className:"no-margin"},r.a.createElement(M,null)),r.a.createElement(h.a,{lg:{span:8}},r.a.createElement(E.a,{style:{marginLeft:"0px"}},r.a.createElement(b.a,{style:{margin:"0px"}},r.a.createElement(h.a,{lg:4,className:"col"},r.a.createElement(m,{array:[[{temp:20,voltage:10},{temp:40,voltage:9},{temp:70,voltage:12}],[{temp:30,voltage:13},{temp:80,voltage:19},{temp:10,voltage:1}],[{temp:20,voltage:20},{temp:40,voltage:11},{temp:70,voltage:22}]]})),r.a.createElement(h.a,{lg:3,className:"col"},r.a.createElement(j,{height:e.height})),r.a.createElement(h.a,{lg:5,className:"col"},r.a.createElement(f,{speed:e.speed}))),r.a.createElement(b.a,{style:{margin:"0px"}},r.a.createElement(h.a,{lg:8,className:"col"},r.a.createElement(k,{position:e.position})),r.a.createElement(h.a,{lg:4,className:"col"},r.a.createElement(L,{temp1:e.emsTemp,temp2:e.limTemp}))),r.a.createElement(b.a,{style:{margin:"0px"}},r.a.createElement(h.a,{lg:4,className:"col"},r.a.createElement(P,{title:"Reed Sensors",data:[20,30,10,10]})),r.a.createElement(h.a,{lg:4}),r.a.createElement(h.a,{lg:4,className:"col"},r.a.createElement(P,{title:"Pressure Sensors",data:[20,30,10,10]}))))),r.a.createElement(h.a,{className:"no-margin"},r.a.createElement(w,null)))))}},171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(4),i=a(8),m=a(52),s=a(170).Home,u=a(160).Levitation,g=a(161).Braking,p=a(162).Battery,d="ws://".concat("localhost",":").concat(1884,"/mqtt"),E=m.connect(d,{keepalive:30,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:3e4,will:{topic:"WillMsg",payload:"Connection Closed abnormally..!",qos:0,retain:!1},rejectUnauthorized:!1});function b(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),d=m[0],b=m[1],h=Object(n.useState)(12),f=Object(o.a)(h,2),v=f[0],x=f[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),N=S[0],j=S[1],O=Object(n.useState)(""),w=Object(o.a)(O,2),C=w[0],T=w[1],k=Object(n.useState)(""),M=Object(o.a)(k,2),R=M[0],B=M[1],L=Object(n.useState)(""),A=Object(o.a)(L,2),P=A[0],I=A[1];return E.on("connect",(function(){console.log("Connected"),E.subscribe("topic1",(function(){E.on("message",(function(e,t,a){"topic1"===e&&(l(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("topic2",(function(){E.on("message",(function(e,t,a){"topic2"===e&&(b(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("height",(function(){E.on("message",(function(e,t,a){"height"===e&&(x(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("speed",(function(){E.on("message",(function(e,t,a){"speed"===e&&(j(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("position",(function(){E.on("message",(function(e,t,a){"position"===e&&(T(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("emsTemp",(function(){E.on("message",(function(e,t,a){"emsTemp"===e&&(B(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))})),E.subscribe("limTemp",(function(){E.on("message",(function(e,t,a){"limTemp"===e&&(I(t.toString()),console.log('Received "'+t+'" on "'+e+'"'))}))}))})),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(s,{message1:a,message2:d,height:v,speed:N,position:C,emsTemp:R,limTemp:P})),r.a.createElement(i.a,{exact:!0,path:"/levitation"},r.a.createElement(u,null)),r.a.createElement(i.a,{exact:!0,path:"/battery"},r.a.createElement(p,null)),r.a.createElement(i.a,{exact:!0,path:"/braking"},r.a.createElement(g,null)))}var h=a(167).Send,f=a(52),v="ws://".concat("localhost",":").concat(1884,"/mqtt"),x={keepalive:30,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:3e4,will:{topic:"WillMsg",payload:"Connection Closed abnormally..!",qos:0,retain:!1},rejectUnauthorized:!1};function y(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){var e=f.connect(v,x);return l(e),e.on("connect",(function(){console.log("Connected")})),function(){e.disconnect()}}),[]);var c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)(""),g=Object(o.a)(u,2),p=g[0],d=g[1],E=Object(n.useState)(0),b=Object(o.a)(E,2),y=b[0],S=b[1],N=Object(n.useState)(0),j=Object(o.a)(N,2),O=j[0],w=j[1],C=Object(n.useState)(0),T=Object(o.a)(C,2),k=T[0],M=T[1],R=function(e,t){!0===a.connected&&a.subscribe(e,(function(n){n||a.publish(e,t,(function(){console.log("Message pushed ",t)}))}))};return r.a.createElement(h,{topic:m,message:p,height:y,handleSubmit:function(e){e.preventDefault(),console.log("connecting"),!0===a.connected&&a.subscribe(m,(function(e){e||(a.publish(m,p,(function(){console.log("Message pushed")})),a.publish("height",y,(function(){console.log("Height changed")})))}))},onChangeTopic:function(e){return s(e.target.value)},onChangeMessage:function(e){return d(e.target.value)},onChangeSlider:function(e){S(e.target.value),R("height",y)},onChangeSlider2:function(e){M(e.target.value),R("speed",k)},onChangeSlider3:function(e){w(e.target.value),R("position",O)}})}var S=a(48),N=function(){return r.a.createElement(S.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(b,null)),r.a.createElement(i.a,{exact:!0,path:"/send"},r.a.createElement(y,null))))};a(168);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(4),r=a(0),l=a.n(r),c=a(78),o=a.n(c),i=(a(155),a(172)),m=a(173),s=a(41);function u(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=(t[0],t[1],l.a.useState(new Date)),c=Object(n.a)(a,2),u=c[0],g=c[1];return Object(r.useEffect)((function(){setInterval((function(){g(new Date)}),6e4)})),l.a.createElement("div",null,l.a.createElement(i.a,{fluid:!0,style:{backgroundColor:"rgba(25,25,25,0.5)",borderBottom:"3px solid",borderImage:"linear-gradient(to right, rgba(155,155,155,0.8), rgba(155,155,155, 0.2), transparent) 1"}},l.a.createElement(m.a,{style:{display:"flex",alignItems:"center"}},l.a.createElement(s.a,{style:{textAlign:"left"},lg:2},l.a.createElement("img",{style:{width:"4.5vw",margin:"10px"},src:o.a})),l.a.createElement(s.a,{style:{color:"white",textAlign:"right"},lg:10},l.a.createElement("div",null,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][u.getDay()],", ",u.toLocaleDateString()),l.a.createElement("div",null,u.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))))))}},29:function(e,t,a){},68:function(e,t){},72:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/logo.39b62785.svg"},79:function(e,t,a){e.exports=a.p+"static/media/speedometer.797e5a66.svg"},80:function(e,t,a){e.exports=a.p+"static/media/pointer.92e2b96b.svg"},81:function(e,t,a){e.exports=a.p+"static/media/magnet.ca0cf34d.svg"},82:function(e,t,a){e.exports=a.p+"static/media/magnet_green.45587bab.svg"},83:function(e,t,a){e.exports=a.p+"static/media/pod.7b906689.svg"},86:function(e,t,a){e.exports=a(171)},99:function(e,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.a26d1c8c.chunk.js.map