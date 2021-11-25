# Flashcard project test
* Open localhost

## Should create card after typing question and answer and clicking button, Then should show header and question but hide answer, After clicking card should answer and clicking card again should hide answer
* Enter "İs it a kitty?" to "questionField" textbox
* Enter "Yes it's a kitty" to "answerField" textbox
* Click "addButton" button
* Verify "questionField" empty
* Verify "answerField" empty
* Verify "card1" exists
* Must display "Question 1" at "header1"
* Must display "İs it a kitty?" at "question1"
* Must not display "Yes it's a kitty" at anywhere
* Click "card1" field
* Must display "Yes it's a kitty" at "card-text" class
* Click "card1" field
* Must not display "Yes it's a kitty" at anywhere

___
* Clear local
