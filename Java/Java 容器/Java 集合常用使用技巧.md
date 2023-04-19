# java.util包

## Arrays

Arrays.asList()：适合用于创建固定的List。确保不对这List进行size的修改，但是可以对里面单个索引下的值进行修改。





## Collections

Collections.emptyList()：当if或者else逻辑需要返回空List时使用



## ArrayList

ArrayList使用clear()方法可以直接复用无需再次扩容。





## HashMap



可以通过HashMap的put方法的返回值，进行一个是否有数值覆盖的判断。

有些业务场景需要保证key为唯一的。这时我们使用put方法添加数据，如果有返回值的话，就说明业务的key不唯一，可以根据业务需求，直接抛出异常。

如果需要原先的旧值，put返回就是旧值，可以直接set回去，数据不会丢失。





HashMap如果需要批处理大量数据，可以分批处理，处理完一个一批后，使用clear()方法清除数据，再装载下一批数据进行处理，这样只要扩容一次。

