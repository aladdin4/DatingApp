import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
 
  http = inject(HttpClient);
  protected title = 'Dating App';
  users: any;
  products: any; metaKey: boolean = true; selectedProduct: any;
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request Completed')
    })

    //    < td > {{ product.code }
    //}</td>
    //  < td > {{ product.name }}</td>
    //    < td > {{ product.category }}</td>
    //< td > {{ product.quantity }}</td>

 
    this.products = [
      { code: "11", name: "ASD", category: "C", quantity: "11" },
      { code: "22", name: "AQS", category: "B", quantity: "222" },
      { code: "33", name: "ZXC", category: "AAA", quantity: "F3" },
      { code: "44", name: "ERF", category: "DD", quantity: "F4" },
      { code: "55", name: "TGB", category: "EEE", quantity: "F5" },]

  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
