(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{77:function(e,t,n){e.exports=n(97)},82:function(e,t,n){},93:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(82),n(10)),l=n(23),u=o.a.createContext({}),d=n(31),s=n(126),m=o.a.createContext({notes:[]}),p=n(46),v=n(62),f=n.n(v),h=n(130),b=n(128),g=function(e){var t=e.children,n=e.tooltip,a=e.disabled;return n&&!a?o.a.createElement(h.a,{title:n,enterDelay:700,arrow:!0},t):o.a.createElement("span",null,t)},E=function(e){var t=e.children,n=e.color,a=void 0===n?"primary":n,r=e.type,c=void 0===r?"button":r,i=e.onClick,l=e.disabled,u=void 0!==l&&l,d=e.tooltip,s=e.component,m=void 0===s?"button":s;return o.a.createElement(g,{tooltip:d,disabled:u},o.a.createElement(b.a,{variant:"contained",component:m,color:a,type:c,onClick:i,disabled:u},t))},y=n(2),x=n(127),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:95;return"hsl(".concat(360*Math.random(),", 40%, ").concat(e,"%)")},C={wrapper:{minHeight:"100vh",minWidth:758,backgroundImage:"linear-gradient(to bottom right,\n      ".concat(w(98),", ").concat(w(96),")"),paddingLeft:"calc(100vw - 100%)",paddingRight:0},wrapperGrid:{display:"grid",justifyItems:"center",padding:"20px 0 75px 0",minWidth:718},gridFormAndCalendar:{display:"grid",gridTemplateColumns:"auto auto",backgroundColor:"#fff",padding:"25px 30px 0 30px",borderRadius:5,border:"1px solid #bbb",boxShadow:"1px 1px 5px #9e9e9ee0"},wrapperList:{marginTop:20,backgroundColor:"#fff",padding:"25px 30px 5px 30px",borderRadius:5,border:"1px solid #bbb",boxShadow:"1px 1px 5px #9e9e9ee0"},topLine:{position:"relative",top:-9,height:1,backgroundColor:"#bbb",marginLeft:75,width:440},gridRow:{display:"grid",gridTemplateColumns:"repeat(4, auto)",alignItems:"start"},textFieldInput:{fontSize:20,marginTop:-18},textFieldLabel:{margin:"-18px 0 0 10px"},textFieldHelperText:{fontSize:8},displayNone:{display:"none"},storageWrapper:{position:"fixed",bottom:10,left:"calc(100vw - 370px)",width:320,boxShadow:"1px 1px 15px #5e5e5ee0"},storage:{padding:10,backgroundColor:"#cccccc",display:"grid",width:300,gridTemplateColumns:"repeat(4, 1fr)",justifyItems:"center"},buildVerticalGridItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto";return"auto"!==e&&(e+="px"),"auto"!==t&&(t+="px"),{display:"grid",gridAutoRows:"minmax(".concat(e,", ").concat(t,")")}},buildTextField:function(e){return{width:e?380:444,padding:"0 10px"}},buildPaddingTop:function(e){return{paddingTop:e}},buildRowText:function(e,t){return Object.assign({fontSize:20,width:444,cursor:"pointer",padding:"0 10px"},e?{color:"#bbb",textDecorationLine:"line-through"}:{},t?{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}:{whiteSpace:"pre-line",overflowWrap:"break-word",padding:"0 10px 7px 10px"})},buildCalendar:function(e){return{display:e?"block":"none",position:"absolute",zIndex:1,top:95,left:"calc(((100vw - 100%) / 2) + 50% + 50px)",backgroundImage:"linear-gradient(to bottom, #fff 70%, #d2e9f5)",border:"solid 1px grey",borderRadius:5,boxShadow:"3px 3px 7px grey"}},hiddenOverflow:function(){return document.body.style.overflow="hidden"},autoOverflow:function(){return document.body.style.overflow="auto"},buildModal:function(e){return{display:e?"block":"none",position:"fixed",zIndex:1,left:0,top:0,width:"100%",height:"100%",backgroundColor:"#aaaaaabb"}}},k=function(e){var t=e.input,n=t.name,a=t.onChange,r=t.value,c=e.meta,i=c.error,l=c.touched,u=e.helperText,d=e.label,s=e.placeholder,m=e.isEdit,p=Object(y.a)(e,["input","meta","helperText","label","placeholder","isEdit"]);return o.a.createElement(x.a,Object.assign({autoFocus:!0,onFocus:function(e){return m&&e.target.select()},autoComplete:"off",name:n,placeholder:s,style:C.buildTextField(m),value:r,onChange:a,inputProps:{style:C.textFieldInput},label:d,InputLabelProps:{style:C.textFieldLabel},error:i&&l,helperText:l?i:u,FormHelperTextProps:{style:C.textFieldHelperText}},p))},O=function(e){var t=e.color,n=void 0===t?"black":t,a=e.width,r=void 0===a?"20px":a,c=e.height,i=void 0===c?"20px":c,l=e.viewBox,u=void 0===l?"0 0 512 512":l,d=e.d,s=void 0===d?"M0,0z":d;return o.a.createElement("svg",{width:r,height:i,viewBox:u,xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fill:n,d:s}))},z=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 384 512",d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"}))},j=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 448 512",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}))},S=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 512 512",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}))},M=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 512 512",d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"}))},H=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 448 512",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}))},V=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 512 512",d:"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"}))},T=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 576 512",d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))},B=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 448 512",d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}))},F=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 384 512",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"}))},L=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 384 512",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"}))},N=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 448 512",d:"M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}))},D=function(e){return o.a.createElement(O,Object.assign({},e,{viewBox:"0 0 448 512",d:"M311.7 374.7l-17 17c-4.7 4.7-12.3 4.7-17 0L224 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l53.7 53.7 53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L257.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}))},I=function(e){var t=e.form,n=e.pristine,a=e.statusColor,r=e.text,c=e.isEdit,i=e.fieldValidate,l=e.unmount,u=c?"change note":"add note",d=c?"what changed?":"what's new?";return o.a.createElement(o.a.Fragment,null,!c&&o.a.createElement(E,{disabled:n,onClick:t.reset,tooltip:!n&&"clear"},o.a.createElement(z,{color:n?"grey":"black"})),c&&o.a.createElement(E,{disabled:!0},o.a.createElement(S,{color:a})),o.a.createElement(p.a,{name:r,component:"input",type:"text",validate:i},(function(e){return o.a.createElement(k,Object.assign({},e,{isEdit:c,label:u,placeholder:d}))})),!c&&o.a.createElement(E,{type:"submit",tooltip:"add note",disabled:n},o.a.createElement(j,null)),c&&o.a.createElement("span",null,o.a.createElement(E,{color:n?"primary":"secondary",onClick:l,tooltip:n?"cancel":"cancel changes"},o.a.createElement(V,null)),o.a.createElement(E,{type:"submit",tooltip:"save",disabled:!t.getState().values.text},o.a.createElement(T,null)),o.a.createElement(E,{disabled:!0},o.a.createElement(H,{color:"grey"}))))},R=function(e){return e.trim().replace(/\s+/g," ")},W=function(e){return e&&!/^\s+$/.test(e)?void 0:"Must not be empty"},J=function(e){var t,n,a=e.note,r=void 0===a?{}:a,c=e.isEdit,i=void 0!==c&&c,l=e.unmount,u=void 0===l?f.a:l,d=o.a.useContext(m),s=d.append,v=d.update,h=(t=5,function(e){return e&&R(e).length<t?"Must be ".concat(t," characters or more"):void 0}),b=(n=250,function(e){return e&&R(e).length>n?"Must be ".concat(n," characters or less"):void 0}),g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}(W,h,b),E=r.status?"darkgreen":"grey",y=i&&o.a.useCallback((function(e){27===e.keyCode&&u()}),[u]);return i&&o.a.useEffect((function(){return document.addEventListener("keydown",y,!1),function(){document.removeEventListener("keydown",y,!1)}}),[y]),o.a.createElement(p.b,{onSubmit:function(e){e.text=R(e.text),(i?v:s)(e)},initialValues:r,render:function(e){var t=e.handleSubmit,n=e.form,a=e.pristine,r=e.valid;return o.a.createElement("form",{onBlur:function(){return n.resetFieldState("text")},onSubmit:function(e){t(e),r&&(n.resetFieldState("text"),n.reset(),u())}},o.a.createElement(I,{form:n,pristine:a,statusColor:E,text:"text",isEdit:i,fieldValidate:g,unmount:u}))}})},A=n(125),P=function(e){var t=e.note,n=e.setEditId,a=t.id,r=t.status,c=t.text,l=o.a.useContext(m),u=l.updateStatus,d=l.remove,s=o.a.useState(!0),p=Object(i.a)(s,2),v=p[0],f=p[1],h=function(){var e=0,t=0,n=0,a=0;return function(o){if("mousedown"===o.type&&0===o.button&&(e=o.nativeEvent.x,t=o.nativeEvent.y),"mouseup"===o.type&&0===o.button&&(n=o.nativeEvent.x,a=o.nativeEvent.y,e===n&&t===a))return!0}}(),b=function(e){h(e)&&f(!v)};return o.a.createElement("div",{style:C.gridRow},o.a.createElement(E,{onClick:function(){return u(t)},tooltip:"change status"},o.a.createElement(S,{color:r?"green":"black"})),o.a.createElement(A.a,{style:C.buildRowText(r,v),onMouseDown:b,onMouseUp:b,variant:"body1",gutterBottom:!0},c),o.a.createElement(E,{onClick:function(){return n(a)},tooltip:"edit"},o.a.createElement(M,null)),o.a.createElement(E,{color:"secondary",onClick:function(){return d(t)},tooltip:"delete"},o.a.createElement(H,null)))},G=function(e){var t=null;return{onFocus:function(){clearTimeout(t)},onBlur:function(){t=setTimeout((function(){e()}))}}},Y=function(){var e=o.a.useContext(m).currNotes,t=o.a.useState(null),n=Object(i.a)(t,2),a=n[0],r=n[1],c=G((function(){return r(null)})),l=!1;return o.a.createElement("div",{style:C.buildVerticalGridItems(52)},e.map((function(e,t){if(e.id===a)return l=!0,o.a.createElement("div",{key:e.id,style:C.buildPaddingTop(1),onFocus:c.onFocus,onBlur:c.onBlur},o.a.createElement(J,{key:e.id,isEdit:!0,unmount:function(){return r(null)},note:e}));var n=!(0===t||l),i=n?0:1;return l=!1,o.a.createElement("div",{key:e.id,style:C.buildPaddingTop(i)},n&&o.a.createElement("div",{style:C.topLine}),o.a.createElement(P,{note:e,setEditId:r}))})))},U=n(47),$=n.n(U),q=n(11),K=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=Object(d.a)({},e,Object(q.a)({},t,n));return n.length||delete a[t],a},Q=function(){var e=o.a.useContext(m),t=e.notes,n=e.date,a=e.setModifiedNotes;return o.a.createElement("div",{style:C.storage},o.a.createElement("input",{type:"file",id:"contained-button-file",accept:"application/JSON",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(n){var o=n.target.result;if(t.type.match(/json.*/))if(o)if(function(t){try{JSON.parse(t)}catch(e){return!1}return!0}(o)){var r=JSON.parse(o);a(r)}else alert("This file have some problems, upload denied");else alert("File is empty");else alert("It is not a json file")},n.readAsText(t),document.getElementById("contained-button-file").value=""},style:C.displayNone}),o.a.createElement("label",{htmlFor:"contained-button-file"},o.a.createElement(E,{component:"span",onClick:function(e){$.a.isEmpty(t)||(window.confirm("\n        This action will destroy all your notes on this site.\n        You can save it first.\n        Are you sure you want to continue?")||e.preventDefault())},tooltip:"upload notes"},o.a.createElement(F,null))),o.a.createElement(E,{onClick:function(){if($.a.isEmpty(t))alert("There is nothing to save ...yet :)");else{var e=new Blob([JSON.stringify(t)],{type:"application/JSON"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="notes-".concat(Date.now(),".json"),document.body.appendChild(n),n.click()}},tooltip:"download notes"},o.a.createElement(L,null)),o.a.createElement(E,{color:"secondary",onClick:function(){if(t[n]){if(window.confirm("Delete today's notes?")){var e=K(t,n,void 0);a(e)}}else alert("Nothing to delete")},tooltip:"delete today's notes"},o.a.createElement(N,null)),o.a.createElement(E,{color:"secondary",onClick:function(){$.a.isEmpty(t)?alert("Nothing to delete"):window.confirm("Delete all your notes on this site?")&&a({})},tooltip:"delete all notes !!!"},o.a.createElement(D,null)))},X=n(65),Z=n.n(X),_=function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},ee=(n(93),Object(l.f)((function(e){var t=e.history,n=o.a.useContext(u),a=n.day,r=n.setDay,c=o.a.useContext(m).dates,l=o.a.useState(a),d=Object(i.a)(l,2),s=d[0],p=d[1],v=o.a.useState(!1),f=Object(i.a)(v,2),h=f[0],b=f[1],g=function(e,t){for(var n={sundays:{daysOfWeek:[0]},selectedDay:new Date(e)},a={sundays:{color:"salmon"},selectedDay:{color:"white",backgroundColor:"#55caee"}},o=_(e),r=0;r<t.length;r++){var c=t[r];c!==o&&(n[c]=new Date(c),a[c]={backgroundColor:"lightgreen"})}return{modifiers:n,modifiersStyles:a}}(a,c),y=G((function(){p(a),b(!1)})),x=function(e,n,a){var o="/todolist?".concat(_(e));r(e),setTimeout((function(){t.push(o),p(e),b(!1)}),50)};return o.a.createElement("div",{onFocus:y.onFocus,onBlur:y.onBlur},o.a.createElement(E,{onClick:function(){h&&p(a),b(!h)},tooltip:"calendar"},o.a.createElement(B,null)),o.a.createElement("div",{style:C.buildModal(h)},o.a.createElement("div",{onWheel:function(e){var t=e.nativeEvent.deltaY<0,n=s.getMonth(),a=t?n-1:n+1;p(new Date(s.getFullYear(),a))},onMouseOver:C.hiddenOverflow,onMouseOut:C.autoOverflow,style:C.buildCalendar(h)},o.a.createElement(Z.a,{onDayClick:x,todayButton:"Today",onTodayButtonClick:x,month:s,onMonthChange:function(e){return p(e)},fixedWeeks:!0,enableOutsideDaysClick:!1,selectedDays:a,modifiers:g.modifiers,modifiersStyles:g.modifiersStyles}))))}))),te=function(){return JSON.parse(localStorage.notes||'""')||{}},ne=function(e){localStorage.notes=JSON.stringify(e)},ae=n(69),oe=n(67),re=n.n(oe),ce=n(52),ie=n.n(ce),le=n(68),ue=n.n(le),de=Object(ae.a)({palette:{primary:{main:ie.a[50],dark:re.a[100]},secondary:{main:ie.a[50],dark:ue.a[400]}}}),se=function(e){var t=e.date,n=o.a.useState(te()),a=Object(i.a)(n,2),r=a[0],c=a[1],l=function(e){ne(e),c(e)},u=function(e){var n=K(r,t,e);l(n)},p=function(e){var t=[];for(var n in e)t.push(n);return t}(r),v=r[t]||[];return o.a.createElement(s.a,{theme:de},o.a.createElement(m.Provider,{value:{notes:r,currNotes:v,setCurrNotes:u,setModifiedNotes:l,date:t,dates:p,append:function(e){var t,n=e.text;v.push({id:(t=v,t.length?t[t.length-1].id+1:1),status:!1,text:n}),u(v)},update:function(e){var t=e.id,n=e.text;u(v.map((function(e){return e.id===t?Object(d.a)({},e,{text:n}):e})))},updateStatus:function(e){var t=e.id;u(v.map((function(e){return e.id===t?Object(d.a)({},e,{status:!e.status}):e})))},remove:function(e){var t=e.id;u(v.filter((function(e){return e.id!==t})))}}},o.a.createElement("div",{style:C.wrapper},o.a.createElement("div",{style:C.wrapperGrid},o.a.createElement("div",{style:C.buildVerticalGridItems(92)},o.a.createElement("div",{style:C.gridFormAndCalendar},o.a.createElement(J,null),o.a.createElement(ee,null)),0!==v.length&&o.a.createElement("div",{style:C.wrapperList},o.a.createElement(Y,null)))),o.a.createElement("div",{style:C.storageWrapper},o.a.createElement(Q,null)))))},me=Object(l.f)((function(e){var t=e.location,n=o.a.useState(new Date),a=Object(i.a)(n,2),r=a[0],c=a[1],d=o.a.useState(_(r)),s=Object(i.a)(d,2),m=s[0],p=s[1],v=t.search.substring(1);if(v!==m&&function(e){var t=_(new Date(e));return t===e&&"NaN-NaN-NaN"!==t}(v)){var f=new Date(v),h=_(f);return c(f),p(h),o.a.createElement(l.a,{to:"/todolist?".concat(h)})}return v!==m?o.a.createElement(l.a,{to:"/todolist?".concat(m)}):o.a.createElement(u.Provider,{value:{day:r,setDay:c}},o.a.createElement(l.b,{to:{pathname:"/todolist",search:"".concat(m)},render:function(){return o.a.createElement(se,{date:m})}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(38);c.a.render(o.a.createElement(pe.a,null,o.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.892fda5f.chunk.js.map