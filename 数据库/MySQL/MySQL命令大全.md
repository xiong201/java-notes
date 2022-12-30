



# MySQL 命令大全

## 数据库操作

use dbName： 选择数据库

show databases：返回可用的数据库列表

show tables：返回当前数据库可用的表列表



## 表操作

### 创建表

```sql
CREATE TABLE `customers` (
  cust_id int(11) NOT NULL AUTO_INCREMENT,
  cust_name char(50) NOT NULL,
  cust_address char(50) DEFAULT NULL,
  cust_city char(50) DEFAULT NULL,
  cust_state char(5) DEFAULT NULL,
  cust_zip char(10) DEFAULT NULL,
  cust_country char(50) DEFAULT NULL,
  cust_contact char(50) DEFAULT NULL,
  cust_email char(255) DEFAULT NULL,
  PRIMARY KEY (cust_id)
) ENGINE=InnoDB AUTO_INCREMENT=10009 DEFAULT CHARSET=utf8mb4;
```

### 修改表

```sql
ALTER TABLE vendors ADD vend_phone CHAR(20)
```

复杂的表结构更改一般需要手动删除过程，它涉及以下步骤：

1. 用新的列布局创建一个新表；
2. 使用INSERT SELECT语句从旧表复制数据到新表。如果有必要，可使用转换函数和计算字段；
3. 检验包含所需数据的新表；
4. 重命名旧表（如果确定，可以删除它）；
5. 用旧表原来的名字重命名新表；
6. 根据需要，重新创建触发器、存储过程、索引和外键。



### 删除表

```sql
DROP TABLE customers
```



### 重命名表

```sql
RENAME TABLE customers TO customers2,
orders TO orders2
```



### 获取表信息

show columns form tableName：返回表中每个字段的详细信息。

describe tableName：show columns form tableName的快捷方式。

## 检索数据

select子句顺序：

![image-20221228085758204](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221228085758204.png)



select column from table：检索单个列

select column1,column2 from table：检索多个列

select * from table：检索所有列

### 去重

select distinct column from table：检索单个列并去重

select distinct column1,column2 from table：distinct 应用于所有列（column1,column2 ），而不仅是column1。



### 限制结果

select column from table limit 5：检索单个列，并返回5行数据

select column from table limit 5,5：检索单个列，并返回从行5开始的5条数据（第一个数为开始位置，第二个数为行数，检索出来的数据第一行为行0而不是行1）

select column from table limit 5 offset 5：等同上于select column from table limit 5,5

### 排序检索数据

select column from table order by column：以字母顺序排序检索出来的数据（默认升序）

select column from table order by column1,column2：多个列排序（先按column1排序，再通过column2排序）

select column from table order by column asc/desc：升序/降序排序



### 过滤数据

select column from table where column=columnVal：返回column列值为columnVal的数据。

select column from table where column between startVal and endVal：返回值范围在startVal到endVal的数据。

select column from table where column is null：返回column值为null的数据

where子句操作符有：

![image-20221224211221233](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221224211221233.png)



#### 逻辑操作符

select column from table where column1=columnVal1 and column2=columnVal2：返回column1等于columnVal1 并且column2=columnVal2的数据



select column from table where column1=columnVal1 or column2=columnVal2：返回column1等于columnVal1 或者column2=columnVal2的数据

**计算次序：SQL优先处理AND操作符，然后再处理OR操作符**

最好使用园括号明确操作符处理次序：select column from table where (column1=columnVal1 or column2=columnVal2) and column2=columnVal3



#### IN操作符

select column from table where column in (columnVal1,columnVal2,columnVal3)：返回column值为columnVal1或columnVal2或columnVal3的数据



#### NOT操作符

select column from table where column not in (columnVal1,columnVal2,columnVal3)：返回column值不为columnVal1或columnVal2或columnVal3的数据



#### 通配符查询

select column from table column like 'jet%'：返回column中以jet开头的数据

select column from table column like '%jet%'：返回column中包含jet的数据

select column from table column like '_jet'：下划线_只匹配一个字符



#### 正则表达式

正则表达式是用来匹配文本的特殊的串（字符集合）。

MySQL仅支持多数正则表达式实现的一个很小的子集

select prod_name from products wehre prod_name REGEXP '1000' order by prod_name:检索列prod_name包含文本1000的所有行



select prod_name from products wehre prod_name REGEXP '1000|2000' order by prod_name:检索列prod_name包含文本1000或2000的所有行



select prod_name from products wehre prod_name REGEXP '[123]' order by prod_name：检索列prod_name包含文本1或2或3的所有行，等价于[1|2|3]



select prod_name from products wehre prod_name REGEXP '[0-9]' order by prod_name：检索列prod_name包含文本0到9的所有行，等价于[0123456789]



select prod_name from products wehre prod_name REGEXP '\\.' order by prod_name：检索列prod_name包含文本.的所有行，特殊字符需要使用\\为前导



### 计算字段

计算字段就是转换、计算或格式化检索出来的数据。

select Concat(vend_name,'(','vend_country',')') from vendors order by vend_name：Concat函数拼接字段

select RTrim(vend_name) from vendors order by vend_name：去除vend_name右边所有空格

select LTrim(vend_name) from vendors order by vend_name：去除vend_name左边所有空格

select Trim(vend_name) from vendors order by vend_name：去除vend_name所有空格



select Concat(vend_name,'(','vend_country',')') as vend_title from vendors order by vend_name：使用别名

算术操作符

select quantity*item_price as expanded_price from orderitems where order_num=20005：计算quantity和item_price 乘

