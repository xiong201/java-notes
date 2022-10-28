# 1.Docker基础



## 1.1 Docker简介



- Docker 是世界领先的软件容器平台，基于 **Go 语言** 进行开发实现。

- Docker 能够自动执行重复性任务，例如搭建和配置开发环境，从而解放开发人员。

- 用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。

- Docker 可以**对进程进行封装隔离，属于操作系统层面的虚拟化技术。** 由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。



官网地址：https://www.docker.com/ 。



## 1.2 Docker安装



### 1.2.1 Windows安装



访问 Docker 的官网：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151600.png)



然后点击`Get Started`：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151606.png)



在此处点击`Download for Windows`即可进行下载。



如果你的电脑是`Windows 10 64位专业版`的操作系统，则在安装 Docker 之前需要开启一下`Hyper-V`，开启方式如下。打开控制面板，选择程序：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151610.png)



点击`启用或关闭Windows功能`：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151614.png)



勾选上`Hyper-V`，点击确定即可：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151617.png)



完成更改后需要重启一下计算机。



开启了`Hyper-V`后，我们就可以对 Docker 进行安装了，打开安装程序后，等待片刻点击`Ok`即可：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151621.png)



安装完成后，我们仍然需要重启计算机，重启后，若提示如下内容：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004151624.png)



它的意思是询问我们是否使用 WSL2，这是基于 Windows 的一个 Linux 子系统，这里我们取消即可，它就会使用我们之前勾选的`Hyper-V`虚拟机。



安装的Docker Desktop是图形界面。



### 1.2.2 Linux安装



使用的Linux系统时Centos7，Centos7的yum源有docker。



安装docker：`yum install -y docker`



查看docker版本：`docker version`



启动docker服务：`service docker start`



docker开机启动：`chkconfig docker on`



### 1.2.3 配置镜像加速器



从[docker hub](https://hub.docker.com/)下载镜像的过程是非常慢的，所以我们需要配置一下镜像源加速下载，访问`阿里云`官网：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004142919.png)



点击控制台：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004142925.png)



然后点击左上角的菜单，在弹窗的窗口中，将鼠标悬停在产品与服务上，并在右侧搜索容器镜像服务，最后点击容器镜像服务：



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/20211004143352.png)



加速器地址



```shell
{
  "registry-mirrors": ["https://wo41amkm.mirror.aliyuncs.com"]
}
```



## 1.3 docker架构

| Images    | Docker  镜像，用于创建 Docker  容器的模板。                  |
| --------- | ------------------------------------------------------------ |
| Container | Docker  容器，独立运行的一个或一组应用。                     |
| Client    | Docker  客户端，使用 Docker  Api与 Docker  的守护进程通信。  |
| Host      | Docker  主机，一个物理或者虚拟的机器  用于执行 Docker  守护进程和容器。 |
| Registry  | Docker  仓库，用来保存镜像。一个 Docker Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。 |
| Machine   | 一个简化Docker安装的命令行工具，  比如VirtualBox、  Digital Ocean、Microsoft Azure。 |



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220305093536923.png)



## 1.4 docker核心概念



### 1.4.1 镜像（Image）



镜像就是一个只读的模板，镜像可以用来创建 Docker 容器，一个镜像可以创建多个容器



### 1.4.2 容器（Container）



容器是用镜像创建的运行实例，Docker 利用容器独立运行一个或一组应用。它可以被启动、开始、停止、删除，每个容器都是相互隔离的、保证安全的平台。 可以把容器看作是一个简易的  Linux 环境和运行在其中的应用程序。容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的



### 1.4.3 仓库（Repository）



仓库是集中存放镜像文件的场所。仓库和仓库注册服务器是有区别的，仓库注册服务器上往往存放着多个仓库，每个仓库中又包含了多个镜像，每个镜像有不同的标签。 仓库分为公开仓库和私有仓库两种形式，最大的公开仓库是 DockerHub，存放了数量庞大的镜像供用户下载，国内的公开仓库有阿里云、网易云等



### 1.4.4 总结



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220305094104813.png)



通俗点说，一个镜像就代表一个软件；而基于某个镜像运行就是生成一个程序实例，这个程序实例就是容器；而仓库是用来存储 Docker 中所有镜像的。



