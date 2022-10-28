## 1 简介



`MyBatis`是一款持久化框架，支持自定义`SQL`、存储过程以及高级映射。`MyBatis`通过简单的XML或者注解配置和映射原始类型、接口和 `Java POJO`（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。



## 2 MyBatis入门



### 2.1 安装



要使用 `MyBatis`，只需将 [mybatis-x.x.x.jar](https://github.com/mybatis/mybatis-3/releases) 文件置于类路径（classpath）中即可。



如果使用 Maven 来构建项目，则需将下面的依赖代码置于 `pom.xml` 文件中：



```xml
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>x.x.x</version>
</dependency>
```



### 2.2 创建SqlSessionFactory



每个基于 `MyBatis` 的应用都是以一个 `SqlSessionFactory`的实例为核心的。`SqlSessionFactory` 的实例可以通过 `SqlSessionFactoryBuilder` 获得。而 `SqlSessionFactoryBuilder` 则可以从 XML 配置文件或一个预先配置的 Configuration 实例来构建出 `SqlSessionFactory` 实例。



#### 2.2.1 从XML中构建



从 XML 文件中构建 `SqlSessionFactory` 的实例非常简单，建议使用类路径下的资源文件进行配置。但也可以使用任意的输入流（InputStream）实例，比如用文件路径字符串或 file:// URL 构造的输入流。`MyBatis` 包含一个名叫 Resources 的工具类，它包含一些实用方法，使得从类路径或其它位置加载资源文件更加容易。



```java
String resource = "org/mybatis/example/mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
```



**mybatis-config.xml文件如下**



```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
        <property name="driver" value="${driver}"/>
        <property name="url" value="${url}"/>
        <property name="username" value="${username}"/>
        <property name="password" value="${password}"/>
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <mapper resource="org/mybatis/example/BlogMapper.xml"/>
  </mappers>
</configuration>
```



#### 2.2.2 不使用XML构建



`MyBatis`提供了完整的配置类，提供了所有与 XML 文件等价的配置项。



```java
DataSource dataSource = BlogDataSourceFactory.getBlogDataSource();
TransactionFactory transactionFactory = new JdbcTransactionFactory();
Environment environment = new Environment("development", transactionFactory, dataSource);
Configuration configuration = new Configuration(environment);
configuration.addMapper(BlogMapper.class);
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(configuration);
```



### 2.3 从SqlSessionFactory中获取SqlSession



`SqlSession`提供了在数据库执行 `SQL` 命令所需的所有方法。可以通过 `SqlSession` 实例来直接执行已映射的 `SQL` 语句。



```java
try (SqlSession session = sqlSessionFactory.openSession()) {
  Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);
}
```



还有一种更简洁的方式——使用和指定语句的参数和返回值相匹配的接口（比如BlogMapper.class）



```java
try (SqlSession session = sqlSessionFactory.openSession()) {
  BlogMapper mapper = session.getMapper(BlogMapper.class);
  Blog blog = mapper.selectBlog(101);
}
```



### 2.4  探究已映射的 SQL 语句



SQL语句可以通过XML或者注解定义。



#### 2.4.1 XML定义



```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">
  <select id="selectBlog" resultType="Blog">
    select * from Blog where id = #{id}
  </select>
</mapper>
```



在命名空间 `“org.mybatis.example.BlogMapper”` 中定义了一个名为 `“selectBlog”`的映射语句，这样就可以用全限定名 `“org.mybatis.example.BlogMapper.selectBlog”` 来调用映射语句了。



```java
Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);
```



也可以使用下面这个调用`SQL`语句



```java
BlogMapper mapper = session.getMapper(BlogMapper.class);
Blog blog = mapper.selectBlog(101);
```



命名空间的作用有两个，一个是利用更长的全限定名来将不同的语句隔离开来，同时也实现了上面的接口绑定。



#### 2.4.2 注解定义



```java
package org.mybatis.example;
public interface BlogMapper {
  @Select("SELECT * FROM blog WHERE id = #{id}")
  Blog selectBlog(int id);
}
```



### 2.5 作用域(Scope)和生命周期



**依赖注入框架可以创建线程安全的、基于事务的 SqlSession和映射器，并将它们直接注入到你的 bean 中，因此可以直接忽略它们的生命周期**。如果对如何通过依赖注入框架使用 MyBatis 感兴趣，可以研究一下 MyBatis-Spring 或 MyBatis-Guice 两个子项目。



- **SqlSessionFactoryBuilder**：这个类可以被实例化、使用和丢弃，一旦创建了 SqlSessionFactory，就不再需要它了。因此 SqlSessionFactoryBuilder 实例的最佳作用域是方法作用域（也就是局部方法变量）。

- **SqlSessionFactory** ：SqlSessionFactory 一旦被创建就应该在应用的运行期间一直存在，没有任何理由丢弃它或重新创建另一个实例。SqlSessionFactory 的最佳作用域是应用作用域。有很多方法可以做到，最简单的就是使用单例模式或者静态单例模式。

- **SqlSession** ：每个线程都应该有它自己的 SqlSession 实例。SqlSession的实例不是线程安全的，因此是不能被共享的，所以它的最佳的作用域是请求或方法作用域。

- **映射器实例**：映射器是一些绑定映射语句的接口。映射器接口的实例是从SqlSession 中获得的。方法作用域是映射器实例的最合适的作用域



## 3 XML配置



MyBatis 的配置文件包含了会深深影响 MyBatis 行为的设置和属性信息。配置文档的顶层结构如下：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210506144145.png)



### 3.1 属性(properties)



属性值的设置方式有三种



#### 3.1.1 通过properties元素设置属性



```xml
<properties >
  <property name="username" value="dev_user"/>
  <property name="password" value="F2Fa3!33TYyg"/>
</properties>
```



设置好的属性可以在整个配置文件中用来替换需要动态配置的属性值。比如:



