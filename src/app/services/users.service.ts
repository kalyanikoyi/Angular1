import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

getUsers(){
 return this.http.get('http://localhost:3000/details')
}
postUsers(body:any){
  return this.http.post('http://localhost:3000/details',body)
}
updateUser(body:any){
  return this.http.put('http://localhost:3000/details',body)
}
deleteUsers(id:any){
  return this.http.delete('http://localhost:3000/details/'+id)
}
}
