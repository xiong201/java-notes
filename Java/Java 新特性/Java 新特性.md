# Java8新特性

## 接口的默认方法

Java8能够通过`default`关键字给接口添加默认方法。也称为虚拟扩展方法。

```java
package java8.defaultmethod;

public interface Formula {
    double calculate(int a);

    //接口默认方法
    default double sqrt(int a) {
        return Math.sqrt(a);
    }
}
```



## Lambda表达式

使用Lambda必须具有接口，并且接口中的抽象方法只有一个。

Java8之前排序字符串

```java
 List<String> names = Arrays.asList("peter", "anna", "mike", "xenia");
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });
```

Java8使用Lambda表达式排序字符串

```java
 Collections.sort(names, (String a, String b) -> {
            return a.compareTo(b);
        });
```

函数体只有一行代码的，可以去掉大括号和return关键字，变的更简洁

```java
 Collections.sort(names, (a, b) -> a.compareTo(b));
```



### 表达式作用域

#### 访问局部变量

lambda可以引用外部局部变量，但是引**用的变量不能再修改**（具有隐式final含义），不过引用的变量可以不声明final。

```java
int num = 1;
Coverter<Integer, String> stringCoverter = (form) -> String.valueOf(form + num);
//lambda表达式引用的变量不能再修改（具有隐式final含义），但是引用的变量可以不声明final
//        num = 3;
        
```

#### 访问成员变量和静态变量

lambda表达式可以读写成员变量和静态变量

```java
public class LambdaScope {
    static int outerStaticNum;
    int outerNum;

    void testScope() {
        //lambda表达式可以读写成员变量和静态变量
        Coverter<Integer, String> outerCoverter = (from) -> {
            outerNum = 21;
            outerStaticNum = 32;
            return String.valueOf(from);
        };
    }
}
```

#### 访问接口默认方法

lambda表达式无法访问接口默认方法。下面的代码无法编译。

```java
Formula formula = (a) -> sqrt(22);
```



## 函数式接口

为了使现有的函数友好支持Lambda表达式，增加函数式接口的概念。

**函数式接口是指仅仅包含一个抽象方法，但是可以有多个非抽象方法（也就是接口的默认方法）的接口**。这种接口可以被隐式的转换成lambda表达式。

Java8增加一个注解`@FunctionalInterface`声明是一个函数式接口，如果接口多于一个抽象方法，编译器就会报错。但是这个注解不是必须的，只要接口只包含一个抽象方法，虚拟机会自动判断该接口的为函数式接口。

示例：

```java
/**
 * @FunctionalInterface声明是一个函数式接口，如果接口多于一个抽象方法，这个注解就会报错
 */
@FunctionalInterface
public interface Coverter<F, T> {
    T convert(F f);
}
Coverter<String, Integer> coverter = (s) -> Integer.valueOf(s);
Integer convert = coverter.convert("33");
System.out.println(convert.getClass());
```

大部分函数式接口都不用自己写，Java8都实现好了，这些接口都放在java.util.function包里。

注意： 如果一个接口中声明的抽象方法是**重写了超类Object类中任意一个public方法，那么这些抽象方法并不会算入接口的抽象方法数量中**。因为任何接口的实现都会从其父类Object或其它地方获得这些方法的实现。  比如Comparator接口有两个抽象方法，但是 equals并不算入抽象方法数量。

### 内置函数式接口

#### Predicate 

Predicate接口是只有一个参数返回布尔类型值的断言型接口。该接口包含多种默认方法将Predicate组合成其他复杂的逻辑（比如：与、或、非）

```java
Predicate<String> predicate = (s) -> s.length() > 0;
boolean testResult;
testResult = predicate.test("word"); //true
testResult = predicate.negate().test("word"); //false
System.out.println(testResult);

Predicate<String> isEmpty = String::isEmpty;
testResult = isEmpty.test(""); //true
System.out.println(testResult);

Predicate<String> isNotEmpty = isEmpty.negate();
testResult = isNotEmpty.test(""); //false
System.out.println(testResult);
```

