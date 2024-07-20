function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function loadingAnimation() {
    var tl=gsap.timeline()
    tl.from('#page1',{
        opacity:0,
        duration:0.1
    })
    tl.from('#page1',{
        transform:"scaleX(0.7) scaleY(0.05) translateY(30%)",
        borderRadius:"50px",
        duration:2.5,
        ease:"expo.out"
    })
    tl.from('nav',{
        opacity:0,
        delay:-0.4
    })

    tl.from('#page1 h1',{
    opacity:0,
    y:50,
    duration: 0.6,
    stagger:0.3
    },"anim")

    tl.from('#page1 p,#page1 div',{
        opacity:0,
        delay:0.3,
        duration:0.4,
        stagger:0.2
    },"anim")
}
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
function page10_moveEffect()
{
    gsap.from('.btm10-parts h4',{
    x:0,
    duration:0.2,
    scrollTrigger:{
    trigger:'#page10-bottom',
    scroller: '#main',
    start:'top 80%',
    end:'top -80%',
    scrub:3,
    }
    })
}


locomotive();
loadingAnimation();
// navAnimation();
page2Animation();
page3VideoAnimation();
videoAnimation();
page10_moveEffect();