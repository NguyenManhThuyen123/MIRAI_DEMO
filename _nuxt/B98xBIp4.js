import{_ as p}from"./Da1lXL78.js";import{a as u}from"./B4uVmeYG.js";import{_ as r,r as m,g as h,C as f,o,c,a as e,n as k,t as n,i as x,p as _,e as l,m as v,w as y}from"./DAaR74PX.js";import{_ as b}from"./DSWV5wxU.js";const d=t=>(_("data-v-df2d9d95"),t=t(),l(),t),g={class:"header"},I=d(()=>e("div",{class:"icon-container"},[e("img",{src:p,class:"header-icon"})],-1)),w=d(()=>e("p",{class:"main-text"},"スカイウォーキング・デジタルクイズチャレンジ",-1)),S=[w],$={key:0,class:"sub-text"},T={__name:"HeaderQuestionUser",setup(t){const s=m("");return h(async()=>{try{const a=await u.get("https://naadstkfr7.execute-api.ap-southeast-1.amazonaws.com/mirai-infos-lambda/1");s.value=a.data.content}catch(a){console.error("Error fetching subtitle:",a),s.value=""}}),f(()=>!!s.value),(a,i)=>(o(),c("header",g,[I,e("div",{class:k(["header-text",{"no-subtitle":!s.value}])},S,2),s.value?(o(),c("div",$,[e("p",null,n(s.value),1)])):x("",!0)]))}},Q=r(T,[["__scopeId","data-v-df2d9d95"]]),B=t=>(_("data-v-ba4c2286"),t=t(),l(),t),C={class:"footer"},N={class:"terms"},U={key:1,class:"disabled-link"},E=B(()=>e("div",{class:"copyright"},[e("p",{class:"company"},"中部電力 MIRAI TOWER"),e("p",{class:"notice"},"© 2020 Nagoya TV Tower Corporation.")],-1)),L={__name:"FooterQuestionUser",props:{disableLink:{type:Boolean,default:!1},linkUrl:{type:String,default:"/users/questionRules"},linkText:{type:String,default:"利用規約と条件"}},setup(t){return(s,a)=>{const i=b;return o(),c("footer",C,[e("div",N,[t.disableLink?(o(),c("p",U,n(t.linkText),1)):(o(),v(i,{key:0,to:t.linkUrl,class:"active-link"},{default:y(()=>[e("p",null,n(t.linkText),1)]),_:1},8,["to"]))]),E])}}},q=r(L,[["__scopeId","data-v-ba4c2286"]]);export{Q as _,q as a};
