import { Project } from './Project';
import { Version } from './Version';
import { Injectable } from '@angular/core';

@Injectable()
export class ResponseObj {
    responseProjectMap : Map<number, Project>;
    projectVersionIdMap : Map<number, number[]>;
    responseVersionMap : Map<number, Version>;
    versionAuthorIdMap : Map<number, number[]>;
    responseAuthorMap : Map<number, Version>;
    
    constructor(responseProjectMap : Map<number, Project>, projectVersionIdMap : Map<number, number[]>, responseVersionMap : Map<number, Version>,
        versionAuthorIdMap : Map<number, number[]>, responseAuthorMap : Map<number, Version>) {
        this.responseProjectMap = responseProjectMap;
        this.projectVersionIdMap = projectVersionIdMap;
        this.responseVersionMap = responseVersionMap;
        this.versionAuthorIdMap = versionAuthorIdMap;
        this.responseAuthorMap = responseAuthorMap;
    }
}