import { Injectable } from '@angular/core';
import { Repository } from "./Repository";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }) }
  

@Injectable({
    providedIn: 'root',
  })
export class RepositoryService {
private apiUrl = 'http://localhost:8080/availableRepositories';
private addApiUrl = 'http://localhost:8080/addRepository';

constructor(private http: HttpClient) {
 }

 private extractData(res: Response) {
  console.log("6");
  let emptyArray: Repository[] = []; 
  let body = res['repositories'];
  console.log("7");
  console.log(body);
  return body || emptyArray;
}

 public findAll(): Observable<Repository[]>{
  return this.http.get(this.apiUrl).pipe(map(this.extractData));
 }

 public add(repoName: string, url: string): Observable<Repository[]> {
  console.log("1");
  let repository = new Repository(0, repoName, url);
  console.log("2");
  return this.http.post<Repository[]>(this.addApiUrl, JSON.stringify(repository), httpOptions);
 }
}
