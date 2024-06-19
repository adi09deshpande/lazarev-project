function navAnimation() {
    var nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function () {
    let tl=gsap.timeline()
    tl.to('#nav-bottom',{
    height:"25vh",
    })
    tl.to('nav h5',{
        display:"block",
    },"anim")
    tl.to('.nav-part2 h5 span',{
        y:0,
        stagger:{
            amount:0.6
        }
    },"anim")
})

nav.addEventListener("mouseleave",function () {
    gsap.to('.nav-part2 h5 span',{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    gsap.to('.nav-part2 h5',{
        display:"none",
        duration:0.1,
    })
    gsap.to('#nav-bottom',{
        height:"0vh",
        duration:0.2,
    })
})

}

navAnimation()


function page2Animation() {
    var rightElems=document.querySelectorAll(".right-elem")

rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter",function () {
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function () {
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function (x) {
        gsap.to(elem.childNodes[3],{
            x:x.x - elem.getBoundingClientRect().x -50,
            y:x.y - elem.getBoundingClientRect().y -150
        })
    })

})
}

page2Animation();
