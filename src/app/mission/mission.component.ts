import {Component} from '@angular/core';
import {MissionControlService} from "./mission-control.service";

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    providers: [MissionControlService]
})
export class MissionComponent {

    astronaut = ['Lovell', 'Swigert', 'Haise'];

    history: string[] = [];

    missoins = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
    nextMission = 0;

    constructor(private s: MissionControlService) {
        s.missionConfirmed$.subscribe(
            astronaut => {
                this.history.push(`${astronaut} confirmed the mission`);
            }
        );
    }

    announce() {
        const mission = this.missoins[this.nextMission++];
        this.s.announceMission(mission);
        this.history.push(`Mission "${mission}" announced`);
        if (this.nextMission >= this.missoins.length) {
            this.nextMission = 0;
        }
    }
}
