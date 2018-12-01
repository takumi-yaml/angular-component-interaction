import {EventEmitter, Input, Output, Component, OnChanges, SimpleChange} from '@angular/core';

@Component({
    selector: 'app-example-child',
    templateUrl: './example-child.component.html',
    styleUrls: ['./example-child.component.css']
})
export class ExampleChildComponent implements OnChanges {
    private _name = '';

    changeLog: string[] = [];

    @Output() alert = new EventEmitter<string>();

    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name>';
    }

    get name(): string {
        return this._name;
    }

    constructor() {
    }

    ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
        const log: string[] = [];
        console.log(changes);
        for (let propName in changes) {
            const changedProp = changes[propName];
            const to = changedProp.currentValue;

            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                const from = changedProp.previousValue;
                log.push(`${propName} changed from ${from} to ${to}`);
            }

        }
        this.changeLog.push(log.join(', '));
    }

    clickHandler() {
        this.alert.emit(this.name);
    }

    getNewName(name: string) {
        this._name = name;
    }

    superName() {
        console.log(`super!${this._name}`);
    }

}
