import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-pr-review-demo');
  badMethod() {
  console.log("debug");  // should trigger no-console
  var x = 10;            // should trigger no-var
}
}
var x = 10;
console.log("bad");