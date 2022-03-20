import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { SharemessageService } from 'src/app/services/sharemessage.service';
import {
  FetchLatestMessagesGQL,
  FetchLatestMessagesQuery,
  FetchMoreMessagesGQL,
  FetchMoreMessagesQuery,
  PostMessageGQL,
  PostMessageMutation,
} from 'src/generated/graphql';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  fetchMessages$?: Observable<FetchResult<FetchLatestMessagesQuery>>;
  fetchMoreMessages$?: Observable<FetchResult<FetchMoreMessagesQuery>>;
  postMessages$?: Observable<FetchResult<PostMessageMutation>>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  loading: boolean = true;
  arrayIndex: number = 0;
  sendData: any = {
    fetchLatestMessages: [],
  };
  sendDefaultData: any = {
    fetchLatestMessages: [],
  };
  message = '';
  constructor(
    private fetchMessagesQL: FetchLatestMessagesGQL,
    private postMessagesQL: PostMessageGQL,
    private fetchMoreMessagesQL: FetchMoreMessagesGQL,
    private _toast: SharemessageService
  ) { }

  ngOnInit(): void {
    this.fetchMessages$ = this.fetchMessagesQL.fetch({
      channelId: this.conversation.channel.value,
    });
    this.fetchMessages$.subscribe(
      (res: any) => {
        this.sendData = JSON.parse(JSON.stringify(res.data));
        this.sendDefaultData = JSON.parse(JSON.stringify(res.data));
        this.loading = false;
        this.arrayIndex = this.sendData.fetchMoreMessages
          ? this.sendData.fetchMoreMessages.length
          : this.sendData.fetchLatestMessages.length;
      },
      (err) => {
        if (err.graphQLErrors[0]?.extensions.code === 400) {
          this._toast.showNotificationUpdate('Channel not found');
        }
      }
    );
  }

  submitMessage(event: any) {
    let value = event.target.value.trim();
    if (value.length < 1) return false;
    this.postMessages$ = this.postMessagesQL.mutate({
      text: value,
      userId: this.conversation.user.value,
      channelId: this.conversation.channel.value,
    });
    this.postMessages$.subscribe(
      (res: any) => {
        this.arrayIndex = this.sendData.fetchMoreMessages
          ? this.sendData.fetchMoreMessages.length
          : this.sendData.fetchLatestMessages.length;
        if (this.sendData.fetchLatestMessages !== undefined) {
          this.sendData.fetchLatestMessages.unshift({
            ...res.data.postMessage,
          });
        } else {
          this.sendData.fetchMoreMessages.unshift({
            ...res.data.postMessage,
          });
        }
        this.message = '';
      },
      (err) => {
        if (err.graphQLErrors[0]?.extensions.code === 400) {
          let showMsg = this._toast.titleCaseWord(
            err.graphQLErrors[0]?.message
          );
          if (showMsg) {
            this._toast.showNotificationUpdate(showMsg);
          }
        }
        if (err.graphQLErrors[0]?.extensions.code === 500) {
          this._toast.showNotificationUpdate(
            "Couldn't save message, please retry."
          );
        }
      }
    );
    return this.sendData;
  }

  fetchMoreMessages(check: boolean) {
    this.loading = true;
    if (check === true) {
      this.fetchMoreMessages$ = this.fetchMoreMessagesQL.fetch({
        channelId: this.conversation.channel.value,
        messageId: this.sendData.fetchMoreMessages
          ? this.sendData.fetchMoreMessages[0].messageId
          : this.sendData.fetchLatestMessages[0].messageId,
        old: check,
      });
    } else {
      this.arrayIndex = this.sendData.fetchMoreMessages
        ? this.sendData.fetchMoreMessages.length
        : this.sendData.fetchLatestMessages.length;
      if (this.arrayIndex > 0) {
        this.arrayIndex -= 1;
      }
      this.fetchMoreMessages$ = this.fetchMoreMessagesQL.fetch({
        channelId: this.conversation.channel.value,
        messageId: this.sendData.fetchMoreMessages
          ? this.sendData.fetchMoreMessages[this.arrayIndex].messageId
          : this.sendData.fetchLatestMessages[this.arrayIndex].messageId,
        old: check,
      });
    }
    this.fetchMoreMessages$ &&
      this.fetchMoreMessages$.subscribe(
        (res) => {
          this.sendData = JSON.parse(JSON.stringify(res.data));
          this.loading = false;
          if (
            (this.sendData.fetchMoreMessages &&
              this.sendData.fetchMoreMessages.length === 0) ||
            (this.sendData.fetchLatestMessages &&
              this.sendData.fetchLatestMessages.length === 0)
          ) {
            this._toast.showNotificationUpdate(
              'No More Message found. Redirecting to previous messages'
            );
            this.sendData = this.sendDefaultData;
          }
        },
        (err) => {
          if (err.graphQLErrors[0]?.extensions.code === 400) {
            let showMsg = this._toast.titleCaseWord(
              err.graphQLErrors[0]?.message
            );
            if (showMsg) {
              this._toast.showNotificationUpdate(showMsg);
            }
          }
          if (err.graphQLErrors[0]?.extensions.code === 500) {
            let showMsg = this._toast.titleCaseWord(
              err.graphQLErrors[0]?.message
            );
            if (showMsg) {
              this._toast.showNotificationUpdate(showMsg);
            }
          }
        }
      );
  }
  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
