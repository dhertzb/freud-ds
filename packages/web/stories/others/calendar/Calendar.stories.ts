import { Story } from '@storybook/angular';
import { FreudCalendarComponent } from '@freud-ds/web-components';

const Template: Story<FreudCalendarComponent> = (args: FreudCalendarComponent) => ({
  props: { ...args },
  template: `
    <freud-calendar
      [selectionMode]="selectionMode"
      [dateFormat]="dateFormat"
      [inline]="inline"
      [showOtherMonths]="showOtherMonths"
      [selectOtherMonths]="selectOtherMonths"
      [showWeek]="showWeek"
      [view]="view"
      [yearNavigator]="yearNavigator"
      [yearRange]="yearRange"
      [defaultDate]="defaultDate"
      [showTime]="showTime"
      [hourFormat]="hourFormat"
      [disabled]="disabled"
      [timeOnly]="timeOnly"
      [monthNavigator]="monthNavigator"
      [disabledDates]="disabledDates"
      [required]="required"
      [maxDate]="maxDate"
      [minDate]="minDate"
      [(ngModel)]="value">
    </freud-calendar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  yearRange: '2000:2030'
}

export const TimeOnly = Template.bind({});
TimeOnly.args = {
  value: new Date(),
  timeOnly: true,
  hourFormat: '12',
  yearRange: '2000:2030'
}

export const MonthView = Template.bind({});
MonthView.args = {
  value: new Date(),
  timeOnly: false,
  showTime: false,
  hourFormat: '12',
  yearNavigator: false,
  view: 'month',
  yearRange: '2000:2030'
}

export const YearNavigator = Template.bind({});
YearNavigator.args = {
  value: new Date(),
  timeOnly: false,
  showTime: false,
  yearNavigator: true,
  yearRange: '2000:2030'
}
export const BGColor = Template.bind({});
BGColor.args = {
  value: new Date(),
}