```xml
<dataSource type="POOLED">
  <property name="driver" value="${driver}"/>
  <property name="url" value="${url}"/>
  <property name="username" value="${username}"/>
  <property name="password" value="${password}"/>
</dataSource>
```



#### 3.1.2 通过java属性文件配置属性



java属性文件config.properties



```properties
username=dev_user
password=F2Fa3!33TYyg
```



在properties元素resource属性引入配置文件



```xml
<properties resource="org/mybatis/example/config.properties">
</properties>
```



#### 3.1.3 在 SqlSessionFactoryBuilder.build() 方法中传入属性值



```java
SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(reader, props);

// ... 或者 ...

SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(reader, environment, props);
```



如果一个属性在不只一个地方进行了配置，那么MyBatis 将按照下面的顺序来加载：



- 首先读取在 properties 元素体内指定的属性。

- 然后根据 properties 元素中的 resource 属性读取类路径下属性文件，或根据url 属性指定的路径读取属性文件，并覆盖之前读取过的同名属性。

- 最后读取作为方法参数传递的属性，并覆盖之前读取过的同名属性。



### 3.2 设置（settings）



这是 MyBatis 中极为重要的调整设置，它们会改变 MyBatis 的运行时行为。



一个配置完整的 settings 元素的示例如下：



```xml
<settings>
  <setting name="cacheEnabled" value="true"/>
  <setting name="lazyLoadingEnabled" value="true"/>
  <setting name="multipleResultSetsEnabled" value="true"/>
  <setting name="useColumnLabel" value="true"/>
  <setting name="useGeneratedKeys" value="false"/>
  <setting name="autoMappingBehavior" value="PARTIAL"/>
  <setting name="autoMappingUnknownColumnBehavior" value="WARNING"/>
  <setting name="defaultExecutorType" value="SIMPLE"/>
  <setting name="defaultStatementTimeout" value="25"/>
  <setting name="defaultFetchSize" value="100"/>
  <setting name="safeRowBoundsEnabled" value="false"/>
  <setting name="mapUnderscoreToCamelCase" value="false"/>
  <setting name="localCacheScope" value="SESSION"/>
  <setting name="jdbcTypeForNull" value="OTHER"/>
  <setting name="lazyLoadTriggerMethods" value="equals,clone,hashCode,toString"/>
</settings>
```



### 3.3 类型别名（typeAliases）



类型别名可为 Java 类型设置一个缩写名字。     它仅用于 XML 配置，意在降低冗余的全限定类名书写。例如：



```xml
<typeAliases>
  <typeAlias alias="Author" type="domain.blog.Author"/>
  <typeAlias alias="Blog" type="domain.blog.Blog"/>
  <typeAlias alias="Comment" type="domain.blog.Comment"/>
  <typeAlias alias="Post" type="domain.blog.Post"/>
  <typeAlias alias="Section" type="domain.blog.Section"/>
  <typeAlias alias="Tag" type="domain.blog.Tag"/>
</typeAliases>
```



当这样配置时，`Blog` 可以用在任何使用 `domain.blog.Blog` 的地方。



也可以指定一个包名，MyBatis 会在包名下面搜索需要的 Java Bean，比如：



```xml
<typeAliases>
  <package name="domain.blog"/>
</typeAliases>
```



每一个在包 `domain.blog` 中的 Java Bean，在没有注解的情况下，会使用 Bean 的首字母小写的非限定类名来作为它的别名。比如 `domain.blog.Author` 的别名为author`；若有注解，则别名为其注解值。见下面的例子：



```java
@Alias("author")
public class Author {
    ...
}
```



#### 3.3.1 Java 类型内建的类型别名



常见的 Java 类型内建的类型别名。它们都是不区分大小写的，注意，为了应对原始类型的命名重复，采取了特殊的命名风格。

| 别名       | 映射的类型 |
| ---------- | ---------- |
| _byte      | byte       |
| _long      | long       |
| _short     | short      |
| _int       | int        |
| _integer   | int        |
| _double    | double     |
| _float     | float      |
| _boolean   | boolean    |
| string     | String     |
| byte       | Byte       |
| long       | Long       |
| short      | Short      |
| int        | Integer    |
| integer    | Integer    |
| double     | Double     |
| float      | Float      |
| boolean    | Boolean    |
| date       | Date       |
| decimal    | BigDecimal |
| bigdecimal | BigDecimal |
| object     | Object     |
| map        | Map        |
| hashmap    | HashMap    |
| list       | List       |
| arraylist  | ArrayList  |
| collection | Collection |
| iterator   | Iterator   |



### 3.4 类型处理器（typeHandlers）



MyBatis 在设置预处理语句（PreparedStatement）中的参数或从结果集中取出一个值时，      都会用类型处理器将获取到的值以合适的方式转换成 Java 类型。



可以重写已有的类型处理器或创建你自己的类型处理器来处理不支持的或非标准的类型。具体做法为：实现 `org.apache.ibatis.type.TypeHandler` 接口， 或继承一个很便利的类 `org.apache.ibatis.type.BaseTypeHandler`， 并且可以（可选地）将它映射到一个 JDBC 类型。



```java
// ExampleTypeHandler.java
@MappedJdbcTypes(JdbcType.VARCHAR)
public class ExampleTypeHandler extends BaseTypeHandler<String> {

  @Override
  public void setNonNullParameter(PreparedStatement ps, int i, String parameter, JdbcType jdbcType) throws SQLException {
    ps.setString(i, parameter);
  }

  @Override
  public String getNullableResult(ResultSet rs, String columnName) throws SQLException {
    return rs.getString(columnName);
  }

  @Override
  public String getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
    return rs.getString(columnIndex);
  }

  @Override
  public String getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
    return cs.getString(columnIndex);
  }
}
```



```xml
<!-- mybatis-config.xml -->
<typeHandlers>
  <typeHandler handler="org.mybatis.example.ExampleTypeHandler"/>
