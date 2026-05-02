# Portfólio Pessoal - Documentação Completa

## 📋 Visão Geral do Projeto

Este projeto é um **protótipo de portfólio web profissional** desenvolvido como atividade de conclusão do Módulo 4 (Padrões de Interface e Prototipação) do curso de Educação em Direitos Humanos com foco em Tecnologia.

**Desenvolvedor:** Antônio Evangelista Ribeiro Júnior  
**Data de Criação:** Maio de 2026  
**Tecnologias:** React 19 + TypeScript + Tailwind CSS 4 + Vite

---

## 🎯 Objetivos do Projeto

1. Aplicar conhecimentos de **padrões de interface** estudados no Módulo 4
2. Implementar **heurísticas de usabilidade** de Nielsen
3. Criar um **protótipo funcional** com 5 páginas principais
4. Demonstrar **boas práticas de UX/UI** em design web
5. Documentar as escolhas de design e implementação

---

## 📐 Arquitetura de Informação

### Estrutura de Páginas

O portfólio é composto por **5 páginas principais**:

#### 1. **Página Inicial** (`/`)
- Hero section com apresentação profissional
- Breve introdução sobre o desenvolvedor
- Destaques principais (formação, experiência, projetos)
- Call-to-action para contato e currículo
- Seção de destaques com cards informativos

#### 2. **Página Sobre** (`/sobre`)
- História profissional e acadêmica
- Interesses e áreas de atuação
- Habilidades técnicas e soft skills
- Experiência relevante (resumida)
- Foto profissional e informações pessoais

#### 3. **Página Currículo** (`/curriculo`)
- Formação acadêmica completa (especialidades, MBA, graduações)
- Experiência profissional (histórico de cargos com descrições)
- Certificações e cursos complementares
- Publicações e projetos de pesquisa
- Timeline visual com bordas coloridas

#### 4. **Página Contato** (`/contato`)
- Formulário de contato funcional (nome, email, assunto, mensagem)
- Validação em tempo real com mensagens de erro claras
- Informações de contato direto (email, telefone, localização)
- Links para redes sociais (LinkedIn)
- Feedback visual com toast notifications

#### 5. **Página Ajuda** (`/ajuda`)
- Documentação das **10 Heurísticas de Nielsen**
- Explicação de como cada heurística foi aplicada
- Localização de cada heurística nas páginas
- Princípios de design adicionais (acessibilidade, responsividade, tipografia)
- Seções expansíveis para cada heurística

---

## 🎨 Filosofia de Design

### Design Movement: **Minimalismo Corporativo Elegante**

O design foi desenvolvido seguindo princípios de minimalismo corporativo, priorizando:

- **Clareza e Legibilidade**: Foco em comunicação clara sem distrações
- **Profissionalismo**: Paleta de cores e tipografia que transmitem confiança
- **Funcionalidade**: Cada elemento tem propósito e contribui para a experiência
- **Espaço em Branco**: Uso generoso de espaço vazio para respiração visual

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| Azul Profundo | #1e3a8a | Primária (CTAs, títulos) |
| Branco Puro | #ffffff | Fundo principal |
| Off-white | #f9fafb | Fundo de cards |
| Cinza Escuro | #1f2937 | Texto principal |
| Cinza Médio | #6b7280| Texto secundário |
| Cinza Claro | #e5e7eb | Borders |
| Vermelho | #dc2626 | Erros e alertas |

### Tipografia

| Elemento | Fonte | Peso | Uso |
|----------|-------|------|-----|
| Títulos | Poppins | 700 (Bold) | H1, H2, H3 |
| Subtítulos | Poppins | 600 (SemiBold) | H4, H5 |
| Corpo | Inter | 400 (Regular) | Texto principal |
| Corpo Ênfase | Inter | 500 (Medium) | Destaque em corpo |

---

## 🏗️ Estrutura Técnica

### Stack Tecnológico

```
Frontend:
├── React 19 (UI Framework)
├── TypeScript (Type Safety)
├── Tailwind CSS 4 (Styling)
├── Vite (Build Tool)
├── Wouter (Routing)
├── Lucide React (Icons)
├── Sonner (Toast Notifications)
└── Shadcn/ui (UI Components)
```

### Estrutura de Arquivos

```
client/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navegação fixa
│   │   ├── Footer.tsx       # Rodapé com informações
│   │   └── ErrorBoundary.tsx
│   ├── pages/
│   │   ├── Home.tsx         # Página inicial
│   │   ├── About.tsx        # Página sobre
│   │   ├── Resume.tsx       # Página currículo
│   │   ├── Contact.tsx      # Página contato
│   │   ├── Help.tsx         # Página ajuda
│   │   └── NotFound.tsx     # 404
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx              # Router principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
└── index.html
```

---

## 🎓 10 Heurísticas de Nielsen Aplicadas

### H1: Visibilidade do Estado do Sistema
**Implementação:** Header fixo que mostra sempre a página atual, feedback visual em formulários, validação em tempo real, toast notifications para confirmação de ações.

**Localização:** Todas as páginas - Header fixo | Página Contato - Validação de formulário

### H2: Correspondência com o Mundo Real
**Implementação:** Linguagem clara e profissional, títulos descritivos, labels explicativos, mensagens de erro em português claro, navegação com nomes familiares.

**Localização:** Todas as páginas | Página Contato - Formulário

### H3: Controle e Liberdade do Usuário
**Implementação:** Navegação sempre acessível, botões de voltar, links para retornar à página inicial, confirmação antes de ações críticas.

**Localização:** Header - Navegação fixa | Footer - Links rápidos

