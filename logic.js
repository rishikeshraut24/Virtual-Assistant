
//cursor effect

//cursor effect
// Cursor effect
const cursor = document.querySelector('.cursor');

// Move the cursor with the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
   
});

// Add hover effect for cursor scaling on list items
document.querySelectorAll('.container li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(6)';
        item.querySelector('a').style.color = 'sky-blue' // Scale up when hovering
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        item.querySelector('a').style.color = 'white' // Scale back down when not hovering
    });
});

// Reset the cursor when mouse leaves the nav
cursor.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
});

function showAboutSection() {
    cursor.style.display = 'none'; // Hide the custom cursor
    document.getElementById('about-section').style.display = 'block'; // Show the About section
}

//phle jo mic ka btn  hai use assece kar lete hai 

let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

 function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text) //object -> SpeechSynthesisUtterance  iska text -> ( text_speak  )me dalega
    text_speak.pitch =0
    text_speak.rate =1.2
    text_speak.volume=1
    let voices = window.speechSynthesis.getVoices();
    
       
    //ab hum jo bhi bolenge humare system ke throung hi jayega 
    window.speechSynthesis.speak(text_speak)
    //.speak ek function hota hai js me humne usme jo object bnaya use pass karenge  -> (text_speak)

 }

 function wishMe(){

   let day = new Date()
   let hours = day.getHours()

  if(hours >= 0 && hours <12){

   speak("Good Morning Sir")
  }
  else if(hours >=12 && hours <16){
   speak("Good AfterNoon Sir")
  }
  else{
   speak("Good Evening Sir")
  }
 }

 window.addEventListener('load' , ()=>{
   wishMe()
 })

 let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

// Create a new instance of speechRecognition
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let currentIdx = event.resultIndex
  let transcript =event.results[currentIdx][0].transcript
   content.innerText= transcript

   takeCommand(transcript)
}

btn.addEventListener("click", ()=>{

   recognition.start()
   voice.style.display="flex"
   btn.style.display ="none" 

   
})

function takeCommand(message) {
   btn.style.display ="flex" 
    voice.style.display="none"

   message = message.toLowerCase(); // Convert the message to lowercase
   message = message.trim();
   if (message.includes("hi") || message.includes("hello")) {
   
        speak("Hi, how can I assist you?");
        return;
    // Exit after responding to avoid further processing
    
}

    else if (message.includes("who are you?") || message.includes("who are you")) {
       speak("I am Jarvis");
   } else if (message.includes("open youtube")) {
       speak("Opening YouTube");
       window.open("https://www.youtube.com");
   } else if (message.includes("open calculator")) {
       speak("Opening Calculator");
       // Additional code to open calculator if needed
   } 
   
   else if (message.includes("open whatsapp")) {
    speak("Opening WhatsApp");
    window.open("https://web.whatsapp.com");
}


   else if (message.includes("open instagram")) {
       speak("Opening Instagram");
       window.open("https://www.instagram.com");
   } else if (message.includes("open camera")) {
       speak("Opening Camera");
       // Additional code to open camera if needed
   } else if (message.includes("open google")) {
       speak("Opening Google");
       window.open("https://www.google.com");
   } else if (message.includes("open facebook")) {
       speak("Opening Facebook");
       window.open("https://www.facebook.com");
   } else if (message.includes("open twitter")) {
       speak("Opening Twitter");
       window.open("https://www.twitter.com");
   } 
 

   else{
       speak(`This is i found regarding ${message}`);

       window.open(`https://www.bing.com/search?q= ${message}`)
   }
}


// robo anmation

gsap.from("#logox", {
    opacity:0,
    delay:0.4,
    duration:1,
    x:-70
})

