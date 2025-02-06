import { Component, Input, Output, EventEmitter, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClicked = new EventEmitter<any>();

  OnClick() {
    this.onBtnClicked.emit();
  }

}
