import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FirstService {

    constructor() {
        // ...
    }

    helloWorld() {
        console.log('Hello World....FirstService')
    }
}
