import { Component, input, output, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
import { Conta } from '../../compartilhados/conta.model';

@Component({
    selector: 'app-botao-adicionar-transacao',
    standalone: true,
    templateUrl: './botao-adicionar-transacao.component.html',
    styleUrl: './botao-adicionar-transacao.component.css',
    imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe]
})
export class BotaoAdicionarTransacaoComponent {
  modalAberto = signal(false);
  contas = input.required<Conta[]>();

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  }

  tipoTransacao = TipoTransacao;

  transacaoCriada = output<Transacao>();

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    // "2025-03-05T00:00"
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta,
    );

    this.transacaoCriada.emit(novaTransacao);
    this.modalAberto.set(false);

  }
}
