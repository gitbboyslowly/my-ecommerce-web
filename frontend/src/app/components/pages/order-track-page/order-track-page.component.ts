import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrl: './order-track-page.component.css'
})
export class OrderTrackPageComponent {

  order!: Order;
  constructor(
    activateRoute: ActivatedRoute,
    private orderService: OrderService) {
    const params = activateRoute.snapshot.params;
    if (!params.orderId) return;

    this.orderService.trackOrderById(params.orderId).subscribe(order => {
      this.order = order;
    });
  }
}
