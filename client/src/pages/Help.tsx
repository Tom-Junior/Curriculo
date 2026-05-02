import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

export default function Help() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const heuristics = [
    {
      id: 1,
      title: 'Visibilidade do Estado do Sistema',
      description: 'Os usuários precisam saber o que está acontecendo com o sistema em tempo real.',
      implementation: 'Header fixo, feedback visual em formulários, validação em tempo real, toast notifications.',
      locations: ['Página Contato - Validação', 'Todas as páginas - Header fixo'],
    },
    {
      id: 2,
      title: 'Correspondência com o Mundo Real',
      description: 'O sistema deve conversar em linguagem familiar ao usuário.',
      implementation: 'Títulos descritivos, labels explicativos, mensagens de erro em português claro.',
      locations: ['Todas as páginas', 'Página Contato - Formulário'],
    },
    {
      id: 3,
      title: 'Controle e Liberdade do Usuário',
      description: 'Usuários precisam de saídas de emergência claramente marcadas.',
      implementation: 'Navegação sempre acessível, links para retornar, possibilidade de limpar formulários.',
      locations: ['Header - Navegação fixa', 'Footer - Links rápidos'],
    },
    {
      id: 4,
      title: 'Consistência e Padronização',
      description: 'Palavras, situações e ações devem aparecer de forma parecida.',
      implementation: 'Paleta de cores uniforme, tipografia consistente, padrão de cards padronizados.',
      locations: ['Todas as páginas - Design uniforme'],
    },
    {
      id: 5,
      title: 'Reconhecimento em vez de Memorização',
      description: 'Minimize a carga de memória tornando objetos e ações visíveis.',
      implementation: 'Navegação visível, ícones com labels, informações no Footer.',
      locations: ['Header - Navegação visível', 'Página Contato - Labels'],
    },
    {
      id: 6,
      title: 'Flexibilidade e Eficiência de Uso',
      description: 'Suporte para usuários iniciantes e avançados.',
      implementation: 'Navegação intuitiva, múltiplas formas de contato, design responsivo.',
      locations: ['Todas as páginas - Responsivo'],
    },
    {
      id: 7,
      title: 'Projeto Estético e Minimalista',
      description: 'Não exiba informações irrelevantes ou desnecessárias.',
      implementation: 'Apenas elementos essenciais, muito espaço em branco, tipografia clara.',
      locations: ['Todas as páginas - Design minimalista'],
    },
    {
      id: 8,
      title: 'Prevenção de Erros',
      description: 'Projeto cuidadoso que previne problemas antes de ocorrerem.',
      implementation: 'Validação de email, campos obrigatórios marcados, placeholders informativos.',
      locations: ['Página Contato - Validação'],
    },
    {
      id: 9,
      title: 'Recuperação de Erros',
      description: 'Mensagens de erro em linguagem simples e construtivas.',
      implementation: 'Mensagens claras em português, indicação precisa do erro, sugestões de correção.',
      locations: ['Página Contato - Mensagens de erro'],
    },
    {
      id: 10,
      title: 'Ajuda e Documentação',
      description: 'Forneça ajuda e documentação fácil de encontrar.',
      implementation: 'Esta página com documentação, labels explicativos, footer com informações.',
      locations: ['Página Ajuda', 'Todas as páginas'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-secondary py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ajuda & Usabilidade
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl">
              Documentação completa das 10 Heurísticas de Nielsen aplicadas neste portfólio.
            </p>
          </div>
        </section>

        {/* Heurísticas */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="space-y-4">
              {heuristics.map((heuristic) => (
                <div
                  key={heuristic.id}
                  className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleExpanded(heuristic.id)}
                    className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-display font-bold text-sm">
                            H{heuristic.id}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-foreground">
                          {heuristic.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-body text-sm">
                        {heuristic.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedId === heuristic.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedId === heuristic.id && (
                    <div className="border-t border-border px-6 py-4 bg-secondary/30">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-display font-bold text-foreground mb-2">
                            Como foi implementada:
                          </h4>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">
                            {heuristic.implementation}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-display font-bold text-foreground mb-2">
                            Onde encontrar:
                          </h4>
                          <ul className="space-y-2">
                            {heuristic.locations.map((loc, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground font-body text-sm">
                                  {loc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Princípios Adicionais */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Princípios de Design Aplicados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  Acessibilidade
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Contraste adequado entre texto e fundo, navegação por teclado, labels em todos os campos.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  Responsividade
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Design mobile-first que funciona em dispositivos de todos os tamanhos.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  Tipografia
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Poppins para títulos, Inter para corpo. Hierarquia visual clara e legibilidade.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  Paleta de Cores
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Azul profundo como primária, tons neutros para máxima legibilidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
