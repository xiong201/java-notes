(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{369:function(t,e,r){"use strict";r.r(e);var n=r(7),_=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("**什么是幂等？**在分布式系统中，幂等是对请求操作结果的一个描述，这个描述就是不论执行多少次相同的请求，产生的效果和返回的结果都和发出单个请求是一样的。")]),t._v(" "),e("p",[t._v("举个例子：假如前后端没有保证接口幂等性，用户在秒杀商品是，同时点击了多次秒杀商品按钮，后端处理了多次相同的订单请求，结果导致一个人秒杀了多个商品。这个是肯定不能出现的，属于非常严重的bug。")]),t._v(" "),e("p",[t._v("保证分布式接口的幂等性对于数据的一致性至关重要，特别是像支付这种涉及到钱的接口。"),e("strong",[t._v("保证幂等性这个操作并不是说前端做了就可以，后端同样要做")]),t._v("。")]),t._v(" "),e("p",[t._v("前端保证幂等性的话比较简单，一般通过当用户提交请求后将按钮置灰来做到。后端保证幂等性就稍微麻烦一点，方法也是有很多种，比如：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("分布式锁")])]),t._v(" "),e("li",[e("strong",[t._v("唯一索引")]),t._v("：业务字段的唯一索引约束，防止重复数据产生。")]),t._v(" "),e("li",[e("strong",[t._v("乐观锁")]),t._v("：先查出版本号，再通过版本号更新数据，版本号一致才更新数据")]),t._v(" "),e("li",[e("strong",[t._v("状态机")]),t._v("：状态机可能看起来和乐观锁有点一样，但是有一个关键的区别，乐观锁的版本号是无界的，而状态机一般都是有边界的。")]),t._v(" "),e("li",[e("strong",[t._v("获取token")])])]),t._v(" "),e("h1",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/7239619891347423291",target:"_blank",rel:"noopener noreferrer"}},[t._v("幂等性常用的解决方案 - 掘金"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports}}]);