import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  @Output() logOff = new EventEmitter();
  @Input() cpf: string = "";


  fireEvent(){
    this.logOff.emit();
  }

}
