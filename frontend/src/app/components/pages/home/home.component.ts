import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: Food[] = [];
  constructor(private foodService: FoodService) {
    this.items = this.foodService.getAll();
  }

  ngOnInit(): void {
  }

}
