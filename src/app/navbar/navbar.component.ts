import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `<h1>This is the navbar component</h1>
    <p>Dummy Paragraph</p>`,
  styles: `h1{color: red;}`,
  imports: [],
})
export class AppNavbar {}