### H4: Consistência e Padronização
**Implementação:** Paleta de cores uniforme, tipografia consistente, padrão de cards padronizados, espaçamento uniforme, botões com estilos padronizados.

**Localização:** Todas as páginas - Design uniforme

### H5: Reconhecimento em vez de Memorização
**Implementação:** Navegação sempre visível, ícones com labels descritivos, informações de contato no Footer, labels em todos os campos.

**Localização:** Header - Navegação visível | Página Contato - Labels | Footer

### H6: Flexibilidade e Eficiência de Uso
**Implementação:** Navegação intuitiva para iniciantes, links diretos para seções, múltiplas formas de contato, design responsivo.

**Localização:** Todas as páginas - Responsivo | Página Contato - Múltiplas opções

### H7: Projeto Estético e Minimalista
**Implementação:** Apenas elementos essenciais, muito espaço em branco, sem decorações desnecessárias, tipografia clara, cores neutras com acentos.

**Localização:** Todas as páginas - Design minimalista

### H8: Prevenção de Erros
**Implementação:** Validação de email em tempo real, campos obrigatórios marcados, placeholders informativos, desabilitação de botões até validação.

**Localização:** Página Contato - Validação de formulário

### H9: Recuperação de Erros
**Implementação:** Mensagens de erro em português claro, indicação precisa do campo com erro, sugestões de correção, cores visuais para indicar erros.

**Localização:** Página Contato - Mensagens de erro

### H10: Ajuda e Documentação
**Implementação:** Página de Ajuda com documentação completa, labels explicativos, informações de contato acessíveis, footer com links rápidos.

**Localização:** Página Ajuda - Documentação | Todas as páginas - Footer

---

## ♿ Acessibilidade

O projeto implementa as seguintes práticas de acessibilidade:

- ✅ **Contraste de Cores**: Razão de contraste mínima de 4.5:1 para texto
- ✅ **Navegação por Teclado**: Todos os elementos são acessíveis via teclado
- ✅ **Labels Descritivos**: Todos os campos de formulário têm labels claros
- ✅ **Semântica HTML**: Uso correto de tags semânticas (header, main, footer, nav)
- ✅ **Ícones com Texto**: Ícones sempre acompanhados de texto descritivo
- ✅ **Focus Rings**: Indicadores visuais de foco em elementos interativos
- ✅ **Responsividade**: Design funciona em todos os tamanhos de tela

---

## 📱 Responsividade

O design é **mobile-first** e funciona perfeitamente em:

- **Smartphones**: 320px - 640px
- **Tablets**: 640px - 1024px
- **Desktops**: 1024px+

Breakpoints utilizados:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 🚀 Como Executar

### Instalação de Dependências
```bash
pnpm install
```

### Desenvolvimento
```bash
pnpm run dev
```

O servidor estará disponível em `http://localhost:3000`

### Build para Produção
```bash
pnpm run build
```

### Preview da Build
```bash
pnpm run preview
```

---

## 📊 Componentes Principais

### Header
- Navegação fixa no topo
- Logo com iniciais "AE"
- Links para todas as páginas
- Responsivo com menu adaptativo

### Footer
- Informações de contato (email, telefone)
- Links para redes sociais
- Links rápidos para páginas
- Copyright

### Cards
- Padrão visual uniforme
- Bordas sutis
- Sombras suaves
- Hover effects

### Formulário de Contato
- Validação em tempo real
- Campos obrigatórios marcados
- Mensagens de erro claras
- Feedback de sucesso com toast

---

## 🎯 Padrões de Design Utilizados

### 1. **Card Pattern**
Usado em destaques, certificações e informações estruturadas.

### 2. **Timeline Pattern**
Usado na página de Currículo para mostrar formação e experiência.

### 3. **Accordion Pattern**
Usado na página de Ajuda para expandir/colapsar heurísticas.

### 4. **Form Pattern**
Validação em tempo real, feedback visual, prevenção de erros.

### 5. **Hero Pattern**
Seção de impacto visual na página inicial.

---

## 🔍 Boas Práticas Implementadas

### UX/UI
- ✅ Hierarquia visual clara
- ✅ Espaçamento consistente
- ✅ Feedback visual imediato
- ✅ Navegação intuitiva
- ✅ Prevenção de erros

### Código
- ✅ Componentes reutilizáveis
- ✅ TypeScript para type safety
- ✅ Nomes descritivos
- ✅ Código limpo e organizado
- ✅ Comentários explicativos

### Performance
- ✅ Otimização de imagens
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Caching eficiente

---

## 📝 Notas de Desenvolvimento

### Decisões de Design

1. **Minimalismo Corporativo**: Escolhido para transmitir profissionalismo e confiança
2. **Azul Profundo**: Cor primária que evoca segurança e profissionalismo
3. **Tipografia Dupla**: Poppins para destaque, Inter para leitura
4. **Espaço em Branco**: Generoso para melhorar legibilidade

### Desafios Resolvidos

1. **Validação de Formulário**: Implementada com feedback em tempo real
2. **Responsividade**: Grid layout adaptativo para todos os tamanhos
3. **Consistência Visual**: Paleta de cores e tipografia unificadas
4. **Acessibilidade**: Focus rings, labels, contraste adequado

---

## 🔗 Referências

- [Nielsen Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://material.io/design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)

---

## 📞 Contato

**Antônio Evangelista Ribeiro Júnior**
- Email: aerj_ce1@hotmail.com
- Telefone: (85) 99716-5696
- LinkedIn: @antonioerjunior
- Localização: Fortaleza, Ceará - Brasil

---

**Documento gerado em:** Maio de 2026  
**Versão:** 1.0
