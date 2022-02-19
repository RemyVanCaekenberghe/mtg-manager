import { Set } from '../../../model/set';
import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {
  @Output()
  public selected = new EventEmitter<Set>();

  @Input()
  public sets: Set[];

  @Input()
  public filteredSets: Set[];

  public setName: string;
  public form: FormGroup;

  public constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      setName: [this.setName]
    });
  }

  public displaySet(set: Set, event: Event): void {
    this.selected.emit(set);

    event.preventDefault();
  }

  public onFiltering(): void {
    this.setName = this.form.value.setName;

    if (this.setName != null && this.setName !== '') {
      this.filteredSets = this.sets.filter((set) => {
        return set.name.toLowerCase().includes(this.setName.toLowerCase());
      });
    } else {
      this.filteredSets = this.sets;
    }
  }
}
