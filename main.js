function onScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    }else{
        navigation.classList.remove('scroll');
    }
}
onScroll()

function openMenu(){
   document.body.classList.add('menu-expanded'); 
}
openMenu()

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}
closeMenu()