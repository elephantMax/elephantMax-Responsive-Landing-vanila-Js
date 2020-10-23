const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.header-links');
const sticks = menuToggler.children;

menuToggler.addEventListener('click', ()=>{
  if(!menu.style.display) menu.style.display = 'none'
  toggleMenu();
});

menu.addEventListener('animationend', (e)=>{
  const target = e.target;
  if(target.className.includes('closing')){
    target.classList.remove('header-links_closing');
    target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  else if(target.className.includes('oppening')){
    target.classList.remove('header-links_oppening');
  }
});

const toggleMenu = () =>{
  if(menu.style.display === 'none'){
    menu.style.display = 'flex';
    menu.classList.add('header-links_oppening');
    document.body.style.overflow = 'hidden';
    setSticks();
  }
  else{
    menu.classList.add('header-links_closing');
    sticks[0].style.display = 'block';
    resetSticks();
  } 
}

const setSticks = () =>{
  sticks[0].style.display = 'none';
  sticks[1].style.transform = 'rotate(45deg)';
  sticks[2].style.transform = 'rotate(135deg)';
  sticks[2].style.top = '50%';
  for(stick of sticks){
    stick.style.background = '#828282';
  }
}

const resetSticks = () =>{
  sticks[0].style.display = 'block';
  sticks[1].style.transform = 'rotate(0deg)';
  sticks[2].style.transform = 'rotate(0deg)';
  sticks[2].style.top = '100%';
  for(stick of sticks){
    stick.style.background = 'black';
  }
}