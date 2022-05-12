# SSE
> SSE 全称是 Server-Sent Events，用于服务端推送到客户端的一种手段，有很多 WebSocket vs SSE的文章，大家可以去看看。最终根据自己的业务需求，或后期的产品规划进行抉择。我们这边纯粹是为了，服务端进行推送，前端展示一个数量，没有其他的交互。所以最终还是采用了 SSE 的方案。

## 前期的调研
我们在前期进行了 SSE 技术调研，发现案例数量相对 WebSocket，还是有一定的差距的。
如果你打算使用 SSE，请三思而后行，除非业务方愿意给你时间去进行调研工作，且能承担推翻重来的风险。

阮一峰老师的 [Server-Sent Events 教程](http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html) 文档清晰明了
![](../../../public/images/bg2017052702.jpeg)

我们团队计划从登录之后开始打开连接，并且初始化权限，再进行调用初始化

需要值得注意的地方是 强制关闭浏览器，或者直接关闭 Tab，会导致你的 close 还未发送成功就关闭了进程。可以使用 [MDN Navigator.sendBeacon](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon) 来进行 close。

### 下图是我们准备实现的流程
![调研结果](../../../public/images/WX20220512-140446.png)

