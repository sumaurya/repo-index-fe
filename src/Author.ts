import { Version } from './Version';
import { Injectable } from '@angular/core';

@Injectable()
export class Author {
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