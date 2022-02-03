const myName = "Ulrik Rise";
const myAdress = "Adresse, postNr, by";
const myEmail = "mymail@gmail.com";

let namePh = document.getElementById("name-ph");
let adressPh = document.getElementById("adress-ph");
let emailPh = document.getElementById("email-ph");

let educationList = document.getElementById("education-list");

namePh.innerHTML = myName;
adressPh.innerHTML = myAdress;
emailPh.innerHTML = myEmail;

const myEducation = [
  {
    place: "Sandefjord Videregående Skole",
    subject: "Musikklinja",
    time: "2012-2015",
  },
  {
    place: "Akademiet",
    subject: "Naturfag, matte, norsk, samfunnsfag, historie, geografi, muf",
    time: "2017-2018",
  },
  {
    place: "Universitetet i Sør-øst Norge",
    subject: "Økonomi og ledelse",
    time: "2018-2019",
  },
  {
    place: "Gokstad Akademiet",
    subject: "Frontend utvikling",
    time: "2021-",
  },
];
for (var i = 0; i < myEducation.length; i++) {
  educationList.innerHTML += `<li>${myEducation[i].place}</li>`;
  educationList.innerHTML += `<li>${myEducation[i].subject}</li>`;
  educationList.innerHTML += `<li>${myEducation[i].time}</li>`;
}

let workList = document.getElementById("work-list");

const myJobs = [
  {
    place: "Biltema Sandefjord",
    type: "Butikkmedarbieder/kundeservice",
    time: "2014-2016",
  },
  {
    place: "Tenden Advokatfirma",
    type: "Dokumentbehandling mm",
    time: "2014-2020",
  },
  {
    place: "Rema 1000 Østerøyveien",
    type: "Butikkmedarbeider/kundeservice",
    time: "2016-2021",
  },
  {
    place: "Komplett",
    type: "Lagerarbeid, Autostore",
    time: "2019-2019",
  },
  {
    place: "Telefast",
    type: "Lagerarbeid, konfigurering av telefon/pad, varetransport",
    time: "2019-2021",
  },
  {
    place: "Varden Ungdomsskole",
    type: "Musikklærer, vikarlærer",
    time: "2020-2021",
  },
  {
    place: "Varden Ungdomsskole",
    type: "Miljøarbeider",
    time: "2021-",
  },
  {
    place: "Ulrik Rise",
    type: "Musiker",
    time: "2019-",
  },
];

for (var i = 0; i < myJobs.length; i++) {
  workList.innerHTML += `<li>${myJobs[i].place}</li>`;
  workList.innerHTML += `<li>${myJobs[i].type}</li>`;
  workList.innerHTML += `<li>${myJobs[i].time}</li>`;
}

let hobbiesList = document.getElementById("hobbies-list");

const myHobbies = [
  {
    type: "Musikk",
    depth:
      "Jobb og hobby. Periodevise oppdrag henholdsvis sommer og jul. Gitar, piano, vokal og repetitør samt logic arbeid.",
    tech: "Mac & Logic",
  },
  {
    type: "Gaming",
    depth:
      "League of legends, Tft, Valheim, Pokemon, Super smash bros ultimate, Minecraft",
    tech: "Laptopt/Stasjonær pc, Nintendo switch",
  },
  {
    type: "Trening",
    depth: "Volleyball, jogging, fotball, langrenn",
    tech: "Strava",
  },
  {
    type: "Tech",
    depth: "Home-assist",
    tech: "Roborock, Adax wifi, Bluedim, Google home, SmartThings, ",
  },
];

for (var i = 0; i < myHobbies.length; i++) {
  hobbiesList.innerHTML += `<li>${myHobbies[i].type}</li>`;
  hobbiesList.innerHTML += `<li>${myHobbies[i].depth}</li>`;
  hobbiesList.innerHTML += `<li>${myHobbies[i].tech}</li>`;
}

let codeList = document.getElementById("code-list");

const myCoding = [
  {
    code: "HTML & CSS",
    grade: "Hatt 1 semester og bestått eksamen samt arbeidskrav",
    learned: "2021",
  },
  {
    code: "Javascript",
    grade: "Hatt i 2 måneder",
    learned: "2022",
  },
];

for (var i = 0; i < myCoding.length; i++) {
  codeList.innerHTML += `<li>${myCoding[i].code}</li>`;
  codeList.innerHTML += `<li>${myCoding[i].grade}</li>`;
  codeList.innerHTML += `<li>${myCoding[i].learned}</li>`;
}
