(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{8250:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/Series",function(){return i(7410)}])},1552:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var a=i(4848),s=i(8556),n=i(4335),o=i(6540);let l=e=>{let{selectedGenres:t,setSelectedGenres:i,genres:l,setGenres:r,type:c,setPage:d}=e,m=e=>{i([...t,e]),r(l.filter(t=>t.id!==e.id)),d(1)},p=e=>{i(t.filter(t=>t.id!==e.id)),r([...l,e]),d(1)},_="https://api.themoviedb.org/3/genre/".concat(c,"/list?&language=en-US"),M={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM",accept:"application/json"}},h=async()=>{let{data:e}=await n.A.get(_,M);console.log(e,"data ji"),r(e.genres)};return(0,o.useEffect)(()=>(h(),()=>{r({})}),[]),(0,a.jsxs)("div",{style:{padding:"6px 0"},children:[t.map(e=>(0,a.jsx)(s.A,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:()=>p(e)},e.id)),l.length>0&&l.map(e=>(0,a.jsx)(s.A,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:()=>m(e)},e.id))]})}},5807:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var a=i(4848);i(6540);var s=i(8217);function n(e){let{setPage:t,numOfPages:i=10}=e,n=e=>{t(e),window.scroll(0,0)};return(0,a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:(0,a.jsx)(s.A,{onChange:e=>n(e.target.textContent),count:i,color:"secondary",hideNextButton:!0,hidePrevButton:!0})})}},4435:(e,t,i)=>{"use strict";i.d(t,{A:()=>T});var a=i(4848),s=i(2880);let n="https://image.tmdb.org/t/p/w300",o="https://image.tmdb.org/t/p/w500",l="https://www.movienewz.com/img/films/poster-holder.jpg";var r=i(6540),c=i(7768),d=i(4335),m=i(3655),p=i.n(m),_=i(8468),M=i(2427),h=i.n(M);i(6638);let u=e=>e.preventDefault(),g=e=>{let{id:t,media_type:i}=e,[s,o]=(0,r.useState)([]),l=s.map(e=>(0,a.jsxs)("div",{className:"carouselItem",children:[(0,a.jsx)("img",{src:e.profile_path?"".concat(n,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null==e?void 0:e.name,onDragStart:u,className:"carouselItem__img"}),(0,a.jsx)("b",{className:"carouselItem__txt",children:null==e?void 0:e.name})]})),c="https://api.themoviedb.org/3/".concat(i,"/").concat(t,"/credits?language=en-US"),m={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM",accept:"application/json"}},p=async()=>{let{data:e}=await d.A.get(c,m);o(e.cast)};return(0,r.useEffect)(()=>{p()},[]),(0,a.jsx)(h(),{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:l,autoPlay:!0})};var N=i(1493),j=i(2561),w=i(3381),x=i(1917);let I=(0,c.A)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}));function Y(e){let{children:t,media_type:i,id:s}=e,n=I(),[c,m]=(0,r.useState)(!1),[M,h]=(0,r.useState)(),[u,Y]=(0,r.useState)(),C="https://api.themoviedb.org/3/".concat(i,"/").concat(s,"?language=en-US"),Z={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM",accept:"application/json"}},T=async()=>{let{data:e}=await d.A.get(C,Z);h(e)},v="https://api.themoviedb.org/3/".concat(i,"/").concat(s,"/videos?language=en-US"),z={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM",accept:"application/json"}},b=async()=>{var e;let{data:t}=await d.A.get(v,z);Y(null===(e=t.results[0])||void 0===e?void 0:e.key)};return(0,r.useEffect)(()=>{T(),b()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:p().media,style:{cursor:"pointer"},color:"inherit",onClick:()=>{m(!0)},children:t}),(0,a.jsx)(j.A,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:c,onClose:()=>{m(!1)},closeAfterTransition:!0,BackdropComponent:N.A,BackdropProps:{timeout:500},children:(0,a.jsx)(w.A,{in:c,children:M&&(0,a.jsx)("div",{className:n.paper,children:(0,a.jsxs)("div",{className:"ContentModal",children:[(0,a.jsx)("img",{src:M.poster_path?"".concat(o,"/").concat(M.poster_path):l,alt:M.name||M.title,className:"ContentModal__portrait"}),(0,a.jsx)("img",{src:M.backdrop_path?"".concat(o,"/").concat(M.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:M.name||M.title,className:"ContentModal__landscape"}),(0,a.jsxs)("div",{className:"ContentModal__about",children:[(0,a.jsxs)("span",{className:"ContentModal__title",children:[M.name||M.title," (",(M.first_air_date||M.release_date||"-----").substring(0,4),")"]}),M.tagline&&(0,a.jsx)("i",{className:"tagline",children:M.tagline}),(0,a.jsx)("span",{className:"ContentModal__description",children:M.overview}),(0,a.jsx)("div",{children:(0,a.jsx)(g,{id:s,media_type:i})}),(0,a.jsx)(x.A,{variant:"contained",startIcon:(0,a.jsx)(_.A,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(u),children:"Watch the Trailer"})]})]})})})})]})}var C=i(4745),Z=i.n(C);let T=e=>{let{id:t,poster:i,title:o,date:r,media_type:c,vote_average:d}=e;return(0,a.jsx)(Y,{media_type:c,id:t,children:(0,a.jsxs)("div",{className:Z().media,children:[(0,a.jsx)(s.A,{badgeContent:d,color:d>6?"primary":"secondary"}),(0,a.jsx)("img",{className:Z().poster,src:i?"".concat(n).concat(i):l,alt:o}),(0,a.jsx)("b",{className:Z().title,children:o}),(0,a.jsxs)("span",{className:Z().subTitle,children:["tv"===c?"TV Series":"Movie",(0,a.jsx)("span",{className:Z().subTitle,children:r})]})]})})}},6441:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});let a=e=>e.length<1?"":e.map(e=>e.id).reduce((e,t)=>e+","+t)},7410:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m});var a=i(4848),s=i(4335),n=i(6540),o=i(1552),l=i(5807),r=i(4435),c=i(6441),d=i(7836);let m=()=>{let[e,t]=(0,n.useState)([]),[i,m]=(0,n.useState)([]),[p,_]=(0,n.useState)(1),[M,h]=(0,n.useState)([]),[u,g]=(0,n.useState)(),N=(0,c.A)(i),j="https://api.themoviedb.org/3/discover/tv?api_key=".concat(d.env.REACT_APP_API_KEY,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(p,"&with_genres=").concat(N),w={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM",accept:"application/json"}},x=async()=>{let{data:e}=await s.A.get(j,w);h(e.results),g(e.total_pages)};return(0,n.useEffect)(()=>{window.scroll(0,0),x()},[N,p]),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"pageTitle",children:"Discover Series"}),(0,a.jsx)(o.A,{type:"tv",selectedGenres:i,setSelectedGenres:m,genres:e,setGenres:t,setPage:_}),(0,a.jsx)("div",{className:"trending",children:M&&M.map(e=>(0,a.jsx)(r.A,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id))}),u>1&&(0,a.jsx)(l.A,{setPage:_,numOfPages:u})]})}},3655:e=>{e.exports={ContentModal__landscape:"ContentModal_ContentModal__landscape__TRjna",ContentModal__portrait:"ContentModal_ContentModal__portrait__jIR2P",tagline:"ContentModal_tagline__xsfae",ContentModal:"ContentModal_ContentModal__up0CF",ContentModal__about:"ContentModal_ContentModal__about__hazcF",ContentModal__title:"ContentModal_ContentModal__title__ddySD",ContentModal__description:"ContentModal_ContentModal__description__qYAph"}},4745:e=>{e.exports={media:"SingleContent_media__WHelx",poster:"SingleContent_poster__fIXup",title:"SingleContent_title__uiyyE",subTitle:"SingleContent_subTitle__UHwbl"}}},e=>{var t=t=>e(e.s=t);e.O(0,[470,683,556,636,593,792],()=>t(8250)),_N_E=e.O()}]);