import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-radio-button',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
        <p-password
          [id]="id"
          [class.ng-invalid]="invalid"
          [class.ng-dirty]="invalid"
          [(ngModel)]="value"
          [placeholder]="placeholder || ''"
          [disabled]="disabled"
          [required]="required"
          [toggleMask]="toggleMask"
          [feedback]="feedback"

          [promptLabel]="promptLabel"
          [mediumRegex]="mediumRegex"
          [strongRegex]="strongRegex"
          [weakLabel]="weakLabel"
          [mediumLabel]="mediumLabel"
          [strongLabel]="strongLabel"

          (ngModelChange)="modelValueChange()"
          (focus)="onFocus.emit($event)"
          (blur)="onBlur.emit($event)"
          (input)="onInput.emit($event)"
          (keydown)="onKeydown.emit($event)">
        </p-password>
    </div>
  `,
  host: {
    class: 'freud-radio-button',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputPasswordComponent),
      multi: true
    }
  ]
})
export class FreudInputPasswordComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() promptLabel!: string;
  @Input() mediumRegex: string = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';
  @Input() strongRegex: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
  @Input() weakLabel!: string;
  @Input() mediumLabel!: string;
  @Input() strongLabel!: string;
  @Input() invalid: boolean = false;
  @Input() toggleMask: boolean = false;
  @Input() feedback: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onKeydown: EventEmitter<any> = new EventEmitter();

  private _value!: string;

  modelValueChange() {
    this.valueChange.emit(this.value);
  }

  onModelChange: any = (_: string) => { };

  onModelTouched: any = () => { };

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onModelChange(this._value);
    this.onModelTouched();
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onSomeEventOccured(newValue: string){
    this.value = newValue;
  }
}
