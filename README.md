# Lab 8 - Alexis Chao

1) Where would you fit your automated tests in your Recipe project development pipeline?
    
    I would fit my automated tests in my Recipe project development pipeline within a Github action that runs whenever code is pushed. This allows for less work for the developer, so they do not have to manually run time locally before pushing the code and ensures that the test will be run on every instance of code pushed.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    I would not use and end to end test to check if a function is returning the correct output. This is because end to end testing cares more for checking user behavior rather than just checking if a function is returning the right output. 

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    I would not use a unit test to test the “message” feature of a messaging application. This is because this feature is a culmination of many actions and likely many functions. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    I would use a unit test to test the "max message length" feature of a messaging application. This is because this feature seems to be isolated from other features of the messaging application which should allow for unit testing.