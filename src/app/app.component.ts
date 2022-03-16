import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conversation: any;

  onConversationSelected(conversation: object) {
    this.conversation = conversation;
  }
}