#### Function 

Function 接口接收一个参数生成结果。默认方法（compose, andThen）可以将多个函数链接到一起。

```java
Function<String, Integer> toInteger = Integer::valueOf;
Function<String, String> backToString = toInteger.andThen(String::valueOf);
String applyStr = backToString.apply("23");
System.out.println(applyStr.getClass()); //class java.lang.String
```

#### Supplier 

Supplier 接口产生给点泛型类型的结果，不接受任何参数

```java
Supplier<Person> personSupplier = Person::new;
Person person = personSupplier.get();
System.out.println(person); //Person{name='null', nike='null'}
```

#### Consumer

Consumer 接口表示要对单个输入参数执行的操作

```java
Consumer<Person> personConsumer = (p) -> System.out.println(p.nike);
personConsumer.accept(new Person("张三", "zhangsan")); //zhangsan
```

#### Comparator 

Comparator 是老Java的经典接口，Java8添加了多种默认方法

```java
Comparator<Person> personComparator = (p1, p2) -> p1.name.compareTo(p2.name);
Person p1 = new Person("John", "Doe");
Person p2 = new Person("Alice", "Wonderland");
System.out.println(personComparator.compare(p1, p2)); //9
System.out.println(personComparator.reversed().compare(p1, p2)); //-9
```



## 方法和构造函数引用

Java8支持通过`::`关键字传递方法或构造函数的引用。

静态方法的引用：

```java
Coverter<String, Integer> coverter = Integer::valueOf;
Integer convert = coverter.convert("22");
System.out.println(convert.getClass());
```

对象方法引用：

```java
package java8.references;

public class SomeThing {
    String startWith(String s) {
        return String.valueOf(s.charAt(0));
    }
}
SomeThing someThing = new SomeThing();
Coverter<String, String> coverterStr = someThing::startWith;
String firstChar = coverterStr.convert("lucky");
System.out.println(firstChar);
```

构造方法的引用：定义一个多构造方法的类

```java
package java8.references;

public class Person {
    String name;
    String nike;

    public Person() {
    }

    public Person(String name, String nike) {
        this.name = name;
        this.nike = nike;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", nike='" + nike + '\'' +
                '}';
    }
}
```

定义一个创建Person对象的工厂接口

```java
public interface PersonFactory<P extends Person> {
    P create(String name, String nike);
}
```

通过`Person::new`将构造方法引用传给PersonFactory。Java编译器会自动根据create传递参数个数选择合适的构造方法。

```java
PersonFactory<Person> personPersonFactory = Person::new;
Person person = personPersonFactory.create("张", "三");
System.out.println(person);
```



## Optional

 Optional 是用来防止NullPointerException 的漂亮工具。 Optional 是一个简单的容器，其值可能是null或者不是null。在Java8应该返回Optional 而不是null。

```java
//为非空的值创建一个Optional
Optional<String> optional = Optional.of("bdm");
//如果值存在返回ture，否则返回false
boolean present = optional.isPresent(); //true
//如果有值将值返回，否则抛出NoSuchElementException异常
String bdm = optional.get(); //bdm
//如果有值将值返回，否则返回指定的其它值
String orElseVal = optional.orElse("empty"); //bdm
//如果Optional实例有值则为其调用consumer，否则不做处理
optional.ifPresent((t) -> System.out.println("ifPresent:" + t)); //ifPresent:bdm
```

## Stream

java.util.Stream 表示能应用在一组元素上一次执行的操作序列。Stream 操作分为中间操作或者最终操作两种，最终操作返回一特定类型的计算结果，而中间操作返回Stream本身，这样你就可以将多个操作依次串起来。Stream 的创建需要指定一个数据源，比如 java.util.Collection 的子类，List 或者 Set， Map 不支持。Stream 的操作可以串行执行或者并行执行。  

