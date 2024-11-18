const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollposition = this.window.scrollY;

    if (scrollposition >=0 ){
        nav.classList.add('nav-dark');
    } else if (scrollposition <=0) {
        nav.classList.remove('nav-dark');
    }
})
