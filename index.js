let buttonsClicked = document.querySelectorAll('.btnNo');
let display = document.querySelector('#display');
let anwser = '';

buttonsClicked.forEach(function(buttonClicked) {
  buttonClicked.addEventListener('click', function() {
    let value = buttonClicked.innerHTML;

  if(value === '='){
    display.innerHTML = eval(anwser);
    anwser = '';
  }else if(value === 'c'){
    display.innerHTML = '';
    anwser = '';
    
  }else{
    anwser += value;
    display.innerHTML = anwser;
  }
  })
})