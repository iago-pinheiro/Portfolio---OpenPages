import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { BookPlus, Edit3, Trash2 } from "lucide-react";
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

interface AdminDashboardProps {
  books: Book[];
  onAddBook: (book: Omit<Book, 'id'>) => void;
  onEditBook: (id: string, book: Partial<Book>) => void;
  onDeleteBook: (id: string) => void;
}

type AdminView = 'add' | 'manage';

export function AdminDashboard({ books, onAddBook, onEditBook, onDeleteBook }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState<AdminView>('add');
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publisher: "",
    edition: "",
    courseId: "",
    keywords: "",
    availability: 'Disponível' as const
  });

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newBook.title || !newBook.author || !newBook.courseId) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    onAddBook({
      ...newBook,
      publisher: newBook.publisher || "Não informado",
      edition: newBook.edition || "1ª Edição"
    });

    toast.success("Livro adicionado com sucesso!");
    
    // Reset form
    setNewBook({
      title: "",
      author: "",
      publisher: "",
      edition: "",
      courseId: "",
      keywords: "",
      availability: 'Disponível'
    });
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
  };

  const handleSaveEdit = () => {
    if (!editingBook) return;
    
    onEditBook(editingBook.id, editingBook);
    toast.success("Livro atualizado com sucesso!");
    setEditingBook(null);
  };

  const handleDeleteBook = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este livro?")) {
      onDeleteBook(id);
      toast.success("Livro excluído com sucesso!");
    }
  };

  const menuItems = [
    { id: 'add', label: 'Adicionar Livro', icon: BookPlus },
    { id: 'manage', label: 'Editar/Excluir Livro', icon: Edit3 }
  ];

  const renderAddBookForm = () => (
    <Card className="p-6 bg-white border border-gray-200">
      <h2 className="text-xl font-medium mb-6" style={{ color: 'var(--title-color)' }}>
        Adicionar Novo Livro
      </h2>
      
      <form onSubmit={handleAddBook} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title" style={{ color: 'var(--title-color)' }}>
              Título *
            </Label>
            <Input
              id="title"
              placeholder="Título do livro"
              value={newBook.title}
              onChange={(e) => setNewBook(prev => ({ ...prev, title: e.target.value }))}
              className="rounded-lg border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author" style={{ color: 'var(--title-color)' }}>
              Autor *
            </Label>
            <Input
              id="author"
              placeholder="Nome do autor"
              value={newBook.author}
              onChange={(e) => setNewBook(prev => ({ ...prev, author: e.target.value }))}
              className="rounded-lg border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="publisher" style={{ color: 'var(--title-color)' }}>
              Editora
            </Label>
            <Input
              id="publisher"
              placeholder="Nome da editora"
              value={newBook.publisher}
              onChange={(e) => setNewBook(prev => ({ ...prev, publisher: e.target.value }))}
              className="rounded-lg border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edition" style={{ color: 'var(--title-color)' }}>
              Edição
            </Label>
            <Input
              id="edition"
              placeholder="1ª Edição"
              value={newBook.edition}
              onChange={(e) => setNewBook(prev => ({ ...prev, edition: e.target.value }))}
              className="rounded-lg border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" style={{ color: 'var(--title-color)' }}>
              Curso *
            </Label>
            <Select 
              value={newBook.courseId} 
              onValueChange={(value) => setNewBook(prev => ({ ...prev, courseId: value }))}
            >
              <SelectTrigger className="rounded-lg border-gray-300">
                <SelectValue placeholder="Selecione o curso" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.code} - {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability" style={{ color: 'var(--title-color)' }}>
              Disponibilidade
            </Label>
            <Select 
              value={newBook.availability} 
              onValueChange={(value: 'Disponível' | 'Indisponível') => setNewBook(prev => ({ ...prev, availability: value }))}
            >
              <SelectTrigger className="rounded-lg border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Disponível">Disponível</SelectItem>
                <SelectItem value="Indisponível">Indisponível</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords" style={{ color: 'var(--title-color)' }}>
            Palavras-chave
          </Label>
          <Textarea
            id="keywords"
            placeholder="Palavras-chave separadas por vírgula"
            value={newBook.keywords}
            onChange={(e) => setNewBook(prev => ({ ...prev, keywords: e.target.value }))}
            className="rounded-lg border-gray-300 min-h-[80px] resize-none"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full py-3 rounded-lg"
          style={{ 
            backgroundColor: 'var(--primary-color)',
            color: 'var(--text-color-light)'
          }}
        >
          Adicionar Livro
        </Button>
      </form>
    </Card>
  );

  const renderManageBooks = () => (
    <Card className="p-6 bg-white border border-gray-200">
      <h2 className="text-xl font-medium mb-6" style={{ color: 'var(--title-color)' }}>
        Gerenciar Livros
      </h2>
      
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Table>
          <TableHeader style={{ backgroundColor: 'var(--primary-color)' }}>
            <TableRow className="border-b-0">
              <TableHead style={{ color: 'var(--text-color-light)' }}>Título</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Autor</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Curso</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Status</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => {
              const course = courses.find(c => c.id === book.courseId);
              const isEditing = editingBook?.id === book.id;
              
              return (
                <TableRow key={book.id} className="hover:bg-gray-50">
                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editingBook.title}
                        onChange={(e) => setEditingBook(prev => prev ? { ...prev, title: e.target.value } : null)}
                        className="text-sm"
                      />
                    ) : (
                      book.title
                    )}
                  </TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editingBook.author}
                        onChange={(e) => setEditingBook(prev => prev ? { ...prev, author: e.target.value } : null)}
                        className="text-sm"
                      />
                    ) : (
                      book.author
                    )}
                  </TableCell>
                  <TableCell>{course?.code}</TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Select 
                        value={editingBook.availability} 
                        onValueChange={(value: 'Disponível' | 'Indisponível') => 
                          setEditingBook(prev => prev ? { ...prev, availability: value } : null)
                        }
                      >
                        <SelectTrigger className="w-32 h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Disponível">Disponível</SelectItem>
                          <SelectItem value="Indisponível">Indisponível</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge 
                        variant={book.availability === 'Disponível' ? 'default' : 'destructive'}
                        className={book.availability === 'Disponível' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                      >
                        {book.availability}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {isEditing ? (
                        <>
                          <Button
                            size="sm"
                            onClick={handleSaveEdit}
                            className="h-8 px-2 bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingBook(null)}
                            className="h-8 px-2"
                          >
                            Cancelar
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditBook(book)}
                            className="h-8 px-2"
                          >
                            <Edit3 className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteBook(book.id)}
                            className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'add':
        return renderAddBookForm();
      case 'manage':
        return renderManageBooks();
      default:
        return renderAddBookForm();
    }
  };

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="font-medium mb-4" style={{ color: 'var(--title-color)' }}>
          Painel Administrativo
        </h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as AdminView)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}