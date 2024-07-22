var posts=["2024/06/29/hello-world/","2024/07/19/博客发文教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };