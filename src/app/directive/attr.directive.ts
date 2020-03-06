import { Directive ,ElementRef,HostListener} from '@angular/core';
@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  constructor(private eref:ElementRef) {
    this.eref.nativeElement.style.color="Red";
    this.eref.nativeElement.style.border="2px solid green";
   }
   @HostListener('mouseover') onMouseOver()
   {
    this.eref.nativeElement.style.color="Green";
    this.eref.nativeElement.style.border="2px solid Red";
   }
   @HostListener('mouseleave') onMouseLeave()
   {
    this.eref.nativeElement.style.color="Red";
    this.eref.nativeElement.style.border="2px solid Green";
   }
}
