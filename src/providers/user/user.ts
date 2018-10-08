import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

    public API_URL: string;

    constructor(public http: Http) {
        this.API_URL = 'https://reqres.in/api/users';
    }

    public getAll() {
        return new Promise((resolve, reject) => {
            let url = this.API_URL;
            this.http.get(url)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                    (error) => {
                        reject(error.json());
                    });
        });
    }

}
