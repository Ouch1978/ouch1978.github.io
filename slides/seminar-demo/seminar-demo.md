---
title: reveal-md - Seminar 外掛使用範例
date: 2022/03/10
# black, white, league, beige, sky, simple, serif, night, moon, solarized
theme: black
highlightTheme: monokai-sublime
tags:
revealOptions:
  transition: "fade"
---

# Seminar 外掛範例

---

## 建立房間

請按下下面的按鈕來建立房間

<a id="host" href="#"><i class="fa fa-door-open"></i></a>

---

## 加入房間

### 掃描 QRCode 或超連結加入房間

<div>
    <canvas id="qrcode" style="width:300px;height:300px;"></canvas>
</div>
<a id="room"></a>

---

## 我是測試頁

---

## 投票功能

### 換另一扇門得獎的機率是?

<div style="height:320px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monty_open_door.svg/1200px-Monty_open_door.svg.png"/>
</div>

<div class="poll" data-poll="1">
    <button data-value="50">1/2</button>
    <br>
    <button data-value="67">2/3</button>
</div>

<p style="font-size:24px;color:gray;">已回答人數: <span class="voters" data-poll="1">0</span></p>

---

## 投票/問卷結果

### 結果可以用純文字顯示

<blockquote class="results" data-poll="1">
    1/2: <span data-value="50">0</span><br>
    2/3: <span data-value="67">0</span><br>
    <p style="font-size:24px;color:gray;">總回答數: <span class="voters" data-poll="1">0</span></p>
</blockquote>

---

## 投票/問卷結果：長條圖

<div style="height:480px">
<canvas data-chart="bar" data-poll="1">
, 1/2, 2/3
, 0, 0
</canvas>
</div>

---

## 投票/問卷結果：圓餅圖

<div style="height:480px">
<canvas data-chart="pie" data-poll="1">
, 1/2, 2/3
, 0, 0
</canvas>
</div>

---

## Close Room

<a id="close" href="#"><i class="fa fa-door-closed"></i></a>
