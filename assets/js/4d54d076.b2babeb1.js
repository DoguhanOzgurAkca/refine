"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7080],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,N=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return t?n.createElement(N,s(s({ref:a},p),{},{components:t})):n.createElement(N,s({ref:a},p))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3250:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),s=["components"],i={id:"contributing",title:"Contributing"},l=void 0,c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"We follow a code of conduct when participating with community. Please read it before you make any contributions.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/contributing.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1632223943,formattedLastUpdatedAt:"9/21/2021",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"someSidebar",previous:{title:"Testing",permalink:"/docs/testing"}},p=[{value:"Running in development mode",id:"running-in-development-mode",children:[]},{value:"Starting Documentation in Development Mode",id:"starting-documentation-in-development-mode",children:[]},{value:"Running tests",id:"running-tests",children:[]},{value:"Known Issues",id:"known-issues",children:[]}],d={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We follow a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating with community. Please read it before you make any contributions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,o.kt)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,o.kt)("li",{parentName:"ul"},"Ask for help in our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/UuU3XCc3J5"},"community room"),".")),(0,o.kt)("h2",{id:"running-in-development-mode"},"Running in development mode"),(0,o.kt)("p",null,"This project has multiple packages and uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," to manage all of the packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/"),"."),(0,o.kt)("p",null,"First, install dependencies:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install")))))),(0,o.kt)("p",null,"Then, start all the packages in watch mode:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run lerna bootstrap")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run start"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run lerna bootstrap")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run start")))))),(0,o.kt)("p",null,"Now all packages run in watch mode. You can start one of the example projects in ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples/*")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/example")," directories and when you change a file in any of the packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/*"),", it should re-compile and example gets automatically reloaded."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," examples/base")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run start"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," examples/base")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run start")))))),(0,o.kt)("h2",{id:"starting-documentation-in-development-mode"},"Starting Documentation in Development Mode"),(0,o.kt)("p",null,"Our documentation is built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To start it in development mode, run:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," documentation")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run start"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," documentation")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run start")))))),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," command runs tests for all packages. If you're working on a package (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core"),"), you can run tests only for that package:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," packages/core")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"test"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," packages/core")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test")))))),(0,o.kt)("p",null,"Or you can do it for a specific file:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," -- /src/hooks/export/index.spec.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," -- /src/hooks/export/index.spec.ts")))))),(0,o.kt)("p",null,"Also, to run a specific file's tests in watch mode:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," -- --watch /src/hooks/export/index.spec.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," -- --watch /src/hooks/export/index.spec.ts")))))),(0,o.kt)("p",null,"Get coverage report for that file:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," -- --coverage /src/hooks/export/index.spec.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," -- --coverage /src/hooks/export/index.spec.ts")))))),(0,o.kt)("p",null,"When you run the command that produces coverage report, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/coverage/lcov-report/index.html")," file to see coverage results. If you run this command in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core")," directory, then coverage report will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core/coverage"),"."),(0,o.kt)("p",null,"Please make sure you contribute well tested code."),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the interface changes are not reflected in the project when the interface changes under the packages, delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder in the project and try again.")))}m.isMDXComponent=!0}}]);