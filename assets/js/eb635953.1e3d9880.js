"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[7735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var i=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],r={title:"\u5feb\u901f\u641e\u5b9a\u5728 Windows \u88e1\u900f\u904e SSH \u901a\u8a0a\u5354\u5b9a\u5b58\u53d6 GitLab \u7684 Repository",description:"\u96d6\u7136\u8aaa Git \u4e00\u76f4\u4ee5\u4f86\u90fd\u652f\u63f4 HTTPS \u548c SSH \u9019\u5169\u7a2e\u901a\u8a0a\u5354\u5b9a\uff0c\u4e0d\u904e\u8fd1\u5e74\u4f86\u4e0d\u8ad6\u662f GitHub \u9084\u662f GitLab \u90fd\u5efa\u8b70\u4f7f\u7528 SSH \u4f86\u5b58\u53d6 Repository\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u5206\u4eab\u4e00\u4e0b\u5728 Windows \u4e0a\u5feb\u901f\u8a2d\u5b9a\u4f7f\u7528 SSH \u5b58\u53d6 GitLab Repository \u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","Git"],keywords:["Windows","GitLab","SSH"]},l=void 0,p={permalink:"/blog/2022/10/09/quick-guide-to-use-git-with-ssh",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-10-09-quick-guide-to-use-git-with-ssh/index.md",source:"@site/blog/2022-10-09-quick-guide-to-use-git-with-ssh/index.md",title:"\u5feb\u901f\u641e\u5b9a\u5728 Windows \u88e1\u900f\u904e SSH \u901a\u8a0a\u5354\u5b9a\u5b58\u53d6 GitLab \u7684 Repository",description:"\u96d6\u7136\u8aaa Git \u4e00\u76f4\u4ee5\u4f86\u90fd\u652f\u63f4 HTTPS \u548c SSH \u9019\u5169\u7a2e\u901a\u8a0a\u5354\u5b9a\uff0c\u4e0d\u904e\u8fd1\u5e74\u4f86\u4e0d\u8ad6\u662f GitHub \u9084\u662f GitLab \u90fd\u5efa\u8b70\u4f7f\u7528 SSH \u4f86\u5b58\u53d6 Repository\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u5206\u4eab\u4e00\u4e0b\u5728 Windows \u4e0a\u5feb\u901f\u8a2d\u5b9a\u4f7f\u7528 SSH \u5b58\u53d6 GitLab Repository \u7684\u65b9\u6cd5\u3002",date:"2022-10-09T00:00:00.000Z",formattedDate:"2022\u5e7410\u67089\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"},{label:"Git",permalink:"/blog/tags/git"}],readingTime:6.73,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u5feb\u901f\u641e\u5b9a\u5728 Windows \u88e1\u900f\u904e SSH \u901a\u8a0a\u5354\u5b9a\u5b58\u53d6 GitLab \u7684 Repository",description:"\u96d6\u7136\u8aaa Git \u4e00\u76f4\u4ee5\u4f86\u90fd\u652f\u63f4 HTTPS \u548c SSH \u9019\u5169\u7a2e\u901a\u8a0a\u5354\u5b9a\uff0c\u4e0d\u904e\u8fd1\u5e74\u4f86\u4e0d\u8ad6\u662f GitHub \u9084\u662f GitLab \u90fd\u5efa\u8b70\u4f7f\u7528 SSH \u4f86\u5b58\u53d6 Repository\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u5206\u4eab\u4e00\u4e0b\u5728 Windows \u4e0a\u5feb\u901f\u8a2d\u5b9a\u4f7f\u7528 SSH \u5b58\u53d6 GitLab Repository \u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","Git"],keywords:["Windows","GitLab","SSH"]},prevItem:{title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",permalink:"/blog/2022/10/10/show-hidden-items-in-vscode"},nextItem:{title:"\u4e00\u6b21\u5f9e\u9060\u7aef\u65b0\u589e\u4f7f\u7528\u8005\u5e33\u865f\u5230\u591a\u53f0 Windows Server \u7684\u672c\u6a5f\u7fa4\u7d44",permalink:"/blog/2022/10/05/add-user-into-group-to-multiple-windows-servers"}},u={authorsImageUrls:[void 0]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u958b\u5de5",id:"\u5ee2\u8a71\u4e0d\u591a\u8aaa\u958b\u5de5",level:2},{value:"\u900f\u904e SSH-Keygen \u7522\u51fa\u516c\u9470\u548c\u79c1\u9470",id:"\u900f\u904e-ssh-keygen-\u7522\u51fa\u516c\u9470\u548c\u79c1\u9470",level:3},{value:"\u900f\u904e SSH Agent \u7ba1\u7406\u91d1\u9470",id:"\u900f\u904e-ssh-agent-\u7ba1\u7406\u91d1\u9470",level:3},{value:"\u5c07\u516c\u9470\u8a2d\u5b9a\u5230 GitLab",id:"\u5c07\u516c\u9470\u8a2d\u5b9a\u5230-gitlab",level:3},{value:"\u8a2d\u5b9a SSH Config",id:"\u8a2d\u5b9a-ssh-config",level:3},{value:"\u9a57\u6536",id:"\u9a57\u6536",level:3},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"TortoiseGit \u986f\u793a No supported authentication methods available(sever sent: publickey) \u932f\u8aa4",id:"tortoisegit-\u986f\u793a-no-supported-authentication-methods-availablesever-sent-publickey-\u932f\u8aa4",level:3},{value:"Visual Studio \u986f\u793a fatal: detected dubious ownership in repository",id:"visual-studio-\u986f\u793a-fatal-detected-dubious-ownership-in-repository",level:3},{value:"\u984d\u5916\u6536\u9304",id:"\u984d\u5916\u6536\u9304",level:2},{value:"\u600e\u9ebc\u628a\u539f\u5148\u900f\u904e HTTPS \u5b58\u53d6\u7684 Repo \u6539\u70ba\u7528 SSH?",id:"\u600e\u9ebc\u628a\u539f\u5148\u900f\u904e-https-\u5b58\u53d6\u7684-repo-\u6539\u70ba\u7528-ssh",level:3},{value:"\u5982\u679c\u5df2\u7d93\u6709\u4e00\u5806\u900f\u904e HTTPS \u5b58\u53d6\u7684 Repo \u5462?",id:"\u5982\u679c\u5df2\u7d93\u6709\u4e00\u5806\u900f\u904e-https-\u5b58\u53d6\u7684-repo-\u5462",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],c={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,s.kt)("p",null,"\u96d6\u7136\u8aaa Git \u4e00\u76f4\u4ee5\u4f86\u90fd\u652f\u63f4 HTTPS \u548c SSH \u9019\u5169\u7a2e\u901a\u8a0a\u5354\u5b9a\uff0c\u4e0d\u904e\u8fd1\u5e74\u4f86\u4e0d\u8ad6\u662f GitHub \u9084\u662f GitLab \u90fd\u5efa\u8b70\u4f7f\u7528 SSH \u4f86\u5b58\u53d6 Repository\u3002"),(0,s.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5c31\u5206\u4eab\u4e00\u4e0b\u5728 Windows \u4e0a\u5feb\u901f\u8a2d\u5b9a\u4f7f\u7528 SSH \u5b58\u53d6 GitLab Repository \u7684\u65b9\u6cd5\u3002"),(0,s.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,s.kt)("p",null,"\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u96fb\u8166\u5df2\u7d93\u5b89\u88dd\u597d\u4e0b\u5217\u5de5\u5177\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Git for Windows (\u5efa\u8b70\u4f7f\u7528\u9810\u8a2d\u5b89\u88dd\uff0c\u5305\u542b Git Bash \u548c SSH \u7b49\u5de5\u5177)\u3002"),(0,s.kt)("li",{parentName:"ol"},"VSCode \u6216\u662f NotePad++ \u7b49\u6587\u5b57\u6a94\u7de8\u8f2f\u5de5\u5177(\u7528\u4f86\u6279\u6b21\u628a\u539f\u4f86\u4f7f\u7528 HTTPS \u901a\u8a0a\u5354\u5b9a\u7684 Repo \u6539\u6210\u4f7f\u7528 SSH)\u3002")),(0,s.kt)("p",null,"\u53e6\u5916\uff0c\u8acb\u628a GitLab \u7684 URL\u3001\u4f60\u7684 Email\u3001\u53ef\u4ee5\u5b58\u53d6 API \u7684 Personal Access Token \u5148\u8a18\u5728\u65b9\u4fbf\u53d6\u7528\u7684\u6587\u5b57\u6a94\u6216\u662f\u526a\u8cbc\u7c3f\u88e1\u3002"),(0,s.kt)("h2",{id:"\u5ee2\u8a71\u4e0d\u591a\u8aaa\u958b\u5de5"},"\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u958b\u5de5"),(0,s.kt)("p",null,"\u63a5\u8457\uff0c\u8acb\u7167\u4e0b\u9762\u6b65\u9a5f\u64cd\u4f5c(\u5927\u90e8\u4efd\u6307\u4ee4\u90fd\u53ef\u4ee5\u76f4\u63a5\u7167\u6284\u5c31\u597d)\u3002"),(0,s.kt)("h3",{id:"\u900f\u904e-ssh-keygen-\u7522\u51fa\u516c\u9470\u548c\u79c1\u9470"},"\u900f\u904e SSH-Keygen \u7522\u51fa\u516c\u9470\u548c\u79c1\u9470"),(0,s.kt)("admonition",{title:"\u8b66\u544a",type:"warning"},(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},"\u6709\u4e9b\u4eba\u6703\u5efa\u8b70\u4e0d\u8981\u8a2d\u5b9a\u91d1\u9470\u7684 Passphrase\uff0c\u514d\u5f97\u4e4b\u5f8c\u6bcf\u6b21\u90fd\u8981\u8f38\u5165\uff0c\u4f46\u662f\u5176\u5be6\u6211\u5011\u53ef\u4ee5\u900f\u904e SSH Agent \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002\n\u57fa\u65bc\u5b89\u5168\u6027\u8003\u91cf\uff0c\u9019\u908a\u9084\u662f\u5efa\u8b70\u5927\u5bb6\u4e0d\u8981\u7701\u7565\u9019\u500b\u91cd\u8981\u7684\u6b65\u9a5f\uff0c\u7562\u7adf\u6211\u5011\u9084\u662f\u4e0d\u6703\u5e0c\u671b\u91d1\u9470\u88ab\u5225\u4eba\u62ff\u53bb\u4f7f\u7528\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u9019\u908a\u70ba\u4e86\u65b9\u4fbf\uff0c\u6703\u81ea\u52d5\u7522\u751f Passphrase\uff0c\u8acb\u5404\u4f4d\u8907\u88fd\u4e4b\u5f8c\u59a5\u5584\u4fdd\u5b58\uff0c\u6216\u662f\u4f7f\u7528\u81ea\u5df1\u559c\u6b61\u7684\u5bc6\u78bc\u3002"))),(0,s.kt)("p",null,"\u6211\u5beb\u4e86\u4e00\u500b Script \u53ef\u4ee5\u76f4\u63a5\u5728 Git Bash \u88e1\u57f7\u884c\uff0c\u5167\u5bb9\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="gen_ssh_key.sh"',title:'"gen_ssh_key.sh"'},"#!/bin/bash\n#\u7522\u751f Passphrase \u4e26\u4e14\u5b58\u5165\u74b0\u5883\u8b8a\u6578\nexport MY_PASSPHRASE=$(< /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c8)\n\n#\u8f38\u5165\u4f60\u5728 GitLab \u4e2d\u4f7f\u7528\u7684 Email\nread -p '\u8acb\u8f38\u5165\u60a8\u5728 GitLab \u767b\u8a18\u7684\u4fe1\u7bb1\uff1a ' email\n\n#\u7522\u51fa\u516c\u3001\u79c1\u9470\nssh-keygen -t ed25519 -N $MY_PASSPHRASE -C $email -f ~/.ssh/id_ed25519_gitlab\n\necho -e \"\u60a8\u7684 Passphrase \u662f: ${RED} $MY_PASSPHRASE ${NC}\uff0c\u8acb\u59a5\u5584\u4fdd\u5b58\u3002\"\n")),(0,s.kt)("p",null,"\u76f4\u63a5\u628a\u4e0a\u8ff0\u5167\u5bb9\u5132\u5b58\u5230 %USERPROFILE% \u8cc7\u6599\u593e\u4e0b\uff0c\u7136\u5f8c\u5728 Git Bash \u4e2d\u8f38\u5165 ",(0,s.kt)("inlineCode",{parentName:"p"},". ./gen_ssh_key.sh")," \u57f7\u884c\u5373\u53ef\u3002"),(0,s.kt)("p",null,"\u57f7\u884c\u7d50\u679c\u5982\u4e0b\u5716\uff1a\n",(0,s.kt)("img",{alt:"\u7522\u51fa\u516c\u9470\u548c\u79c1\u9470",src:n(79860).Z,title:"\u7522\u51fa\u516c\u9470\u548c\u79c1\u9470",width:"1152",height:"673"})),(0,s.kt)("h3",{id:"\u900f\u904e-ssh-agent-\u7ba1\u7406\u91d1\u9470"},"\u900f\u904e SSH Agent \u7ba1\u7406\u91d1\u9470"),(0,s.kt)("p",null,"\u63a5\u8457\u7684\u6307\u4ee4\u4e00\u6a23\u63a5\u8457\u5728 Git Bash \u4e2d\u57f7\u884c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'#\u5c07\u91d1\u9470\u4ea4\u7d66 SSH Agent \u8a17\u7ba1\nssh-agent bash\nssh-add "C:\\\\Users\\\\$USERNAME/.ssh/id_ed25519_gitlab"\n')),(0,s.kt)("p",null,"\u8a62\u554f Passphrase \u7684\u6642\u5019\uff0c\u76f4\u63a5\u8f38\u5165\u4e0a\u4e00\u500b\u6b65\u9a5f\u7522\u51fa\u7684 Passphrase \u5c31\u884c\u4e86\u3002"),(0,s.kt)("p",null,"\u518d\u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u7684\u8eab\u4efd\u958b\u555f PowerShell\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Service ssh-agent | Set-Service -StartupType Automatic -PassThru | Start-Service\nssh-agent\ncd $env:USERPROFILE\\.ssh\nssh-add .\\id_ed25519_gitlab\ngit config --global core.sshCommand C:\\\\Windows\\\\System32\\\\OpenSSH\\\\ssh.exe\n")),(0,s.kt)("h3",{id:"\u5c07\u516c\u9470\u8a2d\u5b9a\u5230-gitlab"},"\u5c07\u516c\u9470\u8a2d\u5b9a\u5230 GitLab"),(0,s.kt)("p",null,"\u9019\u908a\u6211\u4e00\u6a23\u6e96\u5099\u4e86\u4e00\u500b Script \u5728 Git Bash \u88e1\u57f7\u884c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="set_ssh_key_to_gitlab.sh"',title:'"set_ssh_key_to_gitlab.sh"'},'#!/bin/bash\n#\u8f38\u5165 GitLab \u7684\u7db2\u5740\nread -p \'\u8acb\u8f38\u5165 GitLab \u7684\u7db2\u5740\uff1a \' gitlab_url\n\n#\u8f38 GitLab \u7684 Personal Access Token\nread -p \'\u8acb\u8f38\u5165\u60a8\u7684 Personal Access Token\uff1a \' personal_access_token\n\n#\u8b80\u53d6 id_ed25519_gitlab \u7684\u5167\u5bb9\nkey=$(cat ~/.ssh/id_ed25519_gitlab.pub)\n\n#\u900f\u904e CURL \u5c07\u516c\u9470\u4e0a\u50b3\u5230 GitLab\ncurl -X POST -F "private_token=$personal_access_token" -F "title=MY_SSH_KEY" -F "key=$key" "$gitlab_url/api/v4/user/keys"\n')),(0,s.kt)("p",null,"\u76f4\u63a5\u628a\u4e0a\u8ff0\u5167\u5bb9\u5132\u5b58\u5230 %USERPROFILE% \u8cc7\u6599\u593e\u4e0b\uff0c\u7136\u5f8c\u5728 Git Bash \u4e2d\u8f38\u5165 ",(0,s.kt)("inlineCode",{parentName:"p"},". ./set_ssh_key_to_gitlab.sh")," \u57f7\u884c\u5373\u53ef\u3002"),(0,s.kt)("admonition",{title:"\u5c0f\u63d0\u9192",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u9700\u4f9d\u64da GitLab \u7684\u7248\u672c\u8abf\u6574\u4f7f\u7528\u7684 API \u7248\u672c\uff0c\u5982\u679c\u4f7f\u7528\u7684 GitLab \u70ba 9.5 \u7248\u4e4b\u524d\u7684\u7248\u672c\u8acb\u6539\u7528 v3 \u53d6\u4ee3 v4\u3002")),(0,s.kt)("h3",{id:"\u8a2d\u5b9a-ssh-config"},"\u8a2d\u5b9a SSH Config"),(0,s.kt)("p",null,"\u4e00\u6a23\u5728 Git Bash \u4e2d\u7e7c\u7e8c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"   nano ~/.ssh/config\n")),(0,s.kt)("p",null,"\u52a0\u5165\u4e0b\u9762\u7684\u5167\u5bb9\u4f86\u544a\u8a34 SSH \u5728\u9023\u7dda\u5230\u54ea\u4e9b\u4e3b\u6a5f\u7684\u6642\u5019\u8981\u4f7f\u7528\u54ea\u500b\u91d1\u9470\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="~/.ssh/config"',title:'"~/.ssh/config"'},"Host gitlab.ouch1978.com\n   HostName gitlab.ouch1978.com\n   AddKeysToAgent yes\n   PreferredAuthentications publickey\n   User git\n   IdentityFile ~/.ssh/id_ed25519_gitlab\n")),(0,s.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},"\u8acb\u52d9\u5fc5\u4f9d\u7167\u4f60\u7684\u74b0\u5883\u548c\u9700\u6c42\u8abf\u6574 ",(0,s.kt)("inlineCode",{parentName:"li"},"Host")," \u548c ",(0,s.kt)("inlineCode",{parentName:"li"},"HostName")," \u9019\u5169\u500b\u503c\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u95dc\u65bc\u8a73\u7d30\u8abf\u6574\u7684\u65b9\u5f0f\u53ef\u4ee5\u53c3\u8003 ",(0,s.kt)("a",{parentName:"li",href:"https://blog.alantsai.net/about"},"Alan Tsai")," \u7684 ",(0,s.kt)("a",{parentName:"li",href:"https://blog.alantsai.net/posts/2016/03/ssh-config-ssh-agent-passphrase-management",title:"\u5982\u4f55\u7528config\u7ba1\u7406\u591a\u500b\u7db2\u7ad9\u7684ssh key\u548c\u5982\u4f55\u4e0d\u7528\u6bcf\u4e00\u7d44\u8f38\u5165ssh\u7684Pass Phrase"},"\u6587\u7ae0")," \u88e1\u9762 ",(0,s.kt)("inlineCode",{parentName:"li"},"config \u7684 alias\u4f5c\u7528")," \u4e00\u7bc0\u3002"))),(0,s.kt)("h3",{id:"\u9a57\u6536"},"\u9a57\u6536"),(0,s.kt)("p",null,"\u53ef\u4ee5\u5148\u5230 GitLab \u770b\u770b SSH Key \u662f\u5426\u5df2\u7d93\u6b63\u78ba\u7684\u88ab\u52a0\u5165\u3002"),(0,s.kt)("p",null,"\u518d\u4f7f\u7528\u547d\u4ee4\u63d0\u793a\u5b57\u5143\u3001Git Client \u548c IDE \u8a66\u8457 Clone \u5c08\u6848\u770b\u770b\uff0c\u5982\u679c\u90fd\u6210\u529f\u5c31\u5927\u529f\u544a\u6210\u56c9!!"),(0,s.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,s.kt)("h3",{id:"tortoisegit-\u986f\u793a-no-supported-authentication-methods-availablesever-sent-publickey-\u932f\u8aa4"},"TortoiseGit \u986f\u793a No supported authentication methods available(sever sent: publickey) \u932f\u8aa4"),(0,s.kt)("p",null,"\u5c07\u9810\u8a2d\u7684 SSH Client \u6539\u70ba Git \u7684 SSH Client (\u8def\u5f91\u70ba\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\OpenSSH\\ssh.exe"),")\u5373\u53ef\uff0c\u5982\u4e0b\u5716\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u66f4\u6539 TortoiseGit \u9810\u8a2d\u7684 SSH Client",src:n(42779).Z,title:"\u66f4\u6539 TortoiseGit \u9810\u8a2d\u7684 SSH Client",width:"1117",height:"1033"})),(0,s.kt)("h3",{id:"visual-studio-\u986f\u793a-fatal-detected-dubious-ownership-in-repository"},"Visual Studio \u986f\u793a fatal: detected dubious ownership in repository"),(0,s.kt)("p",null,"\u5728 PowerShell \u4e2d\u8f38\u5165\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"git config --global --add safe.directory '*'\n")),(0,s.kt)("h2",{id:"\u984d\u5916\u6536\u9304"},"\u984d\u5916\u6536\u9304"),(0,s.kt)("h3",{id:"\u600e\u9ebc\u628a\u539f\u5148\u900f\u904e-https-\u5b58\u53d6\u7684-repo-\u6539\u70ba\u7528-ssh"},"\u600e\u9ebc\u628a\u539f\u5148\u900f\u904e HTTPS \u5b58\u53d6\u7684 Repo \u6539\u70ba\u7528 SSH?"),(0,s.kt)("p",null,"\u76f4\u63a5\u5728 Repo \u7684\u8cc7\u6599\u593e\u4e0b\u6307\u4ee4\u66f4\u6539 remote \u7684 URL \u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin git@gitlab.ouch1978.com:pocs/dotnetcoretest.git\n")),(0,s.kt)("h3",{id:"\u5982\u679c\u5df2\u7d93\u6709\u4e00\u5806\u900f\u904e-https-\u5b58\u53d6\u7684-repo-\u5462"},"\u5982\u679c\u5df2\u7d93\u6709\u4e00\u5806\u900f\u904e HTTPS \u5b58\u53d6\u7684 Repo \u5462?"),(0,s.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},".git \u8cc7\u6599\u593e\u5728 VSCode \u4e2d\u9810\u8a2d\u662f\u6703\u88ab\u96b1\u85cf\u8d77\u4f86\u7684\uff0c\u6bd4\u8f03\u7fd2\u6163\u4f7f\u7528 NotePad++ \u7684\u670b\u53cb\u53ef\u4ee5\u8003\u616e\u4f7f\u7528 NotePad ++ \u4fee\u6539\u3002\n\u6216\u662f\u53c3\u8003",(0,s.kt)("a",{parentName:"p",href:"/blog/2022/10/10/show-hidden-items-in-vscode"},"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848")," \u9019\u7bc7\u6587\u7ae0\u4f86\u8abf\u6574 VSCode \u7684\u8a2d\u5b9a\u3002")),(0,s.kt)("p",null,"\u76f4\u63a5\u4ee5 VSCode \u958b\u555f\u6240\u6709 Repo \u7684\u6839\u76ee\u9304\uff0c\u7136\u5f8c\u900f\u904e\u641c\u5c0b\u6240\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},".git/config")," \u6a94\uff0c\u7136\u5f8c\u53d6\u4ee3 url \u7684\u503c\uff0c\u5982\u4e0b\u5716\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u4ee5 VSCode \u4e00\u6b21\u4fee\u6539\u591a\u500b Repo \u7684 Remote URL",src:n(69761).Z,title:"\u4ee5 VSCode \u4e00\u6b21\u4fee\u6539\u591a\u500b Repo \u7684 Remote URL",width:"2400",height:"1554"})),(0,s.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://blog.alantsai.net/posts/2016/03/ssh-config-ssh-agent-passphrase-management",title:"\u5982\u4f55\u7528config\u7ba1\u7406\u591a\u500b\u7db2\u7ad9\u7684ssh key\u548c\u5982\u4f55\u4e0d\u7528\u6bcf\u4e00\u7d44\u8f38\u5165ssh\u7684Pass Phrase"},"\u5982\u4f55\u7528config\u7ba1\u7406\u591a\u500b\u7db2\u7ad9\u7684ssh key\u548c\u5982\u4f55\u4e0d\u7528\u6bcf\u4e00\u7d44\u8f38\u5165ssh\u7684Pass Phrase"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/howto/30184/10-ways-to-generate-a-random-password-from-the-command-line/",title:"10 Ways to Generate a Random Password from the Linux Command Line"},"10 Ways to Generate a Random Password from the Linux Command Line"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://ourtechroom.com/tech/https-vs-ssh-in-git/",title:"HTTPS vs SSH in git"},"HTTPS vs SSH in git")))))}h.isMDXComponent=!0},79860:function(e,t,n){t.Z=n.p+"assets/images/generate-ssh-key-in-git-bash-ab66d31ce28cb99f48a865a0ceda1018.png"},69761:function(e,t,n){t.Z=n.p+"assets/images/set-git-remote-url-with-vscode-once-at-a-time-939776e7fbd56cd295cacde64458b568.png"},42779:function(e,t,n){t.Z=n.p+"assets/images/tortoise-git-ssh-client-setting-61843b9fa85befa84094aa53b246ebb0.png"}}]);