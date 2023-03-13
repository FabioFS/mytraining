import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnChanges {
  @Input() tempoSegundos: number = 3;
  @Input() svgSize: number = 80;
  @Input() circuloFundoStroke: string = '#ccc';
  @Input() circuloFundoStrokeWidth: number = 1;
  @Input() circuloTimerStroke: string = '#ff0000';
  @Input() circuloTimerStrokeWidth: number = 4;

  coordenadas: Array<string> = [];
  circuloFundoCoordenadas: string = '';
  circuloTimerCoordenadas: string = '';

  _dataInicial: number = (new Date()).getTime();
  _segundosPassados: number = 0;
  public countDown: string | undefined;

  constructor() {
    this.renderizarTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.svgSize || changes.tempo) {
      this.renderizarTimer();
    }
  }

  renderizarTimer() {
    const xyCentroTimer = this.svgSize / 2;
    const raio = (this.svgSize / 2)
                 - this.circuloTimerStrokeWidth * 2;

    const { x: x0, y: y0 } = this.calculaCoordenadas(
      0,
      raio,
      xyCentroTimer
    );

    this.coordenadas = [`M ${x0} ${y0}`];

    for (let grau = 1; grau <= 360; grau++) {
      const { x, y } = this.calculaCoordenadas(
        grau,
        raio,
        xyCentroTimer
      );

      this.coordenadas.push(`L ${x} ${y}`);
    }

    this.circuloFundoCoordenadas = this.coordenadas.join(' ');
    this.circuloTimerCoordenadas = '';
  }

  iniciarContagem() {
    console.time();

    this._dataInicial = (new Date()).getTime();
    this._segundosPassados = 0;

    this.processarContagemRegressiva();
  }

  processarContagemRegressiva() {
    // Porcentagem do tempo que passou
    const porcentagem = this._segundosPassados
                        / this.tempoSegundos;

    this._segundosPassados =
      ((new Date()).getTime() - this._dataInicial)
      / 1000;

    const novasCoordenadas = this.coordenadas
      .slice(0, porcentagem * this.coordenadas.length)
      .join(" ");

    this.circuloTimerCoordenadas = novasCoordenadas;

    if (this._segundosPassados > this.tempoSegundos) {
      this.circuloTimerCoordenadas = this.coordenadas.join(' ');

      console.timeEnd();

      const tempoDecorrido =
        ((new Date()).getTime() - this._dataInicial)
        / 1000;
      console.log(
        'Tempo decorrido (segundos)',
        tempoDecorrido
      );

      return;
    }

    setTimeout(
      this.processarContagemRegressiva.bind(this),
      250
    );

   this.countDown =  (this.tempoSegundos-this._segundosPassados).toFixed(0)
    // console.log(this.countdown);

  }

  calculaCoordenadas(graus: number,
                     raio: number,
                     xyCentroCirculo: number): { x: number, y: number } {
    const radiano = graus * (Math.PI / 180);

    return {
      x: xyCentroCirculo
         + (Math.sin(radiano) * raio),
      y: xyCentroCirculo
         - (Math.cos(radiano) * raio),
    };
  }
}
