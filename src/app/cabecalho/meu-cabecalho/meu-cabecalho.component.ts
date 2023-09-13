import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-cabecalho',
  templateUrl: './meu-cabecalho.component.html',
  styleUrls: ['./meu-cabecalho.component.css']
})
export class MeuCabecalhoComponent {


  nome:string = '';
  color :string = 'purple';
  constructor () {

  }
}
