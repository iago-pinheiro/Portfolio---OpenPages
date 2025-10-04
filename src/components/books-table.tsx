import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  availability: 'Disponível' | 'Indisponível';
}

interface BooksTableProps {
  courseName: string;
  books: Book[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function BooksTable({ courseName, books, searchTerm, onSearchChange }: BooksTableProps) {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-medium text-center" style={{ color: 'var(--title-color)' }}>
          {courseName}
        </h2>
        <p className="text-center text-gray-600">
          Desenvolvimento de Software Multiplataforma
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Pesquisar livros..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 rounded-full border-gray-300"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader style={{ backgroundColor: 'var(--primary-color)' }}>
            <TableRow className="border-b-0">
              <TableHead style={{ color: 'var(--text-color-light)' }}>Livro</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Autor</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Editora</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Edição</TableHead>
              <TableHead style={{ color: 'var(--text-color-light)' }}>Disponibilidade</TableHead>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" className="rounded-lg">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-gray-600">Página 1 de 1</span>
        <Button variant="outline" size="sm" className="rounded-lg">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}