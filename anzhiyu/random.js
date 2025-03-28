var posts=["2024/07/25/C-Socket实现传文件和加密通讯/","2024/08/16/Redis缓存管理机制/","2024/09/23/VMware-Workstation-Pro-17下载及激活教程/","2024/08/16/什么是Redis？/","2025/03/29/最新版本机房助手发布！/","2024/10/20/机房小知识/","2024/08/08/晚自习时钟/","2024/10/05/欢迎使用QQHKX-API/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };