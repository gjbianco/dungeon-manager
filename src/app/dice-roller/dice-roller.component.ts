import { Component, OnInit } from '@angular/core';
import { map, padEnd, random, reverse, range, slice, sum } from 'lodash';

interface DiceResult {
  diceAmount: number;
  sides: number;
  modifier: number;

  rolls: number[];
  total: number;
}

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
  results: DiceResult[];
  diceAmount = 1;
  sides = 20;
  modifier = 0;

  constructor() {}

  ngOnInit() {
    this.clearResults();
  }

  rollDice() {
    const { diceAmount, sides, modifier } = this;
    const rolls = map(range(this.diceAmount), () =>
      random(1, this.sides, false)
    );
    const total = sum(rolls) + this.modifier;
    this.results.push({ diceAmount, sides, modifier, rolls, total });
  }

  clearResults() {
    this.results = [];
  }

  buildString(result: DiceResult): string {
    const { diceAmount, sides, total, rolls, modifier } = result;
    const displayModifier = modifier > 0 ? ` + ${modifier}` : '';
    const displayRoll = padEnd(
      `${diceAmount}d${sides}${displayModifier}`,
      6,
      ' '
    );
    const displayCalculation =
      diceAmount > 1 || modifier > 0 ? ` = ${rolls}${displayModifier}` : '';
    return `${displayRoll} ➔ ${total}${displayCalculation}`;
  }

  get rollHistory() {
    return reverse(slice(this.results, -5));
  }
}
