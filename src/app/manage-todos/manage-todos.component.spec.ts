import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ManageTodosComponent } from './manage-todos.component';

describe('ManageTodosComponent', () => {
  let component: ManageTodosComponent;
  let fixture: ComponentFixture<ManageTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTodosComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(ManageTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //add task test
  it('should add a task to the tasks array', () => {
    const initialTaskCount = component.tasks.length;
    const newTaskText = 'New Task';

    component.addTask(newTaskText);

    expect(component.tasks.length).toBe(initialTaskCount + 1);
    expect(component.tasks[component.tasks.length - 1].text).toBe(newTaskText);
  });


  // delete task test
  it('should delete a task from the tasks array', () => {
    const taskToDelete = component.tasks[0];
    const initialTaskCount = component.tasks.length;

    component.deleteTask(taskToDelete);

    expect(component.tasks.length).toBe(initialTaskCount - 1);
    expect(component.tasks).not.toContain(taskToDelete);
  });

  // edit task test
  it('should edit a task in the tasks array', () => {
    const taskToEdit = component.tasks[0];
    const newTaskText = 'Edited Task';

    component.editTask(taskToEdit);
    component.editedTaskText = newTaskText;
    component.saveEditedTask(taskToEdit);


    expect(taskToEdit.text).toBe(newTaskText);
  });




});
