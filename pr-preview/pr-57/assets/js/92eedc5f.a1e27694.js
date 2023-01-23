"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2102],{1596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var o=t(7462),i=(t(7294),t(3905)),a=t(5488),p=t(5162),r=t(3068);const l={},s="OneDrive",d={unversionedId:"sources/companion-plugins/onedrive",id:"sources/companion-plugins/onedrive",title:"OneDrive",description:"The @uppy/onedrive plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/onedrive.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/onedrive",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/onedrive",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/onedrive.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/instagram"},next:{title:"Unsplash",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/unsplash"}},u={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:m};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"onedrive"},"OneDrive"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/onedrive")," plugin lets users import files from their\n",(0,i.kt)("a",{parentName:"p",href:"https://onedrive.com"},"OneDrive")," account."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"When you want to let users import files from their\n",(0,i.kt)("a",{parentName:"p",href:"https://onedrive.com"},"OneDrive")," account."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the OneDrive plugin to\nwork. Companion handles authentication with OneDrive, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."),(0,i.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,i.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/onedrive\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/onedrive\n"))),(0,i.kt)(p.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, OneDrive } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(OneDrive, {\n          // Options\n        })\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"Using OneDrive requires setup in both Uppy and Companion."),(0,i.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport OneDrive from '@uppy/onedrive';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(OneDrive, {\n        target: Dashboard,\n        companionUrl: 'https://your-companion.com',\n    });\n")),(0,i.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,i.kt)("p",null,"To sign up for API keys, go to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/products/onedrive/"},"OneDrive Platform from Meta"),"."),(0,i.kt)("p",null,"Create a project for your app if you don\u2019t have one yet."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable the OneDrive API."),(0,i.kt)("li",{parentName:"ul"},"Use this for an authorized redirect URI:\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://$YOUR\\_COMPANION\\_HOST\\_NAME/onedrive/redirect"))),(0,i.kt)("p",null,"Meta will give you an OAuth client ID and client secret."),(0,i.kt)("p",null,"Configure the OneDrive key and secret in Companion. With the standalone\nCompanion server, specify environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_GOOGLE_KEY="OneDrive OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="OneDrive OAuth client secret"\n')),(0,i.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        drive: {\n            key: 'OneDrive OAuth client ID',\n            secret: 'OneDrive OAuth client secret',\n        },\n    },\n});\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'OneDrive'"),")."),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"'OneDrive'"),")."),(0,i.kt)("h4",{id:"target"},(0,i.kt)("inlineCode",{parentName:"h4"},"target")),(0,i.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"companionurl"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,i.kt)("p",null,"URL to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"companionheaders"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,i.kt)("p",null,"Custom headers that should be sent along to ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,i.kt)("h4",{id:"companionallowedhosts"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,i.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,i.kt)("p",null,"This value can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,i.kt)("h4",{id:"companioncookiesrule"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,i.kt)("p",null,"This option correlates to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,i.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,i.kt)("h4",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameOneDrive: 'OneDrive',\n    },\n};\n")))}h.isMDXComponent=!0}}]);