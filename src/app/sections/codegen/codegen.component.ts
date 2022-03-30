import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CSS_BASIC_COLORS } from "../../../assets/constantas";
import { IVariable } from "../../models/variable.model";

@Component({
  selector: 'app-codegen',
  templateUrl: './codegen.component.html',
  styleUrls: ['./codegen.component.sass']
})
export class CodegenComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('mainTextArea', { static: false })
  mainTextArea: ElementRef;

  regex = /\$\{[a-zA-Z0-9]{1,30}\}/;
  variables: IVariable[] = [];

  types: string[] = [
    'random',
    'name',
    'uuid',
    'age'
  ];

  disable: boolean = true;

  constructor(
    private rd: Renderer2,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  isValid() {
    this.disable = this.variables.length <= 0;
  }
  ngAfterViewInit() {
    this.rd.setProperty(this.mainTextArea.nativeElement, 'innerText', 'VALUES (${uuid}, ${firstName}, ${lastName})');
    this.onAreaChange();
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  onAreaChange() {
    this.variables = this.defineVarsInString(this.mainTextArea.nativeElement.innerText)
  }
  defineVarsInString(str: string): IVariable[] {
    const list: IVariable[] = [];
    str.replace(new RegExp(this.regex, "gi"), (match: string) => {
      list.push({
        rawValue: match,
        parsed: this.parseString(match),
        colored: this.colorString(match),
        type: 'random',

      })
      return match;
    });
    return list;
  }
  colorVars() {
    this.variables.forEach(x => x.colored = this.getRandomColor());
  }
  colorString(str: string) {
    return `<span style="color: ${this.getRandomColor()}">${str}</span>`
  }
  getRandomColor() {
    return CSS_BASIC_COLORS[Math.floor(Math.random() * CSS_BASIC_COLORS.length)];
  }
  parseString(str: string) {
    return str
      .replace(this.regex, (match) => {
        return match.substr(2, match.length - 3);
      })
  }
  onGenerate() {
    console.log(this.variables)
  }
  onClearClick() {
    this.rd.setProperty(this.mainTextArea.nativeElement, 'innerHTML', '');
  }
}
