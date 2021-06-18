import { Component, OnInit } from '@angular/core';
import { servicesWellness, servicesWellnessRe } from 'src/app/model/data';
import { ServicesWellness, ServicesWellnessRe} from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-wellness-notification',
  templateUrl: './wellness-notification.component.html',
  styleUrls: ['./wellness-notification.component.css'],
})
export class WellnessNotificationComponent implements OnInit {
  servicesWellnesslist: ServicesWellness[] = servicesWellness;
  constructor(private iuservices: UiService) {
    this.iuservices.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {}
}
