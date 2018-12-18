import { Repository } from './Repository';
import { Injectable } from '@angular/core';

@Injectable()
export class Project {
    id: number;
    title: string;
    description: string;
    repository: number;

    constructor(id: number, title: string, description: string, repository: number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.repository = repository;
        }
}