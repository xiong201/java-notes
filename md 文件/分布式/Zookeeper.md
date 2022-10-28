# 1. 分布式系统基础知识



## 1.1 分布式系统是什么



分布式系统：一个硬件或软件组件分布在不同的网络计算机上，彼此之间仅仅通过消息传递进行通信和协调的系统



这是他的特点，更细致的看这些特点又可以有：**分布性、对等性、并发性、缺乏全局时钟、故障随时会发生**。



### 1.1.1 分布性



既然是分布式系统，最显著的特点肯定就是分布性，从简单来看，如果我们做的是个电商项目，整个项目会分成不同的功能，专业点就不同的微服务，比如用户微服务，产品微服务，订单微服务，这些服务部署在不同的tomcat中，不同的服务器中，甚至不同的集群中，整个架构都是分布在不同的地方的，在空间上是随意的，而且随时会增加，删除服务器节点，这是第一个特性



### 1.1.2  对等性



对等性是分布式设计的一个目标，还是以电商网站为例，来说明下什么是对等性，要完成一个分布式的系统架构，肯定不是简单的把一个大的单一系统拆分成一个个微服务，然后部署在不同的服务器集群就够了，其中拆分完成的每一个微服务都有可能发现问题，而导致整个电商网站出现功能的丢失。



比如订单服务，为了防止订单服务出现问题，一般情况需要有一个备份，在订单服务出现问题的时候能顶替原来的订单服务。



这就要求这两个（或者2个以上）订单服务完全是对等的，功能完全是一致的，其实这就是一种服务副本的冗余。



还一种是数据副本的冗余，比如数据库，缓存等，都和上面说的订单服务一样，为了安全考虑需要有完全一样的备份存在，这就是对等性的意思。



### 1.1.3 并发性



在一个分布式系统中的多个节点，可能会并发地操作一些共享资源，如何准确并高效的协调分布式并发操作。



分布式锁其实就是解决这问题的。



### 1.1.4 缺乏全局时钟



在分布式系统中，节点是可能反正任意位置的，而每个位置，每个节点都有自己的时间系统，因此在分布式系统中，很难定义两个事务纠结谁先谁后，原因就是因为缺乏一个全局的时钟序列进行控制，当然，现在这已经不是什么大问题了，已经有大把的时间服务器给系统调用



### 1..1.5 故障随时会发生



任何一个节点都可能出现停电，死机等现象，服务器集群越多，出现故障的可能性就越大，随着集群数目的增加，出现故障甚至都会成为一种常态，怎么样保证在系统出现故障，而系统还是正常的访问



# 2. zookeeper简介



ZooKeeper致力于**提供一个高性能、高可用，且具备严格的顺序访问控制能力的分布式协调服务**，是雅虎公司创建，是Google的Chubby一个开源的实现，也是Hadoop和Hbase的重要组件。



## 2.1 设计目标



-  **简单的数据结构**：共享的树形结构，类似文件系统，存储于内存； 

-  **可以构建集群**：避免单点故障，3-5台机器就可以组成集群，超过半数正常工作就能对外提供服务； 

-  **顺序访问**：对于每个读请求，zk会分配一个全局唯一的递增编号，利用这个特性可以实现高级协调服务； 

-  **高性能**：基于内存操作，服务于非事务请求，适用于读操作为主的业务场景。3台zk集群能达到13w QPS； 



## 2.2 zookeeper使用场景



- 数据发布订阅

- 负载均衡

- 命名服务

- Master选举

- 集群管理

- 配置管理

- 分布式队列

- 分布式锁



# 3.zookeeper基础



## 3.1 单机部署



### 3.1.1 Zookeeper windows环境安装



环境要求:必须要有jdk环境,本次使用jdk1.8



1.  安装jdk 

1.  安装Zookeeper. 在官网http://zookeeper.apache.org/下载zookeeper.下载的是zookeeper-3.4.6版本。解压zookeeper-3.4.6至安装目录，安装目录新建data及log目录。 

1.  ZooKeeper的安装模式分为三种，分别为：单机模式（stand-alone）、集群模式和集群伪分布模式。ZooKeeper 单机模式的安装相对比较简单，如果第一次接触ZooKeeper的话，建议安装ZooKeeper单机模式或者集群伪分布模式。 

1.  安装单击模式。 至安装目录\zookeeper-3.4.6\conf 复制 zoo_sample.cfg 并粘贴到当前目录下，命名zoo.cfg. 



