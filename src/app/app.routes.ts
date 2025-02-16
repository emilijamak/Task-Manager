import { TaskListComponent } from './components/task-list/task-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        component:TaskListComponent
    }
    

];
