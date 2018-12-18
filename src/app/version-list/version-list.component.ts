import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { ActivatedRoute, Router } from '@angular/router';
import { Version } from 'src/Version';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

  packageId : number;
  displayVersion : boolean = false;
  versions : Version[];

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.displayVersion = true;
    this.route.params.subscribe(params => {
      this.packageId = Number.parseInt(params['packageId']);
    });
    this.repositoryService.finadAllVersionsOfProject(this.packageId).subscribe((res) => {
      this.versions = res;
    }, catchError(this.handleError));
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
  
  public changeDisplayVersion() {
    this.displayVersion = false;
  }
}
