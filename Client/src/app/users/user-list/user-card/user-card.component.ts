import { Component, input } from '@angular/core';
import { UserDTO } from '../../../_models/userDTO';

//Navigation component handling user authentication
@Component({
  selector: 'user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = input.required<UserDTO>();
}
