import { Component, OnInit } from '@angular/core';
import { TccService } from '../services/tcc.service';

@Component({
  selector: 'app-pag-inicial',
  templateUrl: './pag-inicial.component.html',
  styleUrls: ['./pag-inicial.component.css']
})
export class PagInicialComponent implements OnInit {

  cadastros: Array<any> = [];

  constructor(private tccService: TccService) { }

  ngOnInit(){
    return this.listarCadastro()
  }

  listarCadastro()
  {
    this.tccService.listarTodas().subscribe(e => this.cadastros = e)
  }

}
