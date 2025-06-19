import { Component } from '@angular/core';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { ReactiveForm } from './reactive-form/reactive-form';
@Component({
  selector: 'app-root',
  imports: [TemplateDrivenForm, ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Angular-forms';
}
