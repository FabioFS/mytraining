import { ContentComponent } from './../content/content.component';
import { AppComponent } from './../../app.component';
import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  @Input()
  public statusMenu = false;


  constructor() { }


  ngOnInit(): void {
  }

  alterStatusMenu(){
    this.statusMenu = !this.statusMenu;
  }

}
