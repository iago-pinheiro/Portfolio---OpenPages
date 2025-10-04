import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { BookOpen, Search, Calendar, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { CourseCard } from "./course-card";
import { courses } from "../data/mock-data";

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  availability: 'Disponível' | 'Indisponível';
  courseId: string;
  keywords?: string;
}

interface LoanRequest {
  id: string;
  bookId: string;
  bookTitle: string;
  requestDate: string;
  status: 'Aguardando retirada' | 'Retirado' | 'Devolvido';
  dueDate?: string;
}

interface UserDashboardProps {
  books: Book[];
  user: {
    email: string;
    name: string;
    role: 'user' | 'admin';
  };
  onCourseSelect: (courseId: string) => void;
}

export function UserDashboard({ books, user, onCourseSelect }: UserDashboardProps) {
  const [currentView, setCurrentView] = useState<'courses' | 'history'>('courses');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [loanRequests, setLoanRequests] = useState<LoanRequest[]>([
    {
      id: "1",
      bookId: "1",
      bookTitle: "Clean Code",
      requestDate: "2024-01-15",
      status: "Retirado",
      dueDate: "2024-02-15"
    },
    {
      id: "2", 
      bookId: "2",
      bookTitle: "JavaScript: O Guia Definitivo",
      requestDate: "2024-01-20",
      status: "Aguardando retirada"
    },
    {
      id: "3",
      bookId: "3", 
      bookTitle: "React Up & Running",
      requestDate: "2024-01-10",
      status: "Devolvido",
      dueDate: "2024-02-10"
    }
  ]);

  const handleLoanRequest = (book: Book) => {
    if (book.availability === 'Indisponível') {
      toast.error("Este livro não está disponível no momento");
      return;
    }

    // Check if user already has this book
    const existingRequest = loanRequests.find(
      req => req.bookId === book.id && (req.status === 'Aguardando retirada' || req.status === 'Retirado')
    );

    if (existingRequest) {
      toast.error("Você já possui uma solicitação para este livro");
      return;
    }

    const newRequest: LoanRequest = {
      id: Date.now().toString(),
      bookId: book.id,
      bookTitle: book.title,
      requestDate: new Date().toISOString().split('T')[0],
      status: "Aguardando retirada"
    };

    setLoanRequests(prev => [...prev, newRequest]);
    toast.success("Solicitação de empréstimo enviada com sucesso!");
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setCurrentView('courses');
  };

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const filteredBooks = selectedCourse 
    ? books.filter(book => 
        book.courseId === selectedCourse &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         book.author.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const selectedCourseData = courses.find(course => course.id === selectedCourse);

  const renderCourseView = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-medium" style={{ color: 'var(--title-color)' }}>
          Bem-vindo, {user.name}!
        </h1>
        <p className="text-gray-600">
          Explore nosso acervo acadêmico e solicite empréstimos online
        </p>
      </div>

      {!selectedCourse ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                code={course.code}
                title={course.title}
                description={course.description}
                onClick={() => handleCourseClick(course.id)}
              />
            ))}
          </div>

          {/* Quick Search */}
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="font-medium mb-4" style={{ color: 'var(--title-color)' }}>
              Busca Rápida
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Pesquisar por título ou autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-lg border-gray-300"
              />
            </div>
            
            {searchTerm && (
              <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                {filteredBooks.slice(0, 5).map((book) => {
                  const course = courses.find(c => c.id === book.courseId);
                  return (
                    <div key={book.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{book.title}</p>
                        <p className="text-sm text-gray-600">{book.author} • {course?.code}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleLoanRequest(book)}
                        disabled={book.availability === 'Indisponível'}
                        className="rounded-lg"
                        style={{ 
                          backgroundColor: book.availability === 'Disponível' ? 'var(--primary-color)' : undefined,
                          color: book.availability === 'Disponível' ? 'var(--text-color-light)' : undefined
                        }}
                      >
                        {book.availability === 'Disponível' ? 'Solicitar' : 'Indisponível'}
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToCourses}
              className="text-primary hover:text-primary/80 font-medium"
            >
              ← Voltar aos Cursos
            </button>
          </div>

          <Card className="p-6">
            <div className="text-center space-y-4 mb-6">
              <h2 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
                {selectedCourseData?.code}
              </h2>
              <p className="text-gray-600">{selectedCourseData?.title}</p>
              
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar livros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-lg border-gray-300"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200">
              <Table>
                <TableHeader style={{ backgroundColor: 'var(--primary-color)' }}>
                  <TableRow className="border-b-0">
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Livro</TableHead>
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Autor</TableHead>
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Editora</TableHead>
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Status</TableHead>
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBooks.map((book) => (
                    <TableRow key={book.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.publisher}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={book.availability === 'Disponível' ? 'default' : 'destructive'}
                          className={book.availability === 'Disponível' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                        >
                          {book.availability}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          onClick={() => handleLoanRequest(book)}
                          disabled={book.availability === 'Indisponível'}
                          className="rounded-lg"
                          style={{ 
                            backgroundColor: book.availability === 'Disponível' ? 'var(--primary-color)' : undefined,
                            color: book.availability === 'Disponível' ? 'var(--text-color-light)' : undefined
                          }}
                        >
                          {book.availability === 'Disponível' ? 'Solicitar Empréstimo' : 'Indisponível'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );

  const renderHistoryView = () => (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6" style={{ color: 'var(--title-color)' }}>
        Histórico de Solicitações
      </h2>
      
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Table>
          <TableHeader style={{ backgroundColor: 'var(--primary-color)' }}>
            <TableRow className="border-b-0">
              <TableHead style={{ color: 'var(--text-color-light)' }}>Livro</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Data Solicitação</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Status</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Prazo Devolução</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanRequests.map((request) => (
              <TableRow key={request.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{request.bookTitle}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {new Date(request.requestDate).toLocaleDateString('pt-BR')}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      request.status === 'Retirado' ? 'default' :
                      request.status === 'Aguardando retirada' ? 'secondary' :
                      'outline'
                    }
                    className={
                      request.status === 'Retirado' ? 'bg-blue-100 text-blue-700' :
                      request.status === 'Aguardando retirada' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }
                  >
                    {request.status === 'Retirado' && <Clock className="h-3 w-3 mr-1" />}
                    {request.status === 'Aguardando retirada' && <BookOpen className="h-3 w-3 mr-1" />}
                    {request.status === 'Devolvido' && <CheckCircle className="h-3 w-3 mr-1" />}
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {request.dueDate ? (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {new Date(request.dueDate).toLocaleDateString('pt-BR')}
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {loanRequests.length === 0 && (
        <div className="text-center py-8">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Nenhuma solicitação encontrada</p>
          <p className="text-sm text-gray-400">Suas solicitações de empréstimo aparecerão aqui</p>
        </div>
      )}
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setCurrentView('courses')}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            currentView === 'courses'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Explorar Livros
        </button>
        <button
          onClick={() => setCurrentView('history')}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            currentView === 'history'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Meu Histórico
        </button>
      </div>

      {/* Content */}
      {currentView === 'courses' ? renderCourseView() : renderHistoryView()}
    </div>
  );
}