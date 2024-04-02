


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

