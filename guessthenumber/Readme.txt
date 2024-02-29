In this guessnumber we have used some math functions to build this kind of functionalities they are :-
Firstly when you visit to the website it will randomly pic the number and store it in a "random_number" variable.
Then user need to enter the number in between the 1 to 100 and it stores the number entered by the user in "Gussed_Number" variable.
So we have question that how to store the value in input elements. Here we have the DOM menthod called as value().It stores the value of the respective element and stores in a "Guessed_Number".
 syntax:- 
       let guessed_Number   document.getElementById("Input").value;
Now it stores the value entered by the user.
After we need to give the guidence to the user that how far and how near he need to move to guess the number.
This scenario can be acheived by using the conditional statements.And we need to use the "tectContent" and "style.backgroundcolor" etc which are done earlier in our repository.

example :-
    if(Gussed_Numnber>random_Number) {
          let feedback =  document.getElementById("guess");
               feedback.textContent = "It is too high to number picked";
}

This the scenario we need to know to acheive the following guessnumber.

          
