// const btnEL = document.getElementById("btn");

// const apikey = "OShJ6OAUn17OXDRkc+2bVg==wxhpnwnQqHPsssyN";

// const options = {
//     method: "GET", 
//     Headers: {
//         "X-Api-Key": apikey,
//     },
// };

// const apiURL =("https://api.api-ninjas.com/v1/dadjokes?limit=1");


// async function getJoke() {
//     const response = await fetch(apiURL, options);
//     const data = await response.json();

//     console.log(data); 
// }

// btnEL.addEventListener("click", getJoke)

// document.getElementById("btn").addEventListener("click", joke);

// async function joke() {
//     let config ={
//         headers: {
//             Accept: "application/json",
//         },
//     };

//     let a = await fetch("https://icanhazdadjoke.com/" , config);
//     let b = await a.json()
//     document.getElementById("content").innerHTML = b.joke;
// }

// Function to fetch a dad joke from the API
async function fetchJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
  
      const data = await response.json();
      return data.joke;
    } catch (error) {
      console.log('Error fetching joke:', error);
      return 'Failed to fetch a dad joke. Please try again!';
    }
  }
  function displayJoke(joke) {
    const jokeDisplay = document.getElementById('friends');
    jokeDisplay.textContent = joke;
  }
  
  // Event listener for the button click
  const jokeBtn = document.getElementById('btn');
  jokeBtn.addEventListener('click', async () => {
    const joke = await fetchJoke();
    displayJoke(joke);
  });