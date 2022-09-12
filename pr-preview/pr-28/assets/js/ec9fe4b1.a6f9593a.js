"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[442],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),o=t(7294),i=t(6010),l=t(2389),r=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:c,groupId:h,className:g}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,r.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[C,I]=(0,o.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==C&&v.some((n=>n.value===e))&&I(e)}const x=e=>{const n=e.currentTarget,t=w.indexOf(n),a=v[t].value;a!==C&&(T(n),I(a),null!=h&&b(h,String(a)))},U=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>w.push(e),onKeyDown:U,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function c(e){const n=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},5103:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(814),i=t(3612);function l(e){let{children:n,uppyCssName:t="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,r=[];a.Children.toArray(n).forEach((e=>{r=[...r,...String(e).trim().split("\n").map((e=>e.trim()))]}));const s=r.map((e=>`  ${e}`)).join("\n"),p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${t}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${l}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${s.length>0?`\n\n${s}`:""}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),a.createElement(o.Z,{language:"html"},p))}},7134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7462),o=(t(7294),t(3905)),i=t(5488),l=t(5162),r=t(5103);const s={},p="Instagram",u={unversionedId:"sources/companion-plugins/instagram",id:"sources/companion-plugins/instagram",title:"Instagram",description:"The @uppy/instagram plugin lets users import files from their Instagram account.",source:"@site/docs/sources/companion-plugins/instagram.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/instagram",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/instagram",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/instagram.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Drive",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/google-drive"},next:{title:"OneDrive",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/onedrive"}},m={},d=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:d};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instagram"},"Instagram"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/instagram")," plugin lets users import files from their ",(0,o.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,o.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,o.kt)("p",null,"When you want to let users import files from their ",(0,o.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Instagram plugin to work.\nCompanion handles authentication with Instagram, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,o.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/instagram\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/instagram\n"))),(0,o.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"UppyCdnExample"},"\n        uppy.use(Uppy.Instagram, {\n          // Options\n        })\n      "))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"Using Instagram requires setup in both Uppy and Companion."),(0,o.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Instagram from '@uppy/instagram'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Instagram` is therefor the same as the example below.\n  .use(Instagram, {\n    id: 'Instagram',\n    title: 'Instagram',\n    target: null,\n    companionUrl: null,\n    companionHeaders: null,\n    companionAllowedHosts: null,\n  })\n")),(0,o.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,o.kt)("p",null,"To sign up for API keys, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/products/instagram/"},"Instagram Platform from Meta"),"."),(0,o.kt)("p",null,"Create a project for your app if you don\u2019t have one yet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the Instagram API."),(0,o.kt)("li",{parentName:"ul"},"Use this for an authorized redirect URI: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://$YOUR\\_COMPANION\\_HOST\\_NAME/instagram/redirect"))),(0,o.kt)("p",null,"Meta will give you an OAuth client ID and client secret."),(0,o.kt)("p",null,"Configure the Instagram key and secret in Companion.\nWith the standalone Companion server, specify environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_GOOGLE_KEY="Instagram OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="Instagram OAuth client secret"\n')),(0,o.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n  providerOptions: {\n    drive: {\n      key: 'Instagram OAuth client ID',\n      secret: 'Instagram OAuth client secret',\n    },\n  },\n})\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,o.kt)("p",null,"URL to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionheaders"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,o.kt)("p",null,"Custom headers that should be sent along to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("h4",{id:"companionallowedhosts"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,o.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,o.kt)("p",null,"This value can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")," pattern, or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,o.kt)("h4",{id:"companioncookiesrule"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,o.kt)("p",null,"This option correlates to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,o.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameInstagram: 'Instagram',\n  },\n}\n")))}h.isMDXComponent=!0}}]);