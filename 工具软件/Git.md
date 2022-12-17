# 1.Git起步



## 1.1 Git是什么



Git是一种分布式版本控制系统。



分布式版本控制系统（DVCS）客户端不只提取最新版本的文件快照，而是把服务器上代码仓库完整的镜像下来，包括历史记录。这样每一次克隆操作，就是对服务器代码仓库的完整备份。当服务器发生故障时，可以使用镜像出来的本地仓库进行恢复。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/distributed.png)



## 1.2 Git三种状态



Git三种状态：**已修改（modified）、已暂存（staged）、已提交（commited）**。



- 已修改表示修改了文件，但还没保存到数据库中。

- 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

- 已提交表示数据已经安全地保存在本地数据库中。



这会让我们的 Git 项目拥有三个阶段：**工作区、暂存区以及 Git 目录**。



-  工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。 

-  暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。 按照 Git 的术语叫做“索引”，不过一般说法还是叫“暂存区”。 

-  Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据。 



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/areas.png)



基本的 Git 工作流程如下：



1. 在工作区中修改文件——**已修改**

1. 将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区——**已暂存**

1. 提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录——**已提交**



## 1.3 Git配置



- 查看所有的配置以及它们所在的文件



```plain
git config --list --show-origin
```



- 列出所有 Git 当时能找到的配置



```plain
git config --list
```



- `git config <key>`检查 Git 的某一项配置



```plain
git config user.name
John Doe
```



**用户信息**：安装完 Git 之后，要做的第一件事就是**设置你的用户名和邮件地址**。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：



```plain
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```



使用了 `--global` 选项，那么该命令只需要运行一次。



# 2.Git基础



## 2.1 获取Git仓库



有两种获取Git项目仓库的方式：



- 将尚未进行版本控制的本地目录转换为Git仓库

- 从其他服务器**克隆**一个已存在的Git仓库。



### 2.1.1 在已存在的目录初始化仓库



首先进入该项目目录中，执行



```plain
git init
```



该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。



这时只是做了一个初始化的操作，项目里的文件还没有被跟踪。



可以通过`git add`命令进行追踪。



### 2.1.2 克隆现有的仓库



Git克隆使用的命令是"clone"而不是"checkout"，Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。



克隆仓库命令



```plain
git clone <url>
git clone <url> 目录名  //自定义本地仓库名字
```



Git支持多种数据传输协议，比如：



- `https://` 协议

- `git://`协议

- SSH 传输协议



## 2.2 记录每次更新到仓库



Git工作目录的每个文件分为



- **已跟踪**：被纳入版本控制的文件，在上一次快照有记录，文件状态可能是未修改，已修改或已暂存。

- **未跟踪**：工作目录中除已跟踪文件外的其它所有文件都属于未跟踪文件，它们既不存在于上次快照的记录中，也没有被放入暂存区。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/lifecycle.png)



### 2.2.1.查看当前文件状态



`git status`命令查看文件处于什么状态。



- `Untracked files` 下面的文件代表**未跟踪的文件**

- `Changes to be committed`代表**已暂存状态**。



可以使用`git status -s` 命令或 `git status --short` 命令以简洁的方式查看文件状态。



```plain
git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```



新添加的未跟踪文件前面有 `??` 标记，新添加到暂存区中的文件前面有 `A` 标记，修改过的文件前面有 `M` 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。



### 2.2.2.跟踪新文件



使用`git add` 命令跟踪文件，并且文件处于暂存状态。`git add` 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件。



### 2.2.3.暂存已修改的文件



使用`git add`暂存已修改文件。



`git add` 是个多功能命令：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。可以将这个命令理解为精确地将内容添加到下一次提交中。



如果修改一个已暂存文件，运行`git status`命令，会发现文件同时出现在暂存区和非暂存区。这时执行commit操作的话，提交的暂存区的文件，如果要提交非暂存区的文件，要先执行`git add`命令，将非暂存区文件更新到暂存区。



### 2.2.4.忽略文件



有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件的模式。



文件 `.gitignore` 的格式规范如下：



- 所有空行或者以 `#` 开头的行都会被 Git 忽略。

- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。

- 匹配模式可以以（`/`）开头防止递归。

- 匹配模式可以以（`/`）结尾指定目录。

- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（`!`）取反。



### 2.2.5.查看已暂存和未暂存的修改



查看文件具体修改内容，可以使用`git diff` 命令。



- 不加参数直接输入 `git diff`，这个命令比较的是工作目录中当前文件和暂存区快照之间的差异。

- `git diff --staged`或者`git diff --cached`命令。将比对已暂存文件与最后一次提交的文件差异。



### 2.2.6.提交更新



`git commit`  提交更新。直接执行`git commit`会启动你选择的文本编辑器来输入提交说明。



也可以在 `commit` 命令后添加 `-m` 选项，将提交信息与命令放在同一行



```plain
git commit -m "Story 182: Fix benchmarks for speed"
```



