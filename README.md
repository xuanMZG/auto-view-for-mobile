使用说明
==
适用人群
--
1.没做过移动端的<br />
2.公司没有现成移动端框架的<br />
3.对切图不熟练<br />
`有一定移动端开发功底的就不要看了，这对很多人来说算是邪门外道`<br /><br />
使用说明
--
把设计师给的psd设计稿，缩放到320px宽，写页面的时候用px做单位，写死就可以，不需要考虑什么百分比布局或者rem之类的单位。<br />
实在想不通，就看看我那个HTML文件中宽度设置，再用手机看一下，大致就理解了，为了好区分，都上的背景色。<br />
`有个需要注意的问题，就是320下切出来的图片，在高清屏下会模糊，所以图片素材需要大尺寸的，也就是所谓的2x、3x图`<br /><br />
实现原理
--
利用屏幕宽度与320比较，来设置viewport上面的缩放比例<br />
思路来自一次偶然的观察网易某活动页，看到它就是这么实现的。<br />
代码部分借鉴[hotcss](https://github.com/imochen/hotcss "悬停显示")，这是一个移动端布局神器<br /><br />
理想状态
--
搞一个宽320的富文本 + 本插件，交给编辑一类的非代码人员做一些活动、宣传类的页面还是可以的。
