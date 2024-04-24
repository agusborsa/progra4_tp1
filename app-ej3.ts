export interface Persona {
    nombre: string,
    apellido?: string,
    tareas: Tarea[]
};
interface Tarea {
    titulo: string,
    estado: "Pendiente" | "En progreso" | "Completada",
    prioridad: "Alta" | "Media" | "Baja"
};

const usuariosData: Persona[] = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        tareas: [
            {
                titulo: "Ordenar",
                estado: "Pendiente",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 1",
                estado: "En progreso",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 2",
                estado: "Pendiente",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 3",
                estado: "En progreso",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 4",
                estado: "Completada",
                prioridad: "Alta"
            }
        ]
    },
    {
        nombre: "María",
        apellido: "Pérez",
        tareas: [
            {
                titulo: "Ordenar",
                estado: "Pendiente",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 1",
                estado: "En progreso",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 2",
                estado: "Pendiente",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 3",
                estado: "En progreso",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 4",
                estado: "Completada",
                prioridad: "Alta"
            }
        ]
    },
    {
        nombre: "Roberta",
        apellido: "Pérez",
        tareas: [
            {
                titulo: "Ordenar",
                estado: "Pendiente",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 1",
                estado: "En progreso",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 2",
                estado: "Pendiente",
                prioridad: "Media"
            },
            {
                titulo: "Ordenar 3",
                estado: "En progreso",
                prioridad: "Alta"
            },
            {
                titulo: "Ordenar 4",
                estado: "Completada",
                prioridad: "Alta"
            }
        ]
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
//const tareasOrdenadas = tareas.sort(compararPorPrioridad);

var mapaDePersonas = usuariosData.reduce((map, persona) => {
    var tareasOrdenadas = persona.tareas.sort(compararPorPrioridad);
    map.set(persona.nombre, tareasOrdenadas);
    return map;
}, new Map<string, Tarea[]>());


console.log("Tareas de Juan: ", mapaDePersonas.get("Juan"));
console.log("Tareas de María: ", mapaDePersonas.get("María"));
console.log("Tareas de Roberta: ", mapaDePersonas.get("Roberta"));

//falta quitar del array las tareas que estan completas