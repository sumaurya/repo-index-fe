import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { VersionListComponent } from './version-list/version-list.component';

const routes: Routes = [
  {path: 'project-list/:repoId', component: PackageListComponent},
  {path: 'version-list/:packageId', component: VersionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
