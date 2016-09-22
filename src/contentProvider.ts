/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
import { Observable } from 'rxjs/Observable';     
import 'rxjs/add/observable/of';



export class contentProvider {
    content: Observable<string>;

    constructor() {
        this.content = Observable.of("a", "b", "c");
    }

}





