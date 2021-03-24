(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(88)),o={id:"install",title:"\u5b89\u88c5",sidebar_label:"\u5b89\u88c5"},l={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/INSTALL.md",slug:"/install",permalink:"/fiora/zh-Hans/docs/install",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/INSTALL.md",version:"current",sidebar_label:"\u5b89\u88c5",sidebar:"docs",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/fiora/zh-Hans/docs/getting-start"},next:{title:"\u914d\u7f6e",permalink:"/fiora/zh-Hans/docs/config"}},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5982\u4f55\u8fd0\u884c",id:"\u5982\u4f55\u8fd0\u884c",children:[{value:"\u5728\u540e\u53f0\u8fd0\u884c",id:"\u5728\u540e\u53f0\u8fd0\u884c",children:[]},{value:"\u8fd0\u884c\u5f00\u53d1\u6a21\u5f0f",id:"\u8fd0\u884c\u5f00\u53d1\u6a21\u5f0f",children:[]},{value:"docker \u8fd0\u884c",id:"docker-\u8fd0\u884c",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),Object(i.b)("p",null,"\u8981\u8fd0\u884c Fiora, \u4f60\u9700\u8981 Node.js(\u63a8\u8350 v14 LTS \u7248\u672c), MongoDB \u548c redis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5 Node.js",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b98\u7f51 ",Object(i.b)("a",{parentName:"li",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")),Object(i.b)("li",{parentName:"ul"},"\u66f4\u63a8\u8350\u4f7f\u7528 nvm \u5b89\u88c5 Node.js",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5 nvm ",Object(i.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#install--update-script"},"https://github.com/nvm-sh/nvm#install--update-script")),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 nvm \u5b89\u88c5 Node.js ",Object(i.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#usage"},"https://github.com/nvm-sh/nvm#usage")))))),Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5 MongoDB",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b98\u7f51 ",Object(i.b)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/installation/#install-mongodb"},"https://docs.mongodb.com/manual/installation/#install-mongodb")))),Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5 redis",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b98\u7f51 ",Object(i.b)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"https://redis.io/topics/quickstart"))))),Object(i.b)("p",null,"\u63a8\u8350\u5728 Linux \u6216\u8005 MacOS \u7cfb\u7edf\u4e0a\u8fd0\u884c"),Object(i.b)("h2",{id:"\u5982\u4f55\u8fd0\u884c"},"\u5982\u4f55\u8fd0\u884c"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u514b\u9686\u9879\u76ee\u5230\u672c\u5730 ",Object(i.b)("inlineCode",{parentName:"li"},"git clone https://github.com/yinxin630/fiora.git -b master")),Object(i.b)("li",{parentName:"ol"},"\u786e\u4fdd\u5b89\u88c5\u4e86 ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/yarn"},"yarn"),", \u5982\u679c\u6ca1\u6709\u5b89\u88c5\u8bf7\u6267\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"npm install -g yarn")),Object(i.b)("li",{parentName:"ol"},"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56 ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install")),Object(i.b)("li",{parentName:"ol"},"\u6784\u5efa\u5ba2\u6237\u7aef\u4ee3\u7801 ",Object(i.b)("inlineCode",{parentName:"li"},"yarn build:client && yarn move-dist")),Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8\u670d\u52a1\u7aef ",Object(i.b)("inlineCode",{parentName:"li"},"yarn start")),Object(i.b)("li",{parentName:"ol"},"\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",Object(i.b)("inlineCode",{parentName:"li"},"http://[ip\u5730\u5740]:[\u7aef\u53e3]"),"(\u6bd4\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:9200"),")")),Object(i.b)("h3",{id:"\u5728\u540e\u53f0\u8fd0\u884c"},"\u5728\u540e\u53f0\u8fd0\u884c"),Object(i.b)("p",null,"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," \u8fd0\u884c\u670d\u52a1\u7aef\u4f1a\u5728\u65ad\u5f00 ssh \u8fde\u63a5\u540e\u505c\u6b62\u8fd0\u884c, \u63a8\u8350\u4f7f\u7528 pm2 \u6765\u8fd0\u884c"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 pm2\nnpm install -g pm2\n\n# \u4f7f\u7528 pm2 \u8fd0\u884c fiora\npm2 start yarn --name fiora -- start\n\n# \u67e5\u770b pm2 \u5e94\u7528\u72b6\u6001\npm2 ls\n\n# \u67e5\u770b pm2 fiora \u65e5\u5fd7\npm2 logs fiora\n")),Object(i.b)("h3",{id:"\u8fd0\u884c\u5f00\u53d1\u6a21\u5f0f"},"\u8fd0\u884c\u5f00\u53d1\u6a21\u5f0f"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8\u670d\u52a1\u7aef ",Object(i.b)("inlineCode",{parentName:"li"},"yarn dev:server")),Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8\u5ba2\u6237\u7aef ",Object(i.b)("inlineCode",{parentName:"li"},"yarn dev:client")),Object(i.b)("li",{parentName:"ol"},"\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:8080"))),Object(i.b)("h3",{id:"docker-\u8fd0\u884c"},"docker \u8fd0\u884c"),Object(i.b)("p",null,"\u9996\u5148\u5b89\u88c5 docker ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"https://docs.docker.com/install/")),Object(i.b)("h4",{id:"\u76f4\u63a5\u4ece-dockerhub-\u955c\u50cf\u8fd0\u884c"},"\u76f4\u63a5\u4ece DockerHub \u955c\u50cf\u8fd0\u884c"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u62c9\u53d6 mongo\ndocker pull mongo\n\n# \u62c9\u53d6 redis\ndocker pull redis\n\n# \u62c9\u53d6 fiora\ndocker pull suisuijiang/fiora\n\n# \u521b\u5efa\u865a\u62df\u7f51\u7edc\ndocker network create fiora-network\n\n# \u542f\u52a8 mongodB\ndocker run --name fioradb -p 27017:27017 --network fiora-network mongo\n\n# \u542f\u52a8 redis\ndocker run --name fioraredis -p 6379:6379 --network fiora-network redis\n\n# \u542f\u52a8 fiora\ndocker run --name fiora -p 9200:9200 --network fiora-network -e Database=mongodb://fioradb:27017/fiora -e RedisHost=fioraredis suisuijiang/fiora\n")),Object(i.b)("h4",{id:"\u672c\u5730\u6784\u5efa\u955c\u50cf\u8fd0\u884c"},"\u672c\u5730\u6784\u5efa\u955c\u50cf\u8fd0\u884c"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u514b\u9686\u9879\u76ee\u5230\u672c\u5730 ",Object(i.b)("inlineCode",{parentName:"li"},"git clone https://github.com/yinxin630/fiora.git -b master")),Object(i.b)("li",{parentName:"ol"},"\u6784\u5efa\u955c\u50cf ",Object(i.b)("inlineCode",{parentName:"li"},"docker-compose build --no-cache --force-rm")),Object(i.b)("li",{parentName:"ol"},"\u8fd0\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"docker-compose up"))))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,l(l({ref:t},b),{},{components:n})):a.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);