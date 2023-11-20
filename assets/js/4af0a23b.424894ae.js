"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2731],{59828:(e,n,i)=>{i.d(n,{Z:()=>a});var t=i(67294),s=i(84316),o=i(38555),r=i(56482),d=i(85893);const{version:l}=r;function a(e){let{children:n,uppyCssName:i="uppy.min.css",uppyJsName:r="uppy.min.mjs"}=e,a=[];t.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${r}`,h=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${i}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.Z,{type:"caution",children:[(0,d.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,d.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,d.jsx)(s.Z,{language:"html",children:h})]})}},57607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=i(85893),s=i(11151),o=i(22808),r=i(30433),d=i(59828);const l={sidebar_position:1,slug:"/image-editor"},a="Image editor",c={id:"user-interfaces/elements/image-editor",title:"Image editor",description:"Image editor. Designed to be used with the Dashboard UI.",source:"@site/docs/user-interfaces/elements/image-editor.mdx",sourceDirName:"user-interfaces/elements",slug:"/image-editor",permalink:"/docs/image-editor",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/image-editor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/image-editor"},sidebar:"tutorialSidebar",previous:{title:"Drag & Drop",permalink:"/docs/drag-drop"},next:{title:"Drop target",permalink:"/docs/drop-target"}},p={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>cropperOptions</code>",id:"cropperoptions",level:4},{value:"<code>actions</code>",id:"actions",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Events",id:"events",level:3},{value:"<code>file-editor:start</code>",id:"file-editorstart",level:4},{value:"<code>file-editor:complete</code>",id:"file-editorcomplete",level:4},{value:"<code>file-editor:cancel</code>",id:"file-editorcancel",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"image-editor",children:"Image editor"}),"\n",(0,t.jsx)(n.p,{children:"Image editor. Designed to be used with the Dashboard UI."}),"\n",(0,t.jsx)("div",{style:{maxWidth:500},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png",alt:"Screenshot of the Image Editor plugin UI in Dashboard"})})}),"\n",(0,t.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,t.jsx)(n.p,{children:"When you want to allow users to crop, rotate, zoom and flip images that are\nadded to Uppy."}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(r.Z,{value:"npm",label:"NPM",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/core @uppy/dashboard @uppy/image-editor\n"})})}),(0,t.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/core @uppy/dashboard @uppy/image-editor\n"})})}),(0,t.jsx)(r.Z,{value:"cdn",label:"CDN",children:(0,t.jsx)(d.Z,{children:"\n        import { Uppy, Dashboard, ImageEditor } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { target: '#uppy', inline: true })\n        uppy.use(ImageEditor, { target: Uppy.Dashboard })\n      "})})]}),"\n",(0,t.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{3,7,11} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport ImageEditor from '@uppy/image-editor';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/image-editor/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(ImageEditor, { target: Dashboard });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you automatically want to open the image editor when an image is added, see\nthe ",(0,t.jsx)(n.a,{href:"/docs/dashboard#autoOpenFileEditor",children:(0,t.jsx)(n.code,{children:"autoOpenFileEditor"})})," Dashboard option."]})}),"\n",(0,t.jsx)(n.h4,{id:"id",children:(0,t.jsx)(n.code,{children:"id"})}),"\n",(0,t.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,t.jsx)(n.code,{children:"string"}),", default: ",(0,t.jsx)(n.code,{children:"'ImageEditor'"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"quality",children:(0,t.jsx)(n.code,{children:"quality"})}),"\n",(0,t.jsxs)(n.p,{children:["Quality Of the resulting blob that will be saved in Uppy after editing/cropping\n(",(0,t.jsx)(n.code,{children:"number"}),", default: ",(0,t.jsx)(n.code,{children:"0.8"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"cropperoptions",children:(0,t.jsx)(n.code,{children:"cropperOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Image Editor is using the excellent\n",(0,t.jsx)(n.a,{href:"https://fengyuanchen.github.io/cropperjs/",children:"Cropper.js"}),". ",(0,t.jsx)(n.code,{children:"cropperOptions"})," will\nbe directly passed to ",(0,t.jsx)(n.code,{children:"Cropper"})," and thus can expect the same values as\ndocumented in their\n",(0,t.jsx)(n.a,{href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options",children:"README"}),",\nwith the addition of ",(0,t.jsx)(n.code,{children:"croppedCanvasOptions"}),", which will be passed to\n",(0,t.jsx)(n.a,{href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions",children:(0,t.jsx)(n.code,{children:"getCroppedCanvas"})}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"actions",children:(0,t.jsx)(n.code,{children:"actions"})}),"\n",(0,t.jsxs)(n.p,{children:["Show action buttons (",(0,t.jsx)(n.code,{children:"Object"})," or ",(0,t.jsx)(n.code,{children:"boolean"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["If you you\u2019d like to hide all actions, pass ",(0,t.jsx)(n.code,{children:"false"})," to it. By default all the\nactions are visible. Or enable/disable them individually:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  revert: true,\n  rotate: true,\n  granularRotate: true,\n  flip: true,\n  zoomIn: true,\n  zoomOut: true,\n  cropSquare: true,\n  cropWidescreen: true,\n  cropWidescreenVertical: true,\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"locale-",children:(0,t.jsx)(n.code,{children:"locale: {}"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\trevert: 'Revert',\n\t\trotate: 'Rotate',\n\t\tzoomIn: 'Zoom in',\n\t\tzoomOut: 'Zoom out',\n\t\tflipHorizontal: 'Flip horizontal',\n\t\taspectRatioSquare: 'Crop square',\n\t\taspectRatioLandscape: 'Crop landscape (16:9)',\n\t\taspectRatioPortrait: 'Crop portrait (9:16)',\n\t},\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"/docs/uppy#onevent-action",children:(0,t.jsx)(n.code,{children:"on"})})," and\n",(0,t.jsx)(n.a,{href:"/docs/uppy#onceevent-action",children:(0,t.jsx)(n.code,{children:"once"})})," to listen to these events."]})}),"\n",(0,t.jsx)(n.h4,{id:"file-editorstart",children:(0,t.jsx)(n.code,{children:"file-editor:start"})}),"\n",(0,t.jsxs)(n.p,{children:["Emitted when ",(0,t.jsx)(n.code,{children:"selectFile(file)"})," is called."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"uppy.on('file-editor:start', (file) => {\n\tconsole.log(file);\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"file-editorcomplete",children:(0,t.jsx)(n.code,{children:"file-editor:complete"})}),"\n",(0,t.jsxs)(n.p,{children:["Emitted after ",(0,t.jsx)(n.code,{children:"save(blob)"})," is called."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"uppy.on('file-editor:complete', (updatedFile) => {\n\tconsole.log(updatedFile);\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"file-editorcancel",children:(0,t.jsx)(n.code,{children:"file-editor:cancel"})}),"\n",(0,t.jsxs)(n.p,{children:["Emitted when ",(0,t.jsx)(n.code,{children:"uninstall"})," is called or when the current image editing changes are\ndiscarded."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"uppy.on('file-editor:cancel', (file) => {\n\tconsole.log(file);\n});\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);