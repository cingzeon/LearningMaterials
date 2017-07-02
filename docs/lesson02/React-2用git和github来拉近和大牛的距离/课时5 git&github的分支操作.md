## 课时5 git&github的分支操作 新的
   1. 查看git分支
       $ git branch     查看分支

   2. 创建一个本地分支
      $ git branch develop            在本地创建一个develop分支

   3. 查看分支
      $ git branch                    查看分支，以下就看到两个分支了
        develop
        * master

   4. 切换分支
      $ git checkout develop          切换到develop的分支下

   5. 添加文件
      $ git add index.html            添加文件
      $ git commit -m"add index.htm"  提交时对文件进行描述说明

   6. 切换到 master 分支下
      $ git checkout master           切换到master 分支

   7. 合并分支
      $ git merge master develop      就是把develp分支合并到master同级目录上

      $ git merge master develop
      Updating 78f716e..3b163cc
      Fast-forward
       index.html | 12 ++++++++++++
       1 file changed, 12 insertions(+)

    8. 提交分支
       $ git push origin master       提交分支
       $ git push origin develop      提交develop分支
       Total 0 (delta 0), reused 0 (delta 0)
       To https://github.com/loungcingzeon/cingzeonblog
       * [new branch]      develop -> develop




##  旧的 创建分支,  "branch_name"是自己定义的分支名
        $ git branch branch_name    

    # 本地切换到这个分支 也就是branch_name
        $ git checkout branch_name  


    # 创建并且直接切换到这个新分支
        $ git checkout -b branch_name

    # 分支合并，比如新分支 develop合并到master分支
        01.创建一个分支，名为 develop
            $ git branch develop
        02.切换到这个develop的分支
            $ git checkout develop

        03.合并分支，把develop 合并到 master 下面
            $ git merge master devlop

        04.查看远程的分支
            $ git branch

        05.上传内容到 develop 的分支上去
            $ git push origin develop

        06.拉取 develop 的分支内容下来
            $ git pull origin develop
