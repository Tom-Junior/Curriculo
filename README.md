# 🎯 Portfólio Pessoal - Antônio Evangelista Ribeiro Júnior

[![React](https://img.shields.io/badge/React-19.2.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.14-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Um **portfólio web profissional e responsivo** desenvolvido com React, TypeScript e Tailwind CSS, aplicando princípios de UX/UI e as 10 Heurísticas de Nielsen.

**🌐 [Acesse o Portfólio Online](https://antonfolio-uwkhct8c.manus.space)**

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Páginas](#páginas)
- [Heurísticas de Nielsen](#heurísticas-de-nielsen)
- [Acessibilidade](#acessibilidade)
- [Responsividade](#responsividade)
- [Desenvolvimento](#desenvolvimento)
- [Build e Deploy](#build-e-deploy)
- [Documentação](#documentação)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎨 Visão Geral

Este projeto é um **portfólio web completo** que apresenta a trajetória profissional, formação acadêmica e projetos de **Antônio Evangelista Ribeiro Júnior**, especialista em Contabilidade, Ciência de Dados e Tecnologia.

O design segue a filosofia de **Minimalismo Corporativo Elegante**, priorizando clareza, profissionalismo e experiência do usuário. Todas as páginas foram desenvolvidas seguindo rigorosamente as **10 Heurísticas de Usabilidade de Nielsen**.

---

## ✨ Características

✅ **5 Páginas Funcionais**
- Página Inicial com hero section impactante
- Página Sobre com história profissional
- Página Currículo com timeline de formação e experiência
- Página Contato com formulário validado
- Página Ajuda com documentação de heurísticas

✅ **Design Profissional**
- Minimalismo corporativo elegante
- Paleta de cores harmoniosa (azul profundo + tons neutros)
- Tipografia estratégica (Poppins + Inter)
- Espaçamento generoso e visual limpo

✅ **Validação Completa**
- Formulário de contato com validação em tempo real
- Feedback visual imediato
- Mensagens de erro construtivas
- Toast notifications para confirmação

✅ **Responsividade Total**
- Design mobile-first
- Funciona perfeitamente em todos os tamanhos
- Breakpoints otimizados (mobile, tablet, desktop)
- Imagens adaptativas

✅ **Acessibilidade**
- Contraste de cores adequado (WCAG AA)
- Navegação por teclado funcional
- Labels descritivos em formulários
- Alt text em imagens
- Semântica HTML correta

✅ **Performance**
- Build otimizado com Vite
- Code splitting automático
- Lazy loading de componentes
- Caching eficiente

---

## 🛠️ Stack Tecnológico

### Frontend
| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React** | 19.2.1 | UI Framework |
| **TypeScript** | 5.6.3 | Type Safety |
| **Tailwind CSS** | 4.1.14 | Styling |
| **Vite** | 7.1.7 | Build Tool |
| **Wouter** | 3.3.5 | Routing |
| **Lucide React** | 0.453.0 | Icons |
| **Sonner** | 2.0.7 | Toast Notifications |
| **Shadcn/ui** | Latest | UI Components |

### Development
| Ferramenta | Descrição |
|-----------|-----------|
| **pnpm** | Package Manager |
| **Prettier** | Code Formatter |
| **ESLint** | Code Linter |
| **Git** | Version Control |

---

## 📦 Instalação

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** v16+ ([Baixar](https://nodejs.org/))
- **Git** ([Baixar](https://git-scm.com/))
- **pnpm** (ou npm)

### Verificar Instalações

```bash
node --version    # v22.13.1 ou superior
npm --version     # 10.0.0 ou superior
git --version     # 2.40.0 ou superior
```

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/portfolio-pessoal.git
cd portfolio-pessoal
```

### Instalar Dependências

```bash
pnpm install
```

Se não tiver pnpm instalado globalmente:

```bash
npm install -g pnpm
pnpm install
```

---

## 🚀 Como Usar

### Desenvolvimento

Inicie o servidor de desenvolvimento com hot reload:

```bash
pnpm run dev
```

O servidor estará disponível em:
- **Local:** http://localhost:5173/
- **Network:** http://seu-ip:5173/

### Build para Produção

Crie uma versão otimizada para produção:

```bash
pnpm run build
```

Os arquivos compilados estarão em `dist/`

### Preview da Build

Visualize a build de produção localmente:

```bash
pnpm run preview
```

### Verificar Tipos TypeScript

Verifique erros de tipo sem compilar:

```bash
pnpm run check
```

### Formatar Código

Formate automaticamente o código com Prettier:

```bash
pnpm run format
```

---

## 📁 Estrutura do Projeto

```
portfolio-pessoal/
├── client/                          # Código frontend
│   ├── public/                      # Arquivos estáticos
│   │   ├── favicon.ico              # Ícone do site
│   │   ├── robots.txt               # Instruções para bots
│   │   └── Imagem.png               # Foto profissional
│   ├── src/
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── Header.tsx           # Navegação fixa
│   │   │   ├── Footer.tsx           # Rodapé
│   │   │   └── ErrorBoundary.tsx    # Tratamento de erros
│   │   ├── pages/                   # Páginas da aplicação
│   │   │   ├── Home.tsx             # Página inicial
│   │   │   ├── About.tsx            # Página sobre
│   │   │   ├── Resume.tsx           # Página currículo
│   │   │   ├── Contact.tsx          # Página contato
│   │   │   ├── Help.tsx             # Página ajuda
│   │   │   └── NotFound.tsx         # Página 404
│   │   ├── contexts/                # React Context
│   │   │   └── ThemeContext.tsx     # Contexto de tema
│   │   ├── App.tsx                  # Componente raiz com rotas
│   │   ├── main.tsx                 # Ponto de entrada
│   │   └── index.css                # Estilos globais e tema
│   ├── index.html                   # HTML principal
│   └── tsconfig.json                # Configuração TypeScript
├── server/                          # Código backend (placeholder)
├── shared/                          # Código compartilhado
├── package.json                     # Dependências do projeto
├── pnpm-lock.yaml                   # Lock file do pnpm
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.ts               # Configuração Tailwind
├── tsconfig.json                    # Configuração TypeScript
├── README.md                        # Este arquivo
├── DOCUMENTACAO.md                  # Documentação técnica
├── REVISAO_DESIGN.md                # Revisão de design
├── GUIA_VSCODE_WINDOWS.md           # Guia para VS Code
└── LICENSE                          # Licença MIT
```

---

## 📄 Páginas

### 🏠 Página Inicial (`/`)

**Conteúdo:**
- Hero section com apresentação profissional
- Foto profissional em destaque
- Breve introdução e especialidades
- Botões de call-to-action (Contato, Currículo)
- Seção de destaques profissionais (Formação, Experiência, Projetos)
- Seção CTA para colaboração

**Heurísticas Aplicadas:** H1, H2, H4, H5

---

### 👤 Página Sobre (`/sobre`)

**Conteúdo:**
- Foto profissional
- História profissional e acadêmica
- Interesses e áreas de atuação
- Habilidades técnicas (Contabilidade, Dados, Tecnologia)
- Soft skills
- Experiência resumida

**Heurísticas Aplicadas:** H2, H4, H5, H7

---

### 📚 Página Currículo (`/curriculo`)

**Conteúdo:**
- Foto profissional no topo
- Formação acadêmica (MBA, Especializações, Graduações)
- Experiência profissional (timeline com 11+ posições)
- Certificações e cursos (8+ certificações)
- Publicações e projetos de pesquisa

**Heurísticas Aplicadas:** H1, H4, H5, H7

---

### 📧 Página Contato (`/contato`)

**Conteúdo:**
- Formulário de contato funcional
  - Campo: Nome (obrigatório)
  - Campo: Email (obrigatório, validado)
  - Campo: Assunto (obrigatório)
  - Campo: Mensagem (obrigatório)
- Validação em tempo real
- Mensagens de erro claras
- Informações de contato direto
- Links para redes sociais

**Heurísticas Aplicadas:** H1, H2, H3, H8, H9

---

### ❓ Página Ajuda (`/ajuda`)

**Conteúdo:**
- Documentação das 10 Heurísticas de Nielsen
- Seções expansíveis (accordion)
- Explicação de cada heurística
- Como foi implementada
- Onde encontrar no projeto
- Princípios de design adicionais

**Heurísticas Aplicadas:** H5, H10

---

## 🎯 Heurísticas de Nielsen

O projeto implementa completamente as **10 Heurísticas de Usabilidade de Nielsen**:

| # | Heurística | Implementação |
|---|-----------|----------------|
| **H1** | Visibilidade do Estado | Header fixo, feedback visual, validação em tempo real |
| **H2** | Correspondência com Mundo Real | Linguagem clara, labels explicativos |
| **H3** | Controle e Liberdade | Navegação acessível, links para retornar |
| **H4** | Consistência e Padronização | Paleta uniforme, tipografia consistente |
| **H5** | Reconhecimento vs Memorização | Navegação visível, ícones com labels |
| **H6** | Flexibilidade e Eficiência | Múltiplas formas de contato, design responsivo |
| **H7** | Estético e Minimalista | Sem poluição visual, muito espaço em branco |
| **H8** | Prevenção de Erros | Validação, campos obrigatórios marcados |
| **H9** | Recuperação de Erros | Mensagens claras, sugestões de correção |
| **H10** | Ajuda e Documentação | Página de ajuda, labels explicativos |

Consulte a **Página Ajuda** (`/ajuda`) para detalhes completos de cada heurística.

---

## ♿ Acessibilidade

O projeto segue as **Diretrizes de Acessibilidade Web (WCAG 2.1)** nível AA:

✅ **Contraste de Cores**
- Razão mínima de 4.5:1 para texto
- Cores testadas para daltonismo

✅ **Navegação por Teclado**
- Todos os elementos são acessíveis via teclado
- Focus rings visíveis em todos os elementos interativos
- Ordem de tabulação lógica

✅ **Semântica HTML**
- Tags semânticas corretas (header, main, footer, nav, section)
- Estrutura de headings apropriada (H1 > H2 > H3)
- Listas estruturadas corretamente

✅ **Formulários**
- Labels associados a cada campo
- Campos obrigatórios claramente marcados
- Mensagens de erro descritivas

✅ **Imagens**
- Alt text descritivo em todas as imagens
- Ícones com labels de texto

✅ **Responsividade**
- Funciona em todos os tamanhos de tela
- Sem scroll horizontal desnecessário
- Botões com tamanho adequado para toque

---

## 📱 Responsividade

O design é **mobile-first** e funciona perfeitamente em todos os dispositivos:

### Breakpoints

| Dispositivo | Largura | Breakpoint |
|-----------|---------|-----------|
| **Mobile** | 320px - 640px | `sm` |
| **Tablet** | 640px - 1024px | `md` |
| **Desktop** | 1024px+ | `lg`, `xl` |

### Testes Realizados

✅ iPhone 12 (390px)  
✅ iPad (768px)  
✅ Desktop 1920px  
✅ Orientação paisagem e retrato  

---

## 🎨 Design System

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| **Azul Profundo** | `#1e3a8a` | Primária (CTAs, títulos) |
| **Branco** | `#ffffff` | Fundo principal |
| **Off-white** | `#f9fafb` | Fundo secundário |
| **Cinza Escuro** | `#1f2937` | Texto principal |
| **Cinza Médio** | `#6b7280` | Texto secundário |
| **Cinza Claro** | `#e5e7eb` | Borders |
| **Vermelho** | `#dc2626` | Erros |

### Tipografia

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|--------|
| **Títulos** | Poppins | 700 Bold | 32px - 48px |
| **Subtítulos** | Poppins | 600 SemiBold | 20px - 28px |
| **Corpo** | Inter | 400 Regular | 14px - 16px |
| **Destaque** | Inter | 500 Medium | 14px - 16px |

### Espaçamento

- **Padding padrão:** 1rem (16px)
- **Margin entre seções:** 2rem (32px) a 3rem (48px)
- **Gap entre elementos:** 0.5rem (8px) a 2rem (32px)

---

## 🔧 Desenvolvimento

### Adicionar Novas Páginas

1. Crie um novo arquivo em `client/src/pages/NomePagina.tsx`
2. Implemente o componente React
3. Adicione a rota em `client/src/App.tsx`

**Exemplo:**

```tsx
// client/src/pages/Projects.tsx
export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Conteúdo */}
      </main>
      <Footer />
    </div>
  );
}
```

```tsx
// client/src/App.tsx
import Projects from "./pages/Projects";

<Route path="/projetos" component={Projects} />
```

### Adicionar Componentes

1. Crie um novo arquivo em `client/src/components/NomeComponente.tsx`
2. Exporte como componente React
3. Importe onde necessário

### Modificar Estilos

Os estilos globais estão em `client/src/index.css`. Você pode:

- Alterar cores em `:root` ou `.dark`
- Adicionar novas classes em `@layer components`
- Usar classes Tailwind diretamente nos componentes

---

## 🚀 Build e Deploy

### Build Local

```bash
pnpm run build
```

Cria a pasta `dist/` com os arquivos otimizados.

### Deploy no Vercel

```bash
npm i -g vercel
vercel
```

### Deploy no Netlify

```bash
npm run build
# Arraste a pasta 'dist/' para https://app.netlify.com
```

### Deploy no GitHub Pages

```bash
# Configure em vite.config.ts
export default {
  base: '/portfolio-pessoal/',
}

pnpm run build
# Faça push da pasta 'dist/' para a branch 'gh-pages'
```

---

## 📚 Documentação

Este projeto inclui documentação completa:

- **[README.md](README.md)** - Este arquivo
- **[DOCUMENTACAO.md](DOCUMENTACAO.md)** - Documentação técnica detalhada
- **[REVISAO_DESIGN.md](REVISAO_DESIGN.md)** - Revisão de design e usabilidade
- **[GUIA_VSCODE_WINDOWS.md](GUIA_VSCODE_WINDOWS.md)** - Guia para VS Code no Windows

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Contato

**Antônio Evangelista Ribeiro Júnior**

- 📧 **Email:** aerj_ce1@hotmail.com
- 📱 **Telefone:** (85) 99716-5696
- 💼 **LinkedIn:** [@antonioerjunior](https://linkedin.com/in/antonioerjunior)
- 📍 **Localização:** Fortaleza, Ceará - Brasil

---

## 🙏 Agradecimentos

- **React Team** - Framework incrível
- **Tailwind CSS** - Styling utilities
- **Vite** - Build tool rápido
- **Shadcn/ui** - Componentes de qualidade
- **Nielsen Norman Group** - Heurísticas de usabilidade

---

## 📊 Estatísticas do Projeto

- **Páginas:** 5
- **Componentes:** 2 (Header, Footer)
- **Linhas de Código:** ~2000+
- **Heurísticas Implementadas:** 10/10
- **Acessibilidade:** WCAG 2.1 AA
- **Performance:** Lighthouse 90+

---

## 🔄 Histórico de Versões

### v1.0.0 (Maio 2026)
- ✅ Lançamento inicial
- ✅ 5 páginas funcionais
- ✅ Design minimalista corporativo
- ✅ Validação de formulário
- ✅ Documentação completa
- ✅ Responsividade total

---

## 🎯 Roadmap

### Curto Prazo
- [ ] Adicionar animações de entrada (fade-in, slide-up)
- [ ] Implementar dark mode
- [ ] Adicionar seção de projetos com galeria

### Médio Prazo
- [ ] Integrar com backend para envio de emails
- [ ] Adicionar blog/artigos
- [ ] Implementar sistema de comentários

### Longo Prazo
- [ ] Adicionar análise de visitantes
- [ ] Criar chatbot de suporte
- [ ] Versão em múltiplos idiomas
- [ ] Implementar PWA

---

**Desenvolvido com ❤️ por Antônio Evangelista Ribeiro Júnior**

**Última atualização:** Maio de 2026
