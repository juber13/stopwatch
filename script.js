const btns = document.getElementsByClassName('btn')[0];
const clockContainer = document.getElementsByClassName('clock-content')[0];
console.log(clockContainer)


let miliSecond = 0;
let second = 0;
let minute = 0;
let hourse = 0;
let text = "00:"
let timerId;

function addDisabled(id){
    for(let i = 0; i < btns.children.length - 1; i++){
       if(btns.children[i].id == id)
        btns.children[i].setAttribute('disabled' , true);
       
       else btns.children[i].removeAttribute('disabled');
    }
}

const startTimer = () => {
    if(timerId) clearInterval(timerId);

    timerId = setInterval(() => {
        // const d = new Date().
        miliSecond++;
        if(miliSecond >= 100){
            miliSecond = 0;
            second++;

            if(second >= 60){
                second = 0;
                minute++;

                if(minute >= 60){
                    minute = 0;
                    hourse++;
                }
            }
        }    
      
    
     
    
    clockContainer.children[0].innerHTML =  `${hourse <= 9 ? '0' + hourse : hourse}:`;
    clockContainer.children[1].innerHTML = `${minute <= 9 ? '0' + minute : minute}:`;
    clockContainer.children[2].innerHTML =  `${second <= 9 ? '0' + second : second}:` 
    clockContainer.children[3].innerHTML = miliSecond;
},10)
}

const stopTimer = () => clearInterval(timerId);


const resetTimer = () => {
    clearInterval(timerId)
    for(let i = 0; i < clockContainer.children.length; i++){
        if(i == 3){
            clockContainer.children[i].innerHTML = "00"
        }else{

            clockContainer.children[i].innerHTML = "00:"
        }
    }

    Array.from(btns.children).forEach(btn => {
        if(btn.hasAttribute('disabled')){
            btn.removeAttribute('disabled');
        }
    })

    miliSecond = 0;
    second = 0;
    minute = 0;
    hourse = 0;
}


function startWatch(e){
    const targetBtn = e.target.id;

    if(targetBtn == "start"){
       startTimer();
       addDisabled(targetBtn)
    }

    if(targetBtn == "stop"){
        stopTimer()
        addDisabled(targetBtn)
    }

    if(targetBtn == "reset"){
          resetTimer();
    }
}




btns.addEventListener('click' , startWatch);