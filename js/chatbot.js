
const apiKey = 'API_KEY';

const texts = document.querySelector('.chatbox-container');
const chatbotModel = "gpt-3.5-turbo-instruct"; // OpenAI GPT-3 model

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let speech = new SpeechSynthesisUtterance();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startRecognition() {
  console.log("recognition started");
  let recognition = new SpeechRecognition();
  recognition.interimResults = false; // To not give real-time results
  
  let p = document.createElement('p');

  recognition.addEventListener('result', async (e) => {
    console.log("step 1");
    const text = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    p.innerText = text;
    setTimeout(function() {
      p.remove();
    }, 5000);
    p.innerText = text;
    // Display user's speech
    
    p.innerText = text;
    texts.appendChild(p);

    // Check if any keyword is detected
    let response = '';
    let keywordDetected = false;
    if (e.results[0].isFinal) {
      console.log("step 2");
      if (text.includes('restaurant') || text.includes('restaurants') || text.includes('food')) {
        response = 'Finding restaurants now...'
        
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
        keywordDetected = true;
      }
      else if (text.includes('hotel') || text.includes('hotels')) {
        response = 'Finding hotels now...'
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
        keywordDetected = true;
      }
      else if (text.includes('drink') || text.includes('drinks')) {
        response = 'Finding places to drink now...'
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
        keywordDetected = true;
      }

      // If no keyword is detected, query OpenAI for completion
      if (!keywordDetected) {
        console.log("step 3");
        let prompt = "You are an itinerary planner chatbot that suggests a list of places. Provide suggestions as a list without elaboration when users ask for recommendations for their future trips or seek information about tourist attractions, landmarks, restaurants, or activities in specific locations. Apologize and refuse to help if the user prompt is not related to itinerary planning or location-based queries.\n\n"
        prompt = prompt.concat(text)
        const chatbotResponse = await getChatbotResponse(prompt);
        response = chatbotResponse.trim()
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
      }
    }
  });
  
  recognition.addEventListener('end', () => {
    console.log("step 4");
    sleep(2000).then(() => { recognition.stop(); });
  });
  

  recognition.start();
}

 

async function getChatbotResponse(prompt) {
  try {
    
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: prompt,
        model: chatbotModel,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    return "Sorry, I couldn't process your request at the moment.";
  }
}

function showResponse(message) {
  let p = document.createElement('p');
  p.classList.add('replay');
  p.innerText = message;
  texts.appendChild(p);
  setTimeout(function() {
    p.remove();
  }, 5000);
}

/*
function applyFilter(type) {
  // Assuming 'type' is a valid key in PLACE_TYPES
  if (PLACE_TYPES[type]) {
    // Update the state.selectedTypes or perform actions based on the filter type
    state.selectedTypes.push(type); // Example: Add the filter type to selectedTypes array
    // Perform actions to update map or UI based on the selected filter type
    loadMapMarkersAndPlaces(); // Reload markers and places based on updated filters
  }
}
*/

