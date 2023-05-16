import{m as ae,u as ne,a as te,b as le}from"./group.09d2e2d8.js";import{j as D,m as G,q as L,G as se,s as k,b as n,U as oe,V as ie,Q as ue,I as $,n as g,W as de,X as ce}from"./index.004e47e7.js";import{m as T,a as R,b as p,c as A,d as z,u as j,e as w,f as x,g as E,R as ve,h as re,i as me,j as fe,k as be,l as ke,n as ge,o as ye,p as Ve,q as Ce,r as Pe,s as Be,t as he,v as y,V}from"./router.29d85a75.js";import{m as q,u as C,a as _e,b as Ie}from"./intersectionObserver.526b86ef.js";import{V as Se}from"./VProgressCircular.5d39d9c4.js";const $e=D({name:"VBtnGroup",props:{divided:Boolean,...T(),...R(),...p(),...A(),...q(),...G(),...z()},setup(e,o){let{slots:l}=o;const{themeClasses:a}=L(e),{densityClasses:i}=j(e),{borderClasses:u}=w(e),{elevationClasses:d}=x(e),{roundedClasses:v}=E(e);se({VBtn:{height:"auto",color:k(e,"color"),density:k(e,"density"),flat:!0,variant:k(e,"variant")}}),C(()=>n(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},a.value,u.value,i.value,d.value,v.value]},l))}}),O=Symbol.for("vuetify:v-btn-toggle");oe()({name:"VBtnToggle",props:ae(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:l}=o;const{isSelected:a,next:i,prev:u,select:d,selected:v}=ne(e,O);return C(()=>{var m;return n($e,{class:"v-btn-toggle"},{default:()=>[(m=l.default)==null?void 0:m.call(l,{isSelected:a,next:i,prev:u,select:d,selected:v})]})}),{next:i,prev:u,select:d}}});function De(e,o){ie(()=>{var l;return(l=e.isActive)==null?void 0:l.value},l=>{e.isLink.value&&l&&o&&ue(()=>{o(!0)})},{immediate:!0})}const Ae=D({name:"VBtn",directives:{Ripple:ve},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:O},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:$,appendIcon:$,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...T(),...A(),...R(),...re(),...p(),...te(),...me(),...fe(),...be(),...ke(),..._e(),...q({tag:"button"}),...G(),...z({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,o){let{attrs:l,slots:a}=o;const{themeClasses:i}=L(e),{borderClasses:u}=w(e),{colorClasses:d,colorStyles:v,variantClasses:m}=ge(e),{densityClasses:F}=j(e),{dimensionStyles:N}=ye(e),{elevationClasses:Q}=x(e),{loaderClasses:U}=Ve(e),{locationStyles:W}=Ce(e),{positionClasses:X}=Pe(e),{roundedClasses:H}=E(e),{sizeClasses:J,sizeStyles:K}=Ie(e),t=le(e,e.symbol,!1),c=Be(e,l),M=g(()=>{var r;return e.active!==!1&&(e.active||((r=c.isActive)==null?void 0:r.value)||(t==null?void 0:t.isSelected.value))}),f=g(()=>(t==null?void 0:t.disabled.value)||e.disabled),Y=g(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return De(c,t==null?void 0:t.select),C(()=>{var r,P,B,h;const _=c.isLink.value?"a":e.tag,I=!t||t.isSelected.value,Z=!!(e.prependIcon||a.prepend),ee=!!(e.appendIcon||a.append),S=!!(e.icon&&e.icon!==!0);return de(n(_,{type:_==="a"?void 0:"button",class:["v-btn",t==null?void 0:t.selectedClass.value,{"v-btn--active":M.value,"v-btn--block":e.block,"v-btn--disabled":f.value,"v-btn--elevated":Y.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,u.value,I?d.value:void 0,F.value,Q.value,U.value,X.value,H.value,J.value,m.value],style:[I?v.value:void 0,N.value,W.value,K.value],disabled:f.value||void 0,href:c.href.value,onClick:b=>{var s;f.value||((s=c.navigate)==null||s.call(c,b),t==null||t.toggle())}},{default:()=>{var b;return[he(!0,"v-btn"),!e.icon&&Z&&n(y,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var s;return[n("span",{class:"v-btn__prepend"},[(s=(r=a.prepend)==null?void 0:r.call(a))!=null?s:n(V,null,null)])]}}),n("span",{class:"v-btn__content","data-no-activator":""},[n(y,{key:"content",defaults:{VIcon:{icon:S?e.icon:void 0}}},{default:()=>{var s;return[(s=(P=a.default)==null?void 0:P.call(a))!=null?s:S&&n(V,{key:"icon"},null)]}})]),!e.icon&&ee&&n(y,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var s;return[n("span",{class:"v-btn__append"},[(s=(B=a.append)==null?void 0:B.call(a))!=null?s:n(V,null,null)])]}}),!!e.loading&&n("span",{key:"loader",class:"v-btn__loader"},[(b=(h=a.loader)==null?void 0:h.call(a))!=null?b:n(Se,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ce("ripple"),!f.value&&e.ripple,null]])}),{}}});export{Ae as V};
