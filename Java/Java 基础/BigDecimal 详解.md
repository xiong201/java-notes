**使用`BigDecimal`进行浮点数的运算，避免精度丢失**。

通常情况下，大部分需要浮点数精确运算结果的业务场景（比如涉及到钱的场景）都是通过`BigDecimal`来做的。



# BigDecimal 常见方法



## 创建



为了防止精度丢失，使用`BigDecimal(String)`构造方法或者`BigDecimal valueOf(double val)` 静态方法来创建`BigDecimal` 对象。

> 【强制】禁止使用构造方法 BigDecimal(double)的方式把 double 值转化为 BigDecimal 对象。 说明：BigDecimal(double)存在精度损失风险，在精确计算或值比较的场景中可能会导致业务逻辑异常。 如：BigDecimal g = new BigDecimal(0.1F); 实际的存储值为：0.10000000149



## 加减乘除

```java
//两个BigDecimal对象相加
public BigDecimal add(BigDecimal augend)
//两个BigDecimal对象相减
public BigDecimal subtract(BigDecimal subtrahend)
//两个BigDecimal对象相乘
public BigDecimal multiply(BigDecimal multiplicand)
//两个BigDecimal对象相除（使用3个参数版本，scale表示保留几位小数，roundingMode 代表保留规则）。roundingMode值为BigDecimal.ROUND_HALF_UP表示四舍五入
public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)
```



## 保留几位小数



```java
public BigDecimal setScale(int newScale, int roundingMode)
```

- newScale：保留几位小数
- roundingMode：保留规则。`BigDecimal.ROUND_HALF_UP`为四舍五入





## 大小比较

```java
public int compareTo(BigDecimal val)
```

使用`a.compareTo(b)`进行大小比较：

- -1：a 小于 b
- 0：a 等于 b
- 1：a 大于 b



> 【强制】BigDecimal 的等值比较应使用 compareTo()方法，而不是 equals()方法。 说明：equals()方法会比较值和精度（1.0 与 1.00 返回结果为 false），而 compareTo()则会忽略精度。

