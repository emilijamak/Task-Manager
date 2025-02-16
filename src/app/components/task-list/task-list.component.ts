import { Task } from './../../model/class/Task';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel } from '../../model/interface/apiResponseModel';

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
    this.taskService.getTasks().subscribe((res: ApiResponseModel) => {
      this.taskList = res.data;
      console.log(this.taskList);
      this.isLoaded = true;
    }, (error) => {
      console.error('Error fetching tasks:', error);
    });
  }

  taskObj: Task = new Task(); 

  onSaveTask() {
    if (this.taskObj._id) {
      // If task has an _id, it means we are updating an existing task
      this.taskService.editTask(this.taskObj).subscribe(
        (res: ApiResponseModel) => {
          if (res.data) {
            console.log("Task updated:", res.data);
  
            // Find and update the task in the taskList
            const index = this.taskList.findIndex(task => task._id === res.data._id);
            if (index !== -1) {
              this.taskList[index] = res.data;
            }
  
            this.taskObj = new Task(); // Reset the form
          }
        },
        (error) => {
          console.error("Error updating task:", error);
        }
      );
    } else {
      // If no _id, create a new task
      this.taskService.createTask(this.taskObj).subscribe(
        (res: ApiResponseModel) => {
          if (res.data) {
            console.log("Task created:", res.data);
            this.taskList.push(res.data); // Add new task to the list
            this.taskObj = new Task(); // Reset input fields
          }
        },
        (error) => {
          console.error("Error creating task:", error);
        }
      );
    }
  }
  

  onDeleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      (res: ApiResponseModel) => {
        if (res.data) {
          console.log(res.data);
        
          this.taskList = this.taskList.filter(task => task._id !== id)
          console.log('list updated');
          
        } else {
          console.log(res.message);
          
        }
      },
      (error) => {
        console.error("Error deleting a task:", error);
      }
    );
  }


  onEditTask(task: Task) {
    // Set taskObj to the selected task so the form gets filled
    this.taskObj = { ...task }; // Create a copy to avoid two-way binding issues
  }
  
      
  }