### 3.1.2 目录结构



bin    存放系统脚本



conf    存放配置文件



contrib   zk附加功能支持



dist-maven   maven仓库文件



docs    zk文档



lib    依赖的第三方库



recipes   经典场景样例代码



src    zk源码



其中bin和conf是非常重要的两个目录，平时也是经常使用的。



#### 3.1.2.1 bin目录



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829102842.png)



其中



zkServer为服务器，启动后默认端口为2181



zkCli为命令行客户端



#### 3.1.2.2 conf目录



Conf目录为配置文件存放的目录，zoo.cfg为核心的配置文件



这里面的配置很多，这配置是运维的工作，目前没必要，也没办法全部掌握。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829102939.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829102950.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829102959.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829103008.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829103016.png)



在这挑选几个讲解：



**clientPort：参数无默认值，必须配置，用于配置当前服务器对外的服务端口，客户端必须使用这端口才能进行连接**



**dataDir：用于存放内存数据库快照的文件夹，同时用于集群的myid文件也存在这个文件夹里（注意：一个配置文件只能包含一个dataDir字样，即使它被注释掉了。）**



**dataLogDir：用于单独设置transaction log的目录，transaction log分离可以避免和普通log还有快照的竞争**

------

**dataDir：新安装zk这文件夹里面是没有文件的，可以通过snapCount参数配置产生快照的时机**



以下配置集群中才会使用，后面再讨论



tickTime：心跳时间，为了确保连接存在的，以毫秒为单位，最小超时时间为两个心跳时间



initLimit：多少个心跳时间内，允许其他server连接并初始化数据，如果ZooKeeper管理的数据较大，则应相应增大这个值



syncLimit：多少个tickTime内，允许follower同步，如果follower落后太多，则会被丢弃。



## 3.2 Zookeeperr的特性



Zk的特性会从会话、数据节点，版本，Watcher，ACL权限控制，集群角色这些部分来了解，其中重点需要掌握的**数据节点与Watcher**



### 3.2.1 会话



客户端与服务端的一次会话连接，本质是TCP长连接，通过会话可以进行心跳检测和数据传输；



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829104013.png)



会话（session）是zookepper非常重要的概念，客户端和服务端之间的任何交互操作都与会话有关



**会话状态**



看下这图，Zk客户端和服务端成功连接后，就创建了一次会话，ZK会话在整个运行期间的生命周期中，会在不同的会话状态之间切换，这些状态包括：**CONNECTING、CONNECTED、RECONNECTING、RECONNECTED、CLOSE**



一旦客户端开始创建Zookeeper对象，那么客户端状态就会变成CONNECTING状态，同时客户端开始尝试连接服务端，连接成功后，客户端状态变为CONNECTED，通常情况下，由于断网或其他原因，客户端与服务端之间会出现断开情况，一旦碰到这种情况，Zookeeper客户端会自动进行重连服务，同时客户端状态再次变成CONNCTING，直到重新连上服务端后，状态又变为CONNECTED，在通常情况下，客户端的状态总是介于CONNECTING和CONNECTED之间。但是，如果出现诸如会话超时、权限检查或是客户端主动退出程序等情况，客户端的状态就会直接变更为CLOSE状态



### 3.2.2 Zookeeper数据模型



ZooKeeper的视图结构和标准的Unix文件系统类似，其中每个节点称为“数据节点”或ZNode,每个znode可以存储数据，还可以挂载子节点，因此可以称之为“树”（**树形结构**）



第二点需要注意的是，每一个**znode都必须有值**，如果没有值，节点是不能创建成功的。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829104249.png)



-  在Zookeeper中，znode是一个跟Unix文件系统路径相似的节点，可以往这个节点存储或获取数据 

-  通过客户端可对znode进行增删改查的操作，还可以注册watcher监控znode的变化。 



#### 3.2.2.1 Zookeeper节点类型



**Znode有两大类型**



- 短暂节点：客户端断开连接后删除节点

- 持久节点：客户端断开连接后不删除节点



**Znode节点类型（默认是persistent ）**



- 持久节点（PERSISTENT）

- 持久顺序节点（PERSISTENT_SEQUENTIAL）（

- 临时节点（EPHEMERAL）

- 临时顺序节点（EPHEMERAL_SEQUENTIAL）



**对于持久节点和临时节点，同一个znode下，节点的名称是唯一的**。这是实现分布式锁的基础。



#### 3.2.2.2 Zookeeper节点状态属性



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829112424.png)



