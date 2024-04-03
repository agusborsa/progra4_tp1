"use strict";
/* const tareas: Tarea[] = [
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

delay(); */
const usuarios = [
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
        tipo: "persona",
        persona: {
            nombre: "Roberta",
            apellido: "Guzmán",
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
                    descripcion: "Revisar documentación 5"
                },
                {
                    estado: "Pendiente",
                    prioridad: "Media",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 6"
                },
                {
                    estado: "En progreso",
                    prioridad: "Alta",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 7"
                },
                {
                    estado: "Completada",
                    prioridad: "Alta",
                    fecha: new Date(),
                    descripcion: "Revisar documentación 8"
                }
            ]
        }
    }
];
function validarNombre(nombre) {
    // Que ponga el nombre o el nombre y apellido
    const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
    // Aca compruebo si coincide con la expresion regular
    return regex.test(nombre);
}
function encontrarTareasAsignadas(nombrePersona, apellidoPersona) {
    const tareasEncontradas = [];
    usuarios.map(usuario => {
        if ((usuario.tipo === "persona" && usuario.persona.nombre === nombrePersona && validarNombre(usuario.persona.nombre)) || (usuario.tipo === "persona" && usuario.persona.nombre === nombrePersona && usuario.persona.apellido === apellidoPersona && validarNombre(usuario.persona.nombre))) {
            tareasEncontradas.push(...usuario.persona.tareas);
        }
        else {
            console.log("Por favor, escriba un nombre válido");
            // según lo que encontré, este mensaje salta varias veces si en el array base hay más entradas con menos propiedades, aunque el nombre sea válido a causa del map. La solución sería utilizar foreach en su lugar, o find, pero por cuestiones de optimización decidí dejar el map, ya que el ejercicio exige una mayor eficiencia. Un dato adicional es que el ? para definir que un valor o parámetro sea opcional, me fuerza la opción de que dicho valor o parámetro sea undefined, lo que puede influir en el bug.
        }
    });
    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas para el usuario especificado");
    }
    return tareasEncontradas;
}
const tareasNombreApellido = encontrarTareasAsignadas("Roberta", "Guzmán");
console.log("Tareas de Roberta Guzmán:", tareasNombreApellido);
const tareasNombre = encontrarTareasAsignadas("Juan");
console.log("Tareas de Juan", tareasNombre);
