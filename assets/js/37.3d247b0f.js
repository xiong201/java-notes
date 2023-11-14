(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{367:function(v,_,t){"use strict";t.r(_);var e=t(7),r=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"为什么需要分布式锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要分布式锁"}},[v._v("#")]),v._v(" 为什么需要分布式锁？")]),v._v(" "),_("p",[v._v("在多线程环境中，如果多个线程同时访问共享资源（例如商品库存、外卖订单），会发生数据竞争，可能会导致出现脏数据或者系统问题，威胁到程序的正常运行。")]),v._v(" "),_("p",[v._v("为了保证共享资源被安全地访问，我们需要"),_("strong",[v._v("使用互斥操作对共享资源进行保护，即同一时刻只允许一个线程访问共享资源")]),v._v("，其他线程需要等待当前线程释放后才能访问。这样可以避免数据竞争和脏数据问题，保证程序的正确性和稳定性。")]),v._v(" "),_("p",[_("strong",[v._v("如何才能实现共享资源的互斥访问呢？")]),v._v(" 锁是一个比较通用的解决方案，更准确点来说是悲观锁。")]),v._v(" "),_("p",[v._v("悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，"),_("strong",[v._v("共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程")]),v._v("。")]),v._v(" "),_("p",[v._v("对于单机多线程来说，在 Java 中，我们通常使用 "),_("code",[v._v("ReetrantLock")]),v._v(" 类、"),_("code",[v._v("synchronized")]),v._v(" 关键字这类 JDK 自带的 "),_("strong",[v._v("本地锁")]),v._v(" 来控制一个 JVM 进程内的多个线程对本地共享资源的访问。")]),v._v(" "),_("p",[v._v("分布式系统下，不同的服务/客户端通常运行在独立的 JVM 进程上。如果多个 JVM 进程共享同一份资源的话，使用本地锁就没办法实现资源的互斥访问了。于是，"),_("strong",[v._v("分布式锁")]),v._v(" 就诞生了。")]),v._v(" "),_("p",[v._v("举个例子：系统的订单服务一共部署了 3  份，都对外提供服务。用户下订单之前需要检查库存，为了防止超卖，这里需要加锁以实现对检查库存操作的同步访问。由于订单服务位于不同的 JVM  进程中，本地锁在这种情况下就没办法正常工作了。我们需要用到分布式锁，这样的话，即使多个线程不在同一个 JVM  进程中也能获取到同一把锁，进而实现共享资源的互斥访问。")]),v._v(" "),_("h1",{attrs:{id:"分布式锁应该具备的哪些条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁应该具备的哪些条件"}},[v._v("#")]),v._v(" 分布式锁应该具备的哪些条件？")]),v._v(" "),_("p",[v._v("一个最基本的分布式锁需要满足：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("互斥")]),v._v("：任意一个时刻，锁只能被一个线程持有。")]),v._v(" "),_("li",[_("strong",[v._v("高可用")]),v._v("：锁服务是高可用的，当一个锁服务出现问题，能够自动切换到另外一个锁服务。并且，即使客户端的释放锁的代码逻辑出现问题，锁最终一定还是会被释放，不会影响其他线程对共享资源的访问。这一般是通过超时机制实现的。")]),v._v(" "),_("li",[_("strong",[v._v("可重入")]),v._v("：一个节点获取了锁之后，还可以再次获取锁。")])]),v._v(" "),_("p",[v._v("除了上面这三个基本条件之外，一个好的分布式锁还需要满足下面这些条件：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("高性能")]),v._v("：获取和释放锁的操作应该快速完成，并且不应该对整个系统的性能造成过大影响。")]),v._v(" "),_("li",[_("strong",[v._v("非阻塞")]),v._v("：如果获取不到锁，不能无限期等待，避免对系统正常运行造成影响。")])]),v._v(" "),_("h1",{attrs:{id:"分布式锁常见实现方式有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁常见实现方式有哪些"}},[v._v("#")]),v._v(" 分布式锁常见实现方式有哪些？")]),v._v(" "),_("p",[v._v("常见分布式锁实现方案如下：")]),v._v(" "),_("ul",[_("li",[v._v("基于关系型数据库比如 MySQL 实现分布式锁。")]),v._v(" "),_("li",[v._v("基于分布式协调服务 ZooKeeper 实现分布式锁。")]),v._v(" "),_("li",[v._v("基于分布式键值存储系统比如 Redis 、Etcd 实现分布式锁。")])]),v._v(" "),_("p",[v._v("关系型数据库的方式一般是通过唯一索引或者排他锁实现。不过，一般不会使用这种方式，问题太多比如性能太差、不具备锁失效机制。")]),v._v(" "),_("p",[v._v("基于 ZooKeeper 或者 Redis 实现分布式锁这两种实现方式要用的更多一些。")]),v._v(" "),_("h1",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("这篇文章我们主要介绍了：")]),v._v(" "),_("ul",[_("li",[v._v("分布式锁的用途：分布式系统下，不同的服务/客户端通常运行在独立的 JVM 进程上。如果多个 JVM 进程共享同一份资源的话，使用本地锁就没办法实现资源的互斥访问了。")]),v._v(" "),_("li",[v._v("分布式锁的应该具备的条件：互斥、高可用、可重入、高性能、非阻塞。")]),v._v(" "),_("li",[v._v("分布式锁的常见实现方式：关系型数据库比如 MySQL、分布式协调服务 ZooKeeper、分布式键值存储系统比如 Redis 、Etcd 。")])]),v._v(" "),_("h1",{attrs:{id:"reference"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[v._v("#")]),v._v(" reference")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://javaguide.cn/distributed-system/distributed-lock.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("分布式锁介绍"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);