## Ribbon

Ribbon支持的负载均衡策略。默认的负载均衡策略



## OpenFeign

Feign 是Netfix开发的声明式、模版化的HTTP客户端。

OpenFeign：Fegin增强，支持SpringMVC注解。

@FeginClient（动态代理）

日志配置：

- 全局配置
- 局部配置

超时时间配置：

- 连接超时时间
- 请求处理超时时间



自定义拦截器



## Gateway

API网关。

Gateway网关组件。特性：

- 动态路由
- 路径重写
- 集成流控降级
- 断言和过滤器

核心概念：

- 路由
- 断言
- 过滤器





断言工厂：

- 内置断言工厂
- 自定义路由断言工厂



过滤器工厂（局部过滤器）：

- 内置过滤器工厂
- 自定义过滤器工厂



全局过滤器：

- 内置全局过滤器
- 自定义全局过滤器



Gateway整合Nacos。

Gateway请求日志记录

Gateway跨域处理

Gateway整合Sentinel进行限流降级。

Gateway高可用部署：Nginx负载均衡



