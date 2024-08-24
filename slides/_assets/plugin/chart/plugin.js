window.RevealChart=window.RevealChart||{id:"RevealChart",init:function(t){initChart(t)},update:function(t,a,e){update(t,a,e)}};const initChart=function(t){function a(t){var a;try{a=JSON.parse(t)}catch(e){return null}return a}function e(t,a){for(var r in a)try{null!==t[r]&&"object"==typeof t[r]&&"object"==typeof a[r]?t[r]=e(t[r],a[r]):t[r]=a[r]}catch(n){t[r]=a[r]}return t}function r(t,r,s){t.chart=null;var i=t.getContext("2d"),d={responsive:!0,maintainAspectRatio:!1},l={labels:null,datasets:[]};if(null!==s)for(var c=0;c<s.length;c++){s[c]=s[c].replace(/<!--/,""),s[c]=s[c].replace(/-->/,""),(o=a(s[c]))&&(o.data&&e(l,o.data),o.options&&e(d,o.options))}var o,h=r.split("\n").filter((function(t){return""!==t}));null===l.labels&&h.length>0&&(l.labels=h[0].split(","),l.labels.shift(),h.shift());for(c=0;c<h.length;c++){l.datasets.length<=c&&(l.datasets[c]={}),l.datasets[c].data=h[c].split(","),l.datasets[c].label=l.datasets[c].data[0],l.datasets[c].data.shift();for(var u=0;u<l.datasets[c].data.length;u++)l.datasets[c].data[u]=Number(l.datasets[c].data[u])}if(o=n[t.getAttribute("data-chart")])for(c=0;c<l.datasets.length;c++)for(var f in o)l.datasets[c][f]||(l.datasets[c][f]=o[f][c%o[f].length]);t.chart=new Chart(i,{type:t.getAttribute("data-chart"),data:l,options:d})}var n=t.getConfig().chart||{},s=n.defaults;return s&&e(Chart.defaults,s),t.addEventListener("ready",(function(){!function(){for(var t=document.querySelectorAll("canvas"),a=0;a<t.length;a++)if(t[a].hasAttribute("data-chart")){var e=t[a].innerHTML.trim(),n=e.match(/<!--[\s\S]*?-->/g);if(e=e.replace(/<!--[\s\S]*?-->/g,"").replace(/^\s*\n/gm,""),t[a].hasAttribute("data-chart-src")){var s=t[a],i=new XMLHttpRequest;i.onload=function(){4===i.readyState?r(s,i.responseText,n):console.warn("Failed to get file "+s.getAttribute("data-chart-src")+". ReadyState: "+i.readyState+", Status: "+i.status)},i.open("GET",s.getAttribute("data-chart-src"),!1);try{i.send()}catch(d){console.warn("Failed to get file "+s.getAttribute("data-chart-src")+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+d)}}else r(t[a],e,n)}}(),t.addEventListener("slidechanged",(function(){for(var a,e,r=t.getCurrentSlide().querySelectorAll("canvas[data-chart]"),n=0;n<r.length;n++)r[n].chart&&!1!==r[n].chart.config.options.animation&&(a=r[n],e=void 0,e=a.chart.data.datasets,a.chart.data.datasets=[],a.chart.update(),a.style.visibility="hidden",setTimeout((function(t,a){t.chart.data.datasets=a,t.style.visibility="visible",t.chart.update()}),500,a,e))}))})),this.update=function(a,e,r){a.chart.data.datasets[e].data=r,a.chart.update(),t.layout()},this};