# customCalender
Calender with UI and custom events

To add plugin run the following command <br/>
cordova plugin add https://github.com/gurindernarang/customCalender.git

inside app.js write the following code

     var success = function(message) {
        alert(message);
     }
     var failure = function(error) {
        alert("Error calling plugin");
     }
     calender.greet("Message to be displayed", success, failure);