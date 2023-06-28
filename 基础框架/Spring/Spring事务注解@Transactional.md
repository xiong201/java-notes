**异常处理流程**：程序抛出异常，程序不会向下执行，除非异常被`try...catch`。



Spring `@Transactional` 注解实现事务的原理是**动态代理**。调用顺序是开启事务，执行目标方法，提交或回滚事务。**如果类实现了接口，通过JDK创建代理对象，如果类没有实现接口，那么通过cgLib创建代理对象**。

所以业务方法如果使用 try catch  捕获了异常，那么事务就不会被正确回滚，除非在catch中继续抛出异常或者手动执行rollback

```java
TransactionInterceptor.currentTransactionStatus().setRollbackOnly();
```



`@Transactional` 注解默认的 `rollbackFor` 是运行时异常