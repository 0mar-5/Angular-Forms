import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export class TemplateDrivenForm {
  submitForm(formData: NgForm) {
    console.log(formData);
    console.log(formData.status);
    console.log(formData.controls);
    console.log(formData.value);
  }
}
