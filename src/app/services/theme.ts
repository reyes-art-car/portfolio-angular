import { Injectable } from '@angular/core';

type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly KEY = 'theme';

  init() {
    const saved = localStorage.getItem(this.KEY) as Theme | null;
    const theme: Theme = saved ?? 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggle() {
    const current =
      (document.documentElement.getAttribute('data-theme') as Theme) ?? 'dark';

    const next: Theme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.KEY, next);
  }
}
