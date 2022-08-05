
var buttons = ['r1','r2','r3','r4','r5','r6','r7','r7','r8','r9','r10','r11','r12','r13','r14','r15','r16'];
var gamePattern = [];
var randomNumber = Math.floor(Math.random()*16 + 1);
var randomChosenButton = buttons[randomNumber];
var userPattern = [];
var level = 0;
gamePattern.push(randomChosenButton);




// for blinking the buttons
document.addEventListener('keydown',function(){
$("#"+randomChosenButton).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
});



//to check the button that is pressed by the user
$('.btn').click(function(){
    var userClickedButton = $(this).attr("id");
    userPattern.push(userClickedButton);
    playSound('click');
    $("#"+userClickedButton).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    nextLevel();
    
});


//loop to check if the game pattern and user pattern are same 
function nextLevel(){
    var round2 = userPattern.length;   //we are checking each element of the gamePattern to that of userPattern, so that even if one is wrong,then game is over
    for(var i = 0;i<round2;i++){
        if(gamePattern[i]===userPattern[i]){}
        else{
            playSound('buzzer-wrong');
            $('body').addClass('gameOver');
            $('#level-title').text('Game over!! Refresh to Play Again ');
            setTimeout(function(){
                $('body').removeClass('gameOver');
            },200)
            restartGame();
        }
    }
    
  
var round = gamePattern.length - 1;  // this is the current level
    // if(gamePattern[round2]===userPattern[round2]){
        if(gamePattern.length === userPattern.length){
        if(gamePattern[round]===userPattern[round]){  
            userPattern = [];
            var randomNumber2 = Math.floor(Math.random()*16)+ 1;
            var buttons = ['r1','r2','r3','r4','r5','r6','r7','r7','r8','r9','r10','r11','r12','r13','r14','r15','r16'];
            var randomChosenButton2 = buttons[randomNumber2];
            gamePattern.push(randomChosenButton2);
            setTimeout(function(){
                $("#"+randomChosenButton2).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50); 
            },1000);
            level++
            $('#level-title').text('Level '+level);
        }
       
    }
}

function playSound(soundName){
var audio = new Audio("sounds/" +soundName+ ".mp3");
audio.play();
}