select quantity+item_price as expanded_price from orderitems where order_num=20005：计算quantity和item_price 加

select quantity-item_price as expanded_price from orderitems where order_num=20005：计算quantity和item_price 减

select quantity/item_price as expanded_price from orderitems where order_num=20005：计算quantity和item_price 除



### 数据处理函数



#### 文本处理函数

![image-20221227174115382](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221227174115382.png)

#### 日期和时间处理函数

![image-20221227174154416](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221227174154416.png)



Date(order_date)指示MySQL仅提取列的日期部分，如果想要的仅是日期，那就使用Date()。



#### 数值处理函数

![image-20221227174256992](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221227174256992.png)



### 聚集函数

![image-20221228083453149](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221228083453149.png)



select AVG(prod_price) as avg_price from products：返回products中prod_price的平均值。 **AVG()函数忽略列值为NULL的行**。

select AVG(distinct prod_price) as avg_price from products：返回products中列prod_price**去重后**的平均值。



select COUNT(*) as num_cust from customers：返回customers表中客户的总数，不管表列中是否包含空值（NULL）

select COUNT(cust_email) as num_cust from customers：返回customers表中列cust_email有值的总数，忽略空值。



select MAX(prod_price) as max_price from products：返回products表列prod_price的最大值，忽略NULL



select MIN(prod_price) as max_price from products：返回products表列prod_price的最小值，忽略NULL



select SUM(quantity) as items_ordered from orderitems ：返回表orderitems中quantity值之和



### 分组数据

select vend_id,COUNT(*) as num_prods from products group bu vend_id：通过vend_id分组，并获取每组的数据

where过滤行，having 过滤分组。where在数据分组前进行过滤，having在数据分组后进行过滤。

select cust_id,COUNT(*) as orders from orders group by cust_id having count(*) >= 2：分组过滤条件



select vend_id,COUNT(*) as num_prods from products group bu vend_id order by num_prods ：分组后排序



### 使用子查询

where ...in使用子查询

```sql
select cust_name,cust_contact from customers where cust_id in (
	select cust_id from orders where order_num in (
		select order_num from orderitems where prod_id='TNT2'
	)
)
```

填充计算列

```sql
SELECT cust_name, cust_state,( SELECT count(*) FROM orders WHERE orders.cust_id = customers.cust_id ) 
FROM
	customers 
ORDER BY
	cust_name
```



### 联结查询

#### 内部联结

```sql
select vend_name,prod_name,prod_price from vendors,products
where vendors.vend_id=products.vend_id
ORDER BY vend_name,prod_name
```

where vendors.vend_id=products.vend_id是联结条件，没有联结条件会出现**笛卡儿积**现象。

内联结也可以使用INNER JOIN替代

```sql
select vend_name,prod_name,prod_price from vendors INNER JOIN products
ON vendors.vend_id=products.vend_id
ORDER BY vend_name,prod_name
```



```sql
select p1.prod_id,p1.prod_name from products as p1,products as p2 
where p1.vend_id=p2.vend_id and p2.prod_id='DTNTR'
```



#### 左外联结

```
select customers.cust_id,orders.order_num from customers LEFT JOIN orders ON orders.cust_id=customers.cust_id
```



#### 右外联结

#### 

```
select customers.cust_id,orders.order_num from customers RIGHT JOIN orders ON orders.cust_id=customers.cust_id
```



### 组合查询

UNION取重，UNION ALL不去重

```sql
SELECT vend_id,prod_id,prod_price FROM products WHERE prod_price <=5
UNION
SELECT vend_id,prod_id,prod_price FROM products WHERE vend_id IN (1001,1002);
```



```sql
SELECT vend_id,prod_id,prod_price FROM products WHERE prod_price <=5
UNION ALL
SELECT vend_id,prod_id,prod_price FROM products WHERE vend_id IN (1001,1002);
```

在用UNION组合查询时，只能使用一条ORDER BY子句，它必须出现在最后一条SELECT语句之后。

```sql
SELECT vend_id,prod_id,prod_price FROM products WHERE prod_price <=5
UNION
SELECT vend_id,prod_id,prod_price FROM products WHERE vend_id IN (1001,1002)
order by vend_id,prod_id
```



## 插入数据

插入完整行：

```sql
INSERT INTO customers 
VALUES (NULL, 'Pep E.LaPew','100 Main Street','Los Angeles','CA','90046','USA',NULL,NULL)
```

推荐使用

```sql
INSERT INTO customers ( cust_id, cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email)
VALUES
	( 10001, 'Coyote Inc.', '200 Maple Lane', 'Detroit', 'MI', '44444', 'USA', 'Y Lee', 'ylee@coyote.com' );
```

插入多条数据：

```sql
INSERT INTO customers ( cust_id, cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email)
VALUES
	( 10007, 'Coyote Inc.', '200 Maple Lane', 'Detroit', 'MI', '44444', 'USA', 'Y Lee', 'ylee@coyote.com' ),
	( 10008, 'Coyote Inc.', '200 Maple Lane', 'Detroit', 'MI', '44444', 'USA', 'Y Lee', 'ylee@coyote.com' );
```



## 更新数据

```sql
UPDATE customers SET cust_name = 'Yosemite Place', cust_address = '829 Riverside Drive', cust_city = 'Phoenix', cust_state = 'AZ', cust_zip = '88888', cust_country = 'USA', cust_contact = 'Y Sam', cust_email = 'sam@yosemite.com' WHERE cust_id = 10004;
```



## 删除数据

```sql
DELETE FROM customers where cust_id=10006
```

