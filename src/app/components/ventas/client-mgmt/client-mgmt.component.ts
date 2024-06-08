import { Component, OnInit } from '@angular/core';
import { GetClientService } from '../../../services/get-client.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-mgmt',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './client-mgmt.component.html',
  styleUrl: './client-mgmt.component.css'
})
export class ClientMgmtComponent implements OnInit{
  // Implementar interfaz de cliente 
  clientes: { nombre: string, folio: number, idOrder: number }[] = [];

  constructor (public cliente: GetClientService) {  }

  ngOnInit() {
    const urapi = `http://localhost:3000/user`;

    this.cliente.getJSON(urapi).subscribe((res: any) => {
      if (res.success) {
        this.clientes = res.array.map((cliente: any) => ({
          nombre: cliente.CustomerName,
          folio: cliente.Invoice,
          idOrder: cliente.OrderId
        }));
        // console.log(this.clientes);
      } else {
        console.log("Error: ", res.err);
      }
    });
  }

  // Codigo nuevo
  
  // Fin de codigo nuevo
}
