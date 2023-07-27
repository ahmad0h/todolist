import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { ManageTodosComponent } from './manage-todos/manage-todos.component'; 

import { FormsModule } from '@angular/forms'; // Import FormsModule 

@NgModule({
  declarations: [AppComponent, ManageTodosComponent],
  imports: [BrowserModule, FormsModule], // Add NgbModule to imports
  bootstrap: [AppComponent],
})
export class AppModule {}
