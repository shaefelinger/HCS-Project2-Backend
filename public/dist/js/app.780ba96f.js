(function(e){function t(t){for(var o,c,s=t[0],i=t[1],l=t[2],b=0,d=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f3":function(e,t,n){},"0c2b":function(e,t,n){},"0d64":function(e,t,n){e.exports=n.p+"img/banner2.fd9ce212.jpg"},"1c24":function(e,t,n){"use strict";n("63a6")},2969:function(e,t,n){},3194:function(e,t,n){"use strict";n("4c71")},"33e7":function(e,t,n){"use strict";n("4094")},4094:function(e,t,n){},"47de":function(e,t,n){e.exports=n.p+"img/world.86318bf7.png"},"4c71":function(e,t,n){},"4e8f":function(e,t,n){"use strict";n("72f3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col justify-between h-screen"};function r(e,t,n,r,c,s){var i=Object(o["z"])("Header"),l=Object(o["z"])("router-view"),u=Object(o["z"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["h"])(i,{class:"flex-shrink-0"}),Object(o["h"])(l),Object(o["h"])(u,{class:"flex-shrink-0"})])}var c=n("47de"),s=n.n(c),i=Object(o["F"])("data-v-d3062b12");Object(o["u"])("data-v-d3062b12");var l={class:"header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md"},u=Object(o["h"])("div",{class:" w-9 lg:w-16 "},[Object(o["h"])("img",{class:" object-fill   ",src:s.a,alt:"logo"})],-1),b=Object(o["h"])("span",{class:"pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium "},"Around the World",-1),d={key:0},p={class:"p-6",id:"nav"},h=Object(o["g"])("About"),f=Object(o["g"])("Check"),g=Object(o["g"])("+new post"),m=Object(o["h"])("a",{id:"burger",class:"burger",href:"#"},[Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),j=Object(o["h"])("div",{id:"sideMenu",class:"sideMenu-hiding"},[Object(o["h"])("div",null,[Object(o["h"])("a",{id:"gotoOverviewSideMenu",onclick:"gotoOverviewPage()",class:"active"},"overview"),Object(o["h"])("a",{id:"gotoMapSideMenu",onclick:"gotoMapPage()"},"map"),Object(o["h"])("a",{id:"gotoNewPostSideMenu",onclick:"gotoAddPostPage()"},"+ add post"),Object(o["h"])("a",{id:"gotoResetAllSideMenu",onclick:"resetLocalStorage()"},"reset all"),Object(o["h"])("a",{id:"gotoAboutPageSideMenu",onclick:"gotoAboutPage()"},"about")])],-1);Object(o["s"])();var O=i((function(e,t,n,a,r,c){var s=Object(o["z"])("router-link"),O=Object(o["z"])("Login");return Object(o["r"])(),Object(o["d"])("header",l,[Object(o["h"])(s,{to:{name:"Home"},id:"siteLogoName",class:"flex items-center  "},{default:i((function(){return[u,b]})),_:1}),r.showModal?(Object(o["r"])(),Object(o["d"])("div",d,[Object(o["h"])(O,{onCloseModal:c.closeModal},null,8,["onCloseModal"])])):Object(o["e"])("",!0),Object(o["h"])("nav",null,[Object(o["h"])("div",p,[Object(o["h"])(s,{class:" text-gray-700",to:"/about"},{default:i((function(){return[h]})),_:1}),Object(o["h"])(s,{class:" text-gray-700",to:"/check"},{default:i((function(){return[f]})),_:1}),c.isAuth?(Object(o["r"])(),Object(o["d"])(s,{key:0,class:" text-gray-700",to:"/new"},{default:i((function(){return[g]})),_:1})):Object(o["e"])("",!0),Object(o["h"])("a",{onClick:t[1]||(t[1]=function(){return c.toggleModal&&c.toggleModal.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Login/register"),c.isAuth?(Object(o["r"])(),Object(o["d"])("a",{key:1,onClick:t[2]||(t[2]=function(){return c.logout&&c.logout.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Logout")):Object(o["e"])("",!0)])]),m,j])})),v=(n("d3b7"),Object(o["F"])("data-v-cf48ccc0"));Object(o["u"])("data-v-cf48ccc0");var x={class:"backdrop"},w={class:" modal  w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  "},y=Object(o["h"])("h2",null,"Login ",-1),k=Object(o["h"])("input",{type:"text",name:"email"},null,-1),B=Object(o["h"])("br",null,null,-1),I=Object(o["h"])("input",{type:"password",name:"password"},null,-1),M=Object(o["h"])("br",null,null,-1),T=Object(o["h"])("button",{class:"primaryButton"},"Login",-1),L=Object(o["h"])("p",null,"or",-1),S=Object(o["h"])("div",{class:"text-gray-600 text-xs"},[Object(o["h"])("p",null,"s.haefelinger@gmx.de - x"),Object(o["h"])("p",null,"x@x.com - x"),Object(o["h"])("p",null,"test@test.com - test123")],-1),C={key:0};Object(o["s"])();var A=v((function(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",x,[Object(o["h"])("div",w,[y,Object(o["h"])("form",{onSubmit:t[1]||(t[1]=function(){return c.login&&c.login.apply(c,arguments)})},[k,B,I,M,T],32),L,Object(o["h"])("button",{onClick:t[2]||(t[2]=function(){return c.signIn&&c.signIn.apply(c,arguments)}),class:"secondaryButton"},"Sign In"),Object(o["h"])("button",{onClick:t[3]||(t[3]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)})},"cancel"),S,r.success?(Object(o["r"])(),Object(o["d"])("p",C,"hurra")):Object(o["e"])("",!0)])])})),F=n("6c02"),P={key:0},_={key:1},z={class:"flex "},H={class:"flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center"},E={key:2},R=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function N(e,t,n,a,r,c){var s=Object(o["z"])("Banner"),i=Object(o["z"])("Map"),l=Object(o["z"])("OverviewCard"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",P,Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.blogposts.length?(Object(o["r"])(),Object(o["d"])("div",_,[Object(o["h"])("div",null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"])]),Object(o["h"])(i,{locations:a.blogposts},null,8,["locations"]),Object(o["h"])("div",z,[Object(o["h"])("div",H,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(a.blogposts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"",key:e._id,onClick:function(t){return c.selectBlogpost(e)}},[Object(o["h"])(l,{blogpost:e},null,8,["blogpost"])],8,["onClick"])})),128))])])])):(Object(o["r"])(),Object(o["d"])("div",E,[R,Object(o["h"])(u)]))],64)}var D=n("1da1"),$=(n("96cf"),function(){var e=Object(o["w"])([]),t=Object(o["w"])(null),n="https://aroundtheworld-blog-server.herokuapp.com/",a=function(){var o=Object(D["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(n+"blogposts");case 3:if(a=o.sent,a.ok){o.next=6;break}throw Error("no data available");case 6:return o.next=8,a.json();case 8:e.value=o.sent,o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](0),t.value=o.t0.message;case 14:case"end":return o.stop()}}),o,null,[[0,11]])})));return function(){return o.apply(this,arguments)}}();return{blogposts:e,error:t,load:a}}),J=$,U=n("ba57"),W=n.n(U),G=Object(o["F"])("data-v-f810559a");Object(o["u"])("data-v-f810559a");var K={class:"bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  ",id:"bannerTitle"},V={class:" uppercase ",id:"bannerButton"};Object(o["s"])();var q=G((function(e,t,n,a,r,c){var s=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["d"])("div",{class:"bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0",id:"bannerImage",style:{backgroundImage:"url(".concat(n.bannerImage,")")}},[Object(o["h"])("p",K,Object(o["B"])(n.bannerText),1),Object(o["h"])(s,{to:"/".concat(n.bannerButtonLink)},{default:G((function(){return[Object(o["h"])("button",V,Object(o["B"])(n.bannerButtonText),1)]})),_:1},8,["to"])],4)})),X={props:["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]};n("fa8b");X.render=q,X.__scopeId="data-v-f810559a";var Q=X,Y=n("9611"),Z=n.n(Y),ee={class:" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"},te={class:"blogTextWrapper h-60 overflow-hidden px-8 pb-10"},ne={class:"mt-4 flex items-center"},oe={class:"text-gray-400 text-sm ml-2"},ae={class:"mt-1 text-base text-gray-600"},re={class:"text-2xl my-4"},ce={class:"font-light text-gray-600 text-base "},se=Object(o["h"])("div",{class:"cardBottom"},[Object(o["h"])("div",null,[Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Z.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")])])],-1);function ie(e,t,n,a,r,c){var s=Object(o["z"])("StarRating");return Object(o["r"])(),Object(o["d"])("div",ee,[Object(o["h"])("img",{class:"h-52 w-full object-cover  ",src:n.blogpost.image1URL,alt:"character"},null,8,["src"]),Object(o["h"])("div",te,[Object(o["h"])("div",ne,[Object(o["h"])(s,{rating:n.blogpost.rating},null,8,["rating"]),Object(o["h"])("p",oe,"Visited in "+Object(o["B"])(n.blogpost.month)+" "+Object(o["B"])(n.blogpost.year),1)]),Object(o["h"])("h2",ae,Object(o["B"])(n.blogpost.longName),1),Object(o["h"])("h3",re,Object(o["B"])(n.blogpost.title),1),Object(o["h"])("p",ce,Object(o["B"])(c.snippet),1)]),se])}n("a4d3"),n("e01a");var le={class:"flex "},ue=Object(o["h"])("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"},null,-1);function be(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",le,[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(5,(function(e){return Object(o["h"])("svg",{key:e,class:[e<=n.rating?"text-yellow-500":"text-gray-300","h-4 w-4 fill-current  "],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[ue],2)})),64))])}var de={name:"StarRating",props:["rating"]};de.render=be;var pe=de,he={name:"OverviewCard",components:{StarRating:pe},props:{blogpost:Object},computed:{snippet:function(){var e=this.blogpost.description||this.blogpost.wiki,t=140;return e.length>t&&(e=e.substring(0,t)+"…"),e}}};n("f67f");he.render=ie;var fe=he,ge={id:"mapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function me(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",ge)}n("159b"),n("99af"),n("b0c0");var je=n("4272"),Oe={props:["locations"],computed:{blogpostsFromStore:function(){return this.$store.getters.getAllBlogposts}},mounted:function(){var e=this.locations,t=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),n={maxZoom:10,minZoom:2,mapTypeControl:!1,streetViewControl:!1};t.loadCallback((function(t){if(t)console.log("🚫",t);else{var o=new google.maps.Map(document.getElementById("mapComponent"),n),a=new google.maps.LatLngBounds;e.forEach((function(e,t){var n=new google.maps.Marker({position:e.coords,map:o}),r=new google.maps.InfoWindow({content:'\n                <div class="infoWindow"  style="width: 200px;" >\n                  <h3 class="text-xl">'.concat(e.name,'</h3>\n                  <p class="my-2">').concat(e.title,'</p>\n                  <img class="h-16 w-full object-cover" src="').concat(e.image1URL,'">\n\n                  <a href="/#/details/').concat(e._id,'"> <button class="miniButton">read more</button></a> \n                </div>\n                <MapInfoWindow />\n                ')});n.addListener("click",(function(){r.open(o,n)})),a.extend(e.coords)})),o.fitBounds(a)}}))}};n("33e7");Oe.render=me;var ve=Oe,xe={class:"spin block w-14 h-14 my-24 mx-auto border-t-4  border-solid border-green-700 rounded-full border-transparent animate-spin"};function we(e,t){return Object(o["r"])(),Object(o["d"])("div",xe)}const ye={};ye.render=we;var ke=ye,Be={name:"Home",components:{Banner:Q,OverviewCard:fe,Spinner:ke,Map:ve},data:function(){return{bannerImage:W.a,bannerText:"The Travel Blog",bannerButtonText:"About",bannerButtonLink:"about"}},methods:{selectBlogpost:function(e){var t="/details/"+e._id;this.$router.push(t)}},setup:function(){var e=J(),t=e.blogposts,n=e.error,o=e.load;return o(),{blogposts:t,error:n}}};n("deb8");Be.render=N;var Ie=Be,Me={key:0},Te={key:1},Le={class:"flex justify-center"},Se={class:"detailsArticle relative text-gray-500 w-11/12 sm:w-3/5"},Ce={class:"detailsImgContainer shadow-lg flex "},Ae={class:"mt-8 text-gray-600 text-4xl"},Fe={class:"flex flex-row items-center  py-4"},Pe={class:"ml-4 text-gray-500"},_e={class:"text-2xl text-gray-700"},ze={class:"mt-4"},He={class:"mt-4"},Ee=Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Z.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")],-1),Re=Object(o["h"])("button",{class:"secondaryButton",onclick:"eraseEntryFromLocalStorage()"},"DELETE POST",-1),Ne=Object(o["h"])("button",{class:"primaryButton",onclick:"gotoOverviewPage()"},"< BACK",-1),De={key:2},$e=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function Je(e,t,n,a,r,c){var s=Object(o["z"])("Banner"),i=Object(o["z"])("StarRating"),l=Object(o["z"])("SingleMap"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",Me,"😱Error getting the details: "+Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.post?(Object(o["r"])(),Object(o["d"])("div",Te,[Object(o["h"])(s,{bannerImage:a.post.image1URL,bannerText:a.post.name,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["h"])("div",Le,[Object(o["h"])("div",Se,[Object(o["h"])("div",null,[Object(o["h"])("div",Ce,[Object(o["h"])("img",{class:"detailsImg2 md:mt-8 w-full object-cover rounded-md ",src:a.post.image2URL,alt:""},null,8,["src"])])]),Object(o["h"])("div",null,[Object(o["h"])("h2",Ae,Object(o["B"])(a.post.longName),1),Object(o["h"])("div",Fe,[Object(o["h"])(i,{rating:a.post.rating},null,8,["rating"]),Object(o["h"])("p",Pe,"Visited in "+Object(o["B"])(a.post.month)+" "+Object(o["B"])(a.post.year),1)]),Object(o["h"])("h3",_e,Object(o["B"])(a.post.title),1),Object(o["h"])("p",ze,Object(o["B"])(a.post.description),1),Object(o["h"])("p",He,Object(o["B"])(a.post.wiki),1)]),Ee,Object(o["h"])(l,{location:a.post.coords},null,8,["location"]),Re,Ne])])])):(Object(o["r"])(),Object(o["d"])("div",De,[$e,Object(o["h"])(u)]))],64)}var Ue={id:"singleMapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function We(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",Ue)}var Ge={props:["location"],mounted:function(){var e={coords:this.location},t=e.coords,n=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),o={zoom:7,center:t,mapTypeId:"hybrid",disableDefaultUI:!0};n.loadCallback((function(e){if(e)console.log(e);else{var n=new google.maps.Map(document.getElementById("singleMapComponent"),o);new google.maps.Marker({position:t,map:n})}}))}};n("3194");Ge.render=We;var Ke=Ge,Ve=function(e){var t=Object(o["w"])(null),n=Object(o["w"])(null),a="https://aroundtheworld-blog-server.herokuapp.com/",r=function(){var o=Object(D["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(a+"blogposts/"+e);case 3:if(r=o.sent,console.log("data im composable",r),r.ok){o.next=8;break}throw console.log("jetzt gibt es einen fehler..."),Error("🚫that post does not exist");case 8:return o.next=10,r.json();case 10:t.value=o.sent,console.log("post value",t.value),o.next=18;break;case 14:o.prev=14,o.t0=o["catch"](0),n.value=o.t0.message,console.log(n.value);case 18:case"end":return o.stop()}}),o,null,[[0,14]])})));return function(){return o.apply(this,arguments)}}();return{post:t,error:n,load:r}},qe=Ve,Xe={name:"Details",components:{Banner:Q,StarRating:pe,Spinner:ke,SingleMap:Ke},props:["id"],data:function(){return{bannerButtonText:"back",bannerButtonLink:"home"}},setup:function(){var e=Object(F["c"])(),t=e.params.id,n=qe(t),o=n.post,a=n.error,r=n.load;return r(),{post:o,error:a}}};n("1c24");Xe.render=Je;var Qe=Xe,Ye=Object(o["F"])("data-v-ff4461c6");Object(o["u"])("data-v-ff4461c6");var Ze=Object(o["h"])("div",{id:"aboutContainer"},[Object(o["h"])("div",{class:"aboutArticle"},[Object(o["h"])("h2",null,"Project 1 - Travel Blog"),Object(o["h"])("p",null,[Object(o["g"])(" This is my contribution for the second Project for the Full-Stack Web Development-Course at the "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School.")]),Object(o["h"])("p",null," It uses no Frameworks, just vanilla HTML, CSS and Javascript. "),Object(o["h"])("p",null,[Object(o["g"])(" All Information is stored in the Local Sorage of the Browser, the App fetches information from the APIs: "),Object(o["h"])("br"),Object(o["g"])(" - Google Maps "),Object(o["h"])("br"),Object(o["g"])(" - Wikipedia"),Object(o["h"])("br"),Object(o["g"])(" - Openweathermaps ")]),Object(o["h"])("a",{href:"https://github.com/shaefelinger/HCS-project1-travelBlog",target:"_blank"},[Object(o["h"])("i",{class:"fab fa-github"}),Object(o["g"])(" View this project and the documentation on Github ")])])],-1),et=Object(o["h"])("section",{class:"aboutBottom "},[Object(o["h"])("div",{class:"aboutAuthorInfo"},[Object(o["h"])("div",{class:"authorPic  aboutAuthorPic"},[Object(o["h"])("img",{src:Z.a})]),Object(o["h"])("p",{class:"author"},"Steffen Häfelinger")]),Object(o["h"])("p",{class:"aboutAuthorText"},[Object(o["g"])(" Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School."),Object(o["g"])(" He is also working as a professional Musician, Songwriter & Audio Engineer. ")])],-1);Object(o["s"])();var tt=Ye((function(e,t,n,a,r,c){var s=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Ze,et],64)})),nt=n("8c21"),ot=n.n(nt),at={name:"About",components:{Banner:Q},data:function(){return{bannerImage:ot.a,bannerText:"About this Project",bannerButtonText:"Back",bannerButtonLink:"home"}}};n("9499");at.render=tt,at.__scopeId="data-v-ff4461c6";var rt=at,ct={class:"formContainer"},st={action:"",id:"addPostForm"},it=Object(o["h"])("label",{for:"locationField",id:"locationLabel"},"Enter a Location*",-1),lt={ref:"searchTextField",id:"searchTextField",type:"text"},ut={ref:"test"},bt=Object(o["f"])('<hr id="searchTextUnderline" class="hidden"><label for="titleField">Enter a Title for the post*</label><input required type="text" placeholder="" name="titleField" id="titleField"><label for="monthInput">Enter the date of your trip</label><div class="dateContainer"><select required name="monthInput" id="monthField"><option value="January">January</option><option value="February">February</option><option value="March">March</option><option value="April">April</option><option value="May">May</option><option value="June">June</option><option value="July">July</option><option value="August">August</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="December">December</option></select><input required class="yearInput" type="number" placeholder="Enter the year" value="2020" min="1900" max="2100" id="yearField"></div><label for="rating">Rate your trip </label><select name="rating" id="ratingField"><option value="0" disabled="disabled" selected="selected">Enter Rating</option><option class="star" value="1">★</option><option value="2">★★</option><option value="3">★★★</option><option value="4">★★★★</option><option value="5">★★★★★</option></select><label for="descriptionField">Enter a description</label><textarea id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea><label for="wikiField">Edit Wikipedia Information</label><textarea id="wikiField" name="wikiField" rows="6" cols="80" placeholder=""></textarea><p class="miniText">* = required</p>',12),dt=Object(o["h"])("div",{class:"buttonContainer"},[Object(o["h"])("button",{class:"primaryButton",id:"submitButton",type:"button"},"SUBMIT"),Object(o["h"])("button",{class:"secondaryButton",onclick:"gotoOverviewPage()",type:"button"},"CANCEL"),Object(o["h"])("button",{class:"resetButton",onclick:"resetInputForm()",type:"button"},"reset form")],-1);function pt(e,t,n,a,r,c){var s=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["g"])(" New Post "+Object(o["B"])(r.status)+" ",1),Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),Object(o["h"])("div",ct,[Object(o["h"])("form",st,[it,Object(o["h"])("input",lt,null,512),Object(o["h"])("p",ut,null,512),bt,dt])])],64)}var ht=n("0d64"),ft=n.n(ht),gt=n("bc3a"),mt=n.n(gt),jt={name:"NewPost",components:{Banner:Q},data:function(){return{bannerImage:ft.a,bannerText:"Add new Post...",bannerButtonText:"Back",bannerButtonLink:"Home",status:"unklar",user:{name:"no user"}}},methods:{getUserData:function(){var e=this,t=this;mt.a.get("auth/user").then((function(n){e.user=n.data.user,e.status="drin",t.$set(e,"user",n.data.user)})).catch((function(t){console.log(t),e.status="nööö",Rt.push("/")}))}},mounted:function(){}};n("824a");jt.render=pt;var Ot=jt,vt=Object(o["h"])("h2",null,"Dashboard",-1);function xt(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",null,[vt,Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1)])}n("4ec9"),n("3ca3"),n("ddb0");var wt={name:"Login",components:{Map:Map},data:function(){return{user:{name:"no user"}}},methods:{getUserData:function(){var e=this,t="";mt.a.get(t+"/auth/user").then((function(t){console.log(e.user),console.log(t.data.user),e.user=t.data.user,console.log("success 😎")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUserData()}};wt.render=xt;var yt=wt,kt={class:"text-center mt-24"},Bt=Object(o["h"])("h2",{class:"text-6xl"},"404",-1),It=Object(o["h"])("h3",{class:"text-4xl"},"Page not Found",-1);function Mt(e,t){return Object(o["r"])(),Object(o["d"])("div",kt,[Bt,It])}const Tt={};Tt.render=Mt;var Lt=Tt,St=n("cf45"),Ct=n.n(St),At=Object(o["h"])("h1",{class:"mt-20 text-5xl text-center text-gray-500"},"Sign In-Page is coming soon...",-1),Ft=Object(o["h"])("img",{class:"w-96 m-auto",src:Ct.a,alt:""},null,-1);function Pt(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])(o["a"],null,[At,Ft],64)}var _t={};_t.render=Pt;var zt=_t,Ht=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Ie},{path:"/new",name:"NewPost",component:Ot},{path:"/details/:id",name:"Details",component:Qe,props:!0},{path:"/check",name:"Check",component:yt},{path:"/about",name:"About",component:rt},{path:"/signin",name:"SignIn",component:zt},{path:"/:catchAll(.*)",name:"NotFound",component:Lt}],Et=Object(F["a"])({history:Object(F["b"])(),routes:Ht}),Rt=Et,Nt={name:"Login",data:function(){return{success:!1}},methods:{closeModal:function(){this.$emit("closeModal")},redirect:function(){this.$router.push({name:"Home"})},signIn:function(){this.closeModal(),this.$router.push({name:"SignIn"})},login:function(e){var t=this;e.preventDefault();var n=e.target.elements.email.value,o=e.target.elements.password.value,a=function(){var e={email:n,password:o};mt.a.post("/auth/login",e).then((function(e){console.log("Logged in from LOGIN",e),t.$emit("closeModal")})).catch((function(e){console.log("Cannot log in from LOGIN",e)}))};a()}}};n("4e8f");Nt.render=A,Nt.__scopeId="data-v-cf48ccc0";var Dt=Nt,$t={name:"Header",components:{Login:Dt},methods:{login:function(){this.showModal=!this.showModal},logout:function(){var e=this;this.$store.dispatch("logout");fetch("auth/logout").then((function(t){console.log(t),e.closeModal(),e.$router.push("/home")})).catch((function(e){console.log(e)}))},toggleModal:function(){this.showModal=!this.showModal},closeModal:function(){this.showModal=!1}},computed:{user:function(){return this.$store.getters.user},isAuth:function(){return this.$store.getters.userIsAuthenticated}},data:function(){return{showModal:!1}}};n("b5ed");$t.render=O,$t.__scopeId="data-v-d3062b12";var Jt=$t,Ut=Object(o["F"])("data-v-58b4a54e");Object(o["u"])("data-v-58b4a54e");var Wt={class:"footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"},Gt=Object(o["f"])('<div class=" text-sm text-gray-900" data-v-58b4a54e><a href="https://www.steffen-haefelinger.com/" target="_blank" data-v-58b4a54e> © 2021 Steffen Häfelinger </a></div><div data-v-58b4a54e><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de" data-v-58b4a54e><i class="fas fa-envelope" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger" data-v-58b4a54e><i class="fab fa-github" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/" data-v-58b4a54e><i class="fab fa-facebook-f" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/" data-v-58b4a54e><i class="fab fa-instagram" data-v-58b4a54e></i></a></div>',2);Object(o["s"])();var Kt=Ut((function(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("footer",Wt,[Gt])})),Vt={name:"Footer"};n("d542");Vt.render=Kt,Vt.__scopeId="data-v-58b4a54e";var qt=Vt,Xt={name:"app",components:{Header:Jt,Footer:qt},computed:{user:function(){return this.$store.getters.user}}};n("ddd0");Xt.render=r;var Qt=Xt,Yt=n("5502"),Zt=Object(Yt["a"])({modules:{},state:{user:1,currentUser:{},isLoggedIn:!0},getters:{userIsAuthenticated:function(e){return e.isLoggedIn},user:function(e){return e.user}},mutations:{setAuth:function(e,t){e.isLoggedIn=t.isAuth}},actions:{}});n("320b"),n("db43");Object(o["c"])(Qt).use(Zt).use(Rt).mount("#app")},"59cb":function(e,t,n){},"63a6":function(e,t,n){},"72f3":function(e,t,n){},"824a":function(e,t,n){"use strict";n("2969")},"8c21":function(e,t,n){e.exports=n.p+"img/banner3.56f83583.jpg"},9201:function(e,t,n){},9499:function(e,t,n){"use strict";n("96f5")},9611:function(e,t,n){e.exports=n.p+"img/Steffen_square.0ba80248.png"},"96f5":function(e,t,n){},b5ed:function(e,t,n){"use strict";n("9201")},ba57:function(e,t,n){e.exports=n.p+"img/banner1.6a666baa.jpg"},c432:function(e,t,n){},cf45:function(e,t,n){e.exports=n.p+"img/underconstruction.15335cf3.jpg"},cfcc:function(e,t,n){},d542:function(e,t,n){"use strict";n("01f3")},db43:function(e,t,n){},ddd0:function(e,t,n){"use strict";n("cfcc")},deb8:function(e,t,n){"use strict";n("0c2b")},f67f:function(e,t,n){"use strict";n("c432")},fa8b:function(e,t,n){"use strict";n("59cb")}});
//# sourceMappingURL=app.780ba96f.js.map