其中仓库又分为远程仓库和本地仓库，和 Maven 类似，倘若每次都从远程下载依赖，则会大大降低效率，为此，Maven  的策略是第一次访问依赖时，将其下载到本地仓库，第二次、第三次使用时直接用本地仓库的依赖即可，Docker 的远程仓库和本地仓库的作用也是类似的。



## 1.5 Docker命令



### 1.5.1 进程相关



-  启动docker服务：`systemctl start docker` 

-  停止docker服务：`systemctl stop docker` 

-  重启docker服务：`systemctl restart docker` 

-  查看docker服务状态：`systemctl status docker` 

-  设置开机启动docker服务：`systemctl enable docker` 



### 1.5.2 镜像操作



- 查看镜像：查看本地所有的镜像



```plain
docker images
docker images -q #查看所有镜像的id
```



-  搜索镜像：从网络中查找需要的镜像 

```plain
docker search 镜像名称
```

 

-  拉取镜像:从Docker仓库下载镜像到本地，镜像名称格式为 名称:版本号，如果版本号不指定则是最新的版本。 如果不知道镜像版本，可以去docker hub 搜索对应镜像查看。 

```plain
docker pull 镜像名称
```

 

-  删除本地镜像： 

```plain
docker rmi 镜像id # 删除指定本地镜像
docker rmi `docker images -q`  # 删除所有本地镜像
```

 



### 1.5.3  容器操作



-  查看容器 

```plain
docker ps # 查看正在运行的容器
docker ps –a # 查看所有容器
```

 

-  创建并启动容器 

```plain
docker run 参数 Image
参数说明：
-i：保持容器运行。通常与 -t 同时使用。加入it这两个参数后，容器创建后自动进入容器中，退出容器后，容器自动关闭。
-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用。
-d：以守护（后台）模式运行容器。创建一个容器在后台运行，需要使用docker exec 进入容器。退出后，容器不会关闭。
-it 创建的容器一般称为交互式容器，-id 创建的容器一般称为守护式容器
--name：为创建的容器命名。
```

 

-  进入容器：docker exec 参数  容器名称 

```plain
docker exec -it  容器名 /bin/bash
```

-  退出容器：exit
-  停止容器 

```plain
docker stop 容器名称
```

 

-  启动容器：`docker start 容器名称` 

-  重启容器：`docker restart 容器名称` 

-  杀掉运行中的容器：`docker kill 容器名称` 

-  删除容器：`docker rm 容器名称` 

-  查看容器信息：`docker inspect 容器名称` 

-  暂停/恢复容器中的进程：`docker pause/unpause 容器名` 

-  查看容器日志：`docker logs 容器名称` 

-  容器和主机直接数据拷贝：`docker cp` 

-  容器转镜像 

```plain
docker commit 容器id 镜像名称:版本号
docker save -o 压缩文件名称 镜像名称:版本号
docker load –i 压缩文件名称
```

 



## 1.6 docker容器的数据卷



### 1.6.1 数据卷概念



- 数据卷是宿主机中的一个目录或文件

- 当容器目录和数据卷目录绑定后，对方的修改会立即同步

- 一个数据卷可以被多个容器同时挂载

- 一个容器也可以被挂载多个数据卷



### 1.6.2 数据卷作用



- 容器数据持久化

- 外部机器与容器间接通信

- 容器之间数据交换



### 1.6.3 配置数据卷



创建启动容器时，使用-v 参数设置数据卷



```plain
docker run ... -v 宿主机目录(文件):容器内目录(文件) ...
```



- 目录必须是绝对路径

- 如果目录不存在，会自动创建

- 可以挂载多个数据卷



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220306144340368.png)



### 1.6.4 数据卷容器



多容器进行数据交换，如果多个容器一个个挂载同一个数据卷，这样操作不是很方便。



可以通过继承数据卷容器方式，简单的给多个容器挂载同一个数据卷上。



具体做法：



-  创建一个容器，挂载一个目录，这个容器就是数据卷容器。 

-  然后其他容器继承( --volume-from )这个数据卷容器，通过这种方式可以方便的给其他容器配置同样的数据卷。 



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220306144456427.png)



#### 1.6.4.1 配置数据卷容器



1.  创建数据卷容器 

```plain
docker run –it --name=c3 –v /volume centos:7
```

 

1.  创建其他容器，使用 –-volumes-from 参数 设置数据卷 



```plain
docker run –it --name=c1 --volumes-from c3 centos:7 

docker run –it --name=c2 --volumes-from c3 centos:7
```



