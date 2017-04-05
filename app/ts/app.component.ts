import {Component} from 'angular2/core';
import {crimeComponent} from './crime.component';
import {Crime} from './crime';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives :[crimeComponent]
})

export class AppComponent {
    header = 'Crime Data Analytic Platform';
    crimes : Array<Crime>;

    constructor(){
        this.crimes=[ new Crime(1,12,"ASSAULT","NORTH"), new Crime(2,23,"THEFT","SOUTHERN")]
    }
}
