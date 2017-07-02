## 课时4 github的远程操作
    01.remote 运程操作

       在管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有、有些人使用SSH url克隆到本地。这两种方式的主要区别在于：

       -使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接使用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。

       -而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想使用SHH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch的push代码都不需要输入账号和密码。如果你想每次都输入账号密码才能进行fetch和push也可以另外进行设置



    公钥、私钥



    02.解决问题
       -git remote
           # 查看 remote
               $ git remote -v
               $ git remote -v
                origin  https://github.com/loungcingzeon/cingzeonblog (fetch)
                origin  https://github.com/loungcingzeon/cingzeonblog (push)


           # 删除 remote
               $ git remote rm origin

           # 添加新的 remote
               $ git remote add origin https://github.com/practiceNotes/react-master.git

           #


       -ssh keys
       查看要地是否有 SSH Keys
           $ cd ~/.ssh    进入这个私钥的目录
           $ ls           查看文件列表
               id_rsa  id_rsa.pub  known_hosts
           $ cat id_rsa   查看这个私钥文件内容
               -----BEGIN RSA PRIVATE KEY-----
               MIIEogIBAAKCAQEAr0+jL8AgsQe7bBlVGqAMLHroaBQjd0kw1NDLhuUZuUimgYW6
               MBS0W6rHSCLOZUtMwRC7eFrNXn5G5f5J+fPbu1kPIzptBcUOMvbTfC6M/hlcveDg
               auwZ9rH4REPQOWjzNwRp9uz9Ihrj9ixjB0Fq6bqiCd2V4lcErMsumUfpLTstsF+1
               dX+B9rs9hF7Pp7T8wd5CLII7c11LtewxbMJWHyt/WrqkdnWgPrXk4I8zYGhbhEu8
               40OxbAga+VziqaG2x0QU2k4WHhsFJFBpCpwAYnzhldnatJlwHxU88QRZT724YtJ5
               gs8qXXNYxTCNULN7Y2uadh6tkHRJVYrv444x2QIDAQABAoIBAENKylTV5raNRT/l
               KWmi7YlVVEg/Eq4DBh9qVfVdk1YvsNoevq0eBWz6TKw/0AHJuZiSF6PHFvWiewxl
               Y3fyRvHO6aSYFKkWTrD5VYxhQfV3PsYTv5DLN9wdzDJH5XFj+5eutg32QeQJdl9U
               Al8SmTtGTFSFHbdXt4+sHiLwG20kmxiEwzlvFIJ5U5XANzPMXcItVr3nUG958Qo6
               7R/bZ7ZO5BQR4Ff7DlgCiEVKaSw7oAlCKjHWrWOV+NiOKDPTOoZDi0CpFe3c8c2e
               I4mLnYoCwvTwN6n7dvDBHiqrUcRYFm+5EXcJPBZkRdJ22X6JnU2brgL2g6sXSh9y
               5mwYyJECgYEA4eNNA/BtvlVDvytM0yhFOSOXc0lutbUFoxSNjmW94N6hJRH2LiHn
               GogwxhneSQVpnb+1mjzy5pzFY1DG0RKz+wE3nY9X+9/pRLOZHB/sIx0j0YLXboN6
               gB1tmi8YMYfX7UQeakQu+HiZhKTHL/spAkmvxjbK8wHEjqL89Evh3FMCgYEAxq5X
               aGO1LdEdY+X/Fssx4Au+g9+i0w535IHSp81pvSmD2yuFSEXeM3SmFtcb6AyL6Cyw
               o/j7CFWD9viqQEzEoyGduvGwjOG4xuLwCGlp0ZJcTzZZxYTnFFrM5IpiZuDptq/8
               86+ER42nrTl6yYQ9YKTlwphDqe7YOCqLpLxwU6MCgYA4Q6m3RXfQZOSPBXYJUoqL
               hPYAXVYaJJDW4hOwWF9HV6zD0wmCzCcIUMv1TBQ2FAcOp+XQGUZXcs0nw8MB6Kqz
               5sW3lTDRKCCuYB3PB5SF2ohFc1W9zToCF1JpiTl5fOCn1MPOrFUWxtNWWsTSirjY
               PQpvUM6UYOhYrvha0VvcyQKBgHI1e+d1EYxB3hwz9Rv8ODJrbdvOrYGXmpHPkvGE
               4hisCbDuZpJyH1YC4wrUIqWUuMQBFJVdpahXyCErNmr59js0MsBo+K0zgA1MHOEo
               /3xKHyglvRsO1+rae1eQuRochhzPM6A9L9QV+OJZ3VyD2Oh6Qd1Hu/WuZ7p5soZD
               EGrzAoGAPUi5iJR3D6+rieD/0NjYMfsOuNTRy0efZbR4HixkiuLbnDEd5Zyr7fAn
               ucezudqmqZiJSuDflS3ZG4v9mQh47m7+pV7H5UCctKXglAnFebzzNdxrLotJWO6+
               NpxDSzSvmPEKnm68w1dzplmMDMF2LYeYzsBNGcvExy3AIzvFSts=
               -----END RSA PRIVATE KEY-----

           $ cat id_rsa.pub   查看这个公钥文件内容
               ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvT6MvwCCxB7tsGVUaoAwseuhoFCN3STDU0MuG5Rm5SKaBhbowFLRbqsdIIs5lS0zBELt4Ws1efkbl/kn589u7WQ8jOm0FxQ4y9tN8Loz+GVy94OBq7Bn2sfhEQ9A5aPM3BGn27P0iGuP2LGMHQWrpuqIJ3ZXiVwSsyy6ZR+ktOy2wX7V1f4H2uz2EXs+ntPzB3kIsgjtzXUu17DFswlYfK39auqR2daA+teTgjzNgaFuES7zjQ7FsCBr5XOKpobbHRBTaThYeGwUkUGkKnABifOGV2dq0mXAfFTzxBFlPvbhi0nmCzypdc1jFMI1Qs3tja5p2Hq2QdElViu/jjjHZ chengjin@sina.com



       如果没有就生成一个
          $ cd ~/.ssh    进入这个私钥的目录
           $ ssh-keygen -t rsa -C "loungcingzeon@sina.com"

       --在github上， settings->ssh keys->add
