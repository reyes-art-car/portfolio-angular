import { Injectable } from '@angular/core';
import { StorageService } from './storage';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'pref_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private storage: StorageService) {}

  getTheme(): Theme {
    return this.storage.get<Theme>(THEME_KEY) ?? 'light';
  }

  setTheme(theme: Theme): void {
    this.storage.set(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  init(): Theme {
    const theme = this.getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  }

  toggle(current: Theme): Theme {
    const next: Theme = current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
    return next;
  }
}
