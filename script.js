let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime =
  (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;

let paragraph = document.querySelector("#info");
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`;
// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
const dayInput = document.querySelector("#day-input");
const calculateButton = document.querySelector("#calculate-button");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

calculateButton.addEventListener("click", () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;

  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});
// =========================================

let episodeTitle = "The First Battle";
let episodeDuration = 45;
let hasBeenWatched = false;

document.querySelector("#episode-info").innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? "Already watched" : "Not yet watched"}`;
// =========================================

let episode = {
  title: "Dark Beginning",
  duration: 45,
  hasBeenWatched: false
};

episodeTitle = episode.title;
episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

document.querySelector("#episode-info").innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? "Already watched" : "Not yet watched"}`;
// =====================================

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode("Dark Beginnings", 45, true);
let secondEpisode = new Episode("The Mystery Continues", 45, false);
let thirdEpisode = new Episode("The Unexpected Climax", 60, false);

document.querySelector("#second-episode-info").innerText = `Episode: ${
  secondEpisode.title
}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#third-episode-info").innerText = `Episode: ${
  thirdEpisode.title
}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

// ====================================

let episodes = [firstEpisode, secondEpisode, thirdEpisode];
episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
episodes.pop();

episodes = [
  new Episode("Dark Beginnings", 45, true),
  new Episode("The Mystery Continues", 45, false),
  new Episode("An Unexpected Climax", 60, false)
];
for (let episode of episodes) {
  episode.hasBeenWatched = false;
}

numberOfEpisodes = episodes.length;

const body = document.querySelector("body");

for (let episode of episodes) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("series-frame");
  let newTitle = document.createElement("h2");
  newTitle.innerText = "The Story of Tau";
  let newParagraph = document.createElement("p");
  newParagraph.innerText = `${episodes.title}
${episode.duration} minutes
${episodes.hasBeenWatched ? "Already been watched" : "Not yet watched"}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}

const espaceMessage = document.getElementById("message");
const bouton = document.getElementById("bouton");
const ageInput = document.getElementById("age");
const parentalInput = document.getElementById("parental");
let age;
let isControlParentalActive;
let ageMajorite = 18;
function valider() {
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}
function refuser() {
  alert("Cette espace est interdit aux personnes mineurs");
}
function onConfirm() {
  age = parseInt(ageInput.value);
  if (isNaN(age)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  isControlParentalActive = parentalInput.checked;
  if (age < ageMajorite && isControlParentalActive) {
    refuser();
  } else {
    valider();
  }
  ageInput.value = "";
}
bouton.addEventListener("click", onConfirm);

// ======================

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length;
};
const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector("#tau-score").innerText =
    tauAverage.toFixed(1) + " stars";
  document.querySelector("#colin-score").innerText =
    colinAverage.toFixed(1) + " stars";
  document.querySelector("#clara-score").innerText = `${
    calculateAverageRating([]) === 0
      ? "No ratings"
      : calculateAverageRating([]) + " stars"
  }`;
}
// ======================

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }

  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }

    this.averageRating = sum / this.ratings.length;
  }
}
const tau = new Show("The Story of Tau", 5);
const colin = new Show("The Hero of Old Meldrum", 3);
const clara = new Show("The Bugs of Isla Clara", 6);

const shows = [tau, colin, clara];

const body2 = document.querySelector("body");
const refresh = document.querySelector("#refresh");
const updateShows = () => {
  for (let show of shows) {
    const showPane = document.createElement("div");
    showPane.classList.add("series-frame");
    const showHeading = document.createElement("h2");
    showHeading.innerText = show.title;
    const showDetails = document.createElement("p");
    const seasons = document.createElement("p");
    seasons.innerText = show.numberOfSeasons + " seasons";
    const ratings = document.createElement("p");
    ratings.innerText =
      show.averageRating > 0
        ? show.ratings.length +
          " ratings\n" +
          show.averageRating.toFixed(1) +
          " stars"
        : "No ratings yet";
    showDetails.append(seasons);
    showDetails.append(ratings);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body2.append(showPane);
  }
};
const removeShows = () => {
  const children = [];
  for (let childNode of body2.childNodes) {
    children.push(childNode);
  }
  for (let child of children) {
    if (child.tagName == "DIV") {
      body2.removeChild(child);
    }
  }
};

const addRandomRatings = () => {
  for (let show of shows) {
    if (Math.random() >= 0.2) {
      const numberOfRatings = Math.floor(Math.random() * 4 + 1);
      for (let i = 0; i < numberOfRatings; i++) {
        const rating = Math.floor(Math.random() * 5 + 1);
        show.addRating(rating);
      }
    }
  }
};

refresh.addEventListener("click", () => {
  removeShows();
  addRandomRatings();
  updateShows();
});

updateShows();

const espaceMessage2 = document.getElementById("message2");
const bouton2 = document.getElementById("bouton2");
const numberInput = document.getElementById("number");
let number;

function factorielle(number){
  if(number <= 1) return 1;
  else return (number * factorielle(number-1));
}
function onCalcul(){
  number = parseInt(numberInput.value);
  if(isNaN(number)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  espaceMessage2.innerHTML = "La factorielle de " + number + " est " + factorielle(number);
}
bouton2.addEventListener('click', onCalcul);