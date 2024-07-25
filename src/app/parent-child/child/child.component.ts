import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input()
  parentData: string = '';

  @Output('childDataEvent')
  myEvent = new EventEmitter<String>();

  sendChildData(data: string) {
    this.myEvent.emit(data);
  }
}
