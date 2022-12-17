**推荐使用 powercmd 替代原cmd**。







# 常见的基本命令

- @echo off：关闭之后所有命令的回显，不然bat文件中的每条指令会在cmd命令窗口显示。
- rem：注释，还有::也表示注释
- echo： 输出
- echo=：输出空白行 
-  call，调用另外一个bat脚本  

# 变量

## 变量声明

变量无须声明就可以引用，默认为全局变量，默认值为空字符串，并且大小写不敏感。

可通过**defined关键字**或者**是否为空字符串**判断变量是否为空，如下所示：

```java
@echo off
if not defined var2 (
	echo var2 is not defined
) else (
	echo var2 is defined
)
```

## 变量赋值

变量赋值等号前后不能有空格。

/a是表达式运算。/p是提示输入，并将输入的值赋给变量。set a= 可以清空变量。如下所示：

```java
@echo off
set var2=5
rem 表达式运算
set /a var2=2+7
rem 提示输入，将输入值赋值给变量
set /p var2=please input a number
rem 清空变量
set var2=
if not defined var2 (
	echo var2 is not defined,the value is:%var2%
) else (
	echo var2 is defined,the value is:%var2%
)
```



## 变量读取

通过%var%读取变量。

set：列出所有变量，包括系统环境变量PATH，TEMP等。

!var!：延迟读取变量值。

## 变量作用域

变量默认为全局变量（Global）。

可使用setlical命令将变量作用域设置为local。直到endlocal或exit命令，或者bat文件执行结束，变量作用域结束并恢复到Global作用域。例如：

1. bat文件声明一个local变量

```java
@echo off
setlocal
set v=Local Variable
echo v=%v%
```

1. 在cmd命令声明一个全局变量，然后执行上面的bat文件

```java
C:\Users\zzx\Desktop\bat>set v=Global Variable

C:\Users\zzx\Desktop\bat>var
v=Local Variable

C:\Users\zzx\Desktop\bat>echo v=%v%
v=Global Variable
```

cnd声明的全局变量在执行bat文件时改成了local变量，当bat文件执行完，有恢复成全局变量。

## 变量延迟





## 特殊变量





# 目录操作

- dir：显示目录中的文件与子目录列表
- mk,mkdir：创建目录
- rd,rmdir：删除目录
- pushd,popd：切换当前目录。pushd将目录存储到虚拟栈中,并切换到这个目录。pushd %~dp0,设置当前目录为脚本所在目录。popd命令将当前目录改成栈中最新的目录。