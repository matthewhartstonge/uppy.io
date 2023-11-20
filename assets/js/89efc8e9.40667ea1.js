"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6130],{18756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),o=n(11151);const r={sidebar_position:3},i="Building plugins",l={id:"guides/building-plugins",title:"Building plugins",description:"You can find already a few useful Uppy plugins out there, but there might come a",source:"@site/docs/guides/building-plugins.md",sourceDirName:"guides",slug:"/guides/building-plugins",permalink:"/docs/guides/building-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/building-plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Choosing the uploader you need",permalink:"/docs/guides/choosing-uploader"},next:{title:"Building your own UI with Uppy",permalink:"/docs/guides/building-your-own-ui-with-uppy"}},a={},d=[{value:"Creating A Plugin",id:"creating-a-plugin",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>BasePlugin</code>",id:"baseplugin",level:3},{value:"<code>install()</code>",id:"install",level:4},{value:"<code>uninstall()</code>",id:"uninstall",level:4},{value:"<code>afterUpdate()</code>",id:"afterupdate",level:4},{value:"<code>addTarget()</code>",id:"addtarget",level:4},{value:"<code>UIPlugin</code>",id:"uiplugin",level:3},{value:"<code>mount(target)</code>",id:"mounttarget",level:4},{value:"<code>render()</code>",id:"render",level:4},{value:"<code>onMount()</code>",id:"onmount",level:4},{value:"<code>update(state)</code>",id:"updatestate",level:4},{value:"<code>onUnmount()</code>",id:"onunmount",level:4},{value:"Upload Hooks",id:"upload-hooks",level:2},{value:"Progress events",id:"progress-events",level:2},{value:"JSX",id:"jsx",level:2},{value:"Locales",id:"locales",level:2},{value:"Example of a custom plugin",id:"example-of-a-custom-plugin",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"building-plugins",children:"Building plugins"}),"\n",(0,s.jsx)(t.p,{children:"You can find already a few useful Uppy plugins out there, but there might come a\ntime when you will want to build your own. Plugins can hook into the upload\nprocess or render a custom UI, typically to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Render some custom UI element, such as ",(0,s.jsx)(t.a,{href:"/docs/status-bar",children:"StatusBar"})," or\n",(0,s.jsx)(t.a,{href:"/docs/dashboard",children:"Dashboard"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Do the actual uploading, such as ",(0,s.jsx)(t.a,{href:"/docs/xhr-upload",children:"XHRUpload"})," or\n",(0,s.jsx)(t.a,{href:"/docs/tus",children:"Tus"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Do work before the upload, like compressing an image or calling external API."}),"\n",(0,s.jsxs)(t.li,{children:["Interact with a third-party service to process uploads correctly, such as\n",(0,s.jsx)(t.a,{href:"/docs/transloadit",children:"Transloadit"})," or ",(0,s.jsx)(t.a,{href:"/docs/aws-s3",children:"AwsS3"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["See a ",(0,s.jsx)(t.a,{href:"#example-of-a-custom-plugin",children:"full example of a plugin"})," below."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-plugin",children:"Creating A Plugin"}),"\n",(0,s.jsxs)(t.p,{children:["Uppy has two classes to create plugins with. ",(0,s.jsx)(t.code,{children:"BasePlugin"})," for plugins that don\u2019t\nneed a user interface, and ",(0,s.jsx)(t.code,{children:"UIPlugin"})," for ones that do. Each plugin has an ",(0,s.jsx)(t.code,{children:"id"}),"\nand a ",(0,s.jsx)(t.code,{children:"type"}),". ",(0,s.jsx)(t.code,{children:"id"}),"s are used to uniquely identify plugins. A ",(0,s.jsx)(t.code,{children:"type"})," can be\nanything\u2014some plugins use ",(0,s.jsx)(t.code,{children:"type"}),"s to decide whether to do something to some\nother plugin. For example, when targeting plugins at the built-in ",(0,s.jsx)(t.code,{children:"Dashboard"}),"\nplugin, the Dashboard uses the ",(0,s.jsx)(t.code,{children:"type"})," to figure out where to mount different UI\nelements. ",(0,s.jsx)(t.code,{children:"'acquirer'"}),"-type plugins are mounted into the tab bar, while\n",(0,s.jsx)(t.code,{children:"'progressindicator'"}),"-type plugins are mounted into the progress bar area."]}),"\n",(0,s.jsxs)(t.p,{children:["The plugin constructor receives the Uppy instance in the first parameter, and\nany options passed to ",(0,s.jsx)(t.code,{children:"uppy.use()"})," in the second parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import BasePlugin from '@uppy/core/lib/BasePlugin.js';\n\nexport default class MyPlugin extends BasePlugin {\n\tconstructor(uppy, opts) {\n\t\tsuper(uppy, opts);\n\t\tthis.id = opts.id || 'MyPlugin';\n\t\tthis.type = 'example';\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.p,{children:["Plugins can define methods to execute certain tasks. The most important method\nis ",(0,s.jsx)(t.code,{children:"install()"}),", which is called when a plugin is ",(0,s.jsx)(t.code,{children:".use"}),"d."]}),"\n",(0,s.jsx)(t.p,{children:"All the below methods are optional! Only define the methods you need."}),"\n",(0,s.jsx)(t.h3,{id:"baseplugin",children:(0,s.jsx)(t.code,{children:"BasePlugin"})}),"\n",(0,s.jsx)(t.h4,{id:"install",children:(0,s.jsx)(t.code,{children:"install()"})}),"\n",(0,s.jsxs)(t.p,{children:["Called when the plugin is ",(0,s.jsx)(t.code,{children:".use"}),"d. Do any setup work here, like attaching events\nor adding ",(0,s.jsx)(t.a,{href:"#Upload-Hooks",children:"upload hooks"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default class MyPlugin extends UIPlugin {\n\t// ...\n\tinstall() {\n\t\tthis.uppy.on('upload-progress', this.onProgress);\n\t\tthis.uppy.addPostProcessor(this.afterUpload);\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"uninstall",children:(0,s.jsx)(t.code,{children:"uninstall()"})}),"\n",(0,s.jsxs)(t.p,{children:["Called when the plugin is removed, or the Uppy instance is closed. This should\nundo all the work done in the ",(0,s.jsx)(t.code,{children:"install()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default class MyPlugin extends UIPlugin {\n\t// ...\n\tuninstall() {\n\t\tthis.uppy.off('upload-progress', this.onProgress);\n\t\tthis.uppy.removePostProcessor(this.afterUpload);\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"afterupdate",children:(0,s.jsx)(t.code,{children:"afterUpdate()"})}),"\n",(0,s.jsx)(t.p,{children:"Called after every state update with a debounce, after everything has mounted."}),"\n",(0,s.jsx)(t.h4,{id:"addtarget",children:(0,s.jsx)(t.code,{children:"addTarget()"})}),"\n",(0,s.jsxs)(t.p,{children:["Use this to add your plugin to another plugin\u2019s target. This is what\n",(0,s.jsx)(t.code,{children:"@uppy/dashboard"})," uses to add other plugins to its UI."]}),"\n",(0,s.jsx)(t.h3,{id:"uiplugin",children:(0,s.jsx)(t.code,{children:"UIPlugin"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"UIPlugin"})," extends the ",(0,s.jsx)(t.code,{children:"BasePlugin"})," class so it will also contain all the above\nmethods."]}),"\n",(0,s.jsx)(t.h4,{id:"mounttarget",children:(0,s.jsx)(t.code,{children:"mount(target)"})}),"\n",(0,s.jsxs)(t.p,{children:["Mount this plugin to the ",(0,s.jsx)(t.code,{children:"target"})," element. ",(0,s.jsx)(t.code,{children:"target"})," can be a CSS query selector,\na DOM element, or another Plugin. If ",(0,s.jsx)(t.code,{children:"target"})," is a Plugin, the source (current)\nplugin will register with the target plugin, and the latter can decide how and\nwhere to render the source plugin."]}),"\n",(0,s.jsx)(t.p,{children:"This method can be overridden to support for different render engines."}),"\n",(0,s.jsx)(t.h4,{id:"render",children:(0,s.jsx)(t.code,{children:"render()"})}),"\n",(0,s.jsxs)(t.p,{children:["Render this plugin\u2019s UI. Uppy uses ",(0,s.jsx)(t.a,{href:"https://preactjs.com",children:"Preact"})," as its view\nengine, so ",(0,s.jsx)(t.code,{children:"render()"})," should return a Preact element. ",(0,s.jsx)(t.code,{children:"render"})," is automatically\ncalled by Uppy on each state change."]}),"\n",(0,s.jsx)(t.h4,{id:"onmount",children:(0,s.jsx)(t.code,{children:"onMount()"})}),"\n",(0,s.jsx)(t.p,{children:"Called after Preact has rendered the components of the plugin."}),"\n",(0,s.jsx)(t.h4,{id:"updatestate",children:(0,s.jsx)(t.code,{children:"update(state)"})}),"\n",(0,s.jsx)(t.p,{children:"Called on each state update. You will rarely need to use this, unless if you\nwant to build a UI plugin using something other than Preact."}),"\n",(0,s.jsx)(t.h4,{id:"onunmount",children:(0,s.jsx)(t.code,{children:"onUnmount()"})}),"\n",(0,s.jsx)(t.p,{children:"Called after the elements have been removed from the DOM. Can be used to do some\nclean up or other side-effects."}),"\n",(0,s.jsx)(t.h2,{id:"upload-hooks",children:"Upload Hooks"}),"\n",(0,s.jsx)(t.p,{children:"When creating an upload, Uppy runs files through an upload pipeline. The\npipeline consists of three parts, each of which can be hooked into:\nPreprocessing, Uploading, and Postprocessing. Preprocessors can be used to\nconfigure uploader plugins, encrypt files, resize images, etc., before uploading\nthem. Uploaders do the actual uploading work, such as creating an XMLHttpRequest\nobject and sending the file. Postprocessors do their work after files have been\nuploaded completely. This could be anything from waiting for a file to propagate\nacross a CDN, to sending another request to relate some metadata to the file."}),"\n",(0,s.jsxs)(t.p,{children:["Each hook is a function that receives an array containing the file IDs that are\nbeing uploaded, and returns a Promise to signal completion. Hooks are added and\nremoved through ",(0,s.jsx)(t.code,{children:"Uppy"})," methods:\n",(0,s.jsx)(t.a,{href:"/docs/uppy#addpreprocessorfn",children:(0,s.jsx)(t.code,{children:"addPreProcessor"})}),",\n",(0,s.jsx)(t.a,{href:"/docs/uppy#adduploaderfn",children:(0,s.jsx)(t.code,{children:"addUploader"})}),",\n",(0,s.jsx)(t.a,{href:"/docs/uppy#addpostprocessorfn",children:(0,s.jsx)(t.code,{children:"addPostProcessor"})}),", and their\n",(0,s.jsx)(t.a,{href:"/docs/uppy#removepreprocessorremoveuploaderremovepostprocessorfn",children:(0,s.jsx)(t.code,{children:"remove*"})}),"\ncounterparts. Normally, hooks should be added during the plugin ",(0,s.jsx)(t.code,{children:"install()"}),"\nmethod, and removed during the ",(0,s.jsx)(t.code,{children:"uninstall()"})," method."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, upload hooks can fire events to signal progress."}),"\n",(0,s.jsxs)(t.p,{children:["When adding hooks, make sure to bind the hook ",(0,s.jsx)(t.code,{children:"fn"})," beforehand! Otherwise, it\nwill be impossible to remove. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"class MyPlugin extends BasePlugin {\n\tconstructor(uppy, opts) {\n\t\tsuper(uppy, opts);\n\t\tthis.id = opts.id || 'MyPlugin';\n\t\tthis.type = 'example';\n\t\tthis.prepareUpload = this.prepareUpload.bind(this); // \u2190 this!\n\t}\n\n\tprepareUpload(fileIDs) {\n\t\tconsole.log(this); // `this` refers to the `MyPlugin` instance.\n\t\treturn Promise.resolve();\n\t}\n\n\tinstall() {\n\t\tthis.uppy.addPreProcessor(this.prepareUpload);\n\t}\n\n\tuninstall() {\n\t\tthis.uppy.removePreProcessor(this.prepareUpload);\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Or you can define the method as a class field:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"class MyPlugin extends UIPlugin {\n\tconstructor(uppy, opts) {\n\t\tsuper(uppy, opts);\n\t\tthis.id = opts.id || 'MyPlugin';\n\t\tthis.type = 'example';\n\t}\n\n\tprepareUpload = (fileIDs) => {\n\t\t// \u2190 this!\n\t\tconsole.log(this); // `this` refers to the `MyPlugin` instance.\n\t\treturn Promise.resolve();\n\t};\n\n\tinstall() {\n\t\tthis.uppy.addPreProcessor(this.prepareUpload);\n\t}\n\n\tuninstall() {\n\t\tthis.uppy.removePreProcessor(this.prepareUpload);\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"progress-events",children:"Progress events"}),"\n",(0,s.jsx)(t.p,{children:"Progress events can be fired for individual files to show feedback to the user.\nFor upload progress events, only emitting how many bytes are expected and how\nmany have been uploaded is enough. Uppy will handle calculating progress\npercentages, upload speed, etc."}),"\n",(0,s.jsx)(t.p,{children:"Preprocessing and postprocessing progress events are plugin-dependent and can\nrefer to anything, so Uppy doesn\u2019t try to be smart about them. Processing\nprogress events can be of two types: determinate or indeterminate. Some\nprocessing does not have meaningful progress beyond \u201cnot done\u201d and \u201cdone\u201d. For\nexample, sending a request to initialize a server-side resource that will serve\nas the upload destination. In those situations, indeterminate progress is\nsuitable. Other processing does have meaningful progress. For example,\nencrypting a large file. In those situations, determinate progress is suitable."}),"\n",(0,s.jsx)(t.p,{children:"Here are the relevant events:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/uppy#preprocess-progress",children:(0,s.jsx)(t.code,{children:"preprocess-progress"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/uppy#upload-progress",children:(0,s.jsx)(t.code,{children:"upload-progress"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/uppy#postprocess-progress",children:(0,s.jsx)(t.code,{children:"postprocess-progress"})})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"jsx",children:"JSX"}),"\n",(0,s.jsxs)(t.p,{children:["Since Uppy uses Preact and not React, the default Babel configuration for JSX\nelements does not work. You have to import the Preact ",(0,s.jsx)(t.code,{children:"h"})," function and tell\nBabel to use it by adding a ",(0,s.jsx)(t.code,{children:"/** @jsx h */"})," comment at the top of the file."]}),"\n",(0,s.jsxs)(t.p,{children:["See the Preact\n",(0,s.jsx)(t.a,{href:"https://preactjs.com/guide/getting-started",children:"Getting Started Guide"})," for more on\nBabel and JSX."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"/** @jsx h */\nimport { UIPlugin } from '@uppy/core';\nimport { h } from 'preact';\n\nclass NumFiles extends UIPlugin {\n\trender() {\n\t\tconst numFiles = Object.keys(this.uppy.state.files).length;\n\n\t\treturn <div>Number of files: {numFiles}</div>;\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"locales",children:"Locales"}),"\n",(0,s.jsxs)(t.p,{children:["For any user facing language that you use while writing your Plugin, please\nprovide them as strings in the ",(0,s.jsx)(t.code,{children:"defaultLocale"})," property like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"this.defaultLocale = {\n\tstrings: {\n\t\tyouCanOnlyUploadFileTypes: 'You can only upload: %{types}',\n\t\tyouCanOnlyUploadX: {\n\t\t\t0: 'You can only upload %{smart_count} file',\n\t\t\t1: 'You can only upload %{smart_count} files',\n\t\t\t2: 'You can only upload %{smart_count} files',\n\t\t},\n\t},\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows them to be overridden by Locale Packs, or directly when users pass\n",(0,s.jsx)(t.code,{children:"locale: { strings: youCanOnlyUploadFileTypes: 'Something else completely about %{types}'} }"}),".\nFor this to work, it\u2019s also required that you call ",(0,s.jsx)(t.code,{children:"this.i18nInit()"})," in the\nplugin constructor."]}),"\n",(0,s.jsx)(t.h2,{id:"example-of-a-custom-plugin",children:"Example of a custom plugin"}),"\n",(0,s.jsxs)(t.p,{children:["Below is a full example of a\n",(0,s.jsx)(t.a,{href:"https://github.com/arturi/uppy-plugin-image-compressor",children:"small plugin"})," that\ncompresses images before uploading them. You can replace ",(0,s.jsx)(t.code,{children:"compressorjs"})," method\nwith any other work you need to do. This works especially well for async stuff,\nlike calling an external API."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { UIPlugin } from '@uppy/core';\nimport Translator from '@uppy/utils/lib/Translator';\nimport Compressor from 'compressorjs/dist/compressor.esm.js';\n\nclass UppyImageCompressor extends UIPlugin {\n\tconstructor(uppy, opts) {\n\t\tconst defaultOptions = {\n\t\t\tquality: 0.6,\n\t\t};\n\t\tsuper(uppy, { ...defaultOptions, ...opts });\n\n\t\tthis.id = this.opts.id || 'ImageCompressor';\n\t\tthis.type = 'modifier';\n\n\t\tthis.defaultLocale = {\n\t\t\tstrings: {\n\t\t\t\tcompressingImages: 'Compressing images...',\n\t\t\t},\n\t\t};\n\n\t\t// we use those internally in `this.compress`, so they\n\t\t// should not be overridden\n\t\tdelete this.opts.success;\n\t\tdelete this.opts.error;\n\n\t\tthis.i18nInit();\n\t}\n\n\tcompress(blob) {\n\t\treturn new Promise(\n\t\t\t(resolve, reject) =>\n\t\t\t\tnew Compressor(blob, {\n\t\t\t\t\t...this.opts,\n\t\t\t\t\tsuccess(result) {\n\t\t\t\t\t\treturn resolve(result);\n\t\t\t\t\t},\n\t\t\t\t\terror(err) {\n\t\t\t\t\t\treturn reject(err);\n\t\t\t\t\t},\n\t\t\t\t}),\n\t\t);\n\t}\n\n\tprepareUpload = (fileIDs) => {\n\t\tconst promises = fileIDs.map((fileID) => {\n\t\t\tconst file = this.uppy.getFile(fileID);\n\t\t\tthis.uppy.emit('preprocess-progress', file, {\n\t\t\t\tmode: 'indeterminate',\n\t\t\t\tmessage: this.i18n('compressingImages'),\n\t\t\t});\n\n\t\t\tif (!file.type.startsWith('image/')) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\treturn this.compress(file.data)\n\t\t\t\t.then((compressedBlob) => {\n\t\t\t\t\tthis.uppy.log(\n\t\t\t\t\t\t`[Image Compressor] Image ${file.id} size before/after compression: ${file.data.size} / ${compressedBlob.size}`,\n\t\t\t\t\t);\n\t\t\t\t\tthis.uppy.setFileState(fileID, { data: compressedBlob });\n\t\t\t\t})\n\t\t\t\t.catch((err) => {\n\t\t\t\t\tthis.uppy.log(\n\t\t\t\t\t\t`[Image Compressor] Failed to compress ${file.id}:`,\n\t\t\t\t\t\t'warning',\n\t\t\t\t\t);\n\t\t\t\t\tthis.uppy.log(err, 'warning');\n\t\t\t\t});\n\t\t});\n\n\t\tconst emitPreprocessCompleteForAll = () => {\n\t\t\tfileIDs.forEach((fileID) => {\n\t\t\t\tconst file = this.uppy.getFile(fileID);\n\t\t\t\tthis.uppy.emit('preprocess-complete', file);\n\t\t\t});\n\t\t};\n\n\t\t// Why emit `preprocess-complete` for all files at once, instead of\n\t\t// above when each is processed?\n\t\t// Because it leads to StatusBar showing a weird \u201cupload 6 files\u201d button,\n\t\t// while waiting for all the files to complete pre-processing.\n\t\treturn Promise.all(promises).then(emitPreprocessCompleteForAll);\n\t};\n\n\tinstall() {\n\t\tthis.uppy.addPreProcessor(this.prepareUpload);\n\t}\n\n\tuninstall() {\n\t\tthis.uppy.removePreProcessor(this.prepareUpload);\n\t}\n}\n\nexport default UppyImageCompressor;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);