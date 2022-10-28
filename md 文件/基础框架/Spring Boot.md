# 一、基础

## 1、简介

SpringBoot是为了简化Spring的配置，使得开发中集成新功能时更快，简化或减少相关配置。



## 2、Spring Boot 入门程序

[第一个SpringBoot程序](https://blog.csdn.net/u013447988/article/details/112508653)



## 3、Spring Boot 特点

- 依赖管理
- 自动配置



### 3.1、依赖管理

- spring-boot-starter-parent的父项目spring-boot-dependencies默认声明了很多依赖的版本号。这些依赖不用关注版本号，**默认使用spring-boot-dependencies声明的版本号**，也可以修改版本号。**没有默认声明的依赖需要自己写上版本号**。
- **starter场景驱动器**：只要引入starter，场景需要的常见相关依赖都会自动引入。官方starter命名：`spring-boot-starter-*`。第三方starter命名：`*-spring-boot-starter`。



### 3.2、自动配置

通过注解或者一些配置就可以在SpringBoot帮助下实现某些功能。



#### 3.2.1、自动配置原理（todo）

todo



## 4、底层注解

### @Configuration

@Configuration：标注在类上，**声明是个配置类**。配置类会添加到ioc容器。配置类里面可以使用@Bean给容器添加组件。

@Configuration注解有个proxyBeanMethods属性，默认值为true：

- Full(proxyBeanMethods = true)：保证每个@Bean方法被调用多少次返回的组件都是单实例的
- Lite(proxyBeanMethods = false)：每个@Bean方法被调用多少次返回的组件都是新创建的



```java
@Configuration(value = "configBean", proxyBeanMethods = false)
public class AutoConfig {

    @Bean //给容器添加组件，方法名就是组件名，
    public User getUser() {
        return new User("zhangsan", 21);
    }

    @Bean
    public Pet getPet() {
        return new Pet("xiaohei");
    }
}
```



### @Import

@Import 注解会根据 value属性里面的类名，创建对应类的组件并存到ioc容器，默认组件的名称就是全类名。





### @Conditional

@Conditional 当满足一定时才给容器注册组件。常见子类：

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1664432468024-f1ab4f58-925f-4b72-ac7a-e9bc6974437a-1666945821323-156.png)

举例：

```java
//    @ConditionalOnBean(name = "getPet")
    @ConditionalOnMissingBean(name = "getPet")
    @Bean 
    public User getUser() {
        return new User("zhangsan", 21);
    }
```

 @ConditionalOnBean 当容器中有名为 getPet 的组件时才注册getUser组件。

 @ConditionalOnMissingBean 当容器中没有getPet的组件才注册getUser组件。



###  @ImportResource  

引入原始Spring配置文件

```java
@ImportResource("classpath:beans.xml")
@Import({User.class, HttpHeaders.class})
@Configuration(value = "configBean", proxyBeanMethods = false) //@Configuration:声明这是个配置类，配置类里面可以使用@Bean给容器添加组件，默认是单实例，配置类也会当成一个组件添加到ioc容器
public class AutoConfig {

    @Bean
    public Pet getPet() {
        return new Pet("xiaohei");
    }

}
```



### @ConfigurationProperties+@Component

使用配置文件属性。

1. yml配置文件添加属性。

```java
car:
  name: bm
  price: 100000
```

1. 添加Car并注入添加的属性，@Component必须有，只有注册到容器中的组件才能自动配置属性

```java
@Component
@ConfigurationProperties(prefix = "car")
public class Car {
    private String name;
    private String price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
```

这样会创建一个Car实例添加到ioc容器，属性值为配置文件的值，



### @ConfigurationProperties+@EnableConfigurationProperties

也是使用配置文件属性。不同的@EnableConfigurationProperties必须作用在配置类上

```java
@EnableConfigurationProperties(Car.class)
@Configuration(value = "configBean", proxyBeanMethods = false) //@Configuration:声明这是个配置类，配置类里面可以使用@Bean给容器添加组件，默认是单实例，配置类也会当成一个组件添加到ioc容器
public class AutoConfig {
    @Bean
    public Pet getPet() {
        return new Pet("xiaohei");
    }
}
```

