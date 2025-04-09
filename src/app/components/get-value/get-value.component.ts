import { Component, ElementRef, input, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-get-value',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './get-value.component.html',
  styleUrl: './get-value.component.css',
})
export class GetValueComponent {
  myInput2: string = '';
  myInput3: string = '';
  name: string = '';
  form = new FormGroup({
    name: new FormControl(),
  });
  inputEvent: string = '';

  resetAllInputValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      input.value = '';
    });
    const divValues = document.querySelectorAll('.div-value div');
    for (let i = 0; i < divValues.length; i++) {
      divValues[i].innerHTML = '';
    }
  }

  // 1. Template Reference Variable ($ syntax)
  getInputValue(value: string) {
    console.log(value);
    return value;
  }

  // 4. Use Reactive Form Approach
  getReactiveFormValue() {
    this.name = this.form.get('name')?.value;
    console.log('ReactiveForm name : ', this.name);
    return this.name;
  }

  // 5. Event Binding With (input) Event
  onInputChange(event: any) {
    // If onInputChange(event: any) => event.target.value
    this.inputEvent = event.target.value;
    // If onInputChange(event: Event) cast event.target as HTMLInputElement
    // this.inputEvent = (event.target as HTMLInputElement).value;
    console.log('Event Binding : ', this.inputEvent);
    return this.inputEvent;
  }

  // 6. Use @ViewChild Decorator
  @ViewChild('inputViewChild') inputViewChild?: ElementRef;
  getInputViewChild() {
    console.log(
      'Get inputViewChild : ',
      this.inputViewChild?.nativeElement.value
    );
    return this.inputViewChild?.nativeElement.value;
  }
}
