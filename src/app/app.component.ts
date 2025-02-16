import { Component } from '@angular/core';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { Task } from './model/interface/task';
import { TaskService } from './services/task.service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, TaskListComponent, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'demoapp';

 

}
