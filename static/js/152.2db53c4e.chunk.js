"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[152],{7941:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9439),s=n(2791),a=n(5170),i=n(184),o=function(){var e=(0,s.useRef)(null),t=(0,s.useState)(0),n=(0,r.Z)(t,2),o=n[0],c=n[1],l=(0,s.useContext)(a.z),u=l.setQuery,d=l.setPage;return(0,s.useEffect)((function(){Array.from(document.getElementsByClassName("tag"))[0].classList.add("active")}),[]),(0,i.jsx)("div",{className:"tags-wrapper",children:(0,i.jsx)("div",{className:"tags",ref:e,onTouchStart:function(e){var t=e.touches[0];c(t.pageX)},onTouchMove:function(t){var n=t.touches[0];e.current.scrollLeft+=o-n.pageX,c(n.pageX)},children:["All","Web Development","JavaScript","React","Dave Gray","Game Development","Live coding","Microsoft","Share market","News","Computer Science","Gaming","Comedy","Sports entertainment","Live","Music","Mixes","Puppies","Samsung","Computer Hardware","Gadgets"].map((function(e,t){return(0,i.jsx)("button",{type:"button",className:"tag",onClickCapture:function(e){d(1),u(e.target.innerText),document.querySelector(".searchInputBox").value=e.target.innerText,function(e){Array.from(document.getElementsByClassName("tag")).forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active")}(e)},children:e},e)}))})})}},152:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(2791),s=n(7941),a=n(9439),i=(n(8673),n(6150)),o=n(5170),c=n(1087),l=n(4261),u=n(3239),d=n(9861),v=n(6151),h=n(2898),f=n(3400),m=n(2739),p=n(7898),x=n(890),g=n(184),j=function(e){var t=e.video,n=(0,r.useState)(!1),s=(0,a.Z)(n,2),i=s[0],o=s[1],c=(0,r.useState)(!1),l=(0,a.Z)(c,2),u=l[0],d=l[1],v=(0,r.useRef)(null),x=function(){o((function(e){return!e}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"video-details",onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:[(0,g.jsx)("a",{href:t.user.url,title:t.user.name,children:(0,g.jsx)("img",{src:t.image,loading:"lazy",alt:"channelLogo"})}),(0,g.jsxs)("div",{className:"details",children:[(0,g.jsxs)("h2",{title:t.user.name,children:[t.user.name.length>18?"".concat(t.user.name.slice(0,18),"..."):t.user.name,(0,g.jsx)(f.Z,{ref:v,onFocus:x,onBlur:x,"aria-label":"More",sx:{"&:hover":{backgroundColor:"var(--dark-light-light)"}},children:(0,g.jsx)(h.Z,{sx:{color:"var(--text-color)",opacity:u?1:0}})})]}),(0,g.jsxs)("p",{children:[String(t.id).slice(0,3),"K views"]})]})]}),(0,g.jsxs)("div",{className:"more",style:function(){if(!i)return{display:"none"};var e=v.current.getBoundingClientRect(),t=window.innerWidth;return e.right+150>t?{display:"block",left:"20%",right:"auto",top:"102%"}:{display:"block",left:"100%",right:"auto",top:"102%"}}(),children:[(0,g.jsxs)("div",{className:"more-item",children:[(0,g.jsx)(m.Z,{sx:{color:"var(--text-color)"}}),(0,g.jsx)("p",{children:"Save to Watch later"})]}),(0,g.jsxs)("div",{className:"more-item",children:[(0,g.jsx)(p.Z,{sx:{color:"var(--text-color)"}}),(0,g.jsx)("p",{children:"Save to playlist"})]})]})]})},y=function(){var e=(0,r.useContext)(o.z),t=e.query,n=e.page,s=e.setPage,h=(0,x.Z)(t,n,"landscape"),f=h.result,m=h.isloading,p=h.hasMore,y=(0,r.useRef)(),Z=(0,r.useCallback)((function(e){m||(y.current&&y.current.disconnect(),y.current=new IntersectionObserver((function(e){e[0].isIntersecting&&p&&s((function(e){return e+1}))})),e&&y.current.observe(e))}),[m,p]),N=function(e){var t=e/60,n=Math.floor(t),r=60*(t-(n=n>9?n:"0".concat(n)));return r=r>9?String(r).slice(0,2):"0".concat(String(r).slice(0,2)),"".concat(n,":").concat(r)},S=(0,r.useRef)(),k=(0,r.useState)(!1),w=(0,a.Z)(k,2),b=w[0],C=w[1];return(0,r.useEffect)((function(){C(!p)}),[f]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("section",{className:"videos-section",children:[(0,g.jsx)("div",{ref:S,className:"container",children:f.map((function(e,t){return f.length===t+1?(0,g.jsxs)("div",{ref:Z,className:"video-container",children:[(0,g.jsx)("div",{style:{width:"100%",overflow:"hidden"},children:(0,g.jsx)(c.rU,{to:"watch/".concat(e.id),style:{display:"grid",placeItems:"center"},children:(0,g.jsx)("video",{src:e.video_files[0].link,poster:e.image,preload:"none",title:"Play"})})}),(0,g.jsx)("p",{className:"duration",children:N(e.duration)}),(0,g.jsx)(j,{video:e})]},(0,l.Z)()):(0,g.jsxs)("div",{className:"video-container",children:[(0,g.jsx)("div",{style:{width:"100%",overflow:"hidden"},children:(0,g.jsx)(c.rU,{to:"watch/".concat(e.id),style:{display:"grid",placeItems:"center"},children:(0,g.jsx)("video",{src:e.video_files[0].link,poster:e.image,preload:"none",title:"Play"})})}),(0,g.jsx)("p",{className:"duration",children:N(e.duration)}),(0,g.jsx)(j,{video:e})]},(0,l.Z)())}))}),m&&(0,g.jsx)(i.Z,{}),m&&(0,g.jsx)("div",{className:"loading",children:(0,g.jsx)(u.Z,{color:"inherit"})}),b&&(0,g.jsxs)("div",{className:"endOfVideos",children:["No more videos available!"," ",(0,g.jsxs)(v.Z,{variant:"contained",onClick:function(){document.documentElement.scrollTop=0},children:[(0,g.jsx)("span",{children:"Scroll Top"})," ",(0,g.jsx)(d.Z,{fontSize:"small"})]})]})]})})},Z=function(){return(0,g.jsxs)("div",{className:"home-content",children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)(y,{})]})}},890:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(4165),s=n(3433),a=n(5861),i=n(9439),o=n(2791),c=n(1912),l=n(7689),u=n(5170);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"landscape",d=arguments.length>3?arguments[3]:void 0,v=(0,o.useState)([]),h=(0,i.Z)(v,2),f=h[0],m=h[1],p=(0,o.useState)(!1),x=(0,i.Z)(p,2),g=x[0],j=x[1],y=(0,o.useState)(!1),Z=(0,i.Z)(y,2),N=Z[0],S=Z[1],k=(0,o.useState)(!1),w=(0,i.Z)(k,2),b=w[0],C=w[1],E=(0,o.useContext)(u.z).setProgress,M=(0,l.TH)(),z="landscape"===n?120:30;return(0,o.useEffect)((function(){m([])}),[e,M]),(0,o.useEffect)((function(){var i=function(){var i=(0,a.Z)((0,r.Z)().mark((function a(){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,S(!1),j(!0),E(30),r.next=6,c.Z.get("https://api.pexels.com/videos/search",{headers:{Authorization:"zD6L2vpyizUNtptqjEe1jYsDVFErIBRJFTDf4WGl7wMkk5F6X3OmUo3p"},params:{query:e,per_page:15,orientation:n,page:t,size:"small",min_duration:z}});case 6:i=r.sent,E(50),j(!1),m((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(i.data.videos))})),E(80),C(Boolean(i.data.next_page)),E(100),r.next=21;break;case 15:r.prev=15,r.t0=r.catch(0),j(!1),E(0),S(!0),console.log(r.t0);case 21:case"end":return r.stop()}}),a,null,[[0,15]])})));return function(){return i.apply(this,arguments)}}();i()}),[e,t,d]),{isloading:g,result:f,error:N,hasMore:b}}},8673:function(){}}]);
//# sourceMappingURL=152.2db53c4e.chunk.js.map