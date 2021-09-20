(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12897:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",slug:"../build-index"},s=void 0,d={unversionedId:"build/build-index",id:"build/build-index",isDocsHomePage:!1,title:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",source:"@site/../docs/build/build-index.md",sourceDirName:"build",slug:"/build-index",permalink:"/zh-CN/docs/build-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-index.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631864714,formattedLastUpdatedAt:"2021/9/17",frontMatter:{id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",slug:"../build-index"},sidebar:"docs",previous:{title:"Video Tutorials",permalink:"/zh-CN/docs/learn-video-tutorials"},next:{title:"Polkadot Builders Starter's Guide",permalink:"/zh-CN/docs/build-build-with-polkadot"}},u=[{value:"Development Guide",id:"development-guide",children:[]},{value:"Integration Guide",id:"integration-guide",children:[]},{value:"Tools &amp; Resources",id:"tools--resources",children:[{value:"Grants",id:"grants",children:[]},{value:"PSPs",id:"psps",children:[]},{value:"Hackathon",id:"hackathon",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the builder's section of the Polkadot Wiki."),(0,a.kt)("p",null,"Here, you will discover many development tools and resources in the Polkadot ecosystem.\nWe are always adding new tools and frameworks as we learn about them so if you are working\non something that should be included please reach out to us on\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:matrix.org"},"Element"),"!"),(0,a.kt)("p",null,"This section of the wiki is divided into the following parts:"),(0,a.kt)("h2",{id:"development-guide"},"Development Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain,\nparathread, or smart contract for your project and how to get started."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-pdk"},"Parachain Development")," - Tools for building parachains and\nparathreads."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-smart-contracts"},"Polkadot Smart Contracts")," - Tools to deploy contracts to a Polkadot parachain.")),(0,a.kt)("h2",{id:"integration-guide"},"Integration Guide"),(0,a.kt)("p",null,"This section is for service providers like wallets or node operators who want to learn how to\nintegrate Polkadot into their systems."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-integration"},"Integration Initiation")," - The guide to the guide."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-protocol-info"},"Polkadot Protocol Information")," - General information and F.A.Q.s about\nthe Polkadot protocol, e.g. address formats."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-node-management"},"Node Management")," - A short overview of the Parity Polkadot client and\nthe most relevant options/flags for infrastructure providers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-node-interaction"},"Node Interaction")," - Learn how to interact with your node via RPC."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-transaction-construction"},"Transaction Construction and Signing")," - Learn the transaction\nformat for Polkadot and how to construct and sign transactions offline.")),(0,a.kt)("h2",{id:"tools--resources"},"Tools & Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"Subkey")," - Command line utility for\ngenerating and inspecting key pairs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Polkadot Standards Proposals\n(PSPs) are standards for the Polkadot ecosystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,a.kt)("h3",{id:"grants"},"Grants"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/grants"},"Grants")," - A list of all Polkadot-related projects given grants by the Web3 Foundation.")),(0,a.kt)("h3",{id:"psps"},"PSPs"),(0,a.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,a.kt)("h3",{id:"hackathon"},"Hackathon"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-hackathon"},"Resources For Running a Hackathon"))))}p.isMDXComponent=!0}}]);