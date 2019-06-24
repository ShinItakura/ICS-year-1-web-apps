var userName = prompt("Enter your name", "");
localStorage.setItem("userName", userName);
localStorage.setItem("TopScore", 0);
$(document).ready(function() {
    $('#button1').on('click', function(){
        var finalScore = 0;
        var total = 5; 
        var q1 = document.forms['qform']['q1'].value;
        var q2 = document.forms['qform']['q2'].value;
        var q3 = document.forms['qform']['q3'].value;
        var q4 = document.forms['qform']['q4'].value;
        var q5 = document.forms['qform']['q5'].value;
        for (var i = 1; i <= total; i++){
            if(eval('q' + i) === null || eval('q' + i) == ''){
                alert('question ' + i + ' is unanswered');
            return false;
            }
        }
        var answers = ["a", "b", "c", "d", "a"];
        for (var i = 1; i <= total; i++){
            if (eval('q' + i) == answers[i - 1]){
                finalScore++;
            }
        }
        if(finalScore > localStorage.TopScore){
            localStorage.setItem("TopScore",finalScore); 
        }
        var savedScore = localStorage.getItem("TopScore");
        var savedName = localStorage.getItem("userName");
        var results = document.getElementById('resultsTop');
        results.innerHTML = '<h3>You scored <span>' + finalScore + '</span> out of <span>' + total + '</span></h3>';
        var resultsB = document.getElementById('resultsBottom');
        resultsB.innerHTML = '<h2>RESULTS: ' + savedName + ' scored ' + finalScore + ' out of ' + total + "</h2>";
        var resultsC = document.getElementById('resultsSaved');
        resultsC.innerHTML = '<h3>That\'s your best Score<h3>'
        $('#resultsTop').fadeIn(3000);
        $('#resultsTop').fadeOut(3000);
        $('#resultsBottom').fadeIn(3000);
        $('#resultsBottom').fadeOut(3000);
        $('#resultsSaved').fadeIn(2000);
        $('#resultsSaved').fadeOut(3000);            
    });
});