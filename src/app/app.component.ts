import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoundControllerComponent } from "./components/round-controller/round-controller.component";

const NUMBER_OF_CONTROLLERS: number = 40; // number of controllers to display
const MIN_TEMPERATURE: number = -10; // minimum temperature for testing
const MAX_TEMPERATURE: number = 50; // maximum temperature for testing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoundControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  controllersCurrentTemperatures: number[];

  constructor() {
    this.controllersCurrentTemperatures = [
      MIN_TEMPERATURE, // MIN temperature for testing
      ...this.generateTemperatureData(NUMBER_OF_CONTROLLERS),
      MAX_TEMPERATURE // MAX temperature for testing
    ];
  }

  /**
   * Generates a random integer within the specified range.
   *
   * @param {number} min - The minimum value of the range (inclusive).
   * @param {number} max - The maximum value of the range (inclusive).
   * @return {number} - A random integer within the specified range.
   */
  getRandomIntegerWithinRange(min: number, max: number): number {
    const rangeMin = Math.ceil(min);
    const rangeMax = Math.floor(max);
    return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
  }

  /**
   * Generates an array of random temperature data.
   *
   * @param {number} size - The number of data points to generate.
   * @return {number[]} - An array containing the generated temperature data.
   */
  generateTemperatureData(size: number): number[] {
    return Array.from({length: size}, () => this.getRandomIntegerWithinRange(MIN_TEMPERATURE, MAX_TEMPERATURE));
  }

  protected readonly MIN_TEMPERATURE = MIN_TEMPERATURE;
  protected readonly MAX_TEMPERATURE = MAX_TEMPERATURE;

}
