"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2619],{59828:(e,n,o)=>{o.d(n,{Z:()=>c});var i=o(67294),s=o(84316),l=o(38555),r=o(56482),d=o(85893);const{version:t}=r;function c(e){let{children:n,uppyCssName:o="uppy.min.css",uppyJsName:r="uppy.min.mjs"}=e,c=[];i.Children.toArray(n).forEach((e=>{c=[...c,...String(e).trim().split("\n").map((e=>e.trim()))]}));const a=c.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${t}/${r}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${t}/${o}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${a.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.Z,{type:"caution",children:[(0,d.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,d.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,d.jsx)(s.Z,{language:"html",children:p})]})}},5986:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var i=o(85893),s=o(11151),l=o(22808),r=o(30433),d=o(59828);const t={slug:"/google-drive"},c="Google Drive",a={id:"sources/companion-plugins/google-drive",title:"Google Drive",description:"The @uppy/google-drive plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/google-drive.mdx",sourceDirName:"sources/companion-plugins",slug:"/google-drive",permalink:"/docs/google-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/google-drive.mdx",tags:[],version:"current",frontMatter:{slug:"/google-drive"},sidebar:"tutorialSidebar",previous:{title:"Facebook",permalink:"/docs/facebook"},next:{title:"Instagram",permalink:"/docs/instagram"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"google-drive",children:"Google Drive"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@uppy/google-drive"})," plugin lets users import files from their\n",(0,i.jsx)(n.a,{href:"https://www.drive.google.com",children:"Google Drive"})," account."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,i.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to let users import files from their\n",(0,i.jsx)(n.a,{href:"https://www.drive.google.com",children:"Google Drive"})," account."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the Google Drive plugin\nto work. Companion handles authentication with Google Drive, downloads the\nfiles, and uploads them to the destination. This saves the user bandwidth,\nespecially helpful if they are on a mobile connection."]}),"\n",(0,i.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,i.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"NPM",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/google-drive\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/google-drive\n"})})}),(0,i.jsx)(r.Z,{value:"cdn",label:"CDN",children:(0,i.jsx)(d.Z,{children:'\n        import { Uppy, GoogleDrive } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(GoogleDrive, {\n          // Options\n        })\n      '})})]}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,i.jsx)(n.p,{children:"Using Google Drive requires setup in both Uppy and Companion."}),"\n",(0,i.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport GoogleDrive from '@uppy/google-drive';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(GoogleDrive, {\n\t\ttarget: Dashboard,\n\t\tcompanionUrl: 'https://your-companion.com',\n\t});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,i.jsxs)(n.p,{children:["To sign up for API keys, go to the\n",(0,i.jsx)(n.a,{href:"https://console.developers.google.com/",children:"Google Developer Console"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Create a project for your app if you don\u2019t have one yet."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the project\u2019s dashboard,\n",(0,i.jsx)(n.a,{href:"https://developers.google.com/drive/api/v3/enable-drive-api",children:"enable the Google Drive API"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developers.google.com/drive/api/v3/about-auth",children:"Set up OAuth authorization"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The app page has a ",(0,i.jsx)(n.code,{children:'"Redirect URIs"'})," field. Here, add:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://$YOUR_COMPANION_HOST_NAME/box/redirect\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you are using Transloadit hosted Companion:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://api2.transloadit.com/companion/drive/redirect\n"})}),"\n",(0,i.jsx)(n.p,{children:"Google will give you an OAuth client ID and client secret."}),"\n",(0,i.jsx)(n.p,{children:"Configure the Google Drive key and secret in Companion. With the standalone\nCompanion server, specify environment variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'export COMPANION_GOOGLE_KEY="Google Drive OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="Google Drive OAuth client secret"\n'})}),"\n",(0,i.jsx)(n.p,{children:"When using the Companion Node.js API, configure these options:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"companion.app({\n\tproviderOptions: {\n\t\tdrive: {\n\t\t\tkey: 'Google Drive OAuth client ID',\n\t\t\tsecret: 'Google Drive OAuth client secret',\n\t\t},\n\t},\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h4,{id:"id",children:(0,i.jsx)(n.code,{children:"id"})}),"\n",(0,i.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"'GoogleDrive'"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,i.jsx)(n.code,{children:"string"}),", default:\n",(0,i.jsx)(n.code,{children:"'GoogleDrive'"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"target",children:(0,i.jsx)(n.code,{children:"target"})}),"\n",(0,i.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"Element"}),", default: ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionurl",children:(0,i.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,i.jsxs)(n.p,{children:["URL to a ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionheaders",children:(0,i.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,i.jsx)(n.code,{children:"Object"}),", default: ",(0,i.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionallowedhosts",children:(0,i.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,i.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"RegExp"})," or ",(0,i.jsx)(n.code,{children:"Array"}),", default: ",(0,i.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["This value can be a ",(0,i.jsx)(n.code,{children:"string"}),", a ",(0,i.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,i.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,i.jsx)(n.h4,{id:"companioncookiesrule",children:(0,i.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,i.jsxs)(n.p,{children:["This option correlates to the\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"locale",children:(0,i.jsx)(n.code,{children:"locale"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameGoogleDrive: 'GoogleDrive',\n\t},\n};\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);