</typeHandlers>
```



使用上述的类型处理器将会覆盖已有的处理 Java String 类型的属性以及  VARCHAR 类型的参数和结果的类型处理器。



**通过类型处理器的泛型，MyBatis 可以得知该类型处理器处理的 Java 类型，不过这种行为可以通过两种方法改变**：



- 在类型处理器的配置元素（typeHandler 元素）上增加一个  `javaType` 属性（比如：`javaType="String"`）；

- 在类型处理器的类上增加一个  `@MappedTypes` 注解指定与其关联的 Java 类型列表。 如果在 `javaType` 属性中也同时指定，则注解上的配置将被忽略。



**可以通过两种方式来指定关联的 JDBC 类型**：



- 在类型处理器的配置元素上增加一个 `jdbcType` 属性（比如：`jdbcType="VARCHAR"`）；

- 在类型处理器的类上增加一个 `@MappedJdbcTypes` 注解指定与其关联的 JDBC 类型列表。 如果在 `jdbcType` 属性中也同时指定，则注解上的配置将被忽略



### 3.5 对象工厂（objectFactory）



### 3.6 插件（plugins）



### 3.7 环境配置（environments）



environments 元素定义了如何配置环境。



```xml
<environments default="development">
  <environment id="development">
    <transactionManager type="JDBC">
      <property name="..." value="..."/>
    </transactionManager>
    <dataSource type="POOLED">
      <property name="driver" value="${driver}"/>
      <property name="url" value="${url}"/>
      <property name="username" value="${username}"/>
      <property name="password" value="${password}"/>
    </dataSource>
  </environment>
</environments>
```



注意一些关键点:



- 默认使用的环境 ID（比如：default="development"）。

- 每个 environment 元素定义的环境 ID（比如：id="development"）。

- 事务管理器的配置（比如：type="JDBC"）。

- 数据源的配置（比如：type="POOLED"）。



默认环境和环境 ID 顾名思义。环境可以随意命名，但务必保证默认的环境 ID 要匹配其中一个环境 ID。



#### 3.5.1 事务管理器（transactionManager）



在 MyBatis 中有两种类型的事务管理器（也就是 type="[JDBC|MANAGED]"）：



-  JDBC – 这个配置直接使用了 JDBC 的提交和回滚设施，它依赖从数据源获得的连接来管理事务作用域。 

-  MANAGED – 这个配置几乎没做什么。它从不提交或回滚一个连接，而是让容器来管理事务的整个生命周期（比如 JEE 应用服务器的上下文）。       默认情况下它会关闭连接。然而一些容器并不希望连接被关闭，因此需要将 closeConnection 属性设置为 false 来阻止默认的关闭行为。例如: 



```xml
<transactionManager type="MANAGED">
  <property name="closeConnection" value="false"/>
</transactionManager>
```



**如果你正在使用 Spring + MyBatis，则没有必要配置事务管理器，因为Spring 模块会使用自带的管理器来覆盖前面的配置。**



#### 3.5.2 数据源（dataSource）



有三种内建的数据源类型（也就是 type="[UNPOOLED|POOLED|JNDI]"）：



### 3.8 数据库厂商标识（databaseIdProvider）



### 3.9 映射器（mappers）



```plain
<!-- 使用相对于类路径的资源引用 -->
<mappers>
  <mapper resource="org/mybatis/builder/AuthorMapper.xml"/>
  <mapper resource="org/mybatis/builder/BlogMapper.xml"/>
  <mapper resource="org/mybatis/builder/PostMapper.xml"/>
</mappers>
```



```plain
<!-- 使用完全限定资源定位符（URL） -->
<mappers>
  <mapper url="file:///var/mappers/AuthorMapper.xml"/>
  <mapper url="file:///var/mappers/BlogMapper.xml"/>
  <mapper url="file:///var/mappers/PostMapper.xml"/>
</mappers>
```



```plain
<!-- 使用映射器接口实现类的完全限定类名 -->
<mappers>
  <mapper class="org.mybatis.builder.AuthorMapper"/>
  <mapper class="org.mybatis.builder.BlogMapper"/>
  <mapper class="org.mybatis.builder.PostMapper"/>
</mappers>
```



```plain
<!-- 将包内的映射器接口实现全部注册为映射器 -->
<mappers>
  <package name="org.mybatis.builder"/>
</mappers>
```



这些配置会告诉 MyBatis 去哪里找映射文件



## 4 XML映射文件



SQL 映射文件只有很少的几个顶级元素（按照应被定义的顺序列出）：



- ​      `cache`      – 该命名空间的缓存配置。

- ​      `cache-ref`      – 引用其它命名空间的缓存配置。

- ​      `resultMap`      – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。

- `parameterMap` – 老式风格的参数映射。此元素已被废弃，并可能在将来被移除！请使用行内参数映射。文档中不会介绍此元素。

- ​      `sql`      – 可被其它语句引用的可重用语句块。

- ​      `insert`      – 映射插入语句。

- ​      `update`      – 映射更新语句。

- ​      `delete`      – 映射删除语句。

- ​      `select`      – 映射查询语句。



### 4.1 select



查询语句是 MyBatis 中最常用的元素之一。



一个简单查询的 select 元素是非常简单的。比如：



```xml
<select id="selectPerson" parameterType="int" resultType="hashmap">
  SELECT * FROM PERSON WHERE ID = #{id}
</select>
```



这个语句名为 selectPerson，接受一个 int（或 Integer）类型的参数，并返回一个 HashMap 类型的对象，其中的键是列名，值便是结果行中的对应值。



`#{id}`告诉 MyBatis 创建一个预处理语句（PreparedStatement）参数。



select 元素允许你配置很多属性来配置每条语句的行为细节。



```xml
<select
  id="selectPerson"
  parameterType="int"
  parameterMap="deprecated"
  resultType="hashmap"
  resultMap="personResultMap"
  flushCache="false"
  useCache="true"
  timeout="10"
  fetchSize="256"
  statementType="PREPARED"
  resultSetType="FORWARD_ONLY">
```

