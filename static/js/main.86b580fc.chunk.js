(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n.p+"static/media/user.bb82b771.png"},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__33si7"}},135:function(e,t,n){e.exports=n.p+"static/media/loading.f6076e2c.svg"},164:function(e,t,n){e.exports=n(291)},169:function(e,t,n){},170:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__2txY0",item:"Navbar_item__1xdoD",activeLink:"Navbar_activeLink__27taT"}},27:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(52),a=n(0),o=n.n(a),u=n(49),i=n.n(u),c=n(91),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({validate:n,placeholder:e,name:t,component:r},a))," ",u)}},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(65),u=n.n(o),i=(n(169),n(35)),c=n(36),s=n(38),l=n(37),f=n(39),p=n(31),m=(n(170),n(56),n(92)),d=n.n(m),g=n(14),h=function(e){return a.a.createElement("header",{className:d.a.header},a.a.createElement("img",{src:"https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"}),a.a.createElement("div",{className:d.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(g.b,{to:"/login"},"Login")))},v=n(12),b=n(6),E=n.n(b),O=n(13),w=n(8),S=n(9),P=n(24),_={userId:null,email:null,login:null,isAuth:!1},j=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},C=function(){return function(){var e=Object(O.a)(E.a.mark(function e(t){var n,r,a,o,u;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,u=r.email,t(j(a,u,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(w.a)({},e,t.payload);default:return e}},k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(h,this.props)}}]),t}(a.a.Component),I=Object(v.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(k),T=n(21),N=n.n(T),x=function(){return a.a.createElement("nav",{className:N.a.nav},a.a.createElement("div",{className:N.a.item},a.a.createElement(g.b,{to:"/profile",activeClassName:N.a.activeLink},"Profile")),a.a.createElement("div",{className:N.a.item},a.a.createElement(g.b,{to:"/dialogs",activeClassName:N.a.activeLink},"Messages")),a.a.createElement("div",{className:N.a.item},a.a.createElement(g.b,{to:"/users",activeClassName:N.a.activeLink},"Users")),a.a.createElement("div",{className:N.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:N.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:N.a.item},a.a.createElement("a",null,"Settings")))},U=n(52),A=n(68),L=n(98),F=n(71),z=n.n(F),R=n(90),G=n.n(R),D=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/c),m=Object(r.useState)(1),d=Object(L.a)(m,2),g=d[0],h=d[1],v=(g-1)*c+1,b=g*c;return a.a.createElement("div",{className:z.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV "),l.filter(function(e){return e>=v&&e<=b}).map(function(e){return a.a.createElement("span",{className:G()(Object(A.a)({},z.a.selectedPage,o===e),z.a.pageNumber),key:e,onClick:function(t){u(e)}},e)}),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},M=n(134),W=n.n(M),H=n(109),B=n.n(H),V=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(g.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:B.a,className:W.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"u.location.country"),a.a.createElement("div",null,"u.location.city"))))},q=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,u=Object(U.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]);return a.a.createElement("div",null,a.a.createElement(D,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:o}),a.a.createElement("div",null,u.users.map(function(e){return a.a.createElement(V,{key:e.id,user:e,followingInProgress:u.followingInProgress,follow:u.follow,unfollow:u.unfollow})})))},Y=n(34),Z=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(w.a)({},e,r):e})},J={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},X=function(e){return{type:"FOLLOW",userId:e}},K=function(e){return{type:"UNFOLLOW",userId:e}},$=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Q=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},ee=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},te=function(){var e=Object(O.a)(E.a.mark(function e(t,n,r,a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ee(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(ee(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)({},e,{users:Z(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(w.a)({},e,{users:Z(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(w.a)({},e,{users:Object(Y.a)(t.users)});case"SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(Y.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter(function(e){return e!=t.userId})]});default:return e}},re=n(42),ae=n(7),oe=n(136),ue=Object(oe.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ie=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},le=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},pe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(re.a,null):null,a.a.createElement(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),me=Object(ae.d)(Object(v.b)(function(e){return{users:ue(e),pageSize:ie(e),totalUsersCount:ce(e),currentPage:se(e),isFetching:le(e),followingInProgress:fe(e)}},{follow:function(e){return function(){var t=Object(O.a)(E.a.mark(function t(n){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.follow.bind(S.c),te(n,e,r,X);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(O.a)(E.a.mark(function t(n){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.unfollow.bind(S.c),te(n,e,r,K);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:$,toggleFollowingProgress:ee,requestUsers:function(e,t){return function(){var n=Object(O.a)(E.a.mark(function n(r){var a;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Q(!0)),r($(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(Q(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(pe),de=n(130),ge=n(27),he=n(87),ve=n(49),be=n.n(ve),Ee=Object(de.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(ge.c)("Email","email",[he.b],ge.a),Object(ge.c)("Password","password",[he.b],ge.a,{type:"password"}),Object(ge.c)(null,"rememberMe",[],ge.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:be.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),Oe=Object(v.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(O.a)(E.a.mark(function r(a){var o,u;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(C()):(u=o.data.messages.length>0?o.data.messages[0]:"some error",a(Object(P.a)("login",{_error:u})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(p.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),we={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},Pe=n(73),_e=n(97),je={},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;arguments.length>1&&arguments[1];return e},ye=n(138),ke=n(131),Ie=Object(ae.c)({profilePage:Pe.b,dialogsPage:_e.a,sidebar:Ce,usersPage:ne,auth:y,form:ke.a,app:Se}),Te=Object(ae.e)(Ie,Object(ae.a)(ye.a));window.store=Te;var Ne=Te,xe=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(re.a,null)},a.a.createElement(e,t))}},Ue=a.a.lazy(function(){return n.e(4).then(n.bind(null,299))}),Ae=a.a.lazy(function(){return n.e(3).then(n.bind(null,298))}),Le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(I,null),a.a.createElement(x,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(p.b,{path:"/dialogs",render:xe(Ue)}),a.a.createElement(p.b,{path:"/profile/:userId?",render:xe(Ae)}),a.a.createElement(p.b,{path:"/users",render:function(){return a.a.createElement(me,null)}}),a.a.createElement(p.b,{path:"/login",render:function(){return a.a.createElement(Oe,null)}}))):a.a.createElement(re.a,null)}}]),t}(a.a.Component),Fe=Object(ae.d)(p.f,Object(v.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Le),ze=function(e){return a.a.createElement(g.a,null,a.a.createElement(v.a,{store:Ne},a.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,n){"use strict";var r=n(135),a=n.n(r),o=n(0),u=n.n(o);t.a=function(e){return u.a.createElement("div",null,u.a.createElement("img",{src:a.a,style:{backgroundColor:"white"}}))}},49:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2eGY8",error:"FormsControl_error__TERWz",formSummaryError:"FormsControl_formSummaryError__jNgAZ"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__uAaO4",pageNumber:"Paginator_pageNumber__3oMve",selectedPage:"Paginator_selectedPage__2XWL-"}},73:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return v});var r=n(6),a=n.n(r),o=n(13),u=n(34),i=n(8),c=n(9),s=n(24),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"Its my first post",likesCount:5}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE ",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTOS_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,c.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(m(o)),t.next=10;break;case 8:return n(Object(s.a)("editProfile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE ":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"SAVE_PHOTOS_SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},87:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},9:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});var r=n(56),a=(n(73),r.create({withCredentials:!0,headers:{"API-KEY":"2ef20370-8037-4b6c-bd91-6c68962a182a"},baseURL:"https://social-network.samuraijs.com/api/1.0/"})),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return console.log("asdasd"),a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI"),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},92:function(e,t,n){e.exports={header:"Header_header__3CtPF",loginBlock:"Header_loginBlock__3l23B"}},97:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(34),a=n(8),o={messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Chi da"}],dialogs:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Victor"},{id:5,name:"Valera"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])})}return e}}},[[164,1,2]]]);
//# sourceMappingURL=main.86b580fc.chunk.js.map