import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Calendar, 
  Flag, 
  Clock,
  CheckCircle,
  Circle,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
  createdAt: string;
}

// Mock data
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Implementar sistema de autenticación",
    description: "Crear login, registro y manejo de sesiones con JWT",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-10-15",
    createdAt: "2024-10-01"
  },
  {
    id: "2",
    title: "Diseñar interfaz del dashboard",
    description: "Crear mockups y prototipos para el dashboard principal",
    status: "completed",
    priority: "medium",
    dueDate: "2024-10-10",
    createdAt: "2024-09-28"
  },
  {
    id: "3",
    title: "Configurar base de datos",
    description: "Setup de PostgreSQL y migraciones iniciales",
    status: "pending",
    priority: "high",
    dueDate: "2024-10-18",
    createdAt: "2024-10-02"
  },
  {
    id: "4",
    title: "Documentación de API",
    description: "Documentar endpoints y ejemplos de uso",
    status: "pending",
    priority: "low",
    dueDate: "2024-10-25",
    createdAt: "2024-10-03"
  }
];

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const { toast } = useToast();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as const,
    dueDate: ""
  });

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "all") return true;
    return task.status === currentFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "in-progress":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-destructive text-destructive";
      case "medium":
        return "border-warning text-warning";
      default:
        return "border-muted-foreground text-muted-foreground";
    }
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: "pending",
      priority: newTask.priority,
      dueDate: newTask.dueDate,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setTasks([task, ...tasks]);
    setNewTask({ title: "", description: "", priority: "medium", dueDate: "" });
    setIsCreateModalOpen(false);
    
    toast({
      title: "Tarea creada",
      description: "La tarea se ha creado exitosamente.",
    });
  };

  const handleStatusChange = (taskId: string, newStatus: Task["status"]) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
    
    toast({
      title: "Estado actualizado",
      description: "El estado de la tarea ha sido actualizado.",
    });
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast({
      title: "Tarea eliminada",
      description: "La tarea ha sido eliminada exitosamente.",
    });
  };

  const statusCounts = {
    all: tasks.length,
    pending: tasks.filter(t => t.status === "pending").length,
    "in-progress": tasks.filter(t => t.status === "in-progress").length,
    completed: tasks.filter(t => t.status === "completed").length,
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mis Tareas</h2>
          <p className="text-muted-foreground">
            Gestiona y organiza todas tus tareas
          </p>
        </div>
        
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:bg-primary-hover">
              <Plus className="mr-2 h-4 w-4" />
              Nueva Tarea
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Crear Nueva Tarea</DialogTitle>
              <DialogDescription>
                Completa los detalles de tu nueva tarea
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  placeholder="Nombre de la tarea"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe los detalles de la tarea"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridad</Label>
                  <Select value={newTask.priority} onValueChange={(value: any) => setNewTask({ ...newTask, priority: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baja</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Fecha límite</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleCreateTask} className="bg-gradient-primary hover:bg-primary-hover">
                Crear Tarea
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Tabs value={currentFilter} onValueChange={setCurrentFilter} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todas ({statusCounts.all})</TabsTrigger>
          <TabsTrigger value="pending">Pendientes ({statusCounts.pending})</TabsTrigger>
          <TabsTrigger value="in-progress">En Progreso ({statusCounts["in-progress"]})</TabsTrigger>
          <TabsTrigger value="completed">Completadas ({statusCounts.completed})</TabsTrigger>
        </TabsList>

        <TabsContent value={currentFilter} className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingTask(task)}
                      >
                        <Edit3 className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 className="h-3 w-3 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription>{task.description}</CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(task.status)}>
                        {task.status === "pending" ? "Pendiente" : 
                         task.status === "in-progress" ? "En Progreso" : "Completada"}
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(task.priority)}>
                        <Flag className="mr-1 h-3 w-3" />
                        {task.priority === "low" ? "Baja" : 
                         task.priority === "medium" ? "Media" : "Alta"}
                      </Badge>
                    </div>
                  </div>

                  {task.dueDate && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      Vence: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  )}

                  {/* Status Change Buttons */}
                  <div className="flex gap-2">
                    {task.status !== "pending" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(task.id, "pending")}
                      >
                        Pendiente
                      </Button>
                    )}
                    {task.status !== "in-progress" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(task.id, "in-progress")}
                      >
                        En Progreso
                      </Button>
                    )}
                    {task.status !== "completed" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-success text-success hover:bg-success hover:text-success-foreground"
                        onClick={() => handleStatusChange(task.id, "completed")}
                      >
                        Completar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No hay tareas</h3>
              <p className="text-muted-foreground mb-4">
                {currentFilter === "all" 
                  ? "No tienes tareas creadas aún" 
                  : `No tienes tareas en estado "${currentFilter}"`
                }
              </p>
              {currentFilter === "all" && (
                <Button onClick={() => setIsCreateModalOpen(true)} className="bg-gradient-primary hover:bg-primary-hover">
                  <Plus className="mr-2 h-4 w-4" />
                  Crear primera tarea
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}