import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Lightbulb } from 'lucide-react';

/**
 * Página Sobre
 * 
 * Design: Minimalismo Corporativo Elegante
 * - História profissional e acadêmica
 * - Habilidades técnicas e soft skills
 * - Interesses e áreas de atuação
 * 
 * Heurísticas Aplicadas:
 * - H2: Correspondência com o mundo real (linguagem clara e acessível)
 * - H4: Consistência e padronização (layout uniforme com cards)
 * - H5: Reconhecimento em vez de memorização (ícones e seções bem definidas)
 */

export default function About() {
  const skills = {
    técnicas: [
      'Contabilidade Fiscal e Gerencial',
      'Análise de Dados (Python, SQL)',
      'Power BI e Visualização de Dados',
      'Desenvolvimento Web (HTML, CSS, JavaScript)',
      'Gestão de Projetos',
      'ERP e Sistemas Contábeis',
    ],
    soft: [
      'Comunicação Efetiva',
      'Liderança e Mentoria',
      'Resolução de Problemas',
      'Pensamento Crítico',
      'Trabalho em Equipe',
      'Educação e Tutoria',
    ],
  };

  const areas = [
    {
      icon: Target,
      title: 'Contabilidade & Finanças',
      description: 'Analista fiscal, contábil e economia enegócios com foco em conformidade e otimização.',
    },
    {
      icon: Lightbulb,
      title: 'Ciência de Dados',
      description: 'Aplicação de análise de dados e inteligência artificial para tomada de decisão estratégica.',
    },
    {
      icon: CheckCircle,
      title: 'Educação & Tecnologia',
      description: 'Paixão por ensinar e desenvolver soluções tecnológicas que impactam positivamente a sociedade.',
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
              Sobre Mim
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl leading-relaxed">
              Sou um profissional apaixonado por inovação, educação e transformação digital. Com mais de 15 anos de experiência em contabilidade, tenho dedicado minha carreira a resolver problemas complexos e ajudar organizações a crescer.
            </p>
          </div>
        </section>

        {/* História Profissional */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12">
              Minha Jornada Profissional
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Início da Carreira (2005-2013)
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Iniciei minha carreira como Assistente Administrativo na Uniodonto CE, onde desenvolvi habilidades em gestão financeira, folha de pagamento e operações. Posteriormente, trabalhei como Analista Contábil/Fiscal em empresas como Unicontas e Realiza, consolidando minha expertise em contabilidade e conformidade fiscal.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Especialização em Dados (2016-2022)
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Reconhecendo a importância da transformação digital, investi em formação em Ciência de Dados e Desenvolvimento Web. Trabalhei como Analista Fiscal em empresas como Cortez & Ibiapina, Fruki e Três Corações, aplicando análise de dados para otimizar processos tributários e financeiros.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Educação e Pesquisa (2023-Presente)
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Atualmente, estou cursando MBA em Ciência de Dados Aplicada aos Negócios e Especialização em Matemática Computacional e Cursando Graduação Tecnologica em Tecnologia da Informação.
                  Participei de projetos de pesquisa e extensão, incluindo iniciativas em cooperativismo indígena e educação.
                  Atuando no Projeto Residência em TIC 44 - Capacitação técnica e empreendedora em Inteligência Artificial - CTE-IA, aprendendo e aplicando conhecimentos em IA para desenvolver soluções inovadoras e impactantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
              Áreas de Atuação
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-lg p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
              Habilidades
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Habilidades Técnicas */}
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Habilidades Técnicas
                </h3>
                <ul className="space-y-3">
                  {skills.técnicas.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Soft Skills
                </h3>
                <ul className="space-y-3">
                  {skills.soft.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
              Idiomas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Português
                </h3>
                <p className="text-muted-foreground font-body">Nativo</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Inglês
                </h3>
                <p className="text-muted-foreground font-body">Razoável (Compreensão, Fala, Leitura, Escrita)</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Espanhol
                </h3>
                <p className="text-muted-foreground font-body">Básico</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
