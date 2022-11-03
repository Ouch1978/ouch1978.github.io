---
title: Jenkins 會在 Git 的 SSH 路徑加上多餘斜線的因應解法
description: "最近在把 Jenkins 裡透過 Git 拉 Repository 的路徑從 HTTPS 改成 SSH，不過發生了一件神奇的事：居然 SSH:// 會被改成 SSH:///。"
authors: ouch1978
tags: 
   - CI/CD
   - DevOps
   - ALM
keywords: 
   - Jenkins
   - SSH
   - Git
   - 斜線
---

## 前言

最近在把 Jenkins 裡透過 Git 拉 Repository 的路徑從 HTTPS 改成 SSH，不過發生了一件神奇的事：

原本在 Jenkins 裡設定好的 Git Repo 路徑居然會被 Jenkins 從 SSH:// 改成 SSH:/// 硬生生的多了一條斜線。

舉例來說，我原本輸入的網址是 SSH://gitlab.ouch1978.com:22/test/my-test-repository.git。

但是 Jenkins 就會幫我把我的 .git/config 裡的 URL 改成 SSH:///gitlab.ouch1978.com:22/test/my-test-repository.git。

當然， Repository 就拉不下來了。

<!--truncate-->

## 是誰搞的鬼?

上網 Google 了一番，原來我又不孤單了，有其他人也有遇到相同的問題：

* [Why is the Git Plugin for Jenkins rewriting my local git repo url with extra slashes?](https://stackoverflow.com/questions/27786733/why-is-the-git-plugin-for-jenkins-rewriting-my-local-git-repo-url-with-extra-sla "Why is the Git Plugin for Jenkins rewriting my local git repo url with extra slashes?")

原來這個問題早在 2015 年就發生過，而且還有回報到 Jenkins 的 Issues 系統裡，而且級別是 Major：

* [Extraneous Forward-Slash in ssh:// path to repository](https://issues.jenkins.io/browse/JENKINS-26680?page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel&showAll=true "Extraneous Forward-Slash in ssh:// path to repository")

不過一直到今天，這張問題單的狀態還是未解決，在 2019 年和 2021 年都還有苦主上去留言。

還有另一張相似的問題單：

* [Repository URL containg double points couldn't be resolved correctly.](https://issues.jenkins.io/browse/JENKINS-27483 "Repository URL containg double points couldn't be resolved correctly.")

這張就直接把兇手指向了 Jenkins 的 Git Plugin，說如果網址內包含冒號的話就會有問題，而且這張單直接被標為 Won't Fix。

## 解法

在 StackOverflow 和 Jenkins 的 Issues 系統裡也有不少熱心人士提供了不同的解決方法。

而我最後採用的思路是依照上述第二張問題單裡面提到的：`如果網址內包含冒號就會有問題` 這個論點。

那我的網址不要出現冒號不就好囉?

所以我在 .ssh/config 裡動了一些手腳：

```diff title="~/.ssh/config"
-Host gitlab.ouch1978.com 
+Host gitlab                      
   HostName gitlab.ouch1978.com 
   AddKeysToAgent yes
   PreferredAuthentications publickey
   User git
   IdentityFile ~/.ssh/id_ed25519_gitlab
+   Port 22 
```

如此一來，我的 Repository URL 就可以縮短成這樣：

`git@gitlab:/test/my-test-repository.git`

就不會再出現神奇的三條斜線啦!!

希望能幫到跟我一樣的苦主。
