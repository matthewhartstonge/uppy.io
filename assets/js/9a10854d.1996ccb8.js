"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2600],{59828:(e,n,o)=>{o.d(n,{Z:()=>l});var s=o(67294),i=o(84316),c=o(38555),a=o(56482),r=o(85893);const{version:t}=a;function l(e){let{children:n,uppyCssName:o="uppy.min.css",uppyJsName:a="uppy.min.mjs"}=e,l=[];s.Children.toArray(n).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=l.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${t}/${a}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${t}/${o}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{type:"caution",children:[(0,r.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,r.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,r.jsx)(i.Z,{language:"html",children:p})]})}},84570:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>p});var s=o(85893),i=o(11151),c=o(22808),a=o(30433),r=o(59828);const t={slug:"/facebook"},l="Facebook",d={id:"sources/companion-plugins/facebook",title:"Facebook",description:"The @uppy/facebook plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/facebook.mdx",sourceDirName:"sources/companion-plugins",slug:"/facebook",permalink:"/docs/facebook",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/facebook.mdx",tags:[],version:"current",frontMatter:{slug:"/facebook"},sidebar:"tutorialSidebar",previous:{title:"Dropbox",permalink:"/docs/dropbox"},next:{title:"Google Drive",permalink:"/docs/google-drive"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"facebook",children:"Facebook"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@uppy/facebook"})," plugin lets users import files from their\n",(0,s.jsx)(n.a,{href:"https://www.facebook.com",children:"Facebook"})," account."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,s.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to let users import files from their\n",(0,s.jsx)(n.a,{href:"https://www.facebook.com",children:"Facebook"})," account."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the Facebook plugin to\nwork. Companion handles authentication with Facebook, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."]}),"\n",(0,s.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,s.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(a.Z,{value:"npm",label:"NPM",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/facebook\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/facebook\n"})})}),(0,s.jsx)(a.Z,{value:"cdn",label:"CDN",children:(0,s.jsx)(r.Z,{children:'\n        import { Uppy, Facebook } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Facebook, {\n          // Options\n        })\n      '})})]}),"\n",(0,s.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,s.jsx)(n.p,{children:"Using Facebook requires setup in both Uppy and Companion."}),"\n",(0,s.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Facebook from '@uppy/facebook';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(Facebook, {\n\t\ttarget: Dashboard,\n\t\tcompanionUrl: 'https://your-companion.com',\n\t});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,s.jsxs)(n.p,{children:["You can create a Facebook App on the\n",(0,s.jsx)(n.a,{href:"https://developers.facebook.com/",children:"Facebook Developers site"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The app page has a \u201cRedirect URIs\u201d field. Here, add:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://$YOUR_COMPANION_HOST_NAME/facebook/redirect\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you are using Transloadit hosted Companion:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://api2.transloadit.com/companion/facebook/redirect\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can only use the integration with your own account initially. Make sure to\napply for production status on the app page before you publish your app, or your\nusers will not be able to sign in!"}),"\n",(0,s.jsxs)(n.p,{children:["You need to set up OAuth in your Facebook app for Companion to be able to\nconnect to users\u2019 Facebook accounts. You have to enable \u201cAdvanced Access\u201d for\nthe ",(0,s.jsx)(n.code,{children:"user_photos"})," permission. A precondition of that is \u201cBusiness Verification\u201d\nwhich involves setting up a Meta Business Account and submitting documents to\nprove business ownership."]}),"\n",(0,s.jsx)(n.p,{children:"Configure the Facebook key and secret. With the standalone Companion server,\nspecify environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export COMPANION_FACEBOOK_KEY="Facebook API key"\nexport COMPANION_FACEBOOK_SECRET="Facebook API secret"\n'})}),"\n",(0,s.jsx)(n.p,{children:"When using the Companion Node.js API, configure these options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"companion.app({\n\tproviderOptions: {\n\t\tfacebook: {\n\t\t\tkey: 'Facebook API key',\n\t\t\tsecret: 'Facebook API secret',\n\t\t},\n\t},\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h4,{id:"id",children:(0,s.jsx)(n.code,{children:"id"})}),"\n",(0,s.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'Facebook'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"title",children:(0,s.jsx)(n.code,{children:"title"})}),"\n",(0,s.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,s.jsx)(n.code,{children:"string"}),", default:\n",(0,s.jsx)(n.code,{children:"'Facebook'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"target",children:(0,s.jsx)(n.code,{children:"target"})}),"\n",(0,s.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"Element"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionurl",children:(0,s.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,s.jsxs)(n.p,{children:["URL to a ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionheaders",children:(0,s.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,s.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,s.jsx)(n.code,{children:"Object"}),", default: ",(0,s.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionallowedhosts",children:(0,s.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,s.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"RegExp"})," or ",(0,s.jsx)(n.code,{children:"Array"}),", default: ",(0,s.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This value can be a ",(0,s.jsx)(n.code,{children:"string"}),", a ",(0,s.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,s.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,s.jsx)(n.h4,{id:"companioncookiesrule",children:(0,s.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,s.jsxs)(n.p,{children:["This option correlates to the\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"locale",children:(0,s.jsx)(n.code,{children:"locale"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameFacebook: 'Facebook',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);