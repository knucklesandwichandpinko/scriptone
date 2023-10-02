// Assignment 1 | COMP1073 Client-Side JavaScript

//Eldhose Ben
//200383347



// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');



// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');


// Variables for pre-defined arrays
const nouns1 = ['Monkey', 'Squirrel', 'Dog', 'Mouse'];
const verbs = ['ran', 'eloped', 'woke up', 'scared'];
const adjectives = ['excitingly', 'depressed', 'fabulous', 'confused'];
const nouns2 = ['jungle', 'city', 'village'];
const settings = ['in the garden', 'on a hill', 'under the ocean', 'above the sky'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;




// Event Listeners for button clicks
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);

// Event Listener for Show Story button
document.getElementById('playback').addEventListener('click', playback_on_click);

// Event Listener for Random Story button
document.getElementById('random').addEventListener('click', random_on_click);

function noun1_on_click() {
    choosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
    
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}





function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    document.getElementById('story').textContent = story;
}

function random_on_click() {
    // Generate random indices for each array
    const randomNoun1Index = Math.floor(Math.random() * nouns1.length);
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomNoun2Index = Math.floor(Math.random() * nouns2.length);
    const randomSettingIndex = Math.floor(Math.random() * settings.length);

    // Use the random indices to get random story elements
    choosenNoun1.textContent = nouns1[randomNoun1Index];
    choosenVerb.textContent = verbs[randomVerbIndex];
    choosenAdjective.textContent = adjectives[randomAdjectiveIndex];
    choosenNoun2.textContent = nouns2[randomNoun2Index];
    choosenSetting.textContent = settings[randomSettingIndex];

    // Display the random story elements into a story
    const randomStory = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;

    // Build the random story
    document.getElementById('story').textContent = randomStory;
}
