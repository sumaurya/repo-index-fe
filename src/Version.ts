import { Project } from './Project';
import { Injectable } from '@angular/core';

@Injectable()
export class Version {
    id: number;
    version: string;
    liscence: string;
    dependsOn: string;
    url: string;
    project: Project;

    constructor(id: number, version: string, liscence: string, dependsOn: string, url: string, project: Project){
        this.id = id;
        this.version = version;
        this.liscence = liscence;
        this.dependsOn = dependsOn;
        this.url = url;
        this.project = project;
        }
}