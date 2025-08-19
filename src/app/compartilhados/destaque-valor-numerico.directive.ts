import {afterRender, Directive, ElementRef, input} from '@angular/core';

@Directive({
  selector: '[appdestaquevalornumerico]',
  standalone: true
})
export class DestaqueValorNumericoDirective {
  appdestaquevalornumerico = input.required<number>();

  positivecolor = input('var(--destaque-receita)');
  negativecolor = input('var(--destaque-despesa)');

  constructor(element: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appdestaquevalornumerico() < 0) {
        element.nativeElement.style.color = this.negativecolor();
      } else if (this.appdestaquevalornumerico() > 0) {
        element.nativeElement.style.color = this.positivecolor();
       }
    });
}
}
