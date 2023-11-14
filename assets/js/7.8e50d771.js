(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{339:function(s,t,a){"use strict";a.r(t);var c=a(7),n=Object(c.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("简单来说，图就是由顶点的有穷非空集合和顶点之间的边组成的集合。通常表示为："),t("strong",[s._v("G(V,E)")]),s._v("，其中，G表示一个图，V表示顶点的集合，E表示边的集合。")]),s._v(" "),t("p",[s._v("下图所展示的就是图这种数据结构，并且还是一张有向图。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903230860-dc7307d2-d054-42d4-8beb-e38efd5d14e2-1666940511367-3.png",alt:"img"}})]),s._v(" "),t("p",[s._v("图在我们日常生活中的例子很多！比如我们在社交软件上好友关系就可以用图来表示。")]),s._v(" "),t("h3",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),t("h4",{attrs:{id:"顶点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顶点"}},[s._v("#")]),s._v(" 顶点")]),s._v(" "),t("p",[s._v("图中的数据元素，我们称之为顶点，图至少有一个顶点（非空有穷集合）")]),s._v(" "),t("p",[s._v("对应到好友关系图，每一个用户就代表一个顶点。")]),s._v(" "),t("h4",{attrs:{id:"边"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边"}},[s._v("#")]),s._v(" 边")]),s._v(" "),t("p",[s._v("顶点之间的关系用边表示。")]),s._v(" "),t("p",[s._v("对应到好友关系图，两个用户是好友的话，那两者之间就存在一条边。")]),s._v(" "),t("h4",{attrs:{id:"度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#度"}},[s._v("#")]),s._v(" 度")]),s._v(" "),t("p",[s._v("度表示一个顶点包含多少条边，在有向图中，还分为出度和入度，出度表示从该顶点出去的边的条数，入度表示进入该顶点的边的条数。")]),s._v(" "),t("p",[s._v("对应到好友关系图，度就代表了某个人的好友数量。")]),s._v(" "),t("h4",{attrs:{id:"无向图和有向图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无向图和有向图"}},[s._v("#")]),s._v(" 无向图和有向图")]),s._v(" "),t("p",[s._v("边表示的是顶点之间的关系，有的关系是双向的，比如同学关系，A是B的同学，那么B也肯定是A的同学，那么在表示A和B的关系时，就不用关注方向，用不带箭头的边表示，这样的图就是无向图。")]),s._v(" "),t("p",[s._v("有的关系是有方向的，比如父子关系，师生关系，微博的关注关系，A是B的爸爸，但B肯定不是A的爸爸，A关注B，B不一定关注A。在这种情况下，我们就用带箭头的边表示二者的关系，这样的图就是有向图。")]),s._v(" "),t("h4",{attrs:{id:"无权图和带权图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无权图和带权图"}},[s._v("#")]),s._v(" 无权图和带权图")]),s._v(" "),t("p",[t("strong",[s._v("对于一个关系，如果我们只关心关系的有无，而不关心关系有多强，那么就可以用无权图表示二者的关系")]),s._v("。")]),s._v(" "),t("p",[s._v("对于一个关系，如果我们既关心关系的有无，也关心关系的强度，比如描述地图上两个城市的关系，需要用到距离，那么就用带权图来表示，带权图中的每一条边一个数值表示权值，代表关系的强度。")]),s._v(" "),t("p",[s._v("下图就是一个带权有向图。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665902934354-41ecf5ba-9321-454d-afc7-d9d5276c533c-1666940511366-1.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"图的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图的存储"}},[s._v("#")]),s._v(" 图的存储")]),s._v(" "),t("h4",{attrs:{id:"邻接矩阵存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵存储"}},[s._v("#")]),s._v(" 邻接矩阵存储")]),s._v(" "),t("p",[s._v("邻接矩阵将图用二维矩阵存储，是一种较为直观的表示方式。")]),s._v(" "),t("p",[s._v("如果第i个顶点和第j个顶点之间有关系，且关系权值为n，则 A[i][j]=n 。")]),s._v(" "),t("p",[s._v("在无向图中，我们只关心关系的有无，所以当顶点i和顶点j有关系时，A[i][j]=1，当顶点i和顶点j没有关系时，A[i][j]=0。如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903395880-2be1a05f-03cb-48c0-b652-d53c09792c2c-1666940511367-5.png",alt:"img"}})]),s._v(" "),t("p",[s._v("值得注意的是："),t("strong",[s._v("无向图的邻接矩阵是一个对称矩阵，因为在无向图中，顶点i和顶点j有关系，则顶点j和顶点i必有关系。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903568044-8f767e8a-4e2f-4011-9dee-0bfd9f487ba8-1666940511367-7.png",alt:"img"}})]),s._v(" "),t("p",[s._v("邻接矩阵存储的方式优点是简单直接（直接使用一个二维数组即可），并且，在获取两个定点之间的关系的时候也非常高效（直接获取指定位置的数组元素的值即可）。但是，这种存储方式的缺点也比较明显，那就是比较浪费空间。")]),s._v(" "),t("h4",{attrs:{id:"邻接表存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#邻接表存储"}},[s._v("#")]),s._v(" 邻接表存储")]),s._v(" "),t("p",[s._v("针对上面邻接矩阵比较浪费内存空间的问题，诞生了图的另外一种存储方法—"),t("strong",[s._v("邻接表")]),s._v(" 。")]),s._v(" "),t("p",[s._v("邻接链表使用一个链表来存储某个顶点的所有后继相邻顶点。对于图中每个顶点Vi，把所有邻接于Vi的顶点Vj链成一个单链表，这个单链表称为顶点Vi的 "),t("strong",[s._v("邻接表")]),s._v("。如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903463660-d4afc69f-c062-492c-a55a-ecae2b87f9ba.png",alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903595329-fc990234-bbb5-4dc7-b909-84829f318afc-1666940511367-9.png",alt:"img"}})]),s._v(" "),t("p",[s._v("大家可以数一数邻接表中所存储的元素的个数以及图中边的条数，你会发现：")]),s._v(" "),t("ul",[t("li",[s._v("在无向图中，邻接表元素个数等于边的条数的两倍，如左图所示的无向图中，边的条数为7，邻接表存储的元素个数为14。")]),s._v(" "),t("li",[s._v("在有向图中，邻接表元素个数等于边的条数，如右图所示的有向图中，边的条数为8，邻接表存储的元素个数为8。")])]),s._v(" "),t("h3",{attrs:{id:"图的搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图的搜索"}},[s._v("#")]),s._v(" 图的搜索")]),s._v(" "),t("h4",{attrs:{id:"广度优先搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索"}},[s._v("#")]),s._v(" 广度优先搜索")]),s._v(" "),t("p",[s._v("广度优先搜索就像水面上的波纹一样一层一层向外扩展，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903375475-72d0e311-0736-4cf6-ae54-0cd870e37a1b-1666940511367-12.png",alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("广度优先搜索的具体实现方式用到了之前所学过的线性数据结构——队列")]),s._v(" 。具体过程如下图所示：")]),s._v(" "),t("p",[s._v("第1步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903456351-abf3d0f3-65da-41dc-94bc-9008af076031-1666940511367-16.png",alt:"img"}}),s._v("\n第2步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903656599-18bca2df-67cc-427a-9c02-018c6f97a454-1666940511367-14.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第3步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903604354-8c48d25d-cdca-400d-a6c8-93b95cc1e3d2-1666940511367-18.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第4步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903689657-f5d445e8-1e45-48d8-87e4-ba74c91cb0cd-1666940511367-20.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第5步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903740251-193a709e-6322-4771-abe5-dea38ca117e0-1666940511367-22.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第6步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903851188-62ea6161-3746-4ceb-a149-6d90d93491b3-1666940511367-26.png",alt:"img"}})]),s._v(" "),t("h4",{attrs:{id:"深度优先搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索"}},[s._v("#")]),s._v(" 深度优先搜索")]),s._v(" "),t("p",[s._v("深度优先搜索就是“一条路走到黑”，从源顶点开始，一直走到没有后继节点，才回溯到上一顶点，然后继续“一条路走到黑”，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903837159-3b93782b-16a0-4b6e-bb30-ae3991958331-1666940511367-24.png",alt:"img"}}),s._v(" "),t("strong",[s._v("和广度优先搜索类似，深度优先搜索的具体实现用到了另一种线性数据结构——栈")]),s._v(" 。具体过程如下图所示：")]),s._v(" "),t("p",[s._v("第1步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903668520-05962fcf-cf4f-438c-be5e-6d8496a35b30-1666940511367-28.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第2步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903860480-f11699c4-471f-43fe-a283-97b1059a0d4a-1666940511367-30.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第3步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903879114-6b9bff0f-5887-4c8f-b6c2-613627980c3b-1666940511367-32.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第4步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903877402-a7a12bc9-fc72-4d78-95a3-4b8d888153a1-1666940511367-34.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第5步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903883201-e69d828a-82ed-44a5-bc75-b212336453e1-1666940511367-36.png",alt:"img"}})]),s._v(" "),t("p",[s._v("第6步：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1665903666430-b315be10-7a96-407c-a09b-d8f19afbb119-1666940511367-38.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);