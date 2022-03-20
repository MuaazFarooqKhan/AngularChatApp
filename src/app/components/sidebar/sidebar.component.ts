import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharemessageService } from 'src/app/services/sharemessage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  sendData = {
    channel: {
      label: '',
      value: '',
    },
    user: {
      label: '',
      value: '',
    },
  };
  userObjects = [
    { value: 'Joyse', label: 'Joyse' },
    { value: 'Sam', label: 'Sam' },
    { value: 'Russell', label: 'Russell' },
  ];
  channelObjects = [
    { value: '1', label: 'General Channel' },
    { value: '2', label: 'Technology Channel' },
    { value: '3', label: 'LGTM Channel' },
  ];

  constructor(
    private _toast : SharemessageService
  ) {
  }

  ngOnInit(): void { }
  sendChannel(channelValue: any) {
    this.sendData.channel.label = channelValue.label;
    this.sendData.channel.value = channelValue.value;
    if (channelValue.check !== true) {
      this.conversationClicked.emit(this.sendData);
    } else {
      this._toast.showNotificationUpdate("Please select user first")
    }
  }

  onChangeObj(userValue: any) {
    this.sendData.user.label = userValue.label;
    this.sendData.user.value = userValue.value;
  }
}