Java 8扩展了集合类，可以通过 Collection.stream() 或者 Collection.parallelStream() 来创建一个Stream。  

下面介绍Stream 常用方法，先准备数据

```java
List<String> stringList = new ArrayList<>();
stringList.add("ddd2");
stringList.add("aaa2");
stringList.add("bbb1");
stringList.add("aaa1");
stringList.add("bbb3");
stringList.add("ccc");
stringList.add("bbb2");
stringList.add("ddd1");
```



### Filter(过滤)

 过滤通过一个predicate接口来过滤并只保留符合条件的元素，该操作属于**中间操作**，所以我们可以在过滤后的结果来应用其他Stream操作（比如forEach）。forEach需要一个函数来对过滤后的元素依次执行。forEach是一个最终操作，所以我们不能在forEach之后来执行其他Stream操作。  

```java
stringList.stream().filter(s -> s.startsWith("a")).forEach(s -> System.out.println(s));
```

### Sorted(排序)

sorted（排序 ）是个中间操作，如果没有指定自定义Comparator的话，会使用默认排序。 排序之后原有的数据源不会改变。

```java
 //sorted 排序 中间操作 如果没有指定Comparator的话，会使用默认排序 排序之后stringList不会改变
stringList.stream().sorted().forEach(s -> System.out.println(s));
```

多字段排序：

```java
//对象集合以类属性一降序 属性二升序
list.stream().sorted(Comparator.comparing(类::属性一,Comparator.reverseOrder()).thenComparing(类::属性二));

```

区分：

```java
//方式一：先以属性一升序，再属性一降序排序
Comparator.comparing(类::属性一).reversed();
//方式二：直接将属性一降序排序
Comparator.comparing(类::属性一,Comparator.reverseOrder());
```



### groupingBy（分组）

根据菜单类型进行分组

```java
menu.stream().collect(Collectors.groupingBy(Menu::getMenuType, Collectors.toList()));
```



### Map(映射)

map是个中间操作，会将元素根据指定的 Function 接口依次将元素转成另外的对象。 返回的Stream类型是根据map传递进去的函数的返回值决定的。

```java
stringList.stream().map(String::toUpperCase).forEach(item -> System.out.println(item));
```

  

### Match(匹配)

所有匹配操作都是最终操作。Stream提供了多种匹配操作，允许检测指定的Predicate是否匹配整个Stream，并返回一个 boolean 类型的值。

```java
boolean matchResult;
matchResult = stringList.stream().anyMatch(s -> s.startsWith("a")); //true
matchResult = stringList.stream().allMatch(s -> s.startsWith("a")); //false
matchResult = stringList.stream().noneMatch(s -> s.startsWith("a")); //false
```

### Count(计数)

计数是一个 **最终操作**，返回Stream中元素的个数，**返回值类型是 long**。

```java
long count = stringList.stream().count(); //8
```

### Reduce(规约)

这是一个 **最终操作** ，允许通过指定的函数来将stream中的多个元素规约为一个元素，规约后的结果是通过Optional 接口表示的。

```java
Optional<String> reduce = stringList.stream().reduce((s1, s2) -> s1 + "#" + s2); //ddd2#aaa2#bbb1#aaa1#bbb3#ccc#bbb2#ddd1
reduce.ifPresent(System.out::println);

String concatReduce = Stream.of("A", "B", "C", "D").reduce("", (s1, s2) -> s1.concat(s2)); //ABCD
// 求最小值，minValue = -3.0
double minValue = Stream.of(-1.5, 1.0, -3.0, -2.0).reduce(Double.MAX_VALUE, Double::min);
// 求和，sumValue = 10, 有起始值
int sumValue = Stream.of(1, 2, 3, 4).reduce(0, Integer::sum);
// 求和，sumValue = 10, 无起始值
sumValue = Stream.of(1, 2, 3, 4).reduce(Integer::sum).get();

reduce = Stream.of("a", "B", "c", "D", "e", "F").filter(s -> s.compareTo("Z") > 0).reduce((s1, s2) -> s1.concat(s2)); //ace
reduce.ifPresent(System.out::println);
```

