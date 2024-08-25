---
title: K8s 基本架構
description: 簡單介紹 K8s 基本架構與各元件職責。
author: ouch1978
tags:
  - Container
  - K8s
keywords:
  - K8s
  - Kubernetes
last_update:
  date: 2024/08/25 GMT+8
  author: Ouch Liu
---

import Drawio from '@theme/Drawio'
import k8sGraph from '!!raw-loader!../k8s-for-dummies.drawio';

## 前言

對我來說，要學習一項新的東西，最快速的入門方法就是從了解它的架構下手。

所以這篇就來以圖片搭配文字的方式，來介紹 K8s 中各個主要的元件以及它們的功能各是什麼。

## K8s 基本架構

K8s 最基本的一座 Cluster 組成的基本元件如下圖(至少包含一個 Master Node 和一個 Worker Node)：

<Drawio content={k8sGraph} lightbox="0" toolbar="zoom"/>

<br/>

:::note 註記
Master Node 裡的元件可以在 Cluster 中的任何節點上執行，所以在開發環境上，也很常見同一台機器同時扮演 Master Node 和 Worker Node 的情形。<br/>
但是在正式環境上，還是建議把 Master Node 和 Worker Node 拆開來，讓 Master Node 專注在 Cluster 的管理功能上，不用兼顧容器的運行。
:::

接下來簡單介紹各元件的職責和功能。

### Master Node / Control Plane

:::tip 懶人包
Master Node 又稱 Control Plane，主要用來管理和調度整個 Cluster 的資源。
:::

在正式環境中，通常會建議有三個以上且為單數的 Master Node 存在，以確保高可用性。

再來介紹 Master Node 中幾個重要的元件。

#### API Server (kube-api-server)

:::tip 懶人包
API Server 是外部和 Master Node 打交道的單一窗口，它扮演 Master Node 的前端，負責將 K8s API 對外曝露，讓外部可以呼叫其中的 API 來和 Master Node 進行互動。
:::

如果以快餐店來比喻 Master Node 的話， API Server 就扮演著點餐櫃檯/收銀員的角色，它不僅負責將外部進來的需求轉派給其他元件處理，還會進行認證和驗證，以確保請求的合法性和安全性。

無論是 Cloud Controller Manager 或是 Rancher、 Lens 等等常見的 GUI 工具，乃至於更常見的 CLI 工具如 kubectl 等等，都會透過 API Server 來和 Master Node 進行互動。

API Server 原生就被設計為可支援水平擴展，我們可以運行多個 API Server 實例，並通過負載均衡來分配流量，以提升系統的可用性和穩定性。

:::note 註記
API Server 除了擔任外部和 Master Node 打交道的單一窗口之外，它也是唯一能操作 etcd 的元件。
:::

#### Scheduler (kube-scheduler)

:::tip 懶人包
Scheduler 負責掌握所有資源的調度，當有新的 Pod 需要被建立並且沒有指定 Worker Node 時，就會由它來決定該 Pod 應該被建立在哪個 Worker Node 上。
:::

如果以快餐店來比喻 Master Node 的話， Scheduler 就像是廚房主管/排班經理的角色，它會妥善的分配資源，以確保工作快速且確實的被完成。

#### Controller Manager (kube-controller-manager)

:::tip 懶人包
Controller Manager 負責實作經由 API Server 傳送過來的需求，確保每個元件或功能正常運作，並且在出現問題時立刻進行修正。
:::

如果以快餐店來比喻 Master Node 的話， Controller Manager 就扮演著點品管經理/店長的角色。

#### ETCD (etcd)

:::tip 懶人包
ETCD 是一個以 Key-Value 格式儲存資料的資料庫，用來保存整座 Cluster 所有的設定。
:::

如果以快餐店來比喻 Master Node 的話， ETCD 就像是倉儲系統/倉庫的角色。

無論是各種配置、資源使用情況和所有 Pods 的運行狀態，都會被儲存在這邊。

因此，若出現重大故障或災難，透過還原 ETCD 的資料可以完整還原整座 Cluster 的配置和狀態。

#### Cloud Controller Manager (cloud-controller-manager)

:::tip 懶人包
Cloud Controller Manager 通常是雲端服務供應商提供的服務，方便我們輕鬆透過供應商提供的 API 來操作、控制 Cluster。
:::

通常它會被墊在 API Server 之上，提供更貼近供應商操作特性的方式來操控 Cluster。

私有雲或自建的學習環境通常不會包含 Cloud Controller Manager，因為這些環境不依賴於雲端供應商的 API 來管理資源，因此在這些情境下不需要使用該元件。

### Worker Node

:::tip 懶人包
Worker Node 又簡稱 Node，主要用來運行 Pods，並且提供 K8s 的執行環境。
:::

以下介紹 Worker Node 中的幾個重要元件。

#### Pod

:::tip 懶人包
Pod 是 Worker Node 中最小的佈署單位。一個 Pod 可以運行一至多個容器，這些容器共享同一個網路和存儲空間。
:::

#### Container Runtime

:::tip 懶人包
Container Runtime 就像是 K8s 中的基礎建設，得透過它才能控管容器的生命周期。
:::

常見的 Container Runtime 包括 Docker 、 containerd 和 CRI-O。

#### Kube Proxy

:::tip 懶人包
Kube Proxy 存在於每個 Worker Node 中，扮演著網路代理伺服器的角色，負責管理網路規則和進行負載均衡，確保每個節點之間的網路可以順暢互通。
:::

Kube Proxy 會管理 Worker Node 上的網路規則，將 Request 導向正確的 Pod。

它也會持續監控 K8s 的服務和端點變更，確保流量按照最新的配置分配到適當的 Pod。

#### Kubelet

:::tip 懶人包
Kubelet 是一個運行在每個 Worker Node 上的代理程式，負責執行來自 API Server 的指令，確保每個 Pod 中的容器按照規範正常運行，並定期將其狀態回報給 Master Node。
:::

若有容器未正常運行，Kubelet 會嘗試重啟該容器，並將相關狀態及事件回報給 API Server，供 Master Node 做進一步的決策。

## 結語

以上就是 K8s 基本架構的介紹。

希望可以幫助到有心學習 K8s 的朋友。
