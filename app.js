window.addEventListener("scroll", ()=>{
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY>0);
});

let questions = [{
    id:0,
    question: "What is your name?",
    answer: "My name is Pavan Rajput"
}, {
    id:1,
    question: "What is your age?",
    answer: "My age is 20"
}, {
    id:2,
    question: "What is your favorite color?",
    answer: "My favorite color is blue"
},
{
    id:3,
    question: "What is your favorite food?",
    answer: "My favorite food is pizza"
}
]

const faq = document.querySelector(".faq-container");

questions.forEach((question , i) => {
    const div = document.createElement("div");
    div.classList.add("faq");
    div.innerHTML = `
    <h2 class="faq-question">${question.question}</h2>
    <p class="faq-answer" >${question.answer}</p>
    `;
    faq.appendChild(div);
    div[i].addEventListener("click", () => {
        let p = document.querySelectorAll("faq-answer");
        div[i]=== p[i] ? p[i].style.display = "none" : p[i].style.display = "block";
    })
});


 var VanillaTilt.init(document.querySelector(".pro-box1"), {
    max: 10,          // Maximum tilt angle (reduce for less tilt)
    speed: 300,       // Speed of the tilt animation
    scale: 1.0,       // No scaling (set to 1 for no size increase)
    perspective: 800, // Adjust perspective (higher value = less perspective distortion)
    glare: false,     // Disable glare effect (optional)
  });

