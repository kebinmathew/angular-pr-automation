import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // GOOD code
  protected readonly title = signal('angular-pr-review-demo');

  // ❌ BAD: var usage
  varTest() {
    var x = 10;
    console.log("bad console usage");
  }

  // ❌ BAD: unused variable
  testUnused() {
    let a = 5;
  }

  // ❌ BAD: console again
  anotherBad() {
    console.log("demo");
  }
}