// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
import { Observable } from 'rxjs/Observable';     
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

import { contentProvider } from './contentProvider';


export class contentConsumer {
    
    constructor (private myProvider: contentProvider ) {

    }

    logData () {
        this.myProvider.content.subscribe(content => console.log(content));
    }

}