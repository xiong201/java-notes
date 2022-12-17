# 1.MongoDB入门



## 1.1  MongoDB简介



MongoDB是一个开源、高性能、无模式的文档型数据库。设计的目的是简化开发和方便扩展，是NOSQL数据库的一种，是最像关系型数据库的非关系型数据库。



MongoDB支持的数据结构非常松散，是一种类似于JSON格式名叫BSON，既可以存储比较复杂的数据类型，又相当灵活。



MongoDB中的数据是一个文档，是一个由字段和值对(field:value)组成的数据结构。MongoDB文档类似于JSON对象，既一个文档认为就是一个对象。字段的数据类型是字符型，值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。



### 1.1.1 业务场景



如果应用场景有以下三点：



- 数据量大

- 读写操作频繁

- 价值较低，对事务性要求不高的数据



可以使用MongoDB存储数据。



具体的应用场景如：



- 社交场景，使用 MongoDB 存储存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能。

- 游戏场景，使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储和访问。

- 物流场景，使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将 订单所有的变更读取出来。

- 物联网场景，使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析。

- 视频直播，使用 MongoDB 存储用户信息、点赞互动信息等。



### 1.1.2 体系结构



MySQL和MongoDB对比

![image-20221028161457671](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028161457671.png)

| SQL术语/概念 | MongoDB术语/概念 | 解释/说明                           |
| ------------ | ---------------- | ----------------------------------- |
| database     | database         | 数据库                              |
| table        | collection       | 数据库表/集合                       |
| row          | document         | 数据记录行/文档                     |
| column       | field            | 数据字段/域                         |
| index        | index            | 索引                                |
| table joins  |                  | 表连接，MongoDB不支持               |
|              | 嵌入文档         | MongoDB通过嵌入式文档代替多表连接   |
| primary key  | primary key      | 主键.MongoDB自动将_id字段设置为主键 |



# 常见命令



## 数据库操作



show dbs:显示数据库列表



use ：数据库不存在创建数据库，否则切换到指定的数据库。



## 查询文档



```plain
db.collection.find(query, projection)
```



- **query** ：可选，使用查询操作符指定查询条件

- **projection** ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。



要格式化显示结果的话，使用pretty() 方法。



```plain
db.col.find().pretty()
```



只返回特定的列,例如返回name的列：



```plain
db.col.find({}.name:1)
```



### 条件查询

| 操作       | 格式                     | 范例                                        | RDBMS中的类似语句       |
| ---------- | ------------------------ | ------------------------------------------- | ----------------------- |
| 等于       | `{<key>:<value>`}        | `db.col.find({"by":"菜鸟教程"}).pretty()`   | `where by = '菜鸟教程'` |
| 小于       | `{<key>:{$lt:<value>}}`  | `db.col.find({"likes":{$lt:50}}).pretty()`  | `where likes < 50`      |
| 小于或等于 | `{<key>:{$lte:<value>}}` | `db.col.find({"likes":{$lte:50}}).pretty()` | `where likes <= 50`     |
| 大于       | `{<key>:{$gt:<value>}}`  | `db.col.find({"likes":{$gt:50}}).pretty()`  | `where likes > 50`      |
| 大于或等于 | `{<key>:{$gte:<value>}}` | `db.col.find({"likes":{$gte:50}}).pretty()` | `where likes >= 50`     |
| 不等于     | `{<key>:{$ne:<value>}}`  | `db.col.find({"likes":{$ne:50}}).pretty()`  | `where likes != 50`     |



And条件：db.col.find({key1:value1, key2:value2}).pretty()



Or条件：



```plain
db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```



### 模糊查询

```plain
db.col.find(
   {key:/关键词/}
).pretty()
```



### 层级查询

```plain
db.col.find(
   {层级1.层级2.层级3:/关键词/}
).pretty()
```

就算某个层级是Array，也是只是输入层级字段名就可以。



## 统计个数



```plain
db.集合名称.find({条件}).count()
```



或者



```plain
db.集合名称.count({条件})
```



## Limit和Skip方法



limit：读取指定数量的数据



skip：跳过指定数量的数据