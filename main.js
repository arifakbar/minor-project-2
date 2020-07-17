var barsLogo = document.querySelector('.barsLogo');
var bars = document.querySelector('.bars');
var mainMenu = document.querySelector('.mainMenu');
var MainList = document.querySelector('#MainList');
// var animateClass = document.querySelector('.animateClass');
var change = false;
var name2 = document.querySelector('#name');
var email2 = document.querySelector('#email');


barsLogo.addEventListener('click', function () {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if(change == false){
        barsLogo.innerHTML = ` <i class="fa fa-times bars" aria-hidden="true"></i>`;
        // mainMenu.className = '.animateClass';
        MainList.style.display = 'block';
        mainMenu.style.height = '100%';
        mainMenu.style.width = '97%';
        change = true;   
    }
    else if(change == true){
        barsLogo.innerHTML = `<i class="fa fa-bars bars" aria-hidden="true"></i>`;
        // mainMenu.style.display = 'none';
        MainList.style.display = 'none';
        mainMenu.style.height = '0%';
        mainMenu.style.width = '0%';
        change = false;
        
    }
});
var currentValue = name2.value;
// console.log("yo"+currentValue);
name2.addEventListener('click',function() {
    name2.style.borderBottom = '2px solid red';
    name2.style.cursor = 'blink';
});
name2.addEventListener('mouseleave',function(){
    name2.style.borderBottom = "none";
    // name2.style.cursor = 'none';
})
name2.addEventListener('input',function(){
    if(name2.value != currentValue){
        name2.style.borderBottom = '2px solid blue';
    }
    else{
        name2.style.borderBottom = '2px solid red';
    }
});
var currentValue = email2.value;
// console.log("yo"+currentValue);
email2.addEventListener('click',function() {
    email2.style.borderBottom = '2px solid red';
    email2.style.cursor = 'blink';
});
email2.addEventListener('input',function(){
    if(email2.value != currentValue){
        email2.style.borderBottom = '2px solid blue';
    }
    else{
        email2.style.borderBottom = '2px solid red';
    }
});
email2.addEventListener('mouseleave',function(){
    email2.style.borderBottom = "none";
    // name2.style.cursor = 'none';
})


