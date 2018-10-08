import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
    selector: 'page-intro',
    templateUrl: 'intro.html',
})
export class IntroPage {

    public constructor(public navCtrl: NavController, public appCtrl: App) {

    }

    public goToHome() {
        this.appCtrl.getRootNav().push(TabsPage);
    }

}
