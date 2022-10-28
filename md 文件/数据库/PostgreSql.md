pgAdmin ：是一款专门针对PostgreSQL数据库的客户端管理软件，该版本在pgAdmin 3的基础上做了较大的架构变化，由之前的CS架构变更为基于浏览器的BS架构。



# WITH查询（通用表表达式）



WITH通用表表达式可以认为是定义在一个查询中的临时表。



WITH语句的结构分为WITH子句中的辅助语句和WITH子句中附加到的初级语句。



辅助语句和初级语句可以是一个`SELECT`,  `INSERT`, `UPDATE`或`DELETE`。



```sql
WITH regional_sales AS (
        SELECT region, SUM(amount) AS total_sales
        FROM orders
        GROUP BY region
     ), top_regions AS (
        SELECT region
        FROM regional_sales
        WHERE total_sales > (SELECT SUM(total_sales)/10 FROM regional_sales)
     )
SELECT region,
       product,
       SUM(quantity) AS product_units,
       SUM(amount) AS product_sales
FROM orders
WHERE region IN (SELECT region FROM top_regions)
GROUP BY region, product;
```



上述的例子中定义了regional_sales和top_regions两个辅助语句。



regional_sales的输出用于top_regions，top_regions的输出被初级语句使用。



## WITH RECURSIVE 递归查询



使用`RECURSIVE`，一个`WITH`查询可以引用它自己的输出。



递归计算1加到100。



```plain
WITH RECURSIVE t(n) AS (
    VALUES (1)
  UNION
    SELECT n+1 FROM t WHERE n < 100
)
SELECT sum(n) FROM t;
```



VALUES (1)相当于`select * from (VALUES (1)) as t(n)`。





分析：



- WITH子句第一次输出：相当于执行



```sql
select * from (VALUES (1)) as t(n)
union
select n+1 from (VALUES (1)) as t(n) WHERE n < 100
```



结果：





- WITH子句第二次输出：相当于执行



```sql
select * from (VALUES (1)) as t(n)
union
SELECT n+1 FROM 
(
	select * from (VALUES (1)) as t(n)
	union
	select n+1 from (VALUES (1)) as t(n) WHERE n < 100
)t 
WHERE n < 100
```





一直到不满足n<100条件，递归结束。WITH子句输出1到100的数据。



**当使用递归查询时，确保查询的递归部分最终不会返回元组，不然会造成死循环**。