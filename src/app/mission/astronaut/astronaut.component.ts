import {Component, Input, OnDestroy} from '@angular/core';

import {MissionControlService} from "../mission-control.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-astronaut',
    template: `
        <p>
            {{astronaut}} : <strong>{{ mission }}</strong>
            <button (click)="confirm()"
                    [disabled]="!announced || confirmed">Confirm
            </button>
        </p>
    `
})
export class AstronautComponent implements OnDestroy {

    @Input() astronaut: string;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;

    constructor(private s: MissionControlService) {
        this.subscription = s.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            }
        );
    }

    confirm() {
        this.confirmed = true;
        this.s.confirmMission(this.astronaut);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
