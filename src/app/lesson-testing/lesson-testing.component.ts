import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';

@Component({
  selector: 'app-lesson-testing',
  templateUrl: './lesson-testing.component.html',
  styleUrls: ['./lesson-testing.component.scss'],
})
export class LessonTestingComponent implements OnInit {
  todos!: any;

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.getTodoFromService();
  }

  getTodoFromService() {
    this.lessonService.getTodos().subscribe(
      (data) => {
        this.todos = data;
        console.log(data);
      },
      (err) => {}
    );
  }
}
