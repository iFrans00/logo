import{C,V}from"./VTable.36582b05.js";import{ad as A,o as a,c as s,_ as B,r as J,b as o,w as l,a as t,d as f,F as p,e as h,t as c}from"./index.004e47e7.js";import{V as x,a as y}from"./VCard.9c4260de.js";import{V as v}from"./router.29d85a75.js";import"./intersectionObserver.526b86ef.js";import"./createSimpleFunctional.3302695b.js";import"./VAvatar.ca7cbba2.js";import"./VImg.5c881921.js";const T={id:"myChar",class:"w-full max-h-full"},L={__name:"Line",setup(w){return A(()=>{const _=document.getElementById("myChar");var u=new C(_,{type:"line",data:{labels:["Jan","Feb","Mart","April","May","Jun","July"],datasets:[{label:"Pendapatan",data:[650,590,800,810,560,550,400],fill:!0,backgroundColor:d=>{const r=["#7B1FA2","hsla(281, 50%, 50%, 0.43)","#E57373"];if(!d.chart.chartArea)return;const{ctx:m,data:b,chartArea:{top:e,bottom:n}}=d.chart,g=m.createLinearGradient(0,e,0,n),k=1/(r.length-1);for(let i=0;i<r.length-1;i++)g.addColorStop(0+i*k,r[i]);return g},borderColor:"#e0e7ff",pointBackgroundColor:"transparent",pointBorderWidth:5,tension:.5}]},options:{plugins:{legend:!0},responsive:!0,maintainAspectRatio:!1,scales:{x:{ticks:{color:["#e0e7ff"]},grid:{color:"hsla(281, 0%, 100%, 0.61)"},border:{dash:[10,10]}},y:{beginAtZero:!0,grid:{color:"hsla(281, 0%, 100%, 0.61)"},ticks:{callback:d=>d+"K",color:["#e0e7ff"]},border:{dash:[10,10]}}}}});u.render()}),(_,u)=>(a(),s("canvas",T))}},M={components:{Line:L},data(){return{labels:["Name","Jan","Feb","Mart","April","May","Jun","July"],data:[650,590,800,801,506,550,400]}}},F={class:"p-8 bg-gray-200 bg-opacity-30 w-full"},N={class:"p-3 flex flex-row gap-1 text-gray-600 place-items-center"},E={class:""},I=t("div",{class:"text-xl font-medium tracking-wider"}," Table ",-1),S={class:"max-w-7xl p-8 mx-auto bg-indigo-800"},$={class:"bg-indigo-800 text-white"},D={class:"text-overline"},P={class:"text-gray-300 text-overline bg-indigo-700"},R={class:"bg-gray-700 bg-opacity-20"},G=t("td",null," Pendapatan ",-1),K={class:""},W=t("td",null," Transaksi ",-1),X={class:"p-3 flex flex-row gap-1 text--600 place-items-center"},Z={class:""},j=t("div",{class:"text-xl font-medium tracking-wider"}," Analytics ",-1),q={class:"max-w-7xl mx-auto p-8 border-b pb-2 bg-indigo-800"},z={class:""};function H(w,_,u,d,r,m){const b=J("Line");return a(),s("div",F,[o(x,{class:"mb-4"},{default:l(()=>[o(y,{class:"border-b border-t-8 border-indigo-500"},{default:l(()=>[t("div",N,[t("div",E,[o(v,null,{default:l(()=>[f(" mdi-table ")]),_:1})]),I])]),_:1}),t("div",S,[o(V,{class:"border border-white rounded-sm",theme:"dark"},{default:l(()=>[t("thead",$,[t("tr",D,[(a(!0),s(p,null,h(r.labels,(e,n)=>(a(),s("th",{class:"text-center border-x",key:n},c(e),1))),128))])]),t("tbody",P,[t("tr",R,[G,(a(!0),s(p,null,h(r.data,(e,n)=>(a(),s("td",{key:n,class:"text-caption font-weoght-medium border-x"},c((e/3).toString().substring(0,1))+","+c(e)+" JT (IDR) ",1))),128))]),t("tr",K,[W,(a(!0),s(p,null,h(r.data,(e,n)=>(a(),s("td",{key:n,class:"text-caption font-weoght-medium border-x"},c(e-193),1))),128))])])]),_:1})])]),_:1}),o(x,null,{default:l(()=>[o(y,{class:"border-b border-t-8 border-indigo-500"},{default:l(()=>[t("div",X,[t("div",Z,[o(v,null,{default:l(()=>[f(" mdi-poll ")]),_:1})]),j])]),_:1}),t("div",q,[t("div",z,[o(b)])])]),_:1})])}const st=B(M,[["render",H]]);export{st as default};
