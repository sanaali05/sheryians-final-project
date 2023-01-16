var tl=gsap.timeline({
    scrollTrigger:{
        scroll:"#body",
        trigger:"#home",
        markers:true,
        start:"top top",
        scrub:true,
        pin:true
    },
})
tl.to("#mid",{
    left:"50%",
    ease:Power1,
})
tl.to("#mid span",{
    opacity:0,
    delay:-.1,
    ease:Power1,
},"same")
tl.to("#circle",{
    scale:.1,
    ease:Power1,
},"same")
tl.to("#one",{
    rotate:"-180",
    delay:.001,
    ease:Power1,
},"same")
tl.to("#two",{
    rotate:"-120deg",
    ease:Power1,
    delay:.01
},"same")
tl.to("#three",{
    rotate:"-70deg",
    ease:Power1,
    delay:.02
},"same")
tl.to("#gallery",{
    y:250,
    ease:Power1,
},"same")
tl.to("#purple",{
    top:"50%",
    delay:-.1,
    ease:Power1,
},"same")
tl.to("#midimage",{
    scale:0,
    ease:Power1,
    delay:.1
},"same")
tl.to("#pinkflare",{
    top:"70%",
    delay:.2,
    rotate:"0deg",
    ease:Power1,
},"same")
// tl.to("#circle",{
//     scale:.1,
//     ease:Power1,
// },"same")
tl.to("#purple",{
    opacity:0,
    delay:.5,
    ease:Power1,
},"same")
tl.to("#smcircle",{
    scale:.4,
    ease:Power1,
    delay:.1
},"same")
tl.to("#circle",{
    scale:0,
    ease:Power1,
},"samesame")

tl.to("#smcircle",{
    scale:0,
    ease:Power1,
},"samesame")
tl.to("#pinkbox",{
    bottom:"30%",
    ease:Power1,
},"samesame")
tl.to("#pinkbox",{
    bottom:"110%",
    ease:Power1,
    delay:.1
})


var tl2=gsap.timeline({
    scrollTrigger:{
        scroll:"#body",
        trigger:"#seconds",
        markers:true,
        start:"top top",
        scrub:true,
        pin:true
    },
})
tl2.to("#pibox",{
    top:"50%",
    scale:1,
    ease:Power1,
},"a")
tl2.to("#pubox",{
    top:"50%",
    scale:1,
    ease:Power1,
    delay:.1,
},"a")
tl2.to(".cir",{
    left:"50%",
    ease:Power1,
})
tl2.to(".cir",{
    scale:.6,
    ease:Power1,
})
tl2.to(".cir",{
    scale:6.2,
    ease:Power1,
})
tl2.to("#ones",{
    y:-50,
    ease:Power1,
})
tl2.to("#twos",{
    y:-50,
    ease:Power1,
})

tl2.to("#toptop",{
    borderBottom:"none",
    ease:Power1,
})
tl2.to("#wistful",{
    opacity:0,
    ease:Power1,
    delay:-.07,
    // stagger:3

},"b")

tl2.to("#gradient",{
    left:"-72%",
    ease:"slow",
    // stagger:3
},"b")
tl2.to("#twos",{
    y:-120,
    ease:Power1,
},"b")
tl2.to("#threes",{
    y:-120,
    ease:Power1,
},"b")
tl2.to("#magenta",{
    opacity:1,
    ease:Power1,
    delay:.3,
    // stagger:3

},"b")

tl2.to("#pibox",{
    background: "linear-gradient(to right,#d49dad,#B4AAD5)",
    ease:Power1,
    // delay:.1
    // stagger:3
},"b")

