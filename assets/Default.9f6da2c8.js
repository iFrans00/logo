import{_ as k,o as n,c as m,b as t,w as i,a as o,d as _,z as f,F as v,e as b,g as c,au as A,t as h,r as L}from"./index.004e47e7.js";import{V as g}from"./router.29d85a75.js";import{V as D}from"./VDivider.771593fd.js";import{a as I,b as x,c as B,V as C,d as z,e as U}from"./VApp.886a4858.js";import{V as r}from"./VListItem.6bcc7c62.js";import{V}from"./VBtn.090fcb96.js";import{V as j,a as F,b as M}from"./VSelect.2f68ac95.js";import{V as N}from"./VAvatar.ca7cbba2.js";import"./intersectionObserver.526b86ef.js";import"./index.77a03e63.js";import"./VImg.5c881921.js";import"./VProgressCircular.5d39d9c4.js";import"./createSimpleFunctional.3302695b.js";import"./group.09d2e2d8.js";import"./VTextField.b6a06af1.js";import"./VInput.0b156b01.js";import"./VSelectionControl.19765feb.js";import"./VChip.c79faf3f.js";const q={components:{},data(){return{select:{state:"Sanbox",abbr:"FL"},items:[{state:"Production",abbr:"FL"},{state:"Sanbox",abbr:"FL"}],it:[{type:"subheader",title:"Settings"},{subtitle:'<div class="uppercase w-full py-1 bg-white shadow-md rounded-inner text-center font-semibold name">name</div>'},{type:"divider",inset:!0},{prependIcon:"mdi-play",subtitle:'<div class="text-red-500">Logout</div>'},{type:"divider",inset:!0},{prependIcon:"mdi-play",title:"Brunch this weekend?"},{type:"divider",inset:!0}],drawer:null,getStart:[["Home","mdi-home","/sanbox/wellcome"],["Dashboard","mdi-view-dashboard","/sanbox/dashboard"]],App:[["Home","mdi-home","/sanbox/application"],["Callback","mdi-access-point","/sanbox/callback"],["Config","mdi-file-cog","/sanbox/methods"]],setting:[["Account","mdi-account-circle","/sanbox/setting-account"],["URlendpoint","mdi-antenna","/sanbox/setting-call"]],liste:[{icon:"mdi-view-dashboard",title:"Dashboard",value:this.dash,grup:"no",to:"/member/dashboard"},{icon:"mdi-apps-box",title:"My_Application",value:this.app,grup:"yes",to:"/member/application"},{icon:"mdi-beaker",title:"Sanbox",value:this.sanbox,grup:"yes",to:"/sanbox"},{icon:"mdi-api",title:"Api & Integrasi",value:this.api,grup:"yes",to:"/member/integrasi"}],last:[{icon:"mdi-application-brackets",title:"Application",value:"application",grup:"no",to:"/sanbox/application"},{icon:"mdi-bank-transfer",title:"Methods",value:"methods",grup:"no",to:"/sanbox/methods"},{icon:"mdi-briefcase-arrow-left-right",title:"callback",value:"callback",grup:"yes",to:"/sanbox/callback"},{icon:"mdi-api",title:"Api & Integrasi",value:"api",grup:"yes",to:"/sanbox/docs"},{icon:"mdi-cog",title:"Settings",value:"setting",grup:"yes",to:"/sanbox/setting"}],sub:'<div class="text-red-500">Logout</div>',email:"",name:""}},methods:{updown(){var a=document.querySelectorAll(".updown")[0];a.style.display=="none"?a.style.display="grid":a.style.display="none"},profile(){alert(0)},changes(){this.select.state=="Sanbox"?this.$router.push({name:"Sanbox"}):this.$router.push({name:"Dashboard | Pro"})},logout(){this.$router.push({name:"Logout"})}},created(){var a=localStorage.getItem("Use")==null?window.location.replace("/"):JSON.parse(localStorage.getItem("Use"));this.email=a.email,this.name=a.name},mounted(){}},P={class:"py-5 border-b rounded-b-lg flex justify-center w-full"},R={class:"text-3xl font-semibold flex text-white"},T=o("div",{class:"capitalize"},"logo",-1),G={class:"-translate-x-4 translate-y-1"},H={class:""},O=o("div",{class:"py-3 rounded-b ml-2 text-gray-200 border-b text-sm uppercase font-medium"}," Application ",-1),E=o("div",{class:"py-3 rounded-b ml-2 text-gray-200 border-b text-sm uppercase font-medium"}," Lain-lain ",-1),J={class:""},K={class:"flex place-items-center text-gray-800 gap-3"},Q=o("div",{class:"sus text-xs font-semibold"},null,-1),W={class:"mt-5 will"},X={class:""},Y={class:"absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"},Z={class:"py-1 divide-y divide-gray-100",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},$={href:"#",class:"",role:"menuitem"},ee={class:"flex flex-row border-gray-400"},te={class:"select-none cursor-pointer p-2 rounded-md flex flex-1 items-center"},oe={class:"flex flex-col items-center justify-center mr-4"},ie={class:"flex-1 pl-1 md:mr-16"},ae={class:"font-semibold text-gray-700 capitalize"},se={class:"text-sm text-gray-600"},ne=o("div",{class:"flex mx-2 justify-center"},[o("div",null," Logout ")],-1);function le(a,l,y,w,s,S){return n(),m("div",null,[t(B,{modelValue:s.drawer,"onUpdate:modelValue":l[0]||(l[0]=e=>s.drawer=e),color:"blue-grey-darken-4"},{default:i(()=>[o("div",P,[o("div",R,[T,o("div",G,[t(g,{color:"info"},{default:i(()=>[_("mdi-circle-small")]),_:1})])])]),t(D),t(I,{density:"compact",nav:""},{default:i(()=>[o("div",H,[t(x,{value:"getStart"},{activator:i(({props:e})=>[t(r,f(e,{"prepend-icon":"mdi-bug-play",title:"Getting started"}),null,16)]),default:i(()=>[(n(!0),m(v,null,b(s.getStart,([e,d,u],p)=>(n(),c(r,{key:p,title:e,"prepend-icon":d,value:e,to:u},null,8,["title","prepend-icon","value","to"]))),128))]),_:1}),O,t(x,{value:"Appl"},{activator:i(({props:e})=>[t(r,f(e,{"prepend-icon":"mdi-application-brackets",title:"Application"}),null,16)]),default:i(()=>[(n(!0),m(v,null,b(s.App,([e,d,u],p)=>(n(),c(r,{key:p,title:e,"prepend-icon":d,value:e,to:u},null,8,["title","prepend-icon","value","to"]))),128))]),_:1}),t(r,{"prepend-icon":"mdi-google-analytics",title:"Analytics",value:"analytics",to:"/sanbox/analytics"}),E,t(x,{value:"Settings"},{activator:i(({props:e})=>[t(r,f(e,{"prepend-icon":"mdi-cog",title:"Settings"}),null,16)]),default:i(()=>[(n(!0),m(v,null,b(s.setting,([e,d,u],p)=>(n(),c(r,{key:p,title:e,"prepend-icon":d,value:e,to:u},null,8,["title","prepend-icon","value","to"]))),128))]),_:1}),t(r,{"prepend-icon":"mdi-api",title:"Api & Integrasi",value:"api",to:"/docs"})]),(n(!0),m(v,null,b(a.list,(e,d)=>(n(),c(r,{"prepend-icon":e.icon,title:e.title,value:e.value,to:e.to,key:d},null,8,["prepend-icon","title","value","to"]))),128))]),_:1})]),_:1},8,["modelValue"]),t(C,{flat:"",elevation:"1",density:"compact"},{prepend:i(()=>[o("div",J,[t(V,{variant:"icon",icon:"mdi-menu-open",onClick:l[1]||(l[1]=A(e=>s.drawer=!s.drawer,["stop"]))})]),t(j,null,{default:i(()=>[o("div",K,[Q,o("div",W,[t(F,{modelValue:s.select,"onUpdate:modelValue":[l[2]||(l[2]=e=>s.select=e),S.changes],density:"compact",items:s.items,"item-title":"state","item-value":"abbr",label:"Select",color:"info","return-object":"","single-line":""},null,8,["modelValue","onUpdate:modelValue","items"])])])]),_:1})]),append:i(()=>[o("div",X,[t(V,{variant:"text",color:"blue-grey-darken-4",id:"menu-activator"},{prepend:i(()=>[t(g,{color:"blue-grey-darken-4",size:"x-large"},{default:i(()=>[_(" mdi-account-circle-outline ")]),_:1})]),default:i(()=>[_(" "+h(s.name)+" ",1),t(g,{size:"large"},{default:i(()=>[_(" mdi-menu-down ")]),_:1})]),_:1}),t(M,{activator:"#menu-activator"},{default:i(()=>[o("div",Y,[o("div",Z,[o("a",$,[o("div",ee,[o("div",te,[o("div",oe,[t(N,{color:"surface-variant",size:"43"})]),o("div",ie,[o("div",ae,h(s.name),1),o("div",se,h(s.email),1)])])])]),o("div",{onClick:l[3]||(l[3]=e=>this.$router.push({name:"Logout"})),class:"flex items-center block px-4 py-2 text-md text-red-600 hover:bg-gray-100 hover:opacity-70 font-medium tracking-wider",role:"menuitem"},[t(g,null,{default:i(()=>[_("mdi-logout-variant")]),_:1}),ne])])])]),_:1})])]),_:1})])}const re=k(q,[["render",le]]),de={__name:"View",setup(a){return document.querySelector("title").textContent="Dashboard | Sanbox",(l,y)=>{const w=L("router-view");return n(),c(z,null,{default:i(()=>[t(w)]),_:1})}}};const ce={mounted(){document.querySelector(".sus").textContent=this.$router.currentRoute._value.name;var a=()=>{setTimeout(a,1e3),document.querySelector(".sus").textContent=this.$router.currentRoute._value.name};a()}},ue=Object.assign(ce,{__name:"Default",setup(a){return(l,y)=>(n(),c(U,null,{default:i(()=>[t(re),t(de)]),_:1}))}}),Be=k(ue,[["__scopeId","data-v-08257215"]]);export{Be as default};
