import{g as _,j as h,y as l,o as n,c as m,a as c,t as k,h as d,k as C,u as B,b as $,F as w,r as A,l as u,q as N}from"./C1SJA-A4.js";import{m as j}from"./B8M5arCw.js";import{_ as q,a as D}from"./BJaBt2Jy.js";import{u as F,q as I}from"./DLTMj7xz.js";import{u as V}from"./B4DYGjnx.js";import"./CBFNmvhr.js";import"./UX0jCmBN.js";import"./DlAUqK2U.js";import"./B7J9fCNR.js";import"./Cmve0cyh.js";import"./C9gvXobS.js";const E={class:"container mx-auto"},R={class:"p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900"},S={class:"text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"},T=_({__name:"topic",setup(y){const s=h(),i=l(()=>{const r=s.params.category||"";let a="";return Array.isArray(r)?a=r.at(0)||"":a=r,j(a)});return(r,a)=>(n(),m("div",E,[c("div",R,[c("h1",S," #"+k(d(i)),1)])]))}}),z={class:"container max-w-5xl mx-auto text-zinc-600 px-4"},H={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},X=_({__name:"[category]",async setup(y){let s,i;const r=h(),a=l(()=>{const o=r.params.category||"";let t="";return Array.isArray(o)?t=o.at(0)||"":t=o,t}),{data:g}=([s,i]=C(()=>F(`category-data-${a.value}`,()=>I("/blogs").where({tags:{$contains:a.value}}).find())),s=await s,i(),s),b=l(()=>{var o;return(o=g.value)==null?void 0:o.map(t=>({path:t._path,title:t.title||"no-title available",description:t.description||"no-description available",image:t.image||"/blogs-img/blog.jpg",alt:t.alt||"no alter data available",ogImage:t.ogImage||"/blogs-img/blog.jpg",date:t.date||"not-date-available",tags:t.tags||[],published:t.published||!1}))});return B({title:a.value,meta:[{name:"description",content:`You will find all the ${a.value} related post here`}],titleTemplate:"Riyad's Blog - %s"}),V(),(o,t)=>{var p;const f=T,x=q,v=D;return n(),m("main",z,[$(f),c("div",H,[(n(!0),m(w,null,A(d(b),e=>(n(),u(x,{key:e.title,path:e.path,title:e.title,date:e.date,description:e.description,image:e.image,alt:e.alt,"og-image":e.ogImage,tags:e.tags,published:e.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),((p=d(g))==null?void 0:p.length)===0?(n(),u(v,{key:0})):N("",!0)])])}}});export{X as default};