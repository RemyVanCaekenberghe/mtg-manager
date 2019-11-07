import { Set } from '../../model/set';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent {
  @Output()
  public selected = new EventEmitter<Set>();

  @Input()
  public sets: Set[];

  public displaySet(set: Set, event: Event): void {
    this.selected.emit(set);

    event.preventDefault();
  }
}
