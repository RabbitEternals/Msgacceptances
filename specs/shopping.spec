# Shoppin project test
* Open localhost

## Displays welcome header and basket link
* Displays "welcome_header" "Welcome To ShoppingPage"
* Displays "basket_link" "Basket Page"
## Display initial 10 cards
* Verify "card" from "0" to "9" exists
* Displays "header" "Product " from "0" to "9" normal
* Verify "photo" from "0" to "9" exists
* Verify "name" from "0" to "9" exists
* Verify "price" from "0" to "9" exists
* Verify "button" from "0" to "9" exists
## Add random three product to basket shirt650 camera1250 cable500
* Click "button0" button
* Click "button2" button
* Click "button3" button
* Verify "button0" button is not visible
* Verify "button2" button is not visible
* Verify "button3" button is not visible
## Navigate to basket page and displays welcome header,shopping link, total amount, clear and purchase buttons
* Click "basket_link" field
* Displays "welcome_header_basket" "Welcome To Your Basket Card"
* Displays "shopping_link" "Shopping Page"
* Displays "clear_button" "Clear"
* Displays "total_amount" "€2850"
* Displays "purchase_button" "Purchase"
## Navigate to basket page and displays products with all elements and compenents
* Click "basket_link" field
* Displays "name0" "Cable"
* Displays "name1" "Chair"
* Displays "name2" "Camera"
* Displays "quantity0" "1"
* Displays "quantity1" "1"
* Displays "quantity2" "1"
* Displays "price0" "500"
* Displays "price1" "1100"
* Displays "price2" "1250"
* Verify "photo" from "0" to "2" exists
* Displays "product" "Product " from "0" to "2" normal
## Navigate to basket page and changing amount of product changes prices and total price correctly
* Click "basket_link" field
* Click "+0" button
* Click "+1" button
* Click "+1" button
* Displays "quantity0" "2"
* Displays "quantity1" "3"
* Displays "price0" "1000"
* Displays "price1" "3300"
* Displays "total_amount" "€5550"
* Click "-0" button
* Click "-1" button
* Displays "quantity0" "1"
* Displays "quantity1" "2"
* Displays "price0" "500"
* Displays "price1" "2200"
* Displays "total_amount" "€3950"
## Navigate to basket page and delete product then does not show it
* Click "basket_link" field
* Click "delete2" button
* Verify "card2" not exists
* Displays "total_amount" "€2700"
## Navigate to basket page and clkear products then does not show it
* Click "basket_link" field
* Click "clear_button" button
* Verify "card0" not exists
* Displays "total_amount" "€0"

___
* Clear local
