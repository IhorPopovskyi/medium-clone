import { Component, Input } from '@angular/core';
import { PopularTagsType } from '../../../../types/popular-tags-type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: PopularTagsType[];
}
