(function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],b=0,d=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f3":function(e,t,n){},"08dd":function(e,t,n){"use strict";n("3cc5")},"0a47":function(e,t,n){},"0d64":function(e,t,n){e.exports=n.p+"img/banner2.fd9ce212.jpg"},1874:function(e,t,n){},"1d4d":function(e,t,n){"use strict";n("5318")},"3a2a":function(e,t,n){"use strict";n("73d5")},"3cc5":function(e,t,n){},"47de":function(e,t,n){e.exports=n.p+"img/world.86318bf7.png"},"4cd0":function(e,t,n){},5318:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col justify-between h-screen"};function r(e,t,n,r,i,c){var l=Object(o["z"])("Header"),s=Object(o["z"])("router-view"),u=Object(o["z"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["h"])(l,{class:"flex-shrink-0"}),Object(o["h"])(s,{class:"mb-80"}),Object(o["h"])(u,{class:"flex-shrink-0"})])}var i=n("47de"),c=n.n(i),l=Object(o["H"])("data-v-0420a6a5");Object(o["u"])("data-v-0420a6a5");var s={class:"header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md"},u=Object(o["h"])("a",{id:"siteLogoName",href:"./index.html",class:"flex items-center  "},[Object(o["h"])("div",{class:" w-9 lg:w-16 "},[Object(o["h"])("img",{class:" object-fill   ",src:c.a,alt:"logo"})]),Object(o["h"])("span",{class:"pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium "},"Around the World")],-1),b={key:0},d={class:"p-6",id:"nav"},p=Object(o["g"])("Overview"),h=Object(o["g"])("About"),f=Object(o["g"])("+new post"),g=Object(o["h"])("a",{id:"burger",class:"burger",href:"#"},[Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),m=Object(o["h"])("div",{id:"sideMenu",class:"sideMenu-hiding"},[Object(o["h"])("div",null,[Object(o["h"])("a",{id:"gotoOverviewSideMenu",onclick:"gotoOverviewPage()",class:"active"},"overview"),Object(o["h"])("a",{id:"gotoMapSideMenu",onclick:"gotoMapPage()"},"map"),Object(o["h"])("a",{id:"gotoNewPostSideMenu",onclick:"gotoAddPostPage()"},"+ add post"),Object(o["h"])("a",{id:"gotoResetAllSideMenu",onclick:"resetLocalStorage()"},"reset all"),Object(o["h"])("a",{id:"gotoAboutPageSideMenu",onclick:"gotoAboutPage()"},"about")])],-1);Object(o["s"])();var j=l((function(e,t,n,a,r,i){var c=Object(o["z"])("Modal"),j=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["d"])("header",s,[u,r.showModal?(Object(o["r"])(),Object(o["d"])("div",b,[Object(o["h"])(c,{theme:"",onCloseModal:i.toggleModal},null,8,["onCloseModal"])])):Object(o["e"])("",!0),Object(o["h"])("nav",null,[Object(o["h"])("div",d,[Object(o["h"])(j,{class:" text-gray-700",to:{name:"Home"}},{default:l((function(){return[p]})),_:1}),Object(o["h"])(j,{class:" text-gray-700",to:"/about"},{default:l((function(){return[h]})),_:1}),e.isAuth?(Object(o["r"])(),Object(o["d"])(j,{key:0,class:" text-gray-700",to:"/new"},{default:l((function(){return[f]})),_:1})):Object(o["e"])("",!0),e.isAuth?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("a",{key:1,onClick:t[1]||(t[1]=function(){return i.login&&i.login.apply(i,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Login/register")),e.isAuth?(Object(o["r"])(),Object(o["d"])("a",{key:2,onClick:t[2]||(t[2]=function(){return i.logout&&i.logout.apply(i,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Logout")):Object(o["e"])("",!0)])]),g,m])})),O=n("5530"),v=n("5502"),x={class:" w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  "};function w(e,t,n,a,r,i){var c=Object(o["z"])("Login");return Object(o["r"])(),Object(o["d"])("div",{class:"backdrop",onClick:t[1]||(t[1]=Object(o["G"])((function(){return i.closeModal&&i.closeModal.apply(i,arguments)}),["self"]))},[Object(o["h"])("div",x,[Object(o["h"])(c)])])}var y=Object(o["h"])("h2",null,"Login",-1),k=Object(o["h"])("input",{type:"text",name:"email"},null,-1),B=Object(o["h"])("br",null,null,-1),M=Object(o["h"])("input",{type:"password",name:"password"},null,-1),L=Object(o["h"])("br",null,null,-1),T=Object(o["h"])("input",{type:"submit",value:"Login"},null,-1),A=Object(o["h"])("p",null,"s.haefelinger@gmx.de - x",-1),I=Object(o["h"])("p",null,"x@x.com - x",-1),S=Object(o["h"])("p",null,"test@test.com - test123",-1);function C(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",null,[y,Object(o["h"])("form",{onSubmit:t[1]||(t[1]=function(){return i.login&&i.login.apply(i,arguments)})},[k,B,M,L,T],32),A,I,S])}var H=n("6c02"),z={key:0},P={key:1},F={class:"flex "},_={class:"flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center"},D={key:2},R=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function E(e,t,n,a,r,i){var c=Object(o["z"])("Banner"),l=Object(o["z"])("Map"),s=Object(o["z"])("OverviewCard"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",z,Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.blogposts.length?(Object(o["r"])(),Object(o["d"])("div",P,[Object(o["h"])("div",null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"])]),Object(o["h"])(l,{locations:a.blogposts},null,8,["locations"]),Object(o["h"])("div",F,[Object(o["h"])("div",_,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(a.blogposts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"",key:e._id,onClick:function(t){return i.selectBlogpost(e)}},[Object(o["h"])(s,{blogpost:e},null,8,["blogpost"])],8,["onClick"])})),128))])])])):(Object(o["r"])(),Object(o["d"])("div",D,[R,Object(o["h"])(u)]))],64)}var G=n("1da1"),N=(n("96cf"),n("d3b7"),function(){var e=Object(o["w"])([]),t=Object(o["w"])(null),n="https://aroundtheworld-blog-server.herokuapp.com/",a=function(){var o=Object(G["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,new Promise((function(e){setTimeout(e,500)}));case 3:return o.next=5,fetch(n+"blogposts");case 5:if(a=o.sent,a.ok){o.next=8;break}throw Error("no data available");case 8:return o.next=10,a.json();case 10:e.value=o.sent,console.log(e.value),o.next=17;break;case 14:o.prev=14,o.t0=o["catch"](0),t.value=o.t0.message;case 17:case"end":return o.stop()}}),o,null,[[0,14]])})));return function(){return o.apply(this,arguments)}}();return{blogposts:e,error:t,load:a}}),U=N,W=n("ba57"),J=n.n(W),V=Object(o["H"])("data-v-55c74075");Object(o["u"])("data-v-55c74075");var q={class:"bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  ",id:"bannerTitle"},X={class:"uppercase ",onclick:"gotoAboutPage()",id:"bannerButton"};Object(o["s"])();var Z=V((function(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",{class:"bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0",id:"bannerImage",style:{backgroundImage:"url(".concat(n.bannerImage,")")}},[Object(o["h"])("p",q,Object(o["B"])(n.bannerText),1),Object(o["h"])("button",X,Object(o["B"])(n.bannerButtonText),1)],4)})),K={props:["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]};n("08dd");K.render=Z,K.__scopeId="data-v-55c74075";var Y=K,$=n("9611"),Q=n.n($),ee={class:" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"},te={class:"blogTextWrapper h-60 overflow-hidden px-8 pb-10"},ne={class:"mt-4 flex items-center"},oe={class:"text-gray-400 text-sm ml-2"},ae={class:"mt-1 text-base text-gray-600"},re={class:"text-2xl my-4"},ie={class:"font-light text-gray-600 text-base "},ce=Object(o["h"])("div",{class:"cardBottom"},[Object(o["h"])("div",null,[Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Q.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")])])],-1);function le(e,t,n,a,r,i){var c=Object(o["z"])("StarRating");return Object(o["r"])(),Object(o["d"])("div",ee,[Object(o["h"])("img",{class:"h-52 w-full object-cover  ",src:n.blogpost.image1URL,alt:"character"},null,8,["src"]),Object(o["h"])("div",te,[Object(o["h"])("div",ne,[Object(o["h"])(c,{rating:n.blogpost.rating},null,8,["rating"]),Object(o["h"])("p",oe,"Visited in "+Object(o["B"])(n.blogpost.month)+" "+Object(o["B"])(n.blogpost.year),1)]),Object(o["h"])("h2",ae,Object(o["B"])(n.blogpost.longName),1),Object(o["h"])("h3",re,Object(o["B"])(n.blogpost.title),1),Object(o["h"])("p",ie,Object(o["B"])(i.snippet),1)]),ce])}n("a4d3"),n("e01a");var se={class:"flex "},ue=Object(o["h"])("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"},null,-1);function be(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",se,[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(5,(function(e){return Object(o["h"])("svg",{key:e,class:[e<=n.rating?"text-yellow-500":"text-gray-300","h-4 w-4 fill-current  "],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[ue],2)})),64))])}var de={name:"StarRating",props:["rating"]};de.render=be;var pe=de,he={name:"OverviewCard",components:{StarRating:pe},props:{blogpost:Object},computed:{snippet:function(){var e=this.blogpost.description||this.blogpost.wiki,t=140;return e.length>t&&(e=e.substring(0,t)+"…"),e}}};n("f67f");he.render=le;var fe=he,ge=Object(o["h"])("div",{id:"mapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"},null,-1);function me(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])(o["a"],null,[ge,Object(o["h"])("p",{onClick:t[1]||(t[1]=function(){return i.test&&i.test.apply(i,arguments)})},"test")],64)}n("159b"),n("99af"),n("b0c0");var je=n("4272"),Oe={props:["locations"],computed:{blogpostsFromStore:function(){return this.$store.getters.getAllBlogposts}},methods:{test:function(){alert("hallo")}},mounted:function(){var e=this.locations,t=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),n={maxZoom:10,minZoom:2,mapTypeControl:!1,streetViewControl:!1};t.loadCallback((function(t){if(t)console.log("🚫",t);else{var o=new google.maps.Map(document.getElementById("mapComponent"),n),a=new google.maps.LatLngBounds;e.forEach((function(e,t){var n=new google.maps.Marker({position:e.coords,map:o}),r=new google.maps.InfoWindow({content:'\n                <div class="infoWindow"  style="width: 200px;" >\n                  <h3 class="text-xl">'.concat(e.name,'</h3>\n                  <p class="my-2">').concat(e.title,'</p>\n                  <img class="h-16 w-full object-cover" src="').concat(e.image1URL,'">\n\n                  <a href="/details/').concat(e._id,'"> <button class="miniButton">read more</button></a> \n                </div>\n                <MapInfoWindow />\n                ')});n.addListener("click",(function(){r.open(o,n)})),a.extend(e.coords)})),o.fitBounds(a)}}))}};n("86f4");Oe.render=me;var ve=Oe,xe={class:"spin"};function we(e,t){return Object(o["r"])(),Object(o["d"])("div",xe)}n("5b88");const ye={};ye.render=we;var ke=ye,Be={name:"Home",components:{Banner:Y,OverviewCard:fe,Spinner:ke,Map:ve},data:function(){return{bannerImage:J.a,bannerText:"The Travel Blog",bannerButtonText:"About",bannerButtonLink:"About"}},methods:{selectBlogpost:function(e){var t="/details/"+e._id;this.$router.push(t)}},setup:function(){var e=U(),t=e.blogposts,n=e.error,o=e.load;return o(),{blogposts:t,error:n}}};n("84e8");Be.render=E;var Me=Be,Le={key:0},Te={key:1},Ae={class:"flex justify-center"},Ie={class:"detailsArticle relative text-gray-500 w-11/12 sm:w-3/5"},Se={class:"detailsImgContainer shadow-lg flex "},Ce={class:"mt-8 text-gray-600 text-4xl"},He={class:"flex flex-row items-center  py-4"},ze={class:"ml-4 text-gray-500"},Pe={class:"text-2xl text-gray-700"},Fe={class:"mt-4"},_e={class:"mt-4"},De=Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Q.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")],-1),Re=Object(o["h"])("button",{class:"secondaryButton",onclick:"eraseEntryFromLocalStorage()"},"DELETE POST",-1),Ee=Object(o["h"])("button",{class:"primaryButton",onclick:"gotoOverviewPage()"},"< BACK",-1),Ge={key:2},Ne=Object(o["h"])("p",{class:"txt-xl text-center"},"Loading...",-1);function Ue(e,t,n,a,r,i){var c=Object(o["z"])("Banner"),l=Object(o["z"])("StarRating"),s=Object(o["z"])("SingleMap"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",Le,"😱Error: "+Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.post?(Object(o["r"])(),Object(o["d"])("div",Te,[Object(o["h"])(c,{bannerImage:a.post.image1URL,bannerText:a.post.name,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["h"])("div",Ae,[Object(o["h"])("div",Ie,[Object(o["h"])("div",null,[Object(o["h"])("div",Se,[Object(o["h"])("img",{class:"detailsImg2 md:mt-8 w-full object-cover rounded-md ",src:a.post.image2URL,alt:""},null,8,["src"])])]),Object(o["h"])("div",null,[Object(o["h"])("h2",Ce,Object(o["B"])(a.post.longName),1),Object(o["h"])("div",He,[Object(o["h"])(l,{rating:a.post.rating},null,8,["rating"]),Object(o["h"])("p",ze,"Visited in "+Object(o["B"])(a.post.month)+" "+Object(o["B"])(a.post.year),1)]),Object(o["h"])("h3",Pe,Object(o["B"])(a.post.title),1),Object(o["h"])("p",Fe,Object(o["B"])(a.post.description),1),Object(o["h"])("p",_e,Object(o["B"])(a.post.wiki),1)]),De,Object(o["h"])(s,{location:a.post.coords},null,8,["location"]),Re,Ee])])])):(Object(o["r"])(),Object(o["d"])("div",Ge,[Ne,Object(o["h"])(u)]))],64)}var We={id:"singleMapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function Je(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",We)}var Ve={props:["location"],mounted:function(){console.log("props versuch single",this.location);var e={coords:this.location},t=e.coords,n=new je["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),o={zoom:7,center:t,mapTypeId:"hybrid",disableDefaultUI:!0};n.loadCallback((function(e){if(e)console.log(e);else{var n=new google.maps.Map(document.getElementById("singleMapComponent"),o);new google.maps.Marker({position:t,map:n})}}))}};n("862b");Ve.render=Je;var qe=Ve,Xe=function(e){var t=Object(o["w"])(null),n=Object(o["w"])(null),a="https://aroundtheworld-blog-server.herokuapp.com/",r=function(){var o=Object(G["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,new Promise((function(e){setTimeout(e,500)}));case 3:return o.next=5,fetch(a+"blogposts/"+e);case 5:if(r=o.sent,r.ok){o.next=8;break}throw Error("🚫that post does not exist");case 8:return o.next=10,r.json();case 10:t.value=o.sent,o.next=17;break;case 13:o.prev=13,o.t0=o["catch"](0),n.value=o.t0.message,console.log(n.value);case 17:case"end":return o.stop()}}),o,null,[[0,13]])})));return function(){return o.apply(this,arguments)}}();return{post:t,error:n,load:r}},Ze=Xe,Ke={name:"Details",components:{Banner:Y,StarRating:pe,Spinner:ke,SingleMap:qe},props:["id"],data:function(){return{bannerButtonText:"back",bannerButtonLink:"About"}},setup:function(e){var t=Object(H["c"])(),n=t.params.id;console.log("details from router",n);var o=Ze(n),a=o.post,r=o.error,i=o.load;return i(),{post:a,error:r}}};n("1d4d");Ke.render=Ue;var Ye=Ke,$e=Object(o["H"])("data-v-160e2efd");Object(o["u"])("data-v-160e2efd");var Qe=Object(o["h"])("div",{id:"aboutContainer"},[Object(o["h"])("div",{class:"aboutArticle"},[Object(o["h"])("h2",null,"Project 1 - Travel Blog"),Object(o["h"])("p",null,[Object(o["g"])(" This is my contribution for the second Project for the Full-Stack Web Development-Course at the "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School.")]),Object(o["h"])("p",null," It uses no Frameworks, just vanilla HTML, CSS and Javascript. "),Object(o["h"])("p",null,[Object(o["g"])(" All Information is stored in the Local Sorage of the Browser, the App fetches information from the APIs: "),Object(o["h"])("br"),Object(o["g"])(" - Google Maps "),Object(o["h"])("br"),Object(o["g"])(" - Wikipedia"),Object(o["h"])("br"),Object(o["g"])(" - Openweathermaps ")]),Object(o["h"])("a",{href:"https://github.com/shaefelinger/HCS-project1-travelBlog",target:"_blank"},[Object(o["h"])("i",{class:"fab fa-github"}),Object(o["g"])(" View this project and the documentation on Github ")])])],-1),et=Object(o["h"])("section",{class:"aboutBottom "},[Object(o["h"])("div",{class:"aboutAuthorInfo"},[Object(o["h"])("div",{class:"authorPic  aboutAuthorPic"},[Object(o["h"])("img",{src:Q.a})]),Object(o["h"])("p",{class:"author"},"Steffen Häfelinger")]),Object(o["h"])("p",{class:"aboutAuthorText"},[Object(o["g"])(" Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School."),Object(o["g"])(" He is also working as a professional Musician, Songwriter & Audio Engineer. ")])],-1);Object(o["s"])();var tt=$e((function(e,t,n,a,r,i){var c=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Qe,et],64)})),nt=n("8c21"),ot=n.n(nt),at={name:"About",components:{Banner:Y},data:function(){return{bannerImage:ot.a,bannerText:"About this Project",bannerButtonText:"Back",bannerButtonLink:"Home"}}};n("3a2a");at.render=tt,at.__scopeId="data-v-160e2efd";var rt=at,it=Object(o["f"])('<div class="formContainer"><form action="" id="addPostForm"><label for="locationField" id="locationLabel">Enter a Location*</label><input id="searchTextField" name="locationField" type="text" size="50" placeholder="" autocomplete="on"><hr id="searchTextUnderline" class="hidden"><label for="titleField">Enter a Title for the post*</label><input required type="text" placeholder="" name="titleField" id="titleField"><label for="monthInput">Enter the date of your trip</label><div class="dateContainer"><select required name="monthInput" id="monthField"><option value="January">January</option><option value="February">February</option><option value="March">March</option><option value="April">April</option><option value="May">May</option><option value="June">June</option><option value="July">July</option><option value="August">August</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="December">December</option></select><input required class="yearInput" type="number" placeholder="Enter the year" value="2020" min="1900" max="2100" id="yearField"></div><label for="rating">Rate your trip </label><select name="rating" id="ratingField"><option value="0" disabled="disabled" selected="selected">Enter Rating</option><option class="star" value="1">★</option><option value="2">★★</option><option value="3">★★★</option><option value="4">★★★★</option><option value="5">★★★★★</option></select><label for="descriptionField">Enter a description</label><textarea id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea><label for="wikiField">Edit Wikipedia Information</label><textarea id="wikiField" name="wikiField" rows="6" cols="80" placeholder=""></textarea><p class="miniText">* = required</p></form></div>',1);function ct(e,t,n,a,r,i){var c=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["g"])(" New Post "+Object(o["B"])(r.status)+" ",1),Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),it],64)}var lt=n("0d64"),st=n.n(lt),ut=n("bc3a"),bt=n.n(ut),dt={name:"NewPost",components:{Banner:Y},data:function(){return{bannerImage:st.a,bannerText:"Add new Post...",bannerButtonText:"Back",bannerButtonLink:"Home",status:"unklar",user:{name:"no user"}}},methods:{getUserData:function(){var e=this;bt.a.get("auth/user").then((function(t){e.user=t.data.user,e.status="drin"})).catch((function(t){console.log(t),e.status="nööö",Bt.push("/")}))}},mounted:function(){this.getUserData()}};n("dfb6");dt.render=ct;var pt=dt,ht=Object(o["h"])("h2",null,"Dashboard",-1);function ft(e,t,n,a,r,i){var c=Object(o["z"])("Map");return Object(o["r"])(),Object(o["d"])("div",null,[ht,Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),Object(o["h"])(c,{locations:r.locations},null,8,["locations"])])}var gt={name:"Login",components:{Map:ve},data:function(){return{user:{name:"no user"},locations:[{name:"Hamburg",longName:"Hamburg, Germany",coords:{lat:53.5510846,lng:9.9936818},title:"The most beautiful city in the world",description:"This is where i live...",rating:"5",month:"May",year:"1997",image1URL:"https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80",image2URL:"https://images.unsplash.com/photo-1598790969148-62630087609e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80",wiki:"Hamburg is the second-largest city in Germany after Berlin and 7th largest city in the European Union with a population of over 1.84 million.One of Germany's 16 federated states, it is surrounded by Schleswig-Holstein to the north and Lower Saxony to the south. The city's metropolitan region is home to more than five million people. Hamburg lies on the River Elbe and two of its tributaries, the River Alster and the River Bille.",utcOffset:60,authorID:"admin"},{name:"Zürich",longName:"Zürich, Swizerland",coords:{lat:47.3768866,lng:8.541694},title:"Nice but very expensive...",description:"",rating:"3",month:"May",year:"2018",image1URL:"https://images.unsplash.com/photo-1585586813880-257f9b38d25d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",image2URL:"https://images.unsplash.com/photo-1522100199172-e0d85a587108?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2225&q=80",wiki:"Zürich is the largest city in Switzerland, and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2020, the municipality has 434,335 inhabitants, the urban area (agglomeration) 1.315 million (2009), and the Zürich metropolitan area 1.83 million (2011).",utcOffset:60,authorID:"admin"}]}},methods:{getUserData:function(){var e=this,t="";bt.a.defaults.withCredentials=!0,bt.a.get(t+"/auth/user").then((function(t){console.log(e.user),console.log(t.data.user),e.user=t.data.user,console.log("success 😎")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUserData()}};gt.render=ft;var mt=gt,jt=Object(o["h"])("h2",{class:"text-6xl"},"404",-1),Ot=Object(o["h"])("h3",{class:"text-4xl"},"Page not Found",-1);function vt(e,t,n,a,r,i){var c=Object(o["z"])("dic");return Object(o["r"])(),Object(o["d"])(c,{class:"text-center mt-24"},{default:Object(o["F"])((function(){return[jt,Ot]})),_:1})}var xt={};xt.render=vt;var wt=xt,yt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Me},{path:"/new",name:"NewPost",component:pt},{path:"/details/:id",name:"Details",component:Ye,props:!0},{path:"/check",name:"Check",component:mt},{path:"/about",name:"About",component:rt},{path:"/:catchAll(.*)",name:"NotFound",component:wt}],kt=Object(H["a"])({history:Object(H["b"])("/"),routes:yt}),Bt=kt,Mt={name:"Login",methods:{login:function(e){e.preventDefault();var t=e.target.elements.email.value,n=e.target.elements.password.value;bt.a.defaults.withCredentials=!0;var o=function(){var e={email:t,password:n};bt.a.post("/auth/login",e).then((function(e){console.log("Logged in from LOGIN"),Bt.push("/")})).catch((function(e){console.log("Cannot log in from LOGIN")}))};o()}}};Mt.render=C;var Lt=Mt,Tt={components:{Login:Lt},methods:{closeModal:function(){this.$emit("closeModal")}},props:["header","text"]};Tt.render=w;var At=Tt,It={name:"Header",components:{Modal:At},methods:{login:function(){this.$store.dispatch("login"),this.showModal=!this.showModal},logout:function(){this.$store.dispatch("logout"),this.showModal=!this.showModal},toggleModal:function(){this.showModal=!this.showModal}},computed:Object(O["a"])({},Object(v["b"])({isAuth:"userIsAuthenticated"})),data:function(){return{showModal:!1}}};n("d227");It.render=j,It.__scopeId="data-v-0420a6a5";var St=It,Ct=Object(o["H"])("data-v-58b4a54e");Object(o["u"])("data-v-58b4a54e");var Ht={class:"footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"},zt=Object(o["f"])('<div class=" text-sm text-gray-900" data-v-58b4a54e><a href="https://www.steffen-haefelinger.com/" target="_blank" data-v-58b4a54e> © 2021 Steffen Häfelinger </a></div><div data-v-58b4a54e><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de" data-v-58b4a54e><i class="fas fa-envelope" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger" data-v-58b4a54e><i class="fab fa-github" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/" data-v-58b4a54e><i class="fab fa-facebook-f" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/" data-v-58b4a54e><i class="fab fa-instagram" data-v-58b4a54e></i></a></div>',2);Object(o["s"])();var Pt=Ct((function(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("footer",Ht,[zt])})),Ft={name:"Footer"};n("d542");Ft.render=Pt,Ft.__scopeId="data-v-58b4a54e";var _t=Ft,Dt={name:"app",components:{Header:St,Footer:_t},computed:{user:function(){return this.$store.getters.user}}};n("ccb2");Dt.render=r;var Rt=Dt,Et=Object(v["a"])({state:{initialized:!0,user:1,allBlogposts:[],currentBlogpost:{name:"store",coords:{lat:34.052235,lng:118.243683}},allUsers:[],currentUser:{},isLoggedIn:!0},getters:{userIsAuthenticated:function(e){return e.isLoggedIn},initialized:function(e){return e.initialized},user:function(e){return e.user},getAllBlogposts:function(e){return e.allBlogposts},getCurrentBlogpost:function(e){return console.log("getCurrentBlogpost",e.currentBlogpost),e.currentBlogpost}},mutations:{initialized:function(e,t){e.initialized=t},user:function(e,t){e.user=t},setAuth:function(e,t){e.isLoggedIn=t.isAuth},setAllBlogposts:function(e,t){console.log("😎all blogbosts mutated"),e.allBlogposts=t},setCurrentBlogpost:function(e,t){console.log("currentBlogpost mutated",t),e.currentBlogpost=t}},actions:{login:function(e){e.commit("setAuth",{isAuth:!0}),console.log("login")},logout:function(e){e.commit("setAuth",{isAuth:!1}),console.log("logout")},setAllBlogposts:function(e,t){console.log("action: store all blogposts in store"),e.commit("setAllBlogposts",t)},setCurrentBlogpost:function(e,t){console.log("action: store current blogposts in store"),e.commit("setCurrentBlogpost",t)}},modules:{}});n("320b"),n("db43");Object(o["c"])(Rt).use(Et).use(Bt).mount("#app")},"5b88":function(e,t,n){"use strict";n("0a47")},"61c9":function(e,t,n){},"73d5":function(e,t,n){},"84e8":function(e,t,n){"use strict";n("bcf7")},"862b":function(e,t,n){"use strict";n("4cd0")},"86f4":function(e,t,n){"use strict";n("61c9")},"8c21":function(e,t,n){e.exports=n.p+"img/banner3.56f83583.jpg"},9571:function(e,t,n){},9611:function(e,t,n){e.exports=n.p+"img/Steffen_square.0ba80248.png"},ba57:function(e,t,n){e.exports=n.p+"img/banner1.6a666baa.jpg"},bcf7:function(e,t,n){},c432:function(e,t,n){},ccb2:function(e,t,n){"use strict";n("1874")},d227:function(e,t,n){"use strict";n("eb28")},d542:function(e,t,n){"use strict";n("01f3")},db43:function(e,t,n){},dfb6:function(e,t,n){"use strict";n("9571")},eb28:function(e,t,n){},f67f:function(e,t,n){"use strict";n("c432")}});
//# sourceMappingURL=app.3d866c9d.js.map