| 属性            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `id`            | 在命名空间中唯一的标识符，可以被用来引用这条语句。           |
| `parameterType` | 将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为         MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）。 |
| parameterMap    | 用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性。 |
| `resultType`    | 期望从这条语句中返回结果的类全限定名或别名。         注意，如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型。         resultType 和 resultMap 之间只能同时使用一个。 |
| `resultMap`     | 对外部 resultMap 的命名引用。结果映射是 MyBatis         最强大的特性，如果你对其理解透彻，许多复杂的映射问题都能迎刃而解。         resultType 和 resultMap 之间只能同时使用一个。 |
| `flushCache`    | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：false。 |
| `useCache`      | 将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来，默认值：对 select 元素为 true。 |
| `timeout`       | 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）。 |
| `fetchSize`     | 这是一个给驱动的建议值，尝试让驱动程序每次批量返回的结果行数等于这个设置值。         默认值为未设置（unset）（依赖驱动）。 |
| `statementType` | 可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用         Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。 |
| `resultSetType` | FORWARD_ONLY，SCROLL_SENSITIVE, SCROLL_INSENSITIVE 或         DEFAULT（等价于 unset） 中的一个，默认值为 unset （依赖数据库驱动）。 |
| `databaseId`    | 如果配置了数据库厂商标识（databaseIdProvider），MyBatis         会加载所有不带 databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略。 |
| `resultOrdered` | 这个设置仅针对嵌套结果 select 语句：如果为         true，将会假设包含了嵌套结果集或是分组，当返回一个主结果行时，就不会产生对前面结果集的引用。         这就使得在获取嵌套结果集的时候不至于内存不够用。默认值：`false`。 |
| `resultSets`    | 这个设置仅适用于多结果集的情况。它将列出语句执行后返回的结果集并赋予每个结果集一个名称，多个名称之间以逗号分隔。 |



### 4.2 insert, update 和 delete



```xml
<insert
  id="insertAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  keyProperty=""
  keyColumn=""
  useGeneratedKeys=""
  timeout="20">

<update
  id="updateAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  timeout="20">

<delete
  id="deleteAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  timeout="20">
```

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| `id`               | 在命名空间中唯一的标识符，可以被用来引用这条语句。           |
| `parameterType`    | 将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为         MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）。 |
| `parameterMap`     | 用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性。 |
| `flushCache`       | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：（对 insert、update 和 delete 语句）true。 |
| `timeout`          | 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）。 |
| `statementType`    | 可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用         Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。 |
| `useGeneratedKeys` | （仅适用于 insert 和 update）这会令 MyBatis 使用 JDBC 的         getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系型数据库管理系统的自动递增字段），默认值：false。 |
| `keyProperty`      | （仅适用于 insert 和 update）指定能够唯一识别对象的属性，MyBatis 会使用         getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值，默认值：未设置（`unset`）。如果生成列不止一个，可以用逗号分隔多个属性名称。 |
| `keyColumn`        | （仅适用于 insert 和 update）设置生成键值在表中的列名，在某些数据库（像 PostgreSQL）中，当主键列不是表中的第一列的时候，是必须设置的。如果生成列不止一个，可以用逗号分隔多个属性名称。 |
| `databaseId`       | 如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有不带         databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略。 |



示例



```xml
<insert id="insertAuthor">
  insert into Author (id,username,password,email,bio)
  values (#{id},#{username},#{password},#{email},#{bio})
</insert>

<update id="updateAuthor">
  update Author set
    username = #{username},
    password = #{password},
    email = #{email},
    bio = #{bio}
  where id = #{id}
</update>

<delete id="deleteAuthor">
  delete from Author where id = #{id}
</delete>
```



### 4.3 sql



这个元素可以用来定义可重用的 SQL 代码片段，以便在其它语句中使用。 参数可以静态地（在加载的时候）确定下来，并且可以在不同的 include 元素中定义不同的参数值。比如：



```xml
<sql id="userColumns"> ${alias}.id,${alias}.username,${alias}.password </sql>
```



这个 SQL 片段可以在其它语句中使用，例如：



```xml
<select id="selectUsers" resultType="map">
  select
    <include refid="userColumns"><property name="alias" value="t1"/></include>,
    <include refid="userColumns"><property name="alias" value="t2"/></include>
  from some_table t1
    cross join some_table t2
</select>
```



也可以在 include 元素的 refid 属性或内部语句中使用属性值，例如：



```xml
<sql id="sometable">
  ${prefix}Table
</sql>

<sql id="someinclude">
  from
    <include refid="${include_target}"/>
</sql>

<select id="select" resultType="map">
  select
    field1, field2, field3
  <include refid="someinclude">
    <property name="prefix" value="Some"/>
    <property name="include_target" value="sometable"/>
  </include>
</select>
```



### 4.4 参数



```xml
<select id="selectUsers" resultType="User">
  select id, username, password
  from users
  where id = #{id}
</select>
```



上面的这个示例说明了一个非常简单的命名参数映射。鉴于参数类型（parameterType）会被自动设置为      `int`，这个参数可以随意命名。原始类型或简单数据类型（比如 `Integer` 和 `String`）因为没有其它属性，会用它们的值来作为参数。 然而，如果传入一个复杂的对象，行为就会有点不一样了。比如：



```xml
<insert id="insertUser" parameterType="User">
  insert into users (id, username, password)
  values (#{id}, #{username}, #{password})
</insert>
```



如果 User 类型的参数对象传递到了语句中，会查找 id、username 和 password      属性，然后将它们的值传入预处理语句的参数中。



和 MyBatis 的其它部分一样，参数也可以指定一个特殊的数据类型。



```plain
#{property,javaType=int,jdbcType=NUMERIC}
```



大多时候，只须简单指定属性名，顶多要为可能为空的列指定 `jdbcType`，其他的事情交给 MyBatis 自己去推断就行了。



```plain
#{firstName}
#{middleInitial,jdbcType=VARCHAR}
#{lastName}
```



#### 4.4.1 字符串替换



