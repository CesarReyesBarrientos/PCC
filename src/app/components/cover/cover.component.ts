import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css'
})
export class CoverComponent {
  constructor(private router: Router) { }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
