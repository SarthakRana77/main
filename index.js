function randomFunc(n){
    for(var i = 0; i < 2; i++){
      setTimeout((n)=> console.log(i),1000);
    }
  }
  randomFunc(3);