export interface ILanguage {
  code: string;
  name: string;
  iso_code: string;
}

export type ActiveLanguages = 'en' | 'es';

export type TranslatedString = {
  [key in ActiveLanguages]?: string;
};
