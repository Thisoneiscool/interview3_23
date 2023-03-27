import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.dataService.getUsers().subscribe((value:any) => {
      console.log(value); 
      this.users = value['data']
    });
  }
}