## Parallel Streams(并行流)

 Stream有串行和并行两种，串行Stream上的操作是在一个线程中依次完成，而并行Stream则是在多个线程上同时执行。  

首先我们创建一个没有重复元素的大表：

```java
int max = 10000;
List<String> values = new ArrayList<>(max);
for (int i = 0; i < max; i++) {
    UUID uuid = UUID.randomUUID();
    values.add(uuid.toString());
}
```

首先使用串行流排序

```java
long t0 = System.nanoTime();
long count = values.stream().sorted().count();
System.out.println(count);
long t1 = System.nanoTime();
long millis = TimeUnit.NANOSECONDS.toMillis(t1 - t0);
System.out.println(String.format("sequential sort took: %d ms", millis)); //84 ms
```

然后使用并行流排序

```java
t0 = System.nanoTime();
count = values.parallelStream().sorted().count();
System.out.println(count);
t1 = System.nanoTime();
millis = TimeUnit.NANOSECONDS.toMillis(t1 - t0);
System.out.println(String.format("sequential sort took: %d ms", millis)); //44 ms
```

并行流快了50%，只要将stream改成parallelStream即可。

## Maps

Maps不支持stream，不过`map.keySet().stream(),map.values().stream()`和`map.entrySet().stream()`可以转换成stream。

Java8中Maps还提供新的方法处理日常任务。

### putIfAbsent

putIfAbsent在放入数据时，如果存在重复的key，那么putIfAbsent不会放入值。

```java
Map<Integer, String> map = new HashMap();
map.put(1, "zhagnsan");
map.put(2, "lisi");
map.keySet().stream();
map.values().stream();
map.entrySet().stream();


//putIfAbsent在放入数据时，如果存在重复的key，那么putIfAbsent不会放入值。
map.putIfAbsent(2, "wangwu");
System.out.println(map.get(2)); //lisi

//如果放入数据的key已经存在与Map中，最后放入的数据会覆盖之前存在的数据
map.put(2, "wangwu");
System.out.println(map.get(2)); //wangwu
```



### computeIfAbsent和computeIfPresent

数据准备：

```java
Map<Integer, String> map = new HashMap<>();
for (int i = 0; i < 10; i++) {
    map.put(i, "val" + i);
}
map.forEach((key, value) -> System.out.print(value + " ")); //val0 val1 val2 val3 val4 val5 val6 val7 val8 val9
```

`computeIfAbsent`：根据key找value，如果返回值为null，则执行第二个参数的方法体，将方法体的值返回并存到map。

```java
map.computeIfAbsent(3, val -> "bdm" + val); //val3
map.computeIfAbsent(23, val -> "bdm" + val); //bdm23
```

`computeIfPresent`：根据key找value，如果找到对应value，就将值传到第二个参数方法体执行，将方法体的值返回并存到map。如果找不到对应的value，就不执行方法体。

```java
map.computeIfPresent(3, (k, v) -> v + "aa"); //val3aa
System.out.println(map.get(3));
map.computeIfPresent(23, (k, v) -> v + "aa"); //null
System.out.println(map.get(23));
```

### remove

在map删除键值都配置的项。

```java
map.remove(3, "val33");
map.get(3) //val3
map.remove(3, "val3");
map.get(3) //null
```

### getOrDefault

通过key获取value，如果获取的value值为null，就将第二个参数的值返回。

```java
map.getOrDefault(42, "not found")//not found
```

### merge

Merge 做的事情是如果键名不存在则插入，否则对原键对应的值做合并操作并重新插入到map中。

```java
map.merge(9, "aa", (val, newVal) -> val.concat(newVal));
map.get(9); //val9aa
map.merge(10, "bb", (val, newVal) -> val.concat(newVal));
map.get(10); //bb
```