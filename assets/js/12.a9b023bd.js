(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(t,a,e){},202:function(t,a,e){},225:function(t,a,e){"use strict";var i=e(201);e.n(i).a},226:function(t,a,e){"use strict";var i=e(202);e.n(i).a},234:function(t,a,e){"use strict";e.r(a);var i=e(243),n=e(235),s={name:"BlogFooter"},o=e(4),r=Object(o.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer"},[a("div",[this._v("Footer")])])}],!1,null,null,null).exports,l={name:"BlogLayout",components:{Navbar:i.a,NavLinks:n.a,BlogFooter:r},data:function(){return{isSidebarOpen:!1}},computed:{pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"sidebar-open":this.isSidebarOpen},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var a=t.changedTouches[0].clientX-this.touchStart.x,e=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(a)>Math.abs(e)&&Math.abs(a)>40&&(a>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(e(225),e(226),Object(o.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(a){return t.toggleSidebar(!1)}}}),t._v(" "),e("aside",{staticClass:"sidebar-nav"},[e("NavLinks")],1),t._v(" "),e("div",{staticClass:"blog-container"},[e("div",{staticClass:"blog-body"},[e("div",{staticClass:"left"},[this.$slots["blog-left"]?[t._t("blog-left")]:[e("Content",{attrs:{"slot-key":"blog-left"}})]],2),t._v(" "),e("div",{staticClass:"main"},[t._t("default",[/\/blog\/$/.test(t.$page.regularPath)&&t.$pagination?[t.$pagination.pages?e("ul",{attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(a){return e("li",{key:a.path},[e("router-link",{staticClass:"page-link",attrs:{to:a.path}},[t._v(t._s(a.title))])],1)})),0):t._e(),t._v(" "),e("div",{attrs:{id:"pagination"}},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1)]:t._e()])],2),t._v(" "),e("div",{staticClass:"right"},[this.$slots["blog-right"]?[t._t("blog-right")]:[e("Content",{attrs:{"slot-key":"blog-right"}})]],2)]),t._v(" "),e("BlogFooter")],1)],1)}),[],!1,null,null,null));a.default=c.exports}}]);