/**
 * Created by acer on 10/1/2016.
 */
import {Component} from 'angular2/core';
import {Crime} from "./crime";

@Component({
    selector : 'crime-app',
    templateUrl : 'app/ts/crime.component.html',
    inputs : ['crimes']
})

export class crimeComponent{

    onSelect(cr:Crime){
        console.log(JSON.stringify(cr));
    }
}