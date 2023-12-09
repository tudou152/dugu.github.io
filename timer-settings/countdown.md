# 倒计时器(快速计时器)/通用设置详解

“倒计时器”和“快速计时器”的唯一区别就是：倒计时器的时间是提前设置好，固定的，而快速计时器的时间是每次启动时设置的。

其他设置都相同。

### 1. 主题设置

<img src="https://gd-hbimg.huaban.com/b5fc07da10554906d22da3ef9206d944057d8d643c88-O0qS7b" alt="895205ea4ffa0070012a0cc05ff1d17c.png" style="zoom:50%;" />

设置计时器的颜色，可以为单一的颜色，也可以设置为渐变色，或者使用图片来渲染。

**左右滑动**，可以切换计时器的形状。

![637fa100202ff18a95c18d634a6827e0.gif](https://gd-hbimg.huaban.com/47720f0b8e152dae1efcdd0c8cbca6ca4245305b10b63a-BZ06e3)


### 2. 时间设置

 

#### 2.1 如何设置时间

先选择数字+选择单位。1 + 分钟 + 3 + 0 + 秒 = 1分30秒

<img src="https://gd-hbimg.huaban.com/2bc7e7faf27046e5dcb30f00325ee40551175384140b5-tywygb" alt="be3e476dc6732e5ba5bf5be33b3a2b64.gif" style="zoom:50%;" />

#### 2.2 时间格式：

计时器显示时的格式。

<img src="https://gd-hbimg.huaban.com/a4e80aa06a45d4f76a685d404997ad09202fa00f106c0-7lVv37" alt="d18b29410527df0e7022001011bac112" style="zoom:50%;" />

时间格式选项

<img src="https://gd-hbimg.huaban.com/88a815d5ea4e06be0670093c79401ed52789ee9a38a1f-EEghjO" alt="a8c12af259851e43ef05bb0719a9bec9" style="zoom:50%;" />

天：时：分：秒

<img src="https://gd-hbimg.huaban.com/03be7e3d05c0919168a7bbc62bea33f746d994453277a-RLrsDO" alt="bac9fe5a0fa6d919a697874213552f56" style="zoom:50%;" />

时：分：秒

<img src="https://gd-hbimg.huaban.com/334e8c669e0dfbb717fb6a011672e7d9412f9ee33675c-hIzSaG" alt="7976a9db08eaa75d23e22a8b3d5444aa" style="zoom:50%;" />

分：秒 

#### 2.3 自动重复：

假设计时器时间设置为1分30秒。

打开自动重复选项之后，1分30秒之后，会自动开始下一个1分30秒的计时器；如果用户不手动暂停或者重置，则该计时器会永远重复运行下去。

<img src="https://gd-hbimg.huaban.com/ba6427f7d964ba57ec3f80fbe1d9b50a0d003b3d4246-QnsAxe" alt="6e4704dee2a5c97d140b64813b9b81ab" style="zoom:50%;" />

### 3. 标签和图标

#### 3.1 标签

如何设置： 直接输入文字即可设置为标签。

作用： 1. 描述计时器的用途。2. 数据统计中，分类时长统计中，会将相同标签的计时器产生的日志作为一个分类。

<img src="https://gd-hbimg.huaban.com/d3940493163f8f920a2e6a7cfac4898fd1f3293741193-9iHu4D" alt="**带有标签的计时器**" style="zoom: 37%;" />

####  3.2 图标

直接选择图标即可设置。主要用于区别计时器。

<img src="https://gd-hbimg.huaban.com/ee721a8e8f11462525d9cfbde481fe33ba9416e04a4e4-U7gue2" alt="1b93924a75d89aade7a0888f3fdb2b9b" style="zoom:40%;" />

### 4. 警报相关设置 

<img src="https://gd-hbimg.huaban.com/445af8810283439119a5c8dc114767c3aa0ac11614ded-5fCMSs" alt="8a73002d83e014419c14fa578f8ebca0" style="zoom:50%;" />

#### 4.1 开始警报/结束警报

开始警报： 在计时器开始时，进行警报提示。

结束警报： 在计时器完成时，进行警报提示。

启动开关： 在警报设置最右侧，有开关可以快速控制该类警报是否启用

<img src="https://gd-hbimg.huaban.com/3f4f4811cfd3641b61652536676ade1d3bc54dfdc2b9-9URXfM" alt="fd1e5146ed2f965d240afdb37f1b11f6" style="zoom:50%;" />

警报编辑：单击警报一栏中除了开关选项的其它任何位置，可进入警报的设置界面。

<img src="https://gd-hbimg.huaban.com/8a0b89511a692b0115a57457b4eec720b72db11d9b8c-qH5EPq" alt="831af6cf29e3a1052b0b6bbae4cd532e" style="zoom:50%;" />

[点击查看警报设置的具体教程](alarm.md)

#### 4.2 辅助播报

[点击查看辅助播报详解](./assit-alarm.md)

### 5. 其它设置

#### 5.1 自动重置

<img src="https://gd-hbimg.huaban.com/dbb69c4fe766722942c5104d645a40bcc1af2f5abba3-2MYLo6" alt="ffb67b4ccf84377bff6421f4a4846dfe" style="zoom:50%;" />

默认为关闭状态，此时计时器完成之后，会自动并显示完成状态，且会有超时时间的显示。该状态下，用户需要手动点击计时器之后，会重置计时器为初始状态。

开启后，计时完成时，再过5秒即会自动重置计时器，将计时器直接恢复为初始状态，不需要用户手动再次点击了。

注意： 这里的再过“5秒”是指，计时器的警报结束之后，再过“5秒”。如果警报的“重复设置”为“不停”警报，则自动重置会等到不停警报的持续时间结束之后，再过“5秒”进行自动重置的操作。

 

#### 5.2 单击操作

<img src="https://gd-hbimg.huaban.com/4940cc3733121a1cb4b43c9af12261d5106878d81344a-XeZHCi" alt="624097babb41fe4e15666d87cd06e0b0" style="zoom:50%;" />

如果是**“开始/暂停”：**启动之后，单击会暂停，再次单击会继续。

<img src="https://gd-hbimg.huaban.com/88bcd20c001c5c4ba10c8bd6875caafbde0cd9e41906cb-LPV321" alt="51bdc5e9e8425c849d31b79408983f4d" style="zoom:50%;" />

如果是**“开始/重置”：**启动之后，单击会重置。

<img src="https://gd-hbimg.huaban.com/0a78643aff9e86ff30eeb5e339eeb96178997c7536911a-R86cD8" alt="8df845e8cddcd2a21b3ba6e829b19502" style="zoom:25%;" />

#### 5.3 呼吸动画

呼吸动画的目的主要就是提醒用户当前的状态。默认为“计时器暂停或者完成时开启”。

<img src="https://gd-hbimg.huaban.com/9ec2907e7a24c0a34180be885bbd0a8a72a97e2b1a3aa-HheVij" alt="6c9cef984ce94a09150ae117e9f830c3.png" style="zoom:50%;" />

**无：** 设置为无，则任何状态下都没有呼吸动画的效果。

**计时器激活时开启：** 可以看到激活时，有呼吸动画的效果

<img src="https://gd-hbimg.huaban.com/b9a560e0b6434c42c57bdc74232e53b44ca4468db2699-BtpXpi" alt="61336ad70a24b6725a5d43b25bead49a.gif" style="zoom:50%;" />

**计时器暂停后者完成开启：**暂停或者完成时，有呼吸动画的效果

<img src="https://gd-hbimg.huaban.com/206850911d8d54e3ad1d30b42b0ef37d963f16ec24a882-k88NJm" alt="04727ed1bba5575e7edbb1029b750e6a.gif" style="zoom:38%;" />

#### 5.4 日志

可以查看倒计时器的运行记录。

计时器每次从启动到完成后，后者从启动到重置后，都会生成一条日志信息。该日志中记录了计时器的开始时间，以及持续时间。