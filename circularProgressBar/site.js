function incrementer(){
  const numb = document.querySelector(".number");
  let counter = 0;
  
  setInterval(() => {
    if (counter == 50){
      clearInterval();
    } else {
      counter+=1;
      numb.textContent = counter + "%";
    }
  }, 80);
  alert("Now incrementing percentage value");
}

