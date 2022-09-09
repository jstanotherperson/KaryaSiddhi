import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { MyPriorityHeadingComponent } from './my-priority-heading/my-priority-heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskBarListComponent } from './task-bar-list/task-bar-list.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TaskComponent,
    MyPriorityHeadingComponent,
    TaskBarListComponent,
    SingleTaskComponent,
    MyTasksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
