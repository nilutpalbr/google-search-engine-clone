function clicked(){
    let ans=document.querySelector('input').value
     console.log(ans);
      url='https://www.google.com/search?q='+ans;
      /*location.href = newlink*/
      window.open(url,'_blank');
      document.querySelector('input').value="";
  }
  const inp=document.getElementById("search")
  inp.addEventListener("keypress",function(event){
      let len= document.querySelector('input').value.length
     const value=event.keyCode;
     if(value===13 && len>0){
      let ans=document.querySelector('input').value
     console.log(ans);
      url='https://www.google.com/search?q='+ans;
      /*location.href = newlink*/
      window.open(url,'_blank');
      document.querySelector('input').value="";
     }
  })