(function(e){function t(t){for(var o,c,s=t[0],l=t[1],i=t[2],b=0,d=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f3":function(e,t,n){},"08dd":function(e,t,n){"use strict";n("3cc5")},"0d64":function(e,t,n){e.exports=n.p+"img/banner2.fd9ce212.jpg"},3194:function(e,t,n){"use strict";n("4c71")},"33e7":function(e,t,n){"use strict";n("4094")},"3a2a":function(e,t,n){"use strict";n("73d5")},"3cc5":function(e,t,n){},4094:function(e,t,n){},"47de":function(e,t,n){e.exports=n.p+"img/world.86318bf7.png"},"4c71":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col justify-between h-screen"};function r(e,t,n,r,c,s){var l=Object(o["z"])("Header"),i=Object(o["z"])("router-view"),u=Object(o["z"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["h"])(l,{class:"flex-shrink-0"}),Object(o["h"])(i),Object(o["h"])(u,{class:"flex-shrink-0"})])}var c=n("47de"),s=n.n(c),l=Object(o["H"])("data-v-76f04fe4");Object(o["u"])("data-v-76f04fe4");var i={class:"header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md"},u=Object(o["h"])("div",{class:" w-9 lg:w-16 "},[Object(o["h"])("img",{class:" object-fill   ",src:s.a,alt:"logo"})],-1),b=Object(o["h"])("span",{class:"pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium "},"Around the World",-1),d={key:0},p={class:"p-6",id:"nav"},h=Object(o["g"])("Overview"),g=Object(o["g"])("About"),f=Object(o["g"])("Check"),m=Object(o["g"])("+new post"),j=Object(o["h"])("a",{id:"burger",class:"burger",href:"#"},[Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),O=Object(o["h"])("div",{id:"sideMenu",class:"sideMenu-hiding"},[Object(o["h"])("div",null,[Object(o["h"])("a",{id:"gotoOverviewSideMenu",onclick:"gotoOverviewPage()",class:"active"},"overview"),Object(o["h"])("a",{id:"gotoMapSideMenu",onclick:"gotoMapPage()"},"map"),Object(o["h"])("a",{id:"gotoNewPostSideMenu",onclick:"gotoAddPostPage()"},"+ add post"),Object(o["h"])("a",{id:"gotoResetAllSideMenu",onclick:"resetLocalStorage()"},"reset all"),Object(o["h"])("a",{id:"gotoAboutPageSideMenu",onclick:"gotoAboutPage()"},"about")])],-1);Object(o["s"])();var v=l((function(e,t,n,a,r,c){var s=Object(o["z"])("router-link"),v=Object(o["z"])("Modal");return Object(o["r"])(),Object(o["d"])("header",i,[Object(o["h"])(s,{to:{name:"Home"},id:"siteLogoName",class:"flex items-center  "},{default:l((function(){return[u,b]})),_:1}),r.showModal?(Object(o["r"])(),Object(o["d"])("div",d,[Object(o["h"])(v,{theme:"",onCloseModal:c.toggleModal},null,8,["onCloseModal"])])):Object(o["e"])("",!0),Object(o["h"])("span",null,"isAuth: "+Object(o["B"])(c.isAuth),1),Object(o["h"])("nav",null,[Object(o["h"])("div",p,[Object(o["h"])(s,{class:" text-gray-700",to:{name:"Home"}},{default:l((function(){return[h]})),_:1}),Object(o["h"])(s,{class:" text-gray-700",to:"/about"},{default:l((function(){return[g]})),_:1}),Object(o["h"])(s,{class:" text-gray-700",to:"/check"},{default:l((function(){return[f]})),_:1}),c.isAuth?(Object(o["r"])(),Object(o["d"])(s,{key:0,class:" text-gray-700",to:"/new"},{default:l((function(){return[m]})),_:1})):Object(o["e"])("",!0),c.isAuth?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("a",{key:1,onClick:t[1]||(t[1]=function(){return c.login&&c.login.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Login/register")),c.isAuth?(Object(o["r"])(),Object(o["d"])("a",{key:2,onClick:t[2]||(t[2]=function(){return c.logout&&c.logout.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Logout")):Object(o["e"])("",!0)])]),j,O])})),x=(n("d3b7"),{class:" w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  "});function w(e,t,n,a,r,c){var s=Object(o["z"])("Login");return Object(o["r"])(),Object(o["d"])("div",{class:"backdrop",onClick:t[1]||(t[1]=Object(o["G"])((function(){return c.closeModal&&c.closeModal.apply(c,arguments)}),["self"]))},[Object(o["h"])("div",x,[Object(o["h"])(s)])])}var y=Object(o["h"])("h2",null,"Login",-1),k=Object(o["h"])("input",{type:"text",name:"email"},null,-1),B=Object(o["h"])("br",null,null,-1),M=Object(o["h"])("input",{type:"password",name:"password"},null,-1),T=Object(o["h"])("br",null,null,-1),L=Object(o["h"])("input",{type:"submit",value:"Login"},null,-1),A=Object(o["h"])("p",null,"s.haefelinger@gmx.de - x",-1),I=Object(o["h"])("p",null,"x@x.com - x",-1),S=Object(o["h"])("p",null,"test@test.com - test123",-1);function C(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",null,[y,Object(o["h"])("form",{onSubmit:t[1]||(t[1]=function(){return c.login&&c.login.apply(c,arguments)})},[k,B,M,T,L],32),A,I,S])}var P=n("6c02"),z={key:0},F={key:1},_={class:"flex "},H={class:"flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center"},E={key:2},R=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function D(e,t,n,a,r,c){var s=Object(o["z"])("Banner"),l=Object(o["z"])("Map"),i=Object(o["z"])("OverviewCard"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",z,Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.blogposts.length?(Object(o["r"])(),Object(o["d"])("div",F,[Object(o["h"])("div",null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"])]),Object(o["h"])(l,{locations:a.blogposts},null,8,["locations"]),Object(o["h"])("div",_,[Object(o["h"])("div",H,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(a.blogposts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"",key:e._id,onClick:function(t){return c.selectBlogpost(e)}},[Object(o["h"])(i,{blogpost:e},null,8,["blogpost"])],8,["onClick"])})),128))])])])):(Object(o["r"])(),Object(o["d"])("div",E,[R,Object(o["h"])(u)]))],64)}var N=n("1da1"),U=(n("96cf"),function(){var e=Object(o["w"])([]),t=Object(o["w"])(null),n="https://aroundtheworld-blog-server.herokuapp.com/",a=function(){var o=Object(N["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(n+"blogposts");case 3:if(a=o.sent,a.ok){o.next=6;break}throw Error("no data available");case 6:return o.next=8,a.json();case 8:e.value=o.sent,o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](0),t.value=o.t0.message;case 14:case"end":return o.stop()}}),o,null,[[0,11]])})));return function(){return o.apply(this,arguments)}}();return{blogposts:e,error:t,load:a}}),J=U,W=n("ba57"),G=n.n(W),$=Object(o["H"])("data-v-55c74075");Object(o["u"])("data-v-55c74075");var K={class:"bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  ",id:"bannerTitle"},V={class:"uppercase ",onclick:"gotoAboutPage()",id:"bannerButton"};Object(o["s"])();var q=$((function(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",{class:"bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0",id:"bannerImage",style:{backgroundImage:"url(".concat(n.bannerImage,")")}},[Object(o["h"])("p",K,Object(o["B"])(n.bannerText),1),Object(o["h"])("button",V,Object(o["B"])(n.bannerButtonText),1)],4)})),X={props:["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]};n("08dd");X.render=q,X.__scopeId="data-v-55c74075";var Q=X,Y=n("9611"),Z=n.n(Y),ee={class:" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"},te={class:"blogTextWrapper h-60 overflow-hidden px-8 pb-10"},ne={class:"mt-4 flex items-center"},oe={class:"text-gray-400 text-sm ml-2"},ae={class:"mt-1 text-base text-gray-600"},re={class:"text-2xl my-4"},ce={class:"font-light text-gray-600 text-base "},se=Object(o["h"])("div",{class:"cardBottom"},[Object(o["h"])("div",null,[Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Z.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")])])],-1);function le(e,t,n,a,r,c){var s=Object(o["z"])("StarRating");return Object(o["r"])(),Object(o["d"])("div",ee,[Object(o["h"])("img",{class:"h-52 w-full object-cover  ",src:n.blogpost.image1URL,alt:"character"},null,8,["src"]),Object(o["h"])("div",te,[Object(o["h"])("div",ne,[Object(o["h"])(s,{rating:n.blogpost.rating},null,8,["rating"]),Object(o["h"])("p",oe,"Visited in "+Object(o["B"])(n.blogpost.month)+" "+Object(o["B"])(n.blogpost.year),1)]),Object(o["h"])("h2",ae,Object(o["B"])(n.blogpost.longName),1),Object(o["h"])("h3",re,Object(o["B"])(n.blogpost.title),1),Object(o["h"])("p",ce,Object(o["B"])(c.snippet),1)]),se])}n("a4d3"),n("e01a");var ie={class:"flex "},ue=Object(o["h"])("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"},null,-1);function be(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",ie,[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(5,(function(e){return Object(o["h"])("svg",{key:e,class:[e<=n.rating?"text-yellow-500":"text-gray-300","h-4 w-4 fill-current  "],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[ue],2)})),64))])}var de={name:"StarRating",props:["rating"]};de.render=be;var pe=de,he={name:"OverviewCard",components:{StarRating:pe},props:{blogpost:Object},computed:{snippet:function(){var e=this.blogpost.description||this.blogpost.wiki,t=140;return e.length>t&&(e=e.substring(0,t)+"…"),e}}};n("f67f");he.render=le;var ge=he,fe={id:"mapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function me(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",fe)}n("159b"),n("99af"),n("b0c0");var je=n("4272"),Oe={props:["locations"],computed:{blogpostsFromStore:function(){return this.$store.getters.getAllBlogposts}},mounted:function(){var e=this.locations,t=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),n={maxZoom:10,minZoom:2,mapTypeControl:!1,streetViewControl:!1};t.loadCallback((function(t){if(t)console.log("🚫",t);else{var o=new google.maps.Map(document.getElementById("mapComponent"),n),a=new google.maps.LatLngBounds;e.forEach((function(e,t){var n=new google.maps.Marker({position:e.coords,map:o}),r=new google.maps.InfoWindow({content:'\n                <div class="infoWindow"  style="width: 200px;" >\n                  <h3 class="text-xl">'.concat(e.name,'</h3>\n                  <p class="my-2">').concat(e.title,'</p>\n                  <img class="h-16 w-full object-cover" src="').concat(e.image1URL,'">\n\n                  <a href="/#/details/').concat(e._id,'"> <button class="miniButton">read more</button></a> \n                </div>\n                <MapInfoWindow />\n                ')});n.addListener("click",(function(){r.open(o,n)})),a.extend(e.coords)})),o.fitBounds(a)}}))}};n("33e7");Oe.render=me;var ve=Oe,xe={class:"spin block w-14 h-14 my-24 mx-auto border-t-4  border-solid border-green-700 rounded-full border-transparent animate-spin"};function we(e,t){return Object(o["r"])(),Object(o["d"])("div",xe)}const ye={};ye.render=we;var ke=ye,Be={name:"Home",components:{Banner:Q,OverviewCard:ge,Spinner:ke,Map:ve},data:function(){return{bannerImage:G.a,bannerText:"The Travel Blog",bannerButtonText:"About",bannerButtonLink:"About"}},methods:{selectBlogpost:function(e){var t="/details/"+e._id;this.$router.push(t)}},setup:function(){var e=J(),t=e.blogposts,n=e.error,o=e.load;return o(),{blogposts:t,error:n}}};n("84e8");Be.render=D;var Me=Be,Te={key:0},Le={key:1},Ae={class:"flex justify-center"},Ie={class:"detailsArticle relative text-gray-500 w-11/12 sm:w-3/5"},Se={class:"detailsImgContainer shadow-lg flex "},Ce={class:"mt-8 text-gray-600 text-4xl"},Pe={class:"flex flex-row items-center  py-4"},ze={class:"ml-4 text-gray-500"},Fe={class:"text-2xl text-gray-700"},_e={class:"mt-4"},He={class:"mt-4"},Ee=Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Z.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")],-1),Re=Object(o["h"])("button",{class:"secondaryButton",onclick:"eraseEntryFromLocalStorage()"},"DELETE POST",-1),De=Object(o["h"])("button",{class:"primaryButton",onclick:"gotoOverviewPage()"},"< BACK",-1),Ne={key:2},Ue=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function Je(e,t,n,a,r,c){var s=Object(o["z"])("Banner"),l=Object(o["z"])("StarRating"),i=Object(o["z"])("SingleMap"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",Te,"😱Error getting the details: "+Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.post?(Object(o["r"])(),Object(o["d"])("div",Le,[Object(o["h"])(s,{bannerImage:a.post.image1URL,bannerText:a.post.name,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["h"])("div",Ae,[Object(o["h"])("div",Ie,[Object(o["h"])("div",null,[Object(o["h"])("div",Se,[Object(o["h"])("img",{class:"detailsImg2 md:mt-8 w-full object-cover rounded-md ",src:a.post.image2URL,alt:""},null,8,["src"])])]),Object(o["h"])("div",null,[Object(o["h"])("h2",Ce,Object(o["B"])(a.post.longName),1),Object(o["h"])("div",Pe,[Object(o["h"])(l,{rating:a.post.rating},null,8,["rating"]),Object(o["h"])("p",ze,"Visited in "+Object(o["B"])(a.post.month)+" "+Object(o["B"])(a.post.year),1)]),Object(o["h"])("h3",Fe,Object(o["B"])(a.post.title),1),Object(o["h"])("p",_e,Object(o["B"])(a.post.description),1),Object(o["h"])("p",He,Object(o["B"])(a.post.wiki),1)]),Ee,Object(o["h"])(i,{location:a.post.coords},null,8,["location"]),Re,De])])])):(Object(o["r"])(),Object(o["d"])("div",Ne,[Ue,Object(o["h"])(u)]))],64)}var We={id:"singleMapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function Ge(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",We)}var $e={props:["location"],mounted:function(){var e={coords:this.location},t=e.coords,n=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),o={zoom:7,center:t,mapTypeId:"hybrid",disableDefaultUI:!0};n.loadCallback((function(e){if(e)console.log(e);else{var n=new google.maps.Map(document.getElementById("singleMapComponent"),o);new google.maps.Marker({position:t,map:n})}}))}};n("3194");$e.render=Ge;var Ke=$e,Ve=function(e){var t=Object(o["w"])(null),n=Object(o["w"])(null),a="https://aroundtheworld-blog-server.herokuapp.com/",r=function(){var o=Object(N["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(a+"blogposts/"+e);case 3:if(r=o.sent,console.log("data im composable",r),r.ok){o.next=8;break}throw console.log("jetzt gibt es einen fehler..."),Error("🚫that post does not exist");case 8:return o.next=10,r.json();case 10:t.value=o.sent,console.log("post value",t.value),o.next=18;break;case 14:o.prev=14,o.t0=o["catch"](0),n.value=o.t0.message,console.log(n.value);case 18:case"end":return o.stop()}}),o,null,[[0,14]])})));return function(){return o.apply(this,arguments)}}();return{post:t,error:n,load:r}},qe=Ve,Xe={name:"Details",components:{Banner:Q,StarRating:pe,Spinner:ke,SingleMap:Ke},props:["id"],data:function(){return{bannerButtonText:"back",bannerButtonLink:"About"}},setup:function(e){var t=Object(P["c"])(),n=t.params.id,o=qe(n),a=o.post,r=o.error,c=o.load;return c(),console.log("error aus details",r),{post:a,error:r}}};n("b6c9");Xe.render=Je;var Qe=Xe,Ye=Object(o["H"])("data-v-160e2efd");Object(o["u"])("data-v-160e2efd");var Ze=Object(o["h"])("div",{id:"aboutContainer"},[Object(o["h"])("div",{class:"aboutArticle"},[Object(o["h"])("h2",null,"Project 1 - Travel Blog"),Object(o["h"])("p",null,[Object(o["g"])(" This is my contribution for the second Project for the Full-Stack Web Development-Course at the "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School.")]),Object(o["h"])("p",null," It uses no Frameworks, just vanilla HTML, CSS and Javascript. "),Object(o["h"])("p",null,[Object(o["g"])(" All Information is stored in the Local Sorage of the Browser, the App fetches information from the APIs: "),Object(o["h"])("br"),Object(o["g"])(" - Google Maps "),Object(o["h"])("br"),Object(o["g"])(" - Wikipedia"),Object(o["h"])("br"),Object(o["g"])(" - Openweathermaps ")]),Object(o["h"])("a",{href:"https://github.com/shaefelinger/HCS-project1-travelBlog",target:"_blank"},[Object(o["h"])("i",{class:"fab fa-github"}),Object(o["g"])(" View this project and the documentation on Github ")])])],-1),et=Object(o["h"])("section",{class:"aboutBottom "},[Object(o["h"])("div",{class:"aboutAuthorInfo"},[Object(o["h"])("div",{class:"authorPic  aboutAuthorPic"},[Object(o["h"])("img",{src:Z.a})]),Object(o["h"])("p",{class:"author"},"Steffen Häfelinger")]),Object(o["h"])("p",{class:"aboutAuthorText"},[Object(o["g"])(" Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School."),Object(o["g"])(" He is also working as a professional Musician, Songwriter & Audio Engineer. ")])],-1);Object(o["s"])();var tt=Ye((function(e,t,n,a,r,c){var s=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Ze,et],64)})),nt=n("8c21"),ot=n.n(nt),at={name:"About",components:{Banner:Q},data:function(){return{bannerImage:ot.a,bannerText:"About this Project",bannerButtonText:"Back",bannerButtonLink:"Home"}}};n("3a2a");at.render=tt,at.__scopeId="data-v-160e2efd";var rt=at,ct=Object(o["f"])('<div class="formContainer"><form action="" id="addPostForm"><label for="locationField" id="locationLabel">Enter a Location*</label><input id="searchTextField" name="locationField" type="text" size="50" placeholder="" autocomplete="on"><hr id="searchTextUnderline" class="hidden"><label for="titleField">Enter a Title for the post*</label><input required type="text" placeholder="" name="titleField" id="titleField"><label for="monthInput">Enter the date of your trip</label><div class="dateContainer"><select required name="monthInput" id="monthField"><option value="January">January</option><option value="February">February</option><option value="March">March</option><option value="April">April</option><option value="May">May</option><option value="June">June</option><option value="July">July</option><option value="August">August</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="December">December</option></select><input required class="yearInput" type="number" placeholder="Enter the year" value="2020" min="1900" max="2100" id="yearField"></div><label for="rating">Rate your trip </label><select name="rating" id="ratingField"><option value="0" disabled="disabled" selected="selected">Enter Rating</option><option class="star" value="1">★</option><option value="2">★★</option><option value="3">★★★</option><option value="4">★★★★</option><option value="5">★★★★★</option></select><label for="descriptionField">Enter a description</label><textarea id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea><label for="wikiField">Edit Wikipedia Information</label><textarea id="wikiField" name="wikiField" rows="6" cols="80" placeholder=""></textarea><p class="miniText">* = required</p></form></div>',1);function st(e,t,n,a,r,c){var s=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["g"])(" New Post "+Object(o["B"])(r.status)+" ",1),Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),ct],64)}var lt=n("0d64"),it=n.n(lt),ut=n("bc3a"),bt=n.n(ut),dt={name:"NewPost",components:{Banner:Q},data:function(){return{bannerImage:it.a,bannerText:"Add new Post...",bannerButtonText:"Back",bannerButtonLink:"Home",status:"unklar",user:{name:"no user"}}},methods:{getUserData:function(){var e=this;bt.a.get("auth/user").then((function(t){e.user=t.data.user,e.status="drin"})).catch((function(t){console.log(t),e.status="nööö",Bt.push("/")}))}},mounted:function(){this.getUserData()}};n("dfb6");dt.render=st;var pt=dt,ht=Object(o["h"])("h2",null,"Dashboard",-1);function gt(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("div",null,[ht,Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1)])}n("4ec9"),n("3ca3"),n("ddb0");var ft={name:"Login",components:{Map:Map},data:function(){return{user:{name:"no user"}}},methods:{getUserData:function(){var e=this,t="";bt.a.defaults.withCredentials=!0,bt.a.get(t+"/auth/user").then((function(t){console.log(e.user),console.log(t.data.user),e.user=t.data.user,console.log("success 😎")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUserData()}};ft.render=gt;var mt=ft,jt=Object(o["h"])("h2",{class:"text-6xl"},"404",-1),Ot=Object(o["h"])("h3",{class:"text-4xl"},"Page not Found",-1);function vt(e,t,n,a,r,c){var s=Object(o["z"])("dic");return Object(o["r"])(),Object(o["d"])(s,{class:"text-center mt-24"},{default:Object(o["F"])((function(){return[jt,Ot]})),_:1})}var xt={};xt.render=vt;var wt=xt,yt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Me},{path:"/new",name:"NewPost",component:pt},{path:"/details/:id",name:"Details",component:Qe,props:!0},{path:"/check",name:"Check",component:mt},{path:"/about",name:"About",component:rt},{path:"/:catchAll(.*)",name:"NotFound",component:wt}],kt=Object(P["a"])({history:Object(P["b"])(),routes:yt}),Bt=kt,Mt={name:"Login",methods:{login:function(e){e.preventDefault();var t=e.target.elements.email.value,n=e.target.elements.password.value;bt.a.defaults.withCredentials=!0;var o=function(){var e={email:t,password:n};bt.a.post("/auth/login",e).then((function(e){console.log("Logged in from LOGIN")})).catch((function(e){console.log("Cannot log in from LOGIN")}))};o()}}};Mt.render=C;var Tt=Mt,Lt={components:{Login:Tt},methods:{closeModal:function(){this.$emit("closeModal")}},props:["header","text"]};Lt.render=w;var At=Lt,It={name:"Header",components:{Modal:At},methods:{login:function(){this.$store.dispatch("login"),this.showModal=!this.showModal},logout:function(){this.$store.dispatch("logout");var e="";fetch(e+"auth/logout").then((function(e){console.log(e)}))},toggleModal:function(){this.showModal=!this.showModal}},computed:{user:function(){return this.$store.getters.user},isAuth:function(){return this.$store.getters.userIsAuthenticated}},data:function(){return{showModal:!1}}};n("a54c");It.render=v,It.__scopeId="data-v-76f04fe4";var St=It,Ct=Object(o["H"])("data-v-58b4a54e");Object(o["u"])("data-v-58b4a54e");var Pt={class:"footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"},zt=Object(o["f"])('<div class=" text-sm text-gray-900" data-v-58b4a54e><a href="https://www.steffen-haefelinger.com/" target="_blank" data-v-58b4a54e> © 2021 Steffen Häfelinger </a></div><div data-v-58b4a54e><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de" data-v-58b4a54e><i class="fas fa-envelope" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger" data-v-58b4a54e><i class="fab fa-github" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/" data-v-58b4a54e><i class="fab fa-facebook-f" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/" data-v-58b4a54e><i class="fab fa-instagram" data-v-58b4a54e></i></a></div>',2);Object(o["s"])();var Ft=Ct((function(e,t,n,a,r,c){return Object(o["r"])(),Object(o["d"])("footer",Pt,[zt])})),_t={name:"Footer"};n("d542");_t.render=Ft,_t.__scopeId="data-v-58b4a54e";var Ht=_t,Et={name:"app",components:{Header:St,Footer:Ht},computed:{user:function(){return this.$store.getters.user}}};n("b971");Et.render=r;var Rt=Et,Dt=n("5502"),Nt=Object(Dt["a"])({state:{initialized:!0,user:1,allBlogposts:[],currentBlogpost:{name:"store",coords:{lat:34.052235,lng:118.243683}},allUsers:[],currentUser:{},isLoggedIn:!0},getters:{userIsAuthenticated:function(e){return e.isLoggedIn},initialized:function(e){return e.initialized},user:function(e){return e.user},getAllBlogposts:function(e){return e.allBlogposts},getCurrentBlogpost:function(e){return console.log("getCurrentBlogpost",e.currentBlogpost),e.currentBlogpost}},mutations:{initialized:function(e,t){e.initialized=t},user:function(e,t){e.user=t},setAuth:function(e,t){e.isLoggedIn=t.isAuth},setAllBlogposts:function(e,t){console.log("😎all blogbosts mutated"),e.allBlogposts=t},setCurrentBlogpost:function(e,t){console.log("currentBlogpost mutated",t),e.currentBlogpost=t}},actions:{login:function(e){e.commit("setAuth",{isAuth:!0}),console.log("login")},logout:function(e){e.commit("setAuth",{isAuth:!1}),console.log("logout")},setAllBlogposts:function(e,t){console.log("action: store all blogposts in store"),e.commit("setAllBlogposts",t)},setCurrentBlogpost:function(e,t){console.log("action: store current blogposts in store"),e.commit("setCurrentBlogpost",t)}},modules:{}});n("320b"),n("db43");Object(o["c"])(Rt).use(Nt).use(Bt).mount("#app")},"73d5":function(e,t,n){},7844:function(e,t,n){},"84e8":function(e,t,n){"use strict";n("bcf7")},"8c21":function(e,t,n){e.exports=n.p+"img/banner3.56f83583.jpg"},"947b":function(e,t,n){},9571:function(e,t,n){},9611:function(e,t,n){e.exports=n.p+"img/Steffen_square.0ba80248.png"},a54c:function(e,t,n){"use strict";n("7844")},b6c9:function(e,t,n){"use strict";n("947b")},b971:function(e,t,n){"use strict";n("d40b")},ba57:function(e,t,n){e.exports=n.p+"img/banner1.6a666baa.jpg"},bcf7:function(e,t,n){},c432:function(e,t,n){},d40b:function(e,t,n){},d542:function(e,t,n){"use strict";n("01f3")},db43:function(e,t,n){},dfb6:function(e,t,n){"use strict";n("9571")},f67f:function(e,t,n){"use strict";n("c432")}});
//# sourceMappingURL=app.250712c8.js.map