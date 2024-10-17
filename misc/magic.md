### 代理工具

> 前言

- clash 内核有特别严重的问题：电脑端版的如果没有手动关闭系统代理退出软件就直接关机会导致下载开机电脑无法正常上网(需要重新启动软件开启代理关闭代理才正常)，软件修改过的系统代理内容没有改回原来的，才导致这个严重问题，这个以前的 Clash 内核也存在，windows版和macOS都存在这个问题，试过多个基于 clash / mihomo 内核的软件(clash verge rev / flclash / clash.meta / clashX等)，都有这个问题，说明是内核的问题。
- 基于 sing-box 内核的软件也存在这个问题，如 Hiddify
- 反倒是 v2ray 内核 / xray 内核正常。该内核的软件推荐使用的有 Windows 系统的 v2rayN 、Android系统的 v2rayNG，macOS没有，v2rayU每次切换节点太不方便了。

---

- 全平台软件
- [FlClash](https://github.com/chen08209/FlClash)
	- 支持 yml / yaml 等订阅
	- v0.8.64，要求 安卓5.0以上，win和macOS只测试过 win10 和 macOS 11 可用，[发布地址](https://github.com/chen08209/FlClash/releases/tag/v0.8.64)
		- [安卓版 FlClash-0.8.64-android-armeabi-v7a.apk 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-android-armeabi-v7a.apk)
		- [安卓版 FlClash-0.8.64-android-armeabi-v7a.apk 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-android-armeabi-v7a.apk)
		- [安卓版 FlClash-0.8.64-android-arm64-v8a.apk 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-android-arm64-v8a.apk)
		- [安卓版 FlClash-0.8.64-android-arm64-v8a.apk 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-android-arm64-v8a.apk)
		- [macOS版 intel cpu 版 FlClash-0.8.64-macos-amd64.dmg 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-macos-amd64.dmg)
		- [macOS版 intel cpu 版 FlClash-0.8.64-macos-amd64.dmg 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-macos-amd64.dmg)
		- [macOS版 M 芯片 arm 架构版 FlClash-0.8.64-macos-arm64.dmg 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-macos-arm64.dmg)
		- [macOS版 M 芯片 arm 架构版 FlClash-0.8.64-macos-arm64.dmg 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-macos-arm64.dmg)
		- [windows版 FlClash-0.8.64-windows-amd64-setup.exe 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-windows-amd64-setup.exe)
		- [windows版 FlClash-0.8.64-windows-amd64-setup.exe 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-windows-amd64-setup.exe)
		- [windows版 FlClash-0.8.64-windows-amd64.zip 下载](https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-windows-amd64.zip)
		- [windows版 FlClash-0.8.64-windows-amd64.zip 加速下载](https://ghproxy.cc/https://github.com/chen08209/FlClash/releases/download/v0.8.64/FlClash-0.8.64-windows-amd64.zip)


- [hiddify-next](https://github.com/hiddify/hiddify-next)
	- 支持 yml / yaml 等订阅，也支持 txt / base64 订阅，使用非常方便
	- v1.5.2，要求 macOS 10.15 以上可用，安卓5.0以上，windows10以上。[发布地址](https://github.com/hiddify/hiddify-next/releases/tag/v1.5.2)
		- [安卓版 Hiddify-Android-arm7.apk 下载](https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Android-arm7.apk)
		- [安卓版 Hiddify-Android-arm7.apk 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Android-arm7.apk)
		- [安卓版 Hiddify-Android-arm64.apk 下载](https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Android-arm64.apk)
		- [安卓版 Hiddify-Android-arm64.apk 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Android-arm64.apk)
		- [macOS版 Hiddify-MacOS.dmg 下载](https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-MacOS.dmg)
		- [macOS版 Hiddify-MacOS.dmg 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-MacOS.dmg)
		- [windows版 Hiddify-Windows-Portable-x64.zip 下载](https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Windows-Portable-x64.zip)
		- [windows版 Hiddify-Windows-Portable-x64.zip 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Windows-Portable-x64.zip)
		- [Windows 版 Hiddify-Windows-Setup-x64.exe 下载](https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Windows-Setup-x64.exe)
		- [Windows 版 Hiddify-Windows-Setup-x64.exe 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v1.5.2/Hiddify-Windows-Setup-x64.exe)

	- v2.0.5，注意：这个版本虽然支持编辑节点，但是会特别卡；要求 macOS 10.15 以上可用，安卓5.0以上，windows10以上 ，[发布地址](https://github.com/hiddify/hiddify-next/releases/tag/v2.0.5)
		- [安卓版 Hiddify-Android-arm7.apk 下载](https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Android-arm7.apk)
		- [安卓版 Hiddify-Android-arm7.apk 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Android-arm7.apk)
		- [安卓版 Hiddify-Android-arm64.apk 下载](https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Android-arm64.apk)
		- [安卓版 Hiddify-Android-arm64.apk 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Android-arm64.apk)
		- [macOS版 Hiddify-MacOS.dmg 下载](https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-MacOS.dmg)
		- [macOS版 Hiddify-MacOS.dmg 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-MacOS.dmg)
		- [windows版 Hiddify-Windows-Portable-x64.zip 下载](https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Windows-Portable-x64.zip)
		- [windows版 Hiddify-Windows-Portable-x64.zip 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Windows-Portable-x64.zip)
		- [Windows 版 Hiddify-Windows-Setup-x64.exe 下载](https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Windows-Setup-x64.exe)
		- [Windows 版 Hiddify-Windows-Setup-x64.exe 加速下载](https://ghproxy.cc/https://github.com/hiddify/hiddify-next/releases/download/v2.0.5/Hiddify-Windows-Setup-x64.exe)


---

- macOS专用

- V2rayU 切换节点的界面不方便，比 hiddify、flclash 难切换节点多了。不要用v2rayU


---

- win专用

- [v2rayN](https://github.com/2dust/v2rayN)
    - v6.60，[发布地址](https://github.com/2dust/v2rayN/releases/tag/6.60)
        - [v2rayN-With-Core.zip 下载](https://github.com/2dust/v2rayN/releases/download/6.60/v2rayN-With-Core.zip)
        - [v2rayN-With-Core.zip 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayN/releases/download/6.60/v2rayN-With-Core.zip)
        - [zz_v2rayN-With-Core-SelfContained.7z 下载](https://github.com/2dust/v2rayN/releases/download/6.60/zz_v2rayN-With-Core-SelfContained.7z)
        - [zz_v2rayN-With-Core-SelfContained.7z 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayN/releases/download/6.60/zz_v2rayN-With-Core-SelfContained.7z)

---

- 安卓专用

- [v2rayNG](https://github.com/2dust/v2rayNG)
    - 科学(魔法)工具，老牌工具，强大，
	- 支持 base64 编码的节点订阅、通用v2ray订阅，支持局域网代理、分应用代理。
    - 支持局域网代理，首次安装后，记得点击左上角菜单(三个横杆的按钮) --> 设置 --> 找到"进阶设置"的 "跳过证书验证(allowInsecure)" ，然后开启这项功能。因为很多 trojan / vless 节点使用的 tls 传输需要开启这个才能正常科学。
    - v1.6.15 以上开始支持批量删除无效节点
    - v1.6.20 以上开始支持按测速排序
    - v1.6.30 是最后一个支持安卓4.4的版本，后面都要安卓5.0以上了
    - v1.7.x 的订阅节点超过40个，软件界面就比较卡，不建议使用 1.7.x
    - 从v1.7.x~v1.8.36之间的版本，一直存在分组bug，删除失效节点会导致其他分组节点全部删除的问题，而且节点数量超过四五十个就特别卡顿。
    - v1.8.38 主界面增加分组过滤，所有功能菜单针对当前分组生效；若选中的是所有分组，则功能针对所有分组，一些耗时的任务增加顶部进度条，比如更新订阅，修改菜单文字描述，修复一些已知的问题。附：节点数量多卡顿问题优化得比较好了，可以使用了。

    - 安卓 4.2 以上，v1.6.30，trojan节点设置增强，新增全局直连路由模式。[1.6.30发布地址](https://github.com/2dust/v2rayNG/releases/tag/1.6.30)
        - [v2rayNG_1.6.30_armeabi-v7a.apk](https://github.com/2dust/v2rayNG/releases/download/1.6.30/v2rayNG_1.6.30_armeabi-v7a.apk)
        - [v2rayNG_1.6.30_armeabi-v7a.apk 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayNG/releases/download/1.6.30/v2rayNG_1.6.30_armeabi-v7a.apk)
        - [v2rayNG_1.6.30_arm64-v8a.apk](https://github.com/2dust/v2rayNG/releases/download/1.6.30/v2rayNG_1.6.30_arm64-v8a.apk)
        - [v2rayNG_1.6.30_arm64-v8a.apk 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayNG/releases/download/1.6.30/v2rayNG_1.6.30_arm64-v8a.apk)

    - 安卓 5.0 以上，v1.9.7
        - [v2rayNG_1.9.7_armeabi-v7a.apk](https://github.com/2dust/v2rayNG/releases/download/1.9.7/v2rayNG_1.9.7_armeabi-v7a.apk)
        - [v2rayNG_1.9.7_armeabi-v7a.apk 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayNG/releases/download/1.9.7/v2rayNG_1.9.7_armeabi-v7a.apk)
        - [v2rayNG_1.9.7_arm64-v8a.apk](https://github.com/2dust/v2rayNG/releases/download/1.9.7/v2rayNG_1.9.7_arm64-v8a.apk)
        - [v2rayNG_1.9.7_arm64-v8a.apk 加速下载](https://ghproxy.cc/https://github.com/2dust/v2rayNG/releases/download/1.9.7/v2rayNG_1.9.7_arm64-v8a.apk)

- [NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid)
    - 支持 yml、yaml、base64订阅，与 v2rayNG相比支持更多协议，如 hysteria2 协议
    - 节点数量几百个也流畅，不像 v2rayNG ，几十个就特别卡顿
    - v1.2.9
        - [NB4A-1.2.9-armeabi-v7a.apk 下载](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.2.9/NB4A-1.2.9-armeabi-v7a.apk)
        - [NB4A-1.2.9-armeabi-v7a.apk 加速下载](https://ghproxy.cc/https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.2.9/NB4A-1.2.9-armeabi-v7a.apk)
        - [NB4A-1.2.9-arm64-v8a.apk 下载](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.2.9/NB4A-1.2.9-arm64-v8a.apk)
        - [NB4A-1.2.9-arm64-v8a.apk 加速下载](https://ghproxy.cc/https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.2.9/NB4A-1.2.9-arm64-v8a.apk)

---
