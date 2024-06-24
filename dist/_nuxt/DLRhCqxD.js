import{_ as j}from"./CBFNmvhr.js";import{_ as I,a as T}from"./UX0jCmBN.js";import{g as b,o as i,c as p,a as l,t as f,b as w,F as y,r as k,j as L,k as M,l as A,w as F,d as q,h as s,m as D,n as E,q as N,s as O,v as G,x as J,y as K,u as P}from"./C1SJA-A4.js";import Q from"./WElUMo0l.js";import{_ as W}from"./Cmve0cyh.js";import{q as R,u as X}from"./DLTMj7xz.js";import"./DlAUqK2U.js";import"./CihNTSHL.js";import"./C-v3KzvZ.js";import"./C9gvXobS.js";const Y={class:"text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center"},Z={class:"text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400"},ee={class:"flex w-full justify-center text-xs md:text-base my-8"},te={class:"md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm"},ae={class:"flex items-center font-semibold"},oe={class:"flex items-center gap-2 flex-wrap my-5"},se=b({__name:"Header",props:{title:{default:"no-title"},image:{default:"#"},alt:{default:"no-img"},description:{default:"no description"},date:{default:"no-date"},tags:{default:()=>[]}},setup(u){return(e,r)=>{const n=j,a=I,c=T;return i(),p("header",null,[l("h1",Y,f(e.title||""),1),w(n,{src:e.image||"",alt:e.alt||"",width:"600",class:"m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"},null,8,["src","alt"]),l("p",Z,f(e.description),1),l("div",ee,[l("div",te,[l("div",ae,[w(a),l("p",null,f(e.date||""),1)]),l("div",oe,[w(c),(i(!0),p(y,null,k(e.tags,t=>(i(),p("span",{key:t,class:"bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"},f(t),1))),128))])])])])}}}),ne={class:"lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end"},le={class:"border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900"},ce=l("h1",{class:"text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2"}," Table Of Content ",-1),re=b({__name:"Toc",async setup(u){var t,o;let e,r;const{path:n}=L(),a=([e,r]=M(()=>R(n).findOne()),e=await e,r(),e),c=((o=(t=a==null?void 0:a.body)==null?void 0:t.toc)==null?void 0:o.links)||[];return(h,g)=>{const m=W;return i(),p("div",ne,[l("div",le,[ce,(i(!0),p(y,null,k(s(c),d=>(i(),A(m,{key:d.id,to:`#${d.id}`,class:"block text-xs mb-3 hover:underline"},{default:F(()=>[q(f(d.text),1)]),_:2},1032,["to"]))),128))])])}}});function ie(u){return new URL(window.location.href)}const de={name:"facebook",shareUrl:"https://www.facebook.com/sharer/sharer.php?u=[u]",icon:{viewBox:"0 0 24 24",path:"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"},color:"#0866FF"},pe={name:"twitter",shareUrl:"https://twitter.com/intent/tweet?url=[u]",args:{title:"&text=[t]",user:"&via=[uid]",hashtags:"&hashtags=[h]"},icon:{viewBox:"0 0 24 24",path:"M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"},color:"#000000"},ue={name:"linkedin",shareUrl:"https://www.linkedin.com/sharing/share-offsite/?url=[u]",icon:{viewBox:"0 0 24 24",path:"M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"},color:"#0A66C2"},me={name:"pinterest",shareUrl:"https://pinterest.com/pin/create/button/?url=[u]",args:{title:"&description=[t]",image:"&media=[i]"},icon:{viewBox:"-4.5 -2 24 24",path:"M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265"},color:"#BD081C"},he={name:"reddit",shareUrl:"https://www.reddit.com/submit?url=[u]",args:{title:"&title=[t]"},icon:{viewBox:"0 0 24 24",path:"m11.053 7.815l.751-3.536a2 2 0 0 1 2.372-1.54l3.196.68a2 2 0 1 1-.415 1.956l-3.197-.68l-.666 3.135c1.785.137 3.558.73 5.164 1.7A3.192 3.192 0 0 1 23 12.203v.021a3.193 3.193 0 0 1-1.207 2.55a2.852 2.852 0 0 1-.008.123c0 3.998-4.45 7.03-9.799 7.03c-5.333 0-9.708-3.024-9.705-6.953a5.316 5.316 0 0 1-.01-.181a3.193 3.193 0 0 1 3.454-5.35a11.446 11.446 0 0 1 5.329-1.628m9.285 5.526a1.19 1.19 0 0 0 .662-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56l-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.028-3.652.6-5.237 1.675l-.664.45l-.583-.55a1.192 1.192 0 1 0-1.315 1.952l.633.29l-.053.695a3.95 3.95 0 0 0 .003.584c0 2.71 3.356 5.03 7.708 5.03c4.371 0 7.799-2.336 7.802-5.107a3.304 3.304 0 0 0 0-.507l-.052-.672zM6.951 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-1.985 5.103c-1.397 0-2.766-.37-3.881-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 0 1 .732.206a.469.469 0 0 1-.12.423c-.683.797-2.483 1.147-3.88 1.147"},color:"#FF4500"},ge={name:"bluesky",shareUrl:"https://bsky.app/intent/compose?text=[u]",icon:{viewBox:"0 0 24 24",path:"M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"},color:"#1185FE"},_e={name:"pocket",shareUrl:"https://getpocket.com/edit?url=[u]",icon:{viewBox:"0 0 24 24",path:"M21.902 4.194A1.82 1.82 0 0 0 20.197 3H3.813A1.823 1.823 0 0 0 2 4.814v6.035l.069 1.2c.29 2.73 1.707 5.116 3.9 6.779c.038.03.078.059.118.089l.025.018a9.897 9.897 0 0 0 3.91 1.727a10.06 10.06 0 0 0 4.05-.014a.261.261 0 0 0 .064-.023a9.906 9.906 0 0 0 3.753-1.691l.025-.018c.04-.03.08-.058.119-.09c2.192-1.663 3.609-4.048 3.898-6.778l.069-1.2V4.814a1.792 1.792 0 0 0-.098-.62m-4.235 6.287l-4.704 4.513a1.372 1.372 0 0 1-1.899 0L6.36 10.48a1.371 1.371 0 1 1 1.898-1.979l3.756 3.601l3.756-3.6a1.372 1.372 0 0 1 1.898 1.978"},color:"#EF3F56"},ve={name:"whatsapp",shareUrl:"https://api.whatsapp.com/send?text=[u]",args:{title:"%20[t]"},icon:{viewBox:"0 0 24 24",path:"m7.254 18.494l.724.423A7.953 7.953 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355zM8.392 7.308c.134-.01.269-.01.403-.004c.054.004.108.01.162.016c.159.018.334.115.393.249c.298.676.588 1.357.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11c.062.026.126.048.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.158 1.158 0 0 1-.21.302a2.381 2.381 0 0 1-.33.288c-.082.062-.125.09-.125.09a5.063 5.063 0 0 1-.383.22a1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.472 3.472 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1"},color:"#25D366"},xe={name:"telegram",shareUrl:"https://t.me/share/url?url=[u]",args:{title:"&text=[t]"},icon:{viewBox:"0 0 48 48",path:"M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"},color:"#26A5E4"},we={name:"skype",shareUrl:"https://web.skype.com/share?url=[u]",args:{title:"&text=[t]"},icon:{viewBox:"0 0 24 24",path:"M13.31 20.4a8.5 8.5 0 0 1-9.71-9.71a5.25 5.25 0 0 1 7.09-7.09a8.5 8.5 0 0 1 9.71 9.71a5.25 5.25 0 0 1-7.09 7.09m-1.257-3.244h-.04c2.872 0 4.303-1.386 4.303-3.243c0-1.198-.551-2.471-2.726-2.958l-1.983-.44c-.755-.172-1.622-.4-1.622-1.115s.62-1.213 1.724-1.213c2.23 0 2.027 1.528 3.131 1.528c.576 0 1.093-.342 1.093-.93c0-1.37-2.197-2.4-4.056-2.4c-2.021 0-4.173.859-4.173 3.144c0 1.098.394 2.27 2.56 2.813l2.689.671c.816.202 1.018.659 1.018 1.072c0 .687-.684 1.358-1.918 1.358c-2.417 0-2.078-1.857-3.374-1.857c-.58 0-1.003.398-1.003.971c0 1.114 1.352 2.598 4.377 2.598"},color:"#00AFF0"},fe={name:"line",shareUrl:"https://line.me/R/share?text=[u]",icon:{viewBox:"0 0 24 24",path:"M18.664 10.84a.526.526 0 0 1-.526.525h-1.462v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.525m-4.098 2.485a.54.54 0 0 1-.166.025a.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525v3.976a.524.524 0 0 1-.36.497m-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524m-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05m3.915-10.78c-5.513 0-10 3.643-10 8.118c0 4.01 3.558 7.369 8.363 8.007c.325.068.769.215.881.492c.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537c1.076-.449 5.764-3.398 7.864-5.812C21.314 14.089 22 12.477 22 10.69c0-4.475-4.488-8.118-10-8.118"},color:"#06C655"},be={name:"email",shareUrl:"mailto:?body=[u]",args:{title:"&subject=[t]"},icon:{viewBox:"0 0 24 24",path:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"},color:"#7e7e7e"},ye={facebook:de,twitter:pe,linkedin:ue,pinterest:me,reddit:he,bluesky:ge,pocket:_e,whatsapp:ve,telegram:xe,skype:we,line:fe,email:be},ke={network:"",url:void 0,title:void 0,user:void 0,hashtags:void 0,image:void 0};function $e(u=ke){var $,B,U,C,S,H,z,V;const{network:e,url:r,title:n,user:a,hashtags:c,image:t}=u,o=D({...ye[e]}),h=r!==void 0?r:ie().href,g=o.value.shareUrl,m=($=o.value.args)!=null&&$.title&&n?(B=o.value.args)==null?void 0:B.title:"",d=(U=o.value.args)!=null&&U.user&&a?(C=o.value.args)==null?void 0:C.user:"",v=(S=o.value.args)!=null&&S.hashtags&&c?(H=o.value.args)==null?void 0:H.hashtags:"",_=(z=o.value.args)!=null&&z.image&&t?(V=o.value.args)==null?void 0:V.image:"";let x=g+m+d+v+_;return x=x.replace(/\[u\]/i,h).replace(/\[t\]/i,n||"").replace(/\[uid\]/i,a||"").replace(/\[h\]/i,c||"").replace(/\[i\]/i,t||""),o.value.shareUrl=x,delete o.value.args,o}const Be=["href","aria-label"],Ue=["viewBox"],Ce=["d"],Se={key:0,class:"social-share-button__label"},He={__name:"SocialShare",props:{network:{type:String,required:!0},styled:{type:Boolean,default:void 0},label:{type:Boolean,default:void 0},url:{type:String,default:void 0},title:{type:String,default:void 0},user:{type:String,default:void 0},hashtags:{type:String,default:void 0},image:{type:String,default:void 0}},setup(u){const e=u,r=E().public.socialShare,n=e.styled!==void 0?e.styled:r.styled,a=e.label!==void 0?e.label:r.label,c=$e({network:e.network,url:e.url,title:e.title,user:e.user,hashtags:e.hashtags,image:e.image}),t=e.network.charAt(0).toUpperCase()+e.network.slice(1);return(o,h)=>(i(),p("a",{class:O(["social-share-button",[`social-share-button--${u.network}`,{"social-share-button--styled":s(n)}]]),href:s(c).shareUrl,style:G(`--color-brand:${s(c).color}`),"aria-label":`Share with ${t}`,target:"_blank"},[(i(),p("svg",{class:"social-share-button__icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",viewBox:`${s(c).icon.viewBox}`},[l("path",{fill:"currentColor",d:`${s(c).icon.path}`},null,8,Ce)],8,Ue)),s(a)?(i(),p("span",Se,"Share")):N("",!0)],14,Be))}},ze={class:"px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12"},Ve={class:"col-span-12 lg:col-span-9"},Le={class:"prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"},Me=l("p",null,"No content found.",-1),Ae={class:"flex mt-10 flex-row gap-2"},Ge=b({__name:"[blog]",async setup(u){let e,r;const{path:n}=L(),{data:a,error:c}=([e,r]=M(()=>X(`blog-post-${n}`,()=>R(n).findOne())),e=await e,r(),e);c.value&&J("/404");const t=K(()=>{var o,h,g,m,d,v,_,x;return{title:((o=a.value)==null?void 0:o.title)||"no-title available",description:((h=a.value)==null?void 0:h.description)||"no-description available",image:((g=a.value)==null?void 0:g.image)||"/not-found.jpg",alt:((m=a.value)==null?void 0:m.alt)||"no alter data available",ogImage:((d=a.value)==null?void 0:d.ogImage)||"/not-found.jpg",date:((v=a.value)==null?void 0:v.date)||"not-date-available",tags:((_=a.value)==null?void 0:_.tags)||[],published:((x=a.value)==null?void 0:x.published)||!1}});return P({title:t.value.title||"",meta:[{name:"description",content:t.value.description},{name:"description",content:t.value.description},{property:"og:site_name",content:"Riyad's Blog"},{hid:"og:type",property:"og:type",content:"website"},{property:"og:url",content:`https://blog-nurriyad.vercel.app/${n}`},{property:"og:title",content:t.value.title},{property:"og:description",content:t.value.description},{property:"og:image",content:t.value.ogImage||t.value.image},{name:"twitter:site",content:"@qdnvubp"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:`https://blog-nurriyad.vercel.app/${n}`},{name:"twitter:title",content:t.value.title},{name:"twitter:description",content:t.value.description},{name:"twitter:image",content:t.value.ogImage||t.value.image}],link:[{rel:"canonical",href:`https://blog-nurriyad.vercel.app/${n}`}]}),(o,h)=>{const g=se,m=Q,d=re,v=He;return i(),p("div",ze,[l("div",Ve,[w(g,{title:s(t).title,image:s(t).image,alt:s(t).alt,date:s(t).date,description:s(t).description,tags:s(t).tags},null,8,["title","image","alt","date","description","tags"]),l("div",Le,[s(a)?(i(),A(m,{key:0,value:s(a)},{empty:F(()=>[Me]),_:1},8,["value"])):N("",!0)])]),w(d),l("div",Ae,[(i(),p(y,null,k(["facebook","twitter","linkedin","email"],_=>w(v,{key:_,"aria-label":"Share with {network}",network:_,styled:!0,label:!0,class:"p-1"},null,8,["network"])),64))])])}}});export{Ge as default};
