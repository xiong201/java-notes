## ider快捷键



```plain
Ctrl+Shift+N   查找文件
Ctrl+N   查找类
Ctrl+Shift+R         全局搜索
Ctrl+Shift+/   多行注释
Ctrl+/         单行注释
Ctrl+E         打开最近的文件
Ctrl+D 复制行
Ctrl+X 删除行
ALT+7           显示类视图，可以查看类所有的方法。
F2 定位到下一个错误代码位置
Ctrl+ALT+方向键 返回到上一次编辑文件代码位置

Ctrl + Alt + B  或者 ctrl + alt + 鼠标左键  在某个调用的方法名上使用会跳到具体的实现处，可以跳过接口
```



## ider debug



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151614.png)



\> Show Execution Point (Alt + F10)：如果你的光标在其它行或其它页面，点击这个按钮可跳转到当前代码执行的行。



\> Step Over (F8)：步过，一行一行地往下走，如果这一行上有方法不会进入方法。



\> Step Into (F7)：步入，如果当前行有方法，可以进入方法内部，一般用于进入自定义方法内，不会进入官方类库的方法，如第25行的put方法。



\> Force Step Into (Alt + Shift + F7)：强制步入，能进入任何方法，查看底层源码的时候可以用这个进入官方类库的方法。



\> Step Out (Shift + F8)：步出，从步入的方法内退出到方法调用处，此时方法已执行完毕，只是还没有完成赋值。



\> Drop Frame (默认无)：回退断点，后面章节详细说明。



\> Run to Cursor (Alt + F9)：运行到光标处，你可以将光标定位到你需要查看的那一行，然后使用这个功能，代码会运行至光标行，而不需要打断点。



\> Evaluate Expression (Alt + F8)：计算表达式，可以使用这个操作在调试过程中计算某个表达式的值，而不用再去打印信息



### **计算表达式**



在前面提到的计算表达式如图4.1的按钮，Evaluate Expression (Alt + F8) 。可以使用这个操作在调试过程中计算某个表达式的值，而不用再去打印信息。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151627.png)



1、按Alt + F8或按钮，或者，你可以选中某个表达式再Alt + F8，弹出计算表达式的窗口，如下，回车或点击Evaluate计算表达式的值。



这个表达式不仅可以是一般变量或参数，也可以是方法，当你的一行代码中调用了几个方法时，就可以通过这种方式查看查看某个方法的返回值。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151635.png)



[图4.2]



2、设置变量，在计算表达式的框里，可以改变变量的值，这样有时候就能很方便我们去调试各种值的情况了不是。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151642.png)



### 回退断点



在调试的时候，想要重新走一下流程而不用再次发起一个请求？



所谓的断点回退，其实就是回退到上一个方法调用的开始处，在IDEA里测试无法一行一行地回退或回到到上一个断点处，而是回到上一个方法。



回退的方式有两种，一种是Drop Frame按钮(图8.2)，按调用的方法逐步回退，包括三方类库的其它方法(取消Show All Frames按钮会显示三方类库的方法，如图8.3)。



第二种方式，在调用栈方法上选择要回退的方法，右键选择Drop Frame(图8.4)，回退到该方法的上一个方法调用处，此时再按F9(Resume Program)，可以看到程序进入到该方法的断点处了。



但有一点需要注意，**断点回退只能重新走一下流程，之前的某些参数/数据的状态已经改变了的是无法回退到之前的状态的，如对象、集合、更新了数据库数据等等**。



## ider Git操作



### 分支操作



#### 查看当前分支



当前分支是master 主分支



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921152424.png)



当前处在pos_web_update分支，不是主分支



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921152429.png)



#### 切换分支



当前所有可见的分支



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921152759.png)



如果本地没有要切换的分支。则需要点击远端的这个分支，将其拉取到本地



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921153019.png)



如果本地已经有这个分支了，直接Checkout切换即可



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921153053.png)



在切换分支时，如果在当前分支修改了代码，而且没有commit，切换到其他分支会弹出下面的窗口



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921153212.png)



弹框底部有Force Checkout  Don`t checkout  Smart Checkout三个选项



-  Smart  Checkout：**就会把冲突的这部分内容带到开发分支**（如果你没有点进窗口的那些文件处理冲突的话)。比如我在test分支修改到代码，要切换到master分支，点击smart checkout后，master分支会有test分支修改到的代码，最好是选smart  checkout这样会把本地修改的代码先保存到statsh中，再checkout分支。 

-  Force Checkout： **就不会把冲突的这部分内容带到开发分支**，如果点了force  checkout则**本地修改都会丢失**！ 

- - 正确操作是： 切换分支之前，应该先GIT --> Repository -->  Stash changes 保存该分支下的改动。 切换回来后，GIT --> Repository --> UnStash  changes 恢复之前的改动，

-  Don`t checkout：  不切分支,留在当前分支 



总结：**不要点击force checkout，如果不想当前分支修改到代码出现在要切换到分支中，需要手动Stash changes，如果允许当前分支修改到代码出现在要切换到分支中，可以选择smart checkout**



#### 合并分支



新功能开发完成，体验很好，项目组决定把该功能合并到主干上。



切换到master分支，选择Merge Changes



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921153304)



选择要合并的分支，点击Merge完成



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921153309)



在push下



#### 将某个分支的commit提交到另一个分支



要将某个分支的一个commit或者多个commit提交到另外一个分支，可以使用Cherry-Pick。在ider操作更为方便。



比如要将A分支上的commit提交到B分支。



使用步骤：



1.  本地分支切换到B分支。 

1.  查看A分支的提交记录，找到要提交的一个或者多个commit，右键Cherry-Pick。有冲忽解决冲忽。就在B分支的本地分支提交了选中的commit。![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220107150859022.png) 

1.  push到B分支的远程分支。 



### 撤回操作



#### 已经commit未push的操作



VSC => Git=> reset head



- 退回到上次commit



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151951.png)



-  退回到第二次提交之前
  ![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921151957.png) 

-  退回到指定commit版本 



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20210921152001.png)



### annotate显示代码编写者及时间



行号上右键，点击Annotate。即可查看



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002162509.png)



开启后，注释信息可以根据自己的需要进行展示。空白处右击->view。里面包含作者，提交时间，提交次数等



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002162731.png)





### ider git fetch+git merge

先将本地项目修改暂存起来。

- git fetch:拉取远程分支信息
- 比较当前本地分支和远程分支的差异
- git merge：将远程分支合并到本地分支



## ider 插件



### ider安装插件的两种方式



#### 在线安装



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002191032.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002191038.png)



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002191044.png)



#### 本地安装



idea使用Browser Repository安装插件有时因为网速等原因导致安装失败，这时要采用Install Plugins From Diak方式安装。



1. 查看ider版本号



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002192624.png)



1. 下载ider版本号对应的插件包（zip）



http://plugins.jetbrains.com/ 进入网站，搜索需要安装的插件。比如 Maven Helper。选择对应的版本进行下载



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002192631.png)



1. 进行本地安装



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002192637)



如果下载的插件与idea版本号不一致，后出现下面的错误



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002192642)



### ider常用插件



#### Maven Helper



Maven Helper安装后会提示重启，重启完以后打开pom文件在下方会有类似eclips的多选项卡，切换到dependency analyzer 选项卡即可。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211002193551.png)