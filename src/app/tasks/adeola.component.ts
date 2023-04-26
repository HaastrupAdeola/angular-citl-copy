import { Component, OnInit } from '@angular/core';
import { AdeolaService } from '../services/adeola.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adeola',
  templateUrl: './adeola.component.html',
  styleUrls: ['./adeola.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdeolaComponent implements OnInit {
  postDialog!: boolean;

  posts!: any;

  submitted!: boolean;

  visible!: boolean;

  onSubmit(form: NgForm){
    console.log(form);

  }

  constructor(
    private adeolaService: AdeolaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {
    this.adeolaService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(data);
      },
      (err) => {}
    );
  }

  openNew() {
    this.submitted = false;
    this.postDialog = true;
    this.visible = true;
  }
}
