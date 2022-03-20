import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  conversation: any;

  constructor() { }

  ngOnInit(): void {
  }
  onConversationSelected(conversation: object) {
    this.conversation = conversation;
  }
}
