"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8490],{9159:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(85893),o=r(11151);const s={title:"\u9023\u7dda\u5230\u9060\u7aef Windows Server \u6642\u51fa\u73fe There are no Remote Desktop License Servers available to provide a license \u7684\u56e0\u61c9\u63aa\u65bd",description:"\u6700\u8fd1\u8981\u900f\u904e\u9060\u7aef\u684c\u9762\u9023\u7dda\u5230\u67d0\u4e00\u53f0 Windows Server \u6642\uff0c\u7a81\u7136\u51fa\u73fe\u9019\u500b\u932f\u8aa4\u8a0a\u606f\uff1a 'The remote session was disconnected because there are no Remote Desktop License Servers available to provide a license' \u7136\u5f8c\u5c31\u518d\u4e5f\u7121\u6cd5\u5f9e\u6211\u7684\u96fb\u8166\u9023\u9032\u53bb\u4e86\u3002\u4e0d\u904e\uff0c\u5f88\u795e\u5947\u7684\u662f\uff0c\u6709\u4f4d\u540c\u4e8b\u8aaa\u4ed6\u6c92\u9047\u5230\u554f\u984c\uff0c\u9084\u662f\u53ef\u4ee5\u5f9e\u4ed6\u7684\u96fb\u8166\u9060\u7aef\u9023\u7dda\u5230\u540c\u4e00\u53f0 Server...",authors:"ouch1978",tags:["Windows","Trouble Shooting"],keywords:["MSTSC","\u9060\u7aef\u684c\u9762\u9023\u7dda","GracePeriod"]},n=void 0,a={permalink:"/blog/2022/11/23/rdp-no-license-server-error-workaround",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-11-23-rdp-no-license-server-error-workaround/index.md",source:"@site/blog/2022-11-23-rdp-no-license-server-error-workaround/index.md",title:"\u9023\u7dda\u5230\u9060\u7aef Windows Server \u6642\u51fa\u73fe There are no Remote Desktop License Servers available to provide a license \u7684\u56e0\u61c9\u63aa\u65bd",description:"\u6700\u8fd1\u8981\u900f\u904e\u9060\u7aef\u684c\u9762\u9023\u7dda\u5230\u67d0\u4e00\u53f0 Windows Server \u6642\uff0c\u7a81\u7136\u51fa\u73fe\u9019\u500b\u932f\u8aa4\u8a0a\u606f\uff1a 'The remote session was disconnected because there are no Remote Desktop License Servers available to provide a license' \u7136\u5f8c\u5c31\u518d\u4e5f\u7121\u6cd5\u5f9e\u6211\u7684\u96fb\u8166\u9023\u9032\u53bb\u4e86\u3002\u4e0d\u904e\uff0c\u5f88\u795e\u5947\u7684\u662f\uff0c\u6709\u4f4d\u540c\u4e8b\u8aaa\u4ed6\u6c92\u9047\u5230\u554f\u984c\uff0c\u9084\u662f\u53ef\u4ee5\u5f9e\u4ed6\u7684\u96fb\u8166\u9060\u7aef\u9023\u7dda\u5230\u540c\u4e00\u53f0 Server...",date:"2022-11-23T00:00:00.000Z",formattedDate:"2022\u5e7411\u670823\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"Trouble Shooting",permalink:"/blog/tags/trouble-shooting"}],readingTime:4.985,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u9023\u7dda\u5230\u9060\u7aef Windows Server \u6642\u51fa\u73fe There are no Remote Desktop License Servers available to provide a license \u7684\u56e0\u61c9\u63aa\u65bd",description:"\u6700\u8fd1\u8981\u900f\u904e\u9060\u7aef\u684c\u9762\u9023\u7dda\u5230\u67d0\u4e00\u53f0 Windows Server \u6642\uff0c\u7a81\u7136\u51fa\u73fe\u9019\u500b\u932f\u8aa4\u8a0a\u606f\uff1a 'The remote session was disconnected because there are no Remote Desktop License Servers available to provide a license' \u7136\u5f8c\u5c31\u518d\u4e5f\u7121\u6cd5\u5f9e\u6211\u7684\u96fb\u8166\u9023\u9032\u53bb\u4e86\u3002\u4e0d\u904e\uff0c\u5f88\u795e\u5947\u7684\u662f\uff0c\u6709\u4f4d\u540c\u4e8b\u8aaa\u4ed6\u6c92\u9047\u5230\u554f\u984c\uff0c\u9084\u662f\u53ef\u4ee5\u5f9e\u4ed6\u7684\u96fb\u8166\u9060\u7aef\u9023\u7dda\u5230\u540c\u4e00\u53f0 Server...",authors:"ouch1978",tags:["Windows","Trouble Shooting"],keywords:["MSTSC","\u9060\u7aef\u684c\u9762\u9023\u7dda","GracePeriod"]},unlisted:!1,prevItem:{title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/12/05/workaround-for-npm-web-login-not-support-error"},nextItem:{title:".NET Framework \u5c08\u6848\u51fa\u73fe\u627e\u4e0d\u5230 SQLite.Interop.dll \u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/11/10/fix-sqlite-interop-dll-missing"}},i={authorsImageUrls:[void 0]},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function c(A){const e={h2:"h2",img:"img",p:"p",...(0,o.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(e.p,{children:"\u6700\u8fd1\u8981\u900f\u904e\u9060\u7aef\u684c\u9762\u9023\u7dda\u5230\u67d0\u4e00\u53f0 Windows Server \u6642\uff0c\u7a81\u7136\u51fa\u73fe\u4e0b\u9762\u7684\u932f\u8aa4\u8a0a\u606f\uff1a"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"\u9060\u7aef\u5de5\u4f5c\u968e\u6bb5\u5df2\u4e2d\u65b7\u9023\u7dda\uff0c\u56e0\u70ba\u6c92\u6709\u53ef\u7528\u4f86\u63d0\u4f9b\u6388\u6b0a\u7684\u9060\u7aef\u684c\u9762\u6388\u6b0a\u4f3a\u670d\u5668",src:r(75194).Z+"",title:"\u9060\u7aef\u5de5\u4f5c\u968e\u6bb5\u5df2\u4e2d\u65b7\u9023\u7dda\uff0c\u56e0\u70ba\u6c92\u6709\u53ef\u7528\u4f86\u63d0\u4f9b\u6388\u6b0a\u7684\u9060\u7aef\u684c\u9762\u6388\u6b0a\u4f3a\u670d\u5668",width:"697",height:"188"})}),"\n",(0,t.jsx)(e.p,{children:"\u7136\u5f8c\u5c31\u518d\u4e5f\u7121\u6cd5\u5f9e\u6211\u7684\u96fb\u8166\u9023\u9032\u53bb\u4e86\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u904e\uff0c\u5f88\u795e\u5947\u7684\u662f\uff0c\u6709\u4f4d\u540c\u4e8b\u8aaa\u4ed6\u6c92\u9047\u5230\u554f\u984c\uff0c\u9084\u662f\u53ef\u4ee5\u5f9e\u4ed6\u7684\u96fb\u8166\u9060\u7aef\u9023\u7dda\u5230\u540c\u4e00\u53f0 Server..."})]})}function d(A={}){const{wrapper:e}={...(0,o.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(c,{...A})}):c(A)}},75194:(A,e,r)=>{r.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArkAAAC8CAIAAADzbiF5AAAACXBIWXMAABJ0AAASdAHeZh94AAAXnElEQVR42u3dzY8cx3nH8fkXBJIKfKTtUBG0FOhsbARjIgIDBAiEhFCQGCvIFCGH1FgWJZrH3HTxQceFjjnpQiMhIIEXDQRIF94FGCIE5rAQAvsPIKiLEZ02tfNaT9XzVD3VOzM7L98P1jJnpl+qq3u6fl3dPd378U76kXT58uU7hlu3bt3T3L59+95CXf/7S2/94m9vvf7zf7r24zvv/jr59P3333v7Vzd++Yt//se/+8s3/+VvXvuHvwqDvXXjX99778677/7mzp137927+/5vbrz9y5/f+rcXf/3GX7//zsFvf/ver26+/va/v/nWjdcXVMbbr17dm7t6EFXB7YOrez8Ym39wcPUHe6/eFhPYS95xjpgPejX8++rBdPC9yfivTkcMRT156+pBPKn439X5HlQmtZeObBRPHf2kJqeDzhbUKuopK3D27/wf1uhR+U7ezTeDUt3W6kFO7OBq9qZaOeparm4bSTXqCytKs5d/7F9ZTRubOru8bs1pTksVCpVXSFzbRn361qaj0raKZ8ceGoU7DqFZ+eFI3NZsbqPZC/87BgAA0JAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWYGsAAAAyAoAAICsAADAjuv1el999ZX1afgoDLD4rDAc9ITBcD1r5+iwLwva6x8edZ7SypZSFnu9Kne06td1fQMA7DSgxoXCR4vICvP24uRV1za4sZlqnE3Wwo9DToemzsgK7UXy5YRoVsPBGbfMi19GAMBaxIVuQaFbVhi1bytoThaQFaaNcXPzu6KssKKaJCsAwM7Hhc5B4RRZIXmZdfmPWpzh7JOTwY/EK230+SfirMf0TXVG9RZell6fyHx+4zfjKU0O/QeVIiW9AycTmn+qlzepV73PIZv4uGyzD2eTtt4vVV08izCHvNqT5NBYJADAWsSF0wSFTllBHguLV9Fwo1Zn8sGkDYlfibZWTHr+SjZT1ozqWSEaU59I/O7wMMkK4oxLXiSj8ONGdzqs0bdRjAr2xMfVOZl2VDzrfbPqkjVxOFSWMX7VXiQAwFrEhdMEheMu1zaKZkA57Jw3sfISB/Fq3qzIViVu7cWH5ozqWWE+rjERZbTJW2mzVyqSmE4aA9STDaWsUJh4HtbK71tVZ8zezAodigQA2KmsoDaC6Q0S855p++hUtt1po2K0TfaMGvoVzIlMOj7SSzL6WW9AWiSz8Fm7ql0FUMgKpYnLpZw308b71lJbc7fWXJciAQDOPiicxTmI+IXd2i0hK9QPVc3rFczZJSPPAsMsK9gt/umzQqFNXXBWMDIBWQEAdiAoqC+XnBXM8//tWSEf3ToH4Wt+tKyQnJ8vT2Q2xGRKo/xQOHvvPgehN8z2PRqliTdmBWuprfetNdelSACAtQgKp4wLXe6DiE/jy9/qOTocqCe3S+fAzcsmldMdyoxKWUH58QJtIvOfNJhNQDaDRj9KofDyhx0KV/vF14BO3phf8KFPvDErFNeRfm2jem1JlyIBANYlKJwmLnTKCvJ4Oz4hbtwxUHoV34aXH7daN1KqbVH2u436pXvpRJQbCkXjFzX8aZGswie3jBbPn8hS12umOSsUqi56X97u4Lhn0lEkAMAZOJvfeEYrftAIALA1yApkBQAAyApkBQAAyAoAAICsAAAAyAoAAICsAAAAyAoAAICsAAAAyAoAAICsQFYAAABkBQAAQFYAAABkBQAAQFYAAABkBQAAQFYAAABkBQAAQFYAAABkBQAAALICAAAgKwAAALICAAAgKwAAALICAAAgKwAAALICAAAgK/g9ffL4648+/OLG9c+uv3L/0rnZX3gZ3gwfhQGofQAAdi4rfP/ds5ADHl678umL5x+9fOGb/ee//enzz/p/MfsLL8Ob4aMwQBgsDBxGYTUAALD9WWGcEh7sX/xy73ySD6y/MFgYOIxCYgAAYMuzwtMnjx9eu/L5S+f/9DNXSoj/wihhxDA6ZyUAANjOrPDtJ7+/f+ncH35yoTUlxH9h9DCRMClWCQAAW5UVQuv+4IVzzpMO1VMSJ5MiLgAAsDVZYRwUOpx3KJyPIC4AALAlWeHpk8cnZw1+urCgMOtdCJPl2gUAADY7K3z/3bOH166c8hqFwrULYeLcGQEAwAZnha8/+vDzl87nzfyff3f3//77P/2xIAwcRsnfDxMPs2D1AACwkVkhHPE/2L+YX6YQWv3JAJ/9lycohMHGw+dx4eTChf2LrV0Lw0FPMRgeHx8d9kf/j3oFblI9xet14wp/moVN1lr/8Gi7lmmLv1/Jrmld14rUdQNb0fo9qdhsNuuzQxDrfWM39y5ZIRzxf7l3Xu0kmOeJWlyYBYVA7YoIs+jctZBtOhuyS9rkvT5NzbJX9JZkBVHc3csK86U9ebWKFde+fWRrZdzYdVhRxvpd9CarZoU1yl1R2YaHm7qH75IVHl67Yl3SGCeAQlzwDBZmEWZEVgBZgaywjVlhtPArWHMLyApKm0dWcFfAluzTm7PC0yePP33xvLPDQM0BzjwR/sKMut0QYWSFWdeaWHlRh5u6UsfjimStjjLa/oezT6anPpSOJ9HFJ7rQ0zdrZYtHkzvgfKx8yOyd5CuslrNcmdbx0+zVfOcRTz2ehrZE1hIP5TkIsTJK1SLL07CMXTakZL5NK9pa2HzHO5+CrDZnqew1IjeK7KyPa9vLF0ecHPTXp/fLmDdzakkbJ+UsrdluKVkhebkeexW9hZel9+1k4imNxxgMKkWSR+HFbbucFQp7M+3r7/iOt2/w5RhT3cIHdrh0fTtq+9LlZoWvP/rw0csX/OcXkjTgDwrhL8yo22kINSvELaKo8Vk16qt1NEh/IDYObZTRepl8MFmR8SvxrZDb6uxVvlsuly0eYtq3pY+VD6mNG8/fLqdZmfrXVPZfhlfTqDBQZqWVKl2z9pT7eRXE1RKtg8Nht2Vs3pDU+TpXdGFh8wZY7EPijc1dKn2NWFnBv+3V+hVa6tP7ZZTfEnW5OkyqWFrrS23tl+QR5xrtVaysEI3p3clEU0o35qRIRuEL23ZTVjC//sY2pqzlrhu8mJzV42Bt4UYnnGvc2r506VnhixvXv9l/3n/dYpwJmoJC+AszCrNbVFbQ6lyJnsUGuTRK4WA6GinrfTsqHBrXyqa8Z4yVD6lNLxq5UE6rMvU6OwkHh4d9a/GTGVf6pNPR41qWWSGvluqBh2cZWzckY//hWtGlhS0t27yMjaXSS1jICr5tr5YVWurT+2V0LFeHSTlLW1p043LBddqr1NeceyczfSs9oigVSUzH3rabvt7efgdlGzv9Bh91Aji2N3uzbP12LPr8XnNW+Oz6K87fX0qSQWtQGF+yEGa3uHMQ2Qan3Tih7iDkt1UfRa5A45Wy0RoNtLtsvZ6neNmQyjty52OW06hMvdLG/QjTcZXjiWTXqZSqsA8zdolqtajXSbcuY+OG5Dm2tsYtLmwx8kS13VQqfY1Y5yD82577eoX6F9P7ZXQsV4dJFUpbbkWO1f6Cdd2r1PoVGncy/X7WG5AWySy8uW03ZQX7Non6Nia/+102+GSO8wzomLu6S/KOW9yXriAr3L90zv/zCXE+aA0K478wuyVnhWpN5vsUfZQlfKt9azneJMpj1QLD4rLCdKCjSY/CODIczfoXRN+qdWqx3rqbh0+eallwVnD3jTpXtPsC3WJW8JfKWiP29QpN215zVjAbfc+X0bFcHSa1wKyQ9Ymt017FvF7BnJ21k5llBbvFP8us4NjGkv1bhw3ezFuOuc8Xo9DZUu17XkxgWG5WyONCU1BYelZwXaTqahq93+p8dKu5a7uAdjp0fSy9BGnfYqmcvgoZ5YJhfPLh5FREfLK4PA3Xe/o5CGe1dFnGxg3Jet+zoosLW9ra1fPH1VKZayTbkrV+Zt+2584K5qS8X0bHGO2T8pe2cA7CLMsa7VWM85PiSg/fTmZ+yGB2wBcLb27bTVnB+fX3bmONG7xaUufcZ8sxTC4SdY7bpS0hK5g7QnFZzcA8QpbHKcoorm91Pno/uXo/6eIqlm04iDefqIMqGysf0hhX9laq5XTuZLPLkk6OL7TNPb74RytVOtHqtY3Vaple3NS+jM0bkjpf54puurYxPkQ1V2KhVNYaSa9znB9Uebe90peztT69X0Z9P5ktV9uk/KXt+66Jj9bVGu1V8qqZ3MEwrNSVskkkp6z0fpRC4Qvbdsv1Cr6v/6AYIrtt8GHYtBsu/i7Vt/DJgvT72b1itXFr+1LOQbRlheTsT9/xxbFGcX6rj+27BeefaLc8GR39xbsO08sAiu8U7zIyu6GLh0TpFe/qHWJhGHGE5L4Bbnxjk35tY7la9BspHcvYZUPS5utc0ebCqscd6ilTf6n0NSKGjQrh3/asNZhflFGvT++XUd9ixHJ1mFSptPaXurJfUm5hPtu9ivK7jZXrNO3vnaixqOFPi1S4gbqwbZvXHigXR+lf//o2JrpIOmzwSdGUn7iqbuFqRvKVfHF3TG7rtY0AgE3Hr9Otj+28ZxIAQFbAmWWFjfgtJgAAWQFnlhU24jeeAQDAmWWF4014dhQAADjLrLD+z6QGAABnmRW+/+7Zg/2Lf/pZ2rXw59/ddQaFJC6EEZOPwsTDLMKMWEMAAGxeVhh3LXz+ktK1EFp9tZPA+gsD50Eh/IWJ06kAAMAGZ4VwxP/w2pU//ORC048wOv/CZMPE6VQAAGCDs8Lx6IaI+5fOOX+Xyf8XJhgme7a3P8S/oOm5aacwzKbf8yN/TFRY9CNP0+oqzBoAsBlZIfj2k98/eOFcfuFC57+TyxReOBcmu1aN5UqzwuaEi2VnBQDANmSFWVxYSO9CmMi6BQWyAlkBAHDarDCOC/cvnTvltQth9JMzGqcPCtpDSJJHtsgnASmP10h6wqvPhxkPIx5RYzR+5cd5iMeMaE9VKTw6xSjAuEEXT2tTJ2hVkfn8FfmU1OPGpz5Zg5g1L8cWz6TTHss0fsaRsjJKz44ipQDA0rLC8ejahYfXrnz+0vkO5yPCKGHEMPpCrlGIHgsaPdgwa/Cnj0nVBrZbrMLwycO+6s+ONx7Erj07TraM9lOJtQKM5tkfGE97rFdRegGB8bBYz6JZtefJCmKE6SNljZmKBw/PyxwPPTxUnmtvrREAICssJCscj+6M+PqjDx/sX/xy77zzlEQYLAwcRgkjLuWuh3lrE7U7xSf7HtWObq3hs8e95zNWjpP1R72KJ6bmT5c1ng+rFyB5YnRhgnoV2eWPZ+pbNDsS1bJC9fH08UzzRwXP3laeC99WbAAgKywqMTy8duXTF88/evnCN/vPJ7khvAxvho/CAGGwZaQE0ceeNXRHZs95z5MVqsObISV9xLr9WPjSka7extoFkItbnKA6zvzjrCUVMcOzaEbt1bOCFRX0mRqPn5/OXNaGq9gAQFZYZFaYefrkccgBX9y4/tn1V+5fOjf7Cy/Dm+Gj5dwVOdr9q+385N9JO9izDmOto9vq8MWs4GiJzi4raFVUKr/MCtVFs1dN96xgBhItK8RpZfQ5Jx0A4GyzwtkoNROjpie+Hs8eWG+xisOLRkftnU8aLU9WyEdxnoOQJ+/NhjP9PKuiYvnlTGqLVivIcaXms6HNmVbnNH3LuUYAgKywdVlBXOGXnqsPxJlsfeB6i5UNn9xSYHVtiOsKB1o7JZv9dBSjcbMLkIaL8gTTKnJf21hftOKqqWSFZPrTaxuNmRpZYTjIQ6I+BTIEAGxzVojPiIe9vXLDn2gDrIGLV+Nbww/n5+Kjxtm857B6Z6F2z2TxVxzUAigdEaUJZlWk3JYxnUUy6eqilVZNLSvI6YvOouxdIysYN0cqUyArAMB2Z4XdxE8YAQDICiArAADICiArAADICgAAgKwAAADICgAAgKwAAABAVgAAAGQFAABAVhiTzw4sPN0ZsZ14HHOHhZQ/At19GAAgK6xXVpA/yZw973GjF2mB44qPyAprtvrItgDICqvaM89/2Z+sQFYgKwAAWaEhK+gPErKeqjQ/sSFb18oTncT0xLMde9ZDnmYfzrtD0oHtRz8ls1PGzRdo8pE+d++SeutnPJfJEyoH8jna+XMoC+MOCxUtyxgXLX7advK0rWkdpJUVbTZmFYlNS1aFUc/RUmglV1dccbMxqgUAyArOrDB7+rBodsTTjic72ehRyqM987xtnu3FD5UnEcqnSMv2K32MsnhTvBLPaTYfa20V0phdU7+COvf6kjbUz+jt/kB5mme0plzjpkXQ66T2EO3ouZLJKxEpjspVpD+1fFoV+WLGS2GVXHu+p7nZWNUCAGSFelaILzoznjh9bPZMz4ZSPvdMQW1Xs6bbaCLFJF3tvRFYWrKCNnfHkjbUT/Kw5+ygvWFczxaQLnxcR7K+slfKtmKuIJkVyuu8uBTmA7ndmw0AkBWcWUG7DSJpVVP6CQJ52ClbFnMKlahgNquynRFHqIPCuYb5KRa1C7rb9QqzuXuWtKF+0rZUWXj3uHoh4jrJxrADmPlKjTPJCsr6HuRca9eFaJtcnnl9mw0AkBVa+xWajsBlt7R1gcNoRHMKK8gKRiGXmBV8LZGrfrKGbVIGeZDuHLe64rJJLT8raIGhlBXsTY6sAICscJZZweq1tRvr9D1Pv686TP6m7EyuZwVrKKtIp8wKbT3c1frJG7bZJYbxZRfOcWsrLptUcg5iWVmh9HE+EWOTM6+vKW42AEBWWExWSH88Z3p5WX4h/vTwNG7Hop7ybArK0W56sWE6Yr/eFIkmziqkMbtSx4D4qNQQVpa0oX6MSxuC9KYT17jHnjqxr21cfFbQqsJZz0nJlespWjcbACArnCYrHMvT4vK3m6ZviV7e4n2UvdKhe/FmQv2WjWynPx0juckuLqQ5OzFu3sbKe/n0JqeypA31o7X3oj1vHDcvQlonUeHG9zsuNSuU78TN69lTcu2eSd9mAwBkBQAAQFYAAABkBQAAQFYAAABkBQAAQFYAAABkBQAAALICAAAgKwAAALICAAAgKwAAALICAAAgKwAAALICAAAgKwAAALICAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAGxbVvhfAAAAzSQrPAMAANCQFQAAAFkBAACQFQAAAFkBAACQFQAAAFkBAACQFQAAAFkBAACQFQAAAFmBrAAAAMgKALB7ev/xP7v8V66cT3YbWQEAQFaoZ4U/7iqyAgBAZIXQNjz33HM79V+yAlkBANCQFcbN5+4Iy0tWICsAANr6FXYNWYGsAACgX4F+BbICAIB+BfoVyAoAAPoV6FcgKwAAtr9f4eM3enP7HzyKPnr0wX7vjY+TQeUgW9KvkC7pdHGrC+sZhqwAANjcfoW08R+9nreZogU9eZG3p1vSr0BWAADQr2AkhayhO3lz2mpGLag6LP0KZAUAwDb3K8SpIGk2J83ftAWN3vrj7vYrjDpW0lM18TDjf88HW06VkRUAAKvqVzCiQvzBuAU1B9ylfgURl6IaSbJClBCWdc6GrAAAWFW/gjMr9Hq9Ffayn2W/gma65EoXw7iK0qwQ1+hyumPICgCAtetXWMlFjevdryDuFZlQs4KMBku5mIGsAABYVb+CddSrXK+Q3h+xc9cr2KdhyAoAgO3tVzBaQOM+iFHnwkrORaxjVrDPJpTOQSznQg+yAgBgVf0Kyu8pFH9fYSWdC2t7H4Rc+EcfvKFcyDA+UzEdaFl3mZIVAACr61dQruqT7WXago6HXXLvwtreMxlftKCedxj9++N5fS4nV5EVAACr7FdYOxv9PIjV/C4TWQEAsOJ+hbWz+qzQqyErAADoV6BfgX4FAAD9CvQrbAWyAgCAfgWyAlkBANDSrzCOC7vzX7ICWQEA0JAVdvaPrEBWAACQFU6VFXYZWQEAACwGWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVAAAAWQEAAJAVyAoAAICsAAAAOmeFHfQj6fLly3cMt27duqe5ffv2vfVw9+7dd9555+abNw8ODl577bVXR8I/wsubN2+Gj8IA9wAANZ4de2gU7jiEZuWHI3Fbs7mN5v8DXbCsSCf5ELUAAAAASUVORK5CYII="},11151:(A,e,r)=>{r.d(e,{Z:()=>a,a:()=>n});var t=r(67294);const o={},s=t.createContext(o);function n(A){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(o):A.components||o:n(A.components),t.createElement(s.Provider,{value:e},A.children)}}}]);