默认情况下，使用 `#{}`  参数语法时，MyBatis 会创建 `PreparedStatement`  参数占位符，并通过占位符安全地设置参数（就像使用 ? 一样）。这样做更安全，更迅速，通常也是首选做法，不过有时你就是想直接在 SQL 语句中直接插入一个不转义的字符串。 比如 ORDER BY 子句，这时候你可以：



```plain
ORDER BY ${columnName}
```



MyBatis 就不会修改或转义该字符串了。



**用**`**${}**`**这种方式接受用户的输入，并用作语句参数是不安全的，会导致潜在的 SQL 注入攻击。因此，要么不允许用户输入这些字段，要么自行转义并检验这些参数。**



### 4.5 结果映射



#### 4.5.1 resultType



1.  映射到HashMap： 

```xml
<select id="selectUsers" resultType="map">
  select id, username, hashedPassword
  from some_table
  where id = #{id}
</select>
```

 

1.  映射到JavaBean 或 POJO： 

```xml
<select id="selectUsers" resultType="com.someapp.model.User">
  select id, username, hashedPassword
  from some_table
  where id = #{id}
</select>
```


如果列名和属性名不能匹配上，可以在 SELECT语句中设置列别名（这是一个基本的 SQL 特性）来完成匹配。  



在MyBatis进行查询映射的时候，其实查询出来的每一个属性都是放在一个对应的Map里面的，其中键是属性名，
值则是其对应的值。当提供的返回类型属性是resultType的时候，MyBatis会将Map里面的键值对取出赋给
resultType所指定的对象对应的属性。所以其实MyBatis的每一个查询映射的返回类型都是ResultMap，
只是当我们提供的返回类型属性是resultType的时候，MyBatis对自动的给我们把对应的值赋给resultType
所指定对象的属性，而当我们提供的返回类型是resultMap的时候，因为Map不能很好表示领域模型，
我们就需要自己再进一步的把它转化为对应的对象，这常常在复杂查询中很有作用。



#### 4.5.2 resultMap



##### 1 简单结果映射



配置一个resultMap



```xml
<resultMap id="userResultMap" type="User">
  <id property="id" column="user_id" />
  <result property="username" column="user_name"/>
  <result property="password" column="hashed_password"/>
</resultMap>
```



SQL语句



```xml
<select id="selectUsers" resultMap="userResultMap">
  select user_id, user_name, hashed_password
  from some_table
  where id = #{id}
</select>
```



##### 2 高级结果映射



SQL语句



```xml
<!-- 非常复杂的语句 -->
<select id="selectBlogDetails" resultMap="detailedBlogResultMap">
  select
       B.id as blog_id,
       B.title as blog_title,
       B.author_id as blog_author_id,
       A.id as author_id,
       A.username as author_username,
       A.password as author_password,
       A.email as author_email,
       A.bio as author_bio,
       A.favourite_section as author_favourite_section,
       P.id as post_id,
       P.blog_id as post_blog_id,
       P.author_id as post_author_id,
       P.created_on as post_created_on,
       P.section as post_section,
       P.subject as post_subject,
       P.draft as draft,
       P.body as post_body,
       C.id as comment_id,
       C.post_id as comment_post_id,
       C.name as comment_name,
       C.comment as comment_text,
       T.id as tag_id,
       T.name as tag_name
  from Blog B
       left outer join Author A on B.author_id = A.id
       left outer join Post P on B.id = P.blog_id
       left outer join Comment C on P.id = C.post_id
       left outer join Post_Tag PT on PT.post_id = P.id
       left outer join Tag T on PT.tag_id = T.id
  where B.id = #{id}
</select>
```



表示了一篇博客，它由某位作者所写，有很多的博文，每篇博文有零或多条的评论和标签。



```xml
<!-- 非常复杂的结果映射 -->
<resultMap id="detailedBlogResultMap" type="Blog">
  <constructor>
    <idArg column="blog_id" javaType="int"/>
  </constructor>
  <result property="title" column="blog_title"/>
  <association property="author" javaType="Author">
    <id property="id" column="author_id"/>
    <result property="username" column="author_username"/>
    <result property="password" column="author_password"/>
    <result property="email" column="author_email"/>
    <result property="bio" column="author_bio"/>
    <result property="favouriteSection" column="author_favourite_section"/>
  </association>
  <collection property="posts" ofType="Post">
    <id property="id" column="post_id"/>
    <result property="subject" column="post_subject"/>
    <association property="author" javaType="Author"/>
    <collection property="comments" ofType="Comment">
      <id property="id" column="comment_id"/>
    </collection>
    <collection property="tags" ofType="Tag" >
      <id property="id" column="tag_id"/>
    </collection>
    <discriminator javaType="int" column="draft">
      <case value="1" resultType="DraftPost"/>
    </discriminator>
  </collection>
</resultMap>
```



##### 3 resultMap元素解读



`resultMap` 子元素的概念视图：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210507145757.png)



ResultMap 的属性列表：

| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `id`          | 当前命名空间中的一个唯一标识，用于标识一个结果映射。         |
| `type`        | 类的完全限定名, 或者一个类型别名（关于内置的类型别名，可以参考上面的表格）。 |
| `autoMapping` | 如果设置这个属性，MyBatis 将会为本结果映射开启或者关闭自动映射。         这个属性会覆盖全局的属性 autoMappingBehavior。默认值：未设置（unset）。 |



###### id & result



```xml
<id property="id" column="post_id"/>
<result property="subject" column="post_subject"/>
```



*id* 和 *result* 元素都将一个列的值映射到一个简单数据类型（String, int, double, Date等）的属性或字段。



这两者之间的唯一不同是，*id*  元素对应的属性会被标记为对象的标识符，在比较对象实例时使用。 这样可以提高整体的性能，尤其是进行缓存和嵌套结果映射（也就是连接映射）的时候。



Id 和 Result 的属性

| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `property`    | 映射到列结果的字段或属性。如果 JavaBean         有这个名字的属性（property），会先使用该属性。否则 MyBatis 将会寻找给定名称的字段（field）。         无论是哪一种情形，你都可以使用常见的点式分隔形式进行复杂属性导航。         比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。 |
| `column`      | 数据库中的列名，或者是列的别名。一般情况下，这和传递给         `resultSet.getString(columnName)` 方法的参数一样。 |
| `javaType`    | 一个 Java 类的全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。         如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。然而，如果你映射到的是         HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。 |
| `jdbcType`    | JDBC 类型，所支持的 JDBC 类型参见这个表格之后的“支持的 JDBC 类型”。         只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。这是         JDBC 的要求而非 MyBatis 的要求。如果你直接面向 JDBC         编程，你需要对可以为空值的列指定这个类型。 |
| `typeHandler` | 我们在前面讨论过默认的类型处理器。使用这个属性，你可以覆盖默认的类型处理器。         这个属性值是一个类型处理器实现类的全限定名，或者是类型别名。 |



jdbcType 支持的 JDBC 类型

| `BIT`      | `FLOAT`   | `CHAR`        | `TIMESTAMP`     | `OTHER`   | `UNDEFINED` |
| ---------- | --------- | ------------- | --------------- | --------- | ----------- |
| `TINYINT`  | `REAL`    | `VARCHAR`     | `BINARY`        | `BLOB`    | `NVARCHAR`  |
| `SMALLINT` | `DOUBLE`  | `LONGVARCHAR` | `VARBINARY`     | `CLOB`    | `NCHAR`     |
| `INTEGER`  | `NUMERIC` | `DATE`        | `LONGVARBINARY` | `BOOLEAN` | `NCLOB`     |
| `BIGINT`   | `DECIMAL` | `TIME`        | `NULL`          | `CURSOR`  | `ARRAY`     |



###### 构造方法(constructor)



*constructor* 元素构造方法注入允许你在初始化时为类设置属性的值，而不用暴露出公有方法。



构造方法：



```java
public class User {
   //...
   public User(Integer id, String username, int age) {
     //...
  }
//...
}
```



3.4.3版本前arg元素顺序要和构造方法一致：



```xml
<constructor>
   <idArg column="id" javaType="int"/>
   <arg column="username" javaType="String"/>
   <arg column="age" javaType="_int"/>
</constructor>
```



3.4.3版本开始，可以编写任意顺序的arg元素，通过name属性进行绑定



```xml
<constructor>
   <idArg column="id" javaType="int" name="id" />
   <arg column="age" javaType="_int" name="age" />
   <arg column="username" javaType="String" name="username" />
</constructor>
```



idArg和arg的属性

| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `column`      | 数据库中的列名，或者是列的别名。一般情况下，这和传递给         `resultSet.getString(columnName)` 方法的参数一样。 |
| `javaType`    | 一个 Java 类的完全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。         如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。然而，如果你映射到的是         HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。 |
| `jdbcType`    | JDBC 类型，所支持的 JDBC 类型参见这个表格之前的“支持的 JDBC 类型”。         只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。这是         JDBC 的要求而非 MyBatis 的要求。如果你直接面向 JDBC         编程，你需要对可能存在空值的列指定这个类型。 |
| `typeHandler` | 我们在前面讨论过默认的类型处理器。使用这个属性，你可以覆盖默认的类型处理器。         这个属性值是一个类型处理器实现类的完全限定名，或者是类型别名。 |
| `select`      | 用于加载复杂类型属性的映射语句的 ID，它会从 column         属性中指定的列检索数据，作为参数传递给此 select 语句。具体请参考关联元素。 |
| `resultMap`   | 结果映射的 ID，可以将嵌套的结果集映射到一个合适的对象树中。         它可以作为使用额外 select 语句的替代方案。它可以将多表连接操作的结果映射成一个单一的         `ResultSet`。这样的 `ResultSet`         将会将包含重复或部分数据重复的结果集。为了将结果集正确地映射到嵌套的对象树中，MyBatis         允许你 “串联”结果映射，以便解决嵌套结果集的问题。想了解更多内容，请参考下面的关联元素。 |
| `name`        | 构造方法形参的名字。从 3.4.3 版本开始，通过指定具体的参数名，你可以以任意顺序写入         arg 元素。参看上面的解释。 |



###### 关联(association )



```xml
<association property="author" column="blog_author_id" javaType="Author">
  <id property="id" column="author_id"/>
  <result property="username" column="author_username"/>
</association>
```



association元素的属性

| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `property`    | 映射到列结果的字段或属性。如果用来匹配的 JavaBean         存在给定名字的属性，那么它将会被使用。否则 MyBatis 将会寻找给定名称的字段。         无论是哪一种情形，你都可以使用通常的点式分隔形式进行复杂属性导航。         比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。 |
| `javaType`    | 一个 Java 类的完全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。         如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。然而，如果你映射到的是         HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。 |
| `jdbcType`    | JDBC 类型，所支持的 JDBC 类型参见这个表格之前的“支持的 JDBC 类型”。         只需要在可能执行插入、更新和删除的且允许空值的列上指定 JDBC 类型。这是         JDBC 的要求而非 MyBatis 的要求。如果你直接面向         JDBC 编程，你需要对可能存在空值的列指定这个类型。 |
| `typeHandler` | 我们在前面讨论过默认的类型处理器。使用这个属性，你可以覆盖默认的类型处理器。         这个属性值是一个类型处理器实现类的完全限定名，或者是类型别名。 |



关联（association）元素处理“有一个”类型的关系。比如，一个博客有一个用户。需要指定目标属性名以及属性的`javaType`（很多时候 MyBatis 可以自己推断出来），在必要的情况下可以设置 JDBC 类型，如果想覆盖获取结果值的过程，还可以设置类型处理器。



关联的不同之处是，你需要告诉 MyBatis 如何加载关联。MyBatis 有两种不同的方式加载关联：



- 嵌套 Select 查询：通过执行另外一个 SQL 映射语句来加载期望的复杂类型。

