"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tareas = [
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
const compararPorPrioridad = (a, b) => {
    const prioridadOrden = {
        "Alta": 1,
        "Media": 2,
        "Baja": 3
    };
    return prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad];
};
// Ordenar el array tareas utilizando la función de comparación
const tareasOrdenadas = tareas.sort(compararPorPrioridad);
function mostrarTareas(tareas) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado != "Completada") {
            console.log(`Tarea ${i + 1}:`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log(`Prioridad: ${tareas[i].prioridad}`);
            console.log(`Tareas: ${tareas[i].descripcion}`);
            console.log("--------------------");
        }
    }
}
function delay() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 3000));
        mostrarTareas(tareas);
        return { tipo: "exito" };
    });
}
delay();
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
        tipo: "nombre",
        nombre: "María"
    },
    {
        tipo: "anonimo"
    }
];
function encontrarTareasAsignadas(nombrePersona) {
    const tareasEncontradas = [];
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
