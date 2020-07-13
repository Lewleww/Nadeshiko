const home_btn = document.getElementById('home-btn')
const about_btn = document.getElementById('about-btn')
const gallery_btn = document.getElementById('gallery-btn')
const about = document.getElementById('about')
const gallery = document.getElementById('gallery')

about_btn.addEventListener('click', () => {
    about.classList.add('active')
    gallery.classList.remove('active')
    home_btn.innerText = 'HOME'
    about_btn.innerText = '> ABOUT'
    gallery_btn.innerText = 'GALLERY'
})

gallery_btn.addEventListener('click', () => {
    gallery.classList.add('active')
    about.classList.remove('active')
    home_btn.innerText = 'HOME'
    about_btn.innerText = 'ABOUT'
    gallery_btn.innerText = '> GALLERY'
})

home_btn.addEventListener('click', () => {
    gallery.classList.remove('active')
    about.classList.remove('active')
    home_btn.innerText = '> HOME'
    about_btn.innerText = 'ABOUT'
    gallery_btn.innerText = 'GALLERY'
})



