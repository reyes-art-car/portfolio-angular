import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS, Lang, TranslationKey } from '../translations/translations';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private lang = signal<Lang>('es');

  currentLang = this.lang.asReadonly();

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.lang()][key];
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
  }
}
