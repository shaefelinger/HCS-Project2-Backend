(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],b=0,d=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f3":function(e,t,n){},"08dd":function(e,t,n){"use strict";n("3cc5")},"0a47":function(e,t,n){},"0ac9":function(e,t,n){"use strict";n("f983")},"0d64":function(e,t,n){e.exports=n.p+"img/banner2.fd9ce212.jpg"},"2c13":function(e,t,n){},"37d9":function(e,t,n){},"3a2a":function(e,t,n){"use strict";n("73d5")},"3cc5":function(e,t,n){},"47de":function(e,t,n){e.exports=n.p+"img/world.86318bf7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col justify-between h-screen"};function r(e,t,n,r,i,c){var s=Object(o["z"])("Header"),l=Object(o["z"])("router-view"),u=Object(o["z"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["h"])(s,{class:"flex-shrink-0"}),Object(o["h"])(l,{class:"mb-80"}),Object(o["h"])(u,{class:"flex-shrink-0"})])}var i=n("47de"),c=n.n(i),s=Object(o["H"])("data-v-0420a6a5");Object(o["u"])("data-v-0420a6a5");var l={class:"header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md"},u=Object(o["h"])("a",{id:"siteLogoName",href:"./index.html",class:"flex items-center  "},[Object(o["h"])("div",{class:" w-9 lg:w-16 "},[Object(o["h"])("img",{class:" object-fill   ",src:c.a,alt:"logo"})]),Object(o["h"])("span",{class:"pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium "},"Around the World")],-1),b={key:0},d={class:"p-6",id:"nav"},p=Object(o["g"])("Overview"),h=Object(o["g"])("About"),g=Object(o["g"])("+new post"),f=Object(o["h"])("a",{id:"burger",class:"burger",href:"#"},[Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),m=Object(o["h"])("div",{id:"sideMenu",class:"sideMenu-hiding"},[Object(o["h"])("div",null,[Object(o["h"])("a",{id:"gotoOverviewSideMenu",onclick:"gotoOverviewPage()",class:"active"},"overview"),Object(o["h"])("a",{id:"gotoMapSideMenu",onclick:"gotoMapPage()"},"map"),Object(o["h"])("a",{id:"gotoNewPostSideMenu",onclick:"gotoAddPostPage()"},"+ add post"),Object(o["h"])("a",{id:"gotoResetAllSideMenu",onclick:"resetLocalStorage()"},"reset all"),Object(o["h"])("a",{id:"gotoAboutPageSideMenu",onclick:"gotoAboutPage()"},"about")])],-1);Object(o["s"])();var j=s((function(e,t,n,a,r,i){var c=Object(o["z"])("Modal"),j=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["d"])("header",l,[u,r.showModal?(Object(o["r"])(),Object(o["d"])("div",b,[Object(o["h"])(c,{theme:"",onCloseModal:i.toggleModal},null,8,["onCloseModal"])])):Object(o["e"])("",!0),Object(o["h"])("nav",null,[Object(o["h"])("div",d,[Object(o["h"])(j,{class:" text-gray-700",to:{name:"Home"}},{default:s((function(){return[p]})),_:1}),Object(o["h"])(j,{class:" text-gray-700",to:"/about"},{default:s((function(){return[h]})),_:1}),e.isAuth?(Object(o["r"])(),Object(o["d"])(j,{key:0,class:" text-gray-700",to:"/new"},{default:s((function(){return[g]})),_:1})):Object(o["e"])("",!0),e.isAuth?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("a",{key:1,onClick:t[1]||(t[1]=function(){return i.login&&i.login.apply(i,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Login/register")),e.isAuth?(Object(o["r"])(),Object(o["d"])("a",{key:2,onClick:t[2]||(t[2]=function(){return i.logout&&i.logout.apply(i,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Logout")):Object(o["e"])("",!0)])]),f,m])})),O=n("5530"),v=n("5502"),x={class:" w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  "};function w(e,t,n,a,r,i){var c=Object(o["z"])("Login");return Object(o["r"])(),Object(o["d"])("div",{class:"backdrop",onClick:t[1]||(t[1]=Object(o["G"])((function(){return i.closeModal&&i.closeModal.apply(i,arguments)}),["self"]))},[Object(o["h"])("div",x,[Object(o["h"])(c)])])}var y=Object(o["h"])("h2",null,"Login",-1),B=Object(o["h"])("input",{type:"text",name:"email"},null,-1),k=Object(o["h"])("br",null,null,-1),M=Object(o["h"])("input",{type:"password",name:"password"},null,-1),L=Object(o["h"])("br",null,null,-1),S=Object(o["h"])("input",{type:"submit",value:"Login"},null,-1),T=Object(o["h"])("p",null,"s.haefelinger@gmx.de - x",-1),A=Object(o["h"])("p",null,"x@x.com - x",-1),I=Object(o["h"])("p",null,"test@test.com - test123",-1);function C(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",null,[y,Object(o["h"])("form",{onSubmit:t[1]||(t[1]=function(){return i.login&&i.login.apply(i,arguments)})},[B,k,M,L,S],32),T,A,I])}var H=n("6c02"),z={key:0},P={key:1},F={class:"flex "},D={class:"flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center"},_={key:2},R=Object(o["h"])("p",null,"Loading...",-1);function E(e,t,n,a,r,i){var c=Object(o["z"])("Banner"),s=Object(o["z"])("Map"),l=Object(o["z"])("OverviewCard"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[e.error?(Object(o["r"])(),Object(o["d"])("div",z,Object(o["B"])(e.error),1)):Object(o["e"])("",!0),r.blogposts.length?(Object(o["r"])(),Object(o["d"])("div",P,[Object(o["h"])("div",null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"])]),Object(o["h"])(s,{locations:r.blogposts},null,8,["locations"]),Object(o["h"])("div",F,[Object(o["h"])("div",D,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(r.blogposts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"",key:e._id,onClick:function(t){return i.selectBlogpost(e)}},[Object(o["h"])(l,{blogpost:e},null,8,["blogpost"])],8,["onClick"])})),128))])])])):(Object(o["r"])(),Object(o["d"])("div",_,[R,Object(o["h"])(u)]))],64)}var G=n("1da1"),N=(n("96cf"),n("ba57")),U=n.n(N),W=Object(o["H"])("data-v-55c74075");Object(o["u"])("data-v-55c74075");var J={class:"bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  ",id:"bannerTitle"},V={class:"uppercase ",onclick:"gotoAboutPage()",id:"bannerButton"};Object(o["s"])();var q=W((function(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",{class:"bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0",id:"bannerImage",style:{backgroundImage:"url(".concat(n.bannerImage,")")}},[Object(o["h"])("p",J,Object(o["B"])(n.bannerText),1),Object(o["h"])("button",V,Object(o["B"])(n.bannerButtonText),1)],4)})),X={props:["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]};n("08dd");X.render=q,X.__scopeId="data-v-55c74075";var Z=X,$=n("9611"),K=n.n($),Y={class:" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"},Q={class:"blogTextWrapper h-60 overflow-hidden px-8 pb-10"},ee={class:"mt-4 flex items-center"},te={class:"text-gray-400 text-sm ml-2"},ne={class:"mt-1 text-base text-gray-600"},oe={class:"text-2xl my-4"},ae={class:"font-light text-gray-600 text-base "},re=Object(o["h"])("div",{class:"cardBottom"},[Object(o["h"])("div",null,[Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:K.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")])])],-1);function ie(e,t,n,a,r,i){var c=Object(o["z"])("StarRating");return Object(o["r"])(),Object(o["d"])("div",Y,[Object(o["h"])("img",{class:"h-52 w-full object-cover  ",src:n.blogpost.image1URL,alt:"character"},null,8,["src"]),Object(o["h"])("div",Q,[Object(o["h"])("div",ee,[Object(o["h"])(c,{rating:n.blogpost.rating},null,8,["rating"]),Object(o["h"])("p",te,"Visited in "+Object(o["B"])(n.blogpost.month)+" "+Object(o["B"])(n.blogpost.year),1)]),Object(o["h"])("h2",ne,Object(o["B"])(n.blogpost.longName),1),Object(o["h"])("h3",oe,Object(o["B"])(n.blogpost.title),1),Object(o["h"])("p",ae,Object(o["B"])(i.snippet),1)]),re])}n("a4d3"),n("e01a");var ce={class:"flex "},se=Object(o["h"])("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"},null,-1);function le(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",ce,[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(5,(function(e){return Object(o["h"])("svg",{key:e,class:[e<=n.rating?"text-yellow-500":"text-gray-300","h-4 w-4 fill-current  "],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[se],2)})),64))])}var ue={name:"StarRating",props:["rating"]};ue.render=le;var be=ue,de={name:"OverviewCard",components:{StarRating:be},props:{blogpost:Object},computed:{snippet:function(){var e=this.blogpost.description||this.blogpost.wiki,t=140;return e.length>t&&(e=e.substring(0,t)+"…"),e}}};n("f67f");de.render=ie;var pe=de,he={id:"mapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"};function ge(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",he)}n("159b"),n("99af"),n("b0c0");var fe=n("4272"),me={props:["locations"],computed:{blogpostsFromStore:function(){return this.$store.getters.getAllBlogposts}},mounted:function(){var e=this.blogpostsFromStore,t=new fe["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),n={maxZoom:10,minZoom:2,mapTypeControl:!1,streetViewControl:!1};t.loadCallback((function(t){if(t)console.log("🚫",t);else{var o=new google.maps.Map(document.getElementById("mapComponent"),n),a=new google.maps.LatLngBounds;e.forEach((function(e,t){var n=new google.maps.Marker({position:e.coords,map:o}),r=new google.maps.InfoWindow({content:'\n                <div class="infoWindow" style="width: 200px;">\n                  <h3 class="text-xl">'.concat(e.name,'</h3>\n                  <p class="my-2">').concat(e.title,'</p>\n                  <img class="h-32 w-full object-cover" src="').concat(e.image1URL,'">\n\n                  <a href="/details/').concat(e._id,'"> <button class="miniButton">read more</button></a> \n                </div>\n                <MapInfoWindow />\n                ')});n.addListener("click",(function(){r.open(o,n)})),a.extend(e.coords)})),o.fitBounds(a)}}))}};n("838e");me.render=ge;var je=me,Oe={class:"spin"};function ve(e,t){return Object(o["r"])(),Object(o["d"])("div",Oe)}n("5b88");const xe={};xe.render=ve;var we=xe,ye=(n("d3b7"),"https://aroundtheworld-blog-server.herokuapp.com/");function Be(){return fetch(ye+"blogposts")}function ke(){return fetch(ye+"users")}function Me(e){return e.then((function(e){return e.json()})).then((function(e){return{data:e,error:null}})).catch((function(e){return{data:null,error:e}}))}var Le={name:"Home",components:{Banner:Z,OverviewCard:pe,Spinner:we,Map:je},data:function(){return{bannerImage:U.a,bannerText:"The Travel Blog",bannerButtonText:"About",bannerButtonLink:"About",blogposts:[],users:[]}},methods:{selectBlogpost:function(e){var t="/details/"+e._id;this.$router.push(t)}},mounted:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var n,o,a,r,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("/home mounted"),t.next=3,Me(Be());case 3:return n=t.sent,o=n.data,a=n.error,a?console.log("🚫Error getting Blogpost-Data from Server"):(console.log("data:",o),e.blogposts=o,o,e.$store.dispatch("setAllBlogposts",o),console.log("👍Got blogposts from Server")),t.next=9,Me(ke());case 9:r=t.sent,i=r.data,c=r.error,c?console.log("🚫Error getting user-Data from Server"):(e.users=i,console.log("👍Got users from Server"));case 13:case"end":return t.stop()}}),t)})))()}};n("98f1");Le.render=E;var Se=Le,Te={key:0},Ae={key:1},Ie={class:"flex justify-center"},Ce={class:"detailsArticle "},He={class:"detailsTopContainer"},ze={class:"mt-4"},Pe={class:"flex flex-row items-center  py-4"},Fe={class:"ml-4 text-gray-500"},De={class:"text-2xl"},_e={class:"mt-4"},Re={class:"mt-4"},Ee=Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:K.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")],-1),Ge=Object(o["h"])("button",{class:"secondaryButton",onclick:"eraseEntryFromLocalStorage()"},"DELETE POST",-1),Ne=Object(o["h"])("button",{class:"primaryButton",onclick:"gotoOverviewPage()"},"< BACK",-1),Ue={key:2},We=Object(o["h"])("p",null,"Loading...",-1);function Je(e,t,n,a,r,i){var c=Object(o["z"])("Banner"),s=Object(o["z"])("StarRating"),l=Object(o["z"])("SingleMap"),u=Object(o["z"])("Spinner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[a.error?(Object(o["r"])(),Object(o["d"])("div",Te,"😱Error: "+Object(o["B"])(a.error),1)):Object(o["e"])("",!0),a.post?(Object(o["r"])(),Object(o["d"])("div",Ae,[Object(o["h"])(c,{bannerImage:a.post.image1URL,bannerText:a.post.name,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["h"])("div",Ie,[Object(o["h"])("div",Ce,[Object(o["h"])("div",null,[Object(o["h"])("div",He,[Object(o["h"])("img",{class:"detailsImg2",src:a.post.image2URL,alt:""},null,8,["src"])])]),Object(o["h"])("div",null,[Object(o["h"])("h2",ze,Object(o["B"])(a.post.longName),1),Object(o["h"])("div",Pe,[Object(o["h"])(s,{rating:a.post.rating},null,8,["rating"]),Object(o["h"])("p",Fe,"Visited in "+Object(o["B"])(a.post.month)+" "+Object(o["B"])(a.post.year),1)]),Object(o["h"])("h3",De,Object(o["B"])(a.post.title),1),Object(o["h"])("p",_e,Object(o["B"])(a.post.description),1),Object(o["h"])("p",Re,Object(o["B"])(a.post.wiki),1)]),Ee,Object(o["h"])(l,{location:a.post.coords},null,8,["location"]),Ge,Ne])])])):(Object(o["r"])(),Object(o["d"])("div",Ue,[We,Object(o["h"])(u)]))],64)}var Ve=Object(o["h"])("div",{id:"singleMapComponent",class:"mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"},null,-1);function qe(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(" Prop: "+Object(o["B"])(n.location)+" ",1),Ve],64)}var Xe={computed:{currentBlogpostFromStore:function(){return this.$store.getters.getCurrentBlogpost}},props:["location"],mounted:function(){console.log("props versuch single",this.location);var e={coords:this.location},t=e.coords,n=new fe["a"]({apiKey:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",version:"weekly",libraries:["places"]}),o={zoom:7,center:t,mapTypeId:"hybrid",disableDefaultUI:!0};n.loadCallback((function(e){if(e)console.log(e);else{var n=new google.maps.Map(document.getElementById("singleMapComponent"),o);new google.maps.Marker({position:t,map:n})}}))}};n("f355");Xe.render=qe;var Ze=Xe,$e=function(e){var t=Object(o["w"])(null),n=Object(o["w"])(null),a="https://aroundtheworld-blog-server.herokuapp.com/",r=function(){var o=Object(G["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(a+"blogposts/"+e);case 3:if(r=o.sent,r.ok){o.next=6;break}throw Error("🚫that post does not exist");case 6:return o.next=8,r.json();case 8:t.value=o.sent,o.next=15;break;case 11:o.prev=11,o.t0=o["catch"](0),n.value=o.t0.message,console.log(n.value);case 15:case"end":return o.stop()}}),o,null,[[0,11]])})));return function(){return o.apply(this,arguments)}}();return{post:t,error:n,load:r}},Ke=$e,Ye={name:"Details",components:{Banner:Z,StarRating:be,Spinner:we,SingleMap:Ze},props:["id"],data:function(){return{bannerButtonText:"back",bannerButtonLink:"About"}},setup:function(e){console.log(" details props",e);var t=Ke(e.id),n=t.post,o=t.error,a=t.load;return a(),{post:n,error:o}}};n("e933");Ye.render=Je;var Qe=Ye,et=Object(o["H"])("data-v-160e2efd");Object(o["u"])("data-v-160e2efd");var tt=Object(o["h"])("div",{id:"aboutContainer"},[Object(o["h"])("div",{class:"aboutArticle"},[Object(o["h"])("h2",null,"Project 1 - Travel Blog"),Object(o["h"])("p",null,[Object(o["g"])(" This is my contribution for the second Project for the Full-Stack Web Development-Course at the "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School.")]),Object(o["h"])("p",null," It uses no Frameworks, just vanilla HTML, CSS and Javascript. "),Object(o["h"])("p",null,[Object(o["g"])(" All Information is stored in the Local Sorage of the Browser, the App fetches information from the APIs: "),Object(o["h"])("br"),Object(o["g"])(" - Google Maps "),Object(o["h"])("br"),Object(o["g"])(" - Wikipedia"),Object(o["h"])("br"),Object(o["g"])(" - Openweathermaps ")]),Object(o["h"])("a",{href:"https://github.com/shaefelinger/HCS-project1-travelBlog",target:"_blank"},[Object(o["h"])("i",{class:"fab fa-github"}),Object(o["g"])(" View this project and the documentation on Github ")])])],-1),nt=Object(o["h"])("section",{class:"aboutBottom "},[Object(o["h"])("div",{class:"aboutAuthorInfo"},[Object(o["h"])("div",{class:"authorPic  aboutAuthorPic"},[Object(o["h"])("img",{src:K.a})]),Object(o["h"])("p",{class:"author"},"Steffen Häfelinger")]),Object(o["h"])("p",{class:"aboutAuthorText"},[Object(o["g"])(" Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School."),Object(o["g"])(" He is also working as a professional Musician, Songwriter & Audio Engineer. ")])],-1);Object(o["s"])();var ot=et((function(e,t,n,a,r,i){var c=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),tt,nt],64)})),at=n("8c21"),rt=n.n(at),it={name:"About",components:{Banner:Z},data:function(){return{bannerImage:rt.a,bannerText:"About this Project",bannerButtonText:"Back",bannerButtonLink:"Home"}}};n("3a2a");it.render=ot,it.__scopeId="data-v-160e2efd";var ct=it,st=Object(o["f"])('<div class="formContainer"><form action="" id="addPostForm"><label for="locationField" id="locationLabel">Enter a Location*</label><input id="searchTextField" name="locationField" type="text" size="50" placeholder="" autocomplete="on"><hr id="searchTextUnderline" class="hidden"><label for="titleField">Enter a Title for the post*</label><input required type="text" placeholder="" name="titleField" id="titleField"><label for="monthInput">Enter the date of your trip</label><div class="dateContainer"><select required name="monthInput" id="monthField"><option value="January">January</option><option value="February">February</option><option value="March">March</option><option value="April">April</option><option value="May">May</option><option value="June">June</option><option value="July">July</option><option value="August">August</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="December">December</option></select><input required class="yearInput" type="number" placeholder="Enter the year" value="2020" min="1900" max="2100" id="yearField"></div><label for="rating">Rate your trip </label><select name="rating" id="ratingField"><option value="0" disabled="disabled" selected="selected">Enter Rating</option><option class="star" value="1">★</option><option value="2">★★</option><option value="3">★★★</option><option value="4">★★★★</option><option value="5">★★★★★</option></select><label for="descriptionField">Enter a description</label><textarea id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea><label for="wikiField">Edit Wikipedia Information</label><textarea id="wikiField" name="wikiField" rows="6" cols="80" placeholder=""></textarea><p class="miniText">* = required</p></form></div>',1);function lt(e,t,n,a,r,i){var c=Object(o["z"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(c,{bannerImage:r.bannerImage,bannerText:r.bannerText,bannerButtonText:r.bannerButtonText,bannerButtonLink:r.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["g"])(" New Post "+Object(o["B"])(r.status)+" ",1),Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),st],64)}var ut=n("0d64"),bt=n.n(ut),dt=n("bc3a"),pt=n.n(dt),ht={name:"NewPost",components:{Banner:Z},data:function(){return{bannerImage:bt.a,bannerText:"Add new Post...",bannerButtonText:"Back",bannerButtonLink:"Home",status:"unklar",user:{name:"no user"}}},methods:{getUserData:function(){var e=this;pt.a.get("auth/user").then((function(t){e.user=t.data.user,e.status="drin"})).catch((function(t){console.log(t),e.status="nööö",Lt.push("/")}))}},mounted:function(){this.getUserData()}};n("dfb6");ht.render=lt;var gt=ht,ft=Object(o["h"])("h2",null,"Dashboard",-1);function mt(e,t,n,a,r,i){var c=Object(o["z"])("Map");return Object(o["r"])(),Object(o["d"])("div",null,[ft,Object(o["h"])("p",null,"Name: "+Object(o["B"])(r.user.name),1),Object(o["h"])(c,{locations:r.locations},null,8,["locations"])])}var jt={name:"Login",components:{Map:je},data:function(){return{user:{name:"no user"},locations:[{name:"Hamburg",longName:"Hamburg, Germany",coords:{lat:53.5510846,lng:9.9936818},title:"The most beautiful city in the world",description:"This is where i live...",rating:"5",month:"May",year:"1997",image1URL:"https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80",image2URL:"https://images.unsplash.com/photo-1598790969148-62630087609e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80",wiki:"Hamburg is the second-largest city in Germany after Berlin and 7th largest city in the European Union with a population of over 1.84 million.One of Germany's 16 federated states, it is surrounded by Schleswig-Holstein to the north and Lower Saxony to the south. The city's metropolitan region is home to more than five million people. Hamburg lies on the River Elbe and two of its tributaries, the River Alster and the River Bille.",utcOffset:60,authorID:"admin"},{name:"Zürich",longName:"Zürich, Swizerland",coords:{lat:47.3768866,lng:8.541694},title:"Nice but very expensive...",description:"",rating:"3",month:"May",year:"2018",image1URL:"https://images.unsplash.com/photo-1585586813880-257f9b38d25d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",image2URL:"https://images.unsplash.com/photo-1522100199172-e0d85a587108?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2225&q=80",wiki:"Zürich is the largest city in Switzerland, and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2020, the municipality has 434,335 inhabitants, the urban area (agglomeration) 1.315 million (2009), and the Zürich metropolitan area 1.83 million (2011).",utcOffset:60,authorID:"admin"}]}},methods:{getUserData:function(){var e=this,t="";pt.a.defaults.withCredentials=!0,pt.a.get(t+"/auth/user").then((function(t){console.log(e.user),console.log(t.data.user),e.user=t.data.user,console.log("success 😎")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUserData()}};jt.render=mt;var Ot=jt,vt=Object(o["h"])("h2",{class:"text-6xl"},"404",-1),xt=Object(o["h"])("h3",{class:"text-4xl"},"Page not Found",-1);function wt(e,t,n,a,r,i){var c=Object(o["z"])("dic");return Object(o["r"])(),Object(o["d"])(c,{class:"text-center mt-24"},{default:Object(o["F"])((function(){return[vt,xt]})),_:1})}var yt={};yt.render=wt;var Bt=yt,kt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Se},{path:"/new",name:"NewPost",component:gt},{path:"/details/:id",name:"Details",component:Qe,props:!0},{path:"/check",name:"Check",component:Ot},{path:"/about",name:"About",component:ct},{path:"/:catchAll(.*)",name:"NotFound",component:Bt}],Mt=Object(H["a"])({history:Object(H["b"])("/"),routes:kt}),Lt=Mt,St={name:"Login",methods:{login:function(e){e.preventDefault();var t=e.target.elements.email.value,n=e.target.elements.password.value;pt.a.defaults.withCredentials=!0;var o=function(){var e={email:t,password:n};pt.a.post("/auth/login",e).then((function(e){console.log("Logged in from LOGIN"),Lt.push("/")})).catch((function(e){console.log("Cannot log in from LOGIN")}))};o()}}};St.render=C;var Tt=St,At={components:{Login:Tt},methods:{closeModal:function(){this.$emit("closeModal")}},props:["header","text"]};At.render=w;var It=At,Ct={name:"Header",components:{Modal:It},methods:{login:function(){this.$store.dispatch("login"),this.showModal=!this.showModal},logout:function(){this.$store.dispatch("logout"),this.showModal=!this.showModal},toggleModal:function(){this.showModal=!this.showModal}},computed:Object(O["a"])({},Object(v["b"])({isAuth:"userIsAuthenticated"})),data:function(){return{showModal:!1}}};n("d227");Ct.render=j,Ct.__scopeId="data-v-0420a6a5";var Ht=Ct,zt=Object(o["H"])("data-v-58b4a54e");Object(o["u"])("data-v-58b4a54e");var Pt={class:"footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"},Ft=Object(o["f"])('<div class=" text-sm text-gray-900" data-v-58b4a54e><a href="https://www.steffen-haefelinger.com/" target="_blank" data-v-58b4a54e> © 2021 Steffen Häfelinger </a></div><div data-v-58b4a54e><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de" data-v-58b4a54e><i class="fas fa-envelope" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger" data-v-58b4a54e><i class="fab fa-github" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/" data-v-58b4a54e><i class="fab fa-facebook-f" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/" data-v-58b4a54e><i class="fab fa-instagram" data-v-58b4a54e></i></a></div>',2);Object(o["s"])();var Dt=zt((function(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("footer",Pt,[Ft])})),_t={name:"Footer"};n("d542");_t.render=Dt,_t.__scopeId="data-v-58b4a54e";var Rt=_t,Et={name:"app",components:{Header:Ht,Footer:Rt},computed:{user:function(){return this.$store.getters.user}}};n("0ac9");Et.render=r;var Gt=Et,Nt=Object(v["a"])({state:{initialized:!0,user:1,allBlogposts:[],currentBlogpost:{name:"store",coords:{lat:34.052235,lng:118.243683}},allUsers:[],currentUser:{},isLoggedIn:!0},getters:{userIsAuthenticated:function(e){return e.isLoggedIn},initialized:function(e){return e.initialized},user:function(e){return e.user},getAllBlogposts:function(e){return e.allBlogposts},getCurrentBlogpost:function(e){return console.log("getCurrentBlogpost",e.currentBlogpost),e.currentBlogpost}},mutations:{initialized:function(e,t){e.initialized=t},user:function(e,t){e.user=t},setAuth:function(e,t){e.isLoggedIn=t.isAuth},setAllBlogposts:function(e,t){console.log("😎all blogbosts mutated"),e.allBlogposts=t},setCurrentBlogpost:function(e,t){console.log("currentBlogpost mutated",t),e.currentBlogpost=t}},actions:{login:function(e){e.commit("setAuth",{isAuth:!0}),console.log("login")},logout:function(e){e.commit("setAuth",{isAuth:!1}),console.log("logout")},setAllBlogposts:function(e,t){console.log("action: store all blogposts in store"),e.commit("setAllBlogposts",t)},setCurrentBlogpost:function(e,t){console.log("action: store current blogposts in store"),e.commit("setCurrentBlogpost",t)}},modules:{}});n("320b"),n("db43");Object(o["c"])(Gt).use(Nt).use(Lt).mount("#app")},"5b88":function(e,t,n){"use strict";n("0a47")},"73d5":function(e,t,n){},"838e":function(e,t,n){"use strict";n("37d9")},"8c21":function(e,t,n){e.exports=n.p+"img/banner3.56f83583.jpg"},9571:function(e,t,n){},9611:function(e,t,n){e.exports=n.p+"img/Steffen_square.0ba80248.png"},"98f1":function(e,t,n){"use strict";n("2c13")},b35b:function(e,t,n){},ba57:function(e,t,n){e.exports=n.p+"img/banner1.6a666baa.jpg"},c432:function(e,t,n){},cc37:function(e,t,n){},d227:function(e,t,n){"use strict";n("eb28")},d542:function(e,t,n){"use strict";n("01f3")},db43:function(e,t,n){},dfb6:function(e,t,n){"use strict";n("9571")},e933:function(e,t,n){"use strict";n("cc37")},eb28:function(e,t,n){},f355:function(e,t,n){"use strict";n("b35b")},f67f:function(e,t,n){"use strict";n("c432")},f983:function(e,t,n){}});
//# sourceMappingURL=app.dfce456c.js.map