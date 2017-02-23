/*
Create Folder
touch app.js
npm init
mkdir public/images
mkdir views
npm install --save express
npm install --save ejs
npm install --save express-ejs-layouts
mkdir views/layouts
touch views/layouts/main-layouts.ejs


Open App.js

const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express(); //creates 'instance' of Express
app.set('views', __dirname + '/views'); //point Express to EJS/HTML files in the Views folder
app.set('view engine', 'ejs'); //Express will use EJS package for files in Views
app.use(express.static('public')); //makes the Public folder public http://localhost:3000/images/1.png
app.use(expressLayouts); // for layout templates
app.set('layout', 'layouts/main-layout');

*/
/*
Additional Bonus question
Add a celebrity profile page
  celebrity name
  photo of them
  brief description
  dynamic - age
  dynamic -

*/
const cows = require('cows');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layout/main-layout');


app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/page1', (req, res, next) => {
  res.render('page1');
});
app.get('/page2', (req, res, next) => {
  const monkey = cows();
  const randomNumber = Math.floor(Math.random() * 423);
  const dog = monkey[randomNumber];
  console.log(monkey.length);
  res.render('page2', {
    dog: dog
  });
});
app.get('/celebrity', (req, res, next) => {
  //Chuck Norris
  Date.prototype.getJulian = function () {
    return Math.floor((this / 86400000) - (this.getTimezoneOffset()/1440) + 2440587.5);
  };



  const rightNow = new Date();
  const rightNowYear = rightNow.getFullYear();
  const rightNowMonth = rightNow.getMonth();
  const birthday = new Date(1940, 2, 10);
  const birthdayMonth = birthday.getMonth();
  const birthdayYear = birthday.getFullYear();
  const currentBirthday = new Date(rightNow.getFullYear(), 2, 10);
  const daysToBirthday = currentBirthday.getJulian() - rightNow.getJulian();
  console.log(daysToBirthday, currentBirthday.getJulian(), rightNow.getJulian());

  const age = rightNowYear - birthdayYear;
  const monthsLeft = birthdayMonth - rightNowMonth;
  const randomPhoto = Math.floor(Math.random() * 10);
  res.render('celebrity', {
    age: age,
    monthsLeft: monthsLeft,
    randomPhoto: randomPhoto,
    daysToBirthday: daysToBirthday
  });
});

app.listen(3000, () => {
  console.log("W4D3E3 site is working.");
});
