import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react';

/**
 * Página Currículo
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Formação acadêmica estruturada
 * - Experiência profissional com timeline
 * - Certificações e cursos complementares
 * - Publicações e projetos de pesquisa
 * 
 * Heurísticas Aplicadas:
 * - H1: Visibilidade do estado (seções bem delimitadas)
 * - H4: Consistência e padronização (cards uniformes)
 * - H5: Reconhecimento em vez de memorização (ícones e estrutura clara)
 * - H7: Projeto estético minimalista (sem poluição visual)
 */

export default function Resume() {
  const education = [
     {
      year: '2026',
      title: 'Especialização em Matemática Computacional no Ensino Básico',
      institution: 'Universidade Federal do Pará (UFPA)',
      status: 'Em andamento',
    },
    {
      year: '2025',
      title: 'Especialização em Educação em Direitos Humanos',
      institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
      status: 'Em andamento',
    },
    {
      year: '2025',
      title: 'Especialização em Ciência dos Dados Aplicada à Negócios',
      institution: 'Universidade Federal do Ceará (UFC)',
      status: 'Em andamento',
    },   
    {
      year: '2024-2025',
      title: 'Especialização em Tutoria em Educação a Distância',
      institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
      description: 'Título: Análises do Ambiente de Aprendizagem da Disciplina de Gestão de Conteúdos Digitais',
      status: 'Concluída',
    },
    {
      year: '2023-2025',
      title: 'MBA em Economia e Negócios',
      institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
      description: 'Título: Revisão Sistemática sobre Fluxo de Caixa: Tendências Recentes em Publicações Científicas',
      status: 'Concluída',
    },
    {
      year: '2022-2025',
      title: 'Graduação em Ciência dos Dados',
      institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
      status: 'Concluída',
    },
    {
      year: '2019-2022',
      title: 'Graduação em Ciências Contábeis',
      institution: 'Faculdade Estácio - Ribeirão Preto',
      description: 'Título: Auditoria Interna e Sua Relevância para as Organizações',
      status: 'Concluída',
    },
    {
      year: '2023-2025',
      title: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS)',
      status: 'Concluída',
    },
  ];

  const experience = [
    {
      year: '2024-2025',
      title: 'Analista de Faturamento Corporativo',
      company: 'Inpasa Agroindustrial',
      description: 'Gestão de faturamento corporativo e análise de processos financeiros.',
    },
    {
      year: '2023-2024',
      title: 'Bolsista - Mestrado',
      company: 'Universidade Federal da Grande Dourados (UFGD)',
      description: 'Pesquisa acadêmica e desenvolvimento de projetos de extensão.',
    },
    {
      year: '2022-Temporário',
      title: 'Analista Fiscal',
      company: 'Grupo Três Corações S/A',
      description: 'Apuração de tributos indiretos (ICMS, IPI, PIS, COFINS), gestão de obrigações acessórias e conformidade fiscal.',
    },
    {
      year: '2021-2021',
      title: 'Analista Fiscal',
      company: 'Bebidas Fruki S/A',
      description: 'Análise de legislação tributária, simulação de valores de produtos e acompanhamento de insumos para industrialização.',
    },
    {
      year: '2020-2020',
      title: 'Analista Contábil/Fiscal',
      company: 'Cortez & Ibiapina Advogados',
      description: 'Análise e classificação de contas contábeis, escrituração fiscal e obrigações acessórias.',
    },
    {
      year: '2019-2020',
      title: 'Analista Contábil/Fiscal',
      company: 'Plannea Contabilidade',
      description: 'Gestão contábil, escrituração fiscal e análise de demonstrações financeiras.',
    },
    {
      year: '2016-2019',
      title: 'Analista Contábil/Fiscal',
      company: 'Unicontas Contabilidade e Assessoria',
      description: 'Análise de contas contábeis, escrituração fiscal e gestão de impostos.',
    },
    {
      year: '2013-2016',
      title: 'Analista Contábil/Fiscal',
      company: 'Realiza Empreendimentos Imobiliários',
      description: 'Conciliações bancárias, faturamento e gestão de contas a pagar e receber.',
    },
    {
      year: '2011-2013',
      title: 'Analista Contábil/Fiscal',
      company: 'Unicontas Contabilidade e Assessoria',
      description: 'Análise de contas contábeis e escrituração fiscal.',
    },
    {
      year: '2010-2011',
      title: 'Assistente Administrativo/Financeiro',
      company: 'Maracanau Motos Comércio e Serviços',
      description: 'Contas a pagar e receber, fluxo de caixa e folha de pagamento.',
    },
    {
      year: '2005-2009',
      title: 'Assistente Administrativo',
      company: 'Uniodonto CE',
      description: 'Relatórios, folha de pagamento, faturamento e atendimento a usuários.',
    },
  ];

  const certifications = [
    'Capacitação Técnica e Empreendedora em Inteligência Artificial (360h) - UFC',
    'Aperfeiçoamento em Análise de Dados (210h) - UFMA',
    'Front End (340h) - Alura',
    'Big Data Fundamentos 3.0 (12h) - Data Science Academy',
    'Power BI - De A a Z (20h) - Udemy',
    'Língua Brasileira de Sinais (160h) - ITB',
    'Espanhol Básico (160h) - ITB',
    'Inglês (60h) - My English Online',
  ];

  const publications = [
    {
      year: '2025',
      title: 'Revisão Sistemática sobre Fluxo de Caixa: Tendências Recentes em Publicações Científicas',
      journal: 'Desafio Online',
      authors: 'Ribeiro Júnior, A. E.; Espejo, M. M. S. B.',
    },
    {
      year: '2025',
      title: 'Análises do Ambiente de Aprendizagem da Disciplina de Gestão de Conteúdos Digitais',
      type: 'Trabalho de Conclusão de Curso',
    },
    {
      year: '2023',
      title: 'III Simpósio de Agronegócios e Sustentabilidade',
      type: 'Simpósio',
    },
    {
      year: '2023',
      title: 'XX Congresso Brasileiro de Ensino Superior a Distância (ESUD 2023)',
      type: 'Congresso',
    },
     {
      year: '2023',
      title: 'IX Congresso Internacional de Educação Superior a Distância (CIESUD 2023)',
      type: 'Congresso',
    },
    {
      year: '2022',
      title: 'Auditoria Interna e Sua Relevância para as Organizações',
      type: 'Trabalho de Conclusão de Curso',
    },
    {
      year: '2018',
      title: 'A Produção Oral em Língua Inglesa no Ensino a Distância: Um Relato de Experiência',
      event: 'Encontro de Tecnodocência - UFC',
      type: 'Apresentação de Trabalho',
    },
    {
      year: '2018',
      title: 'Produção Oral em Língua Inglesa no Ensino a Distância: Um Relato de Experiência',
      type: 'Encontros Universitários - UFC',
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
              Currículo Profissional
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl">
              Formação acadêmica, experiência profissional e certificações que definem minha trajetória.
            </p>
          </div>
        </section>

        {/* Formação Acadêmica */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Formação Acadêmica
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {edu.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm font-body font-medium text-primary whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground font-body text-sm mb-2">
                      {edu.description}
                    </p>
                  )}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Experiência Profissional
              </h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-body font-medium text-primary whitespace-nowrap">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Certificações e Cursos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <p className="text-foreground font-body text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publicações e Eventos */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Publicações e Eventos
              </h2>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {pub.journal || pub.event}
                      </p>
                    </div>
                    <span className="text-sm font-body font-medium text-primary whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    {pub.authors || pub.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
