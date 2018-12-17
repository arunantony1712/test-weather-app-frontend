import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clickable-tile',
  templateUrl: './clickable-tile.component.html',
  styleUrls: ['./clickable-tile.component.css']
})
export class ClickableTileComponent implements OnInit {

  @Input() city: string;
  @Input() temperature: number;
  @Output() click4Forcast: EventEmitter<any> = new EventEmitter();
  @Input() clicked = false;

  constructor() { }

  ngOnInit() {
  }

  onTileClick() {
    this.click4Forcast.emit(this.city);
  }

}
