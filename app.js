"use strict";
const tareasDeRoberto = [
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
const usuario = {
    tipo: "usuario",
    persona: {
        nombre: "Roberto",
        apellido: "Pérez"
    },
    tareas: tareasDeRoberto
};
const mostrarTareas = (tareas) => {
    tareas.forEach((tarea, index) => {
        console.log(`Tarea ${index + 1}:`);
        console.log(`Estado: ${tarea.estado}`);
        console.log(`Prioridad: ${tarea.prioridad}`);
        console.log(`Fecha: ${tarea.fecha.toLocaleDateString()}`);
        if (tarea.descripcion) {
            console.log(`Descripción: ${tarea.descripcion}`);
        }
        console.log('-----------------------------');
    });
};
mostrarTareas(tareasDeRoberto);
