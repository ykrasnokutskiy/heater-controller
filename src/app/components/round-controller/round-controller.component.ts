import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-controller',
  standalone: true,
  templateUrl: './round-controller.component.html',
  styles: [`
    :host {
      display: block;
      width: 10vw;
      max-width: 150px;
      min-width: 100px;
    }
  `]
})
export class RoundControllerComponent implements OnInit {

  @Input() minValue: number = 0;
  @Input() maxValue: number = 0;
  @Input() currentValue: number = 0;

  public initialAngle = 30; // Delta between the vertical line and initial scale mark
  public currentAngle = this.initialAngle; // Delta between the vertical and current value line

  ngOnInit() {
    this.validateInputData();
    this.currentAngle = this.calculateDegreeFromValue(this.currentValue);
  }

  /**
   * Calculates the degree based on the given value using the provided range and initial angle.
   *
   * @param {number} value - The value for which the degree needs to be calculated.
   * @return {number} The calculated degree.
   */
  calculateDegreeFromValue(value: number): number {
    return this.calculateDegree(value, this.minValue, this.maxValue, this.initialAngle);
  }

  /**
   * Calculates the degree value based on the given parameters.
   *
   * @param {number} value - The value for which to calculate the degree.
   * @param {number} minValue - The minimum value of the range.
   * @param {number} maxValue - The maximum value of the range.
   * @param {number} initialAngle - The initial angle of the range.
   * @returns {number} - The calculated degree value.
   */
  calculateDegree(value: number, minValue: number, maxValue: number, initialAngle: number): number {
    const valueRange = maxValue - minValue;
    const degreeRange = 360 - 2 * initialAngle;
    return ((value - minValue) / valueRange) * degreeRange + initialAngle;
  }

  /**
   * Validates the input data.
   *
   * @throws {Error} If the input data is invalid.
   */
  validateInputData() {
    if (this.minValue >= this.maxValue || this.currentValue < this.minValue || this.currentValue > this.maxValue) {
      throw new Error('Invalid input data');
    }
  }

}
