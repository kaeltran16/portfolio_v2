(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(154),o=n(159),c=n(147),l=c.d.div.withConfig({displayName:"contactstyles__ContactPageContainer",componentId:"h927ib-0"})(["background-color:",";display:flex;flex:1 1 100%;height:100%;flex-direction:column;"],function(e){return e.theme.secondary.main}),s=c.d.div.withConfig({displayName:"contactInfostyles__ContactInfoWrapper",componentId:"sc-70o2c9-0"})(["display:flex;align-items:center;justify-content:space-evenly;flex-direction:column;"]),d=c.d.a.withConfig({displayName:"contactInfostyles__PrimaryHeader",componentId:"sc-70o2c9-1"})(['color:#fff;font-size:5rem;text-decoration:none;position:relative;&:before{content:"";position:absolute;width:100%;height:3px;bottom:0;left:0;visibility:hidden;border-radius:5px;transform:scaleX(0);transform-origin:left;transition:.25s linear;background-color:#fff;}&:hover:before,&:focus:before{visibility:visible;transform:scaleX(1);}']),m=c.d.div.withConfig({displayName:"contactInfostyles__SubHeader",componentId:"sc-70o2c9-2"})(["color:"," text-align:center;font-size:2rem;font-weight:lighter;"],function(e){return e.theme.secondary.main}),u=c.d.h4.withConfig({displayName:"contactInfostyles__Text",componentId:"sc-70o2c9-3"})([""]),f=c.d.a.withConfig({displayName:"contactInfostyles__PhoneNumber",componentId:"sc-70o2c9-4"})(["text-decoration:none;color:",""],function(e){return e.theme.secondary.main}),p=function(e){var t=e.contactDetail;return r.a.createElement(s,null,r.a.createElement(d,{href:"mailto:"+t.email},"cktran16x2@gmail.com"),r.a.createElement(m,null,r.a.createElement(u,null,"Phone Number"),r.a.createElement(f,{href:"tel:1-"+t.tel},"dsadas")))},h=(n(155),n(149)),g=n(160),y=Object(c.d)(h.a.div).withConfig({displayName:"socialButtonstyles__SocialButtonWrapper",componentId:"b8ry7n-0"})(["color:"," height:100%;"],function(e){return e.theme.secondary.main}),w=c.d.a.withConfig({displayName:"socialButtonstyles__Link",componentId:"b8ry7n-1"})(["text-align:center;display:flex;justify-content:space-around;flex-direction:column;align-items:center;height:90%;text-decoration:none;color:",";"],function(e){return e.theme.primary.main}),x=Object(c.d)(h.a.p).withConfig({displayName:"socialButtonstyles__Text",componentId:"b8ry7n-2"})(["font-size:2rem;text-transform:uppercase;letter-spacing:.5rem;"]),v=c.d.svg.withConfig({displayName:"socialButtonstyles__Icon",componentId:"b8ry7n-3"})(["width:5rem;height:5rem;fill:",""],function(e){return e.theme.primary.main}),b=function(e){var t=e.style,n=e.text,i=e.iconName,a=e.url,o=Object(h.c)(function(){return{scale:0,config:{mass:5,tension:600,friction:90}}}),c=o[0].scale,l=o[1];return r.a.createElement(y,{style:t},r.a.createElement(w,{href:a,onMouseMove:function(){return l({scale:1})},onMouseLeave:function(){return l({scale:0})}},r.a.createElement(x,{style:{transform:c.interpolate(function(e){return"scale("+e+")"})}},n),r.a.createElement(v,null,r.a.createElement("use",{xlinkHref:Object(g.a)("/icons/sprites.svg#icon-"+i)}))))},k=c.d.div.withConfig({displayName:"footerstyles__FooterWrapper",componentId:"sc-98dclv-0"})(["display:flex;justify-content:center;align-items:flex-end;flex:1;"]),_=function(e){var t=e.socialIcons,n=Object(h.d)(t.length,{opacity:1,config:{mass:4,tension:1e3,friction:200},x:0,y:10,from:{opacity:0,x:-50,y:0}});return r.a.createElement(k,null,n.map(function(e,n){var i=e.x,a=(e.y,e.opacity);return r.a.createElement(b,{key:t[n].icon,iconName:t[n].icon,text:t[n].name,url:t[n].url,style:{opacity:a,transform:i.interpolate(function(e){return"translate3d(0,"+e+"px,0)"})}})}))},j={email:"cktran16x2@gmail.com",tel:"4169987489"},N=[{icon:"linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/khangtranx"},{icon:"github",name:"Github",url:"https://github.com/Khang-Tran"},{icon:"facebook",name:"Facebook",url:"https://www.facebook.com/khangishere"},{icon:"twitter",name:"Twitter",url:"https://twitter.com/KhangCaoTran"},{icon:"google-plus",name:"Google",url:"https://plus.google.com/105861925169691513017"}];t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(l,null,r.a.createElement(o.a,{color:"light",heading:"get in touch"}),r.a.createElement(p,{contactDetail:j}),r.a.createElement(_,{socialIcons:N})))}},148:function(e,t,n){"use strict";var i=n(147),r=i.d.header.withConfig({displayName:"headerstyles__HeaderWrapper",componentId:"sc-13svdzc-0"})(["display:flex;justify-content:space-between;align-items:center;"]),a=i.d.svg.withConfig({displayName:"logostyles__LogoContainer",componentId:"sc-1a4a8f2-0"})(["margin-left:3.5rem;height:",";width:",";fill:",";cursor:pointer;&:hover{transform:rotate(180deg);transition:all 1s;backface-visibility:hidden;}position:relative;z-index:500;"],function(e){return e.size+"rem"},function(e){return e.size+"rem"},function(e){return"dark"===e.color?e.theme.primary.main:e.theme.secondary.main}),o=n(149),c=Object(i.d)(o.a.div).withConfig({displayName:"navstyles__NavBackground",componentId:"sc-1ojpdhq-0"})(["height:6rem;width:6rem;border-radius:50%;position:fixed;right:0;z-index:1;margin:2.5rem;background-image:radial-gradient(",",",")"],function(e){return e.theme.accent.light},function(e){return e.theme.accent.dark}),l=i.d.div.withConfig({displayName:"navstyles__NavItemContainer",componentId:"sc-1ojpdhq-1"})(["margin:1rem;position:relative;z-index:100;"]),s=i.d.a.withConfig({displayName:"navstyles__NavLink",componentId:"sc-1ojpdhq-2"})(["cursor:pointer;font-size:3rem;font-weight:500;color:",";padding:1rem 2.5rem;text-decoration:none;text-transform:uppercase;background-image:linear-gradient( 120deg,transparent,transparent 0%,transparent 50%,"," 50%\t );background-size:220%;transition:all 0.4s;display:inline-block;&:hover,&:active{background-position:100%;color:#000;transform:translateX(1rem);}"],function(e){return e.theme.primary.main},function(e){return e.theme.secondary.main}),d=i.d.span.withConfig({displayName:"navstyles__NavItemName",componentId:"sc-1ojpdhq-3"})(["margin-right:1.5rem;display:inline-block;"]),m=i.d.nav.withConfig({displayName:"navstyles__NavListContainer",componentId:"sc-1ojpdhq-4"})(["height:100%;width:100%;position:fixed;opacity:0;display:none;z-index:9;transition:all 0.4s;",";"],function(e){return e.active&&Object(i.c)(["opacity:1;display:flex;justify-content:center;align-items:center;"])}),u=i.d.ul.withConfig({displayName:"navstyles__NavListItems",componentId:"sc-1ojpdhq-5"})(["list-style:none;text-align:center;"]),f=i.d.div.withConfig({displayName:"burgerButtonstyles__BurgerButton",componentId:"sc-19omxxh-0"})(["padding:3.5rem;display:flex;justify-content:center;cursor:pointer;position:relative;z-index:10;"]),p=i.d.div.withConfig({displayName:"burgerButtonstyles__BurgerBar",componentId:"sc-19omxxh-1"})(["&:not(:first-child){margin-top:.6rem;}transition:all 0.4s;width:100%;height:12.5%;"]),h=i.d.div.withConfig({displayName:"burgerButtonstyles__BurgerIcon",componentId:"sc-19omxxh-2"})(["position:relative;z-index:10;cursor:pointer;display:flex;align-items:center;flex-direction:column;justify-content:center;width:",";height:",";","{background-color:",";}",""],function(e){return e.size+"rem"},function(e){return e.size+"rem"},p,function(e){return"dark"===e.color?e.theme.primary.main:e.theme.secondary.main},function(e){return e.active&&Object(i.c)(["","{&:nth-child(1){transform:rotate(-45deg) translate(-.9rem,.6rem);}&:nth-child(2){opacity:0;}&:nth-child(3){transform:rotate(45deg) translate(-1rem,-.8rem);}}z-index:500;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);"],p)}),g=i.d.div.withConfig({displayName:"headingstyles__HeadingWrapper",componentId:"sc-1rlxhox-0"})(["align-items:center;justify-content:center;display:flex;flex-direction:column;"]),y=i.d.h2.withConfig({displayName:"headingstyles__HeadingText",componentId:"sc-1rlxhox-1"})(["text-transform:uppercase;font-weight:lighter;font-size:3rem;letter-spacing:.33rem;cursor:auto;color:",";"],function(e){return"dark"===e.color?e.theme.primary.light:e.theme.secondary.light}),w=i.d.div.withConfig({displayName:"paragraphstyles__ParagraphWrapper",componentId:"qqpqpf-0"})(["flex:1 1 100%;align-items:center;justify-content:center;backface-visibility:hidden;display:flex;flex-direction:column;"]),x=Object(i.d)(o.a.div).withConfig({displayName:"paragraphstyles__ParagraphText",componentId:"qqpqpf-1"})(["width:70%;font-size:2.5rem;font-weight:normal;color:"," letter-spacing:.2rem;&:not(:first-child){margin-top:4rem;}"],function(e){return e.theme.primary.dark}),v=i.d.div.withConfig({displayName:"skillsstyles__SkillWrapper",componentId:"sc-1n81j9f-0"})(["flex:1 1 100%;display:flex;flex-flow:row;justify-content:center;align-items:center;"]),b=Object(i.d)(o.a.div).withConfig({displayName:"skillsstyles__CardWrapper",componentId:"sc-1n81j9f-1"})(["display:grid;grid-template-rows:1fr 1fr 4fr;grid-template-columns:1fr;width:90%;"]),k=i.d.h4.withConfig({displayName:"skillsstyles__SkillHeading",componentId:"sc-1n81j9f-2"})(["font-size:1.5rem;font-weight:normal;display:flex;justify-self:center;align-self:center;"]),_=i.d.svg.withConfig({displayName:"skillsstyles__Icon",componentId:"sc-1n81j9f-3"})(["height:10rem;width:100%;display:flex;justify-content:center;fill:",";"],function(e){return e.theme.accent.dark}),j=i.d.div.withConfig({displayName:"skillsstyles__SkillItemWrapper",componentId:"sc-1n81j9f-4"})(["display:flex;flex-direction:column;justify-content:space-between;"]),N=i.d.h4.withConfig({displayName:"skillsstyles__SubHeading",componentId:"sc-1n81j9f-5"})(["font-size:1.75rem;width:100%;justify-content:center;display:flex;color:"," text-align:center;"],function(e){return e.theme.accent.dark}),I=i.d.div.withConfig({displayName:"skillsstyles__SkillNameList",componentId:"sc-1n81j9f-6"})(["display:flex;justify-content:space-between;flex-direction:column;flex:.9;align-items:center;"]),C=Object(i.d)(o.a.div).withConfig({displayName:"skillsstyles__SkillName",componentId:"sc-1n81j9f-7"})(["font-size:2rem;font-weight:bolder;color:",";"],function(e){return e.theme.primary.dark});n.d(t,"e",function(){return r}),n.d(t,"i",function(){return a}),n.d(t,"j",function(){return c}),n.d(t,"k",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"l",function(){return d}),n.d(t,"n",function(){return m}),n.d(t,"o",function(){return u}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return h}),n.d(t,"g",function(){return g}),n.d(t,"f",function(){return y}),n.d(t,"q",function(){return w}),n.d(t,"p",function(){return x}),n.d(t,"v",function(){return v}),n.d(t,"d",function(){return b}),n.d(t,"r",function(){return k}),n.d(t,"h",function(){return _}),n.d(t,"s",function(){return j}),n.d(t,"w",function(){return N}),n.d(t,"u",function(){return I}),n.d(t,"t",function(){return C})},150:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});var i={light:"light",dark:"dark"},r={grey:{light:"#f7f7f7",main:"#999",dark:"#333"},primary:{main:"#131116",light:"#353535",dark:"#0F0F0F"},secondary:{main:"#F9F9F9",light:"#FFFFFA",dark:"#E0E0E0"},accent:{main:"#7ed56f;",light:"#55c57a",dark:"#28b485"}}},151:function(e,t,n){"use strict";var i=n(147),r=i.d.div.withConfig({displayName:"landingstyles__LandingPageContainer",componentId:"sc-16z5jkw-0"})(["flex:1 1 100%;height:100%;display:flex;"]),a=i.d.div.withConfig({displayName:"landingstyles__TextHeaderWrapper",componentId:"sc-16z5jkw-1"})(["align-items:center;justify-content:center;display:flex;flex:1 1 100%;flex-direction:column;"]),o=i.d.h3.withConfig({displayName:"landingstyles__TextBase",componentId:"sc-16z5jkw-2"})(["color:",";"],function(e){return e.theme.primary.main}),c=Object(i.d)(o).withConfig({displayName:"landingstyles__TextPrimary",componentId:"sc-16z5jkw-3"})(["font-size:6rem;font-weight:400;letter-spacing:1rem;"]),l=Object(i.d)(o).withConfig({displayName:"landingstyles__TextSecondary",componentId:"sc-16z5jkw-4"})(["font-size:3rem;font-weight:700;"]),s=i.d.div.withConfig({displayName:"aboutstyles__AboutPageContainer",componentId:"d02qgk-0"})(["background-color:",";display:flex;flex:1 1 100%;height:100%;flex-direction:column;"],function(e){return e.theme.secondary.main}),d=i.d.div.withConfig({displayName:"skillstyles__SkillPageContainer",componentId:"tw8y8t-0"})(["flex:1 1 100%;height:100%;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;"]);n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return d})},152:function(e,t,n){"use strict";var i=n(153),r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=n(157),s=n.n(l);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,l=i.data.site,d=t||l.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},154:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(4),o=n.n(a),c=n(156),l=n.n(c),s=n(147);function d(){var e=l()(["\nhtml {\n    box-sizing: border-box;\n    font-size: 62.5%;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    }\n  *, \n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n  }\n"]);return d=function(){return e},e}var m=Object(s.b)(d()),u=n(148),f=n(150),p=(n(151),n(149)),h=(n(155),function(e){var t=e.itemNo,n=e.itemName,i=e.url;return r.a.createElement(u.k,null,r.a.createElement(u.m,{to:i},r.a.createElement(u.l,null,t,"."),n))});h.propTypes={itemNo:a.number.isRequired,itemName:a.string.isRequired,url:a.string.isRequired};var g=h,y=function(e){var t=e.active;return r.a.createElement(u.n,{active:t},r.a.createElement(u.o,null,[{name:"Landing",url:"/"},{name:"About",url:"/about"},{name:"Skill",url:"/skill"},{name:"Work",url:"/work/recipello"},{name:"Contact",url:"/contact"}].map(function(e,t){return r.a.createElement(g,{key:e.name,itemNo:t+1,itemName:e.name,url:e.url})})))};y.propTypes={active:a.bool.isRequired};var w=y,x=function(){return r.a.createElement(u.i,{color:"dark",size:5,version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 799.000000 799.000000"},r.a.createElement("path",{d:"M3780 7939 c-1814 -96 -3335 -1432 -3664 -3219 -49 -266 -60 -404 -60 -720 0 -305 10 -442 54 -695 19 -107 70 -328 91 -392 l11 -33 195 0 c166 0 194 2 190 14 -18 46 -81 289 -101 391 -203 1001 28 2034 636 2847 499 665 1206 1137 2000 1333 327 81 610 111 958 102 246 -6 397 -22 622 -68 451 -91 898 -280 1288 -543 349 -236 714 -599 944 -938 l60 -88 219 0 219 0 -27 48 c-52 90 -197 305 -273 406 -171 226 -429 494 -647 671 -585 477 -1270 768 -2035 864 -89 11 -439 32 -500 29 -19 0 -100 -4 -180 -9z",transform:"matrix(.1 0 0 -.1 0 799)"}),r.a.createElement("path",{d:"M2628 6477 c-301 -89 -549 -165 -552 -168 -4 -4 -637 -2958 -772 -3601 l-6 -28 -421 -2 -421 -3 -38 -185 c-20 -102 -37 -193 -38 -203 0 -16 70 -17 1367 -15 l1367 3 38 185 c20 102 37 193 38 203 0 16 -26 17 -415 17 -302 0 -415 3 -415 11 0 7 83 408 186 893 177 842 186 882 212 903 69 57 184 135 252 172 175 94 339 97 426 6 65 -67 79 -121 78 -300 0 -142 -3 -162 -52 -390 -60 -276 -77 -413 -68 -575 6 -127 23 -212 62 -309 110 -278 370 -438 746 -459 l119 -7 -670 -465 c-369 -256 -671 -468 -671 -472 0 -5 163 -8 363 -8 l362 1 695 548 c382 302 696 548 696 547 2 -1 -289 -1347 -301 -1393 -4 -16 -1 -23 10 -23 14 0 1106 319 1114 326 1 1 177 819 390 1816 l386 1813 421 3 421 2 37 188 c21 103 39 195 42 205 5 16 -65 17 -1365 17 -754 0 -1371 -1 -1371 -3 0 -2 -18 -93 -40 -202 -22 -109 -40 -200 -40 -202 0 -2 189 -3 421 -3 333 0 420 -3 416 -12 -2 -7 -86 -404 -186 -883 -118 -559 -189 -879 -200 -894 -23 -32 -189 -152 -271 -195 -87 -46 -171 -69 -250 -69 -120 1 -187 47 -231 160 -20 50 -23 76 -23 193 0 142 2 155 77 490 41 185 41 185 41 400 0 192 -2 224 -22 295 -99 360 -375 546 -841 567 l-54 3 654 454 c360 249 661 460 669 467 12 12 -41 14 -352 14 l-366 0 -687 -541 c-378 -297 -689 -539 -691 -536 -3 2 61 308 141 678 81 371 149 686 152 702 4 19 2 27 -8 26 -8 0 -260 -73 -561 -162z",transform:"matrix(.1 0 0 -.1 0 799)"}),r.a.createElement("path",{d:"M7406 5073 c36 -114 94 -358 113 -473 33 -197 41 -290 48 -505 22 -736 -183 -1450 -592 -2065 -606 -911 -1552 -1479 -2645 -1590 -156 -16 -531 -13 -701 5 -466 49 -932 193 -1334 412 -155 84 -400 248 -540 359 -142 114 -427 399 -539 539 -48 61 -119 156 -157 212 l-70 103 -215 0 c-117 0 -214 -4 -214 -9 0 -14 120 -209 195 -316 245 -351 610 -720 954 -964 1188 -843 2758 -964 4054 -314 394 197 826 518 1104 821 588 639 930 1359 1044 2197 26 191 37 628 20 830 -20 239 -69 526 -124 720 l-23 80 -196 3 -197 2 15 -47z",transform:"matrix(.1 0 0 -.1 0 799)"}))},v=function(e){var t=e.color,n=e.size,i=e.active;return r.a.createElement(u.c,{color:t,size:n,active:i},r.a.createElement(u.a,null),r.a.createElement(u.a,null),r.a.createElement(u.a,null))};v.propTypes={color:a.oneOf([f.b.light,f.b.dark]).isRequired,size:a.number.isRequired,active:a.bool.isRequired};var b=v,k=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1],a=Object(p.c)({transform:"scale("+(t?"80":"0")+")",config:{mass:5,tension:600,friction:100}}).transform;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.e,null,r.a.createElement(x,null),r.a.createElement(u.b,{onClick:function(){n(!t)}},r.a.createElement(b,{color:"dark",size:5,active:t}))),r.a.createElement(w,{active:t}),r.a.createElement(u.j,{style:{transform:a}}))},_=n(152),j=function(e){var t=e.children;return r.a.createElement(s.a,{theme:f.a},r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(m,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100vw",height:"100vh"}},r.a.createElement(k,null),r.a.createElement("main",{style:{flex:"1 1 100%"}},t))))};j.propTypes={children:o.a.node.isRequired};t.a=j},158:function(e,t,n){var i;e.exports=(i=n(161))&&i.default||i},159:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(148);t.a=function(){return r.a.createElement(a.g,null,r.a.createElement(a.f,{color:"dark"},"Hi abcaidhjaskdhs"))}},160:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(4),o=n.n(a),c=n(32);n.d(t,"a",function(){return c.withPrefix});n(158),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},161:function(e,t,n){"use strict";n.r(t);n(33);var i=n(0),r=n.n(i),a=n(4),o=n.n(a),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-contact-js-b06cdddb7f5ff7cb0d2b.js.map