import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: any;
  exercicio: string;
  serie: string;
  repeticoes: string;
  carga:string,
  description: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '17', exercicio: 'Puxador alto triaângulo', serie: '4', repeticoes: '12 a 15',carga: '30kg', description: 'Descrição teste xxxxxxxxx.......0000.0........................................  s'},
  {position: 'HT', exercicio: 'Serrador', serie: '4', repeticoes: '10 a 12',carga: '20kg', description: 'Descrição teste'},
  {position: 'HT', exercicio: 'Rosca direta no Banco Inclinado', serie: '4', repeticoes: '12 a 15',carga: '10/10', description: 'Descrição teste'},
  {position: '25/26', exercicio: 'Rosca Invertida Cross', serie: '3', repeticoes: '10 a 12',carga: '20kg', description: 'Descrição teste'},
  {position: 5, exercicio: 'Boron', serie:  '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
  {position: 6, exercicio: 'Carbon', serie: '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
  {position: 7, exercicio: 'Nitrogen', serie: '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
  {position: 8, exercicio: 'Oxygen', serie: '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
  {position: 9, exercicio: 'Fluorine', serie: '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
  {position: 10, exercicio: 'Neon', serie: '4', repeticoes: '12 a 15',carga: '20kg', description: 'Descrição teste'},
];

@Component({
  selector: 'app-gym-membership',
  styleUrls: ['./gym-membership.component.scss'],
  templateUrl: './gym-membership.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class GymMembershipComponent implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-exercicio', 'demo-serie', 'demo-repeticoes' , 'demo-carga', 'demo-acao'];
  dataSource = ELEMENT_DATA;
  expandedElement!: PeriodicElement | null;

  constructor() { }

  ngOnInit(): void {
  }

}
