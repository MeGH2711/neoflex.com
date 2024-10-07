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

gsap.fromTo(
    "#scrollPageId h1",
    {
        transform: "translateX(35%)",  // Starting state
    },
    {
        transform: "translateX(-36%)",  // End state
        scrollTrigger: {
            trigger: "#scrollPageId",
            scroller: "body",
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
        trigger: ".topBuysCard",
        start: "top 65%",
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('scrollVideoId');
    let scrollTimeout;

    video.addEventListener('loadedmetadata', function () {
        const videoDuration = video.duration;

        gsap.to(video, {
            currentTime: videoDuration,
            ease: "none",
            scrollTrigger: {
                trigger: '.video-wrapper',
                start: "top top",
                end: "top -150%",
                scrub: true,
                markers: true,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    video.play();
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        video.pause();
                    }, 150);
                }
            }
        });

        video.pause();
    });
});

gsap.from(".shopByBrandsHeading", {
    duration: 1,
    opacity: 0,
    y: 100,
    start: "top 100%",
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".shopByBrandsContainer",
        start: "top 100%",
    }
});