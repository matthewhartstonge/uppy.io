"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2137],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),s=n(7392),l=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:c,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.U)(),[w,N]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=c){const e=v[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(C(t),N(a),null!=c&&b(c,String(a)))},q=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:q,onClick:x},o,{className:(0,i.Z)("tabs__item",p,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(814),i=n(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=o;function l(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,l=[];a.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=l.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${s}/${o}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(r.Z,{language:"html"},p))}},8656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162),s=n(3068);const l={sidebar_position:2},u="Tus",d={unversionedId:"uploader/tus",id:"uploader/tus",title:"Tus",description:"The @uppy/tus plugin brings resumable file uploading with Tus to Uppy by wrapping the tus-js-client.",source:"@site/docs/uploader/tus.mdx",sourceDirName:"uploader",slug:"/uploader/tus",permalink:"/uppy.io/pr-preview/pr-59/docs/uploader/tus",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/tus.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Transloadit",permalink:"/uppy.io/pr-preview/pr-59/docs/uploader/transloadit"},next:{title:"AWS S3",permalink:"/uppy.io/pr-preview/pr-59/docs/uploader/aws-s3"}},p={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>headers</code>",id:"headers",level:4},{value:"<code>chunkSize</code>",id:"chunksize",level:4},{value:"<code>withCredentials</code>",id:"withcredentials",level:4},{value:"<code>retryDelays</code>",id:"retrydelays",level:4},{value:"<code>onBeforeRequest(req, file)</code>",id:"onbeforerequestreq-file",level:4},{value:"<code>onShouldRetry: (err, retryAttempt, options, next)</code>",id:"onshouldretry-err-retryattempt-options-next",level:4},{value:"<code>allowedMetaFields</code>",id:"allowedmetafields",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How is file meta data stored?",id:"how-is-file-meta-data-stored",level:3},{value:"How do I change files before sending them?",id:"how-do-i-change-files-before-sending-them",level:3},{value:"How do I change (or move) files after sending them?",id:"how-do-i-change-or-move-files-after-sending-them",level:3},{value:"Which server do you recommend?",id:"which-server-do-you-recommend",level:3},{value:"Are there hosted Tus servers?",id:"are-there-hosted-tus-servers",level:3},{value:"Why Tus instead of directly uploading to AWS S3?",id:"why-tus-instead-of-directly-uploading-to-aws-s3",level:3}],c={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tus"},"Tus"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/tus")," plugin brings resumable file uploading with ",(0,r.kt)("a",{parentName:"p",href:"http://tus.io"},"Tus")," to Uppy by wrapping the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client"},(0,r.kt)("inlineCode",{parentName:"a"},"tus-js-client")),"."),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read \u201c",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus")," is an open protocol for resumable uploads built on HTTP.\nThis means accidentally closing your tab or losing connection let\u2019s you continue, for instance, your 10GB upload\ninstead of starting all over."),(0,r.kt)("p",null,"Tus supports any language, any platform, and any network.\nIt requires a client and server integration to work.\nYou can checkout the client and server ",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/implementations.html"},"implementations")," to find the server in your preferred language.\nYou can store files on the Tus server itself, but you can also use service integrations (such as S3) to store files externally.\nIf you don\u2019t want to host your own server, see \u201c",(0,r.kt)("a",{parentName:"p",href:"#are-there-hosted-tus-servers"},"Are there hosted Tus servers?"),"\u201d."),(0,r.kt)("p",null,"If you want reliable, resumable uploads: use ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/tus")," to connect to your Tus server in a few lines of code."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/tus\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/tus\n"))),(0,r.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Tus } from \"{{UPPY_JS_URL}}\"\n        new Uppy().use(Tus, { endpoint: 'https://tusd.tusdemo.net/files' })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"A quick overview of the complete API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Tus from '@uppy/tus';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All options are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"tus-js-client")," and we document the ones here that are required, added, or changed.\nThis means you can also pass functions like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/blob/master/docs/api.md#onafterresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"onAfterResponse")),"."),(0,r.kt)("p",{parentName:"admonition"},"We recommended taking a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/blob/master/docs/api.md"},"API reference")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"tus-js-client")," to know what is supported.")),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Tus'"),")."),(0,r.kt)("h4",{id:"endpoint"},(0,r.kt)("inlineCode",{parentName:"h4"},"endpoint")),(0,r.kt)("p",null,"URL of the tus server (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"headers"},(0,r.kt)("inlineCode",{parentName:"h4"},"headers")),(0,r.kt)("p",null,"An object or function returning an object with HTTP headers to send to send along requests (",(0,r.kt)("inlineCode",{parentName:"p"},"object | function"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"Keys are header names, values are header values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n    authorization: `Bearer ${window.getCurrentUserToken()}`,\n};\n")),(0,r.kt)("p",null,"Header values can also be derived from file data by providing a function.\nThe function receives an ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#working-with-uppy-files"},"Uppy file")," and must return an object where the keys are header names, and values are header values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = (file) => {\n    return {\n        authorization: `Bearer ${window.getCurrentUserToken()}`,\n        expires: file.meta.expires,\n    };\n};\n")),(0,r.kt)("h4",{id:"chunksize"},(0,r.kt)("inlineCode",{parentName:"h4"},"chunkSize")),(0,r.kt)("p",null,"A number indicating the maximum size of a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," request body in bytes (",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"Infinity"),")."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not set this value unless you are forced to.\nThe two valid reasons are described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/blob/master/docs/api.md#chunksize"},(0,r.kt)("inlineCode",{parentName:"a"},"tus-js-client")," docs"),".")),(0,r.kt)("h4",{id:"withcredentials"},(0,r.kt)("inlineCode",{parentName:"h4"},"withCredentials")),(0,r.kt)("p",null,"Configure the requests to send Cookies using the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials"},(0,r.kt)("inlineCode",{parentName:"a"},"xhr.withCredentials"))," property (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"The remote server must accept CORS and credentials."),(0,r.kt)("h4",{id:"retrydelays"},(0,r.kt)("inlineCode",{parentName:"h4"},"retryDelays")),(0,r.kt)("p",null,"When uploading a chunk fails, automatically try again after the defined millisecond intervals (",(0,r.kt)("inlineCode",{parentName:"p"},"Array<number>"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, 1000, 3000, 5000]"),")."),(0,r.kt)("p",null,"By default, we first retry instantly; if that fails, we retry after 1 second; if that fails, we retry after 3 seconds, etc."),(0,r.kt)("p",null,"Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to disable automatic retries, and fail instantly if any chunk fails to upload."),(0,r.kt)("h4",{id:"onbeforerequestreq-file"},(0,r.kt)("inlineCode",{parentName:"h4"},"onBeforeRequest(req, file)")),(0,r.kt)("p",null,"Behaves like the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/blob/master/docs/api.md#onbeforerequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onBeforeRequest"))," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"tus-js-client")," but with the added ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," argument."),(0,r.kt)("h4",{id:"onshouldretry-err-retryattempt-options-next"},(0,r.kt)("inlineCode",{parentName:"h4"},"onShouldRetry: (err, retryAttempt, options, next)")),(0,r.kt)("p",null,"When an upload fails ",(0,r.kt)("inlineCode",{parentName:"p"},"onShouldRetry")," is called with the error and the default retry logic as the last argument (",(0,r.kt)("inlineCode",{parentName:"p"},"function"),")."),(0,r.kt)("p",null,"The default retry logic is an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exponential_backoff"},"exponential backoff")," algorithm triggered on HTTP 429 (Too Many Requests) errors.\nMeaning if your server (or proxy) returns HTTP 429 because it\u2019s being overloaded, @uppy/tus will find the ideal sweet spot to keep uploading without overloading."),(0,r.kt)("p",null,"If you want to extend this functionality, for instance to retry on unauthorized requests (to retrieve a new authentication token):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Tus from '@uppy/tus';\nnew Uppy().use(Tus, {\n    endpoint: '',\n    async onBeforeRequest(req) {\n        const token = await getAuthToken();\n        req.setHeader('Authorization', `Bearer ${token}`);\n    },\n    onShouldRetry(err, retryAttempt, options, next) {\n        if (err?.originalResponse?.getStatus() === 401) {\n            return true;\n        }\n        return next(err);\n    },\n    async onAfterResponse(req, res) {\n        if (res.getStatus() === 401) {\n            await refreshAuthToken();\n        }\n    },\n});\n")),(0,r.kt)("h4",{id:"allowedmetafields"},(0,r.kt)("inlineCode",{parentName:"h4"},"allowedMetaFields")),(0,r.kt)("p",null,"Pass an array of field names to limit the metadata fields that will be added to uploads as ",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/protocols/resumable-upload.html#upload-metadata"},"Tus Metadata")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"['name']")," to only send the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,r.kt)("li",{parentName:"ul"},"Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," (the default) to send ",(0,r.kt)("em",{parentName:"li"},"all")," metadata fields."),(0,r.kt)("li",{parentName:"ul"},"Set this to an empty array ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")," to not send any fields.")),(0,r.kt)("h4",{id:"limit"},(0,r.kt)("inlineCode",{parentName:"h4"},"limit")),(0,r.kt)("p",null,"Limit the amount of uploads going on at the same time (",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),")."),(0,r.kt)("p",null,"Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," means no limit on concurrent uploads (not recommend)"),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Tus website has extensive ",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/faq.html"},"FAQ section"),", we recommend taking a look there as well if something is unclear.")),(0,r.kt)("h3",{id:"how-is-file-meta-data-stored"},"How is file meta data stored?"),(0,r.kt)("p",null,"Tus uses unique identifers for the file names to prevent naming collisions.\nTo still keep the meta data in place, Tus also uploads an extra ",(0,r.kt)("inlineCode",{parentName:"p"},".info")," file with the original file name and other meta data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ID": "00007a99d16d4eeb5a3e3c080b6f69da+JHZavdqPSK4VMtarg2yYcNiP8t_kDjN51lBYMJdEyr_wqEotVl8ZBRBSTnWKWenZBwHvbLNz5tQXYp2N7Vdol.04ysQAuw__suTJ4IsCljj0rjyWA6LvV4IwF5P2oom2",\n    "Size": 1679852,\n    "SizeIsDeferred": false,\n    "Offset": 0,\n    "MetaData": {\n        "filename": "cat.jpg",\n        "filetype": "image/jpeg"\n    },\n    "IsPartial": false,\n    "IsFinal": false,\n    "PartialUploads": null,\n    "Storage": {\n        "Bucket": "your-bucket",\n        "Key": "some-key",\n        "Type": "s3store"\n    }\n}\n')),(0,r.kt)("h3",{id:"how-do-i-change-files-before-sending-them"},"How do I change files before sending them?"),(0,r.kt)("p",null,"If you want to change the file names, you want to do that in ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onbeforefileaddedfile-files"},(0,r.kt)("inlineCode",{parentName:"a"},"onBeforeFileAdded")),"."),(0,r.kt)("p",null,"If you want to send extra headers with the request, use ",(0,r.kt)("a",{parentName:"p",href:"#headers"},(0,r.kt)("inlineCode",{parentName:"a"},"headers"))," or ",(0,r.kt)("a",{parentName:"p",href:"#onbeforerequestreq-file"},(0,r.kt)("inlineCode",{parentName:"a"},"onBeforeRequest")),"."),(0,r.kt)("h3",{id:"how-do-i-change-or-move-files-after-sending-them"},"How do I change (or move) files after sending them?"),(0,r.kt)("p",null,"If you want to preserve files names, extract meta data, or move files to a different place you generally can with hooks or events.\nIt depends on the Tus server you use how it\u2019s done exactly. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tusd"},(0,r.kt)("inlineCode",{parentName:"a"},"tusd")),", for instance, exposes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tusd/blob/master/docs/hooks.md"},"hooks"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-node-server"},(0,r.kt)("inlineCode",{parentName:"a"},"tus-node-server"))," has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-node-server#events"},"events"),"."),(0,r.kt)("h3",{id:"which-server-do-you-recommend"},"Which server do you recommend?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit")," runs ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tusd"},(0,r.kt)("inlineCode",{parentName:"a"},"tusd"))," in production, where it serves millions of requests globally.\nTherefor we recommend ",(0,r.kt)("inlineCode",{parentName:"p"},"tusd")," as battle-tested from our side, but other companies have had success with other ",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/implementations.html"},"implementations")," so it depends on your needs."),(0,r.kt)("h3",{id:"are-there-hosted-tus-servers"},"Are there hosted Tus servers?"),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing"},"Transloadit plans")," come with a hosted ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tusd"},(0,r.kt)("inlineCode",{parentName:"a"},"tusd"))," server.\nYou don\u2019t have to do anything to leverage it, using ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," automatically\nuses Tus under the hood."),(0,r.kt)("h3",{id:"why-tus-instead-of-directly-uploading-to-aws-s3"},"Why Tus instead of directly uploading to AWS S3?"),(0,r.kt)("p",null,"First: reliable, resumable uploads.\nThis means accidentally closing your tab or losing connection let\u2019s you continue, for instance, your 10GB upload\ninstead of starting all over."),(0,r.kt)("p",null,"Tus is also efficient with lots of files (such as 8K) and large files.\nUploading to AWS S3 directly from the client also introduces quite a bit of overhead,\nas more requests are needed for the flow to work."))}h.isMDXComponent=!0}}]);