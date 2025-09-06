import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckSquare, 
  Clock, 
  TrendingUp, 
  Target,
  Calendar,
  Users,
  Award,
  Zap
} from "lucide-react";

// Mock data
const stats = [
  {
    title: "Tareas Completadas",
    value: "24",
    change: "+12%",
    icon: CheckSquare,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "En Progreso",
    value: "8",
    change: "+3%",
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Productividad",
    value: "92%",
    change: "+8%",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Meta Mensual",
    value: "75%",
    change: "+15%",
    icon: Target,
    color: "text-success",
    bgColor: "bg-success/10"
  },
];

const recentTasks = [
  { id: 1, title: "Revisar diseño de la landing", status: "Completada", priority: "Alta", dueDate: "Hoy" },
  { id: 2, title: "Implementar autenticación", status: "En progreso", priority: "Alta", dueDate: "Mañana" },
  { id: 3, title: "Testing de la API", status: "Pendiente", priority: "Media", dueDate: "2 días" },
  { id: 4, title: "Documentación técnica", status: "Pendiente", priority: "Baja", dueDate: "1 semana" },
];

const upcomingDeadlines = [
  { task: "Entrega del proyecto", date: "15 Oct", priority: "Crítica" },
  { task: "Reunión con el cliente", date: "18 Oct", priority: "Alta" },
  { task: "Code review", date: "20 Oct", priority: "Media" },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Resumen de tu actividad y progreso
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">{stat.change}</span> vs mes anterior
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Tasks */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckSquare className="mr-2 h-5 w-5" />
              Tareas Recientes
            </CardTitle>
            <CardDescription>
              Tus últimas actividades y tareas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{task.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant={
                        task.status === "Completada" ? "default" : 
                        task.status === "En progreso" ? "secondary" : 
                        "outline"
                      }
                      className={
                        task.status === "Completada" ? "bg-success text-success-foreground" :
                        task.status === "En progreso" ? "bg-warning text-warning-foreground" :
                        ""
                      }
                    >
                      {task.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {task.dueDate}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sidebar Cards */}
        <div className="col-span-3 space-y-6">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Progreso Semanal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Tareas Completadas</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Objetivos Mensuales</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Proyectos Activos</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Próximos Vencimientos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDeadlines.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.task}</p>
                    <Badge 
                      variant="outline" 
                      className={`text-xs mt-1 ${
                        item.priority === "Crítica" ? "border-destructive text-destructive" :
                        item.priority === "Alta" ? "border-warning text-warning" :
                        "border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{item.date}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Logros Recientes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-success/10 rounded">
                <Award className="h-8 w-8 text-success" />
                <div>
                  <p className="font-medium text-sm">¡Racha de 7 días!</p>
                  <p className="text-xs text-muted-foreground">Completaste tareas cada día</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-primary/10 rounded">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium text-sm">Colaborador del mes</p>
                  <p className="text-xs text-muted-foreground">Mejor rendimiento en equipo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}