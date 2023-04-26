import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LessonTestingComponent } from './lesson-testing/lesson-testing.component';
import { DaveComponent } from './tasks/dave.component';
import { TankoComponent } from './tasks/tanko.component';
import { MikeComponent } from './tasks/mike.component';
import { AdeolaComponent } from './tasks/adeola.component';
import { ThompsonComponent } from './tasks/thompson.component';
import { NifemiComponent } from './tasks/nifemi.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonTestingComponent,
    DaveComponent,
    TankoComponent,
    MikeComponent,
    AdeolaComponent,
    ThompsonComponent,
    NifemiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    InputTextareaModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
