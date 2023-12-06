//minutes
const timerWork = 20;

//seconds
let amountTimeWork = timerWork * 60; 

function calculateWork() {
    const countdownWork = document.querySelector("#countdownWork");
    let minutesWork = Math.floor(amountTimeWork/60);
    let secondsWork = amountTimeWork%60;

    if (secondsWork < 10) {
        secondsWork = "0" + secondsWork;
    }


    countdownWork.textContent = `${minutesWork} : ${secondsWork}`;
    amountTimeWork--;

    if (amountTimeWork < 0) {
        stopTimerWork();
        amountTimeWork = 0;
    }

    function stopTimerWork() {
        clearInterval(timerIdWork);
        secondTimer();
    }

}

let timerIdWork = setInterval(calculateWork, 1000);

function secondTimer() {
    const timerRelax = 1;
    let amountTimeRelax = timerRelax *60;

    function calculateRelax() {
        const countdownRelax = document.querySelector("#countdownRelax");
        let minutesRelax = Math.floor(amountTimeRelax/60);
        let secondsRelax = amountTimeRelax%60;

        if (secondsRelax < 10) {
            secondsRelax = "0" + secondsRelax;
        }


        countdownRelax.textContent = `${minutesRelax} : ${secondsRelax}`;
        amountTimeRelax--;

        if (amountTimeRelax < 0) {
            stopTimerRelax();
            amountTimeRelax = 0;
        }

        function stopTimerRelax() {
            clearInterval(timerIdRelax);
        }

    }


    let timerIdRelax = setInterval(calculateRelax, 1000);   
}

const submit = document.querySelector('.submit');
const btn = document.querySelector('.btn');
const toDoConainer = document.querySelector('.toDoContainer')

btn.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerText=submit.value;
    task.classList.add('addedTask');
    toDoConainer.appendChild(task);
    submit.value = '';

    task.addEventListener('click', () => {
        task.classList.add('doneTask');
    })

    task.addEventListener('dblclick', () => {
        toDoConainer.removeChild(task);
    })

})

