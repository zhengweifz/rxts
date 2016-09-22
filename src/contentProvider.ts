/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
import { Observable } from 'rxjs/Observable';     
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { Observer } from 'rxjs/Observer';


export class contentProvider {
    private _content: Observable<string>;

    constructor() {}

    getContentByOps(ops: string){
        switch (ops) {
            case 'of':
                this._content = Observable.of("o", "f");
                break;
            case 'from':
                this._content = Observable.from(['f', 'r', 'o', 'm']);
                break;
            case 'create':
                this._content = new Observable(
                   function(observer: Observer<any>){
                       let i = 0;
                       setInterval(() => {
                           observer.next(++i);
                       }, 1000);
                       setTimeout(() => {
                           observer.complete();
                       }, 4000);
                   }
                );
        }
        return this._content;
    }

}





