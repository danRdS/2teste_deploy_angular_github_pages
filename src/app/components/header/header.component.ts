import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sombrear: boolean = false;
  menu_aberto: boolean = false;
  menu_mobile_aberto: boolean = false;
  submenuAberto: number = 0;

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 30) {
        this.sombrear = true;
      } else {
        this.sombrear = false;
      }
    }
  }

  abrirFecharMenu(): void {
    this.menu_aberto = !this.menu_aberto;

    if(this.menu_aberto) {
      this.menu_mobile_aberto = true;
    } else {
      this.submenuAberto = 0;
      setTimeout(() => this.menu_mobile_aberto = false, 500);
    }
  }

  abrirSubmenu(index: number): void {
    if(this.submenuAberto == index) {
      this.submenuAberto = 0;
    } else {
      this.submenuAberto = index;
    }
  }

}