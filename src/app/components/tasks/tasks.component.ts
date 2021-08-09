import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggle(id: number) {
    this.taskService.toggleCompleted(id);
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.tasks;
  }

  add(form: NgForm) {
    const task = new Task(form.value.task);
    this.taskService.addTask(task);
    form.reset();
  }

  edit(task: Task) {
    this.router.navigate(['/tasks', task.id]);
  }
}
