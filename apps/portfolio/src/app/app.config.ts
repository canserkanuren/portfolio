import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { SupportedLanguage } from '@canserkanuren/data';
import { provideTransloco } from '@jsverse/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TranslocoHttpLoader } from './core/transloco-loader/transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideTransloco({
      config: {
        availableLangs: [
          SupportedLanguage.EN.toLowerCase(),
          SupportedLanguage.FR.toLowerCase()
        ],
        defaultLang: SupportedLanguage.EN.toLowerCase(),
        fallbackLang: SupportedLanguage.FR.toLowerCase(),
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    }),
    provideHttpClient()
  ]
};
