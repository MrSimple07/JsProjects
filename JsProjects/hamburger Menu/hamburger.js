const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navbarMenu = document.getElementsByClassName('navbar__menu')[0]


toggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active')
})

