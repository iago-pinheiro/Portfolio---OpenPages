import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { BookOpen, User, Shield } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'user' | 'admin';
}

interface AuthPageProps {
  onLogin: (user: { email: string; name: string; role: 'user' | 'admin' }) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: 'user'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!loginData.email || !loginData.password) {
      toast.error("Por favor, preencha todos os campos");
      setIsLoading(false);
      return;
    }

    // Simulação de autenticação
    setTimeout(() => {
      // Mock user data based on email
      const userData = {
        email: loginData.email,
        name: loginData.email.includes('admin') ? 'Administrador' : 'Usuário',
        role: loginData.email.includes('admin') ? 'admin' as const : 'user' as const
      };

      onLogin(userData);
      toast.success(`Bem-vindo, ${userData.name}!`);
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      toast.error("Por favor, preencha todos os campos");
      setIsLoading(false);
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("As senhas não coincidem");
      setIsLoading(false);
      return;
    }

    if (registerData.password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres");
      setIsLoading(false);
      return;
    }

    // Simulação de cadastro
    setTimeout(() => {
      const userData = {
        email: registerData.email,
        name: registerData.name,
        role: registerData.role
      };

      onLogin(userData);
      toast.success(`Conta criada com sucesso! Bem-vindo, ${userData.name}!`);
      setIsLoading(false);
    }, 1000);
  };

  const handleLoginInputChange = (field: keyof LoginData, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegisterInputChange = (field: keyof RegisterData, value: string) => {
    setRegisterData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8" style={{ color: 'var(--primary-color)' }} />
              <h1 className="text-2xl font-medium" style={{ color: 'var(--title-color)' }}>
                OpenPages
              </h1>
            </div>
          </div>
          <p className="text-gray-600">
            Plataforma de Livros Acadêmicos - FATEC
          </p>
        </div>

        {/* Auth Form */}
        <Card className="p-8 bg-white border border-gray-200 shadow-sm">
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 rounded-lg" style={{ backgroundColor: 'var(--background-color)' }}>
              <TabsTrigger 
                value="login" 
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Cadastro
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" style={{ color: 'var(--title-color)' }}>
                    E-mail
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={loginData.email}
                    onChange={(e) => handleLoginInputChange("email", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" style={{ color: 'var(--title-color)' }}>
                    Senha
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Sua senha"
                    value={loginData.password}
                    onChange={(e) => handleLoginInputChange("password", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-3 rounded-lg"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--text-color-light)'
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>Para teste:</p>
                <p>Admin: admin@fatec.sp.gov.br</p>
                <p>Usuário: user@fatec.sp.gov.br</p>
                <p>Senha: qualquer senha</p>
              </div>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register" className="space-y-6">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name" style={{ color: 'var(--title-color)' }}>
                    Nome Completo
                  </Label>
                  <Input
                    id="register-name"
                    placeholder="Seu nome completo"
                    value={registerData.name}
                    onChange={(e) => handleRegisterInputChange("name", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" style={{ color: 'var(--title-color)' }}>
                    E-mail
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={registerData.email}
                    onChange={(e) => handleRegisterInputChange("email", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-role" style={{ color: 'var(--title-color)' }}>
                    Perfil de Usuário
                  </Label>
                  <Select 
                    value={registerData.role} 
                    onValueChange={(value: 'user' | 'admin') => handleRegisterInputChange("role", value)}
                  >
                    <SelectTrigger className="rounded-lg border-gray-300">
                      <SelectValue placeholder="Selecione seu perfil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <div>
                            <div>Usuário</div>
                            <div className="text-xs text-gray-500">Visualizar e sugerir livros</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <div>
                            <div>Administrador</div>
                            <div className="text-xs text-gray-500">Gerenciar acervo completo</div>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" style={{ color: 'var(--title-color)' }}>
                    Senha
                  </Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={registerData.password}
                    onChange={(e) => handleRegisterInputChange("password", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password" style={{ color: 'var(--title-color)' }}>
                    Confirmar Senha
                  </Label>
                  <Input
                    id="register-confirm-password"
                    type="password"
                    placeholder="Confirme sua senha"
                    value={registerData.confirmPassword}
                    onChange={(e) => handleRegisterInputChange("confirmPassword", e.target.value)}
                    className="rounded-lg border-gray-300"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-3 rounded-lg"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--text-color-light)'
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Criando conta..." : "Criar conta"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 OpenPages - FATEC</p>
        </div>
      </div>
    </div>
  );
}