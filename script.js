var sound = new Howl({
    src: ['80s_vibe.mp3']
});

// $(".grid3").append("<div>Hello, world!</div>")

// if (window.scrollY + window.innerHeight + 500 >= $(document).height()) {
//     console.log("Here")
// }

// window.addEventListener("scroll", function (event) {
//     // console.log(window.scrollY + window.innerHeight)
//     // console.log($(document).height())
//     if (window.scrollY + window.innerHeight + 100 >= $(document).height()) {
//         console.log("Here")
//         $(".grid3").append("<div>Hello, world!</div>")
//     }
// })

const data = [
    "Hello there!",
    "Welcome to",
    "my attempt",
    "at using",
    "jQuery",
    "and AOS",
    "to add",
    "some animation",
    "to this page.",
    "I ran out",
    "of things",
    "to say.",
    "This is",
    "probably",
    "the end.",
    "Bye!",
    "Why",
    "are you",
    "still here?",
    "Are you",
    "also",
    "procrastinating?",
    "I feel like",
    "I should",
    "remind you",
    "of that",
    "assignment",
    "you still",
    "need to do.",
    "Ok I've",
    "wasted enough",
    "of your and",
    "my time.",
    "This is",
    "the end",
    "for real",
    "this time!"
]

data.forEach(function (text) {
    $(".grid3").append(`<div>${text}</div>`)
})

$(".grid3 div").each(function (index, element) {
    element = $(element)
    index += 1
    element.css("grid-row", index)
    element.attr("data-aos", index % 2 == 1 ? "fade-up-left" : "fade-up-right")
    element.click(function () {
        sound.play();
    })
})

AOS.init();