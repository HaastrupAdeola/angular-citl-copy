import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTestingComponent } from './lesson-testing/lesson-testing.component';
import { DaveComponent } from './tasks/dave.component';
import { NifemiComponent } from './tasks/nifemi.component';
import { ThompsonComponent } from './tasks/thompson.component';
import { AdeolaComponent } from './tasks/adeola.component';
import { TankoComponent } from './tasks/tanko.component';
import { MikeComponent } from './tasks/mike.component';

const routes: Routes = [
  {
    path: '',
    component: LessonTestingComponent,
  },
  {
    path: 'dave',
    component: DaveComponent,
  },
  {
    path: 'nifemi',
    component: NifemiComponent,
  },
  {
    path: 'thompson',
    component: ThompsonComponent,
  },
  {
    path: 'adeola',
    component: AdeolaComponent,
  },
  {
    path: 'tanko',
    component: TankoComponent,
  },
  {
    path: 'mike',
    component: MikeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
