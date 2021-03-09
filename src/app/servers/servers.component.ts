import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'Click for event binding example';
  serverName = 'Two-Way Binding Example'
  practiceName = '';
  empty = true;
  serverCreated = false;

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreation = 'EVENT ACTIVATED';
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdatePracticeName(event: Event) {
    this.practiceName = (<HTMLInputElement>event.target).value;
    this.empty = false;
  }

  resetPractice() {
    this.practiceName = ''
    this.empty = true;
  }
}
