import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";
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

interface CoursePageProps {
  courseId: string;
  books: Book[];
  user: {
    email: string;
    name: string;
    role: 'user' | 'admin';
  };
  onBackToCourses: () => void;
  onSuggestionClick: () => void;
}

export function CoursePage({ courseId, books, user, onBackToCourses, onSuggestionClick }: CoursePageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const course = courses.find(c => c.id === courseId);
  const filteredBooks = books.filter(book => 
    book.courseId === courseId &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleLoanRequest = (book: Book) => {
    if (book.availability === 'Indisponível') {
      toast.error("Este livro não está disponível no momento");
      return;
    }

    toast.success(`Solicitação de empréstimo para "${book.title}" enviada com sucesso!`);
  };

  if (!course) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--title-color)' }}>
          Curso não encontrado
        </h2>
        <Button onClick={onBackToCourses}>
          Voltar aos Cursos
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBackToCourses}
        className="text-primary hover:text-primary/80 font-medium"
      >
        ← Voltar aos Cursos
      </button>

      {/* Course Info */}
      <Card className="p-6 bg-white border border-gray-200">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium" style={{ color: 'var(--title-color)' }}>
            {course.code}
          </h1>
          <p className="text-gray-600">{course.title}</p>
          
          <div className="bg-gray-50 rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="font-medium mb-2" style={{ color: 'var(--title-color)' }}>
              Sobre o Curso
            </h3>
            <p className="text-sm text-gray-600">
              {course.code === 'DSM' && 'Curso focado no desenvolvimento de aplicações para múltiplas plataformas, abrangendo tecnologias web, mobile e desktop.'}
              {course.code === 'ADS' && 'Curso voltado para análise, projeto e desenvolvimento de sistemas computacionais para diferentes segmentos.'}
              {course.code === 'GPI' && 'Curso dedicado à gestão eficiente de processos produtivos industriais e melhoria contínua.'}
              {course.code === 'GRH' && 'Curso focado na gestão estratégica de pessoas e desenvolvimento organizacional.'}
            </p>
          </div>
        </div>
      </Card>

      {/* Books Section */}
      <Card className="p-6 bg-white border border-gray-200">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
              Livros Disponíveis
            </h2>
            
            <Button
              onClick={onSuggestionClick}
              className="flex items-center gap-2"
              style={{ 
                backgroundColor: 'var(--primary-color)',
                color: 'var(--text-color-light)'
              }}
            >
              <Heart className="h-4 w-4" />
              Sugerir Livro
            </Button>
          </div>

          {/* Search */}
          <div className="max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Pesquisar livros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg border-gray-300"
            />
          </div>

          {/* Books Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <Table>
              <TableHeader style={{ backgroundColor: 'var(--primary-color)' }}>
                <TableRow className="border-b-0">
                  <TableHead style={{ color: 'var(--text-color-light)' }}>Livro</TableHead>
                  <TableHead style={{ color: 'var(--text-color-light)' }}>Autor</TableHead>
                  <TableHead style={{ color: 'var(--text-color-light)' }}>Editora</TableHead>
                  <TableHead style={{ color: 'var(--text-color-light)' }}>Edição</TableHead>
                  <TableHead style={{ color: 'var(--text-color-light)' }}>Status</TableHead>
                  {user.role === 'user' && (
                    <TableHead style={{ color: 'var(--text-color-light)' }}>Ação</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.publisher}</TableCell>
                    <TableCell>{book.edition}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={book.availability === 'Disponível' ? 'default' : 'destructive'}
                        className={book.availability === 'Disponível' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                      >
                        {book.availability}
                      </Badge>
                    </TableCell>
                    {user.role === 'user' && (
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
                    )}
                  </TableRow>
                ))}
                {filteredBooks.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={user.role === 'user' ? 6 : 5} className="text-center py-8 text-gray-500">
                      {searchTerm ? 'Nenhum livro encontrado para esta pesquisa' : 'Nenhum livro cadastrado para este curso'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}