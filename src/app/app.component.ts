import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, NavBarComponent, MainComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoapp';
}
