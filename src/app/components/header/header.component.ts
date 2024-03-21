import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sombrear: boolean = false;

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

}
