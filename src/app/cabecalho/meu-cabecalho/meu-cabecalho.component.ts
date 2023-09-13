import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-meu-cabecalho',
  templateUrl: './meu-cabecalho.component.html',
  styleUrls: ['./meu-cabecalho.component.css']
})

export class MeuCabecalhoComponent  {

  // Nome e cores dinamicos
  nome:string = 'nome';
  color :string = 'purple';




  constructor () {}

}




