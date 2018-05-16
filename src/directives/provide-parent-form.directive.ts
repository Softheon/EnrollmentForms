import { Directive, Optional } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';

/**
 * Allows control container to use either the ngForm or the ngModelGroup
 * @param form The parent component's ngForm
 * @param group The parent component's ngModelGroup
 */
export function controlContainerFactory(form: NgForm, group: NgModelGroup) {
  if (group) {
    return group;
  }
  return form;
};

/**
 * Allows the parent form to be passed to the child.
 * Must be referenced before any ngModel in the child component
 * source: https://stackoverflow.com/a/45307924
 * source for optional dependencies https://angular.io/api/core/FactoryProvider#description
 */
@Directive({
  selector: '[provide-parent-form]',
  providers: [
    {
      provide: ControlContainer,
      useFactory: controlContainerFactory,
      deps: [NgForm, [new Optional(), NgModelGroup]]
    }
  ]
})
export class ProvideParentFormDirective {

  constructor() { }

}
