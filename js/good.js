let links = document.querySelectorAll(".navbar .container .navbar-nav li a")
console.log(links[0].dataset.links)

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector(e.target.dataset.links).scrollIntoView({
            behavior:"smooth"
        })
    })
})


