// 1. Declare variables and capture input.

let ans1 = prompt("What is your name"); 

// 2. Combine the input with other words to create a story.

let qst1 = `<p>Your name is ${ans1}. Did I get that right?</p>`


// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = qst1;