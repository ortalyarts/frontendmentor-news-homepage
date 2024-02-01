const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const menuContainer = document.querySelector('#top-nav-container');
const menuUl = document.querySelector('#top-nav-container ul');

menuIcon.addEventListener('click', ()=>{
  menuContainer.style.right='0%';
  menuUl.style.opacity='1';
});
closeIcon.addEventListener('click', ()=>{
  menuContainer.style.right='-100%';
  menuUl.style.opacity='0';
});

