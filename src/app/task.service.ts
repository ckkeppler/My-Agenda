import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  localStorage = window.localStorage;
  tasks: Task[] = [];
  constructor() {
    this.loadState();
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === 'tasks') this.loadState();
    });
  }

  toggleCompleted(id: number) {
    this.tasks.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    });
  }

  getTasks() {
    console.log(this.tasks);
    return this.tasks;
  }

  getTask(id?: string) {
    return this.tasks.find((t) => t.id === id);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((value, index) => index !== id);
    this.saveState();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveState();
  }

  updateTask(id: string, fieldsToUpdate: Partial<Task>) {
    const task = this.getTask(id);
    console.log(task);
    Object.assign(task, fieldsToUpdate);
    console.log(fieldsToUpdate);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadState() {
    try {
      const tasksInStorage = JSON.parse(localStorage.getItem('tasks'));
      this.tasks.length = 0;
      this.tasks.push(...tasksInStorage);
    } catch (err) {
      console.log('There was an error retrieving the tasks from local storage');
      console.log(err);
    }
  }
}
