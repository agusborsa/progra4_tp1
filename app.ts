type Usuario =
    | { tipo: "persona", persona: Persona }
    | { tipo: "tareas", tareas: Tarea}

type Tarea =
    | { tipo: "prioridad", prioridad: string  }
    | { tipo: "fecha", fecha: Date }
    | { tipo: "descripcion", opcion: string }

interface Persona {
    nombre: string,
    apellido?: string
}