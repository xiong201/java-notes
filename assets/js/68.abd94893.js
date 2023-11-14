(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{398:function(t,v,_){"use strict";_.r(v);var a=_(7),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"分布式基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式基础"}},[t._v("#")]),t._v(" 分布式基础")]),t._v(" "),v("h2",{attrs:{id:"什么是分布式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式"}},[t._v("#")]),t._v(" 什么是分布式")]),t._v(" "),v("p",[t._v("分布式或者说 SOA 分布式重要的就是面向服务，说简单的分布式就是我们把整个系统拆分成不同的服务然后将这些服务放在不同的服务器上减轻单体服务的压力提高并发量和性能。比如电商系统可以简单地拆分成订单系统、商品系统、登录系统等等，拆分之后的每个服务可以部署在不同的机器上，如果某一个服务的访问量比较大的话也可以将这个服务同时部署在多台机器上。\n"),v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/21516648/1676959266290-5918668b-95a8-4d1e-8f2d-286b54595046.png#averageHue=%23f9f8f6&clientId=ud7da41dd-7583-4&from=paste&height=373&id=ub61c4372&originHeight=560&originWidth=637&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=33365&status=done&style=none&taskId=u59f8bdea-0044-4080-8773-c76b64ad821&title=&width=424.6666666666667",alt:"image.png"}})]),t._v(" "),v("h2",{attrs:{id:"为什么要使用分布式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用分布式"}},[t._v("#")]),t._v(" 为什么要使用分布式")]),t._v(" "),v("p",[t._v("从开发角度来讲单体应用的代码都集中在一起，而分布式系统的代码根据业务被拆分。所以，每个团队可以负责一个服务的开发，这样提升了开发效率。另外，代码根据业务拆分之后更加便于维护和扩展，也能提高整个系统的性能。")]),t._v(" "),v("h1",{attrs:{id:"分布式理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式理论"}},[t._v("#")]),t._v(" 分布式理论")]),t._v(" "),v("h2",{attrs:{id:"cap-理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论"}},[t._v("#")]),t._v(" CAP 理论")]),t._v(" "),v("p",[v("strong",[t._v("CAP")]),t._v(" 也就是 "),v("strong",[t._v("Consistency（一致性）")]),t._v("、"),v("strong",[t._v("Availability（可用性）")]),t._v("、"),v("strong",[t._v("Partition Tolerance（分区容错性）")]),t._v(" 这三个单词首字母组合 ：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("一致性（Consistency）")]),t._v(" : 所有节点访问同一份最新的数据副本")]),t._v(" "),v("li",[v("strong",[t._v("可用性（Availability）")]),t._v(": 非故障的节点在合理的时间内返回合理的响应（不是错误或者超时的响应）。")]),t._v(" "),v("li",[v("strong",[t._v("分区容错性（Partition tolerance）")]),t._v(" : 分布式系统出现网络分区的时候，仍然能够对外提供服务。")])]),t._v(" "),v("p",[t._v("当发生网络分区时，只能保证CP或者AP。 比如 ZooKeeper 就是 CP 架构，Eureka 就是 AP 架构，Nacos 不仅支持 CP 架构也支持 AP 架构。")]),t._v(" "),v("p",[v("strong",[t._v("什么是网络分区?")])]),t._v(" "),v("blockquote",[v("p",[t._v("分布式系统中，多个节点之前的网络本来是连通的，但是因为某些故障（比如部分节点网络出了问题）某些节点之间不连通了，整个网络就分成了几块区域，这就叫网络分区。")])]),t._v(" "),v("p",[t._v("参考："),v("a",{attrs:{href:"https://javaguide.cn/distributed-system/%E7%90%86%E8%AE%BA&%E7%AE%97%E6%B3%95/cap&base%E7%90%86%E8%AE%BA/#cap%E7%90%86%E8%AE%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://javaguide.cn/distributed-system/%E7%90%86%E8%AE%BA&%E7%AE%97%E6%B3%95/cap&base%E7%90%86%E8%AE%BA/#cap%E7%90%86%E8%AE%BA"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"分布式一致性的-3-种级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式一致性的-3-种级别"}},[t._v("#")]),t._v(" 分布式一致性的 3 种级别")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("强一致性")]),t._v(" ：系统写入了什么，读出来的就是什么。")]),t._v(" "),v("li",[v("strong",[t._v("弱一致性")]),t._v(" ：不一定可以读取到最新写入的值，也不保证多少时间之后读取到的数据是最新的，只是会尽量保证某个时刻达到数据一致的状态。")]),t._v(" "),v("li",[v("strong",[t._v("最终一致性")]),t._v(" ：弱一致性的升级版，系统会保证在一定时间内达到数据一致的状态。")])]),t._v(" "),v("p",[v("strong",[t._v("业界比较推崇是最终一致性级别，但是某些对数据一致要求十分严格的场景比如银行转账还是要保证强一致性。")])]),t._v(" "),v("h2",{attrs:{id:"base-理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base-理论"}},[t._v("#")]),t._v(" BASE 理论")]),t._v(" "),v("p",[v("strong",[t._v("BASE 理论本质上是对 CAP 的延伸和补充，更具体地说，是对 CAP 中 AP 方案的一个补充。")]),t._v("\nBASE理论的"),v("strong",[t._v("核心思想")]),t._v("是即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。\nAP 方案只是在系统发生分区的时候放弃一致性，而不是永远放弃一致性。在分区故障恢复后，系统应该达到最终一致性。这一点其实就是 BASE 理论延伸的地方。"),v("br"),t._v(" "),v("strong",[t._v("BASE")]),t._v(" 是 "),v("strong",[t._v("Basically Available（基本可用）")]),t._v(" 、"),v("strong",[t._v("Soft-state（软状态）")]),t._v(" 和 "),v("strong",[t._v("Eventually Consistent（最终一致性）")]),t._v(" 三个短语的缩写。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("基本可用")]),t._v("：是指分布式系统在出现不可预知故障的时候，允许损失部分可用性（"),v("strong",[t._v("响应时间上的损失和系统非核心功能上的损失")]),t._v("）。但是，这绝不等价于系统不可用。")]),t._v(" "),v("li",[t._v("**软状态：**指允许系统中的数据存在中间状态（"),v("strong",[t._v("CAP 理论中的数据不一致")]),t._v("），并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时。")]),t._v(" "),v("li",[v("strong",[t._v("最终一致性")]),t._v("：强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。")])]),t._v(" "),v("p",[t._v("参考："),v("a",{attrs:{href:"https://javaguide.cn/distributed-system/%E7%90%86%E8%AE%BA&%E7%AE%97%E6%B3%95/cap&base%E7%90%86%E8%AE%BA/#base-%E7%90%86%E8%AE%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://javaguide.cn/distributed-system/%E7%90%86%E8%AE%BA&%E7%AE%97%E6%B3%95/cap&base%E7%90%86%E8%AE%BA/#base-%E7%90%86%E8%AE%BA"),v("OutboundLink")],1)]),t._v(" "),v("h1",{attrs:{id:"分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),v("h2",{attrs:{id:"什么是分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式事务"}},[t._v("#")]),t._v(" 什么是分布式事务？")]),t._v(" "),v("p",[t._v("分布式事务就是为了保证不同数据库的数据一致性 。")]),t._v(" "),v("h2",{attrs:{id:"柔性事务和刚性事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#柔性事务和刚性事务"}},[t._v("#")]),t._v(" 柔性事务和刚性事务")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("柔性事务追求的是最终一致性")]),t._v("。柔性事务就是"),v("strong",[t._v("BASE理论+业务实际")]),t._v("。柔性事务追求的目标是：根据自身业务特性，通过适当的方式保证系统数据的最终一致性。"),v("strong",[t._v("像TCC、Saga、MQ事务、本地消息表都是柔性事务")]),t._v("。")]),t._v(" "),v("li",[v("strong",[t._v("刚性事务追求的是强一致性")]),t._v("。像"),v("strong",[t._v("2PC、3PC")]),t._v("就属于刚性事务。")])]),t._v(" "),v("h2",{attrs:{id:"分布式事务解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务解决方案"}},[t._v("#")]),t._v(" 分布式事务解决方案")]),t._v(" "),v("p",[t._v("分布式事务的解决方案有很多，比如："),v("strong",[t._v("2PC、3PC、TCC、本地消息表、MQ事务（Kafka和RocketMQ都提供了事务相关共）、Saga")]),t._v("等等。\n2PC、3PC属于业务代码无侵入方案，都是基于XA规范衍生出来的实现。TCC、Saga属于业务侵入方案，MQ事务依赖于使用消息队列的场景，本地消息表不支持回滚。")]),t._v(" "),v("h3",{attrs:{id:"xa-规范的角色组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xa-规范的角色组成"}},[t._v("#")]),t._v(" XA 规范的角色组成")]),t._v(" "),v("p",[t._v("2PC 和 3PC 涉及到的一些角色（XA 规范的角色组成）\n"),v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/21516648/1681283839300-40833e31-6110-4b26-9ed1-d24dc8e8bdc6.png#averageHue=%23f9f8f8&clientId=ufc067f8d-defe-4&from=paste&height=292&id=u756aa7b9&originHeight=438&originWidth=1026&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=160019&status=done&style=none&taskId=u6ef32726-3ef3-41ad-8a7d-520f6505690&title=&width=684",alt:"image.png"}})]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("AP（Application Program）")]),t._v("：应用程序本身")]),t._v(" "),v("li",[v("strong",[t._v("RM（Resource Manager）")]),t._v(" ：资源管理器，也就是事务的参与者，绝大部分情况下就是指数据库（后文会以关系型数据库为例），一个分布式事务往往涉及到多个 RM。")]),t._v(" "),v("li",[v("strong",[t._v("TM（Transaction Manager）")]),t._v(" ：事务管理器，负责管理全局事务，分配事务唯一标识，监控事务的执行进度，并负责事务的提交、回滚、失败恢复等。")])]),t._v(" "),v("h3",{attrs:{id:"_2pc-两阶段提交协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-两阶段提交协议"}},[t._v("#")]),t._v(" 2PC（两阶段提交协议）")]),t._v(" "),v("p",[t._v("2PC（Two-Phase Commit）这三个字母的含义:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("2")]),t._v(" -> 指代事务提交的 2 个阶段")]),t._v(" "),v("li",[v("strong",[t._v("P")]),t._v("-> Prepare (准备阶段)")]),t._v(" "),v("li",[v("strong",[t._v("C")]),t._v(" ->Commit（提交阶段）")])]),t._v(" "),v("p",[t._v("2PC 将事务的提交过程分为 2 个阶段：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("准备阶段")]),t._v("：主要是为了测试 "),v("strong",[t._v("RM")]),t._v(" 能否执行 "),v("strong",[t._v("本地数据库事务")]),t._v(" 操作，并不会提交事务")]),t._v(" "),v("li",[v("strong",[t._v("提交阶段")]),t._v("： "),v("strong",[t._v("TM")]),t._v(" 会根据 "),v("strong",[t._v("准备阶段")]),t._v(" 中 "),v("strong",[t._v("RM")]),t._v(" 的消息来决定是执行事务提交还是回滚操作。"),v("strong",[t._v("提交阶段")]),t._v(" 之后一定会结束当前的分布式事务")])]),t._v(" "),v("h3",{attrs:{id:"_3pc-三阶段提交协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3pc-三阶段提交协议"}},[t._v("#")]),t._v(" 3PC（三阶段提交协议）")]),t._v(" "),v("p",[t._v("3PC 把 2PC 中的 "),v("strong",[t._v("准备阶段(Prepare)")]),t._v(" 做了进一步细化分为了准备阶段(CanCommit)和预提交阶段(PreCommit)。分为三个阶段：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("准备阶段")]),t._v("：这一步不会执行事务操作，只是向 RM 发送 "),v("strong",[t._v("准备请求")]),t._v(" ，顺便询问一些信息比如事务参与者能否执行本地数据库事务操作。RM 回复“Yes”、“No”或者直接超时。如果任一 RM 回复“No”或者直接超时的话，就中断事务（向所有参与者发送“Abort”消息），否则进入 "),v("strong",[t._v("预提交阶段(PreCommit)")]),t._v(" 。")]),t._v(" "),v("li",[v("strong",[t._v("预提交阶段")]),t._v("：TM 向所有涉及到的 RM 发送 "),v("strong",[t._v("预提交请求")]),t._v(" ，RM 收到消息之后会执行本地数据库事务预操作比如写 redo log/undo log 日志。如果 RM 成功的执行了事务预操作，就返回 “ACK”。否则，返回“No”（最后的反悔机会）或者直接超时。如果任一 RM 回复“No”或者直接超时的话，就中断事务（向所有事务参与者发送“Abort”消息），否则进入 "),v("strong",[t._v("执行事务提交阶段（DoCommit）")])]),t._v(" "),v("li",[v("strong",[t._v("执行事务提交阶段")]),t._v("："),v("strong",[t._v("执行事务提交（DoCommit）")]),t._v(" 阶段就开始进行真正的事务提交。TM 向所有涉及到的 RM 发送 "),v("strong",[t._v("执行事务提交请求")]),t._v(" ，RM 收到消息后开始正式提交事务，并在完成事务提交后释放占用的资源。\n如果 TM 收到所有 RM 正确提交事务的消息的话，表示事务正常完成。如果任一 RM 没有正确提交事务或者超时的话，就中断事务，TM 向所有 RM 发送“Abort”消息。RM 接收到 Abort 请求后，执行本地数据库事务回滚，后面的步骤就和 2PC 中的类似了。")])]),t._v(" "),v("h3",{attrs:{id:"tcc-补偿事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcc-补偿事务"}},[t._v("#")]),t._v(" TCC（补偿事务）")]),t._v(" "),v("p",[t._v("TCC 是 Try、Confirm、Cancel 三个词的缩写，它分为三个阶段：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("Try（尝试）阶段")]),t._v(" : 尝试执行。完成业务检查，并预留好必需的业务资源。")]),t._v(" "),v("li",[v("strong",[t._v("Confirm（确认）阶段")]),t._v(" ：确认执行。当所有事务参与者的 Try 阶段执行成功就会执行 Confirm ，Confirm 阶段会处理 Try 阶段预留的业务资源。否则，就会执行 Cancel 。")]),t._v(" "),v("li",[v("strong",[t._v("Cancel（取消）阶段")]),t._v(" ：取消执行，释放 Try 阶段预留的业务资源。")])]),t._v(" "),v("p",[t._v("每个阶段由业务代码控制，这样可以避免长事务，性能更好。\n我们拿转账场景来说：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("Try（尝试）阶段")]),t._v(" : 在转账场景下，Try 要做的事情是就是检查账户余额是否充足，预留的资源就是转账资金。")]),t._v(" "),v("li",[v("strong",[t._v("Confirm（确认）阶段")]),t._v(" ： 如果 Try 阶段执行成功的话，Confirm 阶段就会执行真正的扣钱操作。")]),t._v(" "),v("li",[v("strong",[t._v("Cancel（取消）阶段")]),t._v(" ：释放 Try 阶段预留的转账资金。")])]),t._v(" "),v("p",[t._v("一般情况下，当我们使用TCC模式的时候，需要自己实现 try, confirm, cancel 这三个方法，来达到最终一致性。")]),t._v(" "),v("h3",{attrs:{id:"mq事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq事务"}},[t._v("#")]),t._v(" MQ事务")]),t._v(" "),v("p",[t._v("RocketMQ 、 Kafka、Pulsar 、QMQ 都提供了事务相关的功能。事务允许事件流应用将消费，处理，生产消息整个过程定义为一个原子操作。")]),t._v(" "),v("h1",{attrs:{id:"分布式日志管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式日志管理"}},[t._v("#")]),t._v(" 分布式日志管理")]),t._v(" "),v("h2",{attrs:{id:"日志系统需要做哪些事情"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日志系统需要做哪些事情"}},[t._v("#")]),t._v(" 日志系统需要做哪些事情")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("采集日志")])]),t._v(" "),v("li",[v("strong",[t._v("日志数据清洗/处理")])]),t._v(" "),v("li",[v("strong",[t._v("存储")]),t._v("：比如 ElasticSearch存储")]),t._v(" "),v("li",[v("strong",[t._v("展示与搜索")]),t._v("：支持可视化日志展示，能够根据关键词快速定位到日志并查看上下文。")]),t._v(" "),v("li",[v("strong",[t._v("告警")]),t._v("：支持对接常见的监控系统")])]),t._v(" "),v("h2",{attrs:{id:"项目中怎么管理日志的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目中怎么管理日志的"}},[t._v("#")]),t._v(" 项目中怎么管理日志的")]),t._v(" "),v("p",[t._v("项目中使用 Loki 管理日志的，相对于ELK来说，Loki更为轻量级，资源成本更低，并且简单易用。")])])}),[],!1,null,null,null);v.default=r.exports}}]);