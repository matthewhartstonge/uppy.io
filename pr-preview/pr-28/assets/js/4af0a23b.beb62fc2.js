"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2731],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:m,groupId:h,className:g}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[C,E]=(0,i.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==C&&k.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==C&&(I(t),E(a),null!=h&&N(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:x,onClick:x},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,i.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},5103:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(814),r=n(3612);function o(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,l=[];a.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const s=l.map((e=>`  ${e}`)).join("\n"),p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${n}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${o}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${s.length>0?`\n\n${s}`:""}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(r.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),a.createElement(i.Z,{language:"html"},p))}},8665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),r=n(5488),o=n(5162),l=n(5103);const s={sidebar_position:1},p="Image editor",d={unversionedId:"user-interfaces/elements/image-editor",id:"user-interfaces/elements/image-editor",title:"Image editor",description:"Image editor. Designed to be used with the Dashboard UI.",source:"@site/docs/user-interfaces/elements/image-editor.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/image-editor",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/image-editor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/image-editor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drag & Drop",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/drag-drop"},next:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/thumbnail-generator"}},u={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>cropperOptions</code>",id:"cropperoptions",level:4},{value:"<code>actions</code>",id:"actions",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Events",id:"events",level:3},{value:"<code>file-editor:start</code>",id:"file-editorstart",level:4},{value:"<code>file-editor:complete</code>",id:"file-editorcomplete",level:4},{value:"<code>file-editor:cancel</code>",id:"file-editorcancel",level:4}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-editor"},"Image editor"),(0,i.kt)("p",null,"Image editor. Designed to be used with the Dashboard UI."),(0,i.kt)("div",{style:{maxWidth:500}},(0,i.kt)("p",null,"  ",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png",alt:"Screenshot of the Image Editor plugin UI in Dashboard"}))),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"When you want to allow users to crop, rotate, zoom and flip images that are added to Uppy."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,i.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        uppy.use(Uppy.Dashboard, { target: '#uppy', inline: true })\n        uppy.use(Uppy.ImageEditor, { target: Uppy.Dashboard })\n      "))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you automatically want to open the image editor when an image is added,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard#autoOpenFileEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"autoOpenFileEditor"))," Dashboard option.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport ImageEditor from '@uppy/image-editor'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\nimport '@uppy/image-editor/dist/style.css'\n\nnew Uppy()\n  .use(Dashboard, { inline: true })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `ImageEditor` is therefor the same as the example below.\n  .use(ImageEditor, {\n    id: 'ImageEditor',\n    target: null,\n    quality: 0.8,\n    cropperOptions: {\n      viewMode: 1,\n      background: false,\n      autoCropArea: 1,\n      responsive: true,\n      croppedCanvasOptions: {},\n    },\n    actions: {\n      revert: true,\n      rotate: true,\n      granularRotate: true,\n      flip: true,\n      zoomIn: true,\n      zoomOut: true,\n      cropSquare: true,\n      cropWidescreen: true,\n      cropWidescreenVertical: true,\n    },\n  })\n")),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'ImageEditor'"),")."),(0,i.kt)("h4",{id:"quality"},(0,i.kt)("inlineCode",{parentName:"h4"},"quality")),(0,i.kt)("p",null,"Quality Of the resulting blob that will be saved in Uppy after editing/cropping (",(0,i.kt)("inlineCode",{parentName:"p"},"Number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8"),")."),(0,i.kt)("h4",{id:"cropperoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropperOptions")),(0,i.kt)("p",null,"Image Editor is using the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://fengyuanchen.github.io/cropperjs/"},"Cropper.js"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"cropperOptions")," will be directly passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"Cropper")," and therefor can expect the same values as documented\nin their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options"},"README"),",\nwith the addition of ",(0,i.kt)("inlineCode",{parentName:"p"},"croppedCanvasOptions"),", which will be passed to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"getCroppedCanvas")),"."),(0,i.kt)("h4",{id:"actions"},(0,i.kt)("inlineCode",{parentName:"h4"},"actions")),(0,i.kt)("p",null,"Shown action buttons (",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),")."),(0,i.kt)("p",null,"If you you\u2019d like to hide all actions, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to it. By default all the actions are visible.\nOr enable/disable them individually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  revert: true,\n  rotate: true,\n  granularRotate: true,\n  flip: true,\n  zoomIn: true,\n  zoomOut: true,\n  cropSquare: true,\n  cropWidescreen: true,\n  cropWidescreenVertical: true,\n}\n")),(0,i.kt)("h4",{id:"locale-"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    revert: 'Revert',\n    rotate: 'Rotate',\n    zoomIn: 'Zoom in',\n    zoomOut: 'Zoom out',\n    flipHorizontal: 'Flip horizontal',\n    aspectRatioSquare: 'Crop square',\n    aspectRatioLandscape: 'Crop landscape (16:9)',\n    aspectRatioPortrait: 'Crop portrait (9:16)',\n  },\n}\n")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"on"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,i.kt)("h4",{id:"file-editorstart"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:start")),(0,i.kt)("p",null,"Emitted when ",(0,i.kt)("inlineCode",{parentName:"p"},"selectFile(file)")," is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:start', (file) => {\n  console.log(file)\n})\n")),(0,i.kt)("h4",{id:"file-editorcomplete"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:complete")),(0,i.kt)("p",null,"Emitted after ",(0,i.kt)("inlineCode",{parentName:"p"},"save(blob)")," is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:complete', (updatedFile) => {\n  console.log(updatedFile)\n})\n")),(0,i.kt)("h4",{id:"file-editorcancel"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:cancel")),(0,i.kt)("p",null,"Emitted when ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall")," is called or when the current image editing changes are discarded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:cancel', (file) => {\n  console.log(file)\n})\n")))}h.isMDXComponent=!0}}]);