import { Component, Input } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-training-app';

  public mode : MatDrawerMode = 'over';
  public hasBackdrop = true;
  @Input() statusMenu :boolean = false;

}
