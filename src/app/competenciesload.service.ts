import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CompetenciesLoadService {
  constructor(private http: HttpClient) { }

  getCompetencies(): Promise<Object>{
    return this.http.get("http://localhost:4073/api/Competences").toPromise();
  }

  getCompetence(id: number): Promise<Object> {
    return this.http.get("http://localhost:4073/api/Competences/" + id).toPromise();
  }
}