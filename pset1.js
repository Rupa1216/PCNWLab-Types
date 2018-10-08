/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
-> 1 + 2 * 3 + 4
-> 800 / 80 / 8
-> 400 > 200
-> 1 !== 1
-> true || false
-> true && false
-> 20 % 6
-> 'a' + 'b'

******************/
// Tests for Problem 1:
console.log(typeof 17);
console.log(typeof (1 + 2 * 3 + 4));
console.log(typeof 400>200);
console.log(typeof(800 / 80 / 8));

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/

/*
Answers to Problem 1:

17
Type: number
Evaluation: number
Why: JavaScript recognizes an integer as a number.

1 + 2 * 3 + 4
Type: number
Evaluation: 1 + (2 * 3) + 4
            1 + 6 + 4
            7 + 4
            11
Why: JS follows the order of PEMDAS when evaluating arithmetic. 

800 / 80 / 8
Type: number
Evaluation: ((800 / 80) / 8 )
            (10 / 8)
            1.25
Why: In this case, since the operators are the same, JS will evaluate each math operator one by one from left to right.

400 > 200
Type: boolean
Evaluation: true
Why: JS tests the relationship between the two numbers and returns one of the two boolean values.

1 !== 1
Type: boolean
Evaluation: false
Why: The operator in question means "is not equal to". It can't be true that 1 is not equal to 1.

true || false
Type: boolean
Evaluation: true
Why: As long as either one of the two values are true, it will return true.

true && false
Type: boolean
Evaluation: false
Why: Since the two values are not equivalent, it will return false.

20 % 6
Type: number
Evaluation: 2
Why: JS performs 20 modulo 6 which yields a number. 

'a' + 'b'
Type: string
Evaluation: ab
Why: First JavaScript prints the first string and then prints the second string right next to the first one.


Answers to Problem 2:

4
Return: number
Why: Integers qualify as number data types.

'hello'
Return: string
Why: A 

true
Return: boolean
Why: true is one of the two words that register as boolean data types in JS.

2 === 1 || 3 === 4
Return: false
Why: The logical OR operator will output either true or false.

Answers to Problem 3:

Create a truth table for the expression A || B.

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 

Answers to Problem 4:

Create a truth table for the expression !A && !B.

|   A   |   B   |   !B   | !A    | !A && !B |
| true  | true  | false  | false | true     |
| false | true  | false  | true  | false    |
| true  | false | true   | false | false    |
| false | false |  true  | true  | true     |

Answers to Problem 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1.

2 + (3 * 2) + 1
      2 + 6 + 1
          8 + 1
              9
            
Answers to Problem 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.
(4 / 2) + (8 / 4)
     2  + (8 / 4)
     2  + 2 
     4

Answers to Problem 7:

'ca' + 'ter' + 'pi' + 'llar'
cater + 'pi' + 'llar'
caterpi + 'llar'
caterpillar
 
Answers to Problem 8:
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
true

*/

