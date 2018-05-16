import { Frequency } from './frequency.enum';

/**
 * Contains data for a specific monetary amount received with a certain frequency
 */
export class Amount {
  /** The amount of money */
  public amount: number;

  /** The tribal income amount */
  public tribalAmount: number;

  /** The frequency of the income */
  public frequency: Frequency;

  /** The number of hours worked per week */
  public hoursPerWeek: number;

  /** The number of days worked per week */
  public daysPerWeek: number;

  /** True if amount is for profit (positive), false if amount is for loss (negative) */
  public profit: boolean;

  /** Calculates and returns the annual amount */
  public get annualAmount(): number {
    if (!this.frequency || !this.amount) {
      return null;
    }

    let multiplier = this.getMultiplier();

    let income = this.amount * multiplier;
    if (this.hoursPerWeek) {
      income *= this.hoursPerWeek;
    }
    if (this.daysPerWeek) {
      income *= this.daysPerWeek;
    }
    if (this.profit == false) {
      income *= -1;
    }

    return income;
  }

  /**
   * Resets the frequency-related values when frequency is changed
   */
  public resetFrequency(): void {
    this.hoursPerWeek = this.daysPerWeek = null;
  }

  /**
   * Gets the multiplier to use when calculating annual amount
   */
  private getMultiplier(): number {
    switch (this.frequency) {
      case Frequency.HOURLY:
      case Frequency.DAILY:
      case Frequency.WEEKLY: {
        return (4.33 * 12);
      }
      case Frequency.BI_WEEKLY: {
        return (2.165 * 12);
      }
      case Frequency.SEMI_MONTHLY: {
        return (2 * 12);
      }
      case Frequency.MONTHLY: {
        return 12;
      }
      case Frequency.QUARTERLY: {
        return 4;
      }
      default: {
        return 1;
      }
    }
  }
}
