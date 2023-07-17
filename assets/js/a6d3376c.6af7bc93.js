"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1948],{25103:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(90814),i=a(23612),o=a(56482);const{version:r}=o;function p(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:o="uppy.min.mjs"}=e,p=[];n.Children.toArray(t).forEach((e=>{p=[...p,...String(e).trim().split("\n").map((e=>e.trim()))]}));const s=p.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${r}/${o}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${r}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${s.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(l.Z,{language:"html"},d))}},82068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),i=a(74866),o=a(85162),r=a(25103);const p={sidebar_position:4,slug:"/aws-s3-multipart"},s="AWS S3 Multipart",u={unversionedId:"uploader/aws-s3-multipart",id:"uploader/aws-s3-multipart",title:"AWS S3 Multipart",description:"The @uppy/aws-s3-multipart plugin can be used to upload files directly to an",source:"@site/docs/uploader/aws-s3-multipart.mdx",sourceDirName:"uploader",slug:"/aws-s3-multipart",permalink:"/docs/aws-s3-multipart",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/aws-s3-multipart.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/aws-s3-multipart"},sidebar:"tutorialSidebar",previous:{title:"AWS S3",permalink:"/docs/aws-s3"},next:{title:"XHR",permalink:"/docs/xhr-upload"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Setting up your S3 bucket",id:"setting-up-your-s3-bucket",level:3},{value:"Use with your own server",id:"use-with-your-own-server",level:3},{value:"Use with Companion",id:"use-with-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>retryDelays</code>",id:"retrydelays",level:4},{value:"<code>getChunkSize(file)</code>",id:"getchunksizefile",level:4},{value:"<code>createMultipartUpload(file)</code>",id:"createmultipartuploadfile",level:4},{value:"<code>listParts(file, { uploadId, key })</code>",id:"listpartsfile--uploadid-key-",level:4},{value:"<code>signPart(file, partData)</code>",id:"signpartfile-partdata",level:4},{value:"<code>abortMultipartUpload(file, { uploadId, key })</code>",id:"abortmultipartuploadfile--uploadid-key-",level:4},{value:"<code>completeMultipartUpload(file, { uploadId, key, parts })</code>",id:"completemultipartuploadfile--uploadid-key-parts-",level:4},{value:"<code>allowedMetaFields: null</code>",id:"allowedmetafields-null",level:4},{value:"<code>prepareUploadParts(file, partData)</code>",id:"prepareuploadpartsfile-partdata",level:4},{value:"<code>shouldUseMultipart(file)</code>",id:"shouldusemultipartfile",level:4},{value:"<code>getUploadParameters(file)</code>",id:"getuploadparametersfile",level:4}],h={toc:m},k="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aws-s3-multipart"},"AWS S3 Multipart"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," plugin can be used to upload files directly to an\nS3 bucket (or S3-compatible provider) using S3\u2019s Multipart uploader."),(0,l.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read\n\u201c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,l.kt)("p",null,"You can use this plugin when you prefer a ",(0,l.kt)("em",{parentName:"p"},"client-to-storage")," over a\n",(0,l.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/transloadit"},"Transloadit")," or\n",(0,l.kt)("a",{parentName:"p",href:"/docs/tus"},"Tus"),") setup. This may in some cases be preferable, for instance, to\nreduce costs or the complexity of running a server and load balancer with\n",(0,l.kt)("a",{parentName:"p",href:"/docs/tus"},"Tus"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," starts to become valuable for larger files\n(100","\xa0","MB+) as it uploads a single object as a set of parts. This has certain\nbenefits, such as improved throughput (uploading parts in parallel) and quick\nrecovery from network issues (only the failed parts need to be retried). The\ndownside is request overhead, as it needs to do creation, signing, and\ncompletion requests besides the upload requests. For example, if you are\nuploading files that are only a couple kilobytes with a 100ms roundtrip latency,\nyou are spending 400ms on overhead and only a few milliseconds on uploading."),(0,l.kt)("p",null,"If you are uploading large files (100","\xa0","MB+), we recommend\n",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart"),", otherwise ",(0,l.kt)("a",{parentName:"p",href:"/docs/aws-s3"},(0,l.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/aws-s3-multipart\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/aws-s3-multipart\n"))),(0,l.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, AwsS3Multipart } from "{{UPPY_JS_URL}}"\n        new Uppy().use(AwsS3Multipart, { /* see options */ })\n      '))),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("h3",{id:"setting-up-your-s3-bucket"},"Setting up your S3 bucket"),(0,l.kt)("p",null,"To use this plugin with S3 we need to setup a bucket with the right permissions\nand CORS settings."),(0,l.kt)("p",null,"S3 buckets do not allow public uploads for security reasons. To allow Uppy and\nthe browser to upload directly to a bucket, its CORS permissions need to be\nconfigured."),(0,l.kt)("p",null,"CORS permissions can be found in the\n",(0,l.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/home"},"S3 Management Console"),". Click the\nbucket that will receive the uploads, then go into the ",(0,l.kt)("inlineCode",{parentName:"p"},"Permissions")," tab and\nselect the ",(0,l.kt)("inlineCode",{parentName:"p"},"CORS configuration")," button. A JSON document will be shown that\ndefines the CORS configuration. (AWS used to use XML but now only allow JSON).\nMore information about the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/ManageCorsUsing.html"},"S3 CORS format here"),"."),(0,l.kt)("p",null,"The configuration required for Uppy and Companion is this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "AllowedOrigins": ["https://my-app.com"],\n        "AllowedMethods": ["GET", "PUT"],\n        "MaxAgeSeconds": 3000,\n        "AllowedHeaders": [\n            "Authorization",\n            "x-amz-date",\n            "x-amz-content-sha256",\n            "content-type"\n        ],\n        "ExposeHeaders": ["ETag"]\n    },\n    {\n        "AllowedOrigins": ["*"],\n        "AllowedMethods": ["GET"],\n        "MaxAgeSeconds": 3000\n    }\n]\n')),(0,l.kt)("p",null,"A good practice is to use two CORS rules: one for viewing the uploaded files,\nand one for uploading files. This is done above where the first object in the\narray defines the rules for uploading, and the second for viewing. The example\nabove ",(0,l.kt)("strong",{parentName:"p"},"makes files publically viewable"),". You can change it according to your\nneeds."),(0,l.kt)("p",null,"If you are using an IAM policy to allow access to the S3 bucket, the policy must\nhave at least the ",(0,l.kt)("inlineCode",{parentName:"p"},"s3:PutObject")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"s3:PutObjectAcl")," permissions scoped to the\nbucket in question. In-depth documentation about CORS rules is available on the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"},"AWS documentation site"),"."),(0,l.kt)("h3",{id:"use-with-your-own-server"},"Use with your own server"),(0,l.kt)("p",null,"The recommended approach is to integrate ",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," with your own\nserver. You will need to do the following things:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#setting-up-your-s3-bucket"},"Setup up a S3 bucket")),(0,l.kt)("li",{parentName:"ol"},"Create endpoints in your server. You can create them as edge functions (such\nas AWS Lambdas), inside Next.js as an API route, or wherever your server runs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POST")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"/uppy/s3"),": create the multipart upload"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id"),": get the uploaded parts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id/:partNumber"),": sign the part and return a pre-signed\nURL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POST")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id/complete"),": complete the multipart upload"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id"),": abort the multipart upload"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/main/examples/aws-nodejs/public/index.html"},"Setup Uppy"))),(0,l.kt)("h3",{id:"use-with-companion"},"Use with Companion"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," has S3 routes built-in for a plug-and-play\nexperience with Uppy."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Generally it\u2019s better for access control, observability, and scaling to\nintegrate ",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," with your own server. You may want to use\n",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," for creating, signing, and completing your S3\nuploads if you already need Companion for remote files (such as from Google\nDrive). Otherwise it\u2019s not worth the hosting effort.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport AwsS3Multipart from '@uppy/aws-s3-multipart';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(AwsS3Multipart, { companionUrl: 'http://companion.uppy.io' });\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("h4",{id:"limit"},(0,l.kt)("inlineCode",{parentName:"h4"},"limit")),(0,l.kt)("p",null,"The maximum amount of files to upload in parallel (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"6"),")."),(0,l.kt)("p",null,"Note that the amount of files is not the same as the amount of concurrent\nconnections. Multipart uploads can use many requests per file. For example, for\na 100 MB file with a part size of 5 MB:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 creation request"),(0,l.kt)("li",{parentName:"ul"},"100/5 = 20 sign requests"),(0,l.kt)("li",{parentName:"ul"},"100/5 = 20 upload requests"),(0,l.kt)("li",{parentName:"ul"},"1 complete request")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Unless you have a good reason and are well informed about the average internet\nspeed of your users, do not set this higher. S3 uses HTTP/1.1, which means a\nlimit to concurrent connections and your uploads may expire before they are\nuploaded.")),(0,l.kt)("h4",{id:"companionurl"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,l.kt)("p",null,"URL to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,l.kt)("h4",{id:"companionheaders"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,l.kt)("p",null,"Custom headers that should be sent along to ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,l.kt)("h4",{id:"companioncookiesrule"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,l.kt)("p",null,"This option correlates to the\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,l.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,l.kt)("h4",{id:"retrydelays"},(0,l.kt)("inlineCode",{parentName:"h4"},"retryDelays")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"retryDelays")," are the intervals in milliseconds used to retry a failed chunk\n(",(0,l.kt)("inlineCode",{parentName:"p"},"array"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 1000, 3000, 5000]"),")."),(0,l.kt)("p",null,"This is also used for ",(0,l.kt)("a",{parentName:"p",href:"#signpartfile-partdata"},(0,l.kt)("inlineCode",{parentName:"a"},"signPart()")),". Set to ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," to\ndisable automatic retries, and fail instantly if any chunk fails to upload."),(0,l.kt)("h4",{id:"getchunksizefile"},(0,l.kt)("inlineCode",{parentName:"h4"},"getChunkSize(file)")),(0,l.kt)("p",null,"A function that returns the minimum chunk size to use when uploading the given\nfile."),(0,l.kt)("p",null,"The S3 Multipart plugin uploads files in chunks. Chunks are sent in batches to\nhave presigned URLs generated with ",(0,l.kt)("a",{parentName:"p",href:"#signpartfile-partdata"},(0,l.kt)("inlineCode",{parentName:"a"},"signPart()")),". To\nreduce the amount of requests for large files, you can choose a larger chunk\nsize, at the cost of having to re-upload more data if one chunk fails to upload."),(0,l.kt)("p",null,"S3 requires a minimum chunk size of 5MB, and supports at most 10,000 chunks per\nmultipart upload. If ",(0,l.kt)("inlineCode",{parentName:"p"},"getChunkSize()")," returns a size that\u2019s too small, Uppy will\nincrease it to S3\u2019s minimum requirements."),(0,l.kt)("h4",{id:"createmultipartuploadfile"},(0,l.kt)("inlineCode",{parentName:"h4"},"createMultipartUpload(file)")),(0,l.kt)("p",null,"A function that calls the S3 Multipart API to create a new upload."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file")," is the file object from Uppy\u2019s state. The most relevant keys are\n",(0,l.kt)("inlineCode",{parentName:"p"},"file.name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"file.type"),"."),(0,l.kt)("p",null,"Return a Promise for an object with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID returned by S3."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key for the file. This needs to be returned to allow it to\nbe different from the ",(0,l.kt)("inlineCode",{parentName:"li"},"file.name"),".")),(0,l.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,l.kt)("h4",{id:"listpartsfile--uploadid-key-"},(0,l.kt)("inlineCode",{parentName:"h4"},"listParts(file, { uploadId, key })")),(0,l.kt)("p",null,"A function that calls the S3 Multipart API to list the parts of a file that have\nalready been uploaded."),(0,l.kt)("p",null,"Receives the ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload.")),(0,l.kt)("p",null,"Return a Promise for an array of S3 Part objects, as returned by the S3\nMultipart API. Each object has keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartNumber")," - The index in the file of the uploaded part."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Size")," - The size of the part in bytes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETag")," - The ETag of the part, used to identify it when completing the\nmultipart upload and combining all parts into a single file.")),(0,l.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,l.kt)("h4",{id:"signpartfile-partdata"},(0,l.kt)("inlineCode",{parentName:"h4"},"signPart(file, partData)")),(0,l.kt)("p",null,"A function that generates a signed URL for the specified part number. The\n",(0,l.kt)("inlineCode",{parentName:"p"},"partData")," argument is an object with the keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key in the S3 bucket."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"partNumber")," - can\u2019t be zero."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body")," \u2013 The data that will be signed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signal")," \u2013 An ",(0,l.kt)("inlineCode",{parentName:"li"},"AbortSignal")," that may be used to abort an ongoing request.")),(0,l.kt)("p",null,"This function should return a object, or a promise that resolves to an object,\nwith the following keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url")," \u2013 the presigned URL, as a ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers")," \u2013 ",(0,l.kt)("strong",{parentName:"li"},"(Optional)")," Custom headers to send along with the request to S3\nendpoint.")),(0,l.kt)("p",null,"An example of what the return value should look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=1&...",\n    "headers": { "Content-MD5": "foo" }\n}\n')),(0,l.kt)("h4",{id:"abortmultipartuploadfile--uploadid-key-"},(0,l.kt)("inlineCode",{parentName:"h4"},"abortMultipartUpload(file, { uploadId, key })")),(0,l.kt)("p",null,"A function that calls the S3 Multipart API to abort a Multipart upload, and\nremoves all parts that have been uploaded so far."),(0,l.kt)("p",null,"Receives the ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload.")),(0,l.kt)("p",null,"This is typically called when the user cancels an upload. Cancellation cannot\nfail in Uppy, so the result of this function is ignored."),(0,l.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,l.kt)("h4",{id:"completemultipartuploadfile--uploadid-key-parts-"},(0,l.kt)("inlineCode",{parentName:"h4"},"completeMultipartUpload(file, { uploadId, key, parts })")),(0,l.kt)("p",null,"A function that calls the S3 Multipart API to complete a Multipart upload,\ncombining all parts into a single object in the S3 bucket."),(0,l.kt)("p",null,"Receives the ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parts")," - S3-style list of parts, an array of objects with ",(0,l.kt)("inlineCode",{parentName:"li"},"ETag")," and\n",(0,l.kt)("inlineCode",{parentName:"li"},"PartNumber")," properties. This can be passed straight to S3\u2019s Multipart API.")),(0,l.kt)("p",null,"Return a Promise for an object with properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"location")," - ",(0,l.kt)("strong",{parentName:"li"},"(Optional)")," A publically accessible URL to the object in the\nS3 bucket.")),(0,l.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,l.kt)("h4",{id:"allowedmetafields-null"},(0,l.kt)("inlineCode",{parentName:"h4"},"allowedMetaFields: null")),(0,l.kt)("p",null,"Pass an array of field names to limit the metadata fields that will be added to\nupload as query parameters."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set this to ",(0,l.kt)("inlineCode",{parentName:"li"},"['name']")," to only send the ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,l.kt)("li",{parentName:"ul"},"Set this to ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," (the default) to send ",(0,l.kt)("em",{parentName:"li"},"all")," metadata fields."),(0,l.kt)("li",{parentName:"ul"},"Set this to an empty array ",(0,l.kt)("inlineCode",{parentName:"li"},"[]")," to not send any fields.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Deprecated options"),(0,l.kt)("h4",{id:"prepareuploadpartsfile-partdata"},(0,l.kt)("inlineCode",{parentName:"h4"},"prepareUploadParts(file, partData)")),(0,l.kt)("p",null,"A function that generates a batch of signed URLs for the specified part numbers."),(0,l.kt)("p",null,"Receives the ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state. The ",(0,l.kt)("inlineCode",{parentName:"p"},"partData")," argument is an\nobject with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - The object key in the S3 bucket."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parts")," - An array of objects with the part number and chunk\n(",(0,l.kt)("inlineCode",{parentName:"li"},"Array<{ number: number, chunk: blob }>"),"). ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," can\u2019t be zero.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"prepareUploadParts")," should return a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," with an ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," with keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"presignedUrls")," - A JavaScript object with the part numbers as keys and the\npresigned URL for each part as the value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers")," - ",(0,l.kt)("strong",{parentName:"li"},"(Optional)")," Custom headers to send along with every request per\npart (",(0,l.kt)("inlineCode",{parentName:"li"},"{ 1: { 'Content-MD5': 'hash' }}"),"). These are (1-based) indexed by part\nnumber too so you can for instance send the MD5 hash validation for each part\nto S3.")),(0,l.kt)("p",null,"An example of what the return value should look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "presignedUrls": {\n        "1": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=1&...",\n        "2": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=2&...",\n        "3": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=3&..."\n    },\n    "headers": {\n        "1": { "Content-MD5": "foo" },\n        "2": { "Content-MD5": "bar" },\n        "3": { "Content-MD5": "baz" }\n    }\n}\n')),(0,l.kt)("p",null,"If an error occured, reject the ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," with an ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," with the following\nkeys:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ "source": { "status": 500 } }\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"status")," is the HTTP code and is required for determining whether to retry the\nrequest. ",(0,l.kt)("inlineCode",{parentName:"p"},"prepareUploadParts")," will be retried if the code is ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"409"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"423"),",\nor between ",(0,l.kt)("inlineCode",{parentName:"p"},"500")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"600"),".")),(0,l.kt)("h4",{id:"shouldusemultipartfile"},(0,l.kt)("inlineCode",{parentName:"h4"},"shouldUseMultipart(file)")),(0,l.kt)("p",null,"A boolean, or a function that returns a boolean which is called for each file\nthat is uploaded with the corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"UppyFile")," instance as argument."),(0,l.kt)("p",null,"By default, all files are uploaded as multipart. In a future version, all files\nwith a ",(0,l.kt)("inlineCode",{parentName:"p"},"file.size")," \u2264 100 MiB will be uploaded in a single chunk, all files\nlarger than that as multipart."),(0,l.kt)("p",null,"Here\u2019s how to use it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(AwsS3Multipart, {\n    shouldUseMultipart(file) {\n        // Use multipart only for files larger than 100MiB.\n        return file.size > 100 * 2 ** 20;\n    },\n});\n")),(0,l.kt)("h4",{id:"getuploadparametersfile"},(0,l.kt)("inlineCode",{parentName:"h4"},"getUploadParameters(file)")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/aws-s3"},(0,l.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),". This option is used only for non-multipart uploads."))}c.isMDXComponent=!0}}]);