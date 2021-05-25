import { HttpClient } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit{

  url = 'http://flashcardsdj.azurewebsites.net/api/Flashcard/GetList';

  FlashcardsAngular: any=[];
  
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.FlashcardsAngular = this.http.get(this.url)
      .subscribe(data=>{
        this.FlashcardsAngular=data;
      })
    return this.FlashcardsAngular;
  }

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  remember(){
    this.pick();
  }

  showAnswer(){
    this.answer();
  }

  nextQuestion(){
    this.later();
  }

  x='1';
  counter = parseInt(this.x);


  pick(){
    console.log(this.FlashcardsAngular);
    
    
    
  //schowaj odpowiedź
  var answer = <HTMLInputElement>document.getElementById("answer");
  answer.style.visibility = "hidden";

  // czytaj jaki element jest wyświetlany
  var questionText = <HTMLInputElement>document.getElementById("question");
  var question = questionText.innerText;
  var idText = <HTMLInputElement>document.getElementById("id");
  var id = idText.innerText;
  var answerText = <HTMLInputElement>document.getElementById("answer");
  var category = <HTMLInputElement>document.getElementById("category");


  //nadaj parametr remembered:yes;
  var idNum = parseInt(id);
  this.FlashcardsAngular[idNum-1].Remembered='yes';
  console.log(this.FlashcardsAngular[idNum-1].Remembered);
  console.log(this.FlashcardsAngular);
  //zaktualizuj stronę o nowe słowa

  //losuj element tablicy z remembered:'false'
  var random;

  if (this.counter < this.FlashcardsAngular.length){
  do{
    random = this.getRandomInt(0,this.FlashcardsAngular.length);
  }while( (this.FlashcardsAngular[random].Remembered=="yes"));

  console.log(random + "- wylosowana liczba");

  var Flashcardid = this.FlashcardsAngular[random].Id;
  id = Flashcardid.toString();
  idText.innerText=id;
  questionText.innerText = this.FlashcardsAngular[random].Question;
  answerText.innerText= this.FlashcardsAngular[random].Answer;
  category.innerText = this.FlashcardsAngular[random].Category;

  this.counter++;
  console.log(this.counter + "- licznik");
  }
  else{
    var card = <HTMLInputElement>document.getElementById("card");
    card.style.visibility = "hidden";
    var win = <HTMLInputElement>document.getElementById("win");
    win.style.visibility = "visible";
    var buttons = <HTMLInputElement>document.getElementById("buttons");
    buttons.style.visibility = "hidden";
  }

  }

  later(){
  //schowaj odpowiedź
  var answer = <HTMLInputElement>document.getElementById("answer");
  answer.style.visibility = "hidden";

  // czytaj jaki element jest wyświetlany
  var questionText = <HTMLInputElement>document.getElementById("question");
  var question = questionText.innerText;
  var idText = <HTMLInputElement>document.getElementById("id");
  var id = idText.innerText;
  var answerText = <HTMLInputElement>document.getElementById("answer");
  var category = <HTMLInputElement>document.getElementById("category");

  

  //zaktualizuj stronę o nowe słowa

  //losuj element tablicy z remembered:'false'
  var random;

  do{
  random = this.getRandomInt(0,this.FlashcardsAngular.length);
  }while( (this.FlashcardsAngular[random].Remembered=="yes"));

  console.log(random + "- wylosowana liczba");

  var Flashcardid = this.FlashcardsAngular[random].Id;
  id = Flashcardid.toString();
  idText.innerText=id;
  questionText.innerText = this.FlashcardsAngular[random].Question;
  answerText.innerText= this.FlashcardsAngular[random].Answer;
  category.innerText = this.FlashcardsAngular[random].Category;

  }

  answer(){
  var answer = <HTMLInputElement>document.getElementById("answer");
  console.log(answer);
  answer.style.visibility = "visible";
  }
  
}

//   FlashcardsAngular = [
//     {
//       Id: 32,
//       Category: "Angular",
//       Question: "Cykl zycia komponentu",
//       Answer: "W jakich sytuacjach wpinac sie w które hooks, co umieszczac w ngOnInit, a co w konstruktorze",
//       Remembered: "no"
//     },
//     {
//       Id: 33,
//       Category: "JavaStricpt",
//       Question: "Cykl zycia komponentu",
//       Answer: "W jakich sytuacjach wpinac sie w które hooks, co umieszczac w ngOnInit, a co w konstruktorze",
//       Remembered: "no"
//     }
//  ]

  //Flashcards=[
  //{id:1,category:"animal",en:'Cat',pl:'Kot',remembered:'false'},
  //{id:2,category:"animal", en:'Dog',pl:'Pies',remembered:'false'},
  //{id:3,category:"animal", en:'Bird',pl:'Ptak',remembered:'false'},
  //{id:4,category:"animal", en:'Tiger',pl:'Tygrys',remembered:'false'},
  //{id:5,category:"animal", en:'Bear',pl:'Niedźwiedź',remembered:'false'},
  //{id:6,category:"animal", en:'Crocodile',pl:'Krokodyl',remembered:'false'},
  //{id:7,category:"animal", en:'Giraffe',pl:'Żyrafa',remembered:'false'},
  //{id:8,category:"animal", en:'Lizard',pl:'Jaszczurka',remembered:'false'}]

    //var en = <HTMLInputElement>document.getElementById("en");
  //console.log(en);
  //var element = Flashcards[getRandomInt(0,3)];
  //do
  //if(element.remembered == 'false'){
  //en.innerText=element.en;
  //element.id;
  //element.remembered='true';
  //console.log(element.id,element.remembered);
  //  }  else {
  //   var element = Flashcards[getRandomInt(0,3)];
  // }
  // while(element.remembered == 'false')