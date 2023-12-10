import { Component } from '@angular/core';
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public elementRef: ElementRef) { }
  junctionMoved(){
    this.elementRef.nativeElement.classList.add();
  }

}
