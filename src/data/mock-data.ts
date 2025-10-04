export const courses = [
  {
    id: "dsm",
    code: "DSM",
    title: "Desenvolvimento de Software Multiplataforma",
    description: "Desenvolvimento de Software Multiplataforma"
  },
  {
    id: "ads", 
    code: "ADS",
    title: "Análise e Desenvolvimento de Sistemas",
    description: "Análise e Desenvolvimento de Sistemas"
  },
  {
    id: "gpi",
    code: "GPI", 
    title: "Gestão da Produção Industrial",
    description: "Gestão da Produção Industrial"
  },
  {
    id: "grh",
    code: "GRH",
    title: "Gestão de Recursos Humanos", 
    description: "Gestão de Recursos Humanos"
  }
];

export const initialBooks = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    edition: "1ª Edição",
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "programação, código limpo, desenvolvimento"
  },
  {
    id: "2", 
    title: "JavaScript: O Guia Definitivo",
    author: "David Flanagan",
    publisher: "O'Reilly",
    edition: "6ª Edição", 
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "javascript, web development, programação"
  },
  {
    id: "3",
    title: "React Up & Running",
    author: "Stoyan Stefanov",
    publisher: "O'Reilly",
    edition: "2ª Edição",
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "react, frontend, javascript, ui"
  },
  {
    id: "4",
    title: "Python Fluente", 
    author: "Luciano Ramalho",
    publisher: "Novatec",
    edition: "2ª Edição",
    availability: "Indisponível" as const,
    courseId: "dsm",
    keywords: "python, programação, algoritmos"
  },
  {
    id: "5",
    title: "Node.js in Action",
    author: "Mike Cantelon",
    publisher: "Manning",
    edition: "2ª Edição", 
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "nodejs, backend, javascript, server"
  },
  {
    id: "6",
    title: "Padrões de Arquitetura",
    author: "Martin Fowler",
    publisher: "Bookman",
    edition: "1ª Edição",
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "arquitetura, design patterns, software"
  },
  {
    id: "7",
    title: "Código Limpo em Ação",
    author: "Robert Jameson", 
    publisher: "Novatec",
    edition: "1ª Edição",
    availability: "Disponível" as const,
    courseId: "dsm",
    keywords: "clean code, boas práticas, desenvolvimento"
  },
  {
    id: "8",
    title: "Análise de Sistemas",
    author: "José Carlos Silva",
    publisher: "Pearson",
    edition: "3ª Edição",
    availability: "Disponível" as const,
    courseId: "ads",
    keywords: "análise, sistemas, modelagem"
  },
  {
    id: "9",
    title: "Banco de Dados Relacionais",
    author: "Maria Santos",
    publisher: "Atlas",
    edition: "2ª Edição",
    availability: "Disponível" as const,
    courseId: "ads",
    keywords: "banco de dados, sql, relacionais"
  },
  {
    id: "10",
    title: "Gestão da Qualidade Industrial",
    author: "Pedro Oliveira",
    publisher: "McGraw-Hill",
    edition: "1ª Edição",
    availability: "Disponível" as const,
    courseId: "gpi",
    keywords: "qualidade, produção, industrial"
  },
  {
    id: "11",
    title: "Psicologia Organizacional",
    author: "Ana Rodrigues",
    publisher: "Saraiva",
    edition: "4ª Edição",
    availability: "Disponível" as const,
    courseId: "grh",
    keywords: "psicologia, recursos humanos, organizacional"
  }
];

// Export a mutable books array
export let books = [...initialBooks];