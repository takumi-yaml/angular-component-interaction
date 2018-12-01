import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ExampleChildComponent} from "./example-child/example-child.component";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {

    @ViewChild(ExampleChildComponent)
        private child: ExampleChildComponent;

    _currentVal = 0;
    names = ['a', 'b', 'c', 'd'];
    name = this.names[this._currentVal];

    clickedName = [this.name];

    newName: string = '';

    constructor() {
    }

    ngAfterViewInit() {
        this.child.superName();
    }

    changeName() {
        console.log(this._currentVal);
        this._currentVal = (this._currentVal > 2) ? 0 : ++this._currentVal;
        this.name = this.names[this._currentVal];
    }

    onAlert(name: string) {
        this.clickedName.push(name);
    }

    changeToNewName(name: string) {
        this.name = name;
    }

}
