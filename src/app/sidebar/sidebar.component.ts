import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  searchText: string = '';
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
  selectedDeviceObj = Array;

  constructor() {}

  ngOnInit(): void {}

  onChangeObj(newValue: any) {
    console.log(newValue);
  }
}
