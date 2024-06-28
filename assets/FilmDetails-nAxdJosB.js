import{_ as L}from"./LikeButton-PqCWy7-d.js";import{o as t,c as l,F as u,e as f,a as e,t as n,b as v,s as N,W as F,q as S,i as m,j as V,k as q,N as E,r as M,w as D,X as R}from"./index-Cq4_Sw1c.js";import{u as z}from"./useAxios-H4r4JKnl.js";import"./format-D4DUqj0R.js";const A={role:"list",class:"w-full flex-shrink divide-y divide-orange-600"},O={class:"text-md flex flex-wrap gap-x-2"},Q={class:"w-[5.3rem]"},W={__name:"ShowtimeList",props:{screenings:{type:Object,default:()=>{}}},setup(h){const _=h;return(x,w)=>{const c=L;return t(),l("ul",A,[(t(!0),l(u,null,f(_.screenings,r=>(t(),l("li",{key:r._id,class:"flex justify-between"},[e("div",O,[e("span",Q,n(r.date),1),e("span",null,n(r.time),1),e("span",null,n(r.place),1)]),v(c,{screeningId:r._id,class:""},null,8,["screeningId"])]))),128))])}}},X={class:"flex min-h-full flex-col bg-stone-900 pb-12 text-primary-600 sm:h-full sm:pb-0 sm:pt-12"},G={class:"text-9xl font-bold"},H={class:"flex-0 text-nowrap"},J={class:"flex-0 text-nowrap"},K={class:"flex h-full flex-col justify-between gap-y-6 overflow-clip sm:flex-row"},P={class:"hidden max-w-fit flex-1 md:block"},T=["src"],U={class:"mr-2 flex w-full min-w-72 flex-col justify-between sm:w-1/4"},Y={class:"flex flex-col"},Z={class:"mb-2"},ee={class:"mb-2 flex items-center gap-2"},se=["href"],te={key:0,class:"flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary-500 text-center font-semibold hover:border-stone-200"},le={class:"mb-2 flex flex-wrap items-center divide-x divide-primary-600 text-center"},oe={class:"flex flex-col"},ae={class:"flex w-full min-w-72 items-end sm:w-[28vw]"},ne={class:"no-scrollbar max-h-full overflow-auto"},de={__name:"FilmDetails",setup(h){const{getFilmById:_,getScreeningsByFilmId:x}=z(),{nextIdInCategory:w}=N(),c=F(),r=S(),s=m({}),p=m([]),b=m(""),y=m([]),g=o=>{const i=w(c.params.id,o);i?r.push(`/details/${i}`):r.push("/categories")},j=V(()=>{var o;return(o=s.value.EName)==null?void 0:o.replace(" ","+")}),C=o=>[{url:`https://search.douban.com/movie/subject_search?search_text=${o}&cat=1002`,icon:"豆"},{url:`https://letterboxd.com/search/${o}`,icon:"icon-[fa6-brands--square-letterboxd]"},{url:`https://www.imdb.com/find?q=${o}&s=tt`,icon:"icon-[fa6-brands--imdb]"},{url:`https://www.youtube.com/results?search_query=${o}+trailer`,icon:"icon-[fa6-brands--youtube]"}],k=async()=>{s.value=await _(c.params.id),b.value=s.value.photos[0],p.value=[s.value.release_year,s.value.region,s.value.format,s.value.color,s.value.length,s.value.rating],y.value=await x(c.params.id)};return q(()=>{k()}),E(()=>c.params.id,()=>k()),(o,i)=>{var $;const I=M("Vue3Marquee"),B=W;return t(),l(u,null,[e("div",{class:"absolute h-full w-0 cursor-left sm:w-12 md:w-24 lg:w-1/5",onClick:i[0]||(i[0]=a=>g(-1))}),e("div",{class:"absolute right-0 h-full w-0 cursor-right sm:w-12 md:w-24 lg:w-1/5",onClick:i[1]||(i[1]=a=>g(1))}),e("div",X,[e("div",G,[v(I,{class:"overflow-y-clip",clone:!0},{default:D(()=>[e("span",H,n(s.value.EName),1),e("span",J,n(s.value.CName),1)]),_:1})]),e("div",K,[e("div",P,[e("img",{src:b.value,alt:"film poster",class:"h-full w-[40vw] object-cover"},null,8,T)]),e("div",U,[e("div",Y,[e("div",Z,"導演: "+n(($=s.value.directors)==null?void 0:$.join()),1),e("div",ee,[(t(!0),l(u,null,f(C(j.value),(a,d)=>(t(),l("a",{key:d,href:a.url,target:"_blank",class:"hover:text-stone-200"},[a.icon==="豆"?(t(),l("span",te,"豆")):(t(),l("span",{key:1,class:R([a.icon,"flex h-6 w-6 items-center justify-center"])},null,2))],8,se))),128))]),(t(!0),l(u,null,f(s.value.awards,a=>(t(),l("div",{key:a},n(a),1))),128)),e("div",le,[(t(!0),l(u,null,f(p.value,(a,d)=>(t(),l("div",{key:d,class:"flex-shrink-0 px-1 first:pl-0"},n(p.value[d]),1))),128))])]),e("div",oe,[v(B,{screenings:y.value},null,8,["screenings"])])]),e("div",ae,[e("div",ne,n(s.value.description),1)])])])],64)}}};export{de as default};