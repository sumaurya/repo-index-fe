import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/Author';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors : Author[];
  versionId : number;

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,
    private router: Router) { }

    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }
    
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.versionId = Number.parseInt(params['versionId']);
    });
    this.repositoryService.findAuthorsForVersion(this.versionId).subscribe((res) => {
      this.authors = res;
      console.log(this.versionId);
      console.log(this.authors);
    }, catchError(this.handleError));
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
