"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[488],{11530:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(85893),o=n(11151);const i={title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",date:new Date("2017-11-24T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2017/10/0.21"},t=void 0,l={permalink:"/blog/2017/10/0.21",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-10-0.21.md",source:"@site/blog/2017-10-0.21.md",title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",description:"Hi all! We\u2019ve been busy with Halloween, but also another release, so here is",date:"2017-11-24T00:00:00.000Z",formattedDate:"November 24, 2017",tags:[],readingTime:5.6,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",date:"2017-11-24T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2017/10/0.21"},unlisted:!1,prevItem:{title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",permalink:"/blog/2017/12/0.22"},nextItem:{title:"Uppy 0.20: React, Retry & Time Travel",permalink:"/blog/2017/10/0.20"}},a={authorsImageUrls:[void 0]},d=[{value:"Accessibility",id:"accessibility",level:2},{value:"Returning <code>{ successful, failed }</code> from <code>uppy.upload()</code>",id:"returning--successful-failed--from-uppyupload",level:2},{value:"End to end tests",id:"end-to-end-tests",level:2},{value:"More secure Uppy Server",id:"more-secure-uppy-server",level:2},{value:"Migration to Dropbox v2 API",id:"migration-to-dropbox-v2-api",level:2},{value:"Custom plugin id",id:"custom-plugin-id",level:2},{value:"Misc good stuff",id:"misc-good-stuff",level:2},{value:"Full Changelog",id:"full-changelog",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Hi all! We\u2019ve been busy with Halloween, but also another release, so here is\nUppy ",(0,r.jsx)(s.code,{children:"0.21"}),"! This one improves accessibility, features new end-to-end tests and\nimproved security in Uppy Server."]}),"\n",(0,r.jsx)(s.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsx)(s.p,{children:"One of the goals we\u2019ve set out to achieve with Uppy was to make an accessibe\nfile upload widget, and in this release we\u2019ve achieved some more progress in\nthis area:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Dashboard modal dialog now handles focus better (it\u2019s trapped inside the modal\nwhile open);"}),"\n",(0,r.jsx)(s.li,{children:"First button is in focus right after the modal dialog is open;"}),"\n",(0,r.jsx)(s.li,{children:"More (aria-)labels have been added;"}),"\n",(0,r.jsx)(s.li,{children:"Files from remote providers are now selectable with a keyboard."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"We plan to continue gradually improving in the accessibility area."}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/414",children:"#414 PR"})," for details."]}),"\n",(0,r.jsxs)(s.h2,{id:"returning--successful-failed--from-uppyupload",children:["Returning ",(0,r.jsx)(s.code,{children:"{ successful, failed }"})," from ",(0,r.jsx)(s.code,{children:"uppy.upload()"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking change"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"uppy.upload()"})," promise now resolves to a ",(0,r.jsx)(s.code,{children:"result"})," object with two arrays of\nfiles: ",(0,r.jsx)(s.code,{children:"{ successful, failed }"}),". This lets you handle succesful and failed\nuploads in one go:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"uppy.upload().then((result) => {\n\tconsole.info('Successful uploads:', result.successful);\n\tif (result.failed.length > 0) {\n\t\tconsole.error('Errors:');\n\t\tresult.failed.forEach((file) => {\n\t\t\tconsole.error(file.error);\n\t\t});\n\t}\n});\n\n// or\n\nuppy.on('core:complete', ({ successful, failed }) => {\n\tif (failed.length === 0) {\n\t\tconsole.log('UPLOAD SUCCESSFUL!!!');\n\t} else {\n\t\tconsole.warn('UPLOAD FAILED!!!');\n\t}\n\tconsole.log('successful files:', successful);\n\tconsole.log('failed files:', failed);\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"https://uppy.io/docs/uppy/#uppy-upload",children:(0,r.jsx)(s.code,{children:"uppy.upload()"})})," and\n",(0,r.jsx)(s.a,{href:"https://uppy.io/docs/uppy/#core-complete",children:(0,r.jsx)(s.code,{children:"core:complete"})})," in docs, as well as\n",(0,r.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/404",children:"#404 PR"})," for more details."]}),"\n",(0,r.jsx)(s.h2,{id:"end-to-end-tests",children:"End to end tests"}),"\n",(0,r.jsxs)(s.p,{children:["We\u2019ve refactored end to end tests to use ",(0,r.jsx)(s.a,{href:"http://webdriver.io",children:"Webdriver.io"}),",\nand for the occasion added tests for Edge, Safari, Android and iOS. Now tests on\nTravis and Sauce Labs (thanks for the open source tier!) run smoothly and it\u2019s\neasier to alter them or write new ones."]}),"\n",(0,r.jsx)(s.h2,{id:"more-secure-uppy-server",children:"More secure Uppy Server"}),"\n",(0,r.jsx)(s.p,{children:"We made sure access tokens from third-party providers, such as Google Drive or\nInstagram, are not stored on the server with Uppy Server, and kept in your\nbrowser instead. Then, when you want to pick a file from your Instagram, the\ntoken is used to make a request to Uppy Server, which is in turn used by Uppy\nServer to communicate with Instagram."}),"\n",(0,r.jsx)(s.p,{children:"Data validation is also now done during intiation of an upload, to prevent\ncorrupt data from triggering funny behaviours on the server. :)"}),"\n",(0,r.jsx)(s.p,{children:"And, while we were at this, we also made sure all sensitive data is masked in\nrequest logs."}),"\n",(0,r.jsx)(s.h2,{id:"migration-to-dropbox-v2-api",children:"Migration to Dropbox v2 API"}),"\n",(0,r.jsxs)(s.p,{children:["Since the\n",(0,r.jsx)(s.a,{href:"https://blogs.dropbox.com/developers/2017/09/api-v1-shutdown-details/",children:"deprecation of Dropbox v1 API"}),",\nuppy/uppy-server have now been updated to use the v2 API. It is implemented to\nwork closely as its previous implementation so there should be no worries."]}),"\n",(0,r.jsx)(s.h2,{id:"custom-plugin-id",children:"Custom plugin id"}),"\n",(0,r.jsxs)(s.p,{children:["Up until now you could only use a plugin once with an Uppy instance. Now you can\npass custom ",(0,r.jsx)(s.code,{children:"id"})," for any plugin (though this has to be manually implemented in\nany new plugin). This allows using, for example, two ",(0,r.jsx)(s.code,{children:"StatusBar"}),"s, one inside\nthe ",(0,r.jsx)(s.code,{children:"Dashboard"}),", and one somewhere on the page, visible even when ",(0,r.jsx)(s.code,{children:"Dashboard"})," is\nclosed."]}),"\n",(0,r.jsx)(s.p,{children:"Can be used like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// one StatusBar comes included in the Dashboard, another will be mounted on the page\n.use(Dashboard {...})\n.use(StatusBar, { id: 'PageStatusBar', target: 'body' }\n"})}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/418",children:"#418 PR"})," for details."]}),"\n",(0,r.jsx)(s.h2,{id:"misc-good-stuff",children:"Misc good stuff"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Migrated Dropbox in Uppy Server to use v2 API."}),"\n",(0,r.jsx)(s.li,{children:"Fixed generating thumbnails for images with transparent background."}),"\n",(0,r.jsxs)(s.li,{children:["We are now using ",(0,r.jsx)(s.a,{href:"https://github.com/goto-bus-stop/tinyify",children:(0,r.jsx)(s.code,{children:"tinyify"})}),"(by our\nown ",(0,r.jsx)(s.a,{href:"https://github.com/goto-bus-stop",children:"@goto-bus-stop"}),") for the Uppy bundle to\nmake it smaller and more efficient."]}),"\n",(0,r.jsx)(s.li,{children:"Instead of restarting only the file upload itself, start an entirely new\nupload for retries. Fixes retrying uploads with processing plugins."}),"\n",(0,r.jsxs)(s.li,{children:["The S3 plugin now includes XHRUpload. ",(0,r.jsxs)(s.strong,{children:["\u26a0\ufe0f Breaking change: you should remove\n",(0,r.jsx)(s.code,{children:".use(XHRUpload)"})," when using S3."]})]}),"\n",(0,r.jsxs)(s.li,{children:["XHRUpload now includes a timeout ",(0,r.jsx)(s.code,{children:"opts.timeout = 30000"}),", after which it errors\nand offers a retry (retry UI supported in Dashboard), see\n",(0,r.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/378",children:"#378"})," for more."]}),"\n",(0,r.jsxs)(s.li,{children:["Renamed ",(0,r.jsx)(s.code,{children:"RestoreFiles"})," \u2192 ",(0,r.jsx)(s.code,{children:"GoldenRetriever"}),", and ",(0,r.jsx)(s.code,{children:"Tus10"})," \u2192 ",(0,r.jsx)(s.code,{children:"Tus"}),". ",(0,r.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking\nchange: please make sure to use the new names when setting up plugins"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"The Webcam plugin has been refactored. There\u2019s no flash fallback now, it works\nin modern browsers only, and the Webcam tab won\u2019t appear in the Dashboard if a\ncamera is not supported on the device."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"full-changelog",children:"Full Changelog"}),"\n",(0,r.jsxs)(s.p,{children:["Here is the full list of changes for version ",(0,r.jsx)(s.code,{children:"0.21.0"})," (and patches ",(0,r.jsx)(s.code,{children:"0.20.1"}),",\n",(0,r.jsx)(s.code,{children:"0.20.2"}),", ",(0,r.jsx)(s.code,{children:"0.20.3"}),"):"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'accessibility: add tabindex="0" to buttons and tabs, aria-labels, focus (#414\n/ @arturi)'}),"\n",(0,r.jsxs)(s.li,{children:["core: allow setting custom ",(0,r.jsx)(s.code,{children:"id"})," for plugins to allow a plugin to be used\nmultiple times (#418 / @arturi)"]}),"\n",(0,r.jsx)(s.li,{children:"core: do not check isPreviewSupported for unknown filetypes (#417 /\n@sadovnychyi)"}),"\n",(0,r.jsxs)(s.li,{children:["core: refactor ",(0,r.jsx)(s.code,{children:"uppy-base"})," (#382 / @goto-bus-stop)"]}),"\n",(0,r.jsx)(s.li,{children:"core: remove functions from state object (#408 / @goto-bus-stop)"}),"\n",(0,r.jsxs)(s.li,{children:["core: return ",(0,r.jsx)(s.code,{children:"{ successful, failed }"})," from ",(0,r.jsx)(s.code,{children:"uppy.upload()"})," (#404 /\n@goto-bus-stop)"]}),"\n",(0,r.jsx)(s.li,{children:"core: update state with error messages rather than error objects (#406 /\n@richardwillars)"}),"\n",(0,r.jsxs)(s.li,{children:["core: use ",(0,r.jsx)(s.code,{children:"tinyify"})," for the unpkg bundle. (#371 / @goto-bus-stop)"]}),"\n",(0,r.jsxs)(s.li,{children:["dashboard: Fix pasting files, default ",(0,r.jsx)(s.code,{children:"image"})," file name, add type to meta,\nfile type refactor (#395 / @arturi)"]}),"\n",(0,r.jsx)(s.li,{children:"dragdrop: Fix of the .uppy-DragDrop-inner spacing on small screens (#405 /\n@nqst)"}),"\n",(0,r.jsxs)(s.li,{children:["react: fix ",(0,r.jsx)(s.code,{children:"uppy"})," PropType, closes (#416 / @goto-bus-stop)"]}),"\n",(0,r.jsxs)(s.li,{children:["s3: automatically wrap XHRUpload. Users should remove ",(0,r.jsx)(s.code,{children:".use(XHRUpload)"})," when\nusing S3. (#408 / @goto-bus-stop)"]}),"\n",(0,r.jsx)(s.li,{children:"test: refactored end-to-end tests to not use website, switched to\nWebdriver.io, added tests for Edge, Safari, Android and iOS (#410 / @arturi)"}),"\n",(0,r.jsx)(s.li,{children:"tus: Rename Tus10 \u2192 Tus (#285 / @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"uppy-serer: mask sensitive data from request logs (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(s.li,{children:"uppy-server: add request body validators (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(s.li,{children:"uppy-server: migrate dropbox to use v2 API (#386 / @ifedapoolarewaju)"}),"\n",(0,r.jsx)(s.li,{children:"uppy-server: store tokens in user\u2019s browser only (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(s.li,{children:"webcam: only show the webcam tab when browser support is available (media\nrecorder API) (#421 / @arturi, @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"webcam: simplify and refactor webcam plugin (modern browser APIs only) (#382 /\n@goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"xhrupload: set a timeout in the onprogress event handler to detect stale\nnetwork (#378 / @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"uppy-server: allow flexible whitelist endpoint protocols (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(s.li,{children:"core: Start a completely new upload when retrying. (#390 / @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"dashboard: Show errors that occurred during processing on the file items.\n(#391 / @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"transloadit: Mark files as having errored if their assembly fails. (#392 /\n@goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"core: Clear file upload progress when an upload starts. (#393 /\n@goto-bus-stop)"}),"\n",(0,r.jsxs)(s.li,{children:["tus: Clean up ",(0,r.jsx)(s.code,{children:"tus.Upload"})," instance and events when an upload starts,\nfinishes, or fails. (#390 / @goto-bus-stop)"]}),"\n",(0,r.jsxs)(s.li,{children:["docs: fix ",(0,r.jsx)(s.code,{children:"getMetaFromForm"})," documentation (@arturi)"]}),"\n",(0,r.jsx)(s.li,{children:"core: fix generating thumbnails for images with transparent background (#380 /\n@goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"transloadit: use Translator class for localised strings (#383 /\n@goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"goldenretriever: don't crash when required server-side (#384 / @goto-bus-stop)"}),"\n",(0,r.jsx)(s.li,{children:"redux: add plugin for syncing uppy state with a Redux store (#376 /\n@richardwillars)"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The Uppy Team"})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(67294);const o={},i=r.createContext(o);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);