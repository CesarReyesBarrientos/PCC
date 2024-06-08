import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetClientService } from '../../../services/get-client.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  orderId?: any;
  IdClient?: number;
  invoice?: number;
  clientData?: any;

  constructor(private route: ActivatedRoute, private client: GetClientService) {}
  cliente = { 
    CustomerName: null,
    Invoice: null,
  };

  lote: {
    loteNumber: null,
    Quantity: null,
    Model: null,
    TEK: null,
    Shruds: null,
    Wrap: null,
    Color: null,
    Tail: null,
    Details: null
  }[] = [];

  ngOnInit() {
    const urapi = `http://localhost:3000/user`;

    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('orderId')!;
      // console.log("Folio recibido: ", this.orderId);
    });

    this.infoClient();
  }

  infoClient() {
    const urapi = `http://localhost:3000/user/${this.orderId}`;
    this.client.getClient(urapi).subscribe((res: any) => {
      if (res.success) {
        this.clientData = res.array;
        if (this.clientData.length > 0) {
          this.IdClient = this.clientData[0].CustomerId;
          this.invoice = this.clientData[0].Invoice;
          // Se asigna Invoice al Cliente
          this.cliente.Invoice = this.clientData[0].Invoice;
        }
        this.orderClient(this.IdClient);
        // console.log('Invoice:', this.invoice);
        this.loteClient(this.orderId);
      } else {
        console.log("Error: ", res.err);
      }
    });
  }
  
  orderClient(CustomerId: any) {
    const urapi = `http://localhost:3000/infoClient/${CustomerId}`;
    // console.log("CustomerId: " ,CustomerId);
    this.client.getClient(urapi).subscribe((res: any) => {
      if (res.success) {
        // console.log(res.array[0].CustomerName);
        this.cliente.CustomerName = res.array[0].CustomerName;
      } else {
        console.log("Error: ", res.err);
      }
    });
  }

  loteClient(orderId: any) {
    const urapi = `http://localhost:3000/infoLote/${orderId}`;
    // console.log("OrderID: " ,orderId);
    this.client.getClient(urapi).subscribe((res: any) => {
      if (res.success) {
        //----
        for (const lote of res.array) {
          const nuevoLote = {
            loteNumber: lote.LotNumber,
            Quantity: lote.Quantity,
            Model: lote.Model,
            TEK: lote.TEK,
            Shruds: lote.Shruds,
            Wrap: lote.Wrap,
            Color: lote.Color,
            Tail: lote.Tail,
            Details: lote.Details
          };
          this.lote.push(nuevoLote);
        }
        //----
      } else {
        console.log("Error: ", res.err);
      }
    });
  }
}
