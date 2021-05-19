import { Component, OnInit } from '@angular/core';
import { Competence } from '../Competence';
import { CompetenciesLoadService } from '../competenciesload.service'

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent{

searchText: string = "yes";

flashcards =[{
  id:1,
  title: "Obiektowość",
  description: "Jak wygląda intrukcja IF?",
  answer:"if (warunek){polecenia1}[else {polecenia2}]",
  remembered:"no"
},{
  id:2,
  title: "Obiektowość",
  description: "Jak wygląda konstruktor?",
  answer:"constructor([arguments]) { ... }",
  remembered:"yes"
}]

  // searchText: string = "";
  // competencies: Competence[] = [];
  
  // constructor(private cls: CompetenciesLoadService) {

  // }

  // ngOnInit() {
  //   let self = this; 
  //   self.cls.getCompetencies().then(function (result) {
  //     //alert(JSON.stringify(result));
  //     self.competencies = result as Competence[];
  //   });
  //   this.competencies = [
  //    { Id: 1, Name: "Bootstrap", Level: 4, Picture: "bootstrap.svg", Description: "Wersja 3" },
  //    { Id: 2, Name: "AngularJS", Level: 3, Picture: "angularjs.png", Description: "" },
  //    { Id: 3, Name: "Angular", Level: 4, Picture: "angular.png", Description: "" },
  //    { Id: 4, Name: "Ionic", Level: 4, Picture: "ionic.png", Description: "Wersja 2" },
  //    { Id: 5, Name: "PhoneGap", Level: 1, Picture: "phonegap.png", Description: "Tylko absolutne podstawy" },
  //    { Id: 6, Name: "ReactJS", Level: 0, Picture: "react.png", Description: "Tylko absolutne podstawy" },
  //    { Id: 7, Name: "Xamarin", Level: 2, Picture: "xamarin.png", Description: "Bez API dla IOS" },
  //    { Id: 8, Name: "HTML5", Level: 5, Picture: "html5.png", Description: "Bez WebSockets i Database API" },
  //    { Id: 9, Name: "CSS3", Level: 4, Picture: "css3.png", Description: "" },
  //    { Id: 10, Name: "WebAPI", Level: 5, Picture: "webapi.png", Description: "" }
  //   ];
  // }

  // searchTextChange(text: string) {
  //   alert(text);
  // }

}
