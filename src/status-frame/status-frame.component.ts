import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Displays a frame around the given HTML content
 */
@Component({
  selector: 'status-frame',
  templateUrl: './status-frame.component.html',
  styleUrls: ['./status-frame.component.css']
})
export class StatusFrameComponent implements OnInit {

  /**Name to be displayed in the status frame title */
  @Input()
  public name: string = '';

  /**Status of the frame as a string */
  @Input()
  public status: string;

  /**Status of the frame as a boolean */
  @Input()
  public valid: boolean;

  /**Shows the header */
  @Input()
  public showHeader: boolean = true;

  /** Set true to show the status icon based on form validity */
  @Input()
  public showStatus: boolean = true;

  /** True if the component can be minimized. False by default */
  @Input()
  public minimizable: boolean;

  /** Emits the minimized boolean */
  @Output()
  public isMinimized: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** True if the component is minimized */
  public minimized: boolean;

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Init function
   */
  ngOnInit() {
  }

  /**
   * determines the class to use. Prioritizes string inputs over bool inputs
   */
  public pickClass(): string {
    if (this.status){
      return this.status;
    }
    else{
      return this.valid ? "complete" : "progress";
    }
  }

  /**
   * Toggles the minimized state of the status frame
   */
  public toggleMinimized(): void {
    this.minimized = !this.minimized;
    this.isMinimized.emit(this.minimized);
  }
}
