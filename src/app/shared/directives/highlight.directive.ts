import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {
  @Input() fontSize: number = 20;

  constructor(private elem: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.applyStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontSize']) {
      this.applyStyles();
    }
  }

  private applyStyles() {
    this.elem.nativeElement.style.fontSize = `${this.fontSize}px`;
  }
}
