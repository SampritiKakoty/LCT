import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(elementRef:ElementRef) {
    elementRef.nativeElement.style.background = 'yellow';

   }

}
