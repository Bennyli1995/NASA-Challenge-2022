/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `temperatures array 
***/
const temperatures = [
  {
  time: "15:57:00", 
  temperature: 153832
  }, 
  {
  time: "15:58:00",
  temperature: 161218
  },
  {
  time: "16:02:00",
  temperature: 204971
  },
  {time: "16:03:00",
  temperature: 126075},
  {
  time: "16:04:00",
  temperature: 132774
  },
  {
  time: "16:05:00",
  temperature: 129430
  },
  {
  time: "16:06:00",
  temperature: 100863
  },
  {
  time: "16:07:00",
  temperature: 109321
  },
  {
  time: "16:08:00",
  temperature: 134362
  },
  {
  time: "16:09:00",
  temperature: 143067
  },
  {
  time: "16:10:00",
  temperature: 138158
  },
  {
  time: "16:11:00",
  temperature: 98828
  },
  {
  time: "16:12:00",
  temperature: 156202
  },
  {
  time: "16:13:00",
  temperature: 134056
  },
  {
  time: "16:14:00",
  temperature: 124237
  },
  {
  time: "16:15:00",
  temperature: 75936
  },
  {
  time: "16:16:00",
  temperature: 75936
  },
  {
  time: "16:31:00",
  temperature: 99737
  },
  {
  time: "16:32:00",
  temperature: 96028
  },
  {
  time: "16:33:00",
  temperature: 174385
  },
  {
  time: "16:34:00",
  temperature: 131143
  },
  {
  time: "16:35:00",
  temperature: 108993
  },
  {
  time: "16:36:00",
  temperature: 122290
  },
  {
  time: "16:37:00",
  temperature: 122728
  },
  {
  time: "16:38:00",
  temperature: 116986
  },
  {
  time: "16:39:00",
  temperature: 113672
  },
  {
  time: "16:40:00",
  temperature: 113695
  },
  {
  time: "16:41:00",
  temperature: 121319
  },
  {
  time: "16:42:00",
  temperature: 130513
  },
  {
  time: "16:43:00",
  temperature: 136340
  },
  {
  time: "16:44:00",
  temperature: 120462
  },
  {
  time: "16:45:00",
  temperature: 122142
  },
  {
  time: "16:46:00",
  temperature: 111989
  },
  {
  time: "16:47:00",
  temperature: 106408
  },
  {
  time: "16:48:00",
  temperature: 70519
  },
  {
  time: "16:49:00",
  temperature: 95252
  },
  {
  time: "16:50:00",
  temperature: 99451
  },
  {
  time: "16:51:00",
  temperature: 151639
  },
  {
  time: "16:52:00",
  temperature: 89522
  },
  {
  time: "16:53:00",
  temperature: 97832
  },
  {
  time: "16:54:00",
  temperature: 115095
  },
  {
  time: "16:55:00",
  temperature: 117125
  },
  {
  time: "16:56:00",
  temperature: 96646
  },
  {
  time: "16:57:00",
  temperature: 86439
  }]

/***
 * `getRandomTemp` function
 * 
 * Function should create a random number, and use that random number 
 * to return a random temperature from the temperatures array.
 *
 * @returns {string} Returns a random temperature object from the temperatures array,
 * based on the random number generated. 
 *
***/

function getRandomTemp(){
  const randomNumber = Math.floor((Math.random()*temperatures.length))
  return temperatures[randomNumber];
}

/***
 * `printTemp` function
 * 
 * Three functions: 
 * 1. Call the getRandomTemp function 
 * 2. Use the returned temp object to build a string of HTML
 * and temp properties
 * 3. Then use that string to display a random time and temp
 * in the browser.
***/

function printTemp(){
    const tempObject = getRandomTemp();

    let html = `<p class="time"> Time: ${tempObject.time}</p>
    <p class="temp">Temperature in Kelvin: ${tempObject.temperature}`

    // close off p-tag
    html += "</p>"

    document.getElementById('temp-box').innerHTML = html

    return html;
}

/***
 * `randomColor` function
 * 
 * This is a function that will change the color of the background randomly.
 * @returns {string} Returns a random background color
***/

function randomColor(){
  const tempObject = getRandomTemp();
  if (tempObject.temperature < 80000) {
    document.body.style.backgroundImage = "url('70000.jpeg')";
  } else if (tempObject.temperature < 90000) {
    document.body.style.backgroundImage = "url('80000.jpeg')";
  } else if (tempObject.temperature < 100000) {
    document.body.style.backgroundImage = "url('90000.jpeg')";
  } else if (tempObject.temperature < 110000) {
    document.body.style.backgroundImage = "url('100000.jpeg')";
  } else if (tempObject.temperature < 120000) {
    document.body.style.backgroundImage = "url('110000.jpeg')";
  } else if (tempObject.temperature < 130000) {
    document.body.style.backgroundImage = "url('120000.jpeg')";
  } else if (tempObject.temperature < 140000) {
    document.body.style.backgroundImage = "url('130000.jpeg')";
  } else if (tempObject.temperature < 150000) {
    document.body.style.backgroundImage = "url('140000.jpeg')";
  } else if (tempObject.temperature < 160000) {
    document.body.style.backgroundImage = "url('150000.jpeg')";
  } else {
    document.body.style.backgroundImage = "url('160000.jpeg')";
  }}

/***
 * `Timer` function
 * 
 * This is a function that will automatically refresh the quotes every 3s.
 * Function has no returns.
***/

function Timer(){
  randomColor()
  printTemp()
}

setInterval('Timer()', 3000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-temp').addEventListener("click", printTemp, false);
document.getElementById('load-temp').addEventListener("click", randomColor, false);