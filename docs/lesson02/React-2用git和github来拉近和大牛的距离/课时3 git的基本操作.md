## 课时3 git的基本操作
    01.介绍
        -GitHub是一个面向开源及私胡软件项目的插管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。

        -Git是一款免费，开源的分布式版本控制系统，用于敏捷高效的处理任何小域大的项目。

        -和大家一起熟悉GitHub和Git的基本使用

        -使用Git快速参与项目开发


    02.跳上github这艘大船
        -基本的账号注册
        -找到些流行的开源框架项目、获取第一手资料
        -follow一些技术牛人，持续关注他们的动态，以及关注一些感兴趣的项目
        -创建仓库，以及github上可对项目的基本操作
        -未来是否你也有兴趣参与开源

        第一步：注册

    1.github的注册
            01. 在浏览器地址栏中输入：https://github.com/join
            02. 注册信息输入
                Username: 输入用户名"只能是英文和数字"
                Email Address: 输入邮箱地址
                Password: 输入密码
            03. Create an account 点击创建

    2.创建仓库           

        01.点击右边的的按钮：New repository
        02.创建项目、目录
            Repository name： 以下的input框中输入项目、目录的名字为英文
            Description (optional)：描述项目的说明
            Public：选择公开的
            Initialize this repository with a README：这里如果选择上了，就会在你的项目下面创建两个文件
        03.Create repository  点击 创建库

        04.克隆项目地址下来
            $ git clone https://github.com/Rococolate/react-201703.git  这里要克隆项目的路径


    3-下载:http://git-scm.com/downloads

      -基本的config
          -username & email

      -创建仓库
          -init or clone

      -git基本操作
          [enter image description here]
          (http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png)


          $ git --help                                    查看帮助文件，和如何使用

          // git 本地基本配置信息，为了提交代码的时候，知道是谁提交的。
              $ git config --global user.name "loungcingzeon"                 配置全局用户名
              $ git config --global user.email "loungcingzeon@sina.com"       配置全局用的邮箱  

          $ mkdir git-demos                               创建一个文件夹
          $ git clone xxx@git.com                         要克隆的地址
          $ git init                                      初始化一下 .git 的文件  
          $ ls   
          $ ls -al                                        查看文件列表
          $ git status                                    查看状态
          $ cd ../
          $ pwd                                           查看当前目录
          $ cd .git/                                      查看.git下面的目录文件
          $ touch index.html                              创建一个文件
          $ git add index.html                            把文件添加到暂存区
          $ git commit -m"描述"                           添加提交文件的加上一些说明
          $ git push origin master                        把文件提交到远程仓库上面去

          接下来就是要要求你输入你的用户名和密码, 最后就提交成功


          名称：rm
              使用权限：任何使用者
              使用方式：rm [options] name...
              说明：删除档案及目录。
              参数：
              -i 删除前逐一询问确认。
              -f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。
              -r 将目录及以下之档案亦逐一删除。
              范例：
              删除任何C语言程式档；删除前逐一询问确认 :
              ```
              rm -i *.c
              将 Finished 子目录及子目录中任何档案删除 :
              rm -r Finished
              功能说明：删除文档或目录。
              语　　法：rm [-dfirv][--help][--version][文档或目录...]
              补充说明：执行rm指令可删除文档或目录，如欲删除目录必须加上参数"-r"，否则预设仅会删除文档。
              参　　数：
              　-d或--directory 　直接把欲删除的目录的硬连接数据删成0，删除该目录。
              　-f或--force 　强制删除文档或目录。
              　-i或--interactive 　删除既有文档或目录之前先询问用户。
              　-r或-R或--recursive 　递归处理，将指定目录下的任何文档及子目录一并处理。
              　-v或--verbose 　显示指令执行过程。
              　--help 　在线帮助。
              　--version 　显示版本信息
              ```
