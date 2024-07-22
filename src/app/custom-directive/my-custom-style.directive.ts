import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyCustomStyle]'
})

// Types of Directives - Component(directive with a template), Structural, Attribute
export class MyCustomStyleDirective implements OnChanges{

  @Input('myColor')
  myCustomColor;

  @Input()
  myFontFamily;

  constructor(private ref: ElementRef) {
    console.log(ref);
    // ref.nativeElement.innerText = "This is Angular-16"
    this.ref.nativeElement.style.color = this.myCustomColor
    // this.ref.nativeElement.style.border = "#940660"
    this.ref.nativeElement.style.fontFamily = this.myFontFamily
    // this.ref.nativeElement.style.display = "none"
    // this.ref.nativeElement.onmouseover = ()=>alert("Good Evening!")
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.ref.nativeElement.style.color = this.myCustomColor
  }

}
