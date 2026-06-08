import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-purchase-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './purchase-details.html',
  styleUrl: './purchase-details.css'
})
export class PurchaseDetails {}