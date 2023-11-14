(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{386:function(a,t,s){"use strict";s.r(t);var r=s(7),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),t("h2",{attrs:{id:"说一说-list、set、map-三者的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说一说-list、set、map-三者的区别"}},[a._v("#")]),a._v(" 说一说 List、Set、Map 三者的区别")]),a._v(" "),t("ul",[t("li",[a._v("List(对付顺序的好帮手): 存储的元素是有序的、可重复的。")]),a._v(" "),t("li",[a._v("Set(注重独一无二的性质): 存储的元素是无序的、不可重复的。")]),a._v(" "),t("li",[a._v('Map(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，"x" 代表 key，"y" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。')])]),a._v(" "),t("h2",{attrs:{id:"list、set、map、在-java-中分别有哪些对应的实现类-底层的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list、set、map、在-java-中分别有哪些对应的实现类-底层的数据结构"}},[a._v("#")]),a._v(" List、Set、Map、在 Java 中分别有哪些对应的实现类？底层的数据结构")]),a._v(" "),t("p",[t("strong",[a._v("List：")])]),a._v(" "),t("ul",[t("li",[a._v("ArrayList： Object[] 数组")]),a._v(" "),t("li",[a._v("Vector：Object[] 数组")]),a._v(" "),t("li",[a._v("LinkedList： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)")])]),a._v(" "),t("p",[t("strong",[a._v("Set：")])]),a._v(" "),t("ul",[t("li",[a._v("HashSet(无序，唯一): 基于 HashMap 实现的，底层采用 HashMap 来保存元素")]),a._v(" "),t("li",[a._v("LinkedHashSet: LinkedHashSet 是 HashSet 的子类，并且其内部是通过 LinkedHashMap 来实现的。")]),a._v(" "),t("li",[a._v("TreeSet(有序，唯一): 红黑树(自平衡的排序二叉树)")])]),a._v(" "),t("p",[t("strong",[a._v("Map：")])]),a._v(" "),t("ul",[t("li",[a._v("HashMap： JDK1.8 之前 HashMap 由数组+链表组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间")]),a._v(" "),t("li",[a._v("LinkedHashMap： LinkedHashMap 继承自 HashMap，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，LinkedHashMap 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看："),t("a",{attrs:{href:"https://www.imooc.com/article/22931",target:"_blank",rel:"noopener noreferrer"}},[a._v("《LinkedHashMap 源码详细分析（JDK1.8）》"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h1",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" List")]),a._v(" "),t("h2",{attrs:{id:"arraylist-和-vector-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-和-vector-的区别"}},[a._v("#")]),a._v(" ArrayList 和 Vector 的区别")]),a._v(" "),t("ul",[t("li",[a._v("ArrayList 是 List 的主要实现类，底层使用 Object[]存储，适用于频繁的查找工作，线程不安全 ；")]),a._v(" "),t("li",[a._v("Vector 是 List 的古老实现类，底层使用Object[] 存储，线程安全的。")])]),a._v(" "),t("h2",{attrs:{id:"arraylist-和-linkedlist的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-和-linkedlist的区别"}},[a._v("#")]),a._v(" ArrayList 和 LinkedList的区别")]),a._v(" "),t("ul",[t("li",[a._v("**是否保证线程安全：**ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；")]),a._v(" "),t("li",[a._v("**底层数据结构：**ArrayList 底层使用的是 "),t("strong",[a._v("Object 数组")]),a._v("；LinkedList 底层使用的是 "),t("strong",[a._v("双向链表")]),a._v(" 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）")]),a._v(" "),t("li",[t("strong",[a._v("插入和删除是否受元素位置的影响：")])]),a._v(" "),t("li",[a._v("ArrayList 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行add(E e)方法的时候， ArrayList 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（add(int index, E element)）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。")]),a._v(" "),t("li",[a._v("LinkedList 采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（add(E e)、addFirst(E e)、addLast(E e)、removeFirst() 、 removeLast()），时间复杂度为 O(1)，如果是要在指定位置 i 插入和删除元素的话（add(int index, E element)，remove(Object o)）， 时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。")]),a._v(" "),t("li",[a._v("**是否支持快速随机访问：**LinkedList 不支持高效的随机元素访问，而 ArrayList（实现了RandomAccess接口） 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法)。")]),a._v(" "),t("li",[a._v("**内存空间占用：**ArrayList 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。")])]),a._v(" "),t("h2",{attrs:{id:"说一说-arraylist-的扩容机制吧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说一说-arraylist-的扩容机制吧"}},[a._v("#")]),a._v(" 说一说 ArrayList 的扩容机制吧")]),a._v(" "),t("p",[a._v("ArrayList 底层是 Object 数组。当ArrayList添加一个元素时，如果所需的最小容量大于当前存储数据的数组长度时，就会进行扩容。\n扩容会先计算新数组的容量，然后将原先旧数组的数据复制到新数组中。\n新数组的容量计算经过两次判断：")]),a._v(" "),t("ul",[t("li",[a._v("如果原先数组的容量加上右移一位的容量跟所需的最小的容量对比，取两者最大值。")]),a._v(" "),t("li",[a._v("如果上面计算的容量小于MAX_ARRAY_SIZE，新数组容量就是MAX_ARRAY_SIZE或者Integer.MAX_VALUE")])]),a._v(" "),t("h1",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),t("h2",{attrs:{id:"hashmap-的底层实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的底层实现"}},[a._v("#")]),a._v(" HashMap 的底层实现")]),a._v(" "),t("p",[t("strong",[a._v("JDK1.8 之前")]),a._v("：HashMap的底层数据结构是"),t("strong",[a._v("数组+链表")]),a._v("。链表是为了解决哈希冲突。\n"),t("strong",[a._v("JDK1.8 之后")]),a._v("：HashMap的底层数据结构是"),t("strong",[a._v("数组+链表+红黑树")]),a._v("。当链表的长度大于阈值（默认是8），会判断当前数组长度是否小于64，如果小于64，会先进行扩容，否则的话，会将链表转换为红黑树，减少搜索时间。")]),a._v(" "),t("h2",{attrs:{id:"hashmap-多线程操作导致死循环问题-cpu占满"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-多线程操作导致死循环问题-cpu占满"}},[a._v("#")]),a._v(" HashMap 多线程操作导致死循环问题（CPU占满）")]),a._v(" "),t("p",[a._v("原因在于 HashMap 的扩容 resize() 方法。由于扩容是新增数组，然后复制原数据到数组。但数组下有链表，多线程时复制链表可以会形成一个循环链表。 不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。")]),a._v(" "),t("h1",{attrs:{id:"concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[a._v("#")]),a._v(" ConcurrentHashMap")]),a._v(" "),t("h2",{attrs:{id:"concurrenthashmap-线程安全的底层实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-线程安全的底层实现方式"}},[a._v("#")]),a._v(" ConcurrentHashMap 线程安全的底层实现方式")]),a._v(" "),t("p",[a._v("JDK 1.8 之前 ConcurrentHashMap 是由 Segment 数组+HashEntry数组+链表构成的。Segment 继承了 ReentrantLock，采用分段锁，每把锁只锁一个 Segment，Segment不可扩容，默认Segment数组为16。1个 Segment 包含一个HashEntry 数组，HashEntry 存储键数据，支持扩容。每个 HashEntry 是个链表结构。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img2022.cnblogs.com/blog/973628/202210/973628-20221028181538097-195189103.png#id=f86LF&originHeight=563&originWidth=1021&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=",alt:""}})]),a._v(" "),t("p",[a._v("JDK 1.8 之后由 Node数组+链表+红黑树构成。链表长度在超过8时将链表转换成红黑树。取消了 Segment分段锁，采用Node+CAS+synchronized 保证并发安全。synchronized  只会锁定当前链表或红黑二叉树的首节点。")]),a._v(" "),t("h2",{attrs:{id:"hashmap和concurrenthashmap区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap和concurrenthashmap区别"}},[a._v("#")]),a._v(" HashMap和ConcurrentHashMap区别")]),a._v(" "),t("ul",[t("li",[a._v("HashMap线程不安全，ConcurrentHashMap 线程安全，")]),a._v(" "),t("li",[a._v("HashMap允许Null键和Null值，而ConcurrentHashMap都不允许")])])])}),[],!1,null,null,null);t.default=e.exports}}]);