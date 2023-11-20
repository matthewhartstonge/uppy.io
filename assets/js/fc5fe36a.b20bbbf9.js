"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1074],{59828:(e,n,s)=>{s.d(n,{Z:()=>a});var d=s(67294),l=s(84316),t=s(38555),i=s(56482),o=s(85893);const{version:r}=i;function a(e){let{children:n,uppyCssName:s="uppy.min.css",uppyJsName:i="uppy.min.mjs"}=e,a=[];d.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const h=a.map((e=>`  ${e}`)).join("\n"),c=`https://releases.transloadit.com/uppy/v${r}/${i}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${r}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${h.replace(/{{UPPY_JS_URL}}/g,c)}\n<\/script>\n`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.Z,{type:"caution",children:[(0,o.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,o.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,o.jsx)(l.Z,{language:"html",children:p})]})}},9207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>h,toc:()=>p});var d=s(85893),l=s(11151),t=s(22808),i=s(30433),o=s(59828);const r={sidebar_position:5,slug:"/xhr-upload"},a="XHR",h={id:"uploader/xhr",title:"XHR",description:"The @uppy/xhr-upload plugin is for regular uploads to a HTTP server.",source:"@site/docs/uploader/xhr.mdx",sourceDirName:"uploader",slug:"/xhr-upload",permalink:"/docs/xhr-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/xhr.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/xhr-upload"},sidebar:"tutorialSidebar",previous:{title:"AWS S3",permalink:"/docs/aws-s3-multipart"},next:{title:"Angular",permalink:"/docs/angular"}},c={},p=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>method</code>",id:"method",level:4},{value:"<code>formData</code>",id:"formdata",level:4},{value:"<code>fieldName</code>",id:"fieldname",level:4},{value:"<code>allowedMetaFields</code>",id:"allowedmetafields",level:4},{value:"<code>headers</code>",id:"headers",level:4},{value:"<code>bundle</code>",id:"bundle",level:4},{value:"<code>validateStatus</code>",id:"validatestatus",level:4},{value:"Parameters",id:"parameters",level:5},{value:"<code>getResponseData</code>",id:"getresponsedata",level:4},{value:"<code>getResponseError</code>",id:"getresponseerror",level:4},{value:"<code>responseUrlFieldName</code>",id:"responseurlfieldname",level:4},{value:"<code>timeout: 30 * 1000</code>",id:"timeout-30--1000",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>responseType</code>",id:"responsetype",level:4},{value:"<code>withCredentials</code>",id:"withcredentials",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How to send along meta data with the upload?",id:"how-to-send-along-meta-data-with-the-upload",level:3},{value:"How to upload to a PHP server?",id:"how-to-upload-to-a-php-server",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"xhr",children:"XHR"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"@uppy/xhr-upload"})," plugin is for regular uploads to a HTTP server."]}),"\n",(0,d.jsx)(n.h2,{id:"when-should-i-use-it",children:"When should I use it?"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["Not sure which uploader is best for you? Read\n\u201c",(0,d.jsx)(n.a,{href:"/docs/guides/choosing-uploader",children:"Choosing the uploader you need"}),"\u201d."]})}),"\n",(0,d.jsxs)(n.p,{children:["When you have an existing HTTP server and you don\u2019t need Transloadit services or\nwant to run a ",(0,d.jsx)(n.a,{href:"https://tus.io/",children:"tus"})," server. Note that it\u2019s still possible to use ",(0,d.jsx)(n.a,{href:"https://tus.io/",children:"tus"}),"\nwithout running an extra server by integrating tus into your existing one. For\ninstance, if you have a Node.js server (or server-side framework like Next.js)\nyou could integrate ",(0,d.jsx)(n.a,{href:"https://github.com/tus/tus-node-server",children:"tus-node-server"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,d.jsxs)(t.Z,{children:[(0,d.jsx)(i.Z,{value:"npm",label:"NPM",default:!0,children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/xhr-upload\n"})})}),(0,d.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/xhr-upload\n"})})}),(0,d.jsx)(i.Z,{value:"cdn",label:"CDN",children:(0,d.jsx)(o.Z,{children:"\n        import { Uppy, XHRUpload } from \"{{UPPY_JS_URL}}\"\n        new Uppy().use(XHRUpload, { endpoint: 'https://tusd.tusdemo.net/files' })\n      "})})]}),"\n",(0,d.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,d.jsx)(n.p,{children:"A quick overview of the complete API."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:"{10} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport XHR from '@uppy/xhr-upload';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: 'body' })\n\t.use(XHR, { endpoint: 'https://your-domain.com/upload' });\n"})}),"\n",(0,d.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,d.jsx)(n.h4,{id:"id",children:(0,d.jsx)(n.code,{children:"id"})}),"\n",(0,d.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"'XHRUpload'"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"endpoint",children:(0,d.jsx)(n.code,{children:"endpoint"})}),"\n",(0,d.jsxs)(n.p,{children:["URL of the HTTP server (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"method",children:(0,d.jsx)(n.code,{children:"method"})}),"\n",(0,d.jsxs)(n.p,{children:["Configures which HTTP method to use for the upload (",(0,d.jsx)(n.code,{children:"string"}),", default:\n",(0,d.jsx)(n.code,{children:"'post'"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"formdata",children:(0,d.jsx)(n.code,{children:"formData"})}),"\n",(0,d.jsxs)(n.p,{children:["Configures whether to use a multipart form upload, using ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",children:"FormData"}),"\n(",(0,d.jsx)(n.code,{children:"boolean"}),", default: ",(0,d.jsx)(n.code,{children:"true"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["This works similarly to using a ",(0,d.jsx)(n.code,{children:"<form>"})," element with an ",(0,d.jsx)(n.code,{children:'<input type="file">'}),"\nfor uploads. When set to ",(0,d.jsx)(n.code,{children:"true"}),", file metadata is also sent to the endpoint as\nseparate form fields. When set to ",(0,d.jsx)(n.code,{children:"false"}),", only the file contents are sent."]}),"\n",(0,d.jsx)(n.h4,{id:"fieldname",children:(0,d.jsx)(n.code,{children:"fieldName"})}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.a,{href:"#formData-true",children:(0,d.jsx)(n.code,{children:"formData"})})," is set to true, this is used as the form field\nname for the file to be uploaded."]}),"\n",(0,d.jsxs)(n.p,{children:["It defaults to ",(0,d.jsx)(n.code,{children:"'files[]'"})," if ",(0,d.jsx)(n.code,{children:"bundle"})," option is set to ",(0,d.jsx)(n.code,{children:"true"}),", otherwise it\ndefaults to ",(0,d.jsx)(n.code,{children:"'file'"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"allowedmetafields",children:(0,d.jsx)(n.code,{children:"allowedMetaFields"})}),"\n",(0,d.jsx)(n.p,{children:"Pass an array of field names to limit the metadata fields that will be added to\nupload."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Set this to an empty array ",(0,d.jsx)(n.code,{children:"[]"})," to not send any fields."]}),"\n",(0,d.jsxs)(n.li,{children:["Set this to ",(0,d.jsx)(n.code,{children:"['name']"})," to only send the ",(0,d.jsx)(n.code,{children:"name"})," field."]}),"\n",(0,d.jsxs)(n.li,{children:["Set this to ",(0,d.jsx)(n.code,{children:"null"})," (the default) to send ",(0,d.jsx)(n.em,{children:"all"})," metadata fields."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["If the ",(0,d.jsx)(n.a,{href:"#formData-true",children:(0,d.jsx)(n.code,{children:"formData"})})," option is set to false, ",(0,d.jsx)(n.code,{children:"metaFields"})," is\nignored."]}),"\n",(0,d.jsx)(n.h4,{id:"headers",children:(0,d.jsx)(n.code,{children:"headers"})}),"\n",(0,d.jsx)(n.p,{children:"An object containing HTTP headers to use for the upload request. Keys are header\nnames, values are header values."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const headers = {\n\tauthorization: `Bearer ${window.getCurrentUserToken()}`,\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Header values can also be derived from file data by providing a function. The\nfunction receives an ",(0,d.jsx)(n.a,{href:"/docs/uppy#working-with-uppy-files",children:"Uppy file"})," and must return an object where the keys are\nheader names, and values are header values."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const headers = (file) => {\n\treturn {\n\t\tauthorization: `Bearer ${window.getCurrentUserToken()}`,\n\t\texpires: file.meta.expires,\n\t};\n};\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["The function syntax is not available when ",(0,d.jsx)(n.a,{href:"#bundle",children:(0,d.jsx)(n.code,{children:"bundle"})})," is set to ",(0,d.jsx)(n.code,{children:"true"}),"."]})}),"\n",(0,d.jsx)(n.h4,{id:"bundle",children:(0,d.jsx)(n.code,{children:"bundle"})}),"\n",(0,d.jsxs)(n.p,{children:["Send all files in a single multipart request (",(0,d.jsx)(n.code,{children:"boolean"}),", default: ",(0,d.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["All files will be appended to the provided ",(0,d.jsx)(n.code,{children:"fieldName"})," field in the request."]}),"\n",(0,d.jsxs)(n.admonition,{type:"caution",children:[(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"bundle"})," is set to ",(0,d.jsx)(n.code,{children:"true"}),":"]}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#formData-true",children:(0,d.jsx)(n.code,{children:"formData"})})," must also be set to ",(0,d.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,d.jsx)(n.li,{children:"Uppy won\u2019t be able to bundle remote files (such as Google Drive) and will\nthrow an error in this case."}),"\n",(0,d.jsxs)(n.li,{children:["Only ",(0,d.jsx)(n.a,{href:"/docs/uppy/#meta",children:"global uppy metadata"})," is sent to the endpoint.\nIndividual per-file metadata is ignored."]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["To upload files on different fields, use\n",(0,d.jsx)(n.a,{href:"/docs/uppy#uppy-setFileState-fileID-state",children:(0,d.jsx)(n.code,{children:"uppy.setFileState()"})})," to set the\n",(0,d.jsx)(n.code,{children:"xhrUpload.fieldName"})," property on the file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"uppy.setFileState(fileID, {\n\txhrUpload: { fieldName: 'pic0' },\n});\n"})}),"\n",(0,d.jsx)(n.h4,{id:"validatestatus",children:(0,d.jsx)(n.code,{children:"validateStatus"})}),"\n",(0,d.jsxs)(n.p,{children:["Check if the response was successful (",(0,d.jsx)(n.code,{children:"function"}),", default:\n",(0,d.jsx)(n.code,{children:"(status, responseText, response) => boolean"}),")."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"By default, responses with a 2xx HTTP status code are considered successful."}),"\n",(0,d.jsxs)(n.li,{children:["When ",(0,d.jsx)(n.code,{children:"true"}),", ",(0,d.jsx)(n.a,{href:"#getResponseData-responseText-response",children:(0,d.jsx)(n.code,{children:"getResponseData()"})}),"\nwill be called and the upload will be marked as successful."]}),"\n",(0,d.jsxs)(n.li,{children:["When ",(0,d.jsx)(n.code,{children:"false"}),", both\n",(0,d.jsx)(n.a,{href:"#getResponseData-responseText-response",children:(0,d.jsx)(n.code,{children:"getResponseData()"})})," and\n",(0,d.jsx)(n.a,{href:"#getResponseError-responseText-response",children:(0,d.jsx)(n.code,{children:"getResponseError()"})})," will be called\nand the upload will be marked as unsuccessful."]}),"\n"]}),"\n",(0,d.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["The ",(0,d.jsx)(n.code,{children:"statusCode"})," is the numeric HTTP status code returned by the endpoint."]}),"\n",(0,d.jsxs)(n.li,{children:["The ",(0,d.jsx)(n.code,{children:"responseText"})," is the XHR endpoint response as a string."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"response"})," is the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XMLHttpRequest"})," object."]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["This option is only used for ",(0,d.jsx)(n.strong,{children:"local"})," uploads. Uploads from remote providers\nlike Google Drive or Instagram do not support this and will always use the\ndefault."]})}),"\n",(0,d.jsx)(n.h4,{id:"getresponsedata",children:(0,d.jsx)(n.code,{children:"getResponseData"})}),"\n",(0,d.jsxs)(n.p,{children:["Extract the response data from the successful upload (",(0,d.jsx)(n.code,{children:"function"}),", default:\n",(0,d.jsx)(n.code,{children:"(responseText, response) => void"}),")."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"responseText"})," is the XHR endpoint response as a string."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"response"})," is the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XMLHttpRequest"})," object."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"JSON is handled automatically, so you should only use this if the endpoint\nresponds with a different format. For example, an endpoint that responds with an\nXML document:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"function getResponseData(responseText, response) {\n\tconst parser = new DOMParser();\n\tconst xmlDoc = parser.parseFromString(responseText, 'text/xml');\n\treturn {\n\t\turl: xmlDoc.querySelector('Location').textContent,\n\t};\n}\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["This response data will be available on the file\u2019s ",(0,d.jsx)(n.code,{children:".response"})," property and will\nbe emitted in the ",(0,d.jsx)(n.a,{href:"/docs/uppy/#upload-success",children:(0,d.jsx)(n.code,{children:"upload-success"})})," event."]})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["When uploading files from remote providers such as Dropbox or Instagram,\nCompanion sends upload response data to the client. This is made available in\nthe ",(0,d.jsx)(n.code,{children:"getResponseData()"})," function as well. The ",(0,d.jsx)(n.code,{children:"response"})," object from Companion\nhas some properties named after their ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XMLHttpRequest"})," counterparts."]})}),"\n",(0,d.jsx)(n.h4,{id:"getresponseerror",children:(0,d.jsx)(n.code,{children:"getResponseError"})}),"\n",(0,d.jsxs)(n.p,{children:["Extract the error from the failed upload (",(0,d.jsx)(n.code,{children:"function"}),", default:\n",(0,d.jsx)(n.code,{children:"(responseText, response) => void"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, if the endpoint responds with a JSON object containing a\n",(0,d.jsx)(n.code,{children:"{ message }"})," property, this would show that message to the user:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"function getResponseError(responseText, response) {\n\treturn new Error(JSON.parse(responseText).message);\n}\n"})}),"\n",(0,d.jsx)(n.h4,{id:"responseurlfieldname",children:(0,d.jsx)(n.code,{children:"responseUrlFieldName"})}),"\n",(0,d.jsxs)(n.p,{children:["The field name containing the location of the uploaded file (",(0,d.jsx)(n.code,{children:"string"}),", default:\n",(0,d.jsx)(n.code,{children:"'url'"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["This is returned by ",(0,d.jsx)(n.a,{href:"#getResponseData",children:(0,d.jsx)(n.code,{children:"getResponseData()"})}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"timeout-30--1000",children:(0,d.jsx)(n.code,{children:"timeout: 30 * 1000"})}),"\n",(0,d.jsxs)(n.p,{children:["Abort the connection if no upload progress events have been received for this\nmilliseconds amount (",(0,d.jsx)(n.code,{children:"number"}),", default: ",(0,d.jsx)(n.code,{children:"30_000"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["Note that unlike the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout",children:(0,d.jsx)(n.code,{children:"XMLHttpRequest.timeout"})})," property, this is a\ntimer between progress events: the total upload can take longer than this value.\nSet to ",(0,d.jsx)(n.code,{children:"0"})," to disable this check."]}),"\n",(0,d.jsx)(n.h4,{id:"limit",children:(0,d.jsx)(n.code,{children:"limit"})}),"\n",(0,d.jsxs)(n.p,{children:["The maximum amount of files to upload in parallel (",(0,d.jsx)(n.code,{children:"number"}),", default: ",(0,d.jsx)(n.code,{children:"5"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"responsetype",children:(0,d.jsx)(n.code,{children:"responseType"})}),"\n",(0,d.jsxs)(n.p,{children:["The response type expected from the server, determining how the ",(0,d.jsx)(n.code,{children:"xhr.response"}),"\nproperty should be filled (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"'text'"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"xhr.response"})," property can be accessed in a custom\n",(0,d.jsx)(n.a,{href:"#getResponseData-responseText-response",children:(0,d.jsx)(n.code,{children:"getResponseData()"})})," callback. This\noption sets the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType",children:(0,d.jsx)(n.code,{children:"XMLHttpRequest.responseType"})})," property. Only\n",(0,d.jsx)(n.code,{children:"''"}),", ",(0,d.jsx)(n.code,{children:"'text'"}),", ",(0,d.jsx)(n.code,{children:"'arraybuffer'"}),", ",(0,d.jsx)(n.code,{children:"'blob'"})," and ",(0,d.jsx)(n.code,{children:"'document'"})," are widely supported\nby browsers, so it\u2019s recommended to use one of those."]}),"\n",(0,d.jsx)(n.h4,{id:"withcredentials",children:(0,d.jsx)(n.code,{children:"withCredentials"})}),"\n",(0,d.jsxs)(n.p,{children:["Indicates whether cross-site Access-Control requests should be made using\ncredentials (",(0,d.jsx)(n.code,{children:"boolean"}),", default: ",(0,d.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"locale-",children:(0,d.jsx)(n.code,{children:"locale: {}"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\t// Shown in the Informer if an upload is being canceled because it stalled for too long.\n\t\ttimedOut: 'Upload stalled for %{seconds} seconds, aborting.',\n\t},\n};\n"})}),"\n",(0,d.jsx)(n.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,d.jsx)(n.h3,{id:"how-to-send-along-meta-data-with-the-upload",children:"How to send along meta data with the upload?"}),"\n",(0,d.jsxs)(n.p,{children:["When using XHRUpload with ",(0,d.jsx)(n.a,{href:"#formData-true",children:(0,d.jsx)(n.code,{children:"formData: true"})}),", file metadata is\nsent along with each upload request. You can set metadata for a file using\n",(0,d.jsx)(n.a,{href:"/docs/uppy#uppy-setFileMeta-fileID-data",children:(0,d.jsx)(n.code,{children:"uppy.setFileMeta(fileID, data)"})}),", or\nfor all files simultaneously using\n",(0,d.jsx)(n.a,{href:"/docs/uppy#uppy-setMeta-data",children:(0,d.jsx)(n.code,{children:"uppy.setMeta(data)"})}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["It may be useful to set metadata depending on some file properties, such as the\nsize. You can use the ",(0,d.jsx)(n.a,{href:"/docs/uppy/#file-added",children:(0,d.jsx)(n.code,{children:"file-added"})})," event and the\n",(0,d.jsx)(n.a,{href:"/docs/uppy#uppy-setFileMeta-fileID-data",children:(0,d.jsx)(n.code,{children:"uppy.setFileMeta(fileID, data)"})}),"\nmethod to do this:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"uppy.on('file-added', (file) => {\n\tuppy.setFileMeta(file.id, {\n\t\tsize: file.size,\n\t});\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Now, a form field named ",(0,d.jsx)(n.code,{children:"size"})," will be sent along to the\n",(0,d.jsx)(n.a,{href:"#endpoint-39-39",children:(0,d.jsx)(n.code,{children:"endpoint"})})," once the upload starts."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, all metadata is sent, including Uppy\u2019s default ",(0,d.jsx)(n.code,{children:"name"})," and ",(0,d.jsx)(n.code,{children:"type"}),"\nmetadata. If you do not want the ",(0,d.jsx)(n.code,{children:"name"})," and ",(0,d.jsx)(n.code,{children:"type"})," metadata properties to be\nsent to your upload endpoint, you can use the ",(0,d.jsx)(n.a,{href:"#metaFields-null",children:(0,d.jsx)(n.code,{children:"metaFields"})}),"\noption to restrict the field names that should be sent."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"uppy.use(XHRUpload, {\n\t// Only send our own `size` metadata field.\n\tallowedMetaFields: ['size'],\n});\n"})}),"\n",(0,d.jsx)(n.h3,{id:"how-to-upload-to-a-php-server",children:"How to upload to a PHP server?"}),"\n",(0,d.jsxs)(n.p,{children:["The XHRUpload plugin works similarly to a ",(0,d.jsx)(n.code,{children:"<form>"})," upload. You can use the\n",(0,d.jsx)(n.code,{children:"$_FILES"})," variable on the server to work with uploaded files. See the PHP\ndocumentation on ",(0,d.jsx)(n.a,{href:"https://secure.php.net/manual/en/features.file-upload.php",children:"Handling file uploads"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The default form field for file uploads is ",(0,d.jsx)(n.code,{children:"files[]"}),", which means you have to\naccess the ",(0,d.jsx)(n.code,{children:"$_FILES"})," array as described in ",(0,d.jsx)(n.a,{href:"https://secure.php.net/manual/en/features.file-upload.multiple.php",children:"Uploading many files"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"<?php\n// upload.php\n$files = $_FILES['files'];\n$file_path = $files['tmp_name'][0]; // temporary upload path of the first file\n$file_name = $_POST['name']; // desired name of the file\nmove_uploaded_file($file_path, './img/' . basename($file_name)); // save the file in `img/`\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Note how we are using ",(0,d.jsx)(n.code,{children:"$_POST['name']"})," instead of ",(0,d.jsx)(n.code,{children:"$my_file['name']"}),".\n",(0,d.jsx)(n.code,{children:"$my_file['name']"})," has the original name of the file on the user\u2019s device.\n",(0,d.jsx)(n.code,{children:"$_POST['name']"})," has the ",(0,d.jsx)(n.code,{children:"name"})," metadata value for the uploaded file, which can\nbe edited by the user using the ",(0,d.jsx)(n.a,{href:"/docs/dashboard",children:"Dashboard"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Set a custom ",(0,d.jsx)(n.code,{children:"fieldName"})," to make working with the ",(0,d.jsx)(n.code,{children:"$_FILES"})," array a bit less\nconvoluted:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// app.js\nuppy.use(XHRUpload, {\n\tendpoint: '/upload.php',\n\tfieldName: 'my_file',\n});\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"<?php\n// upload.php\n$my_file = $_FILES['my_file'];\n$file_path = $my_file['tmp_name']; // temporary upload path of the file\n$file_name = $_POST['name']; // desired name of the file\nmove_uploaded_file($file_path, $_SERVER['DOCUMENT_ROOT'] . '/img/' . basename($file_name)); // save the file at `img/FILE_NAME`\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}}}]);