# Ledger project test
* Open localhost

## Display initial 10 cards, clicks next button then shows initial 2 cards then click previous then shows first 10 cards again
* Verify "card" from "0" to "9" exists
* Displays "email" "msg@msg.com" from "2" to "11"
* Displays "message" "hello people" from "2" to "11"
* Click "nextButton" button
* Verify "card" from "0" to "1" exists
* Displays "email" "msg@msg.com" from "0" to "1"
* Displays "message" "hello people" from "0" to "1"
* Click "previousButton" button
* Verify "card" from "0" to "9" exists
* Displays "email" "msg@msg.com" from "2" to "11"
* Displays "message" "hello people" from "2" to "11"
## Displays next button and not previous button at first page, displays previous button and not next button at last page
* Verify "nextButton" exists
* Verify "previousButton" button is not visible
* Click "nextButton" button
* Verify "previousButton" exists
* Verify "nextButton" button is not visible
* Click "previousButton" button
* Verify "nextButton" exists
* Verify "previousButton" button is not visible
## Displays error after typing email wrong format and clicking add
* Must none display "Invalid mail" at "badge" class
* Enter "notEmailFormat" to "emailField" textbox
* Enter "Random message" to "messageField" textbox
* Click "addButton" button
* Must display "Invalid mail" at "errorSpan"

___
* Clear local
