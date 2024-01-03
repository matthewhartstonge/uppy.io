"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2854],{77374:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(85893),i=r(11151);const o={title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",date:new Date("2017-12-23T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/0.22/uppy-dashboard-updated.jpg",published:!0,slug:"2017/12/0.22"},t=void 0,d={permalink:"/blog/2017/12/0.22",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-12-0.22.md",source:"@site/blog/2017-12-0.22.md",title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",description:"Uppy is featured on Product Hunt!",date:"2017-12-23T00:00:00.000Z",formattedDate:"December 23, 2017",tags:[],readingTime:7.895,hasTruncateMarker:!1,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",date:"2017-12-23T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/0.22/uppy-dashboard-updated.jpg",published:!0,slug:"2017/12/0.22"},unlisted:!1,prevItem:{title:"Uppy 0.23: Import from Url, refactored thumbnail generation, XHR bundle",permalink:"/blog/2018/02/0.23"},nextItem:{title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",permalink:"/blog/2017/10/0.21"}},a={authorsImageUrls:[void 0]},l=[{value:"Preact and JSX",id:"preact-and-jsx",level:2},{value:"Core and plugins refactor",id:"core-and-plugins-refactor",level:2},{value:"Refreshed Dashboard UI",id:"refreshed-dashboard-ui",level:2},{value:"Select multiple files in providers",id:"select-multiple-files-in-providers",level:2},{value:"Stores",id:"stores",level:2},{value:"Form",id:"form",level:2},{value:"Encoding support in GoldenRetriever",id:"encoding-support-in-goldenretriever",level:2},{value:"Type-safe Server",id:"type-safe-server",level:2},{value:"And there\u2019s more",id:"and-theres-more",level:2},{value:"Full Changelog",id:"full-changelog",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",center:"center",code:"code",h2:"h2",iframe:"iframe",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["Uppy is ",(0,n.jsx)(s.a,{href:"https://www.producthunt.com/posts/uppy-io",children:"featured on Product Hunt"}),"!\nTo our fellow hunters: welcome! Quick intro: Uppy is the next open source file\nuploader for web browsers. We're very close to launching 1.0 and would love to\nget your feedback in, leave your thoughts on Product Hunt or start a discussion\nbelow."]})}),"\n",(0,n.jsxs)(s.p,{children:["Hi all! It\u2019s New Year and Christmas time, and this year Santa is brining you\nUppy ",(0,n.jsx)(s.code,{children:"0.22"})," \ud83c\udf81 This release packs a lot of neat stuff, but it also breaks things\nin quite a few places, so please read on."]}),"\n",(0,n.jsx)(s.p,{children:"And, if you are celebrating, happy holidays from the Uppy Team! \ud83c\udf84"}),"\n",(0,n.jsx)(s.h2,{id:"preact-and-jsx",children:"Preact and JSX"}),"\n",(0,n.jsxs)(s.p,{children:["We\u2019ve been happy using ",(0,n.jsx)(s.code,{children:"yo-yo"})," and ",(0,n.jsx)(s.code,{children:"hyperx"})," template strings in our views for\nquite a while, but decided to try something more stable. Preact has most of the\ngreat ideas of React, plus smaller file size as well as a few good ideas of its\nown."]}),"\n",(0,n.jsx)(s.p,{children:"All views have been refactored to utilize JSX. We actually liked hyperx a lot,\nbut JSX has better tooling and syntax highlighting support. It also seems to be\nthe standard in the React community."}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/451",children:"#451 PR"})," for details on why\nwe switched and discussion around the process."]}),"\n",(0,n.jsx)(s.h2,{id:"core-and-plugins-refactor",children:"Core and plugins refactor"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," We\u2019ve renamed the ",(0,n.jsx)(s.code,{children:"core"})," object to ",(0,n.jsx)(s.code,{children:"uppy"})," in plugins. So\ninstead of ",(0,n.jsx)(s.code,{children:"this.core.state"})," we now use ",(0,n.jsx)(s.code,{children:"this.uppy.state"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," Events have been renamed to remove the ",(0,n.jsx)(s.code,{children:"core:"})," prefix. So\n",(0,n.jsx)(s.code,{children:"core:success"})," becomes just ",(0,n.jsx)(s.code,{children:"success"}),", and this also results in now having\n",(0,n.jsx)(s.code,{children:"error"}),", ",(0,n.jsx)(s.code,{children:"upload-started"})," and so on. Prefixed event names are used for\nplugin-specific event sometimes, like ",(0,n.jsx)(s.code,{children:"dashboard:file-card"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," CSS class names have been altered to use the ",(0,n.jsx)(s.code,{children:"uppy-"}),"\nnamespace, so ",(0,n.jsx)(s.code,{children:".UppyDashboard-files"})," becomes ",(0,n.jsx)(s.code,{children:".uppy-Dashboard-files"})," and so\non."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," ",(0,n.jsx)(s.code,{children:"getMetaFromForm"})," was removed in favor of the new ",(0,n.jsx)(s.code,{children:"Form"}),"\nplugin (see below)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," ",(0,n.jsx)(s.code,{children:"MetaData"})," plugin was removed in favor of the ",(0,n.jsx)(s.code,{children:"metaFields"}),"\noption in Dashboard, ",(0,n.jsx)(s.a,{href:"https://uppy.io/docs/dashboard/#metaFields",children:"see docs"}),"\nfor more details."]}),"\n",(0,n.jsxs)(s.li,{children:["Plugins now use ",(0,n.jsx)(s.code,{children:"this.el"})," to refer to their UI element instead of\n",(0,n.jsx)(s.code,{children:"this.target"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"setPluginState"})," and ",(0,n.jsx)(s.code,{children:"getPluginState"})," are now used in Providers."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"refreshed-dashboard-ui",children:"Refreshed Dashboard UI"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Uppy Dashboard UI with 3 files selected",src:r(31058).Z+"",width:"1500",height:"914"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"File cards are simpler, we\u2019ve removed the excess white backgrounds, improved\nthe remove icon, reduced paddings, added slight shadows."}),"\n",(0,n.jsx)(s.li,{children:"Cicular upload button in the Dashboard has been moved to the StatusBar. It\u2019s\nalso not circular anymore, and there\u2019s no cloud icon. Plain and simple."}),"\n",(0,n.jsx)(s.li,{children:"Redesigned \u201cretry\u201d and \u201cadd +1 file\u201d buttons."}),"\n",(0,n.jsxs)(s.li,{children:["Added ",(0,n.jsx)(s.code,{children:"metaFields"})," option: an array of settings for UI field objects, which\npreviousely lived in a separate ",(0,n.jsx)(s.code,{children:"MetaData"})," plugin:\n",(0,n.jsx)(s.code,{children:"{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }"}),",\n",(0,n.jsx)(s.a,{href:"https://uppy.io/docs/dashboard/#metaFields",children:"see docs"})," for more details."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"https://github.com/transloadit/uppy/pull/451",children:"#434 PR"})," for more screenshots\nand details."]}),"\n",(0,n.jsx)(s.h2,{id:"select-multiple-files-in-providers",children:"Select multiple files in providers"}),"\n",(0,n.jsxs)(s.p,{children:["Thanks to ",(0,n.jsx)(s.a,{href:"https://github.com/sadovnychyi",children:"@sadovnychyi"}),", you can now select\nmultiple files from remote providers like Google Drive and Instagram. You can\nalso select folders, and even range of files by holding ",(0,n.jsx)(s.code,{children:"shift"})," key when\nclicking on first and last item in range."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Uppy Dashboard UI with 3 files selected",src:r(4351).Z+"",width:"1500",height:"914"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://uppy.io/examples/dashboard/",children:"Check it out \u2192"})}),"\n",(0,n.jsx)(s.h2,{id:"stores",children:"Stores"}),"\n",(0,n.jsxs)(s.p,{children:["As you know, internally Uppy uses its own simple state management system with\n",(0,n.jsx)(s.code,{children:"getState"})," and ",(0,n.jsx)(s.code,{children:"setState"})," methods. In previous releases we\u2019ve added support for\nRedux via a plugin called ",(0,n.jsx)(s.code,{children:"Redux"}),", which mirrors all Uppy state to your Redux\napplication\u2019s state, and a plugin called ",(0,n.jsx)(s.code,{children:"ReduxDevTools"})," that connects to Redux\nDevTools and enables all the cool time traveling stuff."]}),"\n",(0,n.jsx)(s.p,{children:"We are excited to tell you that this release makes state management even more\nflexible by bringing support for external stores! Here\u2019s a quote from the docs:"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"By default, Uppy stores its internal state in an object."}),"\n",(0,n.jsx)(s.p,{children:"If your app uses a state management library such as Redux, it can be useful to\nhave Uppy store its state there instead\u2014that way, you could write custom\nuploader UI components in the same way as the other components in the\napplication."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Here\u2019s how that works:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const { createStore } = require('redux')\nconst ReduxStore = require('uppy/lib/store/ReduxStore')\n\nconst reducer = combineReducers({\n  ...reducers,\n  uppy: ReduxStore.reducer\n})\nconst store = createStore(reducer)\n\nconst uppy = Uppy({\n  store: ReduxStore({\n    store: store // That's a lot of stores!\n  })\n})\n...\n"})}),"\n",(0,n.jsx)(s.p,{children:"Now Uppy will use your app\u2019s Redux store instead of its own, so you have a\n\u201csingle source of truth\u201d \ud83d\udd2e"}),"\n",(0,n.jsxs)(s.p,{children:["Read ",(0,n.jsx)(s.a,{href:"https://uppy.io/docs/guides/custom-stores/",children:"more on stores"})," in docs."]}),"\n",(0,n.jsx)(s.h2,{id:"form",children:"Form"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Form"})," is a new plugin that can be used in conjunction with any other. Here\u2019s\nwhat it does:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Acquires metadata from a ",(0,n.jsx)(s.code,{children:"<form>"})," element of your choosing before the upload\nstarts in Uppy."]}),"\n",(0,n.jsx)(s.li,{children:"Injects result array of succesful and failed files back into the form."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," With this plugin we\u2019ve deprecated ",(0,n.jsx)(s.code,{children:"getMetaFromForm"})," option that\nused to be in all acquire plugins like Dashboard and DragDrop. Now you can just\nuse ",(0,n.jsx)(s.code,{children:"Form"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"uppy.use(Form, {\n\ttarget: '#my-form',\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Read ",(0,n.jsx)(s.a,{href:"https://uppy.io/docs/form/",children:"more about the Form plugin"})," in docs."]}),"\n",(0,n.jsx)(s.h2,{id:"encoding-support-in-goldenretriever",children:"Encoding support in GoldenRetriever"}),"\n",(0,n.jsxs)(s.p,{children:["Our browser crash / page refresh restore plugin ",(0,n.jsx)(s.code,{children:"GoldenRetriever"})," (read\n",(0,n.jsx)(s.a,{href:"https://uppy.io/docs/golden-retriever/",children:"more about it"}),") now supports correctly\nrestoring ",(0,n.jsx)(s.a,{href:"https://transloadit.com",children:"Transloadit"})," assemblies!"]}),"\n",(0,n.jsx)(s.p,{children:"Also, we\u2019ve fixed restoring from paused state. Now uploads will remain paused\nand not get out of sync."}),"\n",(0,n.jsx)(s.h2,{id:"type-safe-server",children:"Type-safe Server"}),"\n",(0,n.jsxs)(s.p,{children:["Uppy Server now uses TypeScript to do some type checking at compile time. This\nhelps spot some otherwise easy to miss runtime bugs. While the project\u2019s source\nis still written in JavaScript, the use of\n",(0,n.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files",children:"JSDoc specifications is leveraged by TypeScript"}),"\nto detect data types and mistakes with that, within the project."]}),"\n",(0,n.jsx)(s.p,{children:"Thanks to this approach a number of hidden bugs have already been identified and\nfixed, and it also makes Uppy Server very well documented. :)"}),"\n",(0,n.jsx)(s.h2,{id:"and-theres-more",children:"And there\u2019s more"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["New ",(0,n.jsx)(s.code,{children:"setFileState"})," method as a nice shorthand to update file-specific state."]}),"\n",(0,n.jsx)(s.li,{children:"Added more extensions for mimetype detection."}),"\n",(0,n.jsx)(s.li,{children:"More plugin documentation \ud83d\udc4d"}),"\n",(0,n.jsx)(s.li,{children:"Misc bugs fixes and improvements in Webcam, Dashboard, Provider, so things\nshould be more stable all around."}),"\n",(0,n.jsx)(s.li,{children:"Added an option to limit simultaneous uploads in XHRUpload."}),"\n",(0,n.jsx)(s.li,{children:"Fixed remote server error handler for uppy-server."}),"\n",(0,n.jsxs)(s.li,{children:["Added ",(0,n.jsx)(s.a,{href:"https://snyk.io/",children:"Snyk"})," to uppy-server to aid vulnerability detection."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"full-changelog",children:"Full Changelog"}),"\n",(0,n.jsxs)(s.p,{children:["Here is the full list of changes for version ",(0,n.jsx)(s.code,{children:"0.22.0"})," (and patch ",(0,n.jsx)(s.code,{children:"0.21.1"}),"):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: rendering engine switched from ",(0,n.jsx)(s.code,{children:"Yo-Yo"})," to ",(0,n.jsx)(s.code,{children:"Preact"}),", and\nall views from ",(0,n.jsx)(s.code,{children:"html"})," hyperx template strings to ",(0,n.jsx)(s.code,{children:"JSX"})," (#451 / @arturi)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: large refactor of Core and Plugins: ",(0,n.jsx)(s.code,{children:"setFileState"}),",\nmerge ",(0,n.jsx)(s.code,{children:"MetaData"})," plugin into ",(0,n.jsx)(s.code,{children:"Dashboard"}),', prefix "private" core methods with\nunderscores (@arturi / #438)']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: renamed ",(0,n.jsx)(s.code,{children:"core"})," to ",(0,n.jsx)(s.code,{children:"uppy"})," in plugins and what not. So\ninstead of ",(0,n.jsx)(s.code,{children:"this.core.state"})," we now use ",(0,n.jsx)(s.code,{children:"this.uppy.state"})," (#438 / @arturi)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: renamed events to remove ",(0,n.jsx)(s.code,{children:"core:"})," prefix, as been\nsuggested already. So: ",(0,n.jsx)(s.code,{children:"success"}),", ",(0,n.jsx)(s.code,{children:"error"}),", ",(0,n.jsx)(s.code,{children:"upload-started"})," and so on, and\nprefixed event names for plugins sometimes, like ",(0,n.jsx)(s.code,{children:"dashboard:file-card"})," (#438 /\n@arturi)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: CSS class names have been altered to use ",(0,n.jsx)(s.code,{children:"uppy-"}),"\nnamespace, so ",(0,n.jsx)(s.code,{children:".UppyDashboard-files"})," --\x3e ",(0,n.jsx)(s.code,{children:".uppy-Dashboard-files"})," and so on"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," dashboard: added ",(0,n.jsx)(s.code,{children:"metaFields"})," option, pass an array of\nsettings for UI field objects\n",(0,n.jsx)(s.code,{children:"{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }"}),"\n(#438 / @arturi, @goto-bus-stop)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: deprecate ",(0,n.jsx)(s.code,{children:"getMetaFromForm"})," in favor of new ",(0,n.jsx)(s.code,{children:"Form"}),"\nplugin (#407 / @arturi)"]}),"\n",(0,n.jsxs)(s.li,{children:["form: added ",(0,n.jsx)(s.code,{children:"Form"}),", a new plugin that is used in conjunction with any\nacquirer, responsible for: 1. acquiring the metadata from ",(0,n.jsx)(s.code,{children:"<form>"})," when upload\nstarts in Uppy; 2. injecting result array of succesful and failed files back\ninto the form (#407 / @arturi)"]}),"\n",(0,n.jsx)(s.li,{children:"core: add more extensions for mimetype detection (#452 / @ifedapoolarewaju)"}),"\n",(0,n.jsx)(s.li,{children:"docs: more docs for plugins (#456 / @goto-bus-stop)"}),"\n",(0,n.jsx)(s.li,{children:"core: misc bugs fixes and improvements in Webcam, Dashboard, Provider and\nothers (#451 / @arturi)"}),"\n",(0,n.jsx)(s.li,{children:"dashboard: improved Dashboard UI (@arturi)"}),"\n",(0,n.jsx)(s.li,{children:"uppy-server: remove pause/resume socket listeners when upload is done\n(@ifedapoolarewaju)"}),"\n",(0,n.jsx)(s.li,{children:"uppy/uppy-server: remote server error handler (#446 / @ifedapoolarewaju)"}),"\n",(0,n.jsx)(s.li,{children:"provider: fix dropbox thumbnail view (@ifedapoolarewaju)"}),"\n",(0,n.jsxs)(s.li,{children:["uppy-server: link uppy-server with ",(0,n.jsx)(s.a,{href:"https://snyk.io/",children:"https://snyk.io/"})," to aid vulnerability\nspotting (@ifedapoolarewaju)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u26a0\ufe0f Breaking"})," core: Set ",(0,n.jsx)(s.code,{children:"this.el"})," in ",(0,n.jsx)(s.code,{children:"Plugin"})," class (#425 / @arturi)"]}),"\n",(0,n.jsx)(s.li,{children:"StatusBar, Dashboard and Provider UI improvements place upload button into\nStatusBar, use Alex\u2019s suggestions for retry button; other UI tweaks (#434 /\n@arturi)"}),"\n",(0,n.jsx)(s.li,{children:"XHRUpload: fix fields in XHR remote uploader (#424 / @sadovnychyi)"}),"\n",(0,n.jsx)(s.li,{children:"XHRUpload: option to limit simultaneous uploads #360 (#427 / goto-bus-stop)"}),"\n",(0,n.jsxs)(s.li,{children:["core: Add ",(0,n.jsx)(s.code,{children:"isSupported()"})," API for providers (#421 / @goto-bus-stop, @arturi)"]}),"\n",(0,n.jsx)(s.li,{children:"core: Add stores. Improve on Redux PR #216 to allow using Redux (or any other\nsolution) for all Uppy state management, instead of proxy-only (#426 /\n@goto-bus-stop)"}),"\n",(0,n.jsx)(s.li,{children:"core: add ability to disable thumbnail generation (#432 / @richardwillars)"}),"\n",(0,n.jsx)(s.li,{children:"core: allow to select multiple files at once from remote providers (#419 /\n@sadovnychyi)"}),"\n",(0,n.jsxs)(s.li,{children:["core: use ",(0,n.jsx)(s.code,{children:"setPluginState"})," and ",(0,n.jsx)(s.code,{children:"getPluginState"})," in Providers (#436 / @arturi)"]}),"\n",(0,n.jsxs)(s.li,{children:["docs: uppy-server docs for s3 ",(0,n.jsx)(s.code,{children:"getKey"})," option (#444 / @goto-bus-stop)"]}),"\n",(0,n.jsx)(s.li,{children:"goldenretriever: Fix IndexedDB store initialisation when not cleaning up (#430\n/ @goto-bus-stop)"}),"\n",(0,n.jsx)(s.li,{children:"provider: folder deselection did not remove all files (#439 /\n@ifedapoolarewaju)"}),"\n",(0,n.jsx)(s.li,{children:"s3: Use Translator for localised strings (420 / @goto-bus-stop )"}),"\n",(0,n.jsx)(s.li,{children:"transloadit: Port old tests from tape (#428 / @goto-bus-stop)"}),"\n",(0,n.jsx)(s.li,{children:"tus: Restore correctly from paused state (#443 / @goto-bus-stop)"}),"\n",(0,n.jsx)(s.li,{children:"uppy-server: use typescript to compile code for a type safe servers\n(@ifedapoolarewaju)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["We expect our 1.0 release early next year. Want to impact it? Comment below, in\n",(0,n.jsx)(s.a,{href:"https://github.com/transloadit/uppy/issues",children:"GitHub issues"}),", or on\n",(0,n.jsx)(s.a,{href:"https://www.producthunt.com/posts/uppy-io",children:"Product Hunt"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Happy Holidays,"}),"\n",(0,n.jsx)(s.p,{children:"The Uppy Team"}),"\n",(0,n.jsxs)(s.center,{children:["\n  ",(0,n.jsx)(s.iframe,{src:"https://ghbtns.com/github-btn.html?user=transloadit&repo=uppy&type=watch&count=true",allowTransparency:"true",frameBorder:"0",scrolling:"0",width:"100",height:"20"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4351:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/uppy-dashboard-provider-select-0f7e56334c6c14536f688cb4fb01df67.jpg"},31058:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/uppy-dashboard-updated-fec111019ffc06e6f33762b6303069a7.jpg"},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>t});var n=r(67294);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);