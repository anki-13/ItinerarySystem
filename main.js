/*const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function startRecognition() {
  recognition = new SpeechRecognition();
  recognition.interimResults = true; // To give real-time results
  
  let p = document.createElement('p');

  recognition.addEventListener('result', (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    p.innerText = text;
    setTimeout(function() {
      p.remove();
    }, 5000);
    
    if(e.results[0].isFinal){
      if (text.includes('restaurant') || text.includes('restaurants') || text.includes('food') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding restaurants now...';
        texts.appendChild(p)
      }
      if (text.includes('hotel') || text.includes('hotels') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding hotels now...';
        texts.appendChild(p)
      }
      if (text.includes('drink') || text.includes('drinks') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding places to drink now...';
        texts.appendChild(p)
      }
      if (text.includes('attraction') || text.includes('attractions') || text.includes('tourist') || text.includes('tourists') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding tourist attractions now...';
        texts.appendChild(p)
      }
      if (text.includes('cafe') || text.includes('cafes') || text.includes('coffee') || text.includes('tea') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding cafes now...';
        texts.appendChild(p)
      }
      if (text.includes('shops') || text.includes('shop') ) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Finding shops now...';
        texts.appendChild(p)
      }

      if (text.includes("ishita")) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Ishita ki maa ki chut';
        texts.appendChild(p)
      }
      if (text.includes("Aryan")) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = "Keep my master's name out of your fucking mouth you whore";
        texts.appendChild(p)
      }
  
      if (text.includes("pooja")) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = "National Highway 45 (NH 45) is a primary national highway in India. This highway runs in the states,sagartola of Madhya Pradesh and Chhattisgarh. The route of NH-45 was extended from Jabalpur to Bilaspur in June 2016.";
        texts.appendChild(p)
      }
      if (text.includes('YouTube')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'opening youtube channel';
        texts.appendChild(p)
        console.log('opening youtube')
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      }
      //p = document.createElement('p');
      
    }
    console.log(text)
  });

  recognition.addEventListener('end', () => {
    
    recognition.start();
  });

recognition.start();
}

function myFunction() {
  // Start the speech recognition when myFunction is triggered
  startRecognition();
} */

/*const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");*/





// const apiKey = "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";


// const texts = document.querySelector('.texts');

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// function startRecognition() {
//   recognition = new SpeechRecognition();
//   recognition.interimResults = false; // To give real-time results
  
//   let p = document.createElement('p');

//   recognition.addEventListener('result', (e) => {
//     texts.appendChild(p);
//     const text = Array.from(e.results)
//       .map(result => result[0])
//       .map(result => result.transcript)
//       .join('');

    // p.innerText = text;
    // setTimeout(function() {
    //   p.remove();
    // }, 5000);
    // p.innerText = text;

//     if (e.results[0].isFinal) {
//       if (text.includes('restaurant') || text.includes('restaurants') || text.includes('food')) {
//         showResponse('Finding restaurants now...');
//       }
//       else if (text.includes('hotel') || text.includes('hotels')) {
//         showResponse('Finding hotels now...');
//       }
//       else if (text.includes('drink') || text.includes('drinks')) {
//         showResponse('Finding places to drink now...');
//       }
//       else if (text.includes('attraction') || text.includes('attractions') || text.includes('tourist') || text.includes('tourists')) {
//         showResponse('Finding tourist attractions now...');
//       }
//       else if (text.includes('cafe') || text.includes('cafes') || text.includes('coffee') || text.includes('tea')) {
//         showResponse('Finding cafes now...');
//       }
//       else if (text.includes('shops') || text.includes('shop')) {
//         showResponse('Finding shops now...');
//       }
//       else if (text.includes("ishita")) {
//         showResponse('Ishita ki maa ki chut');
//       }
//       else if (text.includes("Aryan")) {
//         showResponse("Keep my master's name out of your mouth");
//       }
//       else if (text.includes("Pooja")) {
//         showResponse("National Highway 45 (NH 45) is a primary national highway in India. This highway runs in the states, sagartola of Madhya Pradesh and Chhattisgarh. The route of NH-45 was extended from Jabalpur to Bilaspur in June 2016.");
//       }
//       else if (text.includes('YouTube')) {
//         showResponse('Opening YouTube channel...');
//         console.log('opening youtube');
//         window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
//       }
//       console.log(text)
//     }
//   });

//   recognition.addEventListener('end', () => {
//     recognition.start();
//   });

//   recognition.start();
// }


// function showResponse(message) {
//   let p = document.createElement('p');
//   p.classList.add('replay');
//   p.innerText = message;
//   texts.appendChild(p);
//   setTimeout(function() {
//     p.remove();
//   }, 5000);
// }


const apiKey = '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';

const texts = document.querySelector('.texts');
const chatbotModel = "gpt-3.5-turbo-instruct"; // OpenAI GPT-3 model

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let speech = new SpeechSynthesisUtterance();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startRecognition() {
  let recognition = new SpeechRecognition();
  recognition.interimResults = false; // To not give real-time results
  let p = document.createElement('p');

  recognition.addEventListener('result', async (e) => {
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
      else if (text.includes("Pooja")) {
        response = "National Highway 45 (NH 45) is a primary national highway in India. This highway runs in the states, sagartola of Madhya Pradesh and Chhattisgarh. The route of NH-45 was extended from Jabalpur to Bilaspur in June 2016."
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
        keywordDetected = true;
      }
      // Add more keyword checks here
      
      // If no keyword is detected, query OpenAI for completion
      if (!keywordDetected) {
        const chatbotResponse = await getChatbotResponse(text);
        response = chatbotResponse
        showResponse(response);
        speech.text = response;
        window.speechSynthesis.speak(speech)
      }
    }
  });

  recognition.addEventListener('end', () => {
    sleep(2000).then(() => { recognition.start(); });
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
  }, 15000);
}

function myFunction() {
  // Start the speech recognition when myFunction is triggered
  startRecognition();
}

