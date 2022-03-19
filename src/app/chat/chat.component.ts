import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { FetchLatestMessagesGQL, FetchLatestMessagesQuery, PostMessageGQL, PostMessageMutation } from 'src/generated/graphql';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  fetchMessages$?: Observable<FetchResult<FetchLatestMessagesQuery>>;
  postMessages$?: Observable<FetchResult<PostMessageMutation>>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  sendData: any
  message = '';
  constructor(private fetchMessagesQL: FetchLatestMessagesGQL,
    private postMessagesQL: PostMessageGQL,) { }

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
    debugger
    let value = event.target.value.trim();
    if (value.length < 1) return false;
    console.log(this.conversation)
    this.postMessages$ = this.postMessagesQL.mutate({ text: value, userId: this.conversation.user.value, channelId: this.conversation.channel.value })
    this.postMessages$ && this.postMessages$.subscribe((res) => {
      debugger
      this.sendData.fetchLatestMessages.push(res && res.data && [res.data.postMessage])
      console.log(res.data?.postMessage)
    })
    return this.sendData.fetchLatestMessages
    // return this.conversation.messages.unshift({
    //   id: this.conversation.messages.length + 1,
    //   body: value,
    //   time: '10:21',
    //   channelId: this.conversation.channel.value,
    //   userId: this.conversation.user.value,
    //   userName: this.conversation.user.label
    // });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
