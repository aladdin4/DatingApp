import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserDTO } from '../../_models/userDTO';

//Navigation component handling user authentication
@Component({
  selector: 'user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  usersService = inject(UserService);
  usersList: UserDTO[] = [];

  ngOnInit(): void {
    this.getUsers();
    console.log('hi');
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: response => {
        this.usersList = response;
        console.log(this.usersList);
      },
      error: error => console.log(error)
    })
  }
}
