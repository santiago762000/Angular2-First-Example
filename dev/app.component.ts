import {Component} from 'angular2/core';
import {FirstExampleComponent} from "./first-example.component";
@Component({
    selector: 'my-app',
    template: '<myTag></myTag>',
    directives:[FirstExampleComponent]
})
export class AppComponent {
}
