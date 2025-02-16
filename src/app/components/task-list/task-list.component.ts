import { Task } from './../../model/class/Task';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']  // Fixed typo here (styleUrls instead of styleUrl)
})
export class TaskListComponent {

  taskList: Task[] = []; 
  isLoaded: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.taskList = data;
      console.log(this.taskList);
      this.isLoaded = true;
    }, (error) => {
      console.error('Error fetching tasks:', error);
    });
  }

  taskObj: Task = new Task(); 

  onSaveTask() {
    this.taskService.saveTask(this.taskObj).subscribe((res: Task) => {
      if(res) {
        console.log(res);
        // Add the newly saved task to the task list
        this.taskList.push(res);  // Add new task to the existing list
      }
    });
  }

}
