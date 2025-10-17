import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Header
 * Menu fixo no topo com rolagem suave para seções
 */
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // Controla se o menu está aberto (mobile)
  menuActive = false;
  
  // Controla se o header está com scroll
  isScrolled = false;

  /**
   * Detecta o scroll da página para adicionar efeito ao header
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Alterna o menu mobile
   */
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  /**
   * Navega suavemente para uma seção específica
   * @param sectionId ID da seção de destino
   */
  scrollToSection(sectionId: string) {
    // Fecha o menu mobile se estiver aberto
    this.menuActive = false;
    
    // Previne comportamento padrão do link
    event?.preventDefault();
    
    // Encontra o elemento e faz scroll suave
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
