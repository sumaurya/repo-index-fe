import { Component, ViewChild, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/Repository';
import { catchError } from 'rxjs/operators';

declare var $;

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;

  repoName: string = "";
  url: string = "";
  repositories: Repository[];
  displayRepository:boolean = true;

  constructor(private repositoryService: RepositoryService, private http: HttpClient) { }

  ngOnInit() {
   this.repositoryService.findAll().subscribe((res) => {
      this.repositories = res;
    }, catchError(this.handleError));
  }

  add() {
    this.repositoryService.add(this.repoName, this.url).subscribe(() => {
      return this.repositoryService.findAll().subscribe((res) => {
        this.repositories = res;
      });
    }, catchError(this.handleError));
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
  
  public changeDisplayRepository() {
    this.displayRepository = this.repositoryService.getChangedDisplayRepository();
  }
}
