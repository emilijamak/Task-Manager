import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  imageUrl: string = 'https://prod.wp.cdn.aws.wfu.edu/sites/500/2019/10/canvas-red.png'

  pages: string[] = ["Demos", "Pages", "Projects", "Blog", "Documentation"]

}
