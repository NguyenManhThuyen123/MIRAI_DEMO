import{_ as I}from"./BwQZSwmj.js";import{_ as k,u as S,f as R,r as t,g as C,o as c,c as a,b as A,a as s,t as l,i as v,p as B,e as N}from"./DAaR74PX.js";import{_ as z}from"./BhZHTTJ3.js";import"./B4uVmeYG.js";const H=""+new URL("question-incorrect.BhdjZd4a.svg",import.meta.url).href,o=r=>(B("data-v-f42b98ca"),r=r(),N(),r),L={class:"quiz-container"},M={class:"quiz-body"},T=o(()=>s("img",{src:H},null,-1)),U={class:"user-answer"},V=o(()=>s("span",{class:"answer-text"},"あなたの回答：",-1)),E={class:"circle"},F={class:"answer-text"},Q=o(()=>s("span",{class:"correct-answer-title"},"正解は : ",-1)),j={class:"correct-answer"},D={class:"circle"},J={class:"answer-text"},O={class:"explanation"},Z={key:0,class:"gray-background"},G=o(()=>s("div",{class:"section-title"},"解説",-1)),K=["src"],P={class:"explanation-text"},W=["innerHTML"],X={key:1,class:"gray-background-footer"},Y=o(()=>s("div",{class:"next-question"}," 次の問題に到着したらカメラを立ち上げてQRを読み込んでね！ ",-1)),$=o(()=>s("img",{src:z,class:"qr-code"},null,-1)),ss=[Y,$],ts={key:2,class:"button-container"},es={__name:"questionIncorrect",setup(r){const e=S(),m=R(),g=t(e.query.answer||""),f=t(e.query.content||""),w=t(e.query.correctAnswer||""),x=t(e.query.correctAnswerContent||""),_=t(e.query.explain||""),u=t(e.query.explainImg||""),d=t(e.query.questionsCount||0),p=t(!0),h=t(!0),q=n=>"https://mirai-static-website.s3.ap-southeast-1.amazonaws.com/"+n,y=()=>{m.push("/users/questionResult")};return C(async()=>{!_.value&&!u.value&&(p.value=!1);const n=localStorage.getItem("results");if(n){const i=JSON.parse(n);i.length==d.value&&(h.value=!1),console.log(i.length,d.value)}}),(n,i)=>{const b=I;return c(),a("div",L,[A(b,{admin:!0}),s("div",M,[T,s("div",U,[V,s("div",E,l(g.value),1),s("span",F,l(f.value),1)]),Q,s("div",j,[s("div",D,l(w.value),1),s("span",J,l(x.value),1)]),s("div",O,[p.value?(c(),a("div",Z,[G,u.value?(c(),a("img",{key:0,src:q(u.value)},null,8,K)):v("",!0),s("div",P,[s("p",{innerHTML:_.value},null,8,W)])])):v("",!0),h.value?(c(),a("div",X,ss)):(c(),a("div",ts,[s("button",{class:"download-button",onClick:y},"最後の結果へ")]))])])])}}},rs=k(es,[["__scopeId","data-v-f42b98ca"]]);export{rs as default};
