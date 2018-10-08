import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public users: User[];

    constructor(public navCtrl: NavController, public provider: UserProvider) {
        this.users = new Array<User>();
        this.getUsers();
    }

    protected getUsers() {
        this.provider.getAll().then((result: any) => {
            for (var i = 0; i < result.data.length; i++) {
                var user = result.data[i];
                this.users.push(user)
            }
            console.log(this.users);
        });
    }

}
