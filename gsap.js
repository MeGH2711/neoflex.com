function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        inertia: .6,
        getDirection: true,
        mobile: {
            breakpoint: 0,  
            smooth: true,
            inertia: .9,
            getDirection: true,
        },
        tablet: {
            breakpoint: 0,  
            smooth: true,
            inertia: 0.9,
            getDirection: true,
        },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, true) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locomotive();

gsap.from(".fadeIn", {
    duration: 3,
    opacity: 0,
    ease: "power3.out",
});

gsap.from(".fadeDown", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out",
    stagger: 0.2,
});

gsap.from(".fadeUp", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    stagger: 0.2,
});

gsap.from(".landingImage", {
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power3.out",
});

gsap.to("#scrollPageId h1", {
        transform: "translateX(-36%)",  // End state
        scrollTrigger: {
            trigger: "#scrollPageId",
            scroller: ".main",
            start: "top 0%",
            end: "top -150%",
            scrub: 2,
            pin: true,
        },
    }
);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".topBuysHeading", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".topBuysHeading",
        start: "top 65%",
    }
});

gsap.from(".topBuysCard", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".topBuysCard",
        start: "top 65%",
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     const video = document.getElementById('scrollVideoId');
//     let scrollTimeout;

//     video.addEventListener('loadedmetadata', function () {
//         const videoDuration = video.duration;

//         gsap.to(video, {
//             currentTime: videoDuration,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: '.video-wrapper',
//                 scroller: ".main",
//                 start: "top top",
//                 end: "+=150%",
//                 scrub: .15,
//                 // markers: true,
//                 pin: true,
//                 anticipatePin: 1,
//                 onUpdate: (self) => {
//                     if (video.paused) {
//                         video.play();
//                     }
//                     clearTimeout(scrollTimeout);
//                     scrollTimeout = setTimeout(() => {
//                         video.pause();
//                     }, 150);
//                 }
//             }
//         });

//         video.pause();
//     });
// });

function canvasVideo(){

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
        var data = `
        ./assets/canvas-video/i\ \(1\).jpg
        ./assets/canvas-video/i\ \(2\).jpg
        ./assets/canvas-video/i\ \(3\).jpg
        ./assets/canvas-video/i\ \(4\).jpg
        ./assets/canvas-video/i\ \(5\).jpg
        ./assets/canvas-video/i\ \(6\).jpg
        ./assets/canvas-video/i\ \(7\).jpg
        ./assets/canvas-video/i\ \(8\).jpg
        ./assets/canvas-video/i\ \(9\).jpg
        ./assets/canvas-video/i\ \(10\).jpg
        ./assets/canvas-video/i\ \(11\).jpg
        ./assets/canvas-video/i\ \(12\).jpg
        ./assets/canvas-video/i\ \(13\).jpg
        ./assets/canvas-video/i\ \(14\).jpg
        ./assets/canvas-video/i\ \(15\).jpg
        ./assets/canvas-video/i\ \(16\).jpg
        ./assets/canvas-video/i\ \(17\).jpg
        ./assets/canvas-video/i\ \(18\).jpg
        ./assets/canvas-video/i\ \(19\).jpg
        ./assets/canvas-video/i\ \(20\).jpg
        ./assets/canvas-video/i\ \(21\).jpg
        ./assets/canvas-video/i\ \(22\).jpg
        ./assets/canvas-video/i\ \(23\).jpg
        ./assets/canvas-video/i\ \(24\).jpg
        ./assets/canvas-video/i\ \(25\).jpg
        ./assets/canvas-video/i\ \(26\).jpg
        ./assets/canvas-video/i\ \(27\).jpg
        ./assets/canvas-video/i\ \(28\).jpg
        ./assets/canvas-video/i\ \(29\).jpg
        ./assets/canvas-video/i\ \(30\).jpg
        ./assets/canvas-video/i\ \(31\).jpg
        ./assets/canvas-video/i\ \(32\).jpg
        ./assets/canvas-video/i\ \(33\).jpg
        ./assets/canvas-video/i\ \(34\).jpg
        ./assets/canvas-video/i\ \(35\).jpg
        ./assets/canvas-video/i\ \(36\).jpg
        ./assets/canvas-video/i\ \(37\).jpg
        ./assets/canvas-video/i\ \(38\).jpg
        ./assets/canvas-video/i\ \(39\).jpg
        ./assets/canvas-video/i\ \(40\).jpg
        ./assets/canvas-video/i\ \(41\).jpg
        ./assets/canvas-video/i\ \(42\).jpg
        ./assets/canvas-video/i\ \(43\).jpg
        ./assets/canvas-video/i\ \(44\).jpg
        ./assets/canvas-video/i\ \(45\).jpg
        ./assets/canvas-video/i\ \(46\).jpg
        ./assets/canvas-video/i\ \(47\).jpg
        ./assets/canvas-video/i\ \(48\).jpg
        ./assets/canvas-video/i\ \(49\).jpg
        ./assets/canvas-video/i\ \(50\).jpg
        ./assets/canvas-video/i\ \(51\).jpg
        ./assets/canvas-video/i\ \(52\).jpg
        ./assets/canvas-video/i\ \(53\).jpg
        ./assets/canvas-video/i\ \(54\).jpg
        ./assets/canvas-video/i\ \(55\).jpg
        ./assets/canvas-video/i\ \(56\).jpg
        ./assets/canvas-video/i\ \(57\).jpg
        ./assets/canvas-video/i\ \(58\).jpg
        ./assets/canvas-video/i\ \(59\).jpg
        ./assets/canvas-video/i\ \(60\).jpg
        ./assets/canvas-video/i\ \(61\).jpg
        ./assets/canvas-video/i\ \(62\).jpg
        ./assets/canvas-video/i\ \(63\).jpg
        ./assets/canvas-video/i\ \(64\).jpg
        ./assets/canvas-video/i\ \(65\).jpg
        ./assets/canvas-video/i\ \(66\).jpg
        ./assets/canvas-video/i\ \(67\).jpg
        ./assets/canvas-video/i\ \(68\).jpg
        ./assets/canvas-video/i\ \(69\).jpg
        ./assets/canvas-video/i\ \(70\).jpg
        ./assets/canvas-video/i\ \(71\).jpg
        ./assets/canvas-video/i\ \(72\).jpg
        ./assets/canvas-video/i\ \(73\).jpg
        ./assets/canvas-video/i\ \(74\).jpg
        ./assets/canvas-video/i\ \(75\).jpg
        ./assets/canvas-video/i\ \(76\).jpg
        ./assets/canvas-video/i\ \(77\).jpg
        ./assets/canvas-video/i\ \(78\).jpg
        ./assets/canvas-video/i\ \(79\).jpg
        ./assets/canvas-video/i\ \(80\).jpg
        ./assets/canvas-video/i\ \(81\).jpg
        ./assets/canvas-video/i\ \(82\).jpg
        ./assets/canvas-video/i\ \(83\).jpg
        ./assets/canvas-video/i\ \(84\).jpg
        ./assets/canvas-video/i\ \(85\).jpg
        ./assets/canvas-video/i\ \(86\).jpg
        ./assets/canvas-video/i\ \(87\).jpg
        ./assets/canvas-video/i\ \(88\).jpg
        ./assets/canvas-video/i\ \(89\).jpg
        ./assets/canvas-video/i\ \(90\).jpg
        ./assets/canvas-video/i\ \(91\).jpg
        ./assets/canvas-video/i\ \(92\).jpg
        ./assets/canvas-video/i\ \(93\).jpg
        ./assets/canvas-video/i\ \(94\).jpg
        ./assets/canvas-video/i\ \(95\).jpg
        ./assets/canvas-video/i\ \(96\).jpg
        ./assets/canvas-video/i\ \(97\).jpg
        ./assets/canvas-video/i\ \(98\).jpg
        ./assets/canvas-video/i\ \(99\).jpg
        ./assets/canvas-video/i\ \(100\).jpg
        ./assets/canvas-video/i\ \(101\).jpg
        ./assets/canvas-video/i\ \(102\).jpg
        ./assets/canvas-video/i\ \(103\).jpg
        ./assets/canvas-video/i\ \(104\).jpg
        ./assets/canvas-video/i\ \(105\).jpg
        ./assets/canvas-video/i\ \(106\).jpg
        ./assets/canvas-video/i\ \(107\).jpg
        ./assets/canvas-video/i\ \(108\).jpg
        ./assets/canvas-video/i\ \(109\).jpg
        ./assets/canvas-video/i\ \(110\).jpg
        ./assets/canvas-video/i\ \(111\).jpg
        ./assets/canvas-video/i\ \(112\).jpg
        ./assets/canvas-video/i\ \(113\).jpg
        ./assets/canvas-video/i\ \(114\).jpg
        ./assets/canvas-video/i\ \(115\).jpg
        ./assets/canvas-video/i\ \(116\).jpg
        ./assets/canvas-video/i\ \(117\).jpg
        ./assets/canvas-video/i\ \(118\).jpg
        ./assets/canvas-video/i\ \(119\).jpg
        ./assets/canvas-video/i\ \(120\).jpg
        ./assets/canvas-video/i\ \(121\).jpg
        ./assets/canvas-video/i\ \(122\).jpg
        ./assets/canvas-video/i\ \(123\).jpg
        ./assets/canvas-video/i\ \(124\).jpg
        ./assets/canvas-video/i\ \(125\).jpg
        ./assets/canvas-video/i\ \(126\).jpg
        ./assets/canvas-video/i\ \(127\).jpg
        ./assets/canvas-video/i\ \(128\).jpg
        ./assets/canvas-video/i\ \(129\).jpg
        ./assets/canvas-video/i\ \(130\).jpg
        ./assets/canvas-video/i\ \(131\).jpg
        ./assets/canvas-video/i\ \(132\).jpg
        ./assets/canvas-video/i\ \(133\).jpg
        ./assets/canvas-video/i\ \(134\).jpg
        ./assets/canvas-video/i\ \(135\).jpg
        ./assets/canvas-video/i\ \(136\).jpg
        ./assets/canvas-video/i\ \(137\).jpg
        ./assets/canvas-video/i\ \(138\).jpg
        ./assets/canvas-video/i\ \(139\).jpg
        ./assets/canvas-video/i\ \(140\).jpg
        ./assets/canvas-video/i\ \(141\).jpg
        ./assets/canvas-video/i\ \(142\).jpg
        ./assets/canvas-video/i\ \(143\).jpg
        ./assets/canvas-video/i\ \(144\).jpg
        ./assets/canvas-video/i\ \(145\).jpg
        ./assets/canvas-video/i\ \(146\).jpg
        ./assets/canvas-video/i\ \(147\).jpg
        ./assets/canvas-video/i\ \(148\).jpg
        ./assets/canvas-video/i\ \(149\).jpg
        ./assets/canvas-video/i\ \(150\).jpg
        ./assets/canvas-video/i\ \(151\).jpg
        ./assets/canvas-video/i\ \(152\).jpg
        ./assets/canvas-video/i\ \(153\).jpg
        ./assets/canvas-video/i\ \(154\).jpg
        ./assets/canvas-video/i\ \(155\).jpg
        ./assets/canvas-video/i\ \(156\).jpg
        ./assets/canvas-video/i\ \(157\).jpg
        ./assets/canvas-video/i\ \(158\).jpg
        ./assets/canvas-video/i\ \(159\).jpg
        ./assets/canvas-video/i\ \(160\).jpg
        ./assets/canvas-video/i\ \(161\).jpg
        ./assets/canvas-video/i\ \(162\).jpg
        ./assets/canvas-video/i\ \(163\).jpg
        ./assets/canvas-video/i\ \(164\).jpg
        ./assets/canvas-video/i\ \(165\).jpg
        ./assets/canvas-video/i\ \(166\).jpg
        ./assets/canvas-video/i\ \(167\).jpg
        ./assets/canvas-video/i\ \(168\).jpg
        ./assets/canvas-video/i\ \(169\).jpg
        ./assets/canvas-video/i\ \(170\).jpg
        ./assets/canvas-video/i\ \(171\).jpg
        ./assets/canvas-video/i\ \(172\).jpg
        ./assets/canvas-video/i\ \(173\).jpg
        `;
    return data.split("\n")[index];
    }

        const frameCount = 173;
    
        const images = [];

        let imageSeq = {
        frame: 1,
        };
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }
       




    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    rotate: 100,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `.video-wrapper>canvas`,
        start: `top 0%`,
        end: `100% top`,
        scroller: `.main`,    
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

        trigger: ".video-wrapper",
        scroller: `.main`,
        pin: true,
        start: `top 0%`,
        end: `+=110%`,
        // markers:true,
    });

}

canvasVideo();

gsap.from(".shopByBrandsHeading", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".shopByBrandsHeading",
        start: "top 80%",
        end: "top 70%",
        // markers: true,

    }
});

gsap.from(".brandCard", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".brandCard",
        start: "top 80%",
        end: "top 70%",
        // markers: true,
    }
});

gsap.from(".storesAtHeading", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".storesAtHeading",
        start: "top 80%",
        end: "top 70%",
        // markers: true
    }
});


gsap.from(".location", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".location",
        start: "top 80%",
        end: "top 70%",
        // markers: true,
    }
});

gsap.from(".getInTouchHeading, .form-fields", {
    duration: 1,
    opacity: 0,
    x: 30,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".getInTouchHeading",
        start: "top 65%",
        end: "top 70%",
        // markers: true,
    }
});

gsap.from(".icons button", {
    duration: 1,
    opacity: 0,
    x: 30,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".icons",
        start: "top 65%",
        end: "top 70%",
        // markers: true,
    }
});

gsap.from(".copyright, .designedBy", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".copyright",
        start: "top 95%",
        end: "top 90%",
        // markers: true,
    }
});
