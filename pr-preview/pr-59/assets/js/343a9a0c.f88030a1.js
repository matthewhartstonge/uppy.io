"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2792],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7462),a=r(7294),l=r(6010),s=r(2389),o=r(7392),i=r(7094),p=r(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:s,values:m,groupId:c,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,i.U)(),[x,N]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const e=f[c];null!=e&&e!==x&&h.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,r=w.indexOf(t),n=h[r].value;n!==x&&(T(t),N(n),null!=c&&b(c,String(n)))},D=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},h.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:D,onClick:C},s,{className:(0,l.Z)("tabs__item",d,s?.className,{"tabs__item--active":x===t})}),r??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(814),l=r(3612);const s=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=s;function i(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:s="uppy.min.js"}=e,i=[];n.Children.toArray(t).forEach((e=>{i=[...i,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=i.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${s}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(l.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(a.Z,{language:"html"},d))}},1092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),s=r(5162),o=r(3068);const i={sidebar_position:2},p="Drop target",u={unversionedId:"user-interfaces/elements/drop-target",id:"user-interfaces/elements/drop-target",title:"Drop target",description:"The @uppy/drop-target plugin lets your users drag-and-drop files on any",source:"@site/docs/user-interfaces/elements/drop-target.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/drop-target",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/drop-target",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/drop-target.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/image-editor"},next:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/thumbnail-generator"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Use",id:"use",level:2},{value:"CSS",id:"css",level:2},{value:"Options",id:"options",level:2},{value:"<code>target: null</code>",id:"target-null",level:3},{value:"<code>onDragOver(event)</code>",id:"ondragoverevent",level:3},{value:"<code>onDrop(event)</code>",id:"ondropevent",level:3},{value:"<code>onDragLeave(event)</code>",id:"ondragleaveevent",level:3}],c={toc:m};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop-target"},"Drop target"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin lets your users drag-and-drop files on any\nelement on the page, for example the whole page, ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,a.kt)("p",null,"Can be used together with Uppy Dashboard or Drag & Drop plugins, or your custom\nsolution, including plain text \u201cplease drop files here\u201d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import DropTarget from '@uppy/drop-target';\n\nuppy.use(DropTarget, {\n    target: document.body,\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This plugin is published as the ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," package on the npm registry."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/drop-target\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/drop-target\n"))),(0,a.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { DropTarget } from "{{UPPY_JS_URL}}"\n        const DropTarget = new Uppy().use(DropTarget)\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"This module has one default export: the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteSources")," plugin class."),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin includes some basic styles for\n",(0,a.kt)("inlineCode",{parentName:"p"},"uppy-is-drag-over")," CSS class name. You can also choose not to use it and\nprovide your own styles instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import '@uppy/core/dist/style.css';\nimport '@uppy/drop-target/dist/style.css';\n")),(0,a.kt)("p",null,"Import general Core styles from ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/core/dist/style.css")," first, then add the\nDrag & Drop styles from ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target/dist/style.css"),". A minified version\nis also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"style.min.css")," at the same path. The way to do import\ndepends on your build system."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin has the following configurable options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(DropTarget, {\n    target: null,\n    onDragOver: (event) => {},\n    onDrop: (event) => {},\n    onDragLeave: (event) => {},\n});\n")),(0,a.kt)("h3",{id:"target-null"},(0,a.kt)("inlineCode",{parentName:"h3"},"target: null")),(0,a.kt)("p",null,"DOM element or CSS selector to attach the drag and drop listeners to."),(0,a.kt)("h3",{id:"ondragoverevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"onDragOver(event)")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event"},(0,a.kt)("inlineCode",{parentName:"a"},"dragover")," event"),"."),(0,a.kt)("h3",{id:"ondropevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"onDrop(event)")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event"},(0,a.kt)("inlineCode",{parentName:"a"},"drop")," event"),"."),(0,a.kt)("h3",{id:"ondragleaveevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"onDragLeave(event)")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event"},(0,a.kt)("inlineCode",{parentName:"a"},"dragleave")," event"),"."))}g.isMDXComponent=!0}}]);