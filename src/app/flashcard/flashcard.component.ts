import { Flashcard } from './../Flashcard';
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
  public flashcards: any=[];
  
  constructor(private http: HttpClient){
    
  }
  ngOnInit(){
    this.flashcards = this.http.get(this.url)
      .subscribe(data=>{
        this.flashcards=data;
      })
    return this.flashcards;
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

  Flashcards=[
    {id:1, en:'Cat',pl:'Kot',remembered:'false'},
    {id:2, en:'Dog',pl:'Pies',remembered:'false'},
    {id:3, en:'Bird',pl:'Ptak',remembered:'false'},
    {id:4, en:'Tiger',pl:'Tygrys',remembered:'false'},
    {id:5, en:'Bear',pl:'Niedźwiedź',remembered:'false'},
    {id:6, en:'Crocodile',pl:'Krokodyl',remembered:'false'},
    {id:7, en:'Giraffe',pl:'Żyrafa',remembered:'false'},]

  pick(){
    //schowaj odpowiedź
    var answer = <HTMLInputElement>document.getElementById("answer");
    answer.style.visibility = "hidden";

  // czytaj jaki element jest wyświetlany
  var enText = <HTMLInputElement>document.getElementById("en");
  var en = enText.innerText;
  var idText = <HTMLInputElement>document.getElementById("id");
  var id = idText.innerText;
  var answerText = <HTMLInputElement>document.getElementById("answer");

  //nadaj parametr remebered:true;
  var idNum = parseInt(id);
  this.Flashcards[idNum-1].remembered='true';
  console.log(this.Flashcards[idNum-1].remembered);
  console.log(this.Flashcards);
  //zaktualizuj stronę o nowe słowa

  //losuj element tablicy z remembered:'false'
  var random;

  if (this.counter < 7){
  do{
    random = this.getRandomInt(0,7);
  }while( (this.Flashcards[random].remembered=="true"));

  console.log(random + "- wylosowana liczba");

  var Flashcardid = this.Flashcards[random].id;
  var id = Flashcardid.toString();
  idText.innerText=id;
  enText.innerText = this.Flashcards[random].en;
  answerText.innerText= this.Flashcards[random].pl;

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
  }

  later(){
  //schowaj odpowiedź
  var answer = <HTMLInputElement>document.getElementById("answer");
  answer.style.visibility = "hidden";

  // czytaj jaki element jest wyświetlany
  var enText = <HTMLInputElement>document.getElementById("en");
  var en = enText.innerText;
  var idText = <HTMLInputElement>document.getElementById("id");
  var id = idText.innerText;
  var answerText = <HTMLInputElement>document.getElementById("answer");

  //zaktualizuj stronę o nowe słowa

  //losuj element tablicy z remembered:'false'
  var random;

  do{
  random = this.getRandomInt(0,7);
  }while( (this.Flashcards[random].remembered=="true"));

  console.log(random + "- wylosowana liczba");

  var Flashcardid = this.Flashcards[random].id;
  var id = Flashcardid.toString();
  idText.innerText=id;
  enText.innerText = this.Flashcards[random].en;
  answerText.innerText= this.Flashcards[random].pl;
  }

  answer(){
    var answer = <HTMLInputElement>document.getElementById("answer");
    console.log(answer);
    answer.style.visibility = "visible";
  }

}



