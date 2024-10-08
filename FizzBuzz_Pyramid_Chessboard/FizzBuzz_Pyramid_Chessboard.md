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
If the number is divisible by 5 or 3, then it uses an if statement nested under the original one to check if it is divisible by BOTH 3 & 5. If it is not then there is an else if statement to check if it is divisible by 3. Otherwise it continues to a final else statment that just prints Buzz without checking if it is divisible by 5 because at that point it has to be divisible by 5 if it's not divisible by 3.
# Pyramid Project:
For this one I have it ask the user to input a number and then check if it is between 1 and 8. If it is, then it prints the first line of the pyramid. After that it checks if the number is above 1 to see if it should print the next line and then checks if it is above 2,3,4,5,6, and 7 to see if it needs to keep printing lines.

To notify the user that the number is out of range, I wasn't sure how to do that outside of the console so I looked up on google "prompt without input javascript" and found the alert() function.

Initially, I had the program checking if the number was out of range by checking if the number was less than 1 or more than 8. It seemed like if I typed random letters, then it wouldn't notify the user that it was out of range so I changed it to check if the number is in range instead.
# Chessboard Project
This one was pretty hard to figure out how to do. I wanted to find a way to have the console repeat a string multiple times. I googled it and found this webpage which was very helpful: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat] It indroduced me to the repeat() function that let me do this. It lets you repeat a string a specified amount of times. This is the example on the webpage which explains it and is similar to how I used it:

    const mood = 'Happy! ';

    console.log(`I feel ${mood.repeat(3)}`);
    // Expected output: "I feel Happy! Happy! Happy! "

Because the chessboard pattern alternates between two different characters (the space and the #), the only way I could think of doing it was to have it repeat both of them together in pairs. So " #", and "# ". If the number is odd then I add one more character at the end after the repeat function. I had to do a similar thing with the number of lines that it printed. Because each line starts with a different character than the one before, I had a loop that printed two lines at a time.

The program first checks if the size is an odd or even number, and has separate if statements for each scenario. To know how many lines to print, I set a counter that is equal to the size that was provided and have it count down. If the number is odd, then it will stop at 1 intead of 0, so that it can add one more line after that instead of two.