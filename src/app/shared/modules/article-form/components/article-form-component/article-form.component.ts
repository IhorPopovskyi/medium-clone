import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleInputInterface } from '../../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface;
  @Input() isSubmitting: boolean;
  @Input() errors: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: [this.initialValues.title, Validators.required],
      description: [this.initialValues.description, Validators.required],
      body: [this.initialValues.body, Validators.required],
      tagList: [this.initialValues.tagList.join(' '), Validators.required],
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
