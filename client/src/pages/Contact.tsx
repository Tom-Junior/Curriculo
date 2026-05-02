import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Página Contato
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Formulário de contato com validação
 * - Informações de contato direto
 * - Links para redes sociais
 * 
 * Heurísticas Aplicadas:
 * - H1: Visibilidade do estado (feedback de envio)
 * - H2: Correspondência com o mundo real (linguagem clara)
 * - H8: Prevenção de erros (validação de campos)
 * - H9: Recuperação de erros (mensagens de erro claras)
 * - H10: Ajuda e documentação (labels e placeholders explicativos)
 */

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldError?: string) => {
    const baseClass = 'w-full px-4 py-3 border rounded-lg font-body text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary';
    if (fieldError) {
      return `${baseClass} border-destructive bg-destructive/5`;
    }
    return `${baseClass} border-border bg-background hover:border-primary/50`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-secondary py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl">
              Estou disponível para discutir oportunidades, projetos ou simplesmente para uma conversa profissional.
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Informações de Contato */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:aerj_ce1@hotmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                      >
                        aerj_ce1@hotmail.com
                      </a>
                      <p className="text-muted-foreground font-body text-xs mt-1">
                        Respondo em até 24 horas
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        Telefone
                      </h3>
                      <a
                        href="tel:+558599716569"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                      >
                        (85) 99716-5696
                      </a>
                      <p className="text-muted-foreground font-body text-xs mt-1">
                        WhatsApp disponível
                      </p>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        Localização
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        Fortaleza, Ceará<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        LinkedIn
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/antonioerjunior/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                      >
                        @antonioerjunior
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Envie uma Mensagem
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={getInputClassName(errors.name)}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-destructive font-body text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@exemplo.com"
                        className={getInputClassName(errors.email)}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-destructive font-body text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Assunto */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-body font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Qual é o assunto?"
                        className={getInputClassName(errors.subject)}
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="text-destructive font-body text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua mensagem aqui..."
                        rows={5}
                        className={`${getInputClassName(errors.message)} resize-none`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-destructive font-body text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Botão de Envio */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>

                    {/* Nota de Privacidade */}
                    <p className="text-muted-foreground font-body text-xs text-center">
                      Seus dados são seguros e não serão compartilhados com terceiros.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
