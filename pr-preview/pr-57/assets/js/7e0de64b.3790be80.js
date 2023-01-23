"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[434],{5810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),l=n(5488),r=n(5162),o=n(3068);const p={sidebar_position:2},u="Thumbnail generator",s={unversionedId:"user-interfaces/elements/thumbnail-generator",id:"user-interfaces/elements/thumbnail-generator",title:"Thumbnail generator",description:"@uppy/thumbnail-generator generates proportional thumbnails (file previews)",source:"@site/docs/user-interfaces/elements/thumbnail-generator.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/thumbnail-generator",permalink:"/uppy.io/pr-preview/pr-57/docs/user-interfaces/elements/thumbnail-generator",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/thumbnail-generator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-57/docs/user-interfaces/elements/image-editor"},next:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-57/docs/user-interfaces/elements/informer"}},d={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>thumbnailWidth</code>",id:"thumbnailwidth",level:4},{value:"<code>thumbnailHeight</code>",id:"thumbnailheight",level:4},{value:"<code>thumbnailType</code>",id:"thumbnailtype",level:4},{value:"<code>waitForThumbnailsBeforeUpload</code>",id:"waitforthumbnailsbeforeupload",level:4},{value:"Events",id:"events",level:3},{value:"<code>thumbnail:generated</code>",id:"thumbnailgenerated",level:4}],h={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thumbnail-generator"},"Thumbnail generator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/thumbnail-generator")," generates proportional thumbnails (file previews)\nfor images that are added to Uppy."),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"This plugin is included by default with the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," plugin, and can also be useful to\ndisplay image previews in a custom UI."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Thumbnails are only generated for ",(0,i.kt)("em",{parentName:"p"},"local")," files. Remote files through\n",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," generally won\u2019t have thumbnails because they are\ndownloaded on the server. Some providers, such as Google Drive, have baked in\nthumbnails into their API responses.")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/thumbnail-generator\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/thumbnail-generator\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, ThumbnailGenerator } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(ThumbnailGenerator)\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," then it\u2019s already\ninstalled. If you want to use it programatically for your own UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport ThumbnailGenerator from '@uppy/thumbnail-generator';\n\nconst uppy = new Uppy();\n\nuppy.use(ThumbnailGenerator);\nuppy.on('thumbnail:generated', (file, preview) => doSomething(file, preview));\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'ThumbnailGenerator'"),")."),(0,i.kt)("h4",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        generatingThumbnails: 'Generating thumbnails...',\n    },\n};\n")),(0,i.kt)("h4",{id:"thumbnailwidth"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailWidth")),(0,i.kt)("p",null,"Width of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),")."),(0,i.kt)("p",null,"Thumbnails are always proportional and not cropped. If width is provided, height\nis calculated automatically to match ratio. If both width and height are given,\nonly width is taken into account."),(0,i.kt)("h4",{id:"thumbnailheight"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailHeight")),(0,i.kt)("p",null,"Height of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),")."),(0,i.kt)("p",null,"Thumbnails are always proportional and not cropped. If height is provided, width\nis calculated automatically to match ratio. If both width and height are given,\nonly width is taken into account."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Produce a 300px height thumbnail with calculated width to match ratio:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailHeight: 300 });\n")),(0,i.kt)("p",{parentName:"admonition"},"Produce a 300px width thumbnail with calculated height to match ratio (and\nignore the given height):"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailWidth: 300, thumbnailHeight: 300 });\n")),(0,i.kt)("p",{parentName:"admonition"},"See issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/979"},"#979")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1096"},"#1096")," for details on this\nfeature.")),(0,i.kt)("h4",{id:"thumbnailtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailType")),(0,i.kt)("p",null,"MIME type of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'image/jpeg'"),")."),(0,i.kt)("p",null,"This is useful if you want to support transparency in your thumbnails by\nswitching to ",(0,i.kt)("inlineCode",{parentName:"p"},"image/png"),"."),(0,i.kt)("h4",{id:"waitforthumbnailsbeforeupload"},(0,i.kt)("inlineCode",{parentName:"h4"},"waitForThumbnailsBeforeUpload")),(0,i.kt)("p",null,"Whether to wait for all thumbnails to be ready before starting the upload\n(",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", Thumbnail Generator will invoke Uppy\u2019s internal processing\nstage and wait for ",(0,i.kt)("inlineCode",{parentName:"p"},"thumbnail:all-generated")," event, before proceeding to the\nuploading stage. This is useful because Thumbnail Generator also adds EXIF data\nto images, and if we wait until it\u2019s done processing, this data will be\navailable on the server after the upload."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"on"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,i.kt)("h4",{id:"thumbnailgenerated"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnail:generated")),(0,i.kt)("p",null,"Emitted with ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"preview")," local url as arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('thumbnail:generated', (file, preview) => {\n    const img = document.createElement('img');\n    img.src = preview;\n    img.width = 100;\n    document.body.appendChild(img);\n});\n")))}c.isMDXComponent=!0}}]);