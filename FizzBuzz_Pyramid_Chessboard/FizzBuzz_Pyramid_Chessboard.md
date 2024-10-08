
# FizzBuzz Project:
    I used the code from the [04ControlFlow folder](https://github.com/rdwrome/261fa24/tree/main/04ControlFlow) in the course github repository as a example to figure out how to do this. For example, the while loops and the % function for finding if a number is divisible by another number.

    To count from 1 to 100, I started with a while loop like this for the counter:
        while count < 100 {
            count += 1
        }
    but changed it to the shorter version like this which does the same thing:
        for (let count = 0; count < 100; count += 1)

    I didn't really run into any problems except for it counting from 0 to 99 at first so I changed the count variable to start at 1 instead of 0 and changed count < 100 to count <= 100 so it goes to 100.

    First the program uses one line to check if the counter number is divisible by either 5 or 3. If it's not then it just prints whatever number the counter is on.
    If the number is divisible by 5 or 3, then it uses an if statement nested under the original one to check if it is divisible by BOTH 3 & 5. If it is not then there is an else if statement to check if it is divisible by 3. Otherwise it continues to a final else statment that just prints 
    Buzz without checking if it is divisible by 5 because at that point it has to be divisible by 5 if it's not divisible by 3.