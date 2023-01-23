"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2619],{1648:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var t=o(7462),a=(o(7294),o(3905)),i=o(5488),l=o(5162),p=o(3068);const r={},s="Google Drive",d={unversionedId:"sources/companion-plugins/google-drive",id:"sources/companion-plugins/google-drive",title:"Google Drive",description:"The @uppy/google-drive plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/google-drive.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/google-drive",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/google-drive",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/google-drive.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facebook",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/facebook"},next:{title:"Instagram",permalink:"/uppy.io/pr-preview/pr-57/docs/sources/companion-plugins/instagram"}},u={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:m};function h(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"google-drive"},"Google Drive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/google-drive")," plugin lets users import files from their\n",(0,a.kt)("a",{parentName:"p",href:"https://www.drive.google.com"},"Google Drive")," account."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to let users import files from their\n",(0,a.kt)("a",{parentName:"p",href:"https://www.drive.google.com"},"Google Drive")," account."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Google Drive plugin\nto work. Companion handles authentication with Google Drive, downloads the\nfiles, and uploads them to the destination. This saves the user bandwidth,\nespecially helpful if they are on a mobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/google-drive\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/google-drive\n"))),(0,a.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, GoogleDrive } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(GoogleDrive, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Using Google Drive requires setup in both Uppy and Companion."),(0,a.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport GoogleDrive from '@uppy/google-drive';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(GoogleDrive, {\n        target: Dashboard,\n        companionUrl: 'https://your-companion.com',\n    });\n")),(0,a.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,a.kt)("p",null,"To sign up for API keys, go to the\n",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/"},"Google Developer Console"),"."),(0,a.kt)("p",null,"Create a project for your app if you don\u2019t have one yet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the project\u2019s dashboard,\n",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/drive/api/v3/enable-drive-api"},"enable the Google Drive API"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/drive/api/v3/about-auth"},"Set up OAuth authorization"),".\nUse this for an authorized redirect URI:\nhttps://$YOUR_COMPANION_HOST_NAME/drive/redirect")),(0,a.kt)("p",null,"Google will give you an OAuth client ID and client secret."),(0,a.kt)("p",null,"Configure the Google Drive key and secret in Companion. With the standalone\nCompanion server, specify environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_GOOGLE_KEY="Google Drive OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="Google Drive OAuth client secret"\n')),(0,a.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        drive: {\n            key: 'Google Drive OAuth client ID',\n            secret: 'Google Drive OAuth client secret',\n        },\n    },\n});\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'GoogleDrive'"),")."),(0,a.kt)("h4",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")),(0,a.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"'GoogleDrive'"),")."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h4",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,a.kt)("h4",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,a.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameGoogleDrive: 'GoogleDrive',\n    },\n};\n")))}h.isMDXComponent=!0}}]);