## 1.7 docker 应用部署



### 1.7.1 部署MySQL



1. 搜索mysql镜像



```shell
docker search mysql
```



1. 拉取mysql镜像



```shell
docker pull mysql:5.6
```



1. 创建容器，设置端口映射、目录映射



```shell
# 在/root目录下创建mysql目录用于存储mysql数据信息
mkdir ~/mysql
cd ~/mysql
```



```shell
docker run -id \
-p 3307:3306 \
--name=c_mysql \
-v $PWD/conf:/etc/mysql/conf.d \
-v $PWD/logs:/logs \
-v $PWD/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.6
```



- 参数说明： 

- - **-p 3307:3306**：将容器的 3306 端口映射到宿主机的 3307 端口。

- - **-v $PWD/conf:/etc/mysql/conf.d**：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。配置目录

- - **-v $PWD/logs:/logs**：将主机当前目录下的 logs 目录挂载到容器的 /logs。日志目录

- - **-v $PWD/data:/var/lib/mysql** ：将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。数据目录

- - **-e MYSQL_ROOT_PASSWORD=123456：**初始化 root 用户的密码。



1. 进入容器，操作mysql



```shell
docker exec –it c_mysql /bin/bash
```



1. 使用外部机器连接容器中的mysql



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/1573636765632.png)



### 1.7.2 部署Tomcat



1. 搜索tomcat镜像



```shell
docker search tomcat
```



1. 拉取tomcat镜像



```shell
docker pull tomcat
```



1. 创建容器，设置端口映射、目录映射



```shell
# 在/root目录下创建tomcat目录用于存储tomcat数据信息
mkdir ~/tomcat
cd ~/tomcat
```



```shell
docker run -id --name=c_tomcat \
-p 8080:8080 \
-v $PWD:/usr/local/tomcat/webapps \
tomcat
```



-  参数说明： 

- -  **-p 8080:8080：**将容器的8080端口映射到主机的8080端口
    **-v $PWD:/usr/local/tomcat/webapps：**将主机中当前目录挂载到容器的webapps 



1. 使用外部机器访问tomcat



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/1573649804623.png)



### 1.7.3 部署Nginx



1. 搜索nginx镜像



```shell
docker search nginx
```



1. 拉取nginx镜像



```shell
docker pull nginx
```



1. 创建容器，设置端口映射、目录映射



```shell
# 在/root目录下创建nginx目录用于存储nginx数据信息
mkdir ~/nginx
cd ~/nginx
mkdir conf
cd conf
# 在~/nginx/conf/下创建nginx.conf文件,粘贴下面内容
vim nginx.conf
```



```shell
user  root;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```



```shell
docker run -id --name=c_nginx \
-p 80:80 \
-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf \
-v $PWD/logs:/var/log/nginx \
-v $PWD/html:/usr/share/nginx/html \
nginx
```



- 参数说明： 

- - **-p 80:80**：将容器的 80端口映射到宿主机的 80 端口。

- - **-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf**：将主机当前目录下的 /conf/nginx.conf 挂载到容器的 :/etc/nginx/nginx.conf。配置目录

- - **-v $PWD/logs:/var/log/nginx**：将主机当前目录下的 logs 目录挂载到容器的/var/log/nginx。日志目录



1. 使用外部机器访问nginx



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/1573652396669.png)



## 1.8 Dockerfile



### 1.8.1 Docker镜像原理



**Linux文件系统由bootfs和rootfs两部分组成**



-  bootfs：包含bootloader（引导加载程序）和 kernel（内核） 

-  rootfs： root文件系统，包含的就是典型 Linux 系统中的/dev，/proc，/bin，/etc等标准目录和文件 



不同的linux发行版，bootfs基本一样，而rootfs不同，如ubuntu，centos等。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220306175044830.png)



**Docker镜像本质就是分层的文件系统**：



-  Docker镜像是由特殊的文件系统叠加而成 

-  最底端是 bootfs，并使用宿主机的bootfs 

-  第二层是 root文件系统rootfs,称为base image 

-  然后再往上可以叠加其他的镜像文件 

-  统一文件系统（Union File System）技术能够将不同的层整合成一个文件系统，为这些层提供了一个统一的视角，这样就隐藏了多层的存在，在用户的角度看来，只存在一个文件系统。 

-  一个镜像可以放在另一个镜像的上面。位于下面的镜像称为父镜像，最底部的镜像成为基础镜像。 

