import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento-marbete',
  templateUrl: './documento-marbete.component.html',
  styleUrls: ['./documento-marbete.component.scss']
})
export class DocumentoMarbeteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    printPage() {
    window.print()
  }

}
