(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{372:function(_,v,a){"use strict";a.r(v);var t=a(7),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("a",{attrs:{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki",target:"_blank",rel:"noopener noreferrer"}},[_._v("Spring Cloud Alibaba"),v("OutboundLink")],1),_._v(" 致力于提供微服务开发的一站式解决方案。")]),_._v(" "),v("h2",{attrs:{id:"nacos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[_._v("#")]),_._v(" Nacos")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Nacos"),v("OutboundLink")],1),_._v(" 一个更易于构建云原生应用的"),v("strong",[_._v("动态服务发现、配置管理和服务管理")]),_._v("平台。")]),_._v(" "),v("p",[_._v("Nacos 支持CP和AP，默认使用AP")]),_._v(" "),v("h3",{attrs:{id:"注册中心"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册中心"}},[_._v("#")]),_._v(" 注册中心")]),_._v(" "),v("p",[_._v("心跳机制：解决服务多负载服务宕机的问题。")]),_._v(" "),v("p",[_._v("Nacos Discover：服务注册与发现，定时拉取服务列表。")]),_._v(" "),v("p",[_._v("客户端负载均衡：Nacos默认使用Ribbon做负载均衡。")]),_._v(" "),v("p",[_._v("修改Ribbon的负载均衡策略。自定义Ribbon负载均衡策略。")]),_._v(" "),v("p",[_._v("使用LoadBalancer替换Ribbon做负载均衡。")]),_._v(" "),v("h3",{attrs:{id:"配置中心"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置中心"}},[_._v("#")]),_._v(" 配置中心")]),_._v(" "),v("p",[_._v("特性：")]),_._v(" "),v("ul",[v("li",[_._v("维护性：集中式配置管理")]),_._v(" "),v("li",[_._v("时效性：更新配置信息")]),_._v(" "),v("li",[_._v("安全性：权限管理")])]),_._v(" "),v("p",[_._v("概念：")]),_._v(" "),v("ul",[v("li",[_._v("命名空间")]),_._v(" "),v("li",[_._v("组")]),_._v(" "),v("li",[_._v("Data Id")])]),_._v(" "),v("p",[_._v("服务读取Nacos配置中心配置信息：")]),_._v(" "),v("ul",[v("li",[_._v("默认配置文件（支持多profile配置）")]),_._v(" "),v("li",[_._v("自定义配置文件（extension-configs、shared-configs）")])]),_._v(" "),v("p",[_._v("配置文件优先级：profile>默认配置文件>extension-configs（下标越大优先级越大）>shared-configs（下标越大优先级越大）")]),_._v(" "),v("p",[_._v("@Value需加@RefreshScope才能自动刷新。")]),_._v(" "),v("h3",{attrs:{id:"集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[_._v("#")]),_._v(" 集群")]),_._v(" "),v("p",[_._v("Nacos集群搭建：")]),_._v(" "),v("ol",[v("li",[_._v("Nacos修改数据源为MySQL，配置为集群模式")]),_._v(" "),v("li",[_._v("修改Nginx配置文件做负载均衡。")])]),_._v(" "),v("h2",{attrs:{id:"sentinel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sentinel"}},[_._v("#")]),_._v(" Sentinel")]),_._v(" "),v("p",[_._v("服务雪崩：服务提供者不可用导致服务调用者不可用，并将不可用逐渐放大的过程。")]),_._v(" "),v("p",[_._v("解决方法——添加容错机制：")]),_._v(" "),v("ul",[v("li",[_._v("超时机制")]),_._v(" "),v("li",[_._v("服务限流")]),_._v(" "),v("li",[_._v("服务降级")]),_._v(" "),v("li",[_._v("服务熔断")])]),_._v(" "),v("p",[v("a",{attrs:{href:"https://sentinelguard.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Sentinel"),v("OutboundLink")],1),_._v(" 是面向分布式、多语言异构化服务架构的流量治理组件。")]),_._v(" "),v("p",[_._v("Sentinel 分为核心库和控制台两个部分。")]),_._v(" "),v("p",[_._v("核心概念：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("资源")]),_._v("：可以是任何东西，服务，服务里的方法，甚至是一段代码。")]),_._v(" "),v("li",[v("strong",[_._v("规则")]),_._v("："),v("strong",[_._v("流量控制规则")]),_._v("、"),v("strong",[_._v("熔断降级规则")]),_._v("、"),v("strong",[_._v("系统保护规则")]),_._v("、"),v("strong",[_._v("来源访问控制规则")]),_._v(" 和 "),v("strong",[_._v("热点参数规则")]),_._v("。默认保存到内存中，可以配置持久化（比如整合Nacos配置中心）")])]),_._v(" "),v("p",[_._v("使用 Sentinel 来进行资源保护，主要分为几个步骤:")]),_._v(" "),v("ol",[v("li",[_._v("定义资源")]),_._v(" "),v("li",[_._v("定义规则")]),_._v(" "),v("li",[_._v("检验规则是否生效")])]),_._v(" "),v("p",[_._v("Sentinel 整合 OpenFeign。")]),_._v(" "),v("h2",{attrs:{id:"seata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#seata"}},[_._v("#")]),_._v(" Seata")]),_._v(" "),v("p",[_._v("分布式事务理论基础：")]),_._v(" "),v("ul",[v("li",[_._v("2PC")]),_._v(" "),v("li",[_._v("3PC")])]),_._v(" "),v("p",[_._v("2PC 事务实现：")]),_._v(" "),v("ul",[v("li",[_._v("AT模式（无侵入性）：\n"),v("ul",[v("li",[_._v("解析SQL、BeforeImage、执行SQL、AfterImage、行锁")]),_._v(" "),v("li",[_._v("成功（删除行锁）")])])]),_._v(" "),v("li",[_._v("TCC")]),_._v(" "),v("li",[_._v("SAGA")]),_._v(" "),v("li",[_._v("XA")])]),_._v(" "),v("p",[v("a",{attrs:{href:"https://seata.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Seata"),v("OutboundLink")],1),_._v("是一款开源的分布式事务解决方案。")]),_._v(" "),v("p",[_._v("支持AT、TCC、SAGA、XA事务模式。"),v("strong",[_._v("推荐使用AT模式")]),_._v("。")]),_._v(" "),v("p",[_._v("Seata 角色：")]),_._v(" "),v("ul",[v("li",[_._v("事务协调者")]),_._v(" "),v("li",[_._v("事务管理器")]),_._v(" "),v("li",[_._v("资源管理器")])]),_._v(" "),v("p",[_._v("Seata环境搭建：")]),_._v(" "),v("ul",[v("li",[_._v("Seata 服务端高可用部署：使用DB数据源+Nacos（注册中心+配置中心）")]),_._v(" "),v("li",[_._v("Seata 客户端搭建")])]),_._v(" "),v("p",[_._v("@GlobalTransacational注解使用。")]),_._v(" "),v("p",[_._v("Seata AT模式的原理。")])])}),[],!1,null,null,null);v.default=e.exports}}]);