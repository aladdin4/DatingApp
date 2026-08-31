import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Navigation component handling user authentication
@Component({
  selector: 'user-detail',
  standalone: false,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    console.log('route is', this.route);
  }
}
