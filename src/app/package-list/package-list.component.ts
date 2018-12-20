import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/Project';
import { ResponseObj } from 'src/ResponseObj';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  displayProject: boolean = false;  
  repoId: number;
  projects: Project[];
  responseObj: ResponseObj;
  
  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit() {
    console.log('test2');
    this.displayProject = true; 
    this.route.params.subscribe(params => {
      this.repoId = Number.parseInt(params['repoId']);
    });
    this.repositoryService.findAllProjects(this.repoId).subscribe((res) => {
      this.projects = res;
    }, catchError(this.handleError));
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
  
  public changeDisplayProject() {
   this.displayProject = false; 
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
