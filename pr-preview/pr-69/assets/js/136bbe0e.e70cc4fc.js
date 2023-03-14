"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3695],{4992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),p=(a(7294),a(3905)),r=a(5488),s=a(5162),i=a(3068);const o={},l="Vue",u={unversionedId:"framework-integrations/vue",id:"framework-integrations/vue",title:"Vue",description:"Vue components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/vue.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/vue",permalink:"/uppy.io/pr-preview/pr-69/docs/framework-integrations/vue",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/vue.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Svelte",permalink:"/uppy.io/pr-preview/pr-69/docs/framework-integrations/svelte"},next:{title:"Remote sources",permalink:"/uppy.io/pr-preview/pr-69/docs/presets/remote-sources"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2}],c={toc:d};function k(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"vue"},"Vue"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vue")," components for the Uppy UI plugins."),(0,p.kt)("h2",{id:"install"},"Install"),(0,p.kt)(r.Z,{mdxType:"Tabs"},(0,p.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/vue\n"))),(0,p.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/vue\n"))),(0,p.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,p.kt)(i.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,p.kt)("h2",{id:"use"},"Use"),(0,p.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders\n",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,p.kt)("p",null,"Instead of adding a UI plugin to an Uppy instance with ",(0,p.kt)("inlineCode",{parentName:"p"},".use()"),", the Uppy\ninstance can be passed into components as an ",(0,p.kt)("inlineCode",{parentName:"p"},"uppy")," prop. Due to the way Vue\nhandles reactivity, you can initialize Uppy the same way you would with vanilla\nJavaScript."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n    import { Dashboard } from '@uppy/vue';\n    import Uppy from '@uppy/core';\n    import Webcam from '@uppy/webcam';\n\n    // Don't forget the CSS: core and UI components + plugins you are using\n    import '@uppy/core/dist/style.css';\n    import '@uppy/dashboard/dist/style.css';\n    import '@uppy/webcam/dist/style.css';\n\n    const uppy = new Uppy().use(Webcam);\n<\/script>\n\n<main><Dashboard uppy={uppy} plugins={[\"Webcam\"]} /></main>\n")))}k.isMDXComponent=!0}}]);