var digit1=["A","B","C","D","E","F","G"];
var digit2=["0","1","2","3","4","5","6"];
var row_chosen=["X","X","X"];
var column_chosen=["9","9","9"];
var locations=[];
var no_of_guesses=0;
var no_of_hits=0;
$("#performance").hide();
function gameLauncher(){
    //to launch we need to numbers to place the ships
    for(var i=0;i<3;i++){
        var randomLetter=Math.round(Math.random()*6);
        row_chosen[i]=digit1[randomLetter];
        var randomNumber=Math.round(Math.random()*6);
        column_chosen[i]=digit2[randomNumber];
        var row=digit1.indexOf(row_chosen[i]);
        row.toString();
        var column=column_chosen[i].toString();
        var loc=row+column;
        locations[i]=loc;
        //alert(locations[i]);
        //$("#"+locations[i]).addClass("hit");
    }
}
gameLauncher();

$("#fireButton").click(function(){
    var guess=$("#guessInput").val();
    comparator(guess.toUpperCase());
});

function comparator(userguess){
    no_of_guesses++;
    var display_row=digit1.indexOf(userguess[0]);
    display_row.toString();
    var display_column=userguess[1];
    display_column.toString();
    var element=display_row+display_column;
    if (locations.includes(element)){
        no_of_hits++;
        $("#"+element).addClass("hit");
        if (no_of_hits == 3){
            displayscorecard();
        }
    }
    else{
        $("#"+element).addClass("miss");
    }
    
}
function displayscorecard(){
    $("#performance").show();
    $("#performance").text("You took "+no_of_guesses+" guesses to crash the ship");
    $("#messageArea").text("Well Played");
    $(".user-input").hide();
}



