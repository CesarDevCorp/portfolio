import{S as B,i as x,s as $,k as b,q as V,a as N,l as T,m as A,r as P,h,c as p,n as g,b as R,F as d,u as Q,B as F,a6 as Ne,o as He,a7 as pe,L as Ee,M as Ce,R as ce,D as De,X as ke,P as we,a0 as de,a3 as fe,w as ae,x as ne,y as ie,f as re,t as le,z as se}from"../../../../chunks/index-4bb73829.js";import"../../../../chunks/iconify-icon-a6742e12.js";function Ae(t,e,a){const n=t.slice();return n[27]=e[a],n[29]=a,n}function ye(t){let e,a=t[27].innerText+"",n,i,f,r,l;function u(){return t[20](t[27])}return{c(){e=b("li"),n=V(a),i=N(),this.h()},l(m){e=T(m,"LI",{class:!0});var o=A(e);n=P(o,a),i=p(o),o.forEach(h),this.h()},h(){g(e,"class",f="toc-list-item "+t[4]+" "+Le(t[27])+" "+(t[27].id===t[3]?t[1]:""))},m(m,o){R(m,e,o),d(e,n),d(e,i),r||(l=[ce(e,"click",u),ce(e,"click",t[18]),ce(e,"keypress",t[19])],r=!0)},p(m,o){t=m,o&4&&a!==(a=t[27].innerText+"")&&Q(n,a),o&30&&f!==(f="toc-list-item "+t[4]+" "+Le(t[27])+" "+(t[27].id===t[3]?t[1]:""))&&g(e,"class",f)},d(m){m&&h(e),r=!1,De(l)}}}function qe(t){let e,a,n,i,f,r,l,u,m=t[2],o=[];for(let v=0;v<m.length;v+=1)o[v]=ye(Ae(t,m,v));return{c(){e=b("div"),a=b("nav"),n=b("div"),i=V(t[0]),r=N();for(let v=0;v<o.length;v+=1)o[v].c();this.h()},l(v){e=T(v,"DIV",{class:!0});var E=A(e);a=T(E,"NAV",{class:!0});var _=A(a);n=T(_,"DIV",{class:!0});var L=A(n);i=P(L,t[0]),L.forEach(h),r=p(_);for(let s=0;s<o.length;s+=1)o[s].l(_);_.forEach(h),E.forEach(h),this.h()},h(){g(n,"class",f="toc-label "+t[6]),g(a,"class",l="toc-list "+t[5]),g(e,"class",u="toc "+t[7])},m(v,E){R(v,e,E),d(e,a),d(a,n),d(n,i),d(a,r);for(let _=0;_<o.length;_+=1)o[_].m(a,null)},p(v,[E]){if(E&1&&Q(i,v[0]),E&64&&f!==(f="toc-label "+v[6])&&g(n,"class",f),E&30){m=v[2];let _;for(_=0;_<m.length;_+=1){const L=Ae(v,m,_);o[_]?o[_].p(L,E):(o[_]=ye(L),o[_].c(),o[_].m(a,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=m.length}E&32&&l!==(l="toc-list "+v[5])&&g(a,"class",l),E&128&&u!==(u="toc "+v[7])&&g(e,"class",u)},i:F,o:F,d(v){v&&h(e),Ne(o,v)}}}const Me="p-4 pt-0",Ve="px-4 py-2 cursor-pointer";function Le(t){return t.tagName==="H3"?"ml-3":t.tagName==="H4"?"ml-6":t.tagName==="H5"?"ml-9":t.tagName==="H6"?"ml-12":""}function Pe(t){document.querySelector(`#${t.id}`).scrollIntoView({behavior:"smooth"})}function Re(t,e,a){let n,i,f,r,{scrollParent:l="#page"}=e,{target:u="#page"}=e,{allowedHeadings:m="h2, h3"}=e,{label:o="On This Page"}=e,{width:v="w-[240px]"}=e,{spacing:E="space-y-4"}=e,{text:_="text-surface-600-300-token"}=e,{hover:L="hover:bg-primary-hover-token"}=e,{active:s="bg-primary-active-token !text-on-primary-token"}=e,{rounded:k="rounded-token"}=e,{regionLabel:y="font-bold"}=e,{regionList:I="list-none"}=e,C,D=[],M=[],j;function U(){const c=document.querySelector(u);D=c==null?void 0:c.querySelectorAll(m)}function G(){D==null||D.forEach((c,O)=>{if(!c.hasAttribute("data-toc-ignore")){if(!c.id){let w=c.innerText.replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase();c.id=`${w}-${O}`}M.push(c)}}),a(2,M=[...M])}function X(){var w;let O=[];D==null||D.forEach(q=>{const K=(C==null?void 0:C.getBoundingClientRect().top)||0;q.getBoundingClientRect().top-K+40>=0&&O.push(q)}),a(3,j=(w=O[0])==null?void 0:w.id)}He(()=>{U(),G(),C=document.querySelector(l),C==null||C.addEventListener("scroll",X),X()}),pe(()=>{C==null||C.removeEventListener("scroll",X)});function W(c){ke.call(this,t,c)}function z(c){ke.call(this,t,c)}const Z=c=>{Pe(c)};return t.$$set=c=>{a(26,e=Ee(Ee({},e),Ce(c))),"scrollParent"in c&&a(8,l=c.scrollParent),"target"in c&&a(9,u=c.target),"allowedHeadings"in c&&a(10,m=c.allowedHeadings),"label"in c&&a(0,o=c.label),"width"in c&&a(11,v=c.width),"spacing"in c&&a(12,E=c.spacing),"text"in c&&a(13,_=c.text),"hover"in c&&a(14,L=c.hover),"active"in c&&a(1,s=c.active),"rounded"in c&&a(15,k=c.rounded),"regionLabel"in c&&a(16,y=c.regionLabel),"regionList"in c&&a(17,I=c.regionList)},t.$$.update=()=>{a(7,n=`${v} ${E} ${e.class??""}`),t.$$.dirty&65536&&a(6,i=`${Me} ${y}`),t.$$.dirty&131072&&a(5,f=`${I}`),t.$$.dirty&57344&&a(4,r=`${Ve} ${_} ${L} ${k}`)},e=Ce(e),[o,s,M,j,r,f,i,n,l,u,m,v,E,_,L,k,y,I,W,z,Z]}class Oe extends B{constructor(e){super(),x(this,e,Re,qe,$,{scrollParent:8,target:9,allowedHeadings:10,label:0,width:11,spacing:12,text:13,hover:14,active:1,rounded:15,regionLabel:16,regionList:17})}}function ze(t){let e,a,n,i,f,r;return document.title=e=t[1],{c(){a=b("meta"),n=b("meta"),i=b("meta"),f=b("meta"),r=b("meta"),this.h()},l(l){const u=we("svelte-pviwej",document.head);a=T(u,"META",{name:!0,content:!0}),n=T(u,"META",{httpequiv:!0,content:!0}),i=T(u,"META",{property:!0,content:!0}),f=T(u,"META",{property:!0,content:!0}),r=T(u,"META",{property:!0,content:!0}),u.forEach(h),this.h()},h(){g(a,"name","description"),g(a,"content",t[0]),g(n,"httpequiv","Content-Security-Policy"),g(n,"content","script-src 'self'"),g(i,"property","og:site_name"),g(i,"content",ue),g(f,"property","og:title"),g(f,"content",t[1]),g(r,"property","og:description"),g(r,"content",t[0])},m(l,u){d(document.head,a),d(document.head,n),d(document.head,i),d(document.head,f),d(document.head,r)},p(l,[u]){u&2&&e!==(e=l[1])&&(document.title=e),u&1&&g(a,"content",l[0]),u&1&&g(r,"content",l[0])},i:F,o:F,d(l){h(a),h(n),h(i),h(f),h(r)}}}const ue="SvelteKit + MDsveX Blog";function Fe(t,e,a){let{title:n}=e,{description:i}=e;const f=n?`${n} | ${ue}`:ue;return t.$$set=r=>{"title"in r&&a(2,n=r.title),"description"in r&&a(0,i=r.description)},[i,f,n]}class je extends B{constructor(e){super(),x(this,e,Fe,ze,$,{title:2,description:0})}}function Ge(t){let e,a,n;return{c(){e=b("h1"),a=b("a"),n=V(t[0]),this.h()},l(i){e=T(i,"H1",{id:!0});var f=A(e);a=T(f,"A",{href:!0});var r=A(a);n=P(r,t[0]),r.forEach(h),f.forEach(h),this.h()},h(){g(a,"href",t[2]),g(e,"id",t[1])},m(i,f){R(i,e,f),d(e,a),d(a,n)},p(i,[f]){f&1&&Q(n,i[0])},i:F,o:F,d(i){i&&h(e)}}}function Xe(t,e,a){let{slug:n=""}=e,{title:i}=e;const f=i.toLowerCase().replace(/[^a-zA-Z ]/g,"").replace(/\s/g,"-"),r=n?`/posts/${n}`:"#"+f;return t.$$set=l=>{"slug"in l&&a(3,n=l.slug),"title"in l&&a(0,i=l.title)},[i,f,r,n]}class Ze extends B{constructor(e){super(),x(this,e,Xe,Ge,$,{slug:3,title:0})}}function Ke(t){let e,a,n,i,f,r,l,u,m,o,v,E,_,L,s,k,y,I,C,D,M,j,U,G,X,W,z,Z,c,O,w,q,K;return{c(){e=b("div"),a=b("div"),n=b("img"),f=N(),r=b("div"),l=b("div"),u=b("span"),m=V(t[0]),o=N(),v=b("span"),E=V("·"),_=N(),L=b("span"),s=V(t[4]),k=N(),y=b("div"),I=b("div"),C=b("iconify-icon"),D=N(),M=b("span"),j=V(t[1]),U=N(),G=b("span"),X=V("·"),W=N(),z=b("span"),Z=V(t[2]),c=V(" words"),O=N(),w=b("div"),q=b("img"),this.h()},l(S){e=T(S,"DIV",{class:!0});var H=A(e);a=T(H,"DIV",{class:!0});var me=A(a);n=T(me,"IMG",{class:!0,src:!0,alt:!0}),me.forEach(h),f=p(H),r=T(H,"DIV",{class:!0});var ee=A(r);l=T(ee,"DIV",{class:!0});var Y=A(l);u=T(Y,"SPAN",{class:!0});var he=A(u);m=P(he,t[0]),he.forEach(h),o=p(Y),v=T(Y,"SPAN",{});var ge=A(v);E=P(ge,"·"),ge.forEach(h),_=p(Y),L=T(Y,"SPAN",{});var ve=A(L);s=P(ve,t[4]),ve.forEach(h),Y.forEach(h),k=p(ee),y=T(ee,"DIV",{class:!0});var J=A(y);I=T(J,"DIV",{class:!0});var te=A(I);C=T(te,"ICONIFY-ICON",{icon:!0,alt:!0,class:!0}),A(C).forEach(h),D=p(te),M=T(te,"SPAN",{});var _e=A(M);j=P(_e,t[1]),_e.forEach(h),te.forEach(h),U=p(J),G=T(J,"SPAN",{});var be=A(G);X=P(be,"·"),be.forEach(h),W=p(J),z=T(J,"SPAN",{});var oe=A(z);Z=P(oe,t[2]),c=P(oe," words"),oe.forEach(h),J.forEach(h),ee.forEach(h),H.forEach(h),O=p(S),w=T(S,"DIV",{});var Te=A(w);q=T(Te,"IMG",{src:!0,alt:!0}),Te.forEach(h),this.h()},h(){g(n,"class","m-0"),de(n.src,i="/images/favicon.png")||g(n,"src",i),g(n,"alt","avatar"),g(a,"class","md:w-14 md:h-14 w-12 h-12"),g(u,"class","text-lg font-semibold"),g(l,"class","space-x-1"),fe(C,"icon","material-symbols:menu-book-outline"),fe(C,"alt","book-outline"),fe(C,"class","text-lg"),g(I,"class","flex items-center gap-2"),g(y,"class","flex items-center space-x-2"),g(r,"class","flex flex-col"),g(e,"class","flex items-center gap-4"),de(q.src,K=t[3])||g(q,"src",K),g(q,"alt","article hero")},m(S,H){R(S,e,H),d(e,a),d(a,n),d(e,f),d(e,r),d(r,l),d(l,u),d(u,m),d(l,o),d(l,v),d(v,E),d(l,_),d(l,L),d(L,s),d(r,k),d(r,y),d(y,I),d(I,C),d(I,D),d(I,M),d(M,j),d(y,U),d(y,G),d(G,X),d(y,W),d(y,z),d(z,Z),d(z,c),R(S,O,H),R(S,w,H),d(w,q)},p(S,[H]){H&1&&Q(m,S[0]),H&2&&Q(j,S[1]),H&4&&Q(Z,S[2]),H&8&&!de(q.src,K=S[3])&&g(q,"src",K)},i:F,o:F,d(S){S&&h(e),S&&h(O),S&&h(w)}}}function Ye(t,e,a){let{author:n}=e,{date:i}=e,{readingTime:f}=e,{wordCount:r}=e,{image:l=""}=e;const u=new Date(i).toDateString().split(" ").slice(1).join(" ");return t.$$set=m=>{"author"in m&&a(0,n=m.author),"date"in m&&a(5,i=m.date),"readingTime"in m&&a(1,f=m.readingTime),"wordCount"in m&&a(2,r=m.wordCount),"image"in m&&a(3,l=m.image)},[n,f,r,l,u,i]}class Je extends B{constructor(e){super(),x(this,e,Ye,Ke,$,{author:0,date:5,readingTime:1,wordCount:2,image:3})}}const Qe="code",Ue=t=>t.target.parentElement.querySelector(Qe).innerText,We=async t=>{const e=document.getSelection(),a=(e==null?void 0:e.rangeCount)??0,n=[];if(e&&a>0)for(let i=0;i<a;i++)n.push(e.getRangeAt(i));if(await navigator.clipboard.writeText(t),e&&a){e.removeAllRanges();for(let i=0;i<a;i++)e.addRange(n[i])}},Ie="#adb5bd",Se="#fcb32c",Be=1e3,xe="Copied 🎉",$e=t=>{if(t.disabled)return;const e=t.innerText;t.disabled=!0,t.textContent=xe,t.style.color=Se,setTimeout(()=>{t.textContent=e,t.style.color=Ie,t.disabled=!1,t.onmouseover=()=>{t.style.color=Se},t.onmouseleave=()=>{t.style.color=Ie}},Be)},et=t=>{const e=Ue(t);We(e),$e(t.target)};function tt(t){let e,a,n,i,f,r,l,u,m,o,v,E,_=t[0].html+"",L;return e=new je({props:{title:t[0].frontmatter.title,description:t[0].frontmatter.description}}),i=new Oe({props:{target:"#toc-target",class:"top-8 card variant-soft-primary sticky p-4",width:"w-fit",hover:"dark:hover:text-primary-400 hover:text-secondary-900",regionList:"list-none font-semibold"}}),u=new Ze({props:{title:t[0].frontmatter.title}}),o=new Je({props:{author:t[0].frontmatter.author,date:t[0].frontmatter.date,readingTime:t[0].frontmatter.readingTime.text,wordCount:t[0].frontmatter.readingTime.words,image:t[0].frontmatter.image}}),{c(){ae(e.$$.fragment),a=N(),n=b("div"),ae(i.$$.fragment),f=N(),r=b("article"),l=b("section"),ae(u.$$.fragment),m=N(),ae(o.$$.fragment),v=N(),E=b("section"),this.h()},l(s){ne(e.$$.fragment,s),a=p(s),n=T(s,"DIV",{class:!0});var k=A(n);ne(i.$$.fragment,k),k.forEach(h),f=p(s),r=T(s,"ARTICLE",{});var y=A(r);l=T(y,"SECTION",{class:!0});var I=A(l);ne(u.$$.fragment,I),m=p(I),ne(o.$$.fragment,I),I.forEach(h),v=p(y),E=T(y,"SECTION",{id:!0,"data-testid":!0,class:!0});var C=A(E);C.forEach(h),y.forEach(h),this.h()},h(){g(n,"class","hidden absolute w-[240px] xl:inline-block h-full top-0 -right-[264px]"),g(l,"class","mb-8"),g(E,"id","toc-target"),g(E,"data-testid","raw-html-wrapper"),g(E,"class","")},m(s,k){ie(e,s,k),R(s,a,k),R(s,n,k),ie(i,n,null),R(s,f,k),R(s,r,k),d(r,l),ie(u,l,null),d(l,m),ie(o,l,null),d(r,v),d(r,E),E.innerHTML=_,L=!0},p(s,[k]){const y={};k&1&&(y.title=s[0].frontmatter.title),k&1&&(y.description=s[0].frontmatter.description),e.$set(y);const I={};k&1&&(I.title=s[0].frontmatter.title),u.$set(I);const C={};k&1&&(C.author=s[0].frontmatter.author),k&1&&(C.date=s[0].frontmatter.date),k&1&&(C.readingTime=s[0].frontmatter.readingTime.text),k&1&&(C.wordCount=s[0].frontmatter.readingTime.words),k&1&&(C.image=s[0].frontmatter.image),o.$set(C),(!L||k&1)&&_!==(_=s[0].html+"")&&(E.innerHTML=_)},i(s){L||(re(e.$$.fragment,s),re(i.$$.fragment,s),re(u.$$.fragment,s),re(o.$$.fragment,s),L=!0)},o(s){le(e.$$.fragment,s),le(i.$$.fragment,s),le(u.$$.fragment,s),le(o.$$.fragment,s),L=!1},d(s){se(e,s),s&&h(a),s&&h(n),se(i),s&&h(f),s&&h(r),se(u),se(o)}}}function at(t,e,a){let{data:n}=e;return He(async()=>{const i=document.querySelectorAll(".remark-code-title");document.querySelectorAll("pre").forEach((r,l)=>{const u=r.querySelector("code");u&&(u.className="unstyled");const m=i[l],o=document.createElement("button");o.className="copy-code-to-clipboard",o.textContent=m.textContent,o.role="button",o.addEventListener("click",et),r.prepend(o)})}),t.$$set=i=>{"data"in i&&a(0,n=i.data)},[n]}class rt extends B{constructor(e){super(),x(this,e,at,tt,$,{data:0})}}export{rt as default};
