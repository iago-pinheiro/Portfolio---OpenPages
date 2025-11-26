import image_899ea7be57848d54f4f854246ce612ccda2de40b from 'figma:asset/899ea7be57848d54f4f854246ce612ccda2de40b.png';
import image_dfbc146d14f0460b47aa7206e9e564d4ebe756f9 from 'figma:asset/dfbc146d14f0460b47aa7206e9e564d4ebe756f9.png';
import image_a66f1656fd0478a38b9506d64d8248973936e255 from 'figma:asset/a66f1656fd0478a38b9506d64d8248973936e255.png';
import { useState } from "react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { BookOpen, Users, Shield, Search, Calendar, Target, Palette, Monitor, Smartphone, ChevronDown, ChevronRight, AlertCircle, Eye, Layers, FileText, CheckSquare } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    "Capa",
    "Briefing", 
    "Método 5W1H",
    "Personas",
    "Matriz CSD",
    "Jornada do Usuário",
    "Benchmarking – Repertório",
    "Rabiscoframe – Arquitetura da Informação",
    "Wireframe – Fluxo Navegacional",
    "Style Guide – Padrões do Projeto",
    "Protótipo de Alta Fidelidade – Navegável",
    "Avaliação Heurística – 10 Heurísticas de Nielsen",
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
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
              <span className="font-medium text-sm" style={{ color: 'var(--title-color)' }}>Open Pages</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection(0)}
                className="text-sm transition-colors text-gray-600 hover:text-gray-900"
                style={{ color: currentSection === 0 ? 'var(--primary-color)' : undefined }}
              >
                Home
              </button>
              
              <button
                onClick={() => scrollToSection(1)}
                className="text-sm transition-colors text-gray-600 hover:text-gray-900"
                style={{ color: currentSection === 1 ? 'var(--primary-color)' : undefined }}
              >
                Briefing
              </button>
              
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm transition-colors text-gray-600 hover:text-gray-900 outline-none focus:outline-none border-none bg-transparent p-0">
                  <span>Pesquisa</span>
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="z-[100]">
                  <DropdownMenuItem onClick={() => scrollToSection(2)}>
                    Método 5W1H
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(3)}>
                    Personas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(4)}>
                    Matriz CSD
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(5)}>
                    Jornada do Usuário
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(6)}>
                    Benchmarking – Repertório
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm transition-colors text-gray-600 hover:text-gray-900 outline-none focus:outline-none border-none bg-transparent p-0">
                  <span>Ideação</span>
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="z-[100]">
                  <DropdownMenuItem onClick={() => scrollToSection(7)}>
                    Rabiscoframe
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(8)}>
                    Wireframe
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm transition-colors text-gray-600 hover:text-gray-900 outline-none focus:outline-none border-none bg-transparent p-0">
                  <span>Design</span>
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="z-[100]">
                  <DropdownMenuItem onClick={() => scrollToSection(9)}>
                    Style Guide
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(10)}>
                    Protótipo Navegável
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button
                onClick={() => scrollToSection(11)}
                className="text-sm transition-colors text-gray-600 hover:text-gray-900"
                style={{ color: currentSection === 11 ? 'var(--primary-color)' : undefined }}
              >
                Avaliação
              </button>
              
              <button
                onClick={() => scrollToSection(12)}
                className="text-sm transition-colors text-gray-600 hover:text-gray-900"
                style={{ color: currentSection === 12 ? 'var(--primary-color)' : undefined }}
              >
                Conclusão
              </button>
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
                  Portfólio P.I V2
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
                    A agilidade no acesso a bibliografias é um pilar fundamental do desempenho acadêmico. No entanto, nossa fase de Discovery revelou que a experiência atual nas bibliotecas universitárias apresenta atritos significativos que impactam a rotina de estudantes e servidores.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Nossa pesquisa partiu de uma hipótese <strong>baseada em vivências reais e foi validada através de entrevistas</strong> qualitativas com alunos de diferentes instituições. Identificamos um padrão de frustração recorrente: a <strong>"jornada incerta"</strong>.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Relatos dos usuários apontaram dois gargalos críticos no modelo atual:
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-gray-600"><strong>Assimetria de Informação:</strong> Sistemas legados que indicam disponibilidade digital, mas não refletem o acervo físico real, gerando quebra de expectativa e desconfiança institucional.</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                      <p className="text-gray-600"><strong>Deslocamento Improdutivo:</strong> A necessidade de validação presencial da disponibilidade. O aluno precisa investir tempo e recurso de transporte apenas para descobrir, no balcão, que a obra não está acessível, resultando em perda de tempo letivo.</p>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    O cenário atual exige uma modernização urgente. Ficou evidente que a simples "consulta" não é suficiente; é necessário transformar a busca física em uma confirmação digital precisa, eliminando a insegurança logística do processo.
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
              
              <div className="grid md:grid-cols-1 gap-6">
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Target className="w-5 h-5 mr-2" />
                    What (O quê?)
                  </h3>
                  <p className="text-gray-600">
                    A dificuldade de acesso eficiente a bibliografias físicas devido à falta de sincronia em tempo real entre o sistema e o acervo. O problema central não é a inexistência de busca, mas a incapacidade do usuário de <strong>converter essa busca em uma reserva garantida remotamente</strong>, resultando em perda de tempo e deslocamentos improdutivos.
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
                    <Search className="w-5 h-5 mr-2" />
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
                    <BookOpen className="w-5 h-5 mr-2" />
                    Why (Por quê?)
                  </h3>
                  <p className="text-gray-600">
                    Resolver esse problema é importante para otimizar o tempo de alunos e professores, evitar deslocamentos desnecessários e garantir melhor aproveitamento das aulas e pesquisas.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-medium mb-4 flex items-center" style={{ color: 'var(--title-color)' }}>
                    <Target className="w-5 h-5 mr-2" />
                    How (Como?)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A solução pode ser medida pela redução do tempo gasto na procura, maior satisfação dos usuários e aumento na eficiência do acesso aos materiais.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-medium text-blue-800 mb-2">Resultados esperados:</h4>
                    <p className="text-blue-700 text-sm">
                      Rapidez na verificação da disponibilidade, diminuição da frustração e melhora no desempenho acadêmico.
                    </p>
                  </div>
                </Card>
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
                {/* Persona 1: Luísa */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 1: Luísa, 20 anos | Curso: Letras
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Bio & Contexto:</h4>
                          <p className="text-sm text-gray-600">
                            Luísa tem deficiência visual congênita. Ela é extremamente proficiente em tecnologia assistiva, utilizando leitores de tela (NVDA) em seu dia a dia. Sua rotina de estudos é totalmente digitalizada, mas ela depende da compatibilidade dos materiais fornecidos pela instituição.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Autonomia total na busca. Ela precisa de um sistema que siga as diretrizes de acessibilidade web (WCAG), permitindo que ela verifique, sem ajuda de terceiros, se os livros do curso possuem versões digitais acessíveis (PDFs) ou audiolivros no acervo.
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="font-medium text-red-800 mb-2">Ponto de Dor (Pain Point):</h4>
                          <p className="text-red-700 text-sm">
                            A barreira da "acessibilidade física não-digital". Luísa relatou frustração ao ir à biblioteca e descobrir que o livro obrigatório só existe em versão impressa (inacessível para ela). O sistema atual falha em informar o formato do livro, obrigando-a a depender da boa vontade de colegas para ler em voz alta, o que tira sua independência acadêmica.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Persona 2: Lucas */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 2: Lucas, 23 anos | Curso: Medicina
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Bio & Contexto:</h4>
                          <p className="text-sm text-gray-600">
                            Lucas realizou o sonho de ingressar na UFRJ, sendo o primeiro de sua família a entrar em uma universidade pública. Embora o ensino seja gratuito, o custo de permanência no curso é altíssimo. Atualmente, ele se dedica integralmente aos estudos e depende do esforço de sua mãe, que trabalha para que ele conclua a graduação.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Garantia de acesso democrático ao acervo. Como não pode comprar os materiais, a biblioteca é sua única fonte de estudo. Ele precisa de um sistema que permita planejar a reserva dos livros com antecedência, garantindo que o esforço de sua mãe para mantê-lo na faculdade não seja prejudicado pela falta de material didático.
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="font-medium text-red-800 mb-2">Ponto de Dor (Pain Point):</h4>
                          <p className="text-red-700 text-sm">
                            A desvantagem competitiva por questões socioeconômicas. Lucas sente uma enorme pressão quando se desloca até a biblioteca e descobre que o livro essencial para a prova já foi emprestado. Ele fica em desvantagem direta em relação aos colegas que possuem os livros próprios, gerando ansiedade e medo de reprovar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Persona 3: Maria */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 3: Maria, 22 anos | Curso: Psicologia
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Bio & Contexto:</h4>
                          <p className="text-sm text-gray-600">
                            Maria cursa Psicologia em uma instituição privada e trabalha em tempo integral para custear suas mensalidades. Residente em uma cidade vizinha, ela enfrenta diariamente 1h00 de transporte público para chegar ao campus. Com uma rotina exaustiva de jornada dupla, seu tempo é seu recurso mais escasso, e ela depende dos livros da biblioteca para não aumentar ainda mais seus custos educacionais.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Maria não tem tempo para "tentar a sorte". Ela precisa de um sistema que permita verificar e reservar o livro remotamente antes de sair do trabalho. A ferramenta deve garantir que sua ida à biblioteca seja rápida e assertiva (apenas para retirada), integrando-se à sua janela de tempo limitada.
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="font-medium text-red-800 mb-2">Ponto de Dor (Pain Point):</h4>
                          <p className="text-red-700 text-sm">
                            O custo do deslocamento improdutivo. A maior frustração de Maria é gastar tempo e dinheiro de transporte baseando-se na informação de "Disponível" do sistema, apenas para chegar ao balcão e descobrir que o livro não está lá. Essa inconsistência desorganiza seu cronograma de estudos e gera a sensação de que a instituição não valoriza o esforço financeiro e pessoal que ela faz para estar ali.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Persona 4: Roberto */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                        Persona 4: Roberto, 45 anos | Cargo: Bibliotecário Chefe
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Bio & Contexto:</h4>
                          <p className="text-sm text-gray-600">
                            Roberto é bibliotecário há mais de 10 anos. Ele é apaixonado pela organização e curadoria do conhecimento, mas atualmente gasta 70% do seu tempo no balcão de atendimento resolvendo problemas operacionais repetitivos (renovações manuais, busca por livros perdidos e explicações sobre disponibilidade). Ele se sente um "apagador de incêndios" em vez de um gestor de acervo.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>Necessidade:</h4>
                          <p className="text-sm text-gray-600">
                            Roberto precisa de uma ferramenta administrativa que reduza o atendimento presencial para tarefas triviais. Ele necessita que o sistema filtre a demanda: o aluno só deve ir ao balcão quando o livro já estiver separado ou para resolver problemas complexos. Ele também precisa de relatórios confiáveis sobre quais livros são mais buscados para otimizar futuras compras.
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="font-medium text-red-800 mb-2">Ponto de Dor (Pain Point):</h4>
                          <p className="text-red-700 text-sm">
                            A maior dor de Roberto é ter que lidar com a frustração dos alunos quando o sistema antigo falha. Ele se sente profissionalmente desvalorizado quando precisa dizer "O sistema diz que tem, mas não estou achando o livro". Essa inconsistência de dados gera filas desnecessárias, estresse na equipe e impede que ele se dedique à modernização da biblioteca.
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

              <div className="mt-12">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    A partir da matriz CSD, percebemos que o maior risco era a falta de integração com o acervo. 
                    Por isso defini que a prioridade do MVP seria garantir informações confiáveis e atualizadas.
                  </p>
                </div>
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
                {/* Etapa 1 */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 1 – Planejamento e Consulta Remota
                      </h3>
                      <p className="text-gray-600 mb-4">
                        O aluno acessa o sistema atual (muitas vezes não responsivo) pelo celular para verificar se o livro essencial para seu trabalho está disponível.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Incerteza crítica. O sistema informa "Disponível", mas não oferece ferramentas de reserva ou bloqueio remoto, obrigando o aluno a "contar com a sorte" até chegar à biblioteca.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Etapa 2 */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 2 – Investimento Logístico (O Deslocamento)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        O usuário investe tempo e recursos financeiros (transporte) para se deslocar até a instituição, motivado exclusivamente pela informação de disponibilidade vista no sistema.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Alto risco de "viagem perdida". Durante o trajeto, o livro pode ser emprestado para outro usuário, tornando todo o esforço de deslocamento inútil devido à falta de sincronia em tempo real.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Etapa 3 */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 3 – A Quebra de Expectativa (No Balcão)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Ao chegar à biblioteca, o aluno não encontra a obra na estante ou descobre, via atendimento, que o livro foi extraviado ou está em processamento interno.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Assimetria de Informação. A divergência entre o "mundo digital" (que diz que tem) e o "mundo físico" (que não tem) gera frustração, descrédito no serviço da biblioteca e constrangimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Etapa 4 */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 4 – Improviso e Impacto Acadêmico
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Sem o material oficial e com o prazo correndo, o aluno é forçado a estudar por resumos online de baixa qualidade ou cópias parciais de colegas.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Prejuízo pedagógico. A falha do sistema obriga o aluno a baixar a régua de qualidade de sua pesquisa, trocando o aprendizado profundo pela simples "entrega de tarefa" para não reprovar.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Etapa 5 */}
                <Card className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-medium">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-3" style={{ color: 'var(--title-color)' }}>
                        Etapa 5 – O Gargalo da Devolução (A Fila Desnecessária)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Uma longa fila se forma no balcão. A maioria dos alunos está ali apenas para devolver um livro ("finalizar o empréstimo"). E o Bibliotecário precisa abrir o sistema lento, digitar o código do usuário, achar o livro e dar baixa manual.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">Pain Point:</h4>
                        <p className="text-red-700 text-sm">
                          Ineficiência em processos mecânicos. Uma ação que deveria ser instantânea (receber e atualizar) torna-se um processo burocrático que trava o atendimento de quem realmente precisa de ajuda com pesquisas.
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
                    com possibilidade de reserva remota garantida, automação de devoluções e relatórios gerenciais 
                    para otimizar a gestão do acervo e reduzir deslocamentos desnecessários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Benchmarking – Repertório */}
        <section id="section-6" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Benchmarking – Repertório
              </h2>
              
              <div className="space-y-8">
                {/* Seção 1: Repertório Visual e Referências */}
                <div className="bg-white rounded-lg p-8 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                  <div className="flex items-center space-x-3 mb-6">
                    <Search className="w-6 h-6" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="font-medium text-xl" style={{ color: 'var(--title-color)' }}>
                      Repertório Visual e Referências
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Para construir uma solução eficaz, realizamos uma análise estratégica de dois sistemas distintos. 
                    O <strong>Pergamum</strong>, sistema tradicional amplamente utilizado em bibliotecas universitárias brasileiras, 
                    foi estudado para compreender as limitações e pontos de fricção que dificultam a experiência do usuário nos 
                    modelos atuais. Por outro lado, o <strong>Skoob</strong>, plataforma digital voltada para organização de leitura 
                    pessoal, serviu como inspiração visual e conceitual, demonstrando como uma interface moderna, intuitiva e 
                    socialmente engajadora pode transformar a relação do usuário com a gestão de livros. Esse benchmarking 
                    comparativo nos permitiu identificar oportunidades de diferenciação e estabelecer os pilares do OpenPages: 
                    robustez acadêmica aliada à experiência de uso simplificada.
                  </p>
                </div>

                {/* Seção 2: Tabela Comparativa */}
                <div className="bg-white rounded-lg p-8 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                  <div className="flex items-center space-x-3 mb-6">
                    <Layers className="w-6 h-6" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="font-medium text-xl" style={{ color: 'var(--title-color)' }}>
                      Referências e Comparação de Interfaces
                    </h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2" style={{ borderColor: 'var(--primary-color)' }}>
                          <th className="text-left p-4 font-medium" style={{ color: 'var(--title-color)' }}>Critério</th>
                          <th className="text-center p-4 font-medium bg-green-50" style={{ color: 'var(--primary-color)' }}>
                            <div className="flex flex-col items-center space-y-3">
                              <img 
                                src="/assets/Logo Benchmarks/Logo - OpenPages.svg" 
                                alt="OpenPages Logo" 
                                className="h-16 w-auto object-contain"
                              />
                              <span>OpenPages (Nosso P.I.)</span>
                            </div>
                          </th>
                          <th className="text-center p-4 font-medium text-gray-700">
                            <div className="flex flex-col items-center space-y-3">
                              <img 
                                src="/assets/Logo Benchmarks/Logo - Pergamum.png" 
                                alt="Pergamum Logo" 
                                className="h-16 w-auto object-contain"
                              />
                              <span>Pergamum (Tradicional)</span>
                            </div>
                          </th>
                          <th className="text-center p-4 font-medium text-gray-700">
                            <div className="flex flex-col items-center space-y-3">
                              <img 
                                src="/assets/Logo Benchmarks/Skoob.png" 
                                alt="Skoob Logo" 
                                className="h-16 w-auto object-contain"
                              />
                              <span>Skoob (Inspiração Visual)</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 font-medium text-gray-700">Foco Principal</td>
                          <td className="p-4 bg-green-50">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              Empréstimo rápido e objetivo
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Sistema acadêmico otimizado</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            Gestão complexa de acervo
                            <p className="text-sm text-gray-500 mt-1">Foco administrativo</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            Organização de leitura pessoal
                            <p className="text-sm text-gray-500 mt-1">Rede social literária</p>
                          </td>
                        </tr>
                        
                        <tr className="border-b">
                          <td className="p-4 font-medium text-gray-700">Interface (UI)</td>
                          <td className="p-4 bg-green-50">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              Minimalista e intuitiva
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Design limpo e moderno</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            Densa e burocrática
                            <p className="text-sm text-gray-500 mt-1">Interface desatualizada</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            Moderna e social
                            <p className="text-sm text-gray-500 mt-1">Visualmente atrativa</p>
                          </td>
                        </tr>
                        
                        <tr className="border-b">
                          <td className="p-4 font-medium text-gray-700">Busca por Curso</td>
                          <td className="p-4 bg-green-50">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              ✓ Filtro por Curso (DSM/ADS)
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Busca contextualizada</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✗ Busca genérica por texto
                            <p className="text-sm text-gray-500 mt-1">Sem filtros acadêmicos</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✗ Não aplicável
                            <p className="text-sm text-gray-500 mt-1">Foco pessoal, não acadêmico</p>
                          </td>
                        </tr>
                        
                        <tr className="border-b">
                          <td className="p-4 font-medium text-gray-700">Feedback Visual de Status</td>
                          <td className="p-4 bg-green-50">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              ✓ Status com cores (Verde/Vermelho)
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Identificação imediata</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✗ Tabela complexa
                            <p className="text-sm text-gray-500 mt-1">Informação confusa</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✓ Visual claro
                            <p className="text-sm text-gray-500 mt-1">Mas sem empréstimo físico</p>
                          </td>
                        </tr>
                        
                        <tr className="border-b">
                          <td className="p-4 font-medium text-gray-700">Facilidade de Solicitação</td>
                          <td className="p-4 bg-green-50">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              ✓ Solicitação em 1 clique
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Processo otimizado</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✗ Reserva burocrática
                            <p className="text-sm text-gray-500 mt-1">Múltiplas etapas</p>
                          </td>
                          <td className="p-4 text-gray-600">
                            ✗ Não faz empréstimo físico
                            <p className="text-sm text-gray-500 mt-1">Apenas organização virtual</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Seção 3: Análise Comparativa */}
                <div className="bg-white rounded-lg p-8 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-6 h-6" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="font-medium text-xl" style={{ color: 'var(--title-color)' }}>
                      Análise Comparativa
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Os sistemas tradicionais como o <strong>Pergamum</strong>, apesar de tecnicamente funcionais, 
                      apresentam uma barreira significativa de usabilidade. A interface densa, carregada de informações 
                      técnicas e processos burocráticos, transforma uma tarefa simples, encontrar e reservar um livro, 
                      em uma jornada complexa que exige múltiplos cliques, conhecimento prévio do sistema e paciência 
                      para navegar por tabelas confusas. Essa complexidade operacional não apenas frustra o usuário final, 
                      mas também gera ineficiência administrativa, sobrecarregando os bibliotecários com demandas que 
                      poderiam ser resolvidas de forma autônoma pelos alunos através de uma interface intuitiva. O resultado 
                      é um ciclo vicioso: usuários evitam o sistema digital e recorrem ao atendimento presencial, perpetuando 
                      as filas e a insatisfação institucional.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      O <strong>OpenPages</strong> foi concebido para romper esse paradigma, unindo a robustez e 
                      confiabilidade necessárias a um sistema acadêmico com a experiência de uso simplificada e 
                      visualmente agradável inspirada em plataformas modernas como o <strong>Skoob</strong>. Nossa 
                      solução elimina camadas desnecessárias de burocracia digital, implementando funcionalidades 
                      estratégicas como <strong>busca filtrada por curso</strong> (relevância contextual), 
                      <strong>feedback visual imediato</strong> através de cores (disponibilidade clara) e 
                      <strong>solicitação em um único clique</strong> (redução de fricção). A <strong>diminuição da 
                      burocracia</strong> não é apenas um benefício estético, mas o valor central da nossa proposta: 
                      devolver ao usuário o controle sobre sua jornada acadêmica, transformando a biblioteca de um 
                      obstáculo logístico em uma ferramenta eficiente de apoio ao aprendizado. Ao equilibrar 
                      funcionalidade técnica com design centrado no usuário, o OpenPages redefine o que um sistema 
                      de biblioteca universitária pode e deve ser.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mt-6">
                      <h4 className="font-medium text-blue-800 mb-3">Diferencial Competitivo</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500"></div>
                          <p className="text-blue-700 text-sm">
                            <strong>Vs. Pergamum:</strong> Substituímos a complexidade burocrática por simplicidade operacional, 
                            mantendo a confiabilidade institucional
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500"></div>
                          <p className="text-blue-700 text-sm">
                            <strong>Vs. Skoob:</strong> Agregamos funcionalidade de empréstimo físico real e contexto 
                            acadêmico a uma interface moderna e intuitiva
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500"></div>
                          <p className="text-blue-700 text-sm">
                            <strong>Resultado:</strong> Sistema híbrido que atende necessidades institucionais sem 
                            sacrificar a experiência do usuário
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Rabiscoframe – Arquitetura da Informação */}
        <section id="section-7" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Rabiscoframe – Arquitetura da Informação
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Esboços iniciais representando a estrutura e organização das informações no sistema, definindo a hierarquia e o fluxo de conteúdo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Card key={num} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/assets/Rabiscoframe/rabiscoframe${num}.jpeg`}
                        alt={`Rabiscoframe ${num}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">Rabiscoframe #{num}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Wireframe – Fluxo Navegacional */}
        <section id="section-8" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Wireframe – Fluxo Navegacional
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Representação de alta fidelidade das telas do sistema, demonstrando o caminho percorrido pelo usuário através das diferentes interfaces e funcionalidades. Wireframes desenvolvidos com base nos esboços iniciais (rabiscoframes).
              </p>
              
              <div className="space-y-16">
                {/* TELA 1: HOME */}
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-lg">1</span>
                      </div>
                      <h3 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
                        Tela 1 - Home (Página Inicial)
                      </h3>
                    </div>
                  </div>
                  
                  <Card className="overflow-hidden bg-white border-2 border-gray-300">
                    {/* Wireframe HOME */}
                    <div className="bg-gray-50 p-8">
                      {/* Navbar */}
                      <div className="bg-white border-2 border-gray-400 rounded-lg p-4 mb-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-300 rounded"></div>
                            <span className="font-semibold text-gray-700">OpenPages</span>
                          </div>
                          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                            <span className="font-medium">Home</span>
                            <span>Cursos</span>
                            <span>Meus Empréstimos</span>
                            <span>Sobre</span>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="bg-white border-2 border-gray-400 rounded-lg p-12 text-center mb-8">
                        <div className="max-w-3xl mx-auto space-y-6">
                          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
                          <div className="h-4 bg-gray-200 rounded w-full mx-auto"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
                          
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                            <div className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium w-full sm:w-auto text-center">
                              Explorar Cursos
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 rounded-lg font-medium w-full sm:w-auto text-center">
                              Meus Empréstimos
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Cards Inferiores */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 text-center space-y-3">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
                          <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
                        </div>
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 text-center space-y-3">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
                          <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
                        </div>
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 text-center space-y-3">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
                          <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Ponto de entrada do usuário com acesso rápido aos cursos e empréstimos
                  </p>
                </div>
                
                {/* Seta indicativa */}
                <div className="flex justify-center">
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
                
                {/* TELA 2: LISTAGEM DE CURSOS */}
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-lg">2</span>
                      </div>
                      <h3 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
                        Tela 2 - Listagem de Cursos
                      </h3>
                    </div>
                  </div>
                  
                  <Card className="overflow-hidden bg-white border-2 border-gray-300">
                    {/* Wireframe CURSOS */}
                    <div className="bg-gray-50 p-8">
                      {/* Navbar simplificada */}
                      <div className="bg-white border-2 border-gray-400 rounded-lg p-4 mb-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-300 rounded"></div>
                            <span className="font-semibold text-gray-700">OpenPages</span>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Cabeçalho */}
                      <div className="text-center mb-8 space-y-3">
                        <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
                      </div>
                      
                      {/* Grid de Cursos */}
                      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Curso 1 */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                            <div>
                              <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>
                              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="flex items-center justify-between pt-2">
                              <div className="h-4 bg-gray-200 rounded w-24"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Curso 2 */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                            <div>
                              <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>
                              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="flex items-center justify-between pt-2">
                              <div className="h-4 bg-gray-200 rounded w-24"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Curso 3 */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                            <div>
                              <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>
                              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="flex items-center justify-between pt-2">
                              <div className="h-4 bg-gray-200 rounded w-24"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Curso 4 */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                            <div>
                              <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>
                              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="flex items-center justify-between pt-2">
                              <div className="h-4 bg-gray-200 rounded w-24"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Seleção de curso para visualizar livros disponíveis
                  </p>
                </div>
                
                {/* Seta indicativa */}
                <div className="flex justify-center">
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
                
                {/* TELA 3: DETALHES E EMPRÉSTIMO */}
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-lg">3</span>
                      </div>
                      <h3 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
                        Tela 3 - Detalhes do Livro e Solicitação de Empréstimo
                      </h3>
                    </div>
                  </div>
                  
                  <Card className="overflow-hidden bg-white border-2 border-gray-300">
                    {/* Wireframe DETALHES */}
                    <div className="bg-gray-50 p-8">
                      {/* Navbar simplificada */}
                      <div className="bg-white border-2 border-gray-400 rounded-lg p-4 mb-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gray-300 rounded"></div>
                              <span className="font-semibold text-gray-700">OpenPages</span>
                            </div>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Split View: Detalhes + Empréstimo */}
                      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Coluna Esquerda: Detalhes do Livro */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 space-y-6">
                          <div className="space-y-4">
                            {/* Título do Livro */}
                            <div>
                              <div className="h-7 bg-gray-300 rounded w-4/5 mb-2"></div>
                              <div className="h-7 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            
                            {/* Autor */}
                            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                            
                            {/* Imagem placeholder */}
                            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                            
                            {/* Campos de informação */}
                            <div className="space-y-3 pt-4">
                              <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                                <div className="h-4 bg-gray-300 rounded w-32"></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                                <div className="h-4 bg-gray-300 rounded w-24"></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                                <div className="h-4 bg-gray-300 rounded w-36"></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                                <div className="h-4 bg-gray-300 rounded w-28"></div>
                              </div>
                            </div>
                            
                            {/* Tag Disponível */}
                            <div className="pt-4">
                              <div className="inline-block bg-green-100 border-2 border-green-500 px-4 py-2 rounded-lg">
                                <span className="text-green-700 font-medium">● Disponível</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Coluna Direita: Card de Empréstimo */}
                        <div className="bg-white border-2 border-gray-400 rounded-lg p-6 space-y-6 lg:sticky lg:top-8 h-fit">
                          <div className="space-y-4">
                            {/* Título */}
                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                            
                            {/* Aviso */}
                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                              <div className="h-4 bg-blue-200 rounded w-full mb-2"></div>
                              <div className="h-4 bg-blue-200 rounded w-4/5"></div>
                            </div>
                            
                            {/* Informações do empréstimo */}
                            <div className="space-y-3 pt-2">
                              <div className="h-4 bg-gray-200 rounded w-full"></div>
                              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                            
                            {/* Checkbox */}
                            <div className="flex items-start space-x-3 pt-4">
                              <div className="w-5 h-5 border-2 border-gray-400 rounded flex-shrink-0 mt-0.5"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                              </div>
                            </div>
                            
                            {/* Botão */}
                            <div className="pt-4">
                              <div className="bg-gray-700 text-white py-3 rounded-lg text-center font-medium">
                                Confirmar Empréstimo
                              </div>
                            </div>
                            
                            {/* Link adicional */}
                            <div className="text-center pt-2">
                              <div className="h-3 bg-gray-200 rounded w-32 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Visualização completa do livro com ação de solicitação de empréstimo
                  </p>
                </div>
              </div>
              
              {/* Resumo do Fluxo */}
              <div className="mt-16 bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
                <h3 className="font-medium text-blue-800 mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  Resumo do Fluxo Navegacional
                </h3>
                <div className="space-y-3 text-blue-700">
                  <p className="text-sm">
                    <strong>1. Home →</strong> Usuário acessa a página inicial e visualiza opções principais
                  </p>
                  <p className="text-sm">
                    <strong>2. Listagem de Cursos →</strong> Seleciona o curso desejado para ver livros relacionados
                  </p>
                  <p className="text-sm">
                    <strong>3. Detalhes e Empréstimo →</strong> Visualiza informações completas do livro e confirma o empréstimo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Style Guide – Padrões do Projeto */}
        <section id="section-9" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-4 text-center" style={{ color: 'var(--title-color)' }}>
                Style Guide – Padrões do Projeto
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Definição dos padrões visuais, cores, tipografia e componentes do sistema
              </p>
              
              <div className="space-y-8">
                {/* Paleta de Cores */}
                <Card className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Palette className="w-6 h-6" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                      Paleta de Cores
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#45483b' }}></div>
                      <p className="text-sm font-medium text-gray-900">#45483b</p>
                      <p className="text-xs text-gray-600">Cor Primária</p>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#34362d' }}></div>
                      <p className="text-sm font-medium text-gray-900">#34362d</p>
                      <p className="text-xs text-gray-600">Títulos</p>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg mb-3 border" style={{ backgroundColor: '#f6f6f6' }}></div>
                      <p className="text-sm font-medium text-gray-900">#f6f6f6</p>
                      <p className="text-xs text-gray-600">Texto Claro</p>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg mb-3 border" style={{ backgroundColor: '#fcf9f3' }}></div>
                      <p className="text-sm font-medium text-gray-900">#fcf9f3</p>
                      <p className="text-xs text-gray-600">Fundo</p>
                    </div>
                  </div>
                </Card>
                
                {/* Tipografia */}
                <Card className="p-8">
                  <h3 className="font-medium mb-6" style={{ color: 'var(--title-color)' }}>
                    Tipografia
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h1 style={{ color: 'var(--title-color)' }}>Heading 1 - Design System</h1>
                      <p className="text-xs text-gray-500 mt-1">Usado para títulos principais</p>
                    </div>
                    <div>
                      <h2 style={{ color: 'var(--title-color)' }}>Heading 2 - Seções</h2>
                      <p className="text-xs text-gray-500 mt-1">Usado para títulos de seção</p>
                    </div>
                    <div>
                      <h3 style={{ color: 'var(--title-color)' }}>Heading 3 - Subsections</h3>
                      <p className="text-xs text-gray-500 mt-1">Usado para subtítulos</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Body Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p className="text-xs text-gray-500 mt-1">Usado para corpo de texto</p>
                    </div>
                  </div>
                </Card>
                
                {/* Componentes */}
                <Card className="p-8">
                  <h3 className="font-medium mb-6" style={{ color: 'var(--title-color)' }}>
                    Componentes
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Botões</p>
                      <div className="flex flex-wrap gap-4">
                        <Button style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color-light)' }}>
                          Botão Primário
                        </Button>
                        <Button variant="outline">
                          Botão Outline
                        </Button>
                        <Button variant="secondary">
                          Botão Secundário
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Badges</p>
                      <div className="flex flex-wrap gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Cards</p>
                      <Card className="p-6 max-w-sm">
                        <h4 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
                          Card Title
                        </h4>
                        <p className="text-sm text-gray-600">
                          Este é um exemplo de card usado no design system.
                        </p>
                      </Card>
                    </div>
                  </div>
                </Card>
                
                {/* Espaçamento e Ícones */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <h3 className="font-medium mb-6" style={{ color: 'var(--title-color)' }}>
                      Espaçamento
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                        <p className="text-sm text-gray-600">8px - Espaçamento pequeno</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 h-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                        <p className="text-sm text-gray-600">16px - Espaçamento médio</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                        <p className="text-sm text-gray-600">24px - Espaçamento grande</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-8">
                    <h3 className="font-medium mb-6" style={{ color: 'var(--title-color)' }}>
                      Ícones
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary-color)' }} />
                        <p className="text-xs text-gray-600">Book</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary-color)' }} />
                        <p className="text-xs text-gray-600">Users</p>
                      </div>
                      <div className="text-center">
                        <Search className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary-color)' }} />
                        <p className="text-xs text-gray-600">Search</p>
                      </div>
                      <div className="text-center">
                        <Target className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary-color)' }} />
                        <p className="text-xs text-gray-600">Target</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Protótipo de Alta Fidelidade – Navegável */}
        <section id="section-10" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Protótipo de Alta Fidelidade – Navegável
              </h2>
              
              <div className="relative">
                {/* Card Principal */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: 'var(--primary-color)' }}>
                  {/* Header com gradiente */}
                  <div className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-400 p-8 text-white text-center">
                    <div className="inline-flex items-center justify-center mb-6">
                      <img src="/assets/Logo Benchmarks/Logo - OpenPages.svg" alt="OpenPages Logo" className="h-12 w-auto object-contain" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Protótipo Interativo de Alta Fidelidade
                    </h3>
                    <p className="text-white/90 text-sm max-w-2xl mx-auto">
                      Experimente o fluxo completo do sistema OpenPages
                    </p>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6 text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1" style={{ color: 'var(--title-color)' }}>Navegação completa</p>
                        <p className="text-sm text-gray-600">Explore todas as telas e funcionalidades interativas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-8 text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1" style={{ color: 'var(--title-color)' }}>Visualização em tela cheia</p>
                        <p className="text-sm text-gray-600">Experiência imersiva com o protótipo em modo apresentação</p>
                      </div>
                    </div>

                    {/* Botão de ação principal */}
                    <a 
                      href="https://www.figma.com/make/V7WnJLchPWykGznNYiwIDV/Prototipo-Navegavel-Open-Pages?node-id=0-1&p=f&fullscreen=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-full px-8 py-5 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                      {/* Efeito de brilho ao hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      
                      <Eye className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Abrir Protótipo no Figma</span>
                      <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>

                    {/* Badge informativo */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Abre em nova aba • Modo apresentação</span>
                    </div>
                  </div>
                </div>

                {/* Decorações */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Avaliação Heurística – 10 Heurísticas de Nielsen */}
        <section id="section-11" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-12 text-center" style={{ color: 'var(--title-color)' }}>
                Avaliação Heurística – 10 Heurísticas de Nielsen
              </h2>

              <div className="mb-8">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    A Avaliação Heurística mostrou que muitos dos problemas vividos pelos alunos não estavam na falta de recursos da biblioteca, 
                    mas sim na forma como a informação era apresentada. Ficou evidente que a maior parte das dificuldades (deslocamentos desnecessários, 
                    buscas frustradas, erros simples e dúvidas frequentes) surgem porque os sistemas atuais não oferecem clareza, previsibilidade ou orientação adequada.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Heurística 1 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                        1
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Visibilidade do Status do Sistema
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Em sistemas tradicionais, o usuário não sabe se o livro está realmente na estante ou se foi extraviado/separado, pois o status é apenas texto estático em tabelas densas. Além disso, não há feedback visual claro sobre prazos de devolução próximos.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-red-100 text-red-700 border-red-300">Alta</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Implementação de Badges Coloridos (Verde para "Disponível", Vermelho para "Atrasado", Amarelo para "Devolução Próxima") nos cards dos livros e no painel "Meus Empréstimos", oferecendo feedback visual imediato sobre a situação do acervo e do usuário.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 2 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-medium text-sm">
                        2
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Correspondência entre o Sistema e o Mundo Real
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Bibliotecas antigas utilizam terminologias técnicas (ex: "Acervo Circulante", "Classificação Cutter", "Tombo") e obrigam a busca por códigos que não fazem parte do vocabulário do aluno.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Adoção de linguagem natural e organização baseada no modelo mental do estudante. Substituímos a busca por códigos pela Filtragem por Curso (ex: "Livros de ADS", "Livros de Gestão"), aproximando a organização digital da grade curricular real do aluno.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 3 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                        3
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Controle e Liberdade do Usuário
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Em fluxos de reserva antigos, se o usuário seleciona o livro errado, muitas vezes precisa reiniciar todo o processo de busca, sem opção fácil de "voltar" ou desfazer.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Navegação fluida com botão de "Voltar" visível em todas as telas de detalhes e a possibilidade de cancelar uma solicitação de empréstimo antes da confirmação final no balcão, garantindo que o usuário não se sinta "preso" em uma ação errada.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 4 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-medium text-sm">
                        4
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Consistência e Padrões
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Diferentes páginas de sistemas legados costumam ter layouts, fontes e botões despadronizados, o que aumenta a curva de aprendizado.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-green-100 text-green-700 border-green-300">Baixa</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Criação de um Style Guide (Design System) rigoroso. Botões de ação (primários), tipografia, ícones e espaçamentos seguem o mesmo padrão em todas as telas (Home, Busca, Perfil), garantindo que o usuário aprenda a usar a interface uma única vez.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 5 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-medium text-sm">
                        5
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Prevenção de Erros
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Usuários frequentemente se deslocam até a biblioteca para buscar um livro que já está emprestado ou tentam renovar livros com multas pendentes, gerando frustração no balcão.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-red-100 text-red-700 border-red-300">Alta</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Restrições visuais na interface. O botão "Solicitar Empréstimo" fica desabilitado/inativo se o livro não estiver disponível ou se o usuário já tiver atingido o limite de empréstimos, prevenindo a criação de expectativas falsas e viagens perdidas.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 6 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-medium text-sm">
                        6
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Reconhecimento em vez de Memorização
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">O aluno precisa memorizar o título exato ou o nome completo do autor para encontrar um livro em sistemas de busca baseados apenas em texto (CLI ou tabelas).</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Uso extensivo de Capas dos Livros na interface. O usuário reconhece visualmente o livro que o professor mostrou em sala de aula, sem precisar decorar a grafia exata do título, reduzindo a carga cognitiva.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 7 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-medium text-sm">
                        7
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Flexibilidade e Eficiência de Uso
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Tanto calouros quanto veteranos (usuários experientes) são obrigados a passar pelo mesmo fluxo de busca demorado e genérico.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Criação de Aceleradores (Atalhos) na Home. Cards grandes com os nomes dos cursos ("ADS", "DSM") permitem que o aluno vá direto ao acervo de seu interesse com um clique, sem precisar digitar nada na barra de busca.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 8 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-medium text-sm">
                        8
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Design Estético e Minimalista
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Interfaces como a do Pergamum apresentam excesso de informação irrelevante para o aluno (código de barras, data de aquisição, ID do sistema), poluindo a visão.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Adoção de uma interface Clean e Minimalista. Exibimos apenas o essencial para a tomada de decisão do aluno: Capa, Título, Autor e Status de Disponibilidade. Todo o ruído administrativo foi removido da visão do estudante.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 9 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-medium text-sm">
                        9
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Ajudar os Usuários a Reconhecer, Diagnosticar e Recuperar Erros
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Mensagens de erro genéricas como "Falha no sistema" ou "Operação inválida" que não explicam o motivo da falha.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Média</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Mensagens de feedback claras e amigáveis. Exemplo: Se a busca não retornar resultados, o sistema sugere: "Não encontramos este livro. Verifique a ortografia ou tente buscar pela categoria do curso", guiando o usuário para a correção.</p>
                    </div>
                  </div>
                </Card>
                
                {/* Heurística 10 */}
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-medium text-sm">
                        10
                      </div>
                      <h3 className="font-medium" style={{ color: 'var(--title-color)' }}>
                        Ajuda e Documentação
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Problema</h4>
                      <p className="text-sm text-gray-600">Falta de instruções sobre regras de empréstimo (prazos, multas, quantidade de livros) dentro da própria plataforma.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Severidade</h4>
                      <Badge className="bg-green-100 text-green-700 border-green-300">Baixa</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm" style={{ color: 'var(--title-color)' }}>Solução</h4>
                      <p className="text-sm text-gray-600">Inclusão de Microcopy (textos explicativos) contextual. No momento da confirmação do empréstimo, um card exibe claramente os termos: "Prazo de devolução: 15 dias corridos", dispensando a necessidade de o aluno consultar um manual externo ou perguntar ao bibliotecário.</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    A Avaliação Heurística mostrou que muitos dos problemas vividos pelos alunos não estavam na falta de recursos da biblioteca, 
                    mas sim na forma como a informação era apresentada. Ficou evidente que a maior parte das dificuldades (deslocamentos desnecessários, 
                    buscas frustradas, erros simples e dúvidas frequentes) surgem porque os sistemas atuais não oferecem clareza, previsibilidade ou orientação adequada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 14: Conclusão */}
        <section id="section-12" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-12" style={{ color: 'var(--title-color)' }}>
                Conclusão
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-12 mb-12">
                <Target className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--primary-color)' }} />
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  Esse projeto nos mostrou que tecnologia também é um ato de cuidado. Ao desenvolver o Open Pages, 
                  entendemos que um sistema de reserva vai muito além de organizar livros ele existe para respeitar 
                  o tempo, a autonomia e a dignidade de cada estudante que depende desse acesso no seu dia a dia.
                </p>

                <h3 className="text-2xl font-medium mb-6 mt-12" style={{ color: 'var(--title-color)' }}>
                  Impacto da Solução
                </h3>
                
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
              </div>

              {/* Equipe do Projeto */}
              <div className="mt-20 pt-16">
                <h3 className="text-2xl font-medium mb-2 text-center" style={{ color: 'var(--title-color)' }}>
                  Equipe do Projeto
                </h3>
                <p className="text-center text-gray-600 mb-8">Desenvolvido por</p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-base font-medium mb-1" style={{ color: 'var(--title-color)' }}>
                        Pedro H. Xavier Constancio
                      </h4>
                      <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary-color)' }}>Product Owner / Dev</p>
                      <p className="text-sm text-gray-600">
                        Visão do produto, priorização, implementação back-end e integração.
                      </p>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-base font-medium mb-1" style={{ color: 'var(--title-color)' }}>
                        Iago Rodrigues Pinheiro
                      </h4>
                      <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary-color)' }}>Desenvolvedor</p>
                      <p className="text-sm text-gray-600">
                        Implementação front-end, UX/UI e prototipação.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Mensagem Final */}
              <div className="mt-12">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium text-center">
                    Este projeto demonstra a importância da análise centrada no usuário para identificar 
                    problemas reais e propor soluções efetivas que agreguem valor ao ambiente acadêmico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-gray-500 border-t border-gray-200">
          Open Pages - 3° Semestre 2025
        </footer>
      </div>
    </div>
  );
}
