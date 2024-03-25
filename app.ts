type Usuario =
    | { tipo: "usuario", persona: Persona, tareas: Tarea[] }
    | { tipo: "tareas", tareas: Tarea[] };

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

const tareasDeRoberto: Tarea[] = [
    {
        estado: "En progreso",
        prioridad: "Alta",
        fecha: new Date("2024-03-24"),
        descripcion: "Completar proyecto"
    },
    {
        estado: "Pendiente",
        prioridad: "Media",
        fecha: new Date("2024-03-25"),
        descripcion: "Revisar documentación"
    },
    {
        estado: "Completada",
        prioridad: "Baja",
        fecha: new Date("2024-03-26"),
        descripcion: "Actualizar base de datos"
    }
];

const tareasDeAgustin: Tarea[] = [
    {
        estado: "En progreso",
        prioridad: "Alta",
        fecha: new Date("2024-03-24"),
        descripcion: "proyecto.jpg"
    },
    {
        estado: "Pendiente",
        prioridad: "Media",
        fecha: new Date("2024-03-25"),
        descripcion: "documentacion.png"
    },
    {
        estado: "Completada",
        prioridad: "Baja",
        fecha: new Date("2024-03-26"),
        descripcion: "river.png"
    }
];


const usuario1: Usuario = {
    tipo: "usuario",
    persona: {
        nombre: "Roberto",
        apellido: "Pérez"
    },
    tareas: tareasDeRoberto
};


const usuario2: Usuario = {
    tipo: "usuario",
    persona: {
        nombre: "Agustin",
        apellido: "Borsa"
    },
    tareas: tareasDeAgustin
};

/* async function buscar(): Promise<Usuario> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return mostrarTareas(usuario1);
}
 */

const mostrarTareas = (usuario: Usuario): void => {
        console.log(usuario);
    };

mostrarTareas(usuario1);
mostrarTareas(usuario2);
