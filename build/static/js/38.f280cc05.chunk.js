(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[38],{1604:function(e,t,a){"use strict";var n=a(9),r=a(63),o=a(161),c=a.n(o),d=a(0),i=a(1613),l=a.n(i),u=a(76),s=["align","children","className","color","margin","tag","testId","truncate"],f=c.a.bind(l.a);t.a=function(e){var t=e.align,a=e.children,o=e.className,c=void 0===o?"":o,i=e.color,l=e.margin,p=e.tag,h=e.testId,m=e.truncate,_=Object(r.a)(e,s),b=f(c,"heading",t,p,l?Object(u.a)(l,"margin"):void 0,i,{truncate:m});return d.createElement(p,Object(n.a)(Object(n.a)({},_),{},{className:b,"data-testid":h||""}),a)}},1613:function(e,t,a){e.exports={heading:"Heading_heading__3Wz9P",h1:"Heading_h1__MXfCA",h2:"Heading_h2__3X6Ts",h3:"Heading_h3__1k2fD",h4:"Heading_h4__1YCmR",center:"Heading_center__28MHY",right:"Heading_right__1fQM1",truncate:"Heading_truncate__2Lq93",marginSm:"Heading_marginSm__13YwX",marginMd:"Heading_marginMd__2AnZN",marginLg:"Heading_marginLg__2ZfEq",marginXl:"Heading_marginXl__3RHt7",soft:"Heading_soft__2Zu43",medium:"Heading_medium__2X8Z-",dark:"Heading_dark__Ds2QB",fancy:"Heading_fancy__1Wx6l",warning:"Heading_warning__2lrZC",primary:"Heading_primary__2hOk2",secondary:"Heading_secondary__37lKs",disabled:"Heading_disabled__30DjG",error:"Heading_error__t5ujr",white:"Heading_white__2gkIK"}},1656:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.default=e.exports,e.exports.__esModule=!0},1676:function(e,t,a){var n=a(1656);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1755:function(e,t,a){var n=a(1756),r=a(1757),o=a(1676),c=a(1758);e.exports=function(e,t){return n(e)||r(e,t)||o(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},1756:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},1757:function(e,t){e.exports=function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],c=!0,d=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(i){d=!0,r=i}finally{try{c||null==a.return||a.return()}finally{if(d)throw r}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},1758:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},1872:function(e,t,a){"use strict";var n=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=function(t,a){return o.default.createElement(c.default,(0,r.default)({ref:a},t),e)};0;return a.muiName=c.default.muiName,o.default.memo(o.default.forwardRef(a))};var r=n(a(174)),o=n(a(0)),c=n(a(475))},2935:function(e,t,a){"use strict";var n=a(151),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=r(a(174)),c=r(a(192)),d=n(a(0)),i=(r(a(18)),r(a(14))),l=r(a(467)),u={root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}};t.styles=u;var s=d.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.row,l=void 0!==r&&r,u=(0,c.default)(e,["classes","className","row"]);return d.createElement("div",(0,o.default)({className:(0,i.default)(a.root,n,l&&a.row),ref:t},u))})),f=(0,l.default)(u,{name:"MuiFormGroup"})(s);t.default=f},2936:function(e,t,a){"use strict";var n=a(151),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=r(a(174)),c=r(a(192)),d=n(a(0)),i=(r(a(18)),r(a(14))),l=(a(32),r(a(2937))),u=r(a(2941)),s=r(a(2942)),f=a(314),p=r(a(2943)),h=r(a(870)),m=r(a(467)),_=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,f.alpha)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,f.alpha)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}};t.styles=_;var b=d.createElement(s.default,null),v=d.createElement(u.default,null),g=d.createElement(p.default,null),j=d.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?b:a,r=e.classes,u=e.color,s=void 0===u?"secondary":u,f=e.icon,p=void 0===f?v:f,m=e.indeterminate,_=void 0!==m&&m,j=e.indeterminateIcon,x=void 0===j?g:j,y=e.inputProps,O=e.size,k=void 0===O?"medium":O,C=(0,c.default)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=_?x:p,H=_?x:n;return d.createElement(l.default,(0,o.default)({type:"checkbox",classes:{root:(0,i.default)(r.root,r["color".concat((0,h.default)(s))],_&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:s,inputProps:(0,o.default)({"data-indeterminate":_},y),icon:d.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===k?k:w.props.fontSize}),checkedIcon:d.cloneElement(H,{fontSize:void 0===H.props.fontSize&&"small"===k?k:H.props.fontSize}),ref:t},C))})),x=(0,m.default)(_,{name:"MuiCheckbox"})(j);t.default=x},2937:function(e,t,a){"use strict";var n=a(151),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=r(a(174)),c=r(a(1755)),d=r(a(192)),i=n(a(0)),l=(r(a(18)),r(a(14))),u=(a(32),r(a(2938))),s=r(a(2939)),f=r(a(467)),p=r(a(294)),h={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}};t.styles=h;var m=i.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,r=e.checkedIcon,f=e.classes,h=e.className,m=e.defaultChecked,_=e.disabled,b=e.icon,v=e.id,g=e.inputProps,j=e.inputRef,x=e.name,y=e.onBlur,O=e.onChange,k=e.onFocus,C=e.readOnly,w=e.required,H=e.tabIndex,E=e.type,M=e.value,P=(0,d.default)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=(0,u.default)({controlled:n,default:Boolean(m),name:"SwitchBase",state:"checked"}),I=(0,c.default)(S,2),N=I[0],A=I[1],z=(0,s.default)(),B=_;z&&"undefined"===typeof B&&(B=z.disabled);var R="checkbox"===E||"radio"===E;return i.createElement(p.default,(0,o.default)({component:"span",className:(0,l.default)(f.root,h,N&&f.checked,B&&f.disabled),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){y&&y(e),z&&z.onBlur&&z.onBlur(e)},ref:t},P),i.createElement("input",(0,o.default)({autoFocus:a,checked:n,defaultChecked:m,className:f.input,disabled:B,id:R&&v,name:x,onChange:function(e){var t=e.target.checked;A(t),O&&O(e,t)},readOnly:C,ref:j,required:w,tabIndex:H,type:E,value:M},g)),N?r:b)})),_=(0,f.default)(h,{name:"PrivateSwitchBase"})(m);t.default=_},2938:function(e,t,a){"use strict";var n=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.controlled,a=e.default,n=(e.name,e.state,r.useRef(void 0!==t).current),o=r.useState(a),c=o[0],d=o[1],i=n?t:c;0;var l=r.useCallback((function(e){n||d(e)}),[]);return[i,l]};var r=n(a(0))},2939:function(e,t,a){"use strict";var n=a(98),r=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return o.useContext(c.default)};var o=r(a(0)),c=n(a(2940))},294:function(e,t,a){"use strict";a.r(t);var n=a(426);a.d(t,"default",(function(){return n.a}))},2940:function(e,t,a){"use strict";var n=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.useFormControl=function(){return r.useContext(o)},t.default=void 0;var r=n(a(0)),o=r.createContext();var c=o;t.default=c},2941:function(e,t,a){"use strict";var n=a(98),r=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(1872)).default)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");t.default=c},2942:function(e,t,a){"use strict";var n=a(98),r=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(1872)).default)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");t.default=c},2943:function(e,t,a){"use strict";var n=a(98),r=a(151);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(1872)).default)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");t.default=c},2968:function(e,t,a){"use strict";a.r(t);var n,r,o=a(9),c=a(43),d=a(26),i=a(2935),l=a.n(i),u=a(2936),s=a.n(u),f=a(604),p=a.n(f),h=a(0),m=a(150),_=a(24),b=a(12),v=a(1604),g=a(86),j=a(228),x=a(38),y=a(767),O=a(766),k=a(21),C=a(158),w=a(190),H=a(768),E=a(2),M=Object(_.default)(m.a)(n||(n=Object(d.a)(["\n  padding: ",";\n"])),b.lg),P=Object(_.default)(C.a)(r||(r=Object(d.a)(["\n  margin-bottom: 1em;\n"])));t.default=function(){var e=Object(x.d)(),t=Object(x.e)(j.a),a=Object(x.e)(j.b),n=Object(k.l)(),r=Object(H.a)(),d=Object(c.a)(r,2),i=d[0],u=d[1],f=Object(w.g)().trackEvent;Object(h.useEffect)((function(){f(w.c.APPEARANCE)}),[f]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(M,{children:[Object(E.jsx)(v.a,{tag:"h2",children:"Use Chain-Specific Addresses"}),Object(E.jsx)(g.a,{children:"You can choose whether to prepend EIP-3770 short chain names accross Safes."}),Object(E.jsx)(P,{hash:n}),Object(E.jsxs)(l.a,{children:[Object(E.jsx)(p.a,{control:Object(E.jsx)(s.a,{checked:a,onChange:function(t,a){e(Object(y.b)({showShortName:a}));var n="".concat(w.c.APPEARANCE.label," (").concat(a?"Enable":"Disable"," EIP-3770 prefixes)");f(Object(o.a)(Object(o.a)({},w.c.APPEARANCE),{},{label:n}))},name:"showShortName"}),label:"Prepend addresses with chain prefix."}),Object(E.jsx)(p.a,{control:Object(E.jsx)(s.a,{checked:t,onChange:function(t,a){return e(Object(O.b)({copyShortName:a}))},name:"copyShortName"}),label:"Copy addresses with chain prefix."})]})]}),Object(E.jsxs)(M,{children:[Object(E.jsx)(v.a,{tag:"h2",children:"Theme (experimental)"}),Object(E.jsx)(l.a,{children:Object(E.jsx)(p.a,{control:Object(E.jsx)(s.a,{checked:i,onChange:function(){return u(!i)},name:"showShortName"}),label:"Inverted colors"})})]})]})}}}]);
//# sourceMappingURL=38.f280cc05.chunk.js.map