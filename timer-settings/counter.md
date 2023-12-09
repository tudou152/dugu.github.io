# 计数器

适用于任何需要进行计数的场景。

### 1. 计数器专有设置

<img src="https://gd-hbimg.huaban.com/44f4a7273b15911ffdfe525617be4bbb2a8ea8a09be4-X3OJaZ" alt="8b179d7876ec397853b53063df7f0154.png" style="zoom:50%;" />

#### 1.1 模式： 表示该计数器默认单击的行为，包括三种：增加、减少、增加和减少。

<img src="https://gd-hbimg.huaban.com/5acb388cb3bef4ff7bd7f8138a90be41a8b38bd1103cd-fx4gxj" alt="a2f9dbd6b54a88f8f01d100685ee6fa6" style="zoom:50%;" />

**增加**：单击增加。

<img src="https://gd-hbimg.huaban.com/edbf7995ed84c7329ee23fdf253536cbd1fb367abc9cb-ZoNbJp" alt="1eff2b47d371e0ee6bff9e8e4e8136ce" style="zoom:50%;" />

**减少**： 单击减少。

<img src="https://gd-hbimg.huaban.com/a28d1b1e3e26c135ac6f35407d35c1f6a212afbb11deaa-GUfT7r" alt="00370d948edc9a3fca902dab2bcb2c89.gif" style="zoom:50%;" />

**增加和减少**： 点击右边区域“增加”，点击左边区域“减少”。

<img src="https://gd-hbimg.huaban.com/0dd20c9b1371e40892931ce0ed00377ba9d9ed831c275c-WvBOvW" alt="962b58a1111b8db9c33555da243b3cee.gif" style="zoom:50%;" />

#### 1.2 初始值

计数器初始状态以及重置操作后的初始值，增加和减少的操作都会在该数值的基础上进行。默认值为0。

#### 1.3 步长

每次增加和减少操作的数值。

例如**模式**为“**增加**”，**初始值**为“**1**”，**步长**为“**2**”，则

第一次点击后数值为：1 + **2** = 3。

第二次点击后数值为： 3 + **2** = 5。

第三次点击后数值为： 5 + **2** = 7。

......

以此类推

<img src="https://gd-hbimg.huaban.com/6a37bfd0be33d70276706cef7bf0a9f6a128f771c126f-HpgRkg" alt="bfdf2f577d619481b4a33a3c919ae4aa.gif" style="zoom:50%;" />

#### 1.4 最终值

表示该计数器的目标值。当设置有目标值时，计数器的外观会有进度条的表示。

例如：当**最终值**设置为**6，模式**为“**增加**”，**初始值**为“**0**”，**步长**为“**1**”时：

<img src="https://gd-hbimg.huaban.com/7d34b5eae8b9a7eb851d259c9339981fe424ef311bf8ca-tUuEXN" alt="0de189a070eaa0b6bbbe720ca8136720.gif" style="zoom:50%;" />

 

### 2. 其他通用设置

参考：[通用设置详解](countdown.md)