- 嵌套结果映射：使用嵌套的结果映射来处理连接结果的重复子集。



1.  **关联的嵌套Select查询** 
   示例 

| 属性        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| `column`    | 数据库中的列名，或者是列的别名。一般情况下，这和传递给        `resultSet.getString(columnName)` 方法的参数一样。        注意：在使用复合主键的时候，你可以使用 `column="{prop1=col1,prop2=col2}"`        这样的语法来指定多个传递给嵌套 Select 查询语句的列名。这会使得        `prop1` 和 `prop2` 作为参数对象，被设置为对应嵌套 Select 语句的参数。 |
| `select`    | 用于加载复杂类型属性的映射语句的 ID，它会从 column         属性指定的列中检索数据，作为参数传递给目标 select 语句。         具体请参考下面的例子。注意：在使用复合主键的时候，你可以使用         `column="{prop1=col1,prop2=col2}"` 这样的语法来指定多个传递给嵌套         Select 查询语句的列名。这会使得 `prop1` 和 `prop2`         作为参数对象，被设置为对应嵌套 Select 语句的参数。 |
| `fetchType` | 可选的。有效值为 `lazy` 和 `eager`。         指定属性后，将在映射中忽略全局配置参数 `lazyLoadingEnabled`，使用属性的值。 |

```xml
<resultMap id="blogResult" type="Blog">
  <association property="author" column="author_id" javaType="Author" select="selectAuthor"/>
</resultMap>

<select id="selectBlog" resultMap="blogResult">
  SELECT * FROM BLOG WHERE ID = #{id}
</select>

<select id="selectAuthor" resultType="Author">
  SELECT * FROM AUTHOR WHERE ID = #{id}
</select>
```


就是这么简单。我们有两个 select  查询语句：一个用来加载博客（Blog），另外一个用来加载作者（Author），而且博客的结果映射描述了应该使用      `selectAuthor` 语句加载它的 author 属性。
其它所有的属性将会被自动加载，只要它们的列名和属性名相匹配。
这种方式虽然很简单，但在大型数据集或大型数据表上表现不佳。 



​		2. **关联的嵌套结果映射**

| 属性            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `resultMap`     | 结果映射的 ID，可以将此关联的嵌套结果集映射到一个合适的对象树中。         它可以作为使用额外 select 语句的替代方案。它可以将多表连接操作的结果映射成一个单一的         `ResultSet`。这样的 `ResultSet` 有部分数据是重复的。         为了将结果集正确地映射到嵌套的对象树中, MyBatis         允许你“串联”结果映射，以便解决嵌套结果集的问题。使用嵌套结果映射的一个例子在表格以后。 |
| `columnPrefix`  | 当连接多个表时，你可能会不得不使用列别名来避免在 `ResultSet`         中产生重复的列名。指定 columnPrefix 列名前缀允许你将带有这些前缀的列映射到一个外部的结果映射中。         详细说明请参考后面的例子。 |
| `notNullColumn` | 默认情况下，在至少一个被映射到属性的列不为空时，子对象才会被创建。         你可以在这个属性上指定非空的列来改变默认行为，指定后，Mybatis         将只在这些列非空时才创建一个子对象。可以使用逗号分隔来指定多个列。默认值：未设置（unset）。 |
| `autoMapping`   | 如果设置这个属性，MyBatis 将会为本结果映射开启或者关闭自动映射。         这个属性会覆盖全局的属性 autoMappingBehavior。注意，本属性对外部的结果映射无效，所以不能搭配         `select` 或 `resultMap` 元素使用。默认值：未设置（unset）。 |



```xml
<select id="selectBlog" resultMap="blogResult">
  select
    B.id            as blog_id,
    B.title         as blog_title,
    B.author_id     as blog_author_id,
    A.id            as author_id,
    A.username      as author_username,
    A.password      as author_password,
    A.email         as author_email,
    A.bio           as author_bio
  from Blog B left outer join Author A on B.author_id = A.id
  where B.id = #{id}
</select>
```



注意查询中的连接，以及为确保结果能够拥有唯一且清晰的名字，设置的别名。这使得进行映射非常简单。现在可以映射这个结果：



```xml
<resultMap id="blogResult" type="Blog">
  <id property="id" column="blog_id" />
  <result property="title" column="blog_title"/>
  <association property="author" column="blog_author_id" javaType="Author" resultMap="authorResult"/>
</resultMap>

<resultMap id="authorResult" type="Author">
  <id property="id" column="author_id"/>
  <result property="username" column="author_username"/>
  <result property="password" column="author_password"/>
  <result property="email" column="author_email"/>
  <result property="bio" column="author_bio"/>
</resultMap>
```



如果不想重用Author的结果映射



```xml
<resultMap id="blogResult" type="Blog">
  <id property="id" column="blog_id" />
  <result property="title" column="blog_title"/>
  <association property="author" javaType="Author">
    <id property="id" column="author_id"/>
    <result property="username" column="author_username"/>
    <result property="password" column="author_password"/>
    <result property="email" column="author_email"/>
    <result property="bio" column="author_bio"/>
  </association>
</resultMap>
```



如果博客有多个作者怎么办



```xml
select id="selectBlog" resultMap="blogResult">
  select
    B.id            as blog_id,
    B.title         as blog_title,
    A.id            as author_id,
    A.username      as author_username,
    A.password      as author_password,
    A.email         as author_email,
    A.bio           as author_bio,
    CA.id           as co_author_id,
    CA.username     as co_author_username,
    CA.password     as co_author_password,
    CA.email        as co_author_email,
    CA.bio          as co_author_bio
  from Blog B
  left outer join Author A on B.author_id = A.id
  left outer join Author CA on B.co_author_id = CA.id
  where B.id = #{id}
</select>
```



```xml
<resultMap id="authorResult" type="Author">
  <id property="id" column="author_id"/>
  <result property="username" column="author_username"/>
  <result property="password" column="author_password"/>
  <result property="email" column="author_email"/>
  <result property="bio" column="author_bio"/>
</resultMap>
```



