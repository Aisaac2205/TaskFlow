import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Si no está autenticado, mostrar página de login
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  // Renderizar contenido según la página actual
  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "tasks":
        return <Tasks />;
      case "profile":
        return (
          <div className="flex-1 space-y-6 p-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Perfil</h2>
              <p className="text-muted-foreground">
                Gestiona tu información personal
              </p>
            </div>
            <div className="max-w-2xl">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Información Personal</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Nombre</label>
                    <p className="text-lg">Usuario Demo</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-lg">usuario@demo.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Rol</label>
                    <p className="text-lg">Administrador</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Miembro desde</label>
                    <p className="text-lg">Octubre 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 space-y-6 p-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
              <p className="text-muted-foreground">
                Personaliza tu experiencia en TaskFlow
              </p>
            </div>
            <div className="max-w-2xl">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Preferencias</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Notificaciones por email</h4>
                      <p className="text-sm text-muted-foreground">Recibe actualizaciones de tareas por correo</p>
                    </div>
                    <div className="w-10 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Modo oscuro automático</h4>
                      <p className="text-sm text-muted-foreground">Cambiar tema según la hora del día</p>
                    </div>
                    <div className="w-10 h-6 bg-muted rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Recordatorios de tareas</h4>
                      <p className="text-sm text-muted-foreground">Alertas para fechas límite próximas</p>
                    </div>
                    <div className="w-10 h-6 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r bg-card/50">
          <Sidebar 
            currentPage={currentPage} 
            onPageChange={setCurrentPage}
          />
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;