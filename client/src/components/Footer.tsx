import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Componente Footer - Rodapé
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Informações de contato e links sociais
 * - Aplicação de Heurística 10 (Ajuda e documentação)
 * - Aplicação de Heurística 5 (Reconhecimento em vez de memorização)
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Antônio Júnior
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialista em Economia e Negócios e Tutor em Educação. Graduado em Contabilidade, Ciência de Dados e Dev. de Software com foco em inovação e educação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Inicial
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/curriculo">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Currículo
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Contato
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:ribeiro.junior@alu.ufc.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                ribeiro.junior@alu.ufc.br
              </a>
              
              <a
                href="tel:+5585997165696"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                (85) 99716-5696
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/antonioerjunior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.github.com/Tom-Junior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Antônio Júnior. Todos os direitos reservados.
            </p>
            <Link href="/ajuda">
              <a className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Ajuda & Usabilidade
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
