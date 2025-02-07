import { Router, RouterLink, RouterOutlet,  } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  router = inject(Router)

  onLogOut() {

    this.router.navigateByUrl('/login')
    localStorage.removeItem('empErpUser')

  }


}
