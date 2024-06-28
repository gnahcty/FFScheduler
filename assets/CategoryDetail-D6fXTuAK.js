import{F as b,a as S,b as j}from"./animation-DZdQDmLB.js";import{k as $,N as I,r as N,o as n,c as i,b as _,w as z,a as t,t as d,h as A,i as x,W as B,q as L,d as q,F as h,e as k,g as C}from"./index-wrycBrSF.js";import{u as T}from"./useAxios-DWEf3K-6.js";import{u as V}from"./sideScroller-I-dwOnQ-.js";import"./format-BPM5o9rz.js";const D={class:"animateFilmCard group relative h-96 w-64 text-primary-600 sm:h-full"},E={class:"absolute left-0 top-0 z-20 ps-4 pt-4 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-90"},M={class:"text-shadow text-2xl font-light"},R={class:"z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out"},G=["src"],H={class:"absolute bottom-0 right-0 z-20 overflow-clip pb-4 pe-4 pl-8 text-end transition duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:scale-110"},O={class:"text-shadow text-balance break-normal text-2xl font-bold"},W={class:"text-sm font-light"},J={__name:"FilmCardSquare",props:{film:{type:Object,default:()=>{}},filmIndex:{type:Number,default:0}},setup(v){const s=v;return $(()=>{b()}),I(()=>s.film,()=>{b()}),(g,y)=>{const u=N("router-link");return n(),i("div",D,[_(u,{to:`/details/${s.film._id}`},{default:z(()=>{var l,a;return[t("div",E,[t("h1",M,d((s.filmIndex+1).toString().padStart(2,"0"))+"/ ",1)]),t("div",R,[t("img",{src:(l=s.film)==null?void 0:l.photos[0],class:"animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0",alt:""},null,8,G)]),t("div",H,[t("h1",O,d(s.film.CName),1),t("h1",W,d((a=s.film)==null?void 0:a.EName),1)])]}),_:1},8,["to"])])}}},K={class:"mb-16 hidden h-full flex-col bg-stone-900 pt-16 text-primary-600 sm:flex"},P={class:"flex h-1/2 w-screen items-center justify-center gap-6"},Q={class:"flex w-4/5 justify-center break-normal"},U={class:"relative w-fit overflow-hidden"},X=t("div",{class:"animateMask absolute h-full bg-primary-600"},null,-1),Y={class:"animateTitle text-balance text-8xl uppercase"},Z=t("span",{class:"underscore"},"_",-1),tt={class:"h-1/2"},et={class:"mb-16 flex h-full justify-around bg-stone-900 sm:hidden"},st={class:"flex flex-col items-center justify-start gap-6 py-16 align-middle"},at={class:"max-h-[70vh] overflow-clip text-balance text-5xl uppercase text-primary-600",style:{"writing-mode":"vertical-rl","text-orientation":"mixed"}},ot={class:"h-full"},lt={class:"no-scrollbar flex h-full flex-col overflow-auto"},ut={__name:"CategoryDetail",setup(v){const{getFilmsByCategory:s,getCategoryList:g}=T(),{scrollContainer:y}=V(),u=A(),l=x(""),a=B(),F=L(),r=x([]);let m=x([]);const f=w=>{const e=(r.value.findIndex(c=>c.name===a.params.name)+w+r.value.length)%r.value.length;F.push(`/categories/${r.value[e].name}`)};return $(async()=>{l.value=a.params.name,r.value=await g(),m.value=await s(a.params.name),u.isLoading=!1,S()}),I(()=>a.params.name,async()=>(l.value=a.params.name,m.value=await s(a.params.name),u.isLoading=!1,j())),(w,o)=>{const p=J;return n(),i(h,null,[t("div",K,[t("div",P,[t("span",{class:"icon-[formkit--left] text-3xl text-primary-800",onClick:o[0]||(o[0]=e=>f(-1))}),t("div",Q,[t("div",U,[X,t("div",Y,[q(d(l.value)+" ",1),Z])])]),t("span",{class:"icon-[formkit--right] text-3xl text-primary-800",onClick:o[1]||(o[1]=e=>f(1))})]),t("div",tt,[t("div",{class:"no-scrollbar flex h-full w-screen overflow-auto",ref_key:"scrollContainer",ref:y},[(n(!0),i(h,null,k(C(m),(e,c)=>(n(),i("div",{key:e.name,class:"h-full w-64"},[_(p,{film:e,filmIndex:c},null,8,["film","filmIndex"])]))),128))],512)])]),t("div",et,[t("div",st,[t("span",{class:"icon-[formkit--up] text-xs text-primary-800",onClick:o[2]||(o[2]=e=>f(-1))}),t("span",at,d(l.value)+"_ ",1),t("span",{class:"icon-[formkit--down] text-xs text-primary-800",onClick:o[3]||(o[3]=e=>f(1))})]),t("div",ot,[t("div",lt,[(n(!0),i(h,null,k(C(m),(e,c)=>(n(),i("div",{key:e.name},[_(p,{film:e,filmIndex:c},null,8,["film","filmIndex"])]))),128))])])])],64)}}};export{ut as default};
