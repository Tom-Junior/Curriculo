import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Componente Header - Navegação Principal
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Navegação fixa no topo, sempre acessível
 * - Logo/nome à esquerda, menu à direita
 * - Menu responsivo com burger em mobile
 * - Aplicação de Heurística 4 (Consistência e padronização)
 * - Aplicação de Heurística 5 (Reconhecimento em vez de memorização)
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicial', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Currículo', path: '/curriculo' },
    { label: 'Contato', path: '/contato' },
    { label: 'Ajuda', path: '/ajuda' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border shadow-sm z-50">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Nome */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">AJ</span>
            </div>
            <span className="hidden sm:inline font-display font-bold text-lg text-foreground">
              Antônio Júnior
            </span>
          </a>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className="text-foreground hover:text-primary transition-colors duration-300 font-body text-sm font-medium">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Menu Mobile Toggle */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className="text-foreground hover:text-primary transition-colors duration-300 font-body text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
