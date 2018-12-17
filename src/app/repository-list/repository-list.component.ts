import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/Repository';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {

  repoName: string = "";
  url: string = "";
  repositories: Repository[];

  constructor(private repositoryService: RepositoryService, private http: HttpClient) { }

  ngOnInit() {
    this.repositoryService.findAll();
  }

  add() {
    console.log("4");
    this.repositoryService.add(this.repoName, this.url).subscribe(() => {
      return this.repositoryService.findAll().subscribe((res) => {
        console.log("9");
        console.log(this.repositories);
        this.repositories = res;
        console.log(this.repositories);
        console.log("10");
      });
    }, catchError(this.handleError));
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
   
}
