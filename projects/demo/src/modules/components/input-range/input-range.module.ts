import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiNumberFormatModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {NumberFormatDocumentationModule} from '../abstract/number-format-documentation/number-format-documentation.module';
import {TuiInputRangeExample1} from './examples/1';
import {TuiInputRangeExample2} from './examples/2';
import {TuiInputRangeExample3} from './examples/3';
import {TuiInputRangeExample4} from './examples/4';
import {TuiInputRangeExample5} from './examples/5';
import {TuiInputRangeExample6} from './examples/6';
import {AbsTransformer} from './examples/6/transformer';
import {ExampleTuiInputRangeComponent} from './input-range.component';

@NgModule({
    imports: [
        TuiInputRangeModule,
        TuiInputSliderModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListModule,
        TuiAddonDocModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiTextfieldControllerModule,
        TuiSvgModule,
        TuiNotificationModule,
        TuiNumberFormatModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputRangeComponent)),
        NumberFormatDocumentationModule,
    ],
    declarations: [
        ExampleTuiInputRangeComponent,
        AbsTransformer,
        TuiInputRangeExample1,
        TuiInputRangeExample2,
        TuiInputRangeExample3,
        TuiInputRangeExample4,
        TuiInputRangeExample5,
        TuiInputRangeExample6,
    ],
    exports: [ExampleTuiInputRangeComponent],
})
export class ExampleTuiInputRangeModule {}
