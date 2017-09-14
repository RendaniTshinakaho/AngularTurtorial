import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataservice:DataService) {
    console.log('constructor ran..');
  }

  ngOnInit() {
    this.name = 'Steve Blah';
    this.email = 'rendani@hotmail.com';
    this.age = 23;
    this.address = {
      street: '2 Gladioli Str',
      city: 'Kempton Park',
      state: 'Johannesburg'
    }
    this.hobbies = ['write code', 'eat pizza', 'play computer games'];
    this.dataservice.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
  onClick() {
    this.name='Rendani Nkhumeleni';
    console.log(name);
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
    console.log(hobby)
  }
  toogleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}