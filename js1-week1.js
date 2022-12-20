// console.log("Hello World");
// console.log("Hallo, dunia!");
// console.log("Ciao, mondo!");
// console.log("Hola, mundo!");

// VARIABLES
// const greeting = "Good Morning";
// const messageType = typeof greeting;
// console.log(greeting);
// console.log(greeting);
// console.log(messageType);

// STRINGS

// const colors = "blue, yellow";
// const colorType = typeof colors;
// console.log(colorType);

// String concatenation

// Here is an example using the plus operator to concat strings
// const greetingStart = "Good Morning";
// const title = "Brother";
// const myName = "Alexander";
// const greeting = greetingStart + " " + title + " " + myName;
// console.log(greeting);

// Here is example using the String interpolation to concat strings
// const greetingStart = "Good Morning";
// const title = "Brother";
// const myName = "Alexander";
// const greeting = `${greetingStart} ${title} ${myName}`
// console.log(greeting);

//Numbers

const numberOfTrainees = 15;
const numberOfMentors = 8;
const totalNumber = numberOfTrainees + numberOfMentors;

const traineeMassage = `Number of trainees: ${numberOfTrainees}`;
const mentorMassage = `Number of mentors: ${numberOfMentors}`;
const totalMessage = `Total number of trainees and mentors: ${numberOfTrainees}`;

console.log(traineeMassage);
console.log(mentorMassage);
console.log(totalMessage)

const percentOfTrainees = (numberOfTrainees * 100) / totalNumber;
const percentOfMentors = (numberOfMentors * 100) / totalNumber;
const numberOfTraineesRound = Math.round(percentOfTrainees)
const numberOfMentorsRound = Math.round(percentOfMentors);
const numOfTaMsg = `Percentage of trainees: ${numberOfTraineesRound}%`;
const numOfMntMsg = `Percentage of mentors: ${numberOfMentorsRound}%`;
console.log(numOfTaMsg);
console.log(numOfMntMsg);

