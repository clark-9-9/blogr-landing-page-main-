let menuIcon = document.querySelector('[name="menu-outline"]')
let closeIcon = document.querySelector('[name="close-outline"]')
let navbar = document.querySelector('[data-navbar]')


menuIcon.addEventListener('click', function(e) {

    e.preventDefault()

    if(menuIcon.style.visibility === 'visible') {
        menuIcon.style.visibility = 'hidden'
        closeIcon.style.visibility = 'visible'
        menuIcon.style.opacity = 0
        closeIcon.style.opacity = 1
        Navbar()


    } else {
        menuIcon.style.visibility = 'visible'
        closeIcon.style.visibility = 'hidden'
        menuIcon.style.opacity = 1
        closeIcon.style.opacity = 0
        Navbar()

    }

})




closeIcon.addEventListener('click', function(e) {

    e.preventDefault()

    if(closeIcon.style.visibility === 'visible') {
        closeIcon.style.visibility = 'hidden'
        menuIcon.style.visibility = 'visible'
        menuIcon.style.opacity = 1
        closeIcon.style.opacity = 0
        Navbar()

    } else {
        closeIcon.style.visibility = 'visible'
        menuIcon.style.visibility = 'hidden'
        menuIcon.style.opacity = 0
        closeIcon.style.opacity = 1
        Navbar()

    }

})



function Navbar() {

    if(closeIcon.style.visibility === 'visible' ) {
        navbar.style.visibility = 'visible' ;
        navbar.style.opacity = 1;
    } else {
        navbar.style.visibility = 'hidden' ;
        navbar.style.opacity = 0;

    }

}

let Links = document.querySelectorAll('[data-links]')

let arrow1 = document.querySelector("[data-arrow= 'arrow1']")
let arrow2 = document.querySelector("[data-arrow= 'arrow2']")
let arrow3 = document.querySelector("[data-arrow= 'arrow3']")

let product = document.querySelector('[data-product]')
let company = document.querySelector('[data-company]')
let connect = document.querySelector('[data-connect]')


function LinksAndArrow() {

    Links.forEach( EachLink => EachLink.addEventListener('click', (e) => {

        e.preventDefault()

        if(EachLink.dataset.links === 'p1') {
            product.style.display = 'flex'
            company.style.display = 'none'
            connect.style.display = 'none'
            arrow1.style.transform = 'rotate(180deg)'
            arrow2.style.transform = 'rotate(0deg)'
            arrow3.style.transform = 'rotate(0deg)'
        }

        if(EachLink.dataset.links === 'p2') {
            product.style.display = 'none'
            company.style.display = 'flex'
            connect.style.display = 'none'
            arrow1.style.transform = 'rotate(0deg)'
            arrow2.style.transform = 'rotate(180deg)'
            arrow3.style.transform = 'rotate(0deg)'

        }

        if(EachLink.dataset.links === 'p3') {
            product.style.display = 'none'
            company.style.display = 'none'
            connect.style.display = 'flex'
            arrow1.style.transform = 'rotate(0deg)'
            arrow2.style.transform = 'rotate(0deg)'
            arrow3.style.transform = 'rotate(180deg)'

        }

    } ))

}

LinksAndArrow()

function MediaQuery() {
    let img1 = document.querySelector('[ChangeImge = "img1"]')
    let img2 = document.querySelector('[ChangeImage = "image2"]')

    if(window.matchMedia("(min-width:1000px)").matches) {
        img1.setAttribute('src', './images/illustration-editor-desktop.svg')
        img2.setAttribute('src', './images/illustration-laptop-desktop.svg')

    }

}

MediaQuery()


let NavbarOfLinks = document.querySelectorAll('[data-Nav-Links]')

let LinksInBox1 = document.querySelector('[child-of-links = child1]')
let LinksInBox2 = document.querySelector('[child-of-links = child2]')
let LinksInBox3 = document.querySelector('[child-of-links = child3]')



function NavbarLinks() {
        
    NavbarOfLinks.forEach(Links => Links.addEventListener('click', (e) => {
            
        if(Links.dataset.navLinks === 'Links1' && 
           LinksInBox1.style.visibility === 'hidden' ) 
        {
            LinksInBox1.style.visibility = 'visible'
            LinksInBox1.style.opacity = '1'
        } 
        else {
            LinksInBox1.style.visibility = 'hidden'
            LinksInBox1.style.opacity = '0'
        } 


        if(Links.dataset.navLinks === 'Links2' &&
           LinksInBox2.style.visibility === 'hidden' ) 
        {
            LinksInBox2.style.visibility = 'visible'
            LinksInBox2.style.opacity = '1'
                    
        } else {
            LinksInBox2.style.visibility = 'hidden'
            LinksInBox2.style.opacity = '0'
        }


        if(Links.dataset.navLinks === 'Links3' &&
           LinksInBox3.style.visibility === 'hidden') 
        {
            LinksInBox3.style.visibility = 'visible'
            LinksInBox3.style.opacity = '1'
        
        } else {
            LinksInBox3.style.visibility = 'hidden'
            LinksInBox3.style.opacity = '0'
        }

    }))



}


NavbarLinks()