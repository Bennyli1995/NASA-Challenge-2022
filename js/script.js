
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
  },
  {time: "16:58:00",
  temperature: 155054
  },
  {
  time: "16:59:00",
  temperature: 133501
  },
  {
  time: "17:00:00",
  temperature: 108082
  },
  {
  time: "17:01:00.00",
  temperature: 50230
  },
  {
  time: "17:02:00",
  temperature: 26849
  },
  {
  time: "17:03:00",
  temperature: 135756
  },
  {
  time: "17:04:00",
  temperature: 98345
  },
  {
  time: "17:05:00",
  temperature: 66822
  },
  {
  time: "17:06:00",
  temperature: 128947
  },
  {
  time: "17:07:00",
  temperature: 123772
  },
  {
  time: "17:08:00",
  temperature: 103698
  },
  {
  time: "17:09:00",
  temperature: 92871
  },
  {
  time: "17:10:00",
  temperature: 118697
  },
  {
  time: "17:11:00",
  temperature: 125670
  },
  {
  time: "17:12:00",
  temperature: 99982
  },
  {
  time: "17:13:00",
  temperature: 100048
  },
  {
  time: "17:14:00",
  temperature: 110188
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
  output.innerHTML = randomNumber;
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
  }
  let html = `<p class="time"> Time: ${tempObject.time}</p>
  <p class="temp">Temperature in Kelvin: ${tempObject.temperature}`

  // close off p-tag
  html += "</p>"

  document.getElementById('temp-box').innerHTML = html

  return html;}

  function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
  }

  function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
  }
  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
    const tempObject = temperatures[output.innerHTML]
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
      }
      let html = `<p class="time"> Time: ${tempObject.time}</p>
      <p class="temp">Temperature in Kelvin: ${tempObject.temperature}`
    
      // close off p-tag
      html += "</p>"
    
      document.getElementById('temp-box').innerHTML = html
    
      return html;}

      

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-temp').addEventListener("click", randomColor, false);

