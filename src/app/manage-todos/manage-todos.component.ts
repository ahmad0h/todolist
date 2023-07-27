import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-todos',
  templateUrl: './manage-todos.component.html',
  styleUrls: ['./manage-todos.component.css']
})
export class ManageTodosComponent {
  tasks: { text: string; done: boolean; editing: boolean }[] = [];
  newTaskText: string = '';
  editedTaskText: string = '';
  constructor() {

    this.tasks = [
      { text: 'Task 1', done: false, editing: false },
      { text: 'Task 2', done: true, editing: false },
      { text: 'Task 3', done: false, editing: false }
    ];
  }

  onTaskStatusChange(task: { text: string; done: boolean; editing: boolean }): void {
    console.log('Task status changed:', task);
    task.done
  }
  addTask(newTaskText: string): void {
    if (newTaskText.trim() === '') return;
    const newTask = { text: newTaskText, done: false, editing: false };
    this.tasks.push(newTask);
    this.newTaskText = '';
  }

  deleteTask(taskToDelete: { text: string; done: boolean }): void {
    if (confirm(`Are you sure you want to delete "${taskToDelete.text}"?`)) {
      this.tasks = this.tasks.filter(task => task !== taskToDelete);
    } else {
      return;
    }
  }
  editTask(task: { text: string; done: boolean; editing: boolean }): void {
    task.editing = true;
    this.editedTaskText = task.text;
  }

  //  edit task function that takes task as an argument
  //  and sets the editing property of the task to false
  saveEditedTask(task: { text: string; done: boolean; editing: boolean }): void {
    task.text = this.editedTaskText;
    task.editing = false;
  }
   



  cancelEdit(task: { text: string; done: boolean; editing: boolean }): void {
    task.editing = false;
    this.editedTaskText = '';
  }


}
