// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//pass parameters?
// add set item function to this event handler?
//

//  Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

window.onload = function godzilla() {
  mothraGetLocalStorage();
  mothraCurrentDay();
  mothraCheckCompareTimes();
};
$(".btn").on("click", function (event) {
  event.preventDefault();
  mothraPutInLocalStorage();
});

function mothraPutInLocalStorage() {
  var textAreaContents = $("#9").siblings().add("#9");
  // console.log(textAreaContents);
  for (let index = 0; index < textAreaContents.length; index++) {
    var textAreaValue = $("textarea").eq(index).val();
    console.log(textAreaValue);
    // get each individual element instead of all of them
    // make variables for index number vs unique id number
    // compare those numbers
    // get string from text area array and store in variable

    console.log("planned-item-string", textAreaValue);
    // get number value of index and store in variable
    var indexNumber = index;
    // get part of key that is the same and store it in a variable
    var keyString = "planner-items - ";
    // get part of key that is different and store it in a variable
    var keyIndexNumber = indexNumber;
    // make a compound key that is unique to this iteration and store it in a variable
    var uniqueKey = keyString + keyIndexNumber;
    // save the string from #1 in localstorage using the key from the last step
    localStorage.setItem(uniqueKey, JSON.stringify(textAreaValue));
  }
}

// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

function mothraGetLocalStorage() {
  //need to get storageitems
  var textAreaContents = $("#9").siblings().add("#9");
  // console.log(textAreaContents);
  for (let index = 0; index < textAreaContents.length; index++) {
    var textAreaValue = $("textarea").eq(index).val();
    console.log(textAreaValue);
    console.log("planned-item-string", textAreaValue);
    // get number value of index and store in variable
    var indexNumber = index;
    // get part of key that is the same and store it in a variable
    var keyString = "planner-items - ";
    // get part of key that is different and store it in a variable
    var keyIndexNumber = indexNumber;
    // make a compound key that is unique to this iteration and store it in a variable
    var uniqueKey = keyString + keyIndexNumber;
    var localStorageItem = JSON.parse(localStorage.getItem(uniqueKey));
    console.log(localStorageItem);
    $("textarea").eq(index).text(localStorageItem);

    //needs to happen on page load
    //needs to reference the correct id and text area
  }
}
//
// Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// Add code to display the current date in the header of the page.
function mothraCurrentDay() {
  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("MMM D, YYYY"));
}

var timeBlocks = $("#9").siblings().add("#9");
function mothraCheckCompareTimes() {
  var hourValue = dayjs().format("HH");
  var hourValueParse = parseInt(hourValue, 0);
  // console.log(hourValueParse);
  for (let index = 0; index < timeBlocks.length; index++) {
    var targetBlock = timeBlocks[index];
    // console.log(targetBlock);
    var realTime = targetBlock.id;
    // console.log(realTime);
    var realtimeInteger = parseInt(realTime);
    console.log(realtimeInteger);
    console.log(realTime);
    if (realtimeInteger > hourValueParse) {
      $(targetBlock).addClass("future");
      console.log("future");
    } else if (realtimeInteger === hourValueParse) {
      $(targetBlock).addClass("present");
      console.log("present");
    } else {
      realtimeInteger < hourValueParse;
      $(targetBlock).addClass("past");
      console.log("past");
    }
  }
}
