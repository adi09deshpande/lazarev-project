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

// navAnimation()


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

function page3VideoAnimation() {
    var playBtn=document.querySelector(".icon")
playBtn.addEventListener("mouseenter",function () {
    gsap.to('.page3-center h5',{
    opacity:1,
    y:-10
    })
})
playBtn.addEventListener("mouseleave",function () {
    gsap.to('.page3-center h5',{
    opacity:0,
    y:0
    })
})

var videoPlayBtn=document.querySelector(".page3-center")
var video=document.querySelector("#page3 video")

videoPlayBtn.addEventListener("click",function () {
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function () {
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

page3VideoAnimation();

function videoAnimation() {
    var sections=document.querySelectorAll(".sec-right")

sections.forEach(function (x)
{
    x.addEventListener("mouseenter",function () {
        x.childNodes[3].style.opacity=1;
        x.childNodes[3].play()
    })
    x.addEventListener("mouseleave",function () {
        x.childNodes[3].style.opacity=0;
        x.childNodes[3].load()
    })
})
}
videoAnimation();

function page10_moveEffect()
{
    gsap.from('.btm10-parts h4',{
    x:0,
    duration:0.2,
    scrollTrigger:{
    trigger:'#page10-bottom',
    scroller: 'body',
    start:'top 80%',
    end:'top -80%',
    scrub:3,
    }
    })
}
page10_moveEffect()