**跳过使用暂存区域**。给 `git commit` 加上 `-a` 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤，这个操作有时候会将不需要的文件添加到提交中。



### 2.2.7.移除文件



要从暂存区移除文件，使用`git rm`完成



### 2.2.8.移动文件



要在 Git 中对文件改名



```plain
git mv file_from file_to
```



## 2.3 查看提交历史



```plain
git log
```



## 2.4 撤销操作



使用`git commit --amend`重新提交，这个命令会将暂存区中的文件提交。最终只会有一个提交——**第二次提交将代替第一次提交的结果**。



- 取消暂存的文件



```plain
git reset HEAD <file>...
```



- 撤销对文件的修改



```plain
git checkout -- <file>...
```



## 2.5 远程仓库的使用



`git remote` 命令会列出每一个远程服务器的简写。



`git remote -v`会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。



### 2.5.1 添加远程仓库



`git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：



```plain
git remote add pb https://github.com/paulboone/ticgit
```



### 2.5.2 从远程仓库抓取与拉取



`git fetch <remote>`这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。



注意 `git fetch` 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。



### 2.5.3 推送到远程仓库



```
git push <remote> <branch>
```



只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。 你必须先抓取他们的工作并将其合并进你的工作后才能推送。



### 2.5.4 查看远程仓库信息



```plain
git remote show <remote>
```



### 2.5.5 远程仓库的重命名与移除



`git remote rename`重命名远程仓库简写名。例如



```plain
git remote rename pb paul
```



这个命令同样也会修改你所有远程跟踪的分支名字。 那些过去引用 `pb/master` 的现在会引用 `paul/master`。



`git remote remove`或`git remote rm`删除远程仓库。所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除。



## 2.6 打标签



Git 可以给仓库历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（ `v1.0` 、 `v2.0` 等等）。



# 3.Git分支



Git保存数据不是保存文件的变化或者差异，而一系列不同时刻的快照。



Git提交时会保存一个提交对象，这个提交对象包含一个指向暂存内容快照的指针，还包含了作者的姓名和邮箱、提交时输入的信息以及指向**它的父对象的指针**。



首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象， 而由多个分支合并产生的提交对象有多个父对象，



## 3.1 新建分支



使用`git branch`命令可以创建新分支，创建新分支只是为你创建了一个可以移动的新的指针。



比如：创建一个testing分支



```plain
git branch testing
```



会在当前提交对象上创建一个指针



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/two-branches.png)



Git通过一个名为`HEAD`的特殊指针，指向当前所在的本地分支，从而确定当前是在哪个分支上。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/head-to-master.png)



使用`git log --decorate`命令可以查看各个分支当前所指的提交对象。



## 3.2 分支切换



使用 `git checkout` 命令切换到已存在的分支。添加`-b` 参数可以新建一个新分支，同时切换到新分支。



切换到新创建的 `testing` 分支



```plain
git checkout testing
```



这样 `HEAD` 就指向 `testing` 分支了。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/head-to-testing.png)



如果在当前testing进行一次提交



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/advance-testing.png)



再切换到master分支



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/checkout-master.png)



这条命令做了两件事。 一是使 HEAD 指回 `master` 分支，二是将工作目录恢复成 `master` 分支所指向的快照内容。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略 `testing` 分支所做的修改，以便于向另一个方向进行开发。



## 3.3 分支合并



比如要把iss53合并到master分支。先切换到master分支，运行`git merge` 命令



```plain
git merge iss53
```



如果`master` 分支所在提交并不是 `iss53` 分支所在提交的直接祖先。Git 会使用两个分支的末端所指的快照（`C4` 和 `C5`）以及这两个分支的公共祖先（`C2`），做一个简单的三方合并。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/basic-merging-1.png)



Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。 这个被称作一次合并提交，它的特别之处在于他有**不止一个父提交**。



![img](https://gitee.com/zhangzhenxiong/PicGo/raw/master/img/basic-merging-2.png)



如果合并分支有冲突的话，此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。解决冲突后并且确定之前有冲突的的文件都已经暂存了，这时你可以输入 `git commit` 来完成合并提交。



## 3.4 删除分支



`git branch -d` 命名删除分支



## 3.5 拉取



`git fetch` 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。



有一个命令叫作 `git pull` 在大多数情况下它的含义是一个 `git fetch` 紧接着一个 `git merge` 命令。`git pull` 都会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据然后尝试合并入那个远程分支。



## 3.6 删除远程分支



```plain
git push origin --delete serverfix
```



基本上这个命令做的只是从服务器上移除这个指针。 Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。



## 3.7 变基



## 3.8 合并某个分支的一个commit到另一个分支



例如要将A分支的一个commit合并到B分支：



首先切换到A分支



```plain
git checkout A

git log
```



找出要合并的commit ID :



例如 `0128660c08e325d410cb845616af355c0c19c6fe`



然后切换到B分支上



```plain
git checkout B

git cherry-pick  0128660c08e325d410cb845616af355c0c19c6fe
```



然后就将A分支的某个commit合并到了B分支了