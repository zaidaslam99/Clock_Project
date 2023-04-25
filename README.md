
# Clock Design

This project shows an understanding of Html, CSS, and JS. The Html and CSS are used to design the clock and the JS is used to program the time so it can tell in Central daylight time.
## Screenshots

![QR_Code_Design](https://github.com/zaidaslam99/Clock_Project/blob/main/clock_website_screenshot.png?raw=true)

## QR-Code Snippet

```javascript
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Get the degree for the watch as time increments.
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (seconds / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
```

## Lessons Learned

The querySelector() is a method used for searching and returning the very first element within the document that matches the given selectors. With a querySelector statement, you can select an element based on a CSS selector. This means that we can select elements by ID, class, or any other type of selector. So in the first line what we did was we declared a variable called hourEL and we are targeting a class with .hour this is going to get the element that is .hour and store that element into the variable. By doing this, we can then modify that variable using methods so that whatever happens with the execution of the method gets stored in the element. Something that I wanted to mention was that notice that we created a function called updateClock() and in it we are getting the current date and storing the hours, minutes, and seconds. 

The next thing that we need to know is that we are going to be creating a function that is going to be called updateClock() in the function we created a variable called currentdate and it is going to be taking in the new Date(). We then are running the setTimeout function and in it, we are going to be passing the function updateClock and have it run after 1000 seconds.  We then created 3 variables called hours, minutes, and seconds and we are getting the hours, minutes, and seconds.

The last part is rather simple all we are doing is getting the degrees for the watch as the time increments. 