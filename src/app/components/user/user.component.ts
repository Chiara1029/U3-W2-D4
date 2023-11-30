import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app/models/user';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users!: User[];

  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {
    this.users = this.userSrv.getUsers();
  }
}
