import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Country} from "./country.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class CandidateService {

    constructor(private http: Http) {}

	//reach to the backend, in this case Spring Boot application, to retrieve the data
    getCountries(){
        return this.http.get('/api/candidate/countries')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

}