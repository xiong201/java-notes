(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{370:function(t,e,s){"use strict";s.r(e);var v=s(7),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rpc是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc是什么"}},[t._v("#")]),t._v(" RPC是什么")]),t._v(" "),e("p",[e("strong",[t._v("RPC（Remote Procedure  Call）")]),t._v("：远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。")]),t._v(" "),e("p",[t._v("比如两个不同的服务 A、B  部署在两台不同的机器上，那么服务 A 如果想要调用服务 B 中的某个方法该怎么办呢？使用 HTTP请求  当然可以，但是可能会比较慢而且一些优化做的并不好。 RPC 的出现就是为了解决这个问题。")]),t._v(" "),e("p",[t._v("RPC主要解决了："),e("strong",[t._v("让分布式或者微服务系统中不同服务之间的调用像本地调用一样简单。")])]),t._v(" "),e("p",[t._v("举个例子：两个不同的服务 A、B 部署在两台不同的机器上，服务 A 如果想要调用服务 B 中的某个方法的话就可以通过 RPC 来做。")]),t._v(" "),e("h1",{attrs:{id:"rpc原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc原理"}},[t._v("#")]),t._v(" RPC原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163703489.png",alt:"image-20221028163703489"}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("服务消费端（client）以本地调用的方式调用远程服务；")])]),t._v(" "),e("li",[e("p",[t._v("客户端 Stub（client stub） 接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体（序列化）："),e("code",[t._v("RpcRequest")]),t._v("；")])]),t._v(" "),e("li",[e("p",[t._v("客户端 Stub（client stub） 找到远程服务的地址，并将消息发送到服务提供端；")])]),t._v(" "),e("li",[e("p",[t._v("服务端 Stub（桩）收到消息将消息反序列化为Java对象: "),e("code",[t._v("RpcRequest")]),t._v("；")])]),t._v(" "),e("li",[e("p",[t._v("服务端 Stub（桩）根据"),e("code",[t._v("RpcRequest")]),t._v("中的类、方法、方法参数等信息调用本地的方法；")])]),t._v(" "),e("li",[e("p",[t._v("服务端 Stub（桩）得到方法执行结果并将组装成能够进行网络传输的消息体："),e("code",[t._v("RpcResponse")]),t._v("（序列化）发送至消费方；")])]),t._v(" "),e("li",[e("p",[t._v("客户端 Stub（client stub）接收到消息并将消息反序列化为Java对象:"),e("code",[t._v("RpcResponse")]),t._v(" ，这样也就得到了最终结果。")])])]),t._v(" "),e("p",[t._v("再贴一个网上的时序图，辅助理解：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163721658.png",alt:"image-20221028163721658"}})])])}),[],!1,null,null,null);e.default=_.exports}}]);