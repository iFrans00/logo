import{_ as k,o as i,c as a,a as n,b as s,w as A,d as y,F as u,e as f,t as S,h}from"./index.004e47e7.js";import{V as _,a as x}from"./VCard.9c4260de.js";import{V as N}from"./router.29d85a75.js";import{V as p}from"./VSwitch.0f49ec58.js";import"./intersectionObserver.526b86ef.js";import"./createSimpleFunctional.3302695b.js";import"./VAvatar.ca7cbba2.js";import"./VImg.5c881921.js";import"./VSelectionControl.19765feb.js";import"./VInput.0b156b01.js";import"./index.77a03e63.js";import"./VProgressCircular.5d39d9c4.js";const O={data(){return{email:"",bniVa:!0,data:[{group:"Virtual Account",code:"MYBVA",name:"Maybank Virtual Account",type:"direct",fee_merchant:{flat:4250,percent:0},fee_customer:{flat:0,percent:0},total_fee:{flat:4250,percent:"0.00"},minimum_fee:4e3,maximum_fee:4500,icon_url:"https://tripay.co.id/xxxxxxxxx.png",active:!0}],col:[{title:"Bank-Virtual-Account",id:"VA"},{title:"Store",id:"S"},{title:"E-Wallet",id:"OW"},{title:"Plugins",id:"LL"}],LL:[{title:"Wocommerce",aktivasi:"Aktif",logo:"logo",admin:1200,id:"lls",model:!1},{title:"Wordpress",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"lls",model:!1}],VA:[{title:"BNI",aktivasi:"Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"BRI",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"Mandiri",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"BSI",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"PermataBank",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"CIMB NIAGA",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"Danamon",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"Maybank",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"BNC",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1},{title:"Bank Muamalat",aktivasi:"Non-Aktif",logo:"http://localhost:3000/img/BCA.png",admin:1200,id:"val",model:!1}],S:[{title:"INDOMART",aktivasi:"Aktif",logo:"logo",admin:1200,id:"sx",model:!1},{title:"ALFAMART",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"sx",model:!1},{title:"ALFAMidi",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"sx",model:!1},{title:"Toko All in one",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"sx",model:!1}],OW:[{title:"OVO",aktivasi:"Aktif",logo:"logo",admin:1200,id:"own",model:!1},{title:"ShopeePay",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"own",model:!1},{title:"QRIS",aktivasi:"Non-Aktif",logo:"logo",admin:1200,id:"own",model:!1}]}},methods:{},created(){var c=JSON.parse(localStorage.getItem("Use"));this.email=c.email,fetch("http://127.0.0.1:8000/api/sanbox",{method:"GET",headers:{"Content-Type":"application/json","X-Client-id":"556677919737231","X-Private-key":"4muwdbABKopwOgN7wnU"}}).then(r=>r.json()).then(r=>{console.log(r)})},mounted(){var c=document.querySelectorAll("#val"),r=document.querySelectorAll("#own"),g=document.querySelectorAll("#sx");c.forEach((v,l)=>{c[l].addEventListener("change",()=>{this.VA[l].model==!0?this.VA[l].model=!1:this.VA[l].model=!0,setTimeout(()=>{var m=this.VA.filter(t=>t.model==!0);this.LL.filter(t=>t.model==!0);var o=this.S.filter(t=>t.model==!0),d=this.OW.filter(t=>t.model==!0),e=new FormData;e.append("Virtual_Account",JSON.stringify(m)),e.append("Store",JSON.stringify(o)),e.append("E_Wallet",JSON.stringify(d)),fetch("http://127.0.0.1:8000/sanbox/app",{method:"POST",headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:e}).then(t=>t.json()).then(t=>{console.log(t)})},100)})}),r.forEach((v,l)=>{r[l].addEventListener("change",()=>{this.OW[l].model==!0?this.OW[l].model=!1:this.OW[l].model=!0,setTimeout(()=>{var m=this.VA.filter(t=>t.model==!0);this.LL.filter(t=>t.model==!0);var o=this.S.filter(t=>t.model==!0),d=this.OW.filter(t=>t.model==!0),e=new FormData;e.append("Virtual_Account",JSON.stringify(m)),e.append("Store",JSON.stringify(o)),e.append("E_Wallet",JSON.stringify(d)),fetch("http://127.0.0.1:8000/sanbox/app",{method:"POST",headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:e}).then(t=>t.json()).then(t=>{console.log(t)})},100)})}),g.forEach((v,l)=>{g[l].addEventListener("change",()=>{this.S[l].model==!0?this.S[l].model=!1:this.S[l].model=!0,setTimeout(()=>{var m=this.VA.filter(t=>t.model==!0);this.LL.filter(t=>t.model==!0);var o=this.S.filter(t=>t.model==!0),d=this.OW.filter(t=>t.model==!0),e=new FormData;e.append("Virtual_Account",JSON.stringify(m)),e.append("Store",JSON.stringify(o)),e.append("E_Wallet",JSON.stringify(d)),fetch("http://127.0.0.1:8000/sanbox/app",{method:"POST",headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:e}).then(t=>t.json()).then(t=>{console.log(t)})},100)})})}},V={class:"h-full max-w-full overflow-y-auto p-8 bg-gray-200 bg-opacity-30"},b={class:"max-w-7xl mx-auto",style:{"min-height":"85.4vh"}},B={class:"p-3 flex flex-row gap-1 text-gray-600 place-items-center"},C={class:""},w=n("div",{class:"text-xl font-medium tracking-wider"}," Configuration ",-1),L={class:"relative p-4"},W={class:"grid grid-cols-2 md:grid-cols-3 gap-2"},T=["id"],E={class:"p-3 text-xl font-semibold text-gray-700 capitalize"},F={key:0,class:"grid grid-cols-2 text-gray-700"};function J(c,r,g,v,l,m){return i(),a("div",V,[n("div",b,[s(_,{class:"h-full"},{default:A(()=>[s(x,{class:"border-b border-t-8 border-gray-500"},{default:A(()=>[n("div",B,[n("div",C,[s(N,null,{default:A(()=>[y(" mdi-application-cog ")]),_:1})]),w])]),_:1}),n("div",L,[n("div",W,[(i(!0),a(u,null,f(l.col,(o,d)=>(i(),a("div",{class:"flex flex-col gap-0 w-full",key:d,id:o.id},[n("div",E,S(o.title),1),o.id=="VA"?(i(),a("div",F,[(i(!0),a(u,null,f(l.VA,(e,t)=>(i(),a("div",{class:"",key:t},[s(p,{"model-value":e.model,label:e.title,color:"primary",id:e.id,"hide-details":""},null,8,["model-value","label","id"])]))),128))])):h("",!0),o.id=="S"?(i(!0),a(u,{key:1},f(l.S,(e,t)=>(i(),a("div",{class:"text-gray-700",key:t},[s(p,{"model-value":e.model,label:e.title,color:"primary",id:e.id,"hide-details":""},null,8,["model-value","label","id"])]))),128)):h("",!0),o.id=="OW"?(i(!0),a(u,{key:2},f(l.OW,(e,t)=>(i(),a("div",{class:"text-gray-700",key:t},[s(p,{"model-value":e.model,label:e.title,color:"primary",id:e.id,"hide-details":""},null,8,["model-value","label","id"])]))),128)):h("",!0),o.id=="LL"?(i(!0),a(u,{key:3},f(l.LL,(e,t)=>(i(),a("div",{class:"text-gray-700",key:t},[s(p,{"model-value":e.model,label:e.title,color:"primary",id:e.id,"hide-details":""},null,8,["model-value","label","id"])]))),128)):h("",!0)],8,T))),128))])])]),_:1})])])}const Q=k(O,[["render",J]]);export{Q as default};
