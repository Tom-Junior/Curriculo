import { Link } from 'wouter';
import { ArrowRight, Award, Briefcase, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Página Inicial (Home)
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Hero section com apresentação profissional
 * - Seções de destaques (formação, experiência, projetos)
 * - Call-to-action para contato
 * 
 * Heurísticas Aplicadas:
 * - H1: Visibilidade do estado do sistema (navegação clara)
 * - H2: Correspondência com o mundo real (linguagem profissional)
 * - H4: Consistência e padronização (layout uniforme)
 * - H5: Reconhecimento em vez de memorização (ícones e labels claros)
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-secondary py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-body font-medium text-sm tracking-wide uppercase">
                    Bem-vindo ao meu portfólio
                  </p>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                    Antônio Evangelista Ribeiro Júnior
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Especialista em <strong>Economia e Negócios. Graduado em Contabilidade e Ciência de Dados e Tecnologia da Informação</strong> com mais de 15 anos de experiência em contabilidade. Apaixonado por inovação, educação e transformação digital.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contato">
                    <a className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:opacity-90 transition-opacity duration-300">
                      Entrar em Contato
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                  <Link href="/curriculo">
                    <a className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Ver Currículo
                    </a>
                  </Link>
                </div>
              </div>

              {/* Imagem/Placeholder */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/Imagem.png" 
                    alt="Antônio Evangelista Ribeiro Júnior - Foto Profissional" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>            
          </div>
        </section>

        {/* Destaques */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
              Destaques Profissionais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Formação */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Formação Acadêmica
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  MBA em Ciência de Dados, Especialização em Contabilidade e Graduação em Ciências dos Dados.
                </p>
                <Link href="/curriculo">
                  <a className="text-primary font-body font-medium text-sm hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-1">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>

              {/* Card 2: Experiência */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Experiência Profissional
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  Analista Fiscal, Contábil e de Dados em empresas como Inpasa, Três Corações e Fruki.
                </p>
                <Link href="/sobre">
                  <a className="text-primary font-body font-medium text-sm hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-1">
                    Conhecer história <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>

              {/* Card 3: Projetos */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Projetos & Pesquisa
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  Projetos de extensão em cooperativismo indígena e publicações em gestão financeira.
                </p>
                <Link href="/curriculo">
                  <a className="text-primary font-body font-medium text-sm hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-1">
                    Ver projetos <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Estou disponível para discutir oportunidades de colaboração, consultoria ou novos projetos.
            </p>
            <Link href="/contato">
              <a className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium hover:opacity-90 transition-opacity duration-300 text-lg">
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
