import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  taskInput: string;
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const taskId = paramMap.get('id');
      this.task = this.taskService.getTask(taskId);
    });
  }

  save(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);
    this.taskService.updateTask(this.task.id, form.value);
    this.router.navigateByUrl('/tasks');
  }
}
