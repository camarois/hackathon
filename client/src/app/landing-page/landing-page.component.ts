import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit  {
    // tslint:disable-next-line:no-any
    protected data: Array<any>;

    public title: string = 'TITRE';
    public lat: number;
    public lng: number;

    public async ngOnInit(): Promise<void> {
        this.data = await this.dataService.getParkingData();
    }

    public constructor(private router: Router,
                       private dataService: DataService) {
        this.getLocation();
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }

    private getLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
            });
        }
    }
}
