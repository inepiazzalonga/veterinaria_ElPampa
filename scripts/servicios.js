const servicios = [{
        nombre: "Sanidad",
        info: "Te asesoramos y realizamos un plan sanitario completo para tu rodeo, según zona, clima, raza, categoría animal, etc. Un plan sanitario que se adapte perfectamente a las necesidades de tus animales. Realizamos aplicación de vacunas preventivas, informándote en que momentos se deben aplicar, y porque motivo dependiendo de la categoría animal. Aplicamos tratamientos específicos según enfermedades que se presenten en tu rodeo. Realizamos toma de muestras y análisis de laboratorio para el diagnóstico de las mismas. Realizamos necropsias que nos ayudan al diagnóstico. Te asesoramos en cuanto a la prevención y tratamiento de las distintas enfermedades."
    },
    {
        nombre: "Reproducción",
        info: "Ofrecemos un asesoramiento completo en cuanto al servicio natural y las inseminaciones en bovinos. Realizamos tactos y ecografías pre servicio para determinar la ciclicidad del rodeo, protocolos de inseminación en vacas y vaquillonas, adaptando distintas alternativas dependiendo el campo, la raza, las categorías, etc. Te asesoramos en la selección de reproductores, según características que busques para tu rodeo. Realizamos ecografías en bovinos y equino para diagnosticar preñez. Realizamos ecografías de ovarios y útero para determinar ciclicidad y desarrollo reproductivo en vaquillonas. Te ofrecemos un asesoramiento completo en servicio natural estacionado; y en inseminación artifical a tiempo fijo (IATF)."
    },
    {
        nombre: "Análisis",
        info: "La triquinosis es una enfermedad producida por un parásito con forma de gusano que se encuentra alojado en los músculos de los cerdos y otros animales salvajes, como el jabalí y el puma. Al realizar la faena de un animal, incluso si se realiza de manera doméstica, es importante consultar al veterinario y pedir el análisis de una muestra de diafragma (entraña) de cada res a fin de confirmar la ausencia del parásito que provoca la triquinosis a través de la técnica de digestión artificial. Contamos con laboratorio propio en el que realizamos los análisis necesarios para diagnosticar esta enfermedad con resultado en el día."
    },
    {
        nombre: "Asesoramiento",
        info: "Es importante definir un objetivo de trabajo, hacia donde queremos encaminar la producción. Apuntar a un determinado mercado, y cumplir los objetivos de la forma más eficiente posible. Queremos poder proyectar en conjunto la producción del campo, y acompañarte en el proceso. Nos focalizámos en tu campo, zona geográfica, razas, categorías, casuística de enfermedades previas y existentes, problemáticas especificas en cada lote y elaborar el plan sanitario que se adecue a tu establecimiento. Realizamos el seguimiento de los animales, con recorridas en los lotes y nos aseguramos de su correcto manejo en cuanto a sanidad y nutrición."
    }
]

const sanidad = document.querySelector(`#sanidad`)
const reproduccion = document.querySelector(`#reproduccion`)
const analisis = document.querySelector(`#analisis`)
const asesoramiento = document.querySelector(`#asesoramiento`)
const serviciosInfo = document.querySelector(`.serviciosInfo`)
const divInfo = document.createElement(`div`)
const servicioNombre = document.createElement(`h3`)
const info = document.createElement(`p`)
serviciosInfo.append(divInfo)



sanidad.addEventListener("click", () => {  
    serviciosInfo.innerHTML = `<h3>${servicios[0].nombre}</h3>
<p>${servicios[0].info}</p>`
})
reproduccion.addEventListener("click", () => {    
    serviciosInfo.innerHTML = `<h3 class="servTit">${servicios[1].nombre}</h3>
<p>${servicios[1].info}</p>`
})
analisis.addEventListener("click", () => {    
    serviciosInfo.innerHTML = `<h3>${servicios[2].nombre}</h3>
<p>${servicios[2].info}</p>`
})
asesoramiento.addEventListener("click", () => {    
    serviciosInfo.innerHTML = `<h3>${servicios[3].nombre}</h3>
<p>${servicios[3].info}</p>`
})