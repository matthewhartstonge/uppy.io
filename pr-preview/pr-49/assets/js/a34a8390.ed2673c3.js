"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7435],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),d=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:m,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[w,N]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=f[a].value;n!==w&&(T(t),N(n),null!=m&&y(m,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:x},o,{className:(0,i.Z)("tabs__item",u,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(814),i=a(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=o;function s(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,s=[];n.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${o}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),n.createElement(r.Z,{language:"html"},u))}},828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),o=a(5162),l=a(3068);const s={sidebar_position:1},d="Webcam",p={unversionedId:"sources/webcam",id:"sources/webcam",title:"Webcam",description:"The @uppy/webcam plugin lets you take photos and record videos with a built-in camera on desktop and mobile devices.",source:"@site/docs/sources/webcam.mdx",sourceDirName:"sources",slug:"/sources/webcam",permalink:"/uppy.io/pr-preview/pr-49/docs/sources/webcam",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/webcam.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-49/docs/user-interfaces/elements/progress-bar"},next:{title:"Screen capture",permalink:"/uppy.io/pr-preview/pr-49/docs/sources/screen-capture"}},u={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>countdown</code>",id:"countdown",level:4},{value:"<code>onBeforeSnapshot</code>",id:"onbeforesnapshot",level:4},{value:"<code>modes</code>",id:"modes",level:4},{value:"<code>mirror</code>",id:"mirror",level:4},{value:"<code>videoConstraints</code>",id:"videoconstraints",level:4},{value:"<code>showVideoSourceDropdown</code>",id:"showvideosourcedropdown",level:4},{value:"<code>showRecordingLength</code>",id:"showrecordinglength",level:4},{value:"<code>preferredVideoMimeType</code>",id:"preferredvideomimetype",level:4},{value:"<code>preferredImageMimeType</code>",id:"preferredimagemimetype",level:4},{value:"<code>mobileNativeCamera</code>",id:"mobilenativecamera",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webcam"},"Webcam"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin lets you take photos and record videos with a built-in camera on desktop and mobile devices."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("p",null,"When you want your users to able to use their camera.\nThis plugin is published separately but made specifically for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".\nYou can technically use it without it, but it\u2019s not officially supported."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/webcam\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/webcam\n"))),(0,r.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, Webcam } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { inline: true, target: 'body' })\n        uppy.use(Webcam, { target: Uppy.Dashboard })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use the Webcam plugin in Chrome, ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/10/chrome-47-webrtc#public_service_announcements"},"your site must be served over https"),". This restriction does not apply on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", so you don\u2019t have to jump through many hoops during development.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Webcam from '@uppy/webcam';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/webcam/dist/style.min.css';\n\nnew Uppy.use(Dashboard, { inline: true, target: 'body' })\n    // Example of setting all the options to their defaults.\n    // Not passing anything to `Webcam` is therefor the same as the example below.\n    .use(Webcam, {\n        onBeforeSnapshot: () => Promise.resolve(),\n        countdown: false,\n        modes: ['video-audio', 'video-only', 'audio-only', 'picture'],\n        mirror: true,\n        videoConstraints: {\n            facingMode: 'user',\n            width: { min: 720, ideal: 1280, max: 1920 },\n            height: { min: 480, ideal: 800, max: 1080 },\n        },\n        showRecordingLength: false,\n        preferredVideoMimeType: null,\n        preferredImageMimeType: null,\n        mobileNativeCamera: isMobile(),\n        locale: {},\n    });\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Webcam'"),")."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"countdown"},(0,r.kt)("inlineCode",{parentName:"h4"},"countdown")),(0,r.kt)("p",null,"When taking a picture: the amount of seconds to wait before actually taking a snapshot (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or 0, the snapshot is taken right away.\nThis also shows a ",(0,r.kt)("inlineCode",{parentName:"p"},"Smile!")," message through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/informer"},"Informer")," before the picture is taken."),(0,r.kt)("h4",{id:"onbeforesnapshot"},(0,r.kt)("inlineCode",{parentName:"h4"},"onBeforeSnapshot")),(0,r.kt)("p",null,"A hook function to call before a snapshot is taken (",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.resolve"),")."),(0,r.kt)("p",null,"The Webcam plugin will wait for the returned Promise to resolve before taking the snapshot.\nThis can be used to carry out variations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"countdown")," option for example."),(0,r.kt)("h4",{id:"modes"},(0,r.kt)("inlineCode",{parentName:"h4"},"modes")),(0,r.kt)("p",null,"The types of recording modes to allow (",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"video-audio")," - Record a video file, capturing both audio and video."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"video-only")," - Record a video file with the webcam, but don\u2019t record audio."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audio-only")," - Record an audio file with the user\u2019s microphone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"picture")," - Take a picture with the webcam.")),(0,r.kt)("p",null,"By default, all modes are allowed, and the Webcam plugin will show controls for recording video as well as taking pictures."),(0,r.kt)("h4",{id:"mirror"},(0,r.kt)("inlineCode",{parentName:"h4"},"mirror")),(0,r.kt)("p",null,"Configures whether to mirror preview image from the camera (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("p",null,"This option is useful when taking a selfie with a front camera: when you wave your right hand,\nyou will see your hand on the right on the preview screen, like in the mirror.\nBut when you actually take a picture, it will not be mirrored. This is how smartphone selfie cameras behave."),(0,r.kt)("h4",{id:"videoconstraints"},(0,r.kt)("inlineCode",{parentName:"h4"},"videoConstraints")),(0,r.kt)("p",null,"Configure the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,r.kt)("p",null,"You can specify acceptable ranges for the resolution of the video stream using the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio"},(0,r.kt)("inlineCode",{parentName:"a"},"aspectRatio")),", ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width"},(0,r.kt)("inlineCode",{parentName:"a"},"width")),", and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height"},(0,r.kt)("inlineCode",{parentName:"a"},"height"))," properties. Each property takes an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"{ min, ideal, max }")," properties. For example, use ",(0,r.kt)("inlineCode",{parentName:"p"},"width: { min: 720, max: 1920, ideal: 1920 }")," to allow any width between 720 and 1920 pixels wide, while preferring the highest resolution."),(0,r.kt)("p",null,"Devices sometimes have several cameras, front and back, for example. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode"},(0,r.kt)("inlineCode",{parentName:"a"},"facingMode"))," lets you specify which should be used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user"),": The video source is facing toward the user; this includes, for example, the front-facing camera on a smartphone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"environment"),": The video source is facing away from the user, thereby viewing their environment. This is the back camera on a smartphone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"left"),": The video source is facing toward the user but to their left, such as a camera aimed toward the user but over their left shoulder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"right"),": The video source is facing toward the user but to their right, such as a camera aimed toward the user but over their right shoulder.")),(0,r.kt)("p",null,"For a full list of available properties, check out MDN documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints")),"."),(0,r.kt)("h4",{id:"showvideosourcedropdown"},(0,r.kt)("inlineCode",{parentName:"h4"},"showVideoSourceDropdown")),(0,r.kt)("p",null,"Configures whether to show a dropdown which enables to choose the video device to use (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"This option will have priority over ",(0,r.kt)("inlineCode",{parentName:"p"},"facingMode")," if enabled."),(0,r.kt)("h4",{id:"showrecordinglength"},(0,r.kt)("inlineCode",{parentName:"h4"},"showRecordingLength")),(0,r.kt)("p",null,"Configures whether to show the length of the recording while the recording is in progress (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("h4",{id:"preferredvideomimetype"},(0,r.kt)("inlineCode",{parentName:"h4"},"preferredVideoMimeType")),(0,r.kt)("p",null,"Set the preferred mime type for video recordings, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"'video/webm'")," (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"If the browser supports the given mime type, the video will be recorded in this format.\nIf the browser does not support it, it will use the browser default.\nIf no preferred video mime type is given, the Webcam plugin will prefer types listed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,r.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if any."),(0,r.kt)("h4",{id:"preferredimagemimetype"},(0,r.kt)("inlineCode",{parentName:"h4"},"preferredImageMimeType")),(0,r.kt)("p",null,"Set the preferred mime type for images, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"'image/png'")," (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"image/jpeg"),")."),(0,r.kt)("p",null,"If the browser supports rendering the given mime type, the image will be stored in this format.\nElse ",(0,r.kt)("inlineCode",{parentName:"p"},"image/jpeg")," is used by default.\nIf no preferred image mime type is given, the Webcam plugin will prefer types listed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,r.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if any."),(0,r.kt)("h4",{id:"mobilenativecamera"},(0,r.kt)("inlineCode",{parentName:"h4"},"mobileNativeCamera")),(0,r.kt)("p",null,"Replaces Uppy\u2019s custom camera UI on mobile and tablet with the native device camera (",(0,r.kt)("inlineCode",{parentName:"p"},"Function: boolean")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"isMobile()"),")."),(0,r.kt)("p",null,"This will show the \u201cTake Picture\u201d and / or \u201cRecord Video\u201d buttons, which ones show depends on the ",(0,r.kt)("a",{parentName:"p",href:"#modes"},(0,r.kt)("inlineCode",{parentName:"a"},"modes"))," option."),(0,r.kt)("p",null,"You can set a boolean to forcefully enable / disable this feature,\nor a function which returns a boolean. By default we use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juliangruber/is-mobile"},(0,r.kt)("inlineCode",{parentName:"a"},"is-mobile"))," package."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameCamera: 'Camera',\n        noCameraTitle: 'Camera Not Available',\n        noCameraDescription:\n            'In order to take pictures or record video, please connect a camera device',\n        recordingStoppedMaxSize:\n            'Recording stopped because the file size is about to exceed the limit',\n        submitRecordedFile: 'Submit recorded file',\n        discardRecordedFile: 'Discard recorded file',\n        // Shown before a picture is taken when the `countdown` option is set.\n        smile: 'Smile!',\n        // Used as the label for the button that takes a picture.\n        // This is not visibly rendered but is picked up by screen readers.\n        takePicture: 'Take a picture',\n        // Used as the label for the button that starts a video recording.\n        // This is not visibly rendered but is picked up by screen readers.\n        startRecording: 'Begin video recording',\n        // Used as the label for the button that stops a video recording.\n        // This is not visibly rendered but is picked up by screen readers.\n        stopRecording: 'Stop video recording',\n        // Used as the label for the recording length counter. See the showRecordingLength option.\n        // This is not visibly rendered but is picked up by screen readers.\n        recordingLength: 'Recording length %{recording_length}',\n        // Title on the \u201callow access\u201d screen\n        allowAccessTitle: 'Please allow access to your camera',\n        // Description on the \u201callow access\u201d screen\n        allowAccessDescription:\n            'In order to take pictures or record video with your camera, please allow camera access for this site.',\n    },\n};\n")))}h.isMDXComponent=!0}}]);