import { ActiveLanguages, TranslatedString } from './LanguageTypes'
import { IAddress } from './IAddress'

export interface IUser {
  id: string;
  bio?: TranslatedString;
  address?: IAddress;
  birthdate?: Date;
  commission_rate?: number;
  email: string;
  family_name: string;
  favorite_count?: number;
  given_name: string;
  languages?: ActiveLanguages[] | string[];
  middle_name?: string;
  phone_number?: string;
  picture?: string;
  username: string;
  website?: string;
}
