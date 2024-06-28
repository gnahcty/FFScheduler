import{_ as V}from"./LikeButton-PqCWy7-d.js";import{Y as G,j as g,r as P,o as f,c as m,a as s,b,w as N,t as w,_ as B,W as I,F as T,e as M,g as R,i as x,N as O,k as D,$ as q,q as U,X as z,h as X,M as L}from"./index-Cq4_Sw1c.js";import{c as Y,m as J,f as j}from"./format-D4DUqj0R.js";import{p as E,u as A}from"./useAxios-H4r4JKnl.js";import{u as K}from"./sideScroller-J3-fNbL-.js";import{t as Q,a as Z,b as ee,i as te}from"./index-DroqAkUS.js";import{m as se,c as ne,S as oe}from"./animation-DZdQDmLB.js";import{e as le}from"./eachDayOfInterval-YWjuBWf3.js";function ae(t,e){const r=+G(t);return Y(t,r+e)}function re(t,e){return ae(t,e*J)}const ie={class:"group relative m-0 flex h-full rounded-md sm:mx-auto sm:max-w-lg"},ce=s("div",{class:"absolute inset-0 z-10 h-full w-full rounded-md bg-gradient-to-t from-black/80 via-black/50 to-black/10 backdrop-grayscale duration-300 group-hover:backdrop-grayscale-0"},null,-1),ue={class:"h-full w-full overflow-hidden rounded-md opacity-80 transition duration-300 ease-in-out group-hover:opacity-100"},de=["src","alt"],fe={class:"absolute z-10 flex h-full w-full items-center justify-between p-4 ps-4"},me={class:"ellipsis flex h-fit w-full flex-col overflow-clip duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"},pe={class:"text-xs opacity-75 sm:text-sm"},ve={class:"sm:text-md text-sm"},he={class:"text-pretty text-xs opacity-75 sm:text-sm"},_e={__name:"ScreeningCard",props:{screening:{type:Object,default:()=>{}},film:{type:Object,default:()=>{}},vertical:{type:Boolean,default:!1},date:{type:String,default:""}},setup(t){const e=t,r=g(()=>j(E(e.screening.time),"HH:mm")),c=g(()=>{const o=E(e.screening.time),l=re(o,d.value);return j(l,"HH:mm")}),d=g(()=>parseInt(e.film.length.split(" ")[0])),u=o=>{const[l,a]=o.split(":").map(Number);return l*60+a},i=()=>{const l=u(r.value),a=parseInt(e.film.length.split(" ")[0],10);return e.vertical?{marginTop:(l-610)*2+"px",height:a*2+"px"}:{marginLeft:(l-610)*2.6+"px",width:a*3+"px"}};return(o,l)=>{const a=P("router-link"),p=V;return f(),m("div",{class:"animateScreeningCard absolute h-full rounded-md",style:B(i())},[s("div",ie,[ce,s("div",ue,[b(a,{to:`/details/${e.film._id}`},{default:N(()=>[s("img",{src:e.film.photos[0],class:"block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110",alt:e.film.CName},null,8,de)]),_:1},8,["to"])]),s("div",fe,[b(a,{to:`/details/${e.film._id}`},{default:N(()=>[s("div",me,[s("span",pe,w(r.value)+" - "+w(c.value),1),s("span",ve,w(e.film.CName),1),s("span",he,w(e.film.EName),1)])]),_:1},8,["to"]),b(p,{screeningId:e.screening._id},null,8,["screeningId"])])])],4)}}},xe={class:"overflow-hidden"},ge={class:"animateRiver flex aspect-4/3 h-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2"},we={class:"no-scrollbar flex h-full w-full justify-center gap-1 overflow-auto text-stone-300 sm:hidden"},ye={class:"flex h-20 w-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2 text-sm"},be={__name:"EventSchedule",props:{screenTimes:{type:Object,default:()=>{}}},setup(t){const{scrollContainer:e}=K(),r=t,c=I();return(d,u)=>{const i=_e;return f(),m(T,null,[s("div",{class:"no-scrollbar hidden h-full w-full flex-col justify-center overflow-x-auto text-stone-300 sm:flex",ref_key:"scrollContainer",ref:e},[(f(!0),m(T,null,M(r.screenTimes,(o,l)=>(f(),m("div",{key:l,class:"flex-0 mt-7 flex h-1/3"},[s("div",xe,[s("div",ge,[s("span",null,w(l),1)])]),(f(!0),m(T,null,M(o,a=>(f(),m("div",{key:a._id,class:"relative"},[b(i,{screening:a,film:a.film,date:R(c).params.date},null,8,["screening","film","date"])]))),128))]))),128))],512),s("div",we,[(f(!0),m(T,null,M(t.screenTimes,(o,l)=>(f(),m("div",{key:l,class:"flex-0 animateScreeningCard h-full w-full flex-col"},[s("div",ye,[s("span",null,w(l),1)]),(f(!0),m(T,null,M(o,a=>(f(),m("div",{key:a._id,class:"no-scrollbar relative"},[b(i,{screening:a,film:a.film,date:R(c).params.date,vertical:!0},null,8,["screening","film","date"])]))),128))]))),128))])],64)}}};function k(t){var e;const r=Z(t);return(e=r==null?void 0:r.$el)!=null?e:r}const H=te?window:void 0;function $e(){const t=x(!1),e=q();return e&&D(()=>{t.value=!0},e),t}function Se(t){const e=$e();return g(()=>(e.value,!!t()))}function Te(t,e,r={}){const{window:c=H,...d}=r;let u;const i=Se(()=>c&&"ResizeObserver"in c),o=()=>{u&&(u.disconnect(),u=void 0)},l=g(()=>Array.isArray(t)?t.map(n=>k(n)):[k(t)]),a=O(l,n=>{if(o(),i.value&&c){u=new ResizeObserver(e);for(const v of n)v&&u.observe(v,d)}},{immediate:!0,flush:"post"}),p=()=>{o(),a()};return ee(p),{isSupported:i,stop:p}}function ke(t,e={width:0,height:0},r={}){const{window:c=H,box:d="content-box"}=r,u=g(()=>{var n,v;return(v=(n=k(t))==null?void 0:n.namespaceURI)==null?void 0:v.includes("svg")}),i=x(e.width),o=x(e.height),{stop:l}=Te(t,([n])=>{const v=d==="border-box"?n.borderBoxSize:d==="content-box"?n.contentBoxSize:n.devicePixelContentBoxSize;if(c&&u.value){const y=k(t);if(y){const h=c.getComputedStyle(y);i.value=Number.parseFloat(h.width),o.value=Number.parseFloat(h.height)}}else if(v){const y=Array.isArray(v)?v:[v];i.value=y.reduce((h,{inlineSize:C})=>h+C,0),o.value=y.reduce((h,{blockSize:C})=>h+C,0)}else i.value=n.contentRect.width,o.value=n.contentRect.height},r);Q(()=>{const n=k(t);n&&(i.value="offsetWidth"in n?n.offsetWidth:e.width,o.value="offsetHeight"in n?n.offsetHeight:e.height)});const a=O(()=>k(t),n=>{i.value=n?e.width:0,o.value=n?e.height:0});function p(){l(),a()}return{width:i,height:o,stop:p}}const Ce={class:"my-4 flex w-full justify-center sm:my-10"},Me={class:"relative overflow-hidden md:h-36"},je=s("div",{class:"animateMask absolute h-full bg-primary-500"},null,-1),Fe={class:"animateTitle flex h-16 justify-center md:h-36"},Be={class:"hidden items-center text-5xl sm:flex md:text-7xl lg:text-9xl"},Ie={id:"timeLine",class:"flex w-full flex-col overflow-clip"},Oe=["id","onClick"],De=s("div",{class:"h-1/2 w-full border-t border-primary-600 sm:border-t-2 md:border-t-4 lg:border-t-8"},null,-1),Ne=s("div",{class:"hidden items-center text-5xl sm:flex md:text-7xl lg:text-9xl"},"2024",-1),Re={__name:"TimelineNav",setup(t){const{getFFDateRange:e}=A(),r=U(),c=I(),d=x(null),{width:u}=ke(d),i=g(()=>u.value>530?u.value/7:u.value/5),o=g(()=>u.value>530?3:2),l=x(null),a=x(null),p=x(null),n=x([]),v=(_,F)=>le({start:_,end:F}).map($=>({date:j($,"dd"),day:j($,"eee")})),y=x(c.params.date.split("_")[1]),h=g(()=>n.value.findIndex(_=>_.date===y.value)),C=g(()=>`left:${-i.value*(h.value-o.value)}px`),W=(_,F)=>{se(i.value,F,h.value),r.push(`${p.value}_${_}`)};return D(async()=>{const _=await e();l.value=_.start,a.value=_.end,p.value=j(_.start,"MMMM"),n.value=v(l.value,a.value)}),(_,F)=>(f(),m("div",Ce,[s("div",Me,[je,s("div",Fe,[s("div",Be,w(p.value),1),s("div",Ie,[s("div",{class:"no-scrollbar flex h-full items-center justify-center overflow-x-auto overflow-y-clip sm:h-1/2",ref_key:"wrapper",ref:d},[s("div",{class:"container relative h-full w-full",style:B(C.value)},[(f(!0),m(T,null,M(n.value,($,S)=>(f(),m("div",{key:S,class:z(["slide absolute bottom-0 top-0 my-auto flex cursor-pointer items-center justify-center text-primary-600",{"scale-150 font-bold":S===h.value}]),id:`slide${S}`,style:B(`left:${i.value*S}px; width:${i.value}px`),onClick:Le=>W($.date,S)},[s("div",null,w($.date),1),s("div",{class:z(["day ms-2",{hidden:S!==h.value}])},w($.day),3)],14,Oe))),128))],4)],512),De]),Ne])])]))}},ze={class:"flex h-screen flex-col items-center justify-center bg-stone-900 py-16 uppercase text-primary-600 sm:pb-0"},Ue={__name:"EventCalendar",setup(t){const e=X(),{getScreeningsByDate:r}=A(),c=x({}),d=I();return D(async()=>{c.value=await r(d.params.date),e.isLoading=!1,L(()=>ne())}),O(()=>d.params.date,async()=>{e.isLoading=!1,c.value=await r(d.params.date),L(()=>oe())}),(u,i)=>{const o=Re,l=be;return f(),m("div",ze,[b(o),b(l,{screenTimes:c.value},null,8,["screenTimes"])])}}};export{Ue as default};