import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FlashcardsLoadService {
  constructor(private http: HttpClient) { }

  getFlashcards(): Promise<Object>{
    return this.http.get("http://flashcardsdj.azurewebsites.net/api/Flashcard/GetList").toPromise();
  }

  getFlashcard(id: number): Promise<Object> {
    return this.http.get("http://flashcardsdj.azurewebsites.net/api/Flashcard/GetFlashcard" + id).toPromise();
  }
}