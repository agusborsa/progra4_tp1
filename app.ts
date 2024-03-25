type Usuario =
    { tipo: "usuario", persona: Persona, tarea: Tarea }

/* type Tarea =
    | { tipo: "estado", estado: string  }
    | { tipo: "prioridad", prioridad: string  }
    | { tipo: "fecha", fecha: Date }
    | { tipo: "descripcion", opcion: string } */

interface Persona {
    nombre: string,
    apellido?: string
}

interface Tarea {
    estado: string,
    prioridad: string,
    fecha: Date,
    descripcion?: string
}

