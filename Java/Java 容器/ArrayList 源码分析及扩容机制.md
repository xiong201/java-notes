



ArrayList类继承关系：

```java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```

- **RandomAccess**：RandomAccess接口是一个标记接口，用以标记实现的List集合具备**快速随机访问**的能力。当一个List拥有快速随机访问功能时，**其遍历方法采用for循环最快速**。而没有快速随机访问功能的List，遍历的时候采用Iterator迭代器最快速。
- Cloneable：支持克隆。
- **Serializable**：支持**序列化**。保存数据的数组被transient 标记的字段不会被序列化，所以肯定自己实现了系列化（writeObject和readObject方法）



ArrayList的**底层数据结构是数组**。数据存放在`Object[] elementData`这个数组;

```java
transient Object[] elementData;
```





# 扩容机制

ArrayList 在**初始化**时，如果没有指定容量大小。那么默认初始容量就是10。

```java
private static final int DEFAULT_CAPACITY = 10;
public ArrayList() {
	this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
```

在第一次添加元素时

```java
 public boolean add(E e) {
     ensureCapacityInternal(size + 1);  // Increments modCount!!
     elementData[size++] = e;
     return true;
}
```

ensureCapacityInternal方法里面进行扩容操作。

```java
 private void ensureCapacityInternal(int minCapacity) {
     ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
 }
```

calculateCapacity方法计算所需要的容量，ensureExplicitCapacity方法判断是否需要扩容及进行扩容操作。

当使用不指定容量的构造函数初始化，第一次执行calculateCapacity方法返回值就是DEFAULT_CAPACITY（也就是10）。

```java
private static int calculateCapacity(Object[] elementData, int minCapacity) {
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    return minCapacity;
}
```

当所需容量minCapacity大于elementData的长度时，就会调用grow方法执行扩容操作。

此时，elementData 数组长度为0,所以需要调用grow方法进行扩容。

```java
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;

    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}
```

grow方法会先计算要数组要扩容的容量，然后Arrays.copyOf方法将原先的数组数据浅拷贝到新的扩容数组里面。

数组要扩容的容量的计算主要有两个判断：

- 计算原先数组的容量，然后将这容量加上这个容量右移1位后的长度（近似1.5倍）。计算出的长度跟所需的最小容量进行比较，取两者最大值为newCapacity。
- 然后newCapacity如果大于MAX_ARRAY_SIZE，那就调用hugeCapacity方法获取最大容量。否则newCapacity值不变。
  - 如果所需的最小容量 minCapacity小于MAX_ARRAY_SIZE，那么newCapacity值为MAX_ARRAY_SIZE(Integer.MAX_VALUE - 8)。否则newCapacity值为Integer.MAX_VALUE（2^31-1）。

```java
private void grow(int minCapacity) {
        // overflow-conscious code
        int oldCapacity = elementData.length;
        int newCapacity = oldCapacity + (oldCapacity >> 1);
        if (newCapacity - minCapacity < 0)
            newCapacity = minCapacity;
        if (newCapacity - MAX_ARRAY_SIZE > 0)
            newCapacity = hugeCapacity(minCapacity);
        // minCapacity is usually close to size, so this is a win:
        elementData = Arrays.copyOf(elementData, newCapacity);
    }


private static int hugeCapacity(int minCapacity) {
        if (minCapacity < 0) // overflow
            throw new OutOfMemoryError();
        return (minCapacity > MAX_ARRAY_SIZE) ?
            Integer.MAX_VALUE :
            MAX_ARRAY_SIZE;
    }
```

