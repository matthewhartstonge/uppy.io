"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9828],{42401:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(85893),o=i(11151);const a={title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:new Date("2022-12-23T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},s=void 0,r={permalink:"/blog/2022/12/3.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-12-3.3.md",source:"@site/blog/2022-12-3.3.md",title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",description:"\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three minor",date:"2022-12-23T00:00:00.000Z",formattedDate:"December 23, 2022",tags:[],readingTime:2.48,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:"2022-12-23T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},unlisted:!1,prevItem:{title:"New Uppy.io and docs",permalink:"/blog/2023-05-new-website"},nextItem:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",permalink:"/blog/2022/09/3.0"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},d=[{value:"Safer AWS S3 Multipart uploads on slow connections",id:"safer-aws-s3-multipart-uploads-on-slow-connections",level:2},{value:"Single File Mode",id:"single-file-mode",level:2},{value:"Bug fixes and Upgrades",id:"bug-fixes-and-upgrades",level:2},{value:"Companion",id:"companion",level:2},{value:"Locales",id:"locales",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(19232).Z+"",width:"1400",height:"1097"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three ",(0,t.jsx)(n.code,{children:"minor"}),"\nreleases ago we\u2019ve introduced Uppy 3.0. It\u2019s time to give you an update on\nwhat\u2019s been cooking in the Uppy-Transloadit headquarters (besides cranberry\nsauce) for the past couple of months."]}),"\n",(0,t.jsx)(n.p,{children:"In short: AWS S3 Multipart stability improvements, Single File Mode for the\nDashboard, more tests and bugfixes, new locales."}),"\n",(0,t.jsx)(n.h2,{id:"safer-aws-s3-multipart-uploads-on-slow-connections",children:"Safer AWS S3 Multipart uploads on slow connections"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@uppy/aws-s3-multipart"})," has been serving well for people who prefer a\n",(0,t.jsx)(n.em,{children:"client-to_s3"})," setup with Uppy. However, some uploads could occasionally fail in\npoor network conditions. It turned out, simultaneously signing and uploading\nmany chunks at once saturated the HTTP/1.1 connection limit, which lead to\nsignatures expiring by the time Uppy started uploading the next chunk."]}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019ve refactored our internal queue mechanism to sign chunks right before we\nbegin uploading them to the remote server. When the upload is paused, the queue\nis emptied and re-populated again on resume. The default ",(0,t.jsx)(n.code,{children:"limit"})," for this plugin\nhas been set to ",(0,t.jsx)(n.code,{children:"6"})," and the default S3 signature expiry has been lifted from\n",(0,t.jsx)(n.code,{children:"300"})," to ",(0,t.jsx)(n.code,{children:"800"})," seconds."]}),"\n",(0,t.jsx)(n.h2,{id:"single-file-mode",children:"Single File Mode"}),"\n",(0,t.jsx)(n.p,{children:"Often times people only want to upload a single file (most commonly an image)\nvia Uppy. But the Dashboard UI is tailored to handling many files at once, and\nit used to display the single image as a small, sad-looking block in the corner.\nThis ends now! (Actually, it ended a few releases ago, figure of speech)."}),"\n",(0,t.jsx)(n.img,{src:"/img/blog/3.1-3.3/single-file-mode.jpg",className:"border"}),"\n",(0,t.jsxs)(n.p,{children:["With only one file selected, we\u2019ll display it large and centered, and make sure\nto re-generate the image preview so it\u2019s ",(0,t.jsx)(n.code,{children:"600px"})," wide, looking nice and sleek on\nmodern displays."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/4188",children:"PR #4188"})," for more\nscreenshots."]}),"\n",(0,t.jsx)(n.h2,{id:"bug-fixes-and-upgrades",children:"Bug fixes and Upgrades"}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019ve upgraded Typescript to ",(0,t.jsx)(n.code,{children:"v4.8"})," and Jest to ",(0,t.jsx)(n.code,{children:"v29"}),", among other tools and\npackages."]}),"\n",(0,t.jsx)(n.p,{children:"We are now additionally testing that Uppy packages are correctly bundled with\nthe latest Rollup, Webpack, Parcel, Vite, and ESBuild."}),"\n",(0,t.jsx)(n.p,{children:"Notable bug fixes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"XHR Upload: Queue requests for socket token for remote files"}),"\n",(0,t.jsx)(n.li,{children:"Core: Prevent crashes when a file is removed before the upload starts"}),"\n",(0,t.jsx)(n.li,{children:"Golden Retriever: Fixed upload retries"}),"\n",(0,t.jsx)(n.li,{children:"AWS S3 and XHR Upload: Fixed Cannot mark a queued request as done in\nMiniXHRUpload"}),"\n",(0,t.jsx)(n.li,{children:"Webcam: Set default videoConstraints"}),"\n",(0,t.jsx)(n.li,{children:"Image Editor: Fix controls in small Dashboard"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the full list in the\n",(0,t.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/main/CHANGELOG.md",children:"changelog"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"companion",children:"Companion"}),"\n",(0,t.jsx)(n.p,{children:"And of course, this festive season we are not forgetting Companion under the\ntree:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Throttle progress by time"}),"\n",(0,t.jsx)(n.li,{children:"Added workaround for S3 accelerated endpoints"}),"\n",(0,t.jsx)(n.li,{children:"Send expire info for non-multipart uploads"}),"\n",(0,t.jsx)(n.li,{children:"Send expiry time alongside S3 signed requests"}),"\n",(0,t.jsx)(n.li,{children:"Added support for AbortSignal"}),"\n",(0,t.jsx)(n.li,{children:"Prevent preflight race condition"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"locales",children:"Locales"}),"\n",(0,t.jsx)(n.p,{children:"Uzbek language pack was added, while Polish and Ukrainian language packs were\nupdated."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"That\u2019s it for our updates! Stay tuned for more in 2023 and happy holidays (if\nyou are celebrating)! Cheers. In the meantime, we are driving home, driving home\nfor Christmas. Yeah."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(70310).Z+"",width:"480",height:"270"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19232:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dashboard-christmas-7bdeb276706cce5b1944c93b7680ccfa.jpg"},70310:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/driving-home-0b068883d13788971c4bd54faf9e66f6.gif"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(67294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);