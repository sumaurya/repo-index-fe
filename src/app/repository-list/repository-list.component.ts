import { Component, ViewChild, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { Repository } from 'src/Repository';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('test');
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

  refreshRepository(repoId: number) {
    this.repositoryService.refreshRepository(repoId).subscribe((response) => {
      alert(response['status'] + '\n' + response['packageCountNow'] + ' : to be updated.');
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
