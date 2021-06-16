import { PopularTagsType } from '../../../types/popular-tags-type';

export interface PopularTagsStateInterface {
  data: PopularTagsType[];
  error: string | null;
  isLoading: boolean;
}
