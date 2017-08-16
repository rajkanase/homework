import { 
      Directive,
      Renderer2,
      HostListener,
      ElementRef     
    
      } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective{

   constructor(private eleRef:ElementRef, private rend : Renderer2) {
      this.rend.setStyle(this.eleRef.nativeElement,'width','300px');
    }

  @HostListener('mouseenter') bigger(){
      this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transition','all .3s ease');
      this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transform','translateZ(0) scale(1.40)');
  }

  @HostListener('mouseleave') smaller(){
      this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transition','all .3s ease');
      this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transform','translateZ(0) scale(1)');
  }
  



 

}
