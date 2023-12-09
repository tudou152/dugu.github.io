# 间隔计时器（逐步计时器）

这里主要介绍间隔计时器（逐步计时器）专有的相关设置。

其他的通用设置详解参考：[通用设置详解](countdown.md)

### 1. 间隔计时器（逐步计时器）的时间设置 

<img src="https://gd-hbimg.huaban.com/d3a0f37186b988ffc6b4f51d79c1200d727b7b941110e-7Bllqk" alt="ecd267e9c7ec4e2963b20ccc43e29b01" style="zoom:50%;" />

#### 1.1 组合的概念。

上图中的计时器分为两种，单个子计时器和一组子计时器。

**单个子计时器**： 只有一个计时器。

<img src="https://gd-hbimg.huaban.com/8a3da6db4122f1af50056e6da0fa666b02e8e8a13c04-TVtSmP" alt="43a05d99e054ff50fdc7628054af3564" style="zoom:50%;" />

**一组子计时器**： 将**多个子计时器组合**，成为一组子计时器。

组合的好处就是，可以直接对该组合**整体设置循环次数**。

如下图所示，两种设置的最终效果都是一致的。可以根据自身情况，进行选择。

**一组子计时器**

<img src="https://gd-hbimg.huaban.com/60a775ca0f7473fe88d5f9f455658d1b69226dff81b6-TIGzx7" alt="2aac798a69e2507c89e97a567c3d7657" style="zoom:50%;" />

**不使用分组的多个子计时**

<img src="https://gd-hbimg.huaban.com/8ad290fec6719d59bd3a13de6b06d2188a4f0ff115bb1-J0spw9" alt="80e539e7084636d558cd8af50fa823ca" style="zoom:50%;" />



#### 1.2 添加/复制/删除子计时器

**添加：**

<img src="https://gd-hbimg.huaban.com/e0f15386f1996eb6552b2df365bb5493b0dd14e519e19-RO0gvA" alt="d2aad05e6f805635bf68ad7cf93af553.gif" style="zoom:50%;" />

**复制：**

<img src="https://gd-hbimg.huaban.com/714ff9d9c0230dd2d72f41dd8dd37bf1916d4b84163b2-u2q3ae" alt="96f94bd43dbf628fd360d3abb4588f28.gif" style="zoom:50%;" />

**删除：**

<img src="https://gd-hbimg.huaban.com/0f0e2d23913821cf4760fb12e62a3a2090b3e8221eb20-ftkgyz" alt="9eaf6588713afdf1f4d16176f1dd522c.gif" style="zoom:50%;" />

 

## 1.3 组合子计时器

**组合：**

<img src="https://gd-hbimg.huaban.com/913d523a1f78f7ec15f6680eca10087c1e41879b17f99-Eqzecw" alt="3954cfb98b953a1a0d07e24c4c76403c.gif" style="zoom:50%;" />

**取消组合：**

<img src="https://gd-hbimg.huaban.com/ffb001c29459798a38f566ffb9eafe757efb7d7115887-jIehMg" alt="8b174eda37d99de9032a7c18d5f69296.gif" style="zoom:50%;" />

**设置循环次数：**

<img src="https://gd-hbimg.huaban.com/94502ff1544de4e0662ed4374f6bb26572846acd335e4-w4nVx6" alt="7aa5ee38e71efdc651f0d7d34c55d737.gif" style="zoom:50%;" />

 

## 1.4 排序修改

排列顺序会影响子计时器的执行顺序。

<img src="https://gd-hbimg.huaban.com/5db09c996eab49fed17d1fc98f7d998f961585b366440-PC3Bqb" alt="38b71f9ce1123816689dc5e1dd7813f8.gif" style="zoom:50%;" />

 

## 1.5 编辑子计时器

**单击“单个子计时器”**，进入子计时器编辑界面

![13ea272fd40f72481f8b74d9c6e29c55.gif](https://gd-hbimg.huaban.com/56b8c900f78fe30cf3f48f92f09acd118687e27016de2-gB4Eno)

子计时器的主题，时间，警报等设置可以参考[通用设置详解](countdown.md)

另外，子计时器还有一个“重复”设置项，主要表示该单个子计时器会重复多少次。

**单击“一组子计时器”**， 进入“**子计时器列表**”的编辑界面

![7be2cdbf2edf4f240bf9c5d9a1bec5f8.gif](https://gd-hbimg.huaban.com/19daf7cde0f91da72c999cc047772b3877bea1822913d-PSWgbt)

在子计时器列表中的编辑操作同上。

 

## 1.5 查看实际的执行顺序

点击“**查看执行顺序**”，会显示一个弹窗，该弹窗中有一个列表显示了计时器的执行顺序。

如上图中设置的，第一个计时器是**5秒的“准备”计时器**，然后是**20秒“工作”计时器**和**10秒的“休息”计时器**的**组合**，该组合会**循环3次**。

<img src="https://gd-hbimg.huaban.com/f3180780c89cf03c6b7f1753947c8d98764a63ba2ff7f-v4pC9v" alt="a9ca06e0cf10f85d472affba2f734c24.png" style="zoom:50%;" />

 

# 2. 间隔计时器和逐步计时器的区别

## 2.1 运行机制的区别

**间隔计时器运行时**，上一个子计时器结束后，会**自动开始**下一个子计时器。

**逐步计时器运行时**，上一个子计时器结束后，默认会**自动暂停**（该行为可以再逐步计时器中关闭，关闭之后的行为，和间隔计时器一模一样）。当用户再次单击时，才会开始下一个子计时。

 

## 2.2 警报设置的细微区别

### 2.2.1 间隔计时器

 

**间隔计时器**：可以设置一个**结束警报，**当所有子计时器完成时，会使用该结束警报。

**间隔计时器的子计时器**： 只能设置**开始警报**。

因为间隔计时器的子计时器在过渡时中间不会暂停，如果同时可以设置开始和结束警报，则**上一个子计时器**的**结束警报**会和**下一个子计时器**的**开始警报**产生**冲突**。

 

### 2.2.2 逐步计时器

**逐步计时器**：可以设置一个全局的**开始警报**。该警报用于每一个子计时器开始时的警报铃声。

**该开关仅仅存在于“逐步计时器”中**

<img src="https://gd-hbimg.huaban.com/3d0cdb0221f09c70db3f23afbcf00e0d33537aee5b1a-dJgR3l" alt="938a0e3da024768709059626429f44ad" style="zoom:50%;" />

如果开启了“**自动开始下一个计时器**”这个开关，则该“开始警报”会和子计时器的“结束警报”产生冲突，所以会忽略该“开始警报”。仅会在第一个子计时器开始时发出警报。

**逐步计时器的子计时器**： 只能设置**结束警报**。

 

## 2.3 什么时候使用“间隔计时器”，什么时候使用“逐步计时器”？

只需要判断，在上一个子计时器完成后，下一个子计时器是需要自动开始，还是手动开始。

如果上一个子计时器完成后，下一个子计时器需要**自动开始**，选择“间隔计时器”。（也可以选择“逐步计时器”，并打开“**自动开始下一个计时器**”这个开关。）

如果上一个子计时器完成后，下一个子计时器需要**手动开始**，选择“逐步计时器”。