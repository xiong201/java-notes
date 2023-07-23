

# Dubbo简介

## Dubbo是什么



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



**Dubbo能帮助我们解决什么问题？**

-  **负载均衡** ： 同一个服务部署在不同的机器时该调用那一台机器上的服务。 

-  **服务调用链路生成**  ： 随着系统的发展，服务越来越多，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系。Dubbo 可以为我们解决服务之间互相是如何调用的。 

-  **服务访问压力以及时长统计、资源调度和治理** ：基于访问压力实时管理集群容量，提高集群利用率。 



## Dubbo架构



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





# Dubbo应用实例



## 多注册中心



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



