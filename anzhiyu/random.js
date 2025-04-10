var posts=["2025/04/10/jiangjia/","2025/04/10/caiwei/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };