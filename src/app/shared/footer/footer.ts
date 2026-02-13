import { Component,inject } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { TranslateService } from '../../services/translate.service';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer {
  t= inject(TranslateService);
  year = new Date().getFullYear();
}


