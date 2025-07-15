<div align="center">

# GameStore 🎮

<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/Thumb.png?updatedAt=1752553690411" title="source: imgur.com" alt="Logo Refund 2.0" width="400"/>
</div>

![Status](https://img.shields.io/badge/status-concluído-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

Uma moderna e responsiva plataforma de e-commerce para venda de jogos, construída com as mais recentes tecnologias de desenvolvimento web.

</div>

## 📜 Sobre o Projeto

GameStore é uma aplicação front-end que simula uma loja virtual de jogos. Ela consome dados de uma API para listar produtos, permite que os usuários filtrem os jogos por categoria e gerenciem seus itens em um carrinho de compras funcional. O projeto foi desenvolvido com foco em performance, componentização e uma ótima experiência de usuário.

## ✨ Funcionalidades Principais

- **Listagem de Produtos da API:** Os produtos são carregados dinamicamente a partir de uma API externa configurada via variáveis de ambiente.
- **Filtro Dinâmico por Categoria:** Um dropdown permite que os usuários filtrem a lista de jogos por categorias únicas, com as requisições sendo refeitas a cada seleção.
- **Carrinho de Compras Funcional:**
  - Adicionar produtos ao carrinho diretamente dos cards.
  - Aumentar ou diminuir a quantidade de cada item.
  - Remover itens individualmente ou limpar o carrinho completamente.
- **Persistência com Local Storage:** O estado do carrinho de compras é salvo no navegador, garantindo que os dados não se percam ao recarregar a página.
- **Cálculo de Totais:** O valor total e a quantidade total de itens no carrinho são calculados e exibidos em tempo real.
- **Design Responsivo:** Interface construída com Tailwind CSS, garantindo uma experiência consistente em desktops, tablets e celulares.
- **Telas de Loading e Feedback:** Uma tela de carregamento inicial elegante e indicadores de loading para filtros garantem que o usuário tenha um feedback claro sobre o estado da aplicação.
- **Componentização com Radix UI:** Utilização de componentes acessíveis e robustos como Dropdown e Sheet (para o carrinho), garantindo uma base sólida para a interface.

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Categoria                 | Tecnologia                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Frontend**              | React 19, Vite, TypeScript                                                                   |
| **Estilização**           | Tailwind CSS, Radix UI (Dropdown Menu, Dialog), Lucide React (Ícones)                        |
| **Gerenciamento de Estado** | React Context API (para Produtos e Carrinho)                                                |
| **Roteamento**            | React Router                                                                                 |
| **Requisições HTTP**      | Axios                                                                                        |
| **Utilitários**           | `clsx` e `tailwind-merge` para gerenciamento de classes CSS                                  |

</div>

## 🚀 Como Começar

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- `npm`, `yarn` ou `pnpm` como gerenciador de pacotes

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/gamestore.git
cd gamestore
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a URL da sua API de backend. O projeto está configurado para buscar os dados de lá.

```env
VITE_API_URL=http://localhost:3000/api
```

4. **Execute o projeto:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📜 Scripts Disponíveis

<div align="center">

- `npm run dev`: Executa a aplicação em modo de desenvolvimento com Hot-Reload.  
- `npm run build`: Compila e otimiza a aplicação para produção, gerando os arquivos na pasta `dist`.  
- `npm run preview`: Executa um servidor local para visualizar a build de produção.

</div>

## 📁 Estrutura do Projeto

```
src/
├── components/   # Componentes reutilizáveis (Button, Product, NavBar, etc.)
│   └── ui/       # Componentes de UI base (shadcn/Radix)
├── contexts/     # Provedores de contexto (ProductContext, CartContext)
├── hooks/        # Hooks customizados (useProduct, useCart)
├── pages/        # Componentes de página (Home, NotFound)
├── routes/       # Configuração de roteamento da aplicação
├── services/     # Configuração de serviços (ex: instância do Axios)
└── utils/        # Funções utilitárias (formatCurrency, offers)
```

## 👨‍💻 Autor

<div align="center">

- **Bruno Godoy** - [@brunogodoy2911](https://github.com/brunogodoy2911)

</div>
