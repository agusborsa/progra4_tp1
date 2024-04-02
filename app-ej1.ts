interface Tarea {
    estado: "Pendiente" | "En progreso" | "Completada",
    prioridad: "Alta" | "Media" | "Baja";
    fecha: Date,
    descripcion?: string
}

const tareas: Tarea[] = [
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
    },
    {
        estado: "Pendiente",
        prioridad: "Media",
        fecha: new Date("2024-03-25"),
        descripcion: "Revisar documentación 2"
    },
    {
        estado: "Pendiente",
        prioridad: "Media",
        fecha: new Date("2024-03-25"),
        descripcion: "Revisar documentación 3"
    },
    {
        estado: "Pendiente",
        prioridad: "Alta",
        fecha: new Date("2024-03-25"),
        descripcion: "Revisar excel"
    },
    {
        estado: "Pendiente",
        prioridad: "Baja",
        fecha: new Date("2024-03-26"),
        descripcion: "Actualizar base de datos 2"
    }
];

// Función de comparación personalizada
const compararPorPrioridad = (a: Tarea, b: Tarea): number => {
    const prioridadOrden = {
        "Alta": 1,
        "Media": 2,
        "Baja": 3
    };

    return prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad];
};

// Ordenar el array tareas utilizando la función de comparación
const tareasOrdenadas = tareas.sort(compararPorPrioridad);

function mostrarTareas(tareas: Tarea[]) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado != "Completada"){
        console.log(`Tarea ${i + 1}:`);
        console.log(`Estado: ${tareas[i].estado}`);
        console.log(`Prioridad: ${tareas[i].prioridad}`);
        console.log(`Tareas: ${tareas[i].descripcion}`);
        console.log("--------------------");
        }
    }
}

mostrarTareas(tareas);
/* type Usuarios =
    { tipo : "usuarios", usuarios: Usuario[] }

type Usuario =
    { tipo: "usuario", persona: Persona, tareas: Tarea[] };

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

const usuarios: Usuario[] = [
    {
        tipo: "usuario",
        persona: {
            nombre: "Roberto",
            apellido: "Pérez"
        },
        tareas: tareasDeRoberto
    },
    {
        tipo: "usuario",
        persona: {
            nombre: "Agustin",
            apellido: "Borsa"
            },
        tareas: tareasDeAgustin
    }

];



const mostrarTareas = (mensaje: string, usuarios: Usuario[]): any => {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(mensaje);
        console.log(`Usuario ${i + 1}:`);
        console.log(`Nombre: ${usuarios[i].persona.nombre}`);
        console.log(`Apellido: ${usuarios[i].persona.apellido}`);
        console.log(`Tareas: ${usuarios[i].tareas}`);
        console.log("--------------------");
    }
};

mostrarTareas("Estas son las tareas de los usuarios", usuarios);
 */

