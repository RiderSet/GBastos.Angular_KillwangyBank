import { afterRender, Component, ElementRef, model, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  aberto = model(false);

  constructor() {
    afterRender(() => {
        if (this.aberto()) {
             this.modal.nativeElement.showModal();
        } else {
          this.modal.nativeElement.close();
          }
    });
  }

  fecharModal() {
    this.aberto.set(false);
}
}