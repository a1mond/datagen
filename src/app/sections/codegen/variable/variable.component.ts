import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {IVariable} from "../../../models/variable.model";

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.sass']
})
export class VariableComponent implements AfterViewInit {

  @Input() variable: IVariable
  @ViewChild('varName') varNameInput: ElementRef
  hideOptions: boolean = true;
  selectedType: string = 'random';

  types: string[] = [
    'random',
    'name',
    'uuid',
    'age'
  ]

  constructor(private rd: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.rd.setProperty(this.varNameInput.nativeElement, 'innerHTML', this.variable.colored)
  }

  onDropdownClick() {
    this.hideOptions = !this.hideOptions;
  }

  onSelectChange() {
    this.variable.type = this.selectedType;
  }
}
