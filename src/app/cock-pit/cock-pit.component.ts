import { Component, OnInit, Output,EventEmitter } from '@angular/core';


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
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:String}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:String}>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
