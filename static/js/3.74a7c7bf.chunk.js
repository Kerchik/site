(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(t,e,a){"use strict";a.d(e,"a",function(){return f});var n=a(34),s=a(35),o=a(38),r=a(36),u=a(39),i=a(0),c=a.n(i),l=a(30),p=a(12),m=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(l.a,{to:"/login"})}}]),a}(c.a.Component);return Object(p.b)(m)(e)}},294:function(t,e,a){},295:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1UiMl"}},296:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__OPhx6",posts:"MyPosts_posts__1Sk5I"}},297:function(t,e,a){t.exports={item:"Post_item__1_1_H"}},298:function(t,e,a){"use strict";a.r(e);var n=a(34),s=a(35),o=a(38),r=a(36),u=a(39),i=a(0),c=a.n(i),l=(a(294),a(296)),p=a.n(l),m=a(297),f=a.n(m),d=function(t){return c.a.createElement("div",{className:f.a.item},c.a.createElement("img",{src:"https://i1.i.ua/prikol/pic/4/7/418574.jpg",alt:""}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",t.likesCount))},h=a(96),b=a(90),E=a(129),v=a(86),j=a(26),O=c.a.memo(function(t){console.log("asdf");var e=t.posts.map(function(t){return c.a.createElement(d,{message:t.message,likesCount:t.likesCount,key:t.id})});c.a.createRef();return c.a.createElement("div",{className:p.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(k,{onSubmit:function(e){t.addPost(e.newPostText)}}),c.a.createElement("div",{className:p.a.posts},e))}),g=Object(v.a)(10),k=Object(E.a)({form:"ProfileAddNewPostForm"})(function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(b.a,{name:"newPostText",component:j.b,validate:[v.b,g],placeholder:"Write something"})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))}),P=O,S=a(12),_=Object(S.b)(function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}},function(t){return{addPost:function(e){t(Object(h.a)(e))}}})(P),w=a(295),y=a.n(w),x=a(42),C=a(108),A=a.n(C),B=(c.a.Component,a(130)),I=function(t){var e=Object(i.useState)(!1),a=Object(B.a)(e,2),n=a[0],s=a[1],o=Object(i.useState)(t.status),r=Object(B.a)(o,2),u=r[0],l=r[1];Object(i.useEffect)(function(){l(t.status)},[t.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},u||"---")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},onChange:function(t){l(t.currentTarget.value)},value:u})))},M=function(t){var e=t.profile,a=t.updateStatus,n=t.status;return e?c.a.createElement("div",null,c.a.createElement("div",{className:y.a.descriptionBlock},c.a.createElement("img",{src:null!=e.photos.large?e.photos.large:A.a}),c.a.createElement(I,{status:n,updateStatus:a}))):c.a.createElement(x.a,null)},N=function(t){return c.a.createElement("div",null,c.a.createElement(M,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(_,null))},T=(a(56),a(30)),U=(a(10),a(293),a(6)),z=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(c.a.Component);e.default=Object(U.d)(Object(S.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),T.f)(z)}}]);
//# sourceMappingURL=3.74a7c7bf.chunk.js.map