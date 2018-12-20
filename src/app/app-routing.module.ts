import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { VersionListComponent } from './version-list/version-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';

const routes: Routes = [
  {path: '', component: RepositoryListComponent},
  {path: 'project-list/:repoId', component: PackageListComponent},
  {path: 'project-list/:packageId', component: PackageListComponent},
  {path: 'version-list/:packageId', component: VersionListComponent},
  {path: 'author-list/:versionId', component: AuthorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