### 3.2.3 ACL保障数据的安全



ACL机制，表示为`scheme:id:permissions`，第一个字段表示采用哪一种机制，第二个id表示用户，permissions表示相关权限（如只读，读写，管理等）。



zookeeper提供了如下几种机制（scheme）



-  **world:** 它下面只有一个id, 叫anyone, world:anyone代表任何人，zookeeper中对所有人有权限的结点就是属于world:anyone的 

-  **auth:** 它不需要id, 只要是通过authentication的user都有权限（zookeeper支持通过kerberos来进行authencation, 也支持username/password形式的authentication) 

-  **digest:** 它对应的id为username:BASE64(SHA1(password))，它需要先通过username:password形式的authentication 

-  **ip:** 它对应的id为客户机的IP地址，设置的时候可以设置一个ip段，比如ip:192.168.1.0/16, 表示匹配前16个bit的IP段 



# 4.zookeeper进阶



## 4.1 常见客户端命令



### 4.1.1 服务端常见命令



在准备好相应的配置之后，可以直接通过`zkServer.sh` 这个脚本进行服务的相关操作



-  启动ZK服务:   `sh bin/zkServer.sh start` 

-  查看ZK服务状态: `sh bin/zkServer.sh status` 

-  停止ZK服务:   `sh bin/zkServer.sh stop` 

-  重启ZK服务:   `sh bin/zkServer.sh restart` 



### 4.1.2 客户端常用命令



使用 zkCli.sh -server 127.0.0.1:2181 连接到 ZooKeeper 服务，连接成功后，系统会输出 ZooKeeper 的相关环境以及配置信息。 命令行工具的一些简单操作如下：



-  显示根目录下、文件： ls / 使用 ls 命令来查看当前 ZooKeeper 中所包含的内容 

-  显示根目录下、文件： ls2 / 查看当前节点数据并能看到更新次数等数据 

-  创建文件，并设置初始内容： create /zk "test" 创建一个新的 znode节点“ zk ”以及与它关联的字符串 [-e] [-s] 。**-e是临时节点，-s是 顺序节点** 

-  获取文件内容： get /zk 确认 znode 是否包含我们所创建的字符串 

-  修改文件内容： set /zk "zkbak" 对 zk 所关联的字符串进行设置  

-  删除文件： delete /zk 将刚才创建的 znode 删除，如果存在子节点删除失败 

-  递归删除：rmr /zk将刚才创建的 znode 删除，子节点同时删除 

-  退出客户端： quit  

-  帮助命令： help 



### 4.1.3 ACl常用命令



-  **getACL**：获取指定节点的ACL信息 

- -  

```plain
create /testDir/testAcl deer  # 创建一个子节点
getAcl /testDir/testAcl      # 获取该节点的acl权限信息
```

 

-  **setACL**：设置指定节点的ACL信息 

- -  

```plain
setAcl /testDir/testAcl world:anyone:crwa   # 设置该节点的acl权限
getAcl /testDir/testAcl   # 获取该节点的acl权限信息，成功后，该节点就少了d权限

create /testDir/testAcl/xyz xyz-data   # 创建子节点
delete /testDir/testAcl/xyz    # 由于没有d权限，所以提示无法删除
```

 

-  **addauth**：注册会话授权信息 



### 4.1.4 常用四字命令



ZooKeeper 支持某些特定的四字命令字母与其的交互。用来获取 ZooKeeper 服务的当前状态及相关信息。可通过 telnet 或 nc 向 ZooKeeper 提交相应的命令 ：



当然，前提是安装好了nc



- echo stat|nc 127.0.0.1 2181 来查看哪个节点被选择作为follower或者leader 

- 使用echo ruok|nc 127.0.0.1 2181 测试是否启动了该Server，若回复imok表示已经启动。 

- echo dump| nc 127.0.0.1 2181 ,列出未经处理的会话和临时节点。 

- echo kill | nc 127.0.0.1 2181 ,关掉server 

- echo conf | nc 127.0.0.1 2181 ,输出相关服务配置的详细信息。 

- echo cons | nc 127.0.0.1 2181 ,列出所有连接到服务器的客户端的完全的连接 / 会话的详细信息 

- echo envi |nc 127.0.0.1 2181 ,输出关于服务环境的详细信息（区别于 conf 命令）。 

- echo reqs | nc 127.0.0.1 2181 ,列出未经处理的请求。 

- echo wchs | nc 127.0.0.1 2181 ,列出服务器 watch 的详细信息。 

