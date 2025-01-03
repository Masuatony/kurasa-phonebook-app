// import { Component } from '@angular/core';
// import { MatCard, MatCardContent } from '@angular/material/card';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { Store } from '@ngrx/store';
// import { map, mergeMap, of, switchMap, toArray } from 'rxjs';
// import {languageSelector} from "../../../../store/language/language.selectors";
//
// @Component({
//   selector: 'app-contact-types-chart',
//   standalone: true,
//   imports: [MatCard, MatCardContent, NgxChartsModule],
//   templateUrl: './contact-types-chart.component.html',
// })
// export class ContactTypesChartComponent {
//   selectedLanguage$ = this.store.select(languageSelector);
//
//   loanTypes: any = [];
//
//   constructor(
//     private store: Store,
//   ) {
//     this.handleTranslations();
//   }
//
//   handleTranslations() {
//    this.loanTypes = this.translateMonths();
//   }
//
//   translateMonths() {
//     return of([
//       {
//         name: 'BUSINESS',
//         value: 4063203,
//         extra: {
//           code: 'de',
//         },
//       },
//       {
//         name: 'PERSONAL',
//         value: 5070000,
//         extra: {
//           code: 'us',
//         },
//       },
//       {
//         name: 'FAMILY',
//         value: 36011745,
//         extra: {
//           code: 'fr',
//         },
//       },
//     ]).pipe(
//       mergeMap((months) =>
//         of(...months)
//       ),
//     );
//   }
// }
