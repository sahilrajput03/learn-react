(this["webpackJsonpgists-fetching-from-github-usehistory-from-react-router-dom"]=this["webpackJsonpgists-fetching-from-github-usehistory-from-react-router-dom"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),c=a(8),o=a(1),s=(a(23),a(15));const d=(e,t)=>{const a=Object(n.useRef)(!0),l=Object(n.useState)({data:null,loading:!0}),r=Object(s.a)(l,2),i=r[0],c=r[1];return Object(n.useEffect)(()=>()=>{a.current=!1},[]),Object(n.useEffect)(()=>{c(e=>({data:e.data,loading:!0})),fetch(e).then(e=>"text"===t?e.text():e.json()).then(e=>{a.current&&c({data:e,loading:!1})})},[e,c]),i};function m(){const e=d("https://api.github.com/gists"),t=e.data,a=e.loading;return l.a.createElement("div",{className:"App"},l.a.createElement(f,null,l.a.createElement(c.a,{basename:"/GistsFetchingFromGithubRandom_react-router-dom"},l.a.createElement(p,null,a?"Loading...":t.map(e=>l.a.createElement(h,{key:e.id},l.a.createElement(c.b,{to:"/g/".concat(e.id)},e.description||"[No description.]")))),l.a.createElement(o.c,null,l.a.createElement(E,null,l.a.createElement(o.a,{path:"/",exact:!0,render:()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Welcome to Fetch Gists app")," User setttings for st3 has three files.")}),t&&l.a.createElement(o.a,{path:"/g/:gistId",exact:!0,render:({match:e})=>l.a.createElement(u,{gist:t.find(t=>t.id===e.params.gistId)})}))))))}const u=({gist:e})=>l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},"Go to Home page"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,e&&e.description||"[No description.]"),l.a.createElement("div",null," User: ",null===e||void 0===e?void 0:e.owner.login),l.a.createElement("b",null,"Gist Url:",l.a.createElement("a",{href:null===e||void 0===e?void 0:e.html_url,target:"_blank",rel:"noreferrer"},null===e||void 0===e?void 0:e.html_url)),l.a.createElement("br",null),Object.keys(null===e||void 0===e?void 0:e.files).map(t=>l.a.createElement("li",null,l.a.createElement("b",null,t),l.a.createElement("br",null),l.a.createElement("a",{href:e.files[t].raw_url,target:"_blank",rel:"noreferrer"},e.files[t].raw_url),l.a.createElement(g,{fileUrl:e.files[t].raw_url})))),g=({fileUrl:e})=>{const t=d(e,"text"),a=t.data;return t.loading?l.a.createElement("h2",null,"Loading file contents"):l.a.createElement("pre",null,a)},p=e=>l.a.createElement("div",{style:{position:"relative",width:"20vw",height:"90vh",padding:"30px 30px",background:"lightpink",float:"left",overflow:"auto",borderRadius:"20px"}},l.a.createElement("div",Object.assign({className:"innerDivver",style:{position:"relative",overflowY:"auto",width:"20vw",height:"80vh",background:"pink",borderRadius:"40px"}},e))),h=e=>l.a.createElement("div",Object.assign({style:{padding:"5px 10px"}},e)),E=e=>l.a.createElement("div",{style:{position:"relative",background:"pink",height:"90vh",overflow:"auto",padding:"30px 30px"}},l.a.createElement("div",Object.assign({style:{padding:"20px"}},e))),f=e=>l.a.createElement("div",Object.assign({class:"myRootComponent"},e)),b=document.getElementById("root");i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),b)}},[[16,1,2]]]);
//# sourceMappingURL=main.ed642c8e.chunk.js.map