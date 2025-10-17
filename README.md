# Ponto Networks - Site Institucional

Site institucional desenvolvido em **Angular 19** para a empresa Ponto Networks, especializada em soluções de Tecnologia da Informação.

## 🚀 Tecnologias Utilizadas

- **Angular 19** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Angular Material** - Biblioteca de componentes UI
- **Reactive Forms** - Gerenciamento de formulários com validação

## 📋 Funcionalidades

### Componentes Implementados

1. **Header (Cabeçalho)**
   - Menu fixo no topo
   - Navegação suave entre seções
   - Menu responsivo (hamburguer) para mobile
   - Efeito de scroll com mudança de estilo

2. **Hero (Seção de Destaque)**
   - Área principal com chamada para ação (CTA)
   - Layout responsivo com imagem e texto
   - Animações de entrada

3. **About (Sobre)**
   - Apresentação da empresa
   - Background com imagem temática
   - Texto centralizado com overlay

4. **Services (Serviços)**
   - Grid responsivo de cards
   - 6 serviços principais:
     - Desenvolvimento de Software
     - Administração de infraestrutura
     - Mentoria para equipes de TI
     - Implantação de sistemas
     - Implantação de lojas virtuais
     - Business Intelligence
   - Efeitos hover em cada card

5. **Why Us (Por que nos escolher)**
   - Cards com Missão, Visão e Valores
   - Ícones SVG customizados
   - Layout responsivo

6. **Portfolio**
   - Grid de projetos
   - Overlay com informações ao passar o mouse
   - Efeito de zoom nas imagens
   - Preparado para filtros futuros

7. **Contact (Contato)**
   - Formulário funcional com **Reactive Forms**
   - Validações em tempo real:
     - Nome (mínimo 3 caracteres)
     - Email (formato válido)
     - Telefone (formato brasileiro)
     - Assunto (obrigatório)
     - Mensagem (mínimo 10 caracteres)
   - Feedback visual de erros
   - Mensagem de sucesso após envio
   - Informações de contato lateral

8. **Footer (Rodapé)**
   - Links rápidos
   - Informações de contato
   - Redes sociais
   - Copyright

## 🎨 Design

O design segue fielmente o layout fornecido no arquivo ZIP, com:

- **Paleta de cores:**
  - Ciano primário: `#1dd3b0`
  - Amarelo secundário: `#f4b41a`
  - Texto escuro: `#333333`
  - Texto claro: `#ffffff`

- **Tipografia:**
  - Fonte principal: Poppins (Google Fonts)
  - Pesos: 300, 400, 500, 600, 700

- **Responsividade:**
  - Breakpoint mobile: 768px
  - Grid adaptativo
  - Menu mobile com hamburguer

## 📁 Estrutura do Projeto

```
ponto-networks/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.html
│   │   │   │   ├── header.ts
│   │   │   │   └── header.scss
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   ├── why-us/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── assets/
│   │   └── images/
│   │       ├── pontonetworkslogo.png
│   │       ├── laptop-hands.png
│   │       ├── imagemfundo.png
│   │       └── [outras imagens]
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm start
   # ou
   ng serve
   ```

3. **Acessar o site:**
   - Abra o navegador em: `http://localhost:4200`

4. **Build para produção:**
   ```bash
   npm run build
   ```
   - Os arquivos compilados estarão em `dist/ponto-networks/`

## 🧪 Testes

Para executar os testes unitários:
```bash
npm test
```

## 📦 Deploy

O projeto pode ser facilmente deployado em:
- **Vercel**
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

### Exemplo de deploy (Netlify):
```bash
npm run build
netlify deploy --prod --dir=dist/ponto-networks
```

## 🔧 Manutenção

### Adicionar novo serviço

1. Edite `src/app/components/services/services.html`
2. Adicione um novo card com a estrutura:
   ```html
   <div class="service-card">
     <div class="service-image">
       <img src="assets/images/sua-imagem.png" alt="Descrição">
     </div>
     <h3>Nome do Serviço</h3>
   </div>
   ```

### Modificar cores

Edite as variáveis CSS em `src/styles.scss`:
```scss
:root {
  --primary-cyan: #1dd3b0;
  --primary-yellow: #f4b41a;
  // ...
}
```

### Integrar formulário com backend

Edite `src/app/components/contact/contact.ts`, método `onSubmit()`:
```typescript
onSubmit(): void {
  if (this.contactForm.valid) {
    // Substituir por chamada HTTP real
    this.http.post('https://api.seubackend.com/contato', this.contactForm.value)
      .subscribe(response => {
        // Processar resposta
      });
  }
}
```

## 📝 Código Limpo

O projeto segue boas práticas:
- ✅ Componentes modulares e reutilizáveis
- ✅ Código comentado em português
- ✅ Separação de responsabilidades
- ✅ TypeScript com tipagem forte
- ✅ SCSS com variáveis e mixins
- ✅ Nomenclatura semântica
- ✅ Estrutura escalável

## 👥 Contribuindo

Para contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para a Ponto Networks. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@pontonetworks.com
- Telefone: (11) 1234-5678

---

**Desenvolvido com ❤️ usando Angular**

