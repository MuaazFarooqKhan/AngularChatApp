import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { FetchLatestMessagesGQL, FetchLatestMessagesQuery, FetchMoreMessagesGQL, FetchMoreMessagesQuery, PostMessageGQL, PostMessageMutation } from 'src/generated/graphql';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  fetchMessages$?: Observable<FetchResult<FetchLatestMessagesQuery>>;
  fetchMoreMessages$?: Observable<FetchResult<FetchMoreMessagesQuery>>;
  postMessages$?: Observable<FetchResult<PostMessageMutation>>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  sendData: any
  message = '';
  constructor(private fetchMessagesQL: FetchLatestMessagesGQL,
    private postMessagesQL: PostMessageGQL,
    private fetchMoreMessagesQL: FetchMoreMessagesGQL,) { }

  ngOnInit(): void {
    this.fetchMessages$ = this.fetchMessagesQL.fetch({ channelId: this.conversation.channel.value })
    this.fetchMessages$ && this.fetchMessages$.subscribe((res) => {
      this.sendData = res && res.data
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

  fetchMoreMessages(check: boolean) {
    console.log(this.sendData.fetchLatestMessages.length)
    // console.log(this.sendData.fetchLatestMessages[9].messageId)
    console.log(this.sendData.fetchLatestMessages[0].messageId)

    debugger
    if (check === true) {
      this.fetchMoreMessages$ = this.fetchMoreMessagesQL.fetch({ channelId: this.conversation.channel.value, messageId: this.sendData.fetchLatestMessages[0].messageId, old: check })
    }
    else {
      debugger
      let arrayIndex = this.sendData.fetchLatestMessages.length
      arrayIndex -= 1
      console.log(this.sendData.fetchLatestMessages.length)
      this.fetchMoreMessages$ = this.fetchMoreMessagesQL.fetch({ channelId: this.conversation.channel.value, messageId: this.sendData.fetchLatestMessages[arrayIndex].messageId, old: check })
    }
    this.fetchMoreMessages$ && this.fetchMoreMessages$.subscribe((res) => {
      debugger
      this.sendData = res.data
      // console.log(this.sendData.fetchLatestMessages.channelId === this.conversation.channel.value)
      console.log(res.data)
    })
  }
  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
