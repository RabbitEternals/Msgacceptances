# Getting Started with Gauge

This is a context step that runs before every scenario
* Open localhost

## Display number of items
* Must display "msg@msg.com5"
* Must display "msg@msg.com6"
* Must display "msg@msg.com7"
* Must display "msg@msg.com8"
* Must display "msg@msg.com9"
* Click "Next"
* Must display "msg@msg.com10"
* Must display "msg@msg.com11"
* Must display "hello@mail.com"
* Must display "msg@msg.com"
* Must display "1234"
* Click "Previous"
* Must display "msg@msg.com5"
* Must display "msg@msg.com6"
* Must display "msg@msg.com7"
* Must display "msg@msg.com8"
* Must display "msg@msg.com9"

## Must add word
* Add word "test@mail.com5" "Email"
* Add word "test message5" "Message"
* Click "Add"
* Refresh page
* Must display "test@mail.com5"
* Must display "test message5"

A tear down step for every scenario
___
* Clear local
