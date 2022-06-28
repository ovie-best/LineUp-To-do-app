const steps = document.querySelectorAll('.onboarding-container .step');
const stepContainer = document.querySelector('.onboarding-container .steps');
const nextBtn = document.querySelector('.onboarding-container .next-btn');
const dots = document.querySelectorAll('.onboarding-container .dot')

let stepPosition = 0;
let currentstep = 0;

const swipe = () => {
    currentstep++;
    stepPosition += steps[0].offsetWidth;
    stepContainer.style.transform = `translateX(-${stepPosition}px)`;

    if(currentstep == steps.length - 1){
        nextBtn.innerHTML = '<a href = "signup.html" style="text-decoration: none; color: #000" >Finish</a>';
    }
    dots.forEach(d => {
        d.classList.remove('active');
    })
    dots[currentstep].classList.add('active');

}

nextBtn.addEventListener('click', swipe);

