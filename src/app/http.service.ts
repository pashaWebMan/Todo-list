import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './users-info/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) {}

  getUsers():Observable<Array<User>>{
    return this.http.get<any>("https://randomuser.me/api/?results=50").pipe(map(x=>x.results.map(z=>new User(z))));
  }
}
