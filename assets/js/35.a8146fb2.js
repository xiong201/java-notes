(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{365:function(t,a,n){"use strict";n.r(a);var s=n(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-bean简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean简介"}},[t._v("#")]),t._v(" Spring bean简介")]),t._v(" "),a("p",[t._v("bean 指的是那些被 IoC 容器所管理的对象。")]),t._v(" "),a("p",[t._v("Spring 中 Bean 的作用域通常有下面几种：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("singleton")]),t._v(" : 唯一 bean 实例，Spring 中的 bean 默认都是单例的，对单例设计模式的应用。")]),t._v(" "),a("li",[a("strong",[t._v("prototype")]),t._v(" : 每次请求都会创建一个新的 bean 实例。每次getBean都会重新创建一个bean。")]),t._v(" "),a("li",[a("strong",[t._v("request")]),t._v(" : 每一次 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP request 内有效。")]),t._v(" "),a("li",[a("strong",[t._v("session")]),t._v(" : 每一次来自新 session 的 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP session 内有效。")]),t._v(" "),a("li",[a("strong",[t._v("global-session")]),t._v(" ： 全局 session 作用域，仅仅在基于 portlet 的 web 应用中才有意义，Spring5 已经没有了。Portlet 是能够生成语义代码(例如：HTML)片段的小型 Java Web 插件。它们基于 portlet 容器，可以像 servlet 一样处理 HTTP 请求。但是，与 servlet 不同，每个 portlet 都有不同的会话")])]),t._v(" "),a("p",[a("strong",[t._v("多线程下单例bean线程问题如何解决？")])]),t._v(" "),a("p",[t._v("单例 bean 存在线程问题，主要是因为当多个线程操作同一个对象的时候是存在资源竞争的。")]),t._v(" "),a("p",[t._v("常见的有两种解决办法：")]),t._v(" "),a("ol",[a("li",[t._v("在 bean 中尽量避免定义可变的成员变量。")]),t._v(" "),a("li",[t._v("在类中定义一个 "),a("code",[t._v("ThreadLocal")]),t._v(" 成员变量，将需要的可变成员变量保存在 "),a("code",[t._v("ThreadLocal")]),t._v(" 中（推荐的一种方式）。")])]),t._v(" "),a("p",[t._v("不过，大部分 bean 实际都是无状态（没有实例变量）的（比如 Dao、Service），这种情况下， bean 是线程安全的。")]),t._v(" "),a("h1",{attrs:{id:"spring-bean-常用注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-常用注解"}},[t._v("#")]),t._v(" Spring Bean 常用注解")]),t._v(" "),a("p",[a("strong",[t._v("将一个类声明为 bean 的注解有哪些?")])]),t._v(" "),a("p",[t._v("我们一般使用 "),a("code",[t._v("@Autowired")]),t._v(" 注解自动装配 bean，要想把类标识成可用于 "),a("code",[t._v("@Autowired")]),t._v(" 注解自动装配的 bean 的类,采用以下注解可实现：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Component")]),t._v(" ：通用的注解，可标注任意类为 "),a("code",[t._v("Spring")]),t._v(" 组件。如果一个 Bean 不知道属于哪个层，可以使用"),a("code",[t._v("@Component")]),t._v(" 注解标注。")]),t._v(" "),a("li",[a("code",[t._v("@Repository")]),t._v(" : 对应持久层即 Dao 层，主要用于数据库相关操作。")]),t._v(" "),a("li",[a("code",[t._v("@Service")]),t._v(" : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。")]),t._v(" "),a("li",[a("code",[t._v("@Controller")]),t._v(" : 对应 Spring MVC 控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面。")])]),t._v(" "),a("p",[a("strong",[t._v("@Component 和 @Bean 的区别是什么？")])]),t._v(" "),a("p",[a("code",[t._v("@Component")]),t._v(" 注解作用于类，而"),a("code",[t._v("@Bean")]),t._v("注解作用于方法。")]),t._v(" "),a("p",[a("code",[t._v("@Component")]),t._v("通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中（我们可以使用 "),a("code",[t._v("@ComponentScan")]),t._v(" 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。"),a("code",[t._v("@Bean")]),t._v(" 注解通常是我们在标有该注解的方法中定义产生这个 bean,"),a("code",[t._v("@Bean")]),t._v("告诉了 Spring 这是某个类的实例，当我需要用它的时候还给我。")]),t._v(" "),a("p",[a("code",[t._v("@Bean")]),t._v(" 注解比 "),a("code",[t._v("@Component")]),t._v(" 注解的自定义性更强，而且很多地方我们只能通过 "),a("code",[t._v("@Bean")]),t._v(" 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 "),a("code",[t._v("Spring")]),t._v("容器时，则只能通过 "),a("code",[t._v("@Bean")]),t._v("来实现。")]),t._v(" "),a("p",[a("code",[t._v("@Bean")]),t._v("注解使用示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransferService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransferServiceImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h1",{attrs:{id:"bean生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期"}},[t._v("#")]),t._v(" bean生命周期")]),t._v(" "),a("ul",[a("li",[t._v("Bean 容器找到配置文件中 Spring Bean 的定义。")]),t._v(" "),a("li",[t._v("Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。")]),t._v(" "),a("li",[t._v("如果涉及到一些属性值 利用 "),a("code",[t._v("set()")]),t._v("方法设置一些属性值。")]),t._v(" "),a("li",[t._v("如果 Bean 实现了 "),a("code",[t._v("BeanNameAware")]),t._v(" 接口，调用 "),a("code",[t._v("setBeanName()")]),t._v("方法，传入 Bean 的名字。")]),t._v(" "),a("li",[t._v("如果 Bean 实现了 "),a("code",[t._v("BeanClassLoaderAware")]),t._v(" 接口，调用 "),a("code",[t._v("setBeanClassLoader()")]),t._v("方法，传入 "),a("code",[t._v("ClassLoader")]),t._v("对象的实例。")]),t._v(" "),a("li",[t._v("如果 Bean 实现了 "),a("code",[t._v("BeanFactoryAware")]),t._v(" 接口，调用 "),a("code",[t._v("setBeanFactory()")]),t._v("方法，传入 "),a("code",[t._v("BeanFactory")]),t._v("对象的实例。")]),t._v(" "),a("li",[t._v("与上面的类似，如果实现了其他 "),a("code",[t._v("*.Aware")]),t._v("接口，就调用相应的方法。")]),t._v(" "),a("li",[t._v("如果有和加载这个 Bean 的 Spring 容器相关的 "),a("code",[t._v("BeanPostProcessor")]),t._v(" 对象，执行"),a("code",[t._v("postProcessBeforeInitialization()")]),t._v(" 方法")]),t._v(" "),a("li",[t._v("如果 Bean 实现了"),a("code",[t._v("InitializingBean")]),t._v("接口，执行"),a("code",[t._v("afterPropertiesSet()")]),t._v("方法。")]),t._v(" "),a("li",[t._v("如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。")]),t._v(" "),a("li",[t._v("如果有和加载这个 Bean 的 Spring 容器相关的 "),a("code",[t._v("BeanPostProcessor")]),t._v(" 对象，执行"),a("code",[t._v("postProcessAfterInitialization()")]),t._v(" 方法")]),t._v(" "),a("li",[t._v("当要销毁 Bean 的时候，如果 Bean 实现了 "),a("code",[t._v("DisposableBean")]),t._v(" 接口，执行 "),a("code",[t._v("destroy()")]),t._v(" 方法。")]),t._v(" "),a("li",[t._v("当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。")])]),t._v(" "),a("p",[t._v("图示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20230723084006749.png",alt:"image-20230723084006749"}})]),t._v(" "),a("p",[t._v("与之比较类似的中文版本:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/image-20230723084030363.png",alt:"image-20230723084030363"}})]),t._v(" "),a("p",[t._v("@PostConstruct和@PreDestroy")]),t._v(" "),a("h2",{attrs:{id:"实践-postconstruct和-predestroy替代方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践-postconstruct和-predestroy替代方案"}},[t._v("#")]),t._v(" 实践：@PostConstruct和@PreDestroy替代方案")]),t._v(" "),a("p",[a("code",[t._v("@PostConstruct")]),t._v("和"),a("code",[t._v("@PreDestroy")]),t._v(" 是两个作用于Servlet生命周期的注解。")]),t._v(" "),a("ol",[a("li",[a("strong",[a("code",[t._v("@PostConstruct")])]),t._v(" : 用来修饰方法，标记在项目启动的时候执行这个方法,一般用来执行某些初始化操作比如全局配置。"),a("code",[t._v("PostConstruct")]),t._v(" 注解的方法会在构造函数之后执行,Servlet 的"),a("code",[t._v("init()")]),t._v("方法之前执行。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("@PreDestroy")])]),t._v(" :  当 bean 被 Web 容器的时候被调用，一般用来释放 bean 所持有的资源。。"),a("code",[t._v("PostConstruct")]),t._v(" 注解的方法会在Servlet 的"),a("code",[t._v("destroy()")]),t._v("方法之前执行。")])]),t._v(" "),a("p",[t._v("使用Spring提供的InitializingBean和DisposableBean接口替代"),a("code",[t._v("@PostConstruct")]),t._v("和"),a("code",[t._v("@PreDestroy")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javaguide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DisposableBean")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializingBean")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConfiguration2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializingBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DisposableBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConfiguration2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"构造方法被调用"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterPropertiesSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"afterPropertiesSet方法被调用"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destroy方法被调用"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("h1",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary/#spring-bean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring常见问题总结 | JavaGuide"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/zrtqsk/p/3735273.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Bean的生命周期（非常详细） - Chandler Qian - 博客园"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1624592",target:"_blank",rel:"noopener noreferrer"}},[t._v("你会用@PostConstruct和@PreDestroy不？Java9+中的替代方案知道不？-腾讯云开发者社区-腾讯云"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);