由于结果中的列名与结果映射中的列名不同。你需要指定 `columnPrefix`  以便重复使用该结果映射来映射 co-author 的结果。



```xml
<resultMap id="blogResult" type="Blog">
  <id property="id" column="blog_id" />
  <result property="title" column="blog_title"/>
  <association property="author"
    resultMap="authorResult" />
  <association property="coAuthor"
    resultMap="authorResult"
    columnPrefix="co_" />
</resultMap>
```



###### 集合(collection )



```xml
<collection property="posts" ofType="domain.blog.Post">
  <id property="id" column="post_id"/>
  <result property="subject" column="post_subject"/>
  <result property="body" column="post_body"/>
</collection>
```



博客类



```java
private List<Post> posts;
```



### 4.6 自动映射



### 4.7 缓存



MyBatis默认启动本地的会话缓存，要启动全局的二级缓存，需要在SQL映射文件添加一行



```xml
<cache/>
```



## 5 动态SQL



### 5.1 if



```xml
<select id="findActiveBlogWithTitleLike"
     resultType="Blog">
  SELECT * FROM BLOG
  WHERE state = ‘ACTIVE’
  <if test="title != null">
    AND title like #{title}
  </if>
</select>
```



这条语句提供了可选的查找文本功能。如果不传入 “title”，那么所有处于 “ACTIVE” 状态的 BLOG 都会返回；如果传入了  “title” 参数，那么就会对 “title” 一列进行模糊查找并返回对应的 BLOG 结果（细心的读者可能会发现，“title”  的参数值需要包含查找掩码或通配符字符）。



### 5.1 choose、when、otherwise



MyBatis 提供了 choose 元素，它有点像 Java 中的 switch 语句。



还是上面的例子，但是策略变为：传入了 “title” 就按 “title” 查找，传入了 “author” 就按 “author”  查找的情形。若两者都没有传入，就返回标记为 featured 的 BLOG（这可能是管理员认为，与其返回大量的无意义随机  Blog，还不如返回一些由管理员精选的 Blog）。



```xml
<select id="findActiveBlogLike"
     resultType="Blog">
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <choose>
    <when test="title != null">
      AND title like #{title}
    </when>
    <when test="author != null and author.name != null">
      AND author_name like #{author.name}
    </when>
    <otherwise>
      AND featured = 1
    </otherwise>
  </choose>
</select>
```



### 5.1 trim、where、set



```xml
<select id="findActiveBlogLike"
     resultType="Blog">
  SELECT * FROM BLOG
  <where>
    <if test="state != null">
         state = #{state}
    </if>
    <if test="title != null">
        AND title like #{title}
    </if>
    <if test="author != null and author.name != null">
        AND author_name like #{author.name}
    </if>
  </where>
</select>
```



*where* 元素只会在子元素返回任何内容的情况下才插入 “WHERE” 子句。而且，若子句的开头为 “AND” 或 “OR”，*where* 元素也会将它们去除。



可以通过自定义 trim 元素来定制 *where* 元素的功能。比如，和 *where* 元素等价的自定义 trim 元素为：



```xml
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  ...
</trim>
```



*prefixOverrides* 属性会忽略通过管道符分隔的文本序列（注意此例中的空格是必要的）。上述例子会移除所有 *prefixOverrides* 属性中指定的内容，并且插入 *prefix* 属性中指定的内容。



*set* 元素可以用于动态包含需要更新的列，忽略其它不更新的列。比如：



```xml
<update id="updateAuthorIfNecessary">
  update Author
    <set>
      <if test="username != null">username=#{username},</if>
      <if test="password != null">password=#{password},</if>
      <if test="email != null">email=#{email},</if>
      <if test="bio != null">bio=#{bio}</if>
    </set>
  where id=#{id}
</update>
```



这个例子中，*set* 元素会动态地在行首插入 SET 关键字，并会删掉额外的逗号（这些逗号是在使用条件语句给列赋值时引入的）。



来看看与 *set* 元素等价的自定义 *trim* 元素吧：



```xml
<trim prefix="SET" suffixOverrides=",">
  ...
</trim>
```



### 5.1 foreach



动态 SQL 的另一个常见使用场景是对集合进行遍历（尤其是在构建 IN 条件语句的时候）。比如：



```xml
<select id="selectPostIn" resultType="domain.blog.Post">
  SELECT *
  FROM POST P
  WHERE ID in
  <foreach item="item" index="index" collection="list"
      open="(" separator="," close=")">
        #{item}
  </foreach>
</select>
```



*foreach* 元素的功能非常强大，它允许你指定一个集合，声明可以在元素体内使用的集合项（item）和索引（index）变量。



## 6 日志



Mybatis 通过使用内置的日志工厂提供日志功能。内置日志工厂将会把日志工作委托给下面的实现之一：



- LF4J

- Apache Commons Logging

- Log4j 2

- Log4j

- JDK logging



MyBatis 内置日志工厂会基于运行时检测信息选择日志委托实现。它会（按上面罗列的顺序）使用第一个查找到的实现。当没有找到这些实现时，将会禁用日志功能。



不少应用服务器（如 Tomcat 和 WebShpere）的类路径中已经包含 Commons Logging。注意，在这种配置环境下，MyBatis 会把 Commons Logging 作为日志工具。



你的应用部署在一个类路径已经包含 Commons Logging 的环境中，而你又想使用其它日志实现，你可以通过在 MyBatis 配置文件 mybatis-config.xml 里面添加一项 setting 来选择其它日志实现。



```xml
<configuration>
  <settings>
    ...
    <setting name="logImpl" value="LOG4J"/>
    ...
  </settings>
</configuration>
```



可选的值有：SLF4J、LOG4J、LOG4J2、JDK_LOGGING、COMMONS_LOGGING、STDOUT_LOGGING、NO_LOGGING，或者是实现了 `org.apache.ibatis.logging.Log` 接口，且构造方法以字符串为参数的类完全限定名。