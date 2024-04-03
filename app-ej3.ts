type Usuario = 
    | { tipo: "persona", persona: Persona }
    | { tipo: "nombre", nombre: string}
    | { tipo: "anonimo"}

interface Persona {
    nombre: string,
    apellido?: string,
    tareas: Tarea[]
}

type delayTarea <T> = 
    | {tipo: "exito", encontrado: T}
    | {tipo: "exito"}

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

// Comparación
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

async function delay(): Promise<delayTarea<Tarea>>  {
    await new Promise(resolve => setTimeout(resolve, 3000));
    mostrarTareas(tareas)
    return {tipo: "exito"};
}

delay();

const usuarios: Usuario[] = [
    {
        tipo: "persona",
        persona: {
            nombre: "Juan",
            apellido: "Pérez",
            tareas: [
                {
                    estado: "Pendiente",
                    prioridad: "Alta",
                    fecha: new Date(),
                    descripcion: "Completar proyecto"
                },
                {
                    estado: "En progreso",
                    prioridad: "Media",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 1"
                },
                {
                    estado: "Pendiente",
                    prioridad: "Media",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 2"
                },
                {
                    estado: "En progreso",
                    prioridad: "Alta",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 3"
                },
                {
                    estado: "Completada",
                    prioridad: "Alta",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 4"
                }
            ]
        }
    },
    {
        tipo: "nombre",
        nombre: "María"
    },
    {
        tipo: "anonimo"
    }
];


function encontrarTareasAsignadas(nombrePersona: string): Tarea[] {
    const tareasEncontradas: Tarea[] = [];

    usuarios.map(usuario => {
        if (usuario.tipo === "persona" && usuario.persona.nombre === nombrePersona) {
            tareasEncontradas.push(...usuario.persona.tareas);
        }
    });

    return tareasEncontradas;
}

// Ejemplo de uso
const tareasJuan = encontrarTareasAsignadas("Juan");
console.log("Tareas de Juan:", tareasJuan);