import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from "./data.service";


@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit  {
    protected data: Array<any>;

    public lat: number = 45.50884;
    public lng: number = -73.58781;


    public async ngOnInit(): Promise<void> {
        this.data = await this.dataService.getParkingData();
        console.log(this.data);
    }

    public constructor(private router: Router,
                       private dataService: DataService) {

    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }

}
