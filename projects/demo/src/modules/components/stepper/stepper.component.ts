import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import type {TuiOrientation} from '@taiga-ui/core';
import type {TuiStepState} from '@taiga-ui/kit';
import {TuiStepperModule} from '@taiga-ui/kit';

import {TuiStepperExample1} from './examples/1';
import {TuiStepperExample2} from './examples/2';
import {TuiStepperExample3} from './examples/3';

@Component({
    standalone: true,
    selector: 'example-tui-stepper',
    imports: [
        TuiStepperExample1,
        TuiStepperExample2,
        TuiStepperExample3,
        TuiStepperModule,
        TuiAddonDocModule,
    ],
    templateUrl: './stepper.template.html',
    changeDetection,
})
export default class ExampleTuiStepperComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected activeItemIndex = 0;

    protected readonly orientationVariants: readonly TuiOrientation[] = [
        'horizontal',
        'vertical',
    ];

    protected orientation: TuiOrientation = this.orientationVariants[0];

    protected readonly iconVariants = ['', 'tuiIconClockLarge', 'tuiIconHeart'];

    protected icon = this.iconVariants[0];

    protected readonly stateVariants: TuiStepState[] = ['normal', 'pass', 'error'];

    protected state: TuiStepState = this.stateVariants[0];
}
