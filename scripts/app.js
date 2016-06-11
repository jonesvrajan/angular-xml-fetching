'use strict';

var app = angular.module('angularApp', []);
app.controller('MainCtrl', [function () {
    this.message = "Hello World";
    this.changeMessage = function () {
        this.message = "Clicked and changed";
    };

    this.questions = questions;
    this.quizSubmit = function () {
        $('.quiz-ul > li').each(function () {
            var lis = $(this).find('ul li input').text();
        });
    };
}]);

var questions = [{
    question: "What is the population of Brazil?",
    choices: ["145 million", "199 million", "182 million", "205 million"],
    correctAnswer: 1
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];
//# sourceMappingURL=app.js.map
