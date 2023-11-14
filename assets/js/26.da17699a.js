(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{355:function(v,_,s){"use strict";s.r(_);var t=s(7),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("strong",[v._v("Java 中有哪些锁?")])]),v._v(" "),_("p",[v._v("Java 的锁可以分为：")]),v._v(" "),_("ul",[_("li",[v._v("悲观锁/乐观锁：线程是否需要锁定同步资源，锁住是悲观锁，不锁住是乐观锁")]),v._v(" "),_("li",[v._v("共享锁/独占锁：多线程情况下，是否可以共享同一把锁，可以是共享锁，不可以是独占锁")]),v._v(" "),_("li",[v._v("公平锁/非公平锁：多线程情况下，是否需要排队，排队是公平锁，尝试插队，插队失败后再排队是非公平锁")]),v._v(" "),_("li",[v._v("可中断锁/非可中断锁：是否可以中断")]),v._v(" "),_("li",[v._v("可重入锁/不可重入锁：同一个线程是否可以重复获取同一把锁，可以是可以重入锁，不可以是不可以重入锁。")]),v._v(" "),_("li",[v._v("非自旋锁/自旋锁：等待锁的过程，阻塞是非自旋锁，自旋是自旋锁。")])]),v._v(" "),_("h1",{attrs:{id:"synchronized-关键字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-关键字"}},[v._v("#")]),v._v(" synchronized 关键字")]),v._v(" "),_("h2",{attrs:{id:"synchronized-锁升级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-锁升级"}},[v._v("#")]),v._v(" synchronized 锁升级")]),v._v(" "),_("p",[_("strong",[v._v("为什么要对 "),_("code",[v._v("synchronized")]),v._v(" 进行锁升级？")])]),v._v(" "),_("p",[_("code",[v._v("JDK1.6")]),v._v(" 之前 "),_("code",[v._v("synchronized")]),v._v(" 属于重量级锁。")]),v._v(" "),_("p",[_("code",[v._v("JDK1.6")]),v._v(" 之后，为了减少获取锁和释放锁的性能消耗，引入了偏向锁和轻量级锁。")]),v._v(" "),_("p",[_("strong",[_("code",[v._v("synchronized")]),v._v(" 锁升级过程")]),v._v("：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20231103134928550.png",alt:"image-20231103134928550"}})]),v._v(" "),_("p",[_("strong",[_("code",[v._v("synchronized")]),v._v(" 锁的原理")]),v._v("："),_("code",[v._v("synchronized")]),v._v(" 用的锁是存在 Java 对象头里的 Mark Word 中，锁升级功能主要依赖 "),_("code",[v._v("MarkWord")]),v._v(" 中偏向锁位和锁标志位。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20231103135355741.png",alt:"image-20231103135355741"}})]),v._v(" "),_("h3",{attrs:{id:"无锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无锁"}},[v._v("#")]),v._v(" 无锁")]),v._v(" "),_("p",[v._v("未加锁对象的 "),_("code",[v._v("Mark Word")]),v._v(" 中偏向锁位+锁标志位为001。")]),v._v(" "),_("h3",{attrs:{id:"偏向锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[v._v("#")]),v._v(" 偏向锁")]),v._v(" "),_("p",[v._v("偏向锁：当锁一直被同一个线程获取到时，这个线程会一直拥有这把锁，直到发生锁竞争。")]),v._v(" "),_("p",[v._v("偏向锁对象的 "),_("code",[v._v("Mark Word")]),v._v(" 中偏向锁位+锁标志位为101，并且会记录拥有锁的线程对应的指针（通过 "),_("code",[v._v("CAS")]),v._v(" 方式更新线程ID）。当线程尝试获取偏向锁时，会判断当前线程ID和对象头存储的线程ID是否一致，一致的话就无需重新获取锁。")]),v._v(" "),_("p",[_("strong",[v._v("持有偏向锁的线程不会主动释放偏向锁")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("JVM")]),v._v(" 默认开启偏向锁，可以使用 "),_("code",[v._v("JVM")]),v._v(" 参数 "),_("code",[v._v("-XX:-UseBiasedLocking")]),v._v("关闭偏向锁。")]),v._v(" "),_("h4",{attrs:{id:"偏向锁撤销"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁撤销"}},[v._v("#")]),v._v(" 偏向锁撤销")]),v._v(" "),_("p",[v._v("当出现锁竞争时，持有偏向锁的线程才会撤销偏向锁。")]),v._v(" "),_("p",[v._v("撤销偏向锁需要等待"),_("strong",[v._v("全局安全点")]),v._v("（该时间点没有字节码在执行），同时检查持有偏向锁的线程是否还在执行：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("如果持有偏向锁的线程还在执行，这时会取消偏向锁升级为轻量级锁")]),v._v("。轻量级锁由原持有偏向锁的线程持有，继续执行其同步代码，而正在竞争的线程会进入自旋等待获得该轻量级锁。")]),v._v(" "),_("li",[_("strong",[v._v("如果持有偏向锁的线程执行完成，持有偏向锁的线程会将对象头设置成无锁状态撤销偏向锁，竞争线程通过CAS更新对象头，获取偏向锁。")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20231103144031331.png",alt:"image-20231103144031331"}})]),v._v(" "),_("h3",{attrs:{id:"轻量级锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁"}},[v._v("#")]),v._v(" 轻量级锁")]),v._v(" "),_("p",[v._v("轻量级锁对象的 "),_("code",[v._v("Mark Word")]),v._v(" 中偏向锁位+锁标志位为000。")]),v._v(" "),_("p",[v._v("轻量级锁是为了线程近乎"),_("strong",[v._v("交替执行")]),v._v("同步块时提高性能。")]),v._v(" "),_("p",[v._v("原持有偏向锁的线程获取轻量级锁，竞争线程 "),_("code",[v._v("CAS")]),v._v(" 自旋等待获取锁。")]),v._v(" "),_("p",[v._v("轻量级锁规定了自旋的次数，自旋到一定次数依然没有成功，会升级到重量级锁。")]),v._v(" "),_("p",[_("strong",[v._v("为什么要规定自旋次数？")])]),v._v(" "),_("p",[v._v("因为线程自旋会消耗CPU，不限制次数的话，对CPU性能消耗过大。")]),v._v(" "),_("p",[_("strong",[v._v("轻量级锁与偏向锁的区别？")])]),v._v(" "),_("p",[v._v("持有轻量级锁的线程执行完成会自动释放锁，而持有偏向锁的线程执行完不会主动释放锁。")]),v._v(" "),_("h3",{attrs:{id:"重量级锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重量级锁"}},[v._v("#")]),v._v(" 重量级锁")]),v._v(" "),_("p",[v._v("重量级锁对象的 "),_("code",[v._v("Mark Word")]),v._v(" 中偏向锁位+锁标志位为010。")]),v._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20231103154225152.png",alt:"image-20231103154225152"}})]),v._v(" "),_("h1",{attrs:{id:"todo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[v._v("#")]),v._v(" todo")]),v._v(" "),_("p",[v._v("问题：")]),v._v(" "),_("ul",[_("li",[v._v("对象在内存中如何存储")]),v._v(" "),_("li",[v._v("CAS 概念")]),v._v(" "),_("li",[v._v("锁自旋是什么")])])])}),[],!1,null,null,null);_.default=a.exports}}]);