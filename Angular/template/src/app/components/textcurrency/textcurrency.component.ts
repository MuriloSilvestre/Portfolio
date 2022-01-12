import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textcurrency',
  templateUrl: './textcurrency.component.html',
  styleUrls: ['./textcurrency.component.scss']
})
export class TextcurrencyComponent implements OnInit {

  @Input() value: number = 0.00
  constructor() { }

  ngOnInit(): void {
  }

}
