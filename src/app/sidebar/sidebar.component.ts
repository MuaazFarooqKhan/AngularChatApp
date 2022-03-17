import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  searchText: string = '';
  sendData = {
    channel: {
      label: '',
      value: ''
    },
    user: {
      label: '',
      value: ''
    },
    message : ''
  }
  userObjects = [
    { value: 1, label: 'Joyse' },
    { value: 2, label: 'Sam' },
    { value: 3, label: 'Russell' },
  ];
  channelObjects = [
    { value: 1, label: 'General Channel' },
    { value: 2, label: 'Technology Channel' },
    { value: 3, label: 'LGTM Channel' },
  ];

  constructor() { }

  ngOnInit(): void { }
  sendChannel(channelValue: any) {
    debugger
    this.sendData.channel.label = channelValue.label
    this.sendData.channel.value = channelValue.value
    if (channelValue.check !== true) {
      this.conversationClicked.emit(this.sendData)
    }
    else{
      alert("Please select User")
    }
  }

  onChangeObj(userValue: any) {
    debugger
    this.sendData.user.label = userValue.label
    this.sendData.user.value = userValue.value
    console.log(this.sendData)
  }
}
