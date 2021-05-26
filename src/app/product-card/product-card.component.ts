import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product: Product;
  @Output() addProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.addProduct.emit();
  }
}
