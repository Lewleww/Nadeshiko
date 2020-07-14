const numOfImages = 51
let imageArr = []

function createImageArray() {
    for (let i=0; i < numOfImages; i++) {
        imageArr.push(i+1)
    }
}

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function populateGallery() {
    createImageArray()
    shuffleArray(imageArr)

    let dom = ''
    for (let i=0; i < numOfImages; i++) {
        dom += `
        <div class="gallery-image image-container">
            <img src="images/nadeshikos/${imageArr[i]}.jpg" alt="image">
        </div>
        `
    }
    console.log(dom)
    document.getElementById('images-container').innerHTML = dom;
}

function modalUpdate() {
    const modal = document.getElementById('modal')
    const images = document.querySelectorAll('.gallery-image')
    images.forEach( image => {
        image.addEventListener('click', () => {
            let imagePath = image.querySelector('img').src
            //Open Modal with correct details
            modal.style.display = 'flex'
            modal.classList.add('active')
            
            document.getElementById('chosen-image-link').href = imagePath
            document.getElementById('chosen-image').src = imagePath
        })
    })    
}

populateGallery()
modalUpdate()

