import { Injectable } from '@angular/core';
import { Repository } from "./Repository";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './Project';
import { ResponseObj } from './ResponseObj';
import { Version } from './Version';
import { Author } from './Author';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }) }
  

@Injectable({
    providedIn: 'root',
  })
export class RepositoryService {

private displayRepository: boolean = true;

private apiUrl = 'http://localhost:8080/availableRepositories';

private addApiUrl = 'http://localhost:8080/addRepository';

private getProjectsUrl = 'http://localhost:8080/fetchPackageForRepository';

private getVersionsUrl = 'http://localhost:8080/fetchVersionsForPackage';

private getAuthorsUrl = 'http://localhost:8080/fetchAuthorsForVersion';

responseObj : ResponseObj;

projects : Project[];

constructor(private http: HttpClient) {
 }

 private extractRepositories(res: Response) {
  let emptyArray: Repository[] = []; 
  let body = res['repositories'];
  return body || emptyArray;
}

 public findAll(): Observable<Repository[]>{
  return this.http.get(this.apiUrl).pipe(map(this.extractRepositories));
 }

 public add(repoName: string, url: string): Observable<Repository[]> {
  let repository = new Repository(0, repoName, url);
  return this.http.post<Repository[]>(this.addApiUrl, JSON.stringify(repository), httpOptions);
 }

 public getChangedDisplayRepository(): boolean {
  this.displayRepository = this.displayRepository ? false : true;
  return this.displayRepository;
 }

 public getDisplayRepository(): boolean {
   return this.displayRepository;
 }

 public findAllProjects(repoId: number): Observable<Project[]> {
  let headers = new HttpHeaders().append('Content-Type', 'application/json');
  let params = new HttpParams().set('id', repoId.toString());
  return this.http.get(this.getProjectsUrl, {headers : headers, params : params}).pipe(map(this.extractProjects));
 }

 private extractProjects(res: ResponseObj) {
  let emptyArray: Project[] = []; 
  let body = res['projects'];
  return body || emptyArray;
 }

 private extractVersions(res: ResponseObj) {
  let emptyArray: Version[] = []; 
  let body = res['versions'];
  return body || emptyArray;
 }

 private extractAuthors(res: ResponseObj) {
  let emptyArray: Author[] = []; 
  let body = res['authors'];
  return body || emptyArray;
 }

 public finadAllVersionsOfProject(packageId : number) {
  let headers = new HttpHeaders().append('Content-Type', 'application/json');
  let params = new HttpParams().set('id', packageId.toString());
  return this.http.get(this.getVersionsUrl, {headers : headers, params : params}).pipe(map(this.extractVersions));
 }

 public findAuthorsForVersion(versionId : number) {
  let headers = new HttpHeaders().append('Content-Type', 'application/json');
  let params = new HttpParams().set('id', versionId.toString());
  return this.http.get(this.getAuthorsUrl, {headers : headers, params : params}).pipe(map(this.extractAuthors));
 }
}
