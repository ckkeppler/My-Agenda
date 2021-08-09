import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tasks' },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: EditTaskComponent },
  { path: '**', component: TasksComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
