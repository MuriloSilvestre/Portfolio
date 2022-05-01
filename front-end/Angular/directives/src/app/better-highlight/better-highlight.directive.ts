import { ElementRef, HostBinding, HostListener, Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { Directive, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "lightblue"
    // );
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, "color", "white");
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, "color", "black");
  }
}
