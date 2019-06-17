import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Monitor',
      url: '/menu/monitor'
    },
    {
      title: 'Histórico',
      url: '/menu/historico'
    },
    {
      title: 'Sobre',
      url: '/menu/sobre'
    },
    {
      title: 'Cálculo',
      url: '/menu/calculo'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    });
  }

  ngOnInit() {
  }

}
