import{k as o,l as U}from"./index-703867ad.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j=540,z=e=>document.querySelector(`${e}.ion-cloned-element`),F=e=>e.shadowRoot||e,W=e=>{const a=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs"),s="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(a!=null){const n=a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return n!=null?n.querySelector(s):null}return e.querySelector(s)},M=(e,a)=>{const s=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs");let n=[];if(s!=null){const t=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(n=t.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const t of n){const c=t.closest("ion-header"),l=c&&!c.classList.contains("header-collapse-condense-inactive"),g=t.querySelector("ion-back-button"),i=t.classList.contains("buttons-collapse"),p=t.slot==="start"||t.slot==="";if(g!==null&&p&&(i&&l&&a||!i))return g}return null},J=(e,a,s,n,t)=>{const c=M(n,s),l=W(t),g=W(n),i=M(t,s),p=c!==null&&l!==null&&!s,u=g!==null&&i!==null&&s;if(p){const m=l.getBoundingClientRect(),d=c.getBoundingClientRect();D(e,a,s,l,m,d),G(e,a,s,c,m,d)}else if(u){const m=g.getBoundingClientRect(),d=i.getBoundingClientRect();D(e,a,s,g,m,d),G(e,a,s,i,m,d)}return{forward:p,backward:u}},G=(e,a,s,n,t,c)=>{const l=a?`calc(100% - ${c.right+4}px)`:`${c.left-4}px`,g=a?"7px":"-7px",i=a?"-4px":"4px",p=a?"-4px":"4px",u=a?"right":"left",m=a?"left":"right",d=[{offset:0,opacity:0,transform:`translate3d(${g}, ${t.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${i}, ${c.top-46}px, 0) scale(1)`}],A=[{offset:0,opacity:1,transform:`translate3d(${i}, ${c.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${t.top-40}px, 0) scale(2.1)`}],I=s?A:d,P=[{offset:0,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${p}, ${c.top-46}px, 0) scale(1)`}],w=[{offset:0,opacity:1,transform:`translate3d(${p}, ${c.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`}],E=s?w:P,$=o(),B=o(),T=z("ion-back-button"),K=F(T).querySelector(".button-text"),r=F(T).querySelector("ion-icon");T.text=n.text,T.mode=n.mode,T.icon=n.icon,T.color=n.color,T.disabled=n.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),B.addElement(r),$.addElement(K),$.beforeStyles({"transform-origin":`${u} center`}).beforeAddWrite(()=>{n.style.setProperty("display","none"),T.style.setProperty(u,l)}).afterAddWrite(()=>{n.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(u)}).keyframes(I),B.beforeStyles({"transform-origin":`${m} center`}).keyframes(E),e.addAnimation([$,B])},D=(e,a,s,n,t,c)=>{const l=a?`calc(100% - ${t.right}px)`:`${t.left}px`,g=a?"-18px":"18px",i=a?"right":"left",p=[{offset:0,opacity:0,transform:`translate3d(${g}, ${c.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${t.top-2}px, 0) scale(1)`}],u=[{offset:0,opacity:.99,transform:`translate3d(0, ${t.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${c.top-4}px, 0) scale(0.5)`}],m=s?p:u,d=z("ion-title"),A=o();d.innerText=n.innerText,d.size=n.size,d.color=n.color,A.addElement(d),A.beforeStyles({"transform-origin":`${i} center`,height:"46px",display:"",position:"relative",[i]:l}).beforeAddWrite(()=>{n.style.setProperty("display","none")}).afterAddWrite(()=>{n.style.setProperty("display",""),d.style.setProperty("display","none")}).keyframes(m),e.addAnimation(A)},V=(e,a)=>{var s;try{const n="cubic-bezier(0.32,0.72,0,1)",t="opacity",c="transform",l="0%",i=e.ownerDocument.dir==="rtl",p=i?"-99.5%":"99.5%",u=i?"33%":"-33%",m=a.enteringEl,d=a.leavingEl,A=a.direction==="back",I=m.querySelector(":scope > ion-content"),P=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),w=m.querySelectorAll(":scope > ion-header > ion-toolbar"),E=o(),$=o();if(E.addElement(m).duration(((s=a.duration)!==null&&s!==void 0?s:0)||j).easing(a.easing||n).fill("both").beforeRemoveClass("ion-page-invisible"),d&&e!==null&&e!==void 0){const r=o();r.addElement(e),E.addAnimation(r)}if(!I&&w.length===0&&P.length===0?$.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):($.addElement(I),$.addElement(P)),E.addAnimation($),A?$.beforeClearStyles([t]).fromTo("transform",`translateX(${u})`,`translateX(${l})`).fromTo(t,.8,1):$.beforeClearStyles([t]).fromTo("transform",`translateX(${p})`,`translateX(${l})`),I){const r=F(I).querySelector(".transition-effect");if(r){const v=r.querySelector(".transition-cover"),q=r.querySelector(".transition-shadow"),X=o(),f=o(),y=o();X.addElement(r).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),f.addElement(v).beforeClearStyles([t]).fromTo(t,0,.1),y.addElement(q).beforeClearStyles([t]).fromTo(t,.03,.7),X.addAnimation([f,y]),$.addAnimation([X])}}const B=m.querySelector("ion-header.header-collapse-condense"),{forward:T,backward:K}=J(E,i,A,m,d);if(w.forEach(r=>{const v=o();v.addElement(r),E.addAnimation(v);const q=o();q.addElement(r.querySelector("ion-title"));const X=o(),f=Array.from(r.querySelectorAll("ion-buttons,[menuToggle]")),y=r.closest("ion-header"),h=y==null?void 0:y.classList.contains("header-collapse-condense-inactive");let b;A?b=f.filter(R=>{const _=R.classList.contains("buttons-collapse");return _&&!h||!_}):b=f.filter(R=>!R.classList.contains("buttons-collapse")),X.addElement(b);const C=o();C.addElement(r.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const S=o();S.addElement(F(r).querySelector(".toolbar-background"));const x=o(),O=r.querySelector("ion-back-button");if(O&&x.addElement(O),v.addAnimation([q,X,C,S,x]),X.fromTo(t,.01,1),C.fromTo(t,.01,1),A)h||q.fromTo("transform",`translateX(${u})`,`translateX(${l})`).fromTo(t,.01,1),C.fromTo("transform",`translateX(${u})`,`translateX(${l})`),x.fromTo(t,.01,1);else if(B||q.fromTo("transform",`translateX(${p})`,`translateX(${l})`).fromTo(t,.01,1),C.fromTo("transform",`translateX(${p})`,`translateX(${l})`),S.beforeClearStyles([t,"transform"]),(y==null?void 0:y.translucent)?S.fromTo("transform",i?"translateX(-100%)":"translateX(100%)","translateX(0px)"):S.fromTo(t,.01,"var(--opacity)"),T||x.fromTo(t,.01,1),O&&!T){const _=o();_.addElement(F(O).querySelector(".button-text")).fromTo("transform",i?"translateX(-100px)":"translateX(100px)","translateX(0px)"),v.addAnimation(_)}}),d){const r=o(),v=d.querySelector(":scope > ion-content"),q=d.querySelectorAll(":scope > ion-header > ion-toolbar"),X=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!v&&q.length===0&&X.length===0?r.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(r.addElement(v),r.addElement(X)),E.addAnimation(r),A){r.beforeClearStyles([t]).fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)");const f=U(d);E.afterAddWrite(()=>{E.getDirection()==="normal"&&f.style.setProperty("display","none")})}else r.fromTo("transform",`translateX(${l})`,`translateX(${u})`).fromTo(t,1,.8);if(v){const f=F(v).querySelector(".transition-effect");if(f){const y=f.querySelector(".transition-cover"),h=f.querySelector(".transition-shadow"),b=o(),C=o(),S=o();b.addElement(f).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),C.addElement(y).beforeClearStyles([t]).fromTo(t,.1,0),S.addElement(h).beforeClearStyles([t]).fromTo(t,.7,.03),b.addAnimation([C,S]),r.addAnimation([b])}}q.forEach(f=>{const y=o();y.addElement(f);const h=o();h.addElement(f.querySelector("ion-title"));const b=o(),C=f.querySelectorAll("ion-buttons,[menuToggle]"),S=f.closest("ion-header"),x=S==null?void 0:S.classList.contains("header-collapse-condense-inactive"),O=Array.from(C).filter(Y=>{const N=Y.classList.contains("buttons-collapse");return N&&!x||!N});b.addElement(O);const R=o(),_=f.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");_.length>0&&R.addElement(_);const L=o();L.addElement(F(f).querySelector(".toolbar-background"));const k=o(),H=f.querySelector("ion-back-button");if(H&&k.addElement(H),y.addAnimation([h,b,R,k,L]),E.addAnimation(y),k.fromTo(t,.99,0),b.fromTo(t,.99,0),R.fromTo(t,.99,0),A){if(x||h.fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),R.fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)"),L.beforeClearStyles([t,"transform"]),(S==null?void 0:S.translucent)?L.fromTo("transform","translateX(0px)",i?"translateX(-100%)":"translateX(100%)"):L.fromTo(t,"var(--opacity)",0),H&&!K){const N=o();N.addElement(F(H).querySelector(".button-text")).fromTo("transform",`translateX(${l})`,`translateX(${(i?-124:124)+"px"})`),y.addAnimation(N)}}else x||h.fromTo("transform",`translateX(${l})`,`translateX(${u})`).fromTo(t,.99,0).afterClearStyles([c,t]),R.fromTo("transform",`translateX(${l})`,`translateX(${u})`).afterClearStyles([c,t]),k.afterClearStyles([t]),h.afterClearStyles([t]),b.afterClearStyles([t])})}return E}catch(n){throw n}};export{V as iosTransitionAnimation,F as shadow};
