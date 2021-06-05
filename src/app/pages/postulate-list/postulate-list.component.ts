import { Component, OnInit } from '@angular/core';
import { postulates } from 'src/app/model/data';
import { StudentInDanger, Title } from 'src/app/model/ui';

@Component({
  selector: 'app-postulate-list',
  templateUrl: './postulate-list.component.html',
  styleUrls: ['./postulate-list.component.css'],
})
export class PostulateListComponent implements OnInit {
  title: Title = {
    title: 'Lista de postulados',
    subtitle:
      'Estudiantes postulados para ser tenidos en cuenta por su tipo de riesgo',
  };

  myProps = {
    type: 'postulator',
    students: postulates,
  };

  constructor() {}

  ngOnInit(): void {}
}
