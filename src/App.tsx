// Imagens do protótipo - agora usando assets locais
import { useState } from "react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { BookOpen, Users, Shield, Search, Calendar, Target, Palette, Monitor, Smartphone, ChevronDown, ChevronRight } from "lucide-react";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Caminhos das imagens do protótipo
  const prototypeImages = {
    userHome: "/assets/printUserCursos.png",
    userBooks: "/assets/printLivrosUser.png", 
    adminHome: "/assets/printAdminHome.png",
    adminBooks: "/assets/printAdminLivros.png"
  };
  
  const sections = [
    "Capa",
    "Briefing", 
    "Método 5W1H",
    "Personas",
    "Matriz CSD",
    "Jornada do Usuário",
    "Protótipo",
    "Conclusão"
  ];

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6" style={{ color: 'var(--primary-color)' }} />
              <span className="font-medium" style={{ color: 'var(--title-color)' }}>Open Pages</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`text-sm transition-colors ${
                    currentSection === index 
                      ? 'font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ 
                    color: currentSection === index ? 'var(--primary-color)' : undefined 
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        {/* Section 1: Capa */}
        <section id="section-0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGJvb2tzJTIwbGlicmFyeSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzU5NTExNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Academic books background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <BookOpen className="w-12 h-12" style={{ color: 'var(--primary-color)' }} />
                  <h1 className="text-5xl font-medium" style={{ color: 'var(--title-color)' }}>
                    Open Pages
                  </h1>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  3° Semestre
                </p>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                  Dificuldades na Procura por Livros Acadêmicos
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  Portfólio P.I
                </Badge>
              </div>

              <Button 
                onClick={() => scrollToSection(1)}
                className="mt-8"
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--text-color-light)'
                }}
              >
                Ver Apresentação
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Briefing */}
        <section id="section-1" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Briefing – Contextualização do Problema
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    O acesso rápido a livros acadêmicos é essencial, mas alunos e professores enfrentam falhas nos
                    sistemas das bibliotecas: obras indicadas como disponíveis muitas vezes não estão no acervo, gerando deslocamentos inúteis, perda de tempo e impacto
                    no desempenho acadêmico. Há necessidade de uma solução que torne a busca mais confiável e eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Método 5W1H */}
        <section id="section-2" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Método 5W1H – Do Problema
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Target className="w-5 h-5 mr-2" />
                    What (O quê?)
                  </h3>
                  <p className="text-gray-600">
                    O problema é a dificuldade de acesso rápido e eficiente a livros acadêmicos, devido à falta de informação imediata sobre sua disponibilidade.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Target className="w-5 h-5 mr-2" />
                    Why (Por quê?)
                  </h3>
                  <p className="text-gray-600">
                    Resolver esse problema é importante para otimizar o tempo de alunos e professores, evitar deslocamentos desnecessários e garantir melhor aproveitamento das aulas e pesquisas.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Users className="w-5 h-5 mr-2" />
                    Who (Quem?)
                  </h3>
                  <p className="text-gray-600">
                    Estudantes e professores que dependem de livros acadêmicos para estudar, dar aulas, preparar trabalhos e realizar pesquisas.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Monitor className="w-5 h-5 mr-2" />
                    Where (Onde?)
                  </h3>
                  <p className="text-gray-600">
                    Principalmente nas bibliotecas acadêmicas das instituições de ensino, mas o impacto se estende a qualquer espaço de estudo (salas de aula, laboratórios, residências de alunos).
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Calendar className="w-5 h-5 mr-2" />
                    When (Quando?)
                  </h3>
                  <p className="text-gray-600">
                    O problema ocorre em diversos momentos da jornada acadêmica: preparação de aulas, realização de pesquisas, execução de trabalhos e provas.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Search className="w-5 h-5 mr-2" />
                    How (Como?)
                  </h3>
                  <p className="text-gray-600">
                    A solução pode ser medida pela redução do tempo gasto na procura, maior satisfação dos usuários e aumento na eficiência do acesso aos materiais.
                  </p>
                </Card>
              </div>
              
              <div className="mt-8 bg-white rounded-lg p-8 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                <h3 className="font-medium mb-4" style={{ color: 'var(--title-color)' }}>
                  Resultados Esperados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rapidez na verificação da disponibilidade, diminuição da frustração e melhora no desempenho acadêmico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Personas */}
        <section id="section-3" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Personas – Atores Fictícios
              </h2>
              
              <div className="grid md:grid-cols-1 gap-8">
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 1 – Estudante Universitária
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Nome:</strong> Luísa, 20 anos | <strong>Curso:</strong> Letras
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Precisa de acesso facilitado a livros em versões acessíveis (digitais e com suporte a leitores de tela) para acompanhar suas disciplinas e realizar pesquisas.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Dor:</h4>
                          <p className="text-sm text-gray-600">
                            Enfrenta barreiras de acessibilidade, já que muitos livros não estão disponíveis em formatos digitais acessíveis. Isso a obriga a depender de colegas ou professores, tornando seu processo de estudo mais demorado e limitado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 2 – Estudante Universitário
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Nome:</strong> Lucas, 19 anos | <strong>Curso:</strong> Medicina
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Ter acesso gratuito ou de baixo custo a livros acadêmicos para acompanhar o curso, já que não tem condições financeiras de comprá-los.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Dor:</h4>
                          <p className="text-sm text-gray-600">
                            Muitas vezes precisa recorrer a versões não oficiais ou a empréstimos de colegas, o que compromete a qualidade dos materiais e gera insegurança de não ter o conteúdo necessário no momento certo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 3 – Estudante Universitária
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Nome:</strong> Maria, 18 anos | <strong>Curso:</strong> Psicologia
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Acessar livros específicos da área, que frequentemente são caros ou difíceis de encontrar em versões digitais, para apoiar pesquisas e aprofundar estudos.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Dor:</h4>
                          <p className="text-sm text-gray-600">
                            Foi até a biblioteca em busca de um livro que aparecia como disponível no sistema da faculdade, mas descobriu que ele não existia no acervo. Essa inconsistência gera frustração, faz perder tempo útil de estudo e compromete a confiança no serviço da biblioteca.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Matriz CSD */}
        <section id="section-4" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Matriz CSD – Validação e Priorização
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="font-medium mb-6 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Shield className="w-5 h-5 mr-2" />
                    Certezas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        O acesso a livros é essencial para alunos e professores.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        O processo atual de verificação é demorado e ineficiente.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        A falta de acesso prejudica o rendimento acadêmico.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-6 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Target className="w-5 h-5 mr-2" />
                    Suposições
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        Um sistema digital de consulta resolveria grande parte do problema.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        Usuários preferem uma solução online ao deslocamento físico.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        A biblioteca tem interesse em modernizar o acesso.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-6 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Search className="w-5 h-5 mr-2" />
                    Dúvidas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        Como garantir atualização em tempo real da disponibilidade dos livros?
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        Quais recursos tecnológicos estão disponíveis na instituição?
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-sm text-gray-600">
                        Como engajar todos os usuários a utilizarem a solução?
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Jornada do Usuário */}
        <section id="section-5" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Mapa da Jornada do Usuário – Pain Points
              </h2>
              
              <div className="space-y-8">
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 1 – Identificação da necessidade
                      </h3>
                      <p className="text-gray-600 mb-4">
                        O aluno ou professor percebe que precisa de um livro específico.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Incerteza sobre a disponibilidade antes de sair de casa ou da sala de aula.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 2 – Deslocamento até a biblioteca
                      </h3>
                      <p className="text-gray-600 mb-4">
                        O usuário vai até a biblioteca para procurar o livro.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Gasta tempo e, muitas vezes, descobre que o livro está emprestado ou não existe no acervo.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 3 – Perda de tempo acadêmico
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Caso o livro não esteja disponível, o aluno perde tempo de aula ou de estudo.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Prejuízo direto no aprendizado e frustração por não conseguir avançar na disciplina.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 4 – Busca por alternativas improvisadas
                      </h3>
                      <p className="text-gray-600 mb-4">
                        O usuário tenta encontrar resumos, cópias parciais ou materiais não oficiais.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Conteúdo incompleto e de qualidade inferior, comprometendo trabalhos e pesquisas.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-500 mt-12">
                  <h3 className="font-medium mb-4 text-green-800">
                    Oportunidade de Solução
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Criar um sistema digital que permita consultar a disponibilidade dos livros em tempo real, 
                    com possibilidade de reserva, para reduzir deslocamentos desnecessários e evitar perda 
                    de tempo acadêmico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Protótipo */}
        <section id="section-6" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Protótipo
              </h2>
              
              {/* Área do Usuário */}
              <div className="mb-16">
                <h3 className="text-xl font-medium mb-8 text-center" style={{ color: 'var(--title-color)' }}>
                  Área do Usuário
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-white">
                      <img 
                        src={prototypeImages.userHome}
                        alt="Página inicial do usuário - Cursos"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">Página inicial – Usuário</p>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-white">
                      <img 
                        src={prototypeImages.userBooks}
                        alt="Página de livros disponíveis para usuário"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">Livros disponíveis – Usuário</p>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Área do Administrador */}
              <div className="mb-16">
                <h3 className="text-xl font-medium mb-8 text-center" style={{ color: 'var(--title-color)' }}>
                  Área do Administrador
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-white">
                      <img 
                        src={prototypeImages.adminHome}
                        alt="Dashboard administrativo - Página inicial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">Dashboard – Administrador</p>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-white">
                      <img 
                        src={prototypeImages.adminBooks}
                        alt="Gerenciamento de livros do administrador"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">Gerenciamento de Livros – Administrador</p>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Equipe do Projeto */}
              <div className="mt-20">
                <h3 className="text-xl font-medium mb-8 text-center" style={{ color: 'var(--title-color)' }}>
                  Equipe do Projeto
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1" style={{ color: 'var(--title-color)' }}>
                          Pedro H. Xavier Constancio
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Product Owner / Dev</p>
                        <p className="text-xs text-gray-500">
                          Responsável pela visão do produto, priorização, implementação back-end e integração.
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1" style={{ color: 'var(--title-color)' }}>
                          Iago Rodrigues Pinheiro
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Desenvolvedor</p>
                        <p className="text-xs text-gray-500">
                          Responsável pela implementação front-end e UX/UI.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Conclusão */}
        <section id="section-7" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-12" style={{ color: 'var(--title-color)' }}>
                Conclusão
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-12 mb-12">
                <Target className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--primary-color)' }} />
                <h3 className="text-2xl font-medium mb-4" style={{ color: 'var(--title-color)' }}>
                  Impacto da Solução
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  A análise identificou um problema real e recorrente no ambiente acadêmico: a dificuldade de acesso 
                  eficiente a livros devido à falta de informação sobre disponibilidade. A solução proposta de um 
                  sistema digital de consulta em tempo real tem potencial para transformar a experiência dos usuários 
                  da biblioteca.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                      Benefícios Diretos
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Redução do tempo de busca</li>
                      <li>✓ Menos deslocamentos desnecessários</li>
                      <li>✓ Maior satisfação dos usuários</li>
                      <li>✓ Melhor aproveitamento do acervo</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                      Impacto Acadêmico
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Mais tempo para estudos</li>
                      <li>✓ Melhor qualidade de pesquisas</li>
                      <li>✓ Redução da frustração</li>
                      <li>✓ Aumento do desempenho</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                      Valor Institucional
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Modernização dos serviços</li>
                      <li>✓ Melhoria da imagem</li>
                      <li>✓ Otimização de recursos</li>
                      <li>✓ Diferencial competitivo</li>
                    </ul>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
                  Reflexões e Próximos Passos
                </h3>
                
                <div className="text-left max-w-3xl mx-auto space-y-6">
                  <div className="bg-white rounded-lg p-6 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                    <h4 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                      Validação do Problema
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      O processo de análise confirmou que as dificuldades enfrentadas não são casos isolados, 
                      mas sim um problema sistêmico que afeta significativamente a experiência acadêmica. 
                      As personas criadas representam situações reais vivenciadas por diversos usuários.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                    <h4 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                      Oportunidades Futuras
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Este estudo representa o primeiro passo para uma transformação digital mais ampla 
                      dos serviços bibliotecários. A solução pode ser expandida para incluir recursos como 
                      reservas online, renovações automáticas e integração com sistemas acadêmicos.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium">
                    Este projeto demonstra a importância da análise centrada no usuário para identificar 
                    problemas reais e propor soluções efetivas que agreguem valor ao ambiente acadêmico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="font-medium">Open Pages</span>
            </div>
            <p className="text-gray-400">
              Dificuldades na Procura por Livros Acadêmicos - 3° Semestre 2024
            </p>
          </div>
        </footer>
      </div>

      {/* Scroll Progress */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full shadow-lg p-3 border">
          <div className="text-sm font-medium" style={{ color: 'var(--primary-color)' }}>
            {currentSection + 1}/{sections.length}
          </div>
        </div>
      </div>
    </div>
  );
}