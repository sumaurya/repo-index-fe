import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from 'src/RepositoryService';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  @Input() displayRepository: boolean;  

  constructor(private repositoryService: RepositoryService) { 
  }

  ngOnInit() {
  }

}
