import { TranslatedString } from './LanguageTypes'

export interface IMedia {
  id: string;
  created_at: Date;
  mime_type: string;
  url: string;
  duration?: number;
  height: number;
  width: number;
  description: TranslatedString;
  order: number;
  type?: string;
  equipment_id?: string;
  ingredient_id?: string;
  recipe_id?: string;
  recipe_step_id?: string;
  method_id?: string;
  user_id: string;
}
