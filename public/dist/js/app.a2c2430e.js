(function(e){function t(t){for(var o,c,s=t[0],l=t[1],i=t[2],b=0,d=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f3":function(e,t,n){},"08dd":function(e,t,n){"use strict";n("3cc5")},"0d64":function(e,t,n){e.exports=n.p+"img/banner2.fd9ce212.jpg"},"0ddf":function(e,t,n){},"22ef":function(e,t,n){"use strict";n("e55e")},"39d9":function(e,t,n){"use strict";n("5f9e")},"3a2a":function(e,t,n){"use strict";n("73d5")},"3cc5":function(e,t,n){},"47de":function(e,t,n){e.exports=n.p+"img/world.86318bf7.png"},"4a30":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"flex flex-col justify-between h-screen"};function a(e,t,n,a,c,s){var l=Object(o["y"])("Header"),i=Object(o["y"])("router-view"),u=Object(o["y"])("Footer");return Object(o["r"])(),Object(o["d"])("div",r,[Object(o["h"])(l,{class:"flex-shrink-0"}),Object(o["h"])(i,{class:"mb-80"}),Object(o["h"])(u,{class:"flex-shrink-0"})])}var c=n("47de"),s=n.n(c),l=Object(o["F"])("data-v-315a9442");Object(o["u"])("data-v-315a9442");var i={class:"header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md"},u=Object(o["h"])("a",{id:"siteLogoName",href:"./index.html",class:"flex items-center  "},[Object(o["h"])("div",{class:" w-9 lg:w-16 "},[Object(o["h"])("img",{class:" object-fill   ",src:s.a,alt:"logo"})]),Object(o["h"])("span",{class:"pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium "},"Around the World")],-1),b={key:0},d={class:"p-6",id:"nav"},g=Object(o["g"])("Overview"),p=Object(o["g"])("Map"),h=Object(o["g"])("About"),f=Object(o["g"])("Check"),m=Object(o["g"])("+new post"),O=Object(o["h"])("a",{id:"burger",class:"burger",href:"#"},[Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),j=Object(o["h"])("div",{id:"sideMenu",class:"sideMenu-hiding"},[Object(o["h"])("div",null,[Object(o["h"])("a",{id:"gotoOverviewSideMenu",onclick:"gotoOverviewPage()",class:"active"},"overview"),Object(o["h"])("a",{id:"gotoMapSideMenu",onclick:"gotoMapPage()"},"map"),Object(o["h"])("a",{id:"gotoNewPostSideMenu",onclick:"gotoAddPostPage()"},"+ add post"),Object(o["h"])("a",{id:"gotoResetAllSideMenu",onclick:"resetLocalStorage()"},"reset all"),Object(o["h"])("a",{id:"gotoAboutPageSideMenu",onclick:"gotoAboutPage()"},"about")])],-1);Object(o["s"])();var v=l((function(e,t,n,r,a,c){var s=Object(o["y"])("Modal"),v=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("header",i,[u,a.showModal?(Object(o["r"])(),Object(o["d"])("div",b,[Object(o["h"])(s,{theme:"",onCloseModal:c.toggleModal},null,8,["onCloseModal"])])):Object(o["e"])("",!0),Object(o["h"])("nav",null,[Object(o["h"])("div",d,[Object(o["h"])(v,{class:" text-gray-700",to:{name:"Home"}},{default:l((function(){return[g]})),_:1}),Object(o["h"])(v,{class:" text-gray-700",to:"/map"},{default:l((function(){return[p]})),_:1}),Object(o["h"])(v,{class:" text-gray-700",to:"/about"},{default:l((function(){return[h]})),_:1}),Object(o["h"])(v,{class:" text-gray-700",to:"/check"},{default:l((function(){return[f]})),_:1}),e.isAuth?(Object(o["r"])(),Object(o["d"])(v,{key:0,class:" text-gray-700",to:"/new"},{default:l((function(){return[m]})),_:1})):Object(o["e"])("",!0),e.isAuth?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("a",{key:1,onClick:t[1]||(t[1]=function(){return c.login&&c.login.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Login/register")),e.isAuth?(Object(o["r"])(),Object(o["d"])("a",{key:2,onClick:t[2]||(t[2]=function(){return c.logout&&c.logout.apply(c,arguments)}),class:" text-gray-700 bg-green-700 p-3 rounded"},"Logout")):Object(o["e"])("",!0)])]),O,j])})),x=n("5530"),w=n("5502"),y=Object(o["f"])('<div class=" w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  "><input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded " type="email" placeholder="email "><input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded" type="password" placeholder="password "><button class="primaryButton uppercase">Log In</button><hr><p>or</p><button class="secondaryButton uppercase">register</button></div>',1);function B(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",{class:"backdrop",onClick:t[1]||(t[1]=Object(o["E"])((function(){return c.closeModal&&c.closeModal.apply(c,arguments)}),["self"]))},[y])}var k={methods:{closeModal:function(){this.$emit("closeModal")}},props:["header","text"]};k.render=B;var A=k,M={name:"Header",methods:{login:function(){this.$store.dispatch("login"),this.showModal=!this.showModal},logout:function(){this.$store.dispatch("logout"),this.showModal=!this.showModal},toggleModal:function(){this.showModal=!this.showModal}},computed:Object(x["a"])({},Object(w["b"])({isAuth:"userIsAuthenticated"})),data:function(){return{showModal:!1}},components:{Modal:A}};n("67b0");M.render=v,M.__scopeId="data-v-315a9442";var L=M,S=Object(o["F"])("data-v-58b4a54e");Object(o["u"])("data-v-58b4a54e");var I={class:"footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"},T=Object(o["f"])('<div class=" text-sm text-gray-900" data-v-58b4a54e><a href="https://www.steffen-haefelinger.com/" target="_blank" data-v-58b4a54e> © 2021 Steffen Häfelinger </a></div><div data-v-58b4a54e><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de" data-v-58b4a54e><i class="fas fa-envelope" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger" data-v-58b4a54e><i class="fab fa-github" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/" data-v-58b4a54e><i class="fab fa-facebook-f" data-v-58b4a54e></i></a><a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/" data-v-58b4a54e><i class="fab fa-instagram" data-v-58b4a54e></i></a></div>',2);Object(o["s"])();var _=S((function(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("footer",I,[T])})),P={name:"Footer"};n("d542");P.render=_,P.__scopeId="data-v-58b4a54e";var C=P,D={name:"app",components:{Header:L,Footer:C},computed:{user:function(){return this.$store.getters.user}}};n("22ef");D.render=a;var E=D,H=n("6c02"),R={key:0},G={class:"flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center"};function F(e,t,n,r,a,c){var s=Object(o["y"])("Banner"),l=Object(o["y"])("Login"),i=Object(o["y"])("OverviewCard");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("div",null,[Object(o["h"])(s,{bannerImage:a.bannerImage,bannerText:a.bannerText,bannerButtonText:a.bannerButtonText,bannerButtonLink:a.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"])]),Object(o["h"])(l),c.allBlogposts.length?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("p",R,"DATA loading - Server is sleeping 😴")),Object(o["h"])("div",G,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(a.blogposts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"",key:e._id,onClick:function(t){return c.selectBlogpost(e)}},[Object(o["h"])(i,{blogpost:e},null,8,["blogpost"])],8,["onClick"])})),128))])],64)}var K=n("1da1"),z=(n("96cf"),n("b0c0"),n("ba57")),N=n.n(z),U=Object(o["F"])("data-v-55c74075");Object(o["u"])("data-v-55c74075");var $={class:"bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  ",id:"bannerTitle"},V={class:"uppercase ",onclick:"gotoAboutPage()",id:"bannerButton"};Object(o["s"])();var W=U((function(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",{class:"bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0",id:"bannerImage",style:{backgroundImage:"url(".concat(n.bannerImage,")")}},[Object(o["h"])("p",$,Object(o["A"])(n.bannerText),1),Object(o["h"])("button",V,Object(o["A"])(n.bannerButtonText),1)],4)})),X={props:["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]};n("08dd");X.render=W,X.__scopeId="data-v-55c74075";var Y=X,J=n("9611"),Q=n.n(J),Z={class:" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"},q={class:"blogTextWrapper h-60 overflow-hidden px-8 pb-10"},ee={class:"mt-4 flex items-center"},te={class:"text-gray-400 text-sm ml-2"},ne={class:"mt-1 text-base text-gray-600"},oe={class:"text-2xl my-4"},re={class:"font-light text-gray-600 text-base "},ae=Object(o["h"])("div",{class:"cardBottom"},[Object(o["h"])("div",null,[Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Q.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")])])],-1);function ce(e,t,n,r,a,c){var s=Object(o["y"])("StarRating");return Object(o["r"])(),Object(o["d"])("div",Z,[Object(o["h"])("img",{class:"h-60 w-full object-cover  ",src:n.blogpost.image1URL,alt:"character"},null,8,["src"]),Object(o["h"])("div",q,[Object(o["h"])("div",ee,[Object(o["h"])(s,{rating:n.blogpost.rating},null,8,["rating"]),Object(o["h"])("p",te,"Visited in "+Object(o["A"])(n.blogpost.month)+" "+Object(o["A"])(n.blogpost.year),1)]),Object(o["h"])("h2",ne,Object(o["A"])(n.blogpost.longName),1),Object(o["h"])("h3",oe,Object(o["A"])(n.blogpost.title),1),Object(o["h"])("p",re,Object(o["A"])(c.snippet),1)]),ae])}n("a4d3"),n("e01a");var se={class:"flex "},le=Object(o["h"])("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"},null,-1);function ie(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",se,[(Object(o["r"])(),Object(o["d"])(o["a"],null,Object(o["x"])(5,(function(e){return Object(o["h"])("svg",{key:e,class:[e<=n.rating?"text-yellow-500":"text-gray-300","h-4 w-4 fill-current  "],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[le],2)})),64))])}var ue={name:"StarRating",props:["rating"]};ue.render=ie;var be=ue,de={name:"OverviewCard",components:{StarRating:be},props:{blogpost:Object},computed:{snippet:function(){var e=this.blogpost.description||this.blogpost.wiki,t=140;return e.length>t&&(e=e.substring(0,t)+"…"),e}}};n("b01c");de.render=ce;var ge=de,pe=Object(o["h"])("h2",null,"Login",-1),he=Object(o["h"])("input",{type:"text",name:"email"},null,-1),fe=Object(o["h"])("br",null,null,-1),me=Object(o["h"])("input",{type:"password",name:"password"},null,-1),Oe=Object(o["h"])("br",null,null,-1),je=Object(o["h"])("input",{type:"submit",value:"Login"},null,-1),ve=Object(o["h"])("p",null,"s.haefelinger@gmx.de - x",-1),xe=Object(o["h"])("p",null,"x@x.com - x",-1);function we(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",null,[pe,Object(o["h"])("form",{onSubmit:t[1]||(t[1]=function(){return c.login&&c.login.apply(c,arguments)})},[he,fe,me,Oe,je],32),ve,xe])}var ye=n("bc3a"),Be=n.n(ye),ke={name:"Login",methods:{login:function(e){e.preventDefault();var t=e.target.elements.email.value,n=e.target.elements.password.value;Be.a.defaults.withCredentials=!0;var o="",r=function(){var e={email:t,password:n};Be.a.post(o+"/auth/login",e).then((function(e){console.log("Logged in from LOGIN"),Ht.push("/dashboard")})).catch((function(e){console.log("Cannot log in from LOGIN")}))};r()}}};ke.render=we;var Ae=ke,Me=(n("d3b7"),"https://aroundtheworld-blog-server.herokuapp.com/");function Le(){return fetch(Me+"blogposts")}function Se(){return fetch(Me+"users")}function Ie(e){return e.then((function(e){return e.json()})).then((function(e){return{data:e,error:null}})).catch((function(e){return{data:null,error:e}}))}var Te={name:"Home",components:{Banner:Y,OverviewCard:ge,Login:Ae},data:function(){return{bannerImage:N.a,bannerText:"The Travel Blog",bannerButtonText:"About",bannerButtonLink:"About",blogposts:[],users:[]}},methods:{selectBlogpost:function(e){console.log("selectCharacter was clicked: "+e.name);var t="/details/"+e._id;console.log(t),this.$emit("selectionChanged",e),this.$router.push(t)}},mounted:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,o,r,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("/home mounted"),t.next=3,Ie(Le());case 3:return n=t.sent,o=n.data,r=n.error,r?console.log("🚫Error getting Blogpost-Data from Server"):(e.blogposts=o,e.$store.dispatch("setAllBlogposts",o),console.log("👍Got blogposts from Server")),t.next=9,Ie(Se());case 9:a=t.sent,c=a.data,s=a.error,s?console.log("🚫Error getting user-Data from Server"):(e.users=c,console.log("👍Got users from Server"));case 13:case"end":return t.stop()}}),t)})))()},computed:{allBlogposts:function(){return this.$store.getters.getAllBlogposts}}};n("9db1");Te.render=F;var _e=Te,Pe={id:"overviewMapContainer"},Ce={id:"overviewMap",ref:"mapDiv"};function De(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",Pe,[Object(o["h"])("div",Ce,null,512)])}n("99af"),n("159b");var Ee=n("4272"),He={name:"App",components:{},computed:{allBlogposts:function(){return this.$store.getters.getAllBlogposts}},setup:function(){var e="AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",t=new Ee["a"]({apiKey:e}),n=Object(o["w"])(null),r=Object(w["c"])(),a=r.getters.getAllBlogposts;return Object(o["p"])(Object(K["a"])(regeneratorRuntime.mark((function e(){var o,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=function(e,t){var n=new google.maps.Marker({position:e.coords,map:r}),o=new google.maps.InfoWindow({content:'\n      <div class="infoWindow" onclick="gotoDetailsPage('.concat(t,')" style="width: 200px;">\n        <h3>').concat(e.name,"</h3>\n        <p>").concat(e.title,'</p>\n        <div class="infoWindowImage" style="background-image: url(').concat(e.image1URL,');"></div>\n        <button class="miniButton">read more</button>\n      </div>\n      ')});n.addListener("click",(function(){o.open(r,n)})),c.extend(e.coords)},e.next=3,t.load();case 3:o={maxZoom:10,minZoom:2,mapTypeControl:!1,streetViewControl:!1},r=new google.maps.Map(n.value,o),c=new google.maps.LatLngBounds,a.forEach(s),r.fitBounds(c);case 8:case"end":return e.stop()}}),e)})))),{mapDiv:n}}};n("39d9");He.render=De;var Re=He,Ge={id:"overviewMapContainer"},Fe={id:"overviewMap",ref:"mapDiv"};function Ke(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",Ge,[Object(o["h"])("div",Fe,null,512)])}var ze=Object({VUE_APP_GOOGLE_MAPS_API_KEY:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_MAPS_API_KEY,Ne={name:"App",computed:{allBlogposts:function(){return this.$store.getters.getAllBlogposts}},setup:function(){var e=Object(o["b"])((function(){return{lat:47.3768866,lng:8.541694}})),t=new Ee["a"]({apiKey:ze}),n=Object(o["w"])(null),r={zoom:6,center:e.value,mapTypeId:"hybrid",disableDefaultUI:!0};return Object(o["p"])(Object(K["a"])(regeneratorRuntime.mark((function o(){var a,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.load();case 2:a=new google.maps.Map(n.value,r),c=new google.maps.Marker({position:e.value,map:a}),console.log(c);case 5:case"end":return o.stop()}}),o)})))),{mapDiv:n}}};Ne.render=Ke;var Ue={id:"overviewMapContainer"},$e={id:"overviewMap",ref:"mapDiv"};function Ve(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(" POSTS: "+Object(o["A"])(c.allBlogposts)+" ",1),Object(o["h"])("div",Ue,[Object(o["h"])("div",$e,null,512)])],64)}var We=Object({VUE_APP_GOOGLE_MAPS_API_KEY:"AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_MAPS_API_KEY,Xe={name:"App",components:{},computed:{allBlogposts:function(){return this.$store.getters.getAllBlogposts}},mounted:function(){new Ee["a"]({apiKey:We});var e=Object(o["w"])(null);return{mapDiv:e}}};n("815f");Xe.render=Ve;var Ye=Xe,Je={class:"flex justify-center"},Qe={class:"detailsArticle "},Ze={class:"detailsTopContainer"},qe={class:"mt-4"},et={class:"flex flex-row items-center  py-4"},tt={class:"ml-4 text-gray-500"},nt={class:"text-2xl"},ot={class:"mt-4"},rt={class:"mt-4"},at=Object(o["h"])("div",{class:"mt-5 flex items-center"},[Object(o["h"])("img",{class:"rounded-full w-11",src:Q.a,alt:""}),Object(o["h"])("p",{class:"ml-4 text-gray-500"},"Steffen Häfelinger")],-1),ct={id:"overviewMap",ref:"mapDiv",class:"mt-4"},st=Object(o["h"])("button",{class:"secondaryButton",onclick:"eraseEntryFromLocalStorage()"},"DELETE POST",-1),lt=Object(o["h"])("button",{class:"primaryButton",onclick:"gotoOverviewPage()"},"< BACK",-1);function it(e,t,n,r,a,c){var s=Object(o["y"])("Banner"),l=Object(o["y"])("StarRating");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:c.currentBlogpost.image1URL,bannerText:c.currentBlogpost.name,bannerButtonText:a.bannerButtonText,bannerButtonLink:a.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["h"])("div",Je,[Object(o["h"])("div",Qe,[Object(o["h"])("div",null,[Object(o["h"])("div",Ze,[Object(o["h"])("img",{class:"detailsImg2",src:c.currentBlogpost.image2URL,alt:""},null,8,["src"])])]),Object(o["h"])("div",null,[Object(o["h"])("h2",qe,Object(o["A"])(c.currentBlogpost.longName),1),Object(o["h"])("div",et,[Object(o["h"])(l,{rating:c.currentBlogpost.rating},null,8,["rating"]),Object(o["h"])("p",tt,"Visited in "+Object(o["A"])(c.currentBlogpost.month)+" "+Object(o["A"])(c.currentBlogpost.year),1)]),Object(o["h"])("h3",nt,Object(o["A"])(c.currentBlogpost.title),1),Object(o["h"])("p",ot,Object(o["A"])(c.currentBlogpost.description),1),Object(o["h"])("p",rt,Object(o["A"])(c.currentBlogpost.wiki),1)]),at,Object(o["h"])("div",ct,null,512),st,lt])])],64)}n("7db0");var ut="AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs",bt={name:"Details",components:{Banner:Y,StarRating:be},data:function(){return{bannerButtonText:"back",bannerButtonLink:"About",blogposts:[],users:[]}},computed:{allBlogposts:function(){return this.$store.getters.getAllBlogposts},currentBlogpost:function(){var e=this;return this.$store.getters.getAllBlogposts.find((function(t){return t._id===e.$route.params.id}))}},setup:function(){var e=Object(w["c"])(),t=Object(H["c"])(),n=e.getters.getAllBlogposts,r=t.params.id,a=n.find((function(e){return e._id===r})),c=a.coords;console.log(c);var s=new Ee["a"]({apiKey:ut}),l=Object(o["w"])(null),i={zoom:6,center:c,mapTypeId:"hybrid",disableDefaultUI:!0};return Object(o["p"])(Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.load();case 2:t=new google.maps.Map(l.value,i),new google.maps.Marker({position:c,map:t});case 4:case"end":return e.stop()}}),e)})))),{mapDiv:l}}};n("9052");bt.render=it;var dt=bt,gt=Object(o["F"])("data-v-160e2efd");Object(o["u"])("data-v-160e2efd");var pt=Object(o["h"])("div",{id:"aboutContainer"},[Object(o["h"])("div",{class:"aboutArticle"},[Object(o["h"])("h2",null,"Project 1 - Travel Blog"),Object(o["h"])("p",null,[Object(o["g"])(" This is my contribution for the second Project for the Full-Stack Web Development-Course at the "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School.")]),Object(o["h"])("p",null," It uses no Frameworks, just vanilla HTML, CSS and Javascript. "),Object(o["h"])("p",null,[Object(o["g"])(" All Information is stored in the Local Sorage of the Browser, the App fetches information from the APIs: "),Object(o["h"])("br"),Object(o["g"])(" - Google Maps "),Object(o["h"])("br"),Object(o["g"])(" - Wikipedia"),Object(o["h"])("br"),Object(o["g"])(" - Openweathermaps ")]),Object(o["h"])("a",{href:"https://github.com/shaefelinger/HCS-project1-travelBlog",target:"_blank"},[Object(o["h"])("i",{class:"fab fa-github"}),Object(o["g"])(" View this project and the documentation on Github ")])])],-1),ht=Object(o["h"])("section",{class:"aboutBottom "},[Object(o["h"])("div",{class:"aboutAuthorInfo"},[Object(o["h"])("div",{class:"authorPic  aboutAuthorPic"},[Object(o["h"])("img",{src:Q.a})]),Object(o["h"])("p",{class:"author"},"Steffen Häfelinger")]),Object(o["h"])("p",{class:"aboutAuthorText"},[Object(o["g"])(" Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at "),Object(o["h"])("a",{target:"_blank",href:"https://hamburgcodingschool.com/"},"Hamburg Coding School."),Object(o["g"])(" He is also working as a professional Musician, Songwriter & Audio Engineer. ")])],-1);Object(o["s"])();var ft=gt((function(e,t,n,r,a,c){var s=Object(o["y"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:a.bannerImage,bannerText:a.bannerText,bannerButtonText:a.bannerButtonText,bannerButtonLink:a.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),pt,ht],64)})),mt=n("8c21"),Ot=n.n(mt),jt={name:"About",components:{Banner:Y},data:function(){return{bannerImage:Ot.a,bannerText:"About this Project",bannerButtonText:"Back",bannerButtonLink:"Home"}}};n("3a2a");jt.render=ft,jt.__scopeId="data-v-160e2efd";var vt=jt;function xt(e,t,n,r,a,c){var s=Object(o["y"])("Banner");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s,{bannerImage:a.bannerImage,bannerText:a.bannerText,bannerButtonText:a.bannerButtonText,bannerButtonLink:a.bannerButtonLink},null,8,["bannerImage","bannerText","bannerButtonText","bannerButtonLink"]),Object(o["g"])(" New Post "+Object(o["A"])(a.status),1)],64)}var wt=n("0d64"),yt=n.n(wt),Bt={name:"NewPost",components:{Banner:Y},data:function(){return{bannerImage:yt.a,bannerText:"Add new Post...",bannerButtonText:"Back",bannerButtonLink:"Home",status:"unklar",user:{name:"no user"}}}};Bt.render=xt;var kt=Bt,At=Object(o["h"])("h2",null,"Dashboard",-1);function Mt(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("div",null,[At,Object(o["h"])("p",null,"Name: "+Object(o["A"])(a.user.name),1)])}var Lt={name:"Login",components:{},data:function(){return{user:{name:"no user"}}},methods:{getUserData:function(){var e=this,t="";Be.a.defaults.withCredentials=!0,Be.a.get(t+"/auth/user").then((function(t){console.log(e.user),console.log(t.data.user),e.user=t.data.user,console.log("success 😎")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUserData()}};Lt.render=Mt;var St=Lt,It=Object(o["h"])("h2",{class:"text-6xl"},"404",-1),Tt=Object(o["h"])("h3",{class:"text-4xl"},"Page not Found",-1);function _t(e,t,n,r,a,c){var s=Object(o["y"])("dic");return Object(o["r"])(),Object(o["d"])(s,{class:"text-center mt-24"},{default:Object(o["D"])((function(){return[It,Tt]})),_:1})}var Pt={};Pt.render=_t;var Ct=Pt,Dt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:_e},{path:"/map",name:"Map",component:Re},{path:"/map3",name:"Map3",component:Ye},{path:"/new",name:"NewPost",component:kt},{path:"/details/:id",name:"Details",component:dt,props:!0},{path:"/check",name:"Check",component:St},{path:"/about",name:"About",component:vt},{path:"/:catchAll(.*)",name:"NotFound",component:Ct}],Et=Object(H["a"])({history:Object(H["b"])("/"),routes:Dt}),Ht=Et,Rt=Object(w["a"])({state:{initialized:!0,user:1,allBlogposts:[],allUsers:[],currentBlogpost:{},currentUser:{},isLoggedIn:!0},getters:{userIsAuthenticated:function(e){return e.isLoggedIn},initialized:function(e){return e.initialized},user:function(e){return e.user},getAllBlogposts:function(e){return e.allBlogposts},currentBlogpost:function(e){return e.allBlogposts}},mutations:{initialized:function(e,t){e.initialized=t},user:function(e,t){e.user=t},setAuth:function(e,t){e.isLoggedIn=t.isAuth},setAllBlogposts:function(e,t){console.log("😎all blogbosts mutated"),e.allBlogposts=t},setCurrentBlogpost:function(e,t){e.currentBlogpost=t}},actions:{login:function(e){e.commit("setAuth",{isAuth:!0}),console.log("login")},logout:function(e){e.commit("setAuth",{isAuth:!1}),console.log("logout")},setAllBlogposts:function(e,t){console.log("action: store all blogposts in store"),e.commit("setAllBlogposts",t)},currentBlogpost:function(e,t){console.log("store current blogposts in store"),e.commit("setCurrentBlogpost",t)}},modules:{}});n("db43");Object(o["c"])(E).use(Rt).use(Ht).mount("#app")},"5f9e":function(e,t,n){},"67b0":function(e,t,n){"use strict";n("cb21")},"73d5":function(e,t,n){},"815f":function(e,t,n){"use strict";n("fe4e")},"8c21":function(e,t,n){e.exports=n.p+"img/banner3.56f83583.jpg"},9052:function(e,t,n){"use strict";n("0ddf")},9611:function(e,t,n){e.exports=n.p+"img/Steffen_square.0ba80248.png"},"9db1":function(e,t,n){"use strict";n("a98d")},a98d:function(e,t,n){},b01c:function(e,t,n){"use strict";n("4a30")},ba57:function(e,t,n){e.exports=n.p+"img/banner1.6a666baa.jpg"},cb21:function(e,t,n){},d542:function(e,t,n){"use strict";n("01f3")},db43:function(e,t,n){},e55e:function(e,t,n){},fe4e:function(e,t,n){}});
//# sourceMappingURL=app.a2c2430e.js.map