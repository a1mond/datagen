import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CSS_BASIC_COLORS } from "../../../assets/constantas";
import { IVariable } from "../../models/variable.model";
import { IApiCodegenRequest } from "../../models/codegen.model";
import { CodegenService } from "../../services/api/codegen.service";
import { pluck } from "rxjs";

@Component({
  selector: 'app-codegen',
  templateUrl: './codegen.component.html',
  styleUrls: ['./codegen.component.sass']
})
export class CodegenComponent implements OnInit {

  @ViewChild('mainTextArea', { static: false }) mainTextArea: ElementRef;
  @ViewChild('tries', { static: false }) tries: ElementRef;
  @ViewChild('genButton', { static: false }) genButton: ElementRef;
  @ViewChild('defButton', { static: false }) defButton: ElementRef;
  @ViewChild('genTextArea', { static: false }) genTextArea: ElementRef;

  regex = /\${[a-zA-Z0-9]{1,30}}/;
  variables: IVariable[] = [];

  varTypes: string[];
  isLoaded: boolean = false;

  generated: string = '';

  disable: boolean = true;

  constructor(
    private rd: Renderer2,
    private cdRef: ChangeDetectorRef,
    private cgService: CodegenService
  ) { }

  ngOnInit(): void {
    this.cgService.getOptions().subscribe(data => {
      this.varTypes = data;
      this.isLoaded = true;
    });
  }

  isValid() {
    this.disable =
      this.variables.length <= 0 ||
      this.tries.nativeElement.value as number <= 0 ||
      this.tries.nativeElement.value as number >= 101;
  }

  onAreaChange() {
    this.variables = this.defineVarsInString(this.mainTextArea.nativeElement.innerText);
    this.rd.setProperty(this.genTextArea.nativeElement, 'value', '');
    this.isValid();
  }

  defineVarsInString(str: string): IVariable[] {
    const list: IVariable[] = [];
    str.replace(new RegExp(this.regex, "gi"), (match: string) => {
      list.push({
        rawValue: match,
        parsed: this.parseString(match),
        colored: this.colorString(match),
        type: 'name'
      })
      return match;
    });
    return list;
  }

  colorVars() {
    this.variables.forEach(x => x.colored = this.getRandomColor());
  }

  colorString(str: string) {
    return `<span style="color: ${ this.getRandomColor() }">${ str }</span>`
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
    const req: IApiCodegenRequest = {
      str: this.mainTextArea.nativeElement.textContent,
      times: this.tries.nativeElement.value,
      variables: this.variables
    }
    this.cgService.postGenerate(req)
        .pipe(
          pluck('data')
        )
        .subscribe(data => {
          this.generated = data.join('\n');
        });
  }

  onClearClick() {
    this.rd.setProperty(this.mainTextArea.nativeElement, 'innerHTML', '');
  }
}
