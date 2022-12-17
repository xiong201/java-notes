UML：统一建模语言。



#  UML2.2分类

UML2.2定义了14种图示，分类如下：

- **结构式图形**：强调的是系统式的建模。

- - 静态图（类图，对象图，包图）
  - 实现图（组件图，部署图）
  - 剖面图
  - 复合结构图

- **行为式图形**：强调系统模型中触发的事件。

- - 活动图
  - 状态图
  - 用例图

- **交互式图形**：属于行为式图形子集合，强调系统模型中资料流程。

- - 通信图
  - 交互概述图（UML2.0）
  - 时序图（UML2.0）
  - 时间图（UML2.0）



# UML类图

用于描述系统中的类（对象）本身的组成和类（对象）之间的各种静态关系。

类之间的关系：依赖、泛化（继承）、实现、关联、聚合与组合。

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1663221245786-beb921ac-581b-4d55-82c7-03c891af961c.png)

## 类（对象）的组成

### 类图

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1663221377741-b822918b-a05e-4cb1-b36d-b538534838ee.png)

- 第一层类名称，如果是抽象类，用斜体表示。
- 第二层类特性，表示字段或属性
- 第三层类操作，表示方法或行为
- +表示public, - 表示private, #表示protected，~表示default

### 接口图

第一种表示方式：

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1663221469105-07adffbf-05e0-40aa-ad55-730b0cf8b13d.png)

 顶端有<<interface>>，第一行接口名称，第二行接口方法 。

 第二种表示方法——**棒棒糖表示法**：  

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662525264258-74453850-a000-4524-8ca9-a16f88cd89a7.png)

 圆圈旁为接口名称，第二行为接口方法。  

## 类（对象）之间的静态关系

### 继承和实现

-  箭头方向：**子类指向父类**。
- **空心三角形+实线——继承，空心三角形+虚线——实现**。例如：大雁实现飞翔，唐老鸭继承鸭。

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662525059501-8ddb4b21-c984-474f-8e81-bbc8b8f24969.png)

### 关联和依赖

- **实线箭头——关联，虚线箭头——依赖**。一个类使用另一个类作为参数使用，这是依赖关系，一个类是另一个类的成员变量，这是关联关系。例如：企鹅关联气候，动物依赖氧气、水。

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662525315828-3c57fcd2-2144-40ab-aa81-58593c89d536.png)

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662525456436-d266c9e2-e75e-4ab1-a79b-8303321aefac.png)

### 聚合和组合

-  空心菱形——聚合。聚合关系时一种弱的‘拥有’关系，A对象可以包含B对象，B对象不是A对象的一部分，有不同的生命周期。
-  实心菱形——组合。合成（Compostion）是一种强的拥有关系，体现了严格的部分和整体的关系，部分和整体的生命周期一样。  

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662525490026-04d7a8c9-1c34-48b6-998b-521559b0b6d0.png)

![img](https://notes-img2022.oss-cn-shenzhen.aliyuncs.com/img/1662527280670-b843b8a7-6e5f-412d-b267-7a206fff3f55.png)

### 常见数字表达及含义

- 0..1：0或1个实例
- 0..*：0或多个实例
- 1..1：1个实例
- 1：只能有一个实例
- 1..*：至少有一个实例