- echo wchc | nc 127.0.0.1 2181 ,通过 session 列出服务器 watch 的详细信息，它的输出是一个与 watch 相关的会话的列表。 

- echo wchp | nc 127.0.0.1 2181 ,通过路径列出服务器 watch 的详细信息。它输出一个与 session 相关的路径。



### 4.1.5 zookeeper日志可视化



前面以及讲了两个非常重要的配置一个是dataDir，存放的快照数据，一个是dataLogDir，存放的是事务日志文件



-  **事务日志可视化（LogFormatter）** 

- -  

```plain
java -cp /soft/zookeeper-3.4.12/zookeeper-3.4.12.jar:/soft/zookeeper-3.4.12/lib/slf4j-api-1.7.25.jar org.apache.zookeeper.server.LogFormatter log.1
```

 

-  **数据快照可视化 （SnapshotFormatter）** 

- -  

```plain
java -cp /soft/zookeeper-3.4.12/zookeeper-3.4.12.jar:/soft/zookeeper-3.4.12/lib/slf4j-api-1.7.25.jar org.apache.zookeeper.server.SnapshotFormatter log.1
```

 



## 4.2 Java客户端框架（重要）



- **Zookeeper原生客户端**：zookeeper官方提供的java客户端API；

- **ZkClient**：开源的zk客户端，在原生API基础上封装，是一个更易于使用的zookeeper客户端；

- **Curator**：开源的zk客户端，在原生API基础上封装，apache顶级项目；



### 4.2.1 Zookeeper原生客户端



-  **创建会话** 

- -  

```plain
public ZooKeeper(String connectString, int sessionTimeout, Watcher watcher,
            long sessionId, byte[] sessionPasswd, boolean canBeReadOnly)
```

 

-  创建节点 

- -  

```plain
public String / void create(final String path, byte data[], List<ACL> acl,
            CreateMode createMode,  StringCallback cb, Object ctx)
```

 

-  读取数据 

- -  

```plain
public List<String> / void getChildren(final String path, Watcher watcher,
         Stat stat, Children2Callback cb, Object ctx)
public List<String> / void getData(final String path, Watcher watcher, 
         Stat stat, DataCallback cb, Object ctx)
```

 

-  更新数据 

- -  

```plain
 public Stat / void setData(final String path, byte data[], int version,
            StatCallback cb, Object ctx)
```

 

-  检测节点是否存在 

- -  

```plain
 public Stat / void exists(final String path, Watcher watcher,
            StatCallback cb, Object ctx)
```

 

-  权限控制 

- -  

```plain
public void addAuthInfo(String scheme, byte auth[])
```

 

-  watch 

- -  

```plain
org.apache.zookeeper.Watcher（KeeperState、EventType）
```

 

- -  没有专门的API去注册watcher，依附于增删改查API; 

- -  watch是一次性产品 

- -  watch的process方法中，可对不同事件进行处理； 



Zookeeper原生客户端在开发上的弊端：



1.  会话的连接是异步的； · 

1.  Watch需要重复注册 ；· 

1.  Session重连机制； 

1.  开发复杂性较高； 



### 4.2.2 ZkClient



ZkClient的maven依赖：



```plain
<!-- zkclient依赖 -->
		<dependency>
			<groupId>com.101tec</groupId>
			<artifactId>zkclient</artifactId>
			<version>0.10</version>
		</dependency>
```



ZkClient的API:



-  创建会话（同步，重试） 

- -  

```plain
public ZkClient(final String zkServers, final int sessionTimeout, 
                final int connectionTimeout, final ZkSerializer zkSerializer, 
                final long operationRetryTimeout)
```

 

-  创建节点（同步，递归创建） 

- -  

```plain
public String create(String path,Object data,final List<ACL> acl,CreateMode mode)
public void createPersistent(String path,boolean createParents,List<ACL> acl)
public void createPersistent(String path, Object data, List<ACL> acl)
public String createPersistentSequential(String path,Object data,List<ACL> acl)
public void createEphemeral(String path, Object data, List<ACL> acl)
public String createEphemeralSequential(String path,Object data,List<ACL> acl)
```

 

-  删除节点（同步,递归删除） 

- -  

```plain
public boolean delete(String path,int version)
public boolean deleteRecursive(String path)
```

 

-  获取节点（同步，避免不存在异常） 

- -  

