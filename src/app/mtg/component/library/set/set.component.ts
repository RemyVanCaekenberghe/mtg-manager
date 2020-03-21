import { Component, OnInit } from '@angular/core';
import { Set } from '../../../model/set';
import { SetService } from '../../../service';
import { SymbolService } from '../../../service/symbol/symbol.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  public displayedSet: Set;
  public sets$: Set[];

  constructor(private setService: SetService, private symbolService: SymbolService) { }

  ngOnInit() {
    this.setService.getAll().subscribe(
      sets => {
        this.sets$ = sets;
      }
    );

    this.symbolService.loadSymbols();
  }

  public displaySelectedSet(set: Set): void {
    this.displayedSet = set;
  }
}
