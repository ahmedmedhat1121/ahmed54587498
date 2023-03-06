const menubtn = document.querySelector("#menu-btn")
const closebtn = document.querySelector("#close-btn")
const menu = document.querySelector(".nav__items")
//open nav menu
menubtn.addEventListener("click",() =>{
    menu.style.display='block';
    menubtn.style.display='none';
    closebtn.style.display='inline-block'
 })
 //close nav menu
 closebtn.addEventListener("click",() =>{
    menu.style.display='none';
    menubtn.style.display='inline-block';
    closebtn.style.display='none'
 })
 //show/hide faqs
 const faqs = document.querySelectorAll('.faq');

 faqs.forEach(faq =>{
   faq.addEventListener('click',() =>{
      faq.classList.toggle('open');
      //change icon
   const icon =faq.querySelector('.faq__icon i');
   if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus'
   } else {
      icon.className = 'uil uil-plus'
   }
   })
 })
 //add background style to navbar
 window.addEventListener('scroll',() =>{
   document.querySelector('nav').classList.toggle('window-scroll',window.scroll >0);
 })