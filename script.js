const btn=document.querySelector("button");
const signal=document.querySelector(".signal");
const result=document.querySelector(".result");

let startTime=0;

let isStarted=false;
let isGameOn=true;

btn.addEventListener("click", ()=>{

    if(!isStarted){
        btn.innerHTML="WAIT";
        btn.disabled=true;
        signal.style.backgroundColor="red";
    let rand=Math.floor(Math.random()*3)+2;
    setTimeout(()=>{
        btn.disabled=false;
        signal.style.backgroundColor="green";
        btn.innerHTML="Submit";
        isStarted=true;
        startTime=performance.now();
    }, rand*1000);
}


    else if(isGameOn && isStarted){
        btn.innerHTML="Restart";
        let endTime=performance.now();
        let diff=(endTime-startTime)/1000;
        result.innerHTML=`Your time is: ${diff.toFixed(3)} seconds`;

        isGameOn=false;

    }
    else{
        btn.innerHTML="Start";
        isGameOn=true;
        isStarted=false;
        signal.style.backgroundColor="black";
        result.innerHTML=`Click Submit when the signal turns green from red. Click start and the black signal will turn red.`;


    }

});
