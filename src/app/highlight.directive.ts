import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'red';
  @Input() highlightColor = 'green';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    this.renderer.setStyle( this.elRef.nativeElement, 'background', this.highlightColor );
  }
  @HostListener('mouseleave') mouseleave(evenData: Event) {
    this.renderer.setStyle( this.elRef.nativeElement, 'background', this.defaultColor );
  }
}
