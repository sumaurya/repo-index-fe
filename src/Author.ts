import { Version } from './Version';
import { Injectable } from '@angular/core';

@Injectable()
export class Project {
    id: number;
    name: string;
    email: string;
    version: Version;

    constructor(id: number, name: string, email: string, version: Version){
        this.id = id;
        this.name = name;
        this.email = email;
        this.version = version;
        }
}