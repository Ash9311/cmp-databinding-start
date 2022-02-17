import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
