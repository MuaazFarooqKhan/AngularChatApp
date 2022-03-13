import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  searchText: string = '';
  conversations = [
    {
      name: 'David',
      time: '8:30',
      latestMessage: 'Hi there!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'James',
      time: '8:03',
      latestMessage: 'wow',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Andrew',
      time: '8:21',
      latestMessage: 'I am fine',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Richard',
      time: '8:29',
      latestMessage: 'lol',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Dyno',
      time: '9:39',
      latestMessage: 'Alright',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Julie',
      time: '6:02',
      latestMessage: "Let's go",
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Tom',
      time: '10:20',
      latestMessage: 'I see',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Jerry',
      time: '02:40',
      latestMessage: 'OMG',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Grey',
      time: '08:39',
      latestMessage: 'Oh No',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Jill',
      time: '9:08',
      latestMessage: 'Thanks',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Blue',
      time: '11:29',
      latestMessage: 'Take care',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'King',
      time: '02:21',
      latestMessage: 'I am coming now',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Kong',
      time: '8:21',
      latestMessage: 'Good Morning!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: 'Rock',
      time: '8:21',
      latestMessage: 'Good Morning!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