```plain
public List<String> getChildren(String path)
public <T> T readData(String path, boolean returnNullIfPathNotExists)
public <T> T readData(String path, Stat stat)
```

 

-  更新节点（同步，实现CAS,状态返回） 

- -  

```plain
public void writeData(String path, Object datat, int expectedVersion)
public Stat writeDataReturnStat(String path,Object datat,int expectedVersion)
```

 

-  检测节点存在（同步） 

- -  

```plain
public boolean exists(String path)
```

 

-  权限控制（同步） 

- -  

```plain
public void addAuthInfo(String scheme, final byte[] auth);
public void setAcl(final String path, final List<ACL> acl);
```

 

-  监听器 

- - ![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829134845.png)



### 4.2.3 Curator



Curator的maven依赖



```xml
<!-- curator依赖 -->
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-framework</artifactId>
    <version>4.0.0</version>
</dependency>
```



Curator的API



-  **创建会话（同步，重试）** 

- -  

```plain
CuratorFrameworkFactory.newClient(String connectString, int sessionTimeoutMs, 
				int connectionTimeoutMs, RetryPolicy retryPolicy)
```

 

- -  

```plain
CuratorFrameworkFactory.builder().connectString("192.168.11.56:2180")  
		        .sessionTimeoutMs(30000).connectionTimeoutMs(30000)  
		        .canBeReadOnly(false)  
		        .retryPolicy(new ExponentialBackoffRetry(1000, Integer.MAX_VALUE))
		        .build();
```

 

- - - retryPolicy 连接策略：
      RetryOneTime: 只重连一次.
      RetryNTime: 指定重连的次数N.
      RetryUtilElapsed: 指定最大重连超时时间和重连时间间隔,间歇性重连直到超时或者链接成功.
      ExponentialBackoffRetry: 基于"backoff"方式重连,和RetryUtilElapsed的区别是重连的时间间隔是动态的.
      BoundedExponentialBackoffRetry: 同ExponentialBackoffRetry,增加了最大重试次数的控制.

-  创建节点 

- -  

```plain
client.create().creatingParentIfNeeded()
               .withMode(CreateMode.PERSISTENT)
               .withACL(aclList)
               .forPath(path, "hello, zk".getBytes());
```

 

-  删除节点 

- -  

```plain
client.delete().guaranteed().deletingChildrenIfNeeded()
      .withVersion(version).forPath(path)
```

 

-  获取节点 

- -  

```plain
client.getData().storingStatIn(stat).forPath(path);
client.getChildren().forPath(path);
```

 

-  更新节点 

- -  

```plain
client.setData().withVersion(version).forPath(path, data)
```

 

-  判断节点是否存在 

- -  

```plain
client.checkExists().forPath(path)；
```

 

-  设置权限 

-  

```plain
Build.authorization(String scheme, byte[] auth)
client.setACL().withVersion(version)
               .withACL(ZooDefs.Ids.CREATOR_ALL_ACL)
               .forPath(path);
```

 

-  监听器(避免反复监听) 

- - Cache是curator中对事件监听的包装，对事件的监听可以近似看做是本地缓存视图和远程zk视图的对比过程 

- - - NodeCache 节点缓存用于处理节点本身的变化 ，回调接口NodeCacheListener

- - - PathChildrenCache  子节点缓存用于处理节点的子节点变化，回调接口PathChildrenCacheListener

- - - TreeCache  NodeCache和PathChildrenCache的结合体，回调接口TreeCacheListener

-  事务支持（保证一组操作的原子性） 

- -  

```plain
Collection<CuratorTransactionResult> results = client.transaction().forOperations(operations);
```

 

-  异步支持： 引入BackgroundCallback接口，用于处理异步接口调用之后服务端返回的结果信息 

-  

```plain
public void processResult(CuratorFramework client, CuratorEvent event)
CuratorEventType 事件类型
org.apache.zookeeper.KeeperException.Code  服务器响应码（标识结果）
```

 



# 5.zookeeper实战



## 5.1 数据发布/订阅（配置中心）



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141259.png)



## 5.2 服务注册与发现



### 5.2.1 什么是服务注册与发现



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829142314.png)



### 5.2.2 zookeeper服务注册与发现的运用



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829142457.png)



代码实现逻辑：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829142530.png)



## 5.3 分布式锁



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141502.png)



### 5.3.1 基于同名节点的分布式锁



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141622.png)



### 5.3.2 高性能分布式锁



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141643.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141650.png)



## 5.4 Master选举（集群选举）



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141722.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210829141728.png)