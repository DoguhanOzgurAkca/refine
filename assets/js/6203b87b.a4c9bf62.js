"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?o.createElement(h,s(s({ref:t},m),{},{components:n})):o.createElement(h,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),i=n(68017),s=n(39786),r=n(81669),l=n(99088);const p={title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"/img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},m=void 0,c={permalink:"/blog/react-memo-guide",source:"@site/blog/2022-09-13-react-memo.md",title:"React memo guide with examples",description:"Improve the app performance with React.memo()",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"react-memo",permalink:"/blog/tags/react-memo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:10.91,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"/img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},prevItem:{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo"},nextItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},relatedPosts:[{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:14.825,date:"2022-08-26T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.795,date:"2022-09-09T00:00:00.000Z"},{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.46,date:"2022-08-04T00:00:00.000Z"}],authorPosts:[{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.87,date:"2022-10-10T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.845,date:"2022-09-16T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.47,date:"2022-10-03T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is Memoization?",id:"what-is-memoization",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Project Content Overview",id:"project-content-overview",level:2},{value:"Memoizing a Functional Component using <code>React.memo()</code>",id:"memoizing-a-functional-component-using-reactmemo",level:2},{value:"Memoizing Props",id:"memoizing-props",level:2},{value:"Comparing Prop Values",id:"comparing-prop-values",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],h={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This is the first part of a series on the use of memoization in React. In this series, we'll cover memoizing a React component with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," as well as caching functions and values with React's memoization hooks."),(0,a.kt)("p",null,"We will begin with a progressive example that involves memoizing a functional component, which will be gradually extended to include use cases for the hooks: ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," is leveraged for memoizing a callback function, whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is used to cache a computed value from an expensive function, for example, a sorting function that processes large amount of data."),(0,a.kt)("p",null,"In this post, we'll demonstrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()"),", which is a Higher Order Function, or HOC that adds caching logic to the passed in component. In the upcoming articles, we'll discuss about how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-memoization"},"What is Memoization?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-content-overview"},"Project Content Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#memoizing-a-functional-component-using-reactmemo"},"Memoizing a Functional Component using ",(0,a.kt)("inlineCode",{parentName:"a"},"React.memo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#memoizing-props"},"Memoizing Props")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comparing-prop-values"},"Comparing Prop Values"))),(0,a.kt)("h2",{id:"what-is-memoization"},"What is Memoization?"),(0,a.kt)("p",null,"Memoization is an optimization technique that allows us to store the last computed value or object from a resource-intensive function. It allows us to bypass the function's costly computations when the function is called with the same parameters repeatedly."),(0,a.kt)("p",null,"In React, ",(0,a.kt)("strong",{parentName:"p"},"memoization")," is used for optimizing the performance of an app by preventing unnecessary renders of components participating in the component hierarchy and by caching callbacks and values of expensive utility functions."),(0,a.kt)("p",null,"As React is all about rendering components in the virtual DOM prior to updating the actual Document Object Model in the browser, a lot of memory and time is wasted on useless renderings due to unaccounted for state updates. Using memoization in the right way helps in better use of computing resources in an app."),(0,a.kt)("p",null,"On the other hand, using it the wrong way can rip us off the benefits. Not only that, on the flip side of unnecessary re-renderings, unnecessary memoization can sometimes cost more than ignoring memoization - eventually hurting performance."),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"This series is more of a demo than a coding tutorial, as we've made the code already available at the ",(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"here"),". All the components have been coded ahead of time, and we'll highlighting on the existing code to discuss different aspects of the above mentioned memoization methods."),(0,a.kt)("p",null,"We'll follow the impact of memoization mainly from the browser's console. "),(0,a.kt)("h2",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"If you look at the project folder, you'll find out that ",(0,a.kt)("inlineCode",{parentName:"p"},"react-memoization")," is created using ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,a.kt)("p",null,"The app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships, their state changes, and how props are passed through. It is crucial to pay close attention to how the change of a parent's state triggers re-render of its descendants."),(0,a.kt)("p",null,"The focus of this article will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," component, but ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," are also involved. Below, we'll delve into what memoizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," component with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," does."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," is a ",(0,a.kt)("strong",{parentName:"p"},"HOC")," that memoizes the passed in component. Doing so helps in optimizing its performance by preventing unnecessary re-renders due to state changes it does not depend on, e.g. those coming from ancestor components."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/pankod/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"memoizing-a-functional-component-using-reactmemo"},"Memoizing a Functional Component using ",(0,a.kt)("inlineCode",{parentName:"h2"},"React.memo()")),(0,a.kt)("p",null,"To begin the example, we have an ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," component that houses ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,a.kt)("p",null,"We'll skip both for brevity, but if we look ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," in the repository, we're storing a ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," state with ",(0,a.kt)("inlineCode",{parentName:"p"},"useState()")," hook. We also have a toggler function that alters the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,a.kt)("p",null,"In the component, we pass ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/App.jsx"',title:'"src/components/App.jsx"'},'import { useState } from "react";\nimport Blog from "./components/Blog";\n\nfunction App() {\n  const [signedIn, setSignedIn] = useState(false);\n  const handleClick = () => setSignedIn(!signedIn);\n\nconsole.log(\'Rendering App component\');\n\n  return (\n    <main>\n      <nav>\n        <button onClick={handleClick}>Sign Out</button>\n      </nav>\n      <Blog signedIn={signedIn} setSignedIn={setSignedIn} />\n    </main>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Looking at ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),", it gets a list of posts with a click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post"),"  button and sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},'import React, { useEffect, useMemo, useState } from "react";\nimport fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";\nimport allPosts from "./../data/allPosts.json";\nimport sortPosts from "../utils/sortPosts";\nimport LatestPost from "./LatestPost";\nimport UserPostsIndex from "./UserPostsIndex";\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n  const sortedPosts = sortPosts(updatedPosts);\n\n  useEffect(() => {\n    const id = setInterval(\n      () => setLocalTime(new Date().toLocaleTimeString()),\n      1000\n    );\n    return () => clearInterval(id);\n  }, []);\n\n  console.log("Rendering Blog component");\n\n  return (\n    <div>\n      <div>{localTime}</div>\n      <button onClick={getLatestPosts}>Get Latest Post</button>\n      //highlight-next-line\n      <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n      <UserPostsIndex signedIn={signedIn} />\n    </div>\n  );\n};\n\nexport default Blog;\n')),(0,a.kt)("p",null,"We can see that the first item from a sorted array is then passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," component along with ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),"."),(0,a.kt)("p",null,"Then coming to ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),", it nests the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," component, which we are going to memoize with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()"),". Let's quickly run through ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," in the repository to see what it does."),(0,a.kt)("p",null,"We can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," changes its local state of ",(0,a.kt)("inlineCode",{parentName:"p"},"likesCount")," every 3 seconds in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/LatestPost.jsx"',title:'"src/components/LatestPost.jsx"'},'import React, { useEffect, useState } from "react";\nimport Post from "./Post";\n\nconst LatestPost = ({ signedIn, post }) => {\n  const [likesCount, setLikesCount] = useState(null);\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      setLikesCount((likesCount) => likesCount + 1);\n    }, 3000);\n\n    return () => clearInterval(id);\n  }, []);\n\n  console.log("Rendering LatestPost component");\n\n  return (\n    <div>\n      {post ? (\n        <>\n        //highlight-next-line\n          <Post signedIn={signedIn} post={post} />\n          {likesCount && (\n            <div className="my-1 p-1">\n              <span>{likesCount} Likes</span>\n            </div>\n          )}\n        </>\n      ) : (\n        <p>Click on Get Latest Post button</p>\n      )}\n    </div>\n  );\n};\n\nexport default LatestPost;\n\n')),(0,a.kt)("p",null,"Because of this, ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," should re-render every 3 seconds. So should ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," as a consequence of being a child of ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),":"),(0,a.kt)("p",null,"Let's now focus on ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />"),". It receives ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," as props and displays the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},'import React from \'react\';\n\nconst Post = ({ signedIn, post }) => {\n\nconsole.log(\'Rendering Post component\');\n\n  return (\n    <div className="">\n      {\n        post && (\n        <div className="post p-1">\n          <h1 className="heading-sm py-1">{post.title}</h1>\n          <p>{post.body}</p>\n        </div>\n        )\n      }\n    </div>\n  );\n};\n\nexport default Post;\n')),(0,a.kt)("p",null,"As you can see ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," does not depend on ",(0,a.kt)("inlineCode",{parentName:"p"},"likesCount")," but is re-rendered by the latter's change via ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),". We can see this in the console."),(0,a.kt)("p",null,"If we check our Chrome's console we have ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," rendering again and again following an interval:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:i.Z,alt:"memo1"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Notice, rendering ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," is accompanied by ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),", so it is consistent that ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />"),"'s re-renders are happening due to ",(0,a.kt)("inlineCode",{parentName:"p"},"likesCount")," state changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),"."),(0,a.kt)("p",null," They are coming at ",(0,a.kt)("inlineCode",{parentName:"p"},"3000ms")," intervals from ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook."),(0,a.kt)("p",null,"All these re-renders are futile for ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," and costly for the app."),(0,a.kt)("p",null,"Now, if we memoize ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()"),", the re-renders should stop. "),(0,a.kt)("p",null,"So, in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />"),", let's the component export with the highlighted code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},"const Post = ({ signedIn, post }) => {\n\nconsole.log('Rendering Post component');\n\n  return ( ... );\n};\n\n//highlight-next-line\nexport default React.memo(Post);\n")),(0,a.kt)("p",null,"Looking at the console, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," is no longer re-rendered at 3s intervals:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:s.Z,alt:"memo2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"It is clear that memoizing ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," reduces the number of re-renders. In a realtime app, this does huge a favor because re-renders due to frequent likes coming in turns out to be very costly for the app's performance."),(0,a.kt)("h2",{id:"memoizing-props"},"Memoizing Props"),(0,a.kt)("p",null,"We can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," receives ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," props."),(0,a.kt)("p",null," Now, unlike with ",(0,a.kt)("inlineCode",{parentName:"p"},"likesCount"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," ",(0,a.kt)("strong",{parentName:"p"},"depends on")," ",(0,a.kt)("inlineCode",{parentName:"p"},"signIn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),". And ",(0,a.kt)("strong",{parentName:"p"},"React memo")," caches these props and checks for incoming changes in them. Incoming changes to them triggers a re-render. So, altering any of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," re-renders ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),"."),(0,a.kt)("p",null,"If you look at ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />"),", we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," originated from there and gets relayed via ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," as props. We have a button in the navbar that toggles the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),"."),(0,a.kt)("p",null,"Let's try toggling its value to see the effect on memoized ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />"),":"),(0,a.kt)("p",null,"Add the following console log in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," in order to log the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//highlight-next-line\nconsole.log(signedIn);\n")),(0,a.kt)("p",null,"When we click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Out")," button in the navbar, we can see in the console that ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," re-renders after ",(0,a.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),":"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{width:"400px",src:r.Z,style:{alignSelf:"center"},alt:"memo3"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This is because ",(0,a.kt)("strong",{parentName:"p"},"React memo"),"  caches the props passed to the component and checks for incoming changes. Do notice the Boolean value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," printed to the console. A change in ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," 's state renews the memoization and a re-render of the component is triggered."),(0,a.kt)("p",null,"This is actually what we want. Because we don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," to re-render when we don't need it to, and we want to re-render it when we need it to."),(0,a.kt)("p",null,"If value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," never changed, we know ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," will never be re-rendered because of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),". In that case, caching ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," doesn't do us any favor."),(0,a.kt)("p",null,"In our example, had we resorted to ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," solely to retain the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,a.kt)("strong",{parentName:"p"},"not")," to prevent re-renders due to changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"likesCount")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", we would not get much performance benefit. Instead, we would be bringing the comparison function into the scene for no reason, which adds to the cost. So it is not recommended to memoize a component if its prop values don't change often."),(0,a.kt)("p",null,"It is therefore important to figure out the performance gains by measuring and analyzing runtime performance using browser utilities like Chrome DevTools."),(0,a.kt)("h2",{id:"comparing-prop-values"},"Comparing Prop Values"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"React memo")," checks for changes between the previous and current values for a given prop passed to the component. The default function carries out a shallow comparison on each passed in prop. It checks for equality of incoming values with the existing ones."),(0,a.kt)("p",null," In our ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo(Post)")," memo, the current states of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," are checked for equality to their incoming states. If both values for each prop are equal, the memoized value is retained and re-render prevented. If they are not equal, the new value is cached and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Post />")," re-renders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Custom Comparators")),(0,a.kt)("p",null," It is also possible to customize the comparison by passing in a comparator function as a second argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"React.memo(Post, customComparator);\n")),(0,a.kt)("p",null,"We can specify dependencies for ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," and choose to compare only the props we want to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},'import React from "react";\n\nconst Post = ({ signedIn, post }) => {\n  console.log("Rendering Post component");\n\n  return ( ... );\n};\n\n//highlight-start\nconst customComparator = (prevProps, nextProps) => {\n  return nextProps.post === prevProps.post;\n};\n//highlight-end\n\n//highlight-start\nexport default React.memo(Post, customComparator);\n//highlight-end\n')),(0,a.kt)("p",null,"Here, we are omiting ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," from being compared by comparing only ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," 's values. Now, if we click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Out")," button, ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," is not being re-rendered:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:l.Z,alt:"memo4"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"customComparator")," checks for equality of incoming values of only ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," with its current value and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if they are equal. Memoization will renew if the incoming value of'post` is unequal to its cached value."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this post, we found out that ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," is very useful in preventing unnecessary, frequent re-renders of a component due to changes in states that it does not depend on. A good example involves a component that accepts props whose values change frequently and/or on demand. We can also choose to specify only the props we want in a custom comparator function."),(0,a.kt)("p",null,"In the next article, we will turn our attention back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," component and memoize a sorting function with ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/blog/react-memoization-memo/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"react-memoization-memo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,a.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),",if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/pankod/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,a.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,a.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,a.kt)("strong",{parentName:"p"},"styling"),", ",(0,a.kt)("strong",{parentName:"p"},"customization")," and ",(0,a.kt)("strong",{parentName:"p"},"project workflow.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,a.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}g.isMDXComponent=!0},68017:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/memo1-1e1c9f845d25a6bb806a09f470c4aac4.png"},39786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/memo2-dd4d0322e4d1fbf11b423a5df7b93265.png"},81669:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/memo3-123bed76aff20ef1c8aed5a8824ce85c.png"},99088:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/memo4-8fd5258bacebb013c7d3b384c5a15454.png"}}]);