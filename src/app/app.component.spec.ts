import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ManageTodosComponent } from './manage-todos/manage-todos.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ManageTodosComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
