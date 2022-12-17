# 1.RPC基础



## 1.1 RPC是什么



**RPC（Remote Procedure  Call）**：远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。



比如两个不同的服务 A、B  部署在两台不同的机器上，那么服务 A 如果想要调用服务 B 中的某个方法该怎么办呢？使用 HTTP请求  当然可以，但是可能会比较慢而且一些优化做的并不好。 RPC 的出现就是为了解决这个问题。



RPC主要解决了：**让分布式或者微服务系统中不同服务之间的调用像本地调用一样简单。**



举个例子：两个不同的服务 A、B 部署在两台不同的机器上，服务 A 如果想要调用服务 B 中的某个方法的话就可以通过 RPC 来做。



## 1.2 RPC原理



![image-20221028163703489](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163703489.png)



1. 服务消费端（client）以本地调用的方式调用远程服务；

1. 客户端 Stub（client stub） 接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体（序列化）：`RpcRequest`；

1. 客户端 Stub（client stub） 找到远程服务的地址，并将消息发送到服务提供端；

1. 服务端 Stub（桩）收到消息将消息反序列化为Java对象: `RpcRequest`；

1. 服务端 Stub（桩）根据`RpcRequest`中的类、方法、方法参数等信息调用本地的方法；

1. 服务端 Stub（桩）得到方法执行结果并将组装成能够进行网络传输的消息体：`RpcResponse`（序列化）发送至消费方；

1. 客户端 Stub（client stub）接收到消息并将消息反序列化为Java对象:`RpcResponse` ，这样也就得到了最终结果。



再贴一个网上的时序图，辅助理解：



![image-20221028163721658](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163721658.png)



# 2.Dubbo入门



## 2.1 Dubbo是什么



[Apache Dubbo](https://github.com/apache/incubator-dubbo) 是一款高性能、轻量级的开源 Java RPC 框架。



提供了六大核心能力



1. 面向接口代理的高性能RPC调用。

1. 智能容错和负载均衡。

1. 服务自动注册和发现。

1. 高度可扩展能力。

1. 运行期流量调度。

1. 可视化的服务治理与运维。



简单来说就是： **Dubbo 不光可以帮助我们调用远程服务，还提供了一些其他开箱即用的功能比如智能负载均衡。**



![image-20221028163740409](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163740409.png)



### 2.1.1 Dubbo能帮助我们解决什么问题



-  **负载均衡** ： 同一个服务部署在不同的机器时该调用那一台机器上的服务。 

-  **服务调用链路生成**  ： 随着系统的发展，服务越来越多，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系。Dubbo 可以为我们解决服务之间互相是如何调用的。 

-  **服务访问压力以及时长统计、资源调度和治理** ：基于访问压力实时管理集群容量，提高集群利用率。 



## 2.2 Dubbo架构



![image-20221028163754478](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20221028163754478.png)



**节点角色说明：**

| 节点        | 角色说明                               |
| ----------- | -------------------------------------- |
| `Provider`  | 暴露服务的服务提供方                   |
| `Consumer`  | 调用远程服务的服务消费方               |
| `Registry`  | 服务注册与发现的注册中心               |
| `Monitor`   | 统计服务的调用次数和调用时间的监控中心 |
| `Container` | 服务运行容器                           |



**调用关系说明：**



1. 服务容器负责启动，加载，运行服务提供者。

1. 服务提供者在启动时，向注册中心注册自己提供的服务。

1. 服务消费者在启动时，向注册中心订阅自己所需的服务。

1. 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。

1. 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。

1. 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。



## 2.3 Dubbo入门案例



# 3.Dubbo配置



## 3.1 配置方式



按照编程方式可以分为四种方式：



- **XML配置**：以XML方式配置各种组件，支持与Spring无缝集成。

- **Annotation配置**：以注解方式暴露服务和引用服务接口，支持与Spring无缝集成

- **API配置**：以Java编码的方式组织配置，包括Raw API和Bootstrap API

- **属性配置**：根据Key-value属性生成配置组件，类似SpringBoot的ConfigurationProperties，属性配置的另外一个重要的功能特性是属性覆盖，使用外部属性的值覆盖已创建的配置组件属性。



### 3.1.1 XML配置



1. 关闭某个服务的启动时检查：(没有提供者时报错)



```plain
<dubbo:reference check="false" />
```



1. 关闭所有服务的启动时检查：(没有提供者时报错) 写在定义服务消费者一方



```plain
<dubbo:consumer check="false" />
```



1. 关闭注册中心启动时检查：(注册订阅失败时报错)



```plain
<dubbo:registry check="false" />
```



1. 引用缺省是延迟初始化的，改为饥饿加载



```plain
<dubbo:reference init="true" />
```



1. 禁用注册



```plain
<dubbo:registry register="false" />
```



1. 回声测试：所有服务自动实现EchoService接口， 强转EchoService测试可用性



```plain
< dubbo:reference id=“aaa" interface="com.xxx.XxxService" />

EchoService echoService = （ EchoService ） ctx.getBean(“aaa")
```



具体配置详情看：[XML配置](https://dubbo.apache.org/zh/docs/references/configuration/xml/)



### 3.1.2 Annotation配置



-  **服务端：** 

- -  

```plain
配置包扫描：

<**dubbo:annotation package="com.xxx.xxx"** />

暴露服务：

@Service ----- com.alibaba.dubbo.config.annotation.Service
```

 

-  **消费端**： 

- -  

```plain
配置包扫描：
<dubbo:annotation package="com.xxx.xxx" />
暴露服务：
@Reference----- com.alibaba.dubbo.config.annotation.Reference
```

 



具体配置详情看[注解配置](https://dubbo.apache.org/zh/docs/references/configuration/annotation/)



### 3.1.3 API配置



以Java编码的方式组织配置，包括Raw API和Bootstrap API，具体请参考[API配置](https://dubbo.apache.org/zh/docs/references/configuration/api)。



### 3.1.4 属性配置



根据Key-value属性生成配置组件，类似SpringBoot的ConfigurationProperties，具体请参考[属性配置](https://dubbo.apache.org/zh/docs/references/configuration/properties)。



属性配置的另外一个重要的功能特性是[属性覆盖](https://dubbo.apache.org/zh/docs/references/configuration/properties#属性覆盖)，使用外部属性的值覆盖已创建的配置组件属性。



如果要将属性配置放到外部的配置中心，请参考[外部化配置](https://dubbo.apache.org/zh/docs/references/configuration/external-config)



# 4.Dubbo用法示例



## 4.1 多注册中心



Dubbo支持同一服务向多注册中心同时注册。或者不同服务分别注册到不同的注册中心上去，甚至可以同时引用注册在不同注册中心上的同名服务。



用法



```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.3.xsd http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd">
    <dubbo:application name="world"  />
    <!-- 多注册中心配置 -->
    <dubbo:registry id="hangzhouRegistry" address="10.20.141.150:9090" />
    <dubbo:registry id="qingdaoRegistry" address="10.20.141.151:9010" default="false" />
    <!-- 向多个注册中心注册 -->
    <dubbo:service interface="com.alibaba.hello.api.HelloService" version="1.0.0" ref="helloService" registry="hangzhouRegistry,qingdaoRegistry" />
</beans>
```



dubbo:reference 配置的registry属性默认从所有注册中心获服务列表后合并结果。这样当一个注册中心没有某个服务时，其他注册中心有这个服务，也能获取到这个服务进行使用。



