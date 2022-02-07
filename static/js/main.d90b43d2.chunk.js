(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(13),s=n.n(c),r=n(3),a=n(24),o=n(9),u=(n(32),n(33),n(0)),i=n(19),l=n(4),j=n(15),d=n(21),b=n(22),p="LOAD_POSTS",m="LOAD_USERS",O="SET_USER_ID",f="SET_POST_ID",h="LOAD_SELECTED_POST",x={posts:[],users:[],selectedUserId:0,selectedPostId:0,selectedPost:{id:0,userId:0,title:"",body:""}},v=function(e){return{type:f,value:e}},_=Object(j.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{posts:Object(i.a)(t.value)});case h:return Object(l.a)(Object(l.a)({},e),{},{selectedPost:Object(l.a)({},t.value)});case m:return Object(l.a)(Object(l.a)({},e),{},{users:Object(i.a)(t.value)});case f:return Object(l.a)(Object(l.a)({},e),{},{selectedPostId:t.value});case O:return Object(l.a)(Object(l.a)({},e),{},{selectedUserId:t.value});default:return Object(l.a)({},e)}}),Object(d.composeWithDevTools)(Object(j.applyMiddleware)(b.a))),y=_,N=(n(34),n(1)),P=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.posts})),n=Object(r.c)((function(e){return e.selectedPostId}));return Object(N.jsxs)("div",{className:"PostsList",children:[Object(N.jsx)("h2",{children:"Posts:"}),Object(N.jsx)("ul",{className:"PostsList__list",children:t.map((function(t){return Object(N.jsxs)("li",{className:"PostsList__item",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"User #".concat(t.userId,":")}),t.title]}),n===t.id?Object(N.jsx)("button",{onClick:function(){return e(v(0))},type:"button",className:"PostsList__button button",children:"Close"}):Object(N.jsx)("button",{onClick:function(){e(v(t.id))},type:"button",className:"PostsList__button button",children:"Open"})]},t.id)}))})]})};function w(){return function(e){fetch("https://mate.academy/students-api/users/").then((function(e){return e.json()})).then((function(t){return e({type:m,value:t})}))}}function S(e){var t="https://mate.academy/students-api/posts";return e&&(t+="?userId=".concat(e)),function(e){fetch(t).then((function(e){return e.json()})).then((function(t){return e({type:p,value:t})}))}}function C(e){return function(t){fetch("https://mate.academy/students-api/posts/".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:h,value:e})}))}}var I=n(8),g=n(5),D=n.n(g);function k(e){return E.apply(this,arguments)}function E(){return(E=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/comments?postId=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return T.apply(this,arguments)}function T(){return(T=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/comments/".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,n,c){return F.apply(this,arguments)}function F(){return(F=Object(I.a)(D.a.mark((function e(t,n,c,s){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/comments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t,name:n,email:c,body:s})});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(37);var U=function(e){var t=e.getPostComments,n=Object(u.useState)(""),c=Object(o.a)(n,2),s=c[0],a=c[1],i=Object(u.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(u.useState)(""),p=Object(o.a)(b,2),m=p[0],O=p[1],f=Object(r.c)((function(e){return e.selectedPostId})),h=function(){var e=Object(I.a)(D.a.mark((function e(n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,L(f,j,m,s);case 3:t(),a(""),O(""),d("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("form",{onSubmit:h,className:"NewCommentForm",children:[Object(N.jsx)("div",{className:"form-field",children:Object(N.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:j,onChange:function(e){d(e.target.value)},required:!0})}),Object(N.jsx)("div",{className:"form-field",children:Object(N.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:m,onChange:function(e){O(e.target.value)},required:!0})}),Object(N.jsx)("div",{className:"form-field",children:Object(N.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:s,onChange:function(e){a(e.target.value)},required:!0})}),Object(N.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},q=(n(38),function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.selectedPost})),n=Object(r.c)((function(e){return e.selectedPostId})),c=Object(u.useState)([{id:0,postId:0,name:"",email:"",body:""}]),s=Object(o.a)(c,2),a=s[0],i=s[1],l=Object(u.useState)(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],p=function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(I.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return e.next=4,p();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){p(),e(C(n))}),[n]),Object(N.jsxs)("div",{className:"PostDetails",children:[Object(N.jsx)("h2",{children:"Post details:"}),Object(N.jsx)("section",{className:"PostDetails__post",children:Object(N.jsx)("p",{children:t.title})}),Object(N.jsxs)("section",{className:"PostDetails__comments",children:[a.length&&Object(N.jsx)("button",{type:"button",className:"button",onClick:function(){return b(!d)},children:d?"Show comments":"Hide ".concat(a.length," comments")}),!d&&Object(N.jsx)("ul",{className:"PostDetails__list",children:a.map((function(e){return Object(N.jsxs)("li",{className:"PostDetails__list-item",children:[Object(N.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){m(e.id)},children:"X"}),Object(N.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(N.jsx)("section",{children:Object(N.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(N.jsx)(U,{getPostComments:p})})})]})}),J=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.users})),n=Object(r.c)((function(e){return e.selectedUserId})),c=Object(r.c)((function(e){return e.selectedPostId})),s=Object(u.useState)(!1),a=Object(o.a)(s,2),i=a[0],l=a[1];return Object(u.useEffect)((function(){e(S(n))}),[n]),i?Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("header",{className:"App__header",children:Object(N.jsxs)("label",{htmlFor:"select",children:["Select a user: \xa0",Object(N.jsxs)("select",{id:"select",className:"App__user-selector",onChange:function(t){var n;e((n=+t.target.value,{type:O,value:n}))},children:[Object(N.jsx)("option",{value:0,children:"All users"}),t.map((function(e){return Object(N.jsx)("option",{value:e.id,children:"".concat(e.name," ").concat(e.username)},e.id)}))]})]})}),Object(N.jsxs)("main",{className:"App__main",children:[Object(N.jsx)("div",{className:"App__sidebar",children:Object(N.jsx)(P,{})}),Object(N.jsx)("div",{className:"App__content",children:0!==c&&Object(N.jsx)(q,{})})]})]}):Object(N.jsx)("button",{className:"start__button",type:"button",onClick:function(){l(!0),e(S(0)),e(w())},children:"Start"})},R=function(){return Object(N.jsx)(r.a,{store:y,children:Object(N.jsx)(a.a,{children:Object(N.jsx)(J,{})})})};s.a.render(Object(N.jsx)(R,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d90b43d2.chunk.js.map