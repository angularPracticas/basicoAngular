import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  title = 'bases';
  numero: number = 0;
  increment: number = 0;

  getValue(value: string) {
    this.increment = parseInt(value);
    console.log('este es tu incremento ' + this.increment);
  }

  suma = () => (this.numero += this.increment);

  resta = () => (this.numero -= 3);
}