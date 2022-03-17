import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  message = '';
  constructor() {}

  ngOnInit(): void {
  }

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    console.log(this.conversation)
    debugger
   return this.conversation.messages.unshift({
      id: this.conversation.messages.length+1,
      body: value,
      time: '10:21',
      channelId : this.conversation.channel.value,
      userId : this.conversation.user.value
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
