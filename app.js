/* Burger menu */
document.getElementById('navToggle').addEventListener('click',function(e){
    e.preventDefault();
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        document.getElementById('showMenu').classList.remove('active');

    } else {

        this.classList.add('active');
        document.getElementById('showMenu').classList.add('active');
    }
})