-  当从一个镜像启动容器时，Docker会在最顶层加载一个读写文件系统作为容器 



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220306175227723.png)



### 1.8.2 Dockerfile概念及作用



-  Dockerfile 是一个文本文件 

-  包含了一条条的指令 

-  每一条指令构建一层，基于基础镜像，最终构建出一个新的镜像 

-  对于开发人员：可以为开发团队提供一个完全一致的开发环境 

-  对于测试人员：可以直接拿开发时所构建的镜像或者通过Dockerfile文件构建一个新的镜像开始工作了 

-  对于运维人员：在部署时，可以实现应用的无缝移植 



Dochub网址：[https://hub.docker.com](https://hub.docker.com/)



Dockerfile构建镜像命令：`docker bulid –f dockerfile文件路径 –t 镜像名称:版本`。



例如：`docker build -f ./my-centos-dockerfile -t my-centos:1.0`



### 1.8.3 Dockerfile关键字

| 关键字      | 作用                     | 备注                                                         |
| ----------- | ------------------------ | ------------------------------------------------------------ |
| FROM        | 指定父镜像               | 指定dockerfile基于那个image构建                              |
| MAINTAINER  | 作者信息                 | 用来标明这个dockerfile谁写的                                 |
| LABEL       | 标签                     | 用来标明dockerfile的标签 可以使用Label代替Maintainer 最终都是在docker image基本信息中可以查看 |
| RUN         | 执行命令                 | 执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN ["command" , "param1","param2"] |
| CMD         | 容器启动命令             | 提供启动容器时候的默认命令 和ENTRYPOINT配合使用.格式 CMD command param1 param2 或者 CMD ["command" , "param1","param2"] |
| ENTRYPOINT  | 入口                     | 一般在制作一些执行就关闭的容器中会使用                       |
| COPY        | 复制文件                 | build的时候复制文件到image中                                 |
| ADD         | 添加文件                 | build的时候添加文件到image中 不仅仅局限于当前build上下文 可以来源于远程服务 |
| ENV         | 环境变量                 | 指定build时候的环境变量 可以在启动的容器的时候 通过-e覆盖 格式ENV name=value |
| ARG         | 构建参数                 | 构建参数 只在构建的时候使用的参数 如果有ENV 那么ENV的相同名字的值始终覆盖arg的参数 |
| VOLUME      | 定义外部可以挂载的数据卷 | 指定build的image那些目录可以启动的时候挂载到文件系统中 启动容器的时候使用 -v 绑定 格式 VOLUME ["目录"] |
| EXPOSE      | 暴露端口                 | 定义容器运行的时候监听的端口 启动容器的使用-p来绑定暴露端口 格式: EXPOSE 8080 或者 EXPOSE 8080/udp |
| WORKDIR     | 工作目录                 | 指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是绝对地址 如果不是/开头那么是在上一条workdir的路径的相对路径 |
| USER        | 指定执行用户             | 指定build或者启动的时候 用户 在RUN CMD ENTRYPONT执行的时候的用户 |
| HEALTHCHECK | 健康检查                 | 指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本身有健康监测机制 |
| ONBUILD     | 触发器                   | 当存在ONBUILD关键字的镜像作为基础镜像的时候 当执行FROM完成之后 会执行 ONBUILD的命令 但是不影响当前镜像 用处也不怎么大 |
| STOPSIGNAL  | 发送信号量到宿主机       | 该STOPSIGNAL指令设置将发送到容器的系统调用信号以退出。       |
| SHELL       | 指定执行脚本的shell      | 指定RUN CMD ENTRYPOINT 执行命令的时候 使用的shell            |



### 1.8.4 Dockerfile使用案例



#### 1.8.4.1 自定义centos镜像



自定义centos7镜像。要求：



1.  默认登录路径为 /usr 

1.  可以使用vim 



方法：



1.  创建Dockerfile文件，`vim Docker-centos`。 

1.  编辑Dockerfile文件 

```plain
FROM centos:7
MAINTAINER name<12345>
RUN yum install -y vim
WORKDIR /usr
CMD /bin/bash
```

 

1.  通过Dockerfile文件构建镜像：`docker build -f ./Docker-centos -t my-centos:1.0` 



#### 1.8.4.2 使用Dockerfile部署springboot项目



1.  创建一个springboot项目并打成jar包
   ![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/image-20220306230908687.png) 

1.  在Linux中创建一个文件夹，来做docker测试 



```plain
mkdir /root/docker_test
```



1. 将jar包上传到Linux中：创建存放jar包的文件夹



```plain
mkdir /root/docker_test/jar
```



然后利用XShell上传jar包到上面的文件夹中



1. 编写Dockerfile文件



```plain
# 基于java镜像创建新镜像
FROM java:8
# 作者
MAINTAINER author
# 将jar包添加到容器中并更名为app.jar
ADD jar/app.jar /root/docker_test/app.jar
# 运行jar包
ENTRYPOINT ["nohup","java","-jar","/root/docker_test/app.jar","&"]
```



1. 制作镜像



```plain
docker build -t springbootdemo -f /root/docker_test/Dockerfile /root/docker_test/
```



## 1.9 Docker服务编排



### 1.9.1 服务编排概念



**服务编排：按照一定的业务规则批量管理容器**。



微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，维护的工作量会很大。



-  要从Dockerfile build image 或者去dockerhub拉取image 

-  要创建多个container 

-  要管理这些container（启动停止删除） 



### 1.9.2 Docker Compose



Docker Compose是一个编排多容器分布式部署的工具，提供命令集管理容器化应用的完整开发周期，包括服务构建，启动和停止。使用步骤：



1.  利用 Dockerfile 定义运行环境镜像 

1.  使用 docker-compose.yml 定义组成应用的各服务 

1.  运行 docker-compose up 启动应用 



#### 1.9.2.1 安装/卸载 Docker Compose



- 安装Docker Compose



```plain
# Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。 
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
# 设置文件可执行权限 
chmod +x /usr/local/bin/docker-compose
# 查看版本信息 
docker-compose -version
```



如果官网下载慢的话，可以使用国内的地址下载



```plain
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m`  > /usr/local/bin/docker-compose
```



- 卸载Docker Compose



```plain
# 二进制包方式安装的，删除二进制文件即可
rm /usr/local/bin/docker-compose
```



#### 1.9.2.2 使用docker compose编排nginx+springboot项目



1. 创建docker-compose目录



```shell
mkdir ~/docker-compose
cd ~/docker-compose
```



1. 编写 docker-compose.yml 文件



```shell
version: '3'
services:
  nginx:
   image: nginx
   ports:
    - 80:80
   links:
    - app
   volumes:
    - ./nginx/conf.d:/etc/nginx/conf.d
  app:
    image: app
    expose:
      - "8080"
```



1. 创建./nginx/conf.d目录



```shell
mkdir -p ./nginx/conf.d
```



1. 在./nginx/conf.d目录下 编写itheima.conf文件



```shell
server {
    listen 80;
    access_log off;

    location / {
        proxy_pass http://app:8080;
    }
   
}
```



1. 在~/docker-compose 目录下 使用docker-compose 启动容器



```shell
docker-compose up
```



1. 测试访问



```shell
http://192.168.149.135/hello
```



## 1.10 Docker私有仓库



Docker官方的Docker hub（https://hub.docker.com）是一个用于管理公共镜像的仓库，我们可以从上面拉取镜像 到本地，也可以把我们自己的镜像推送上去。但是，有时候我们的服务器无法访问互联网，或者你不希望将自己的镜 像放到公网当中，那么我们就需要搭建自己的私有仓库来存储和管理自己的镜像。



### 1.10.1 私有仓库搭建



```shell
# 1、拉取私有仓库镜像 
docker pull registry
# 2、启动私有仓库容器 
docker run -id --name=registry -p 5000:5000 registry
# 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{"repositories":[]} 表示私有仓库 搭建成功
# 4、修改daemon.json   
vim /etc/docker/daemon.json    
# 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自己私有仓库服务器真实ip 
{"insecure-registries":["私有仓库服务器ip:5000"]} 
# 5、重启docker 服务 
systemctl restart docker
docker start registry
```



### 1.10.2 将镜像上传至私有仓库



```shell
# 1、标记镜像为私有仓库的镜像     
docker tag centos:7 私有仓库服务器IP:5000/centos:7
 
# 2、上传标记的镜像     
docker push 私有仓库服务器IP:5000/centos:7
```



### 1.10.3 从私有仓库拉取镜像



```plain
#拉取镜像 
docker pull 私有仓库服务器ip:5000/centos:7
```