import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

    @Input() offset: number = 0;
    @Input() pagesList: number[] = [];
    @Input() currentPage: number = 0;
    @Output() newButtonEvent = new EventEmitter<number>();

  constructor() { }

  public onButtonClick(newOffset: number) {
    this.newButtonEvent.emit(newOffset);
  }

  public isButtonVisible(pageNumber: number): boolean {
    return pageNumber >= 1 && this.currentPage + 2 >= pageNumber && this.currentPage - 2 <= pageNumber;
  }

}
