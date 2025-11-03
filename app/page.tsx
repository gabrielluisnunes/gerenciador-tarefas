import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, Minus, SquarePen, Trash, ListChecks, Sigma} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

const Home = () => {
    return (
        <main className = "w-full h-screen bg-gray-100 flex justify-center items-center">
            <Card className= "w-lg p-4">
                <CardHeader className="flex gap-2">
                    <Input placeholder="Adicionar Tarefa"/>
                    <Button variant = "default" className="cursor-pointer"><Plus/>Cadastar</Button>
                </CardHeader>
                
                <CardContent>
                 <Separator className="mb-3"/>

                <div className="flex gap-2">
                    <Badge className="cursor-pointer"variant="default"><List />Todas as tarefas</Badge>
                    <Badge className="cursor-pointer"variant="outline"><Minus />Não finalizadas</Badge>
                    <Badge className="cursor-pointer"variant="outline"><Check />Concluídas</Badge>
                </div>

                <div className="mt-4 border-b-2">
                    <div className= "h-12 flex justify-between items-center border-t-2">
                        <div className="w-1 h-full bg-green-300"></div>
                        <p className="flex-1 px-2 text-sm">Tarefa 1</p>
                        <div className="flex items-center gap-2">
                            <SquarePen className="cursor-pointer"size={14}/>
                            <Trash className="cursor-pointer"size={14}/>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger>Abrir</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Editar Tarefa</DialogTitle>
                            </DialogHeader>
                            <div className="flex gap-2">
                                <Input placeholder="Editar Tarefa" />
                                <Button>Editar</Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
                
                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <ListChecks size={14} />
                        <p className="text-xs">Tarefas Concluídas (3/3)</p>
                    </div>
                   <AlertDialog>
                        <AlertDialogTrigger asChild>
                             <Button className="text-xs h-6 cursor-pointer"variant="outline"><Trash size={14} />Limpar Tarefas</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Excluir</AlertDialogCancel>
                                <AlertDialogAction>Cancelar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

                <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
                    <div className="h-full bg-violet-500 rounded-md"style={{width:"50%"}}></div>
                </div>

                <div className="flex justify-end items-center mt-2 gap-1">
                    <Sigma size={14} />
                    <p className="text-xs">3 tarefas no total</p>
                </div>

                </CardContent>

             </Card>
        </main>
        
    )
}

export default Home