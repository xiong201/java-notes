(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{382:function(e,a,t){"use strict";t.r(a);var s=t(7),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"为什么要重视命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要重视命名"}},[e._v("#")]),e._v(" 为什么要重视命名？")]),e._v(" "),a("p",[a("strong",[e._v("为什么命名很重要呢？")]),e._v(" 这是因为 "),a("strong",[e._v("好的命名即是注释，别人一看到你的命名就知道你的变量、方法或者类是做什么的！")])]),e._v(" "),a("p",[e._v("简单来说就是 "),a("strong",[e._v("别人根据你的命名就能知道你的代码要表达的意思")])]),e._v(" "),a("p",[e._v("《Clean Code》这本书明确指出：")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。")])]),e._v(" "),a("p",[a("strong",[e._v("若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。")])]),e._v(" "),a("p",[e._v("举个例子：")]),e._v(" "),a("p",[e._v("去掉下面复杂的注释，只需要创建一个与注释所言同一事物的函数即可")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// check to see if the employee is eligible for full benefits")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("HOURLY_FLAG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("应替换为")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isEligibleForFullBenefits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),a("h1",{attrs:{id:"常见命名规则以及适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见命名规则以及适用场景"}},[e._v("#")]),e._v(" 常见命名规则以及适用场景")]),e._v(" "),a("p",[e._v("这里只介绍 3 种最常见的命名规范。")]),e._v(" "),a("h2",{attrs:{id:"驼峰命名法-camelcase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驼峰命名法-camelcase"}},[e._v("#")]),e._v(" 驼峰命名法（CamelCase）")]),e._v(" "),a("p",[e._v("驼峰命名法应该我们最常见的一个，这种命名方式使用大小写混合的格式来区别各个单词，并且单词之间不使用空格隔开或者连接字符连接的命名方式")]),e._v(" "),a("h3",{attrs:{id:"大驼峰命名法-uppercamelcase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大驼峰命名法-uppercamelcase"}},[e._v("#")]),e._v(" 大驼峰命名法（UpperCamelCase）")]),e._v(" "),a("p",[a("strong",[e._v("类名需要使用大驼峰命名法（UpperCamelCase）")])]),e._v(" "),a("p",[e._v("正例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ServiceDiscovery、ServiceInstance、LruCacheFactory\n")])])]),a("p",[e._v("反例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("serviceDiscovery、Serviceinstance、LRUCacheFactory\n")])])]),a("h3",{attrs:{id:"小驼峰命名法-lowercamelcase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小驼峰命名法-lowercamelcase"}},[e._v("#")]),e._v(" 小驼峰命名法（lowerCamelCase）")]),e._v(" "),a("p",[a("strong",[e._v("方法名、参数名、成员变量、局部变量需要使用小驼峰命名法（lowerCamelCase）。")])]),e._v(" "),a("p",[e._v("正例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("getUserInfo()\ncreateCustomThreadPool()\nsetNameFormat(String nameFormat)\nUservice userService;\n")])])]),a("p",[e._v("反例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GetUserInfo()、CreateCustomThreadPool()、setNameFormat(String NameFormat)\nUservice user_service\n")])])]),a("h2",{attrs:{id:"蛇形命名法-snake-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#蛇形命名法-snake-case"}},[e._v("#")]),e._v(" 蛇形命名法（snake_case）")]),e._v(" "),a("p",[a("strong",[e._v("测试方法名、常量、枚举名称需要使用蛇形命名法（snake_case）")])]),e._v(" "),a("p",[e._v("在蛇形命名法中，各个单词之间通过下划线“_”连接，比如"),a("code",[e._v("should_get_200_status_code_when_request_is_valid")]),e._v("、"),a("code",[e._v("CLIENT_CONNECT_SERVER_FAILURE")]),e._v("。")]),e._v(" "),a("p",[e._v("蛇形命名法的优势是命名所需要的单词比较多的时候，比如我把上面的命名通过小驼峰命名法给大家看一下：“shouldGet200StatusCodeWhenRequestIsValid”。")]),e._v(" "),a("p",[e._v("感觉如何？ 相比于使用蛇形命名法（snake_case）来说是不是不那么易读？")]),e._v(" "),a("p",[e._v("正例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Test\nvoid should_get_200_status_code_when_request_is_valid() {\n  ......\n}\n")])])]),a("p",[e._v("反例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Test\nvoid shouldGet200StatusCodeWhenRequestIsValid() {\n  ......\n}\n")])])]),a("h2",{attrs:{id:"串式命名法-kebab-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#串式命名法-kebab-case"}},[e._v("#")]),e._v(" 串式命名法（kebab-case）")]),e._v(" "),a("p",[e._v("在串式命名法中，各个单词之间通过连接符“-”连接，比如"),a("code",[e._v("dubbo-registry")]),e._v("。")]),e._v(" "),a("p",[e._v("建议项目文件夹名称使用串式命名法（kebab-case）。")]),e._v(" "),a("h1",{attrs:{id:"常见命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见命名规范"}},[e._v("#")]),e._v(" 常见命名规范")]),e._v(" "),a("h2",{attrs:{id:"java-语言基本命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-语言基本命名规范"}},[e._v("#")]),e._v(" Java 语言基本命名规范")]),e._v(" "),a("p",[a("strong",[e._v("1、类名需要使用大驼峰命名法（UpperCamelCase）风格。方法名、参数名、成员变量、局部变量需要使用小驼峰命名法（lowerCamelCase）。")])]),e._v(" "),a("p",[a("strong",[e._v("2、测试方法名、常量、枚举名称需要使用蛇形命名法（snake_case）")]),e._v("，比如"),a("code",[e._v("should_get_200_status_code_when_request_is_valid")]),e._v("、"),a("code",[e._v("CLIENT_CONNECT_SERVER_FAILURE")]),e._v("。并且，"),a("strong",[e._v("测试方法名称要求全部小写，常量以及枚举名称需要全部大写。")])]),e._v(" "),a("p",[a("strong",[e._v("3、项目文件夹名称使用串式命名法（kebab-case），比如"),a("code",[e._v("dubbo-registry")]),e._v("。")])]),e._v(" "),a("p",[a("strong",[e._v('4、包名统一使用小写，尽量使用单个名词作为包名，各个单词通过 "." 分隔符连接，并且各个单词必须为单数。')])]),e._v(" "),a("p",[e._v("正例："),a("code",[e._v("org.apache.dubbo.common.threadlocal")])]),e._v(" "),a("p",[e._v("反例："),a("s",[a("code",[e._v("org.apache_dubbo.Common.threadLocals")])])]),e._v(" "),a("p",[a("strong",[e._v("5、抽象类命名使用 Abstract 开头")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//为远程传输部分抽象出来的一个抽象类（出处：Dubbo源码）\npublic abstract class AbstractClient extends AbstractEndpoint implements Client {\n\n}\n")])])]),a("p",[a("strong",[e._v("6、异常类命名使用 Exception 结尾。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//自定义的 NoSuchMethodException（出处：Dubbo源码）\npublic class NoSuchMethodException extends RuntimeException {\n    private static final long serialVersionUID = -2725364246023268766L;\n\n    public NoSuchMethodException() {\n        super();\n    }\n\n    public NoSuchMethodException(String msg) {\n        super(msg);\n    }\n}\n")])])]),a("p",[a("strong",[e._v("7、测试类命名以它要测试的类的名称开始，以 Test 结尾。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//为 AnnotationUtils 类写的测试类（出处：Dubbo源码）\npublic class AnnotationUtilsTest {\n  ......\n}\n")])])]),a("p",[e._v("POJO 类中布尔类型的变量，都不要加 is 前缀，否则部分框架解析会引起序列化错误。")]),e._v(" "),a("p",[e._v("如果模块、接口、类、方法使用了设计模式，在命名时需体现出具体模式。如模版方法模式以"),a("code",[e._v("Template")]),e._v("结尾。")]),e._v(" "),a("h2",{attrs:{id:"命名易读性规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名易读性规范"}},[e._v("#")]),e._v(" 命名易读性规范")]),e._v(" "),a("p",[a("strong",[e._v("1、为了能让命名更加易懂和易读，尽量不要缩写/简写单词，除非这些单词已经被公认可以被这样缩写/简写。比如 "),a("code",[e._v("CustomThreadFactory")]),e._v(" 不可以被写成 ~~"),a("code",[e._v("CustomTF")]),e._v(" 。")])]),e._v(" "),a("p",[a("strong",[e._v("2、命名不像函数一样要尽量追求短，可读性强的名字优先于简短的名字，虽然可读性强的名字会比较长一点。")]),e._v(" 这个对应我们上面说的第 1 点。")]),e._v(" "),a("p",[a("strong",[e._v("3、避免无意义的命名，你起的每一个名字都要能表明意思。")])]),e._v(" "),a("p",[e._v("正例："),a("code",[e._v("UserService userService;")]),e._v(" "),a("code",[e._v("int userCount")]),e._v(";")]),e._v(" "),a("p",[e._v("反例: "),a("s",[a("code",[e._v("UserService service")])]),e._v(" "),a("s",[a("code",[e._v("int count")])])]),e._v(" "),a("p",[a("strong",[e._v("4、避免命名过长（50 个字符以内最好），过长的命名难以阅读并且丑陋。")])]),e._v(" "),a("p",[a("strong",[e._v("5、不要使用拼音，更不要使用中文。")]),e._v(" 不过像 alibaba、wuhan、taobao 这种国际通用名词可以当做英文来看待。")]),e._v(" "),a("p",[e._v("正例：discount")]),e._v(" "),a("p",[e._v("反例："),a("s",[e._v("dazhe")])]),e._v(" "),a("p",[e._v("全面的命名规范可以参考 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247486449&idx=1&sn=c3b502529ff991c7180281bcc22877af&chksm=cea2443af9d5cd2c1c87049ed15ccf6f88275419c7dbe542406166a703b27d0f3ecf2af901f8&token=999884676&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("编码5分钟，命名2小时？史上最全的Java命名规范参考！"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h1",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" reference")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://javaguide.cn/system-design/basis/naming.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码命名指南 | JavaGuide(Java面试 学习指南)"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/scar1et/p/15177861.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("通用类命名规范 - 就永远夏天 - 博客园"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247486449&idx=1&sn=c3b502529ff991c7180281bcc22877af&chksm=cea2443af9d5cd2c1c87049ed15ccf6f88275419c7dbe542406166a703b27d0f3ecf2af901f8&token=999884676&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("编码5分钟，命名2小时？史上最全的Java命名规范参考！"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/q0yZPEcOhsNUqdYaBsLm8g",target:"_blank",rel:"noopener noreferrer"}},[e._v("编程中最难的就是命名？这几招教你快速上手"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/loaaKlE44P4VxMgLY3f2hw",target:"_blank",rel:"noopener noreferrer"}},[e._v("程序员“起名”头痛根治指南"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);