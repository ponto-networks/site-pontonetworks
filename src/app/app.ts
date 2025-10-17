import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { WhyUs } from './components/why-us/why-us';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

/**
 * Componente principal da aplicação
 * Integra todos os componentes do site Ponto Networks
 */
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Services,
    Portfolio,
    WhyUs,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Ponto Networks - Soluções em TI';
}
