// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Order } from '../../../interfaces/order';
// import { GetClientService } from '../../../services/get-client.service';

// @Component({
//   selector: 'app-order',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './order.component.html',
//   styleUrl: './order.component.css'
// })
// export class OrderComponent implements OnInit {
//   orders: Order[] = [];
//   name?: string;
//   invoice?: string;
//   qty?: string;
//   model?: string;
//   tek?: string;
//   shruds?: string;
//   wrap?: string;
//   color?: string;
//   tail?: string;
//   details?: string;
//   agregando = false;

//   constructor(private client: GetClientService) {  }

//   ngOnInit(): void {
//     this.buscarInvoice();
//   }

//   buscarInvoice() {
//     const urapi = `http://localhost:3000/lastInvoice`;
//     this.client.getClient(urapi).subscribe((res: any) => {
//       if (res.success) {
//         // console.log("AAAAAAA: ", res.array);
//         let resNumber: number = parseInt(res.array) + 1;
//         // console.log(resNumber);
//         this.invoice = resNumber.toString().padStart(5, '0');
//       } else {
//         console.log("Error: ", res.err);
//       }
//     });
//   }

//   agregar() {
//     if(this.invoice && this.name && this.qty && this.model && this.tek && this.shruds && this.wrap && this.color && this.tail) {
//       if (this.details) {
//         const newOrder: Order = {
//           name: this.name,
//           invoice: this.invoice,
//           qty: this.qty,
//           model: this.model,
//           tek: this.tek,
//           shruds: this.shruds,
//           wrap: this.wrap,
//           color: this.color,
//           tail: this.tail,
//           lote: this.orders.length + 1,
//           details: this.details
//         };
//         this.orders.push(newOrder);
//         this.limpiar();
//       }else {
//         const newOrder: Order = {
//           name: this.name,
//           invoice: this.invoice,
//           qty: this.qty,
//           model: this.model,
//           tek: this.tek,
//           shruds: this.shruds,
//           wrap: this.wrap,
//           color: this.color,
//           lote: this.orders.length + 1,
//           tail: this.tail,
//           details: ""
//         };
//         this.orders.push(newOrder);
//         this.limpiar();
//       }
//       // Realizar alta en la BD
//     } else {
//       console.log('Faltan datos'); //alerta
//     }
//     if(this.orders.length == 0){
//       this.buscarInvoice();
//       this.agregando = false;
//     }else{
//       this.buscarInvoice();
//       this.agregando = true;
//     }
//   }
  
//   enviar() {
//     if (this.orders.length > 0) {
//       this.client
//       .order('http://localhost:3000/orders', this.orders)
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       this.orders = [];
//     } else {
//       console.log('No hay nada que enviar'); //alerta
//     }
//     this.invoice = undefined;
//     this.name = undefined;
//     this.agregando = false;
//   }

//   limpiar() {
//     this.invoice = undefined;
//     this.qty = undefined;
//     this.model = undefined;
//     this.tek = undefined;
//     this.shruds = undefined;
//     this.wrap = undefined;
//     this.color = undefined;
//     this.tail = undefined;
//     this.details = undefined;
//   }

//   mostrar() {
//     if(this.orders.length > 0) console.log(this.orders);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../interfaces/order';
import { GetClientService } from '../../../services/get-client.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  name?: string;
  invoice?: string;
  qty?: string;
  model?: string;
  tek?: string;
  shruds?: string;
  wrap?: string;
  color?: string;
  tail?: string;
  details?: string;
  agregando = false;
  alertMessage: string = ''; // Variable para el mensaje de alerta

  constructor(private client: GetClientService) { }

  ngOnInit(): void {
    this.buscarInvoice();
  }

  buscarInvoice() {
    const urapi = `http://localhost:3000/lastInvoice`;
    this.client.getClient(urapi).subscribe((res: any) => {
      if (res.success) {
        let resNumber: number = parseInt(res.array) + 1;
        this.invoice = resNumber.toString().padStart(5, '0');
      } else {
        this.setAlertMessage(`Error: ${res.err}`);
      }
    });
  }

  agregar() {
    if (this.invoice && this.name && this.qty && this.model && this.tek && this.shruds && this.wrap && this.color && this.tail) {
      const newOrder: Order = {
        name: this.name,
        invoice: this.invoice,
        qty: this.qty,
        model: this.model,
        tek: this.tek,
        shruds: this.shruds,
        wrap: this.wrap,
        color: this.color,
        lote: this.orders.length + 1,
        tail: this.tail,
        details: this.details || ''
      };
      this.orders.push(newOrder);
      this.limpiar();
    } else {
      this.setAlertMessage('Faltan datos');
    }
    if (this.orders.length === 0) {
      this.buscarInvoice();
      this.agregando = false;
    } else {
      this.buscarInvoice();
      this.agregando = true;
    }
  }

  enviar() {
    if (this.orders.length > 0) {
      this.client
        .order('http://localhost:3000/orders', this.orders)
        .then((data) => {
          console.log(data);
          this.setAlertMessage('Orden enviada con éxito');
        })
        .catch((err) => {
          this.setAlertMessage(`Error: ${err}`);
        });
      this.orders = [];
    } else {
      this.setAlertMessage('No hay nada que enviar');
    }
    this.invoice = undefined;
    this.name = undefined;
    this.agregando = false;
  }

  limpiar() {
    this.invoice = undefined;
    this.qty = undefined;
    this.model = undefined;
    this.tek = undefined;
    this.shruds = undefined;
    this.wrap = undefined;
    this.color = undefined;
    this.tail = undefined;
    this.details = undefined;
  }

  mostrar() {
    if (this.orders.length > 0) console.log(this.orders);
  }

  setAlertMessage(message: string) {
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = '';
    }, 5000);
  }
}

