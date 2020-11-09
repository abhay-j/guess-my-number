'use strict';
let hiddenNumber  = Math.floor(Math.random() * 20) + 1;

let highScore = 0;

let current  = Number(document.querySelector('main .right .score').textContent);

const checkBtn = document.querySelector('main .left .check');

const againBtn = document.querySelector('.again');

const displayMessage = function(message){
    document.querySelector('main .right .message').textContent = message; 
}

againBtn.addEventListener('click',(e)=>{
   current = 20;
   
   hiddenNumber  = Math.floor(Math.random() * 20) + 1;

//    document.querySelector('main .right .message').textContent ='Start guessing...'
    displayMessage('start guessing...')

   document.querySelector('main .right .score').textContent = current;

   document.querySelector('.number').textContent = '?';

   document.querySelector('body').style.backgroundColor = '#222';
   
   document.querySelector('.number').style.width = '15rem';
   
   document.querySelector('.left .guess').value = ''; 
})
checkBtn.addEventListener('click',(e)=>{
    
    let guess = Number(document.querySelector('.left .guess').value);
    
    if(!guess){
            // document.querySelector('main .right .message').textContent = 'no number!!';
            displayMessage('no number!!');
        }
        else if(guess !== hiddenNumber){
            if(current > 1){
                
                // document.querySelector('main .right .message').textContent = 
                displayMessage(guess > hiddenNumber ? 'go lower!!' : 'go higher!!');
                // guess > hiddenNumber ? 'go higher!!' : 'go lower';
                current = current - 1 ;
                document.querySelector('main .right .score').textContent = current;
            }
            else{
                document.querySelector('main .right .message').textContent = 'you loose the game!!';
                document.querySelector('main .right .score').textContent = 0;
            }
        }
        
        
        //if the number is too low
        // else if(guess < hiddenNumber){
        //     if(current > 1){
                
        //         document.querySelector('main .right .message').textContent = 'go higher!!';
        //         current = current - 1 ;
        //         document.querySelector('main .right .score').textContent = current;
        //     }
        //     else{
        //         document.querySelector('main .right .message').textContent = 'you loose the game!!';
        //         document.querySelector('main .right .score').textContent = 0;
        //     }
        // }
        // //if the number is too high
        // else if(guess > hiddenNumber){
        //     if(current > 1 ){
                
        //         document.querySelector('main .right .message').textContent = 'go lower!!';
        //         current = current - 1;
        //         document.querySelector('main .right .score').textContent = current;
        //     }
        //     else{
        //         document.querySelector('main .right .message').textContent = 'you loose the game!!';
        //         document.querySelector('main .right .score').textContent = 0;
        //     }
        // }
        //for correct answer
        else {
            // document.querySelector('main .right .message').textContent = 'right answer!!';

            displayMessage('right answer!!');

            document.querySelector('header .number').textContent = hiddenNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(current > highScore){
                highScore = current;
                document.querySelector('.highscore').textContent = highScore;
            }
            
        }
    })
    
    
    
    