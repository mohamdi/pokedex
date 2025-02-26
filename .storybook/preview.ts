import {moduleMetadata, Preview} from '@storybook/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../src/app/app.module";
import {NO_ERRORS_SCHEMA} from "@angular/compiler";

// Global parameters for Storybook UI behavior
const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},  // Automatically match actions for event handlers
        controls: {
            matchers: {
                color: /(background|color)$/i,        // Match color controls
                date: /Date$/,                        // Match date controls
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {name: 'light', value: '#ffffff'},
                {name: 'dark', value: '#333333'},
            ],
        },
    },
    decorators: [
        moduleMetadata({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            imports: [
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient],
                    },
                }),
                // SharedModule
            ],
        }),
    ],
};

export default preview;
