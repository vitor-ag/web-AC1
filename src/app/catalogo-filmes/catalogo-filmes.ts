import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-catalogo-filmes',
  styleUrl: './catalogo-filmes.css',
  templateUrl: './catalogo-filmes.html',
})
export class CatalogoFilmes {
  catalogo: string[] = ['Batman', 'Homem de ferro', 'Homem Aranha', 'Homem-Formiga', 'Deadpool'];

  filmeSelecionado = '';

  novoFilme: string = '';

  favorito = false;

  visualizacao: number = 0;

  visualizar() {
    this.visualizacao++;
  }

  adicionarFilme() {
    this.catalogo.push(this.novoFilme);
    this.novoFilme = '';
  }
}
