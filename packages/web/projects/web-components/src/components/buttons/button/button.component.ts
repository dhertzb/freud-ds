import { Component, Input, ViewEncapsulation } from '@angular/core';

type buttonSizes = 'sm' | 'md' | 'lg';
type buttonColors = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'freud-button',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-button [disabled]="disabled" [loading]="loading" [icon]="icon" [type]="type">
      <div class="button-content"><ng-content></ng-content></div>
    </p-button>
  `,
  host: {
    class: 'freud-btn',
    '[class.freud-btn-color-primary]': `!['secondary', 'ghost'].includes(color)`,
    '[class.freud-btn-color-secondary]': `color === 'secondary'`,
    '[class.freud-btn-color-ghost]': `color === 'ghost'`,

    '[class.freud-btn-bgcolor]': `bgColor`,
    '[class.freud-btn-loading]': `loading`,

    '[class.freud-btn-size-small]': `size === 'sm'`,
    '[class.freud-btn-size-medium]': `size === 'md'`,
    '[class.freud-btn-size-large]': `size === 'lg'`,
  }
})
export class FreudButtonComponent {

  @Input() size: buttonSizes = 'md';
  @Input() color: buttonColors = 'primary';
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() type!: string;
  @Input() loading = false;
  @Input() icon!: string;

}
