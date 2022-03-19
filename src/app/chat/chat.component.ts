import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { FetchLatestMessagesGQL, FetchLatestMessagesQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  fetchMessages$?: Observable<FetchResult<FetchLatestMessagesQuery>>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  sendData : any
  message = '';
  constructor(private fetchMessagesQL: FetchLatestMessagesGQL) { }

  ngOnInit(): void {
    console.log(this.conversation.messages)
    debugger
    this.fetchMessages$ = this.fetchMessagesQL.fetch({ channelId: this.conversation.channel.value })
    this.fetchMessages$ && this.fetchMessages$.subscribe((res) => {
      debugger
      this.sendData = res && res.data
      console.log(res.data?.fetchLatestMessages && res.data?.fetchLatestMessages[0])
    })
  }

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    console.log(this.conversation)
    debugger
    return this.conversation.messages.unshift({
      id: this.conversation.messages.length + 1,
      body: value,
      time: '10:21',
      channelId: this.conversation.channel.value,
      userId: this.conversation.user.value,
      userName: this.conversation.user.label
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
