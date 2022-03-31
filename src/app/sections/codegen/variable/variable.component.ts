import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { IVariable } from "../../../models/variable.model";

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.sass']
})
export class VariableComponent implements AfterViewInit {

  @Input() variable: IVariable
  @Input() types: string[]
  @ViewChild('varName') varNameInput: ElementRef
  hideOptions: boolean = true;
  selectedType: string = 'name';

  constructor(private rd: Renderer2) { }

  ngOnInit(): void {
    this.variable.type = this.selectedType;
  }

  ngAfterViewInit(): void {
    this.rd.setProperty(this.varNameInput.nativeElement, 'innerHTML', this.variable.colored)
  }

  onDropdownClick() {
    // this.hideOptions = !this.hideOptions;
    // disabled for now
  }

  onSelectChange() {
    this.variable.type = this.selectedType;
  }
}
