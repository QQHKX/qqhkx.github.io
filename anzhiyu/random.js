var posts=["2024/07/24/嘉祥成华WiFi密码收录/","2024/07/25/C-Socket实现传文件和加密通讯/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };