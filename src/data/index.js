export const tasksMock = [
  {
    id: 1,
    title: 'Cita con el Doctor',
    description: 'Ver al Doctor a las 2:30pm',
    priority: 'alta',
    done: false
  },
  {
    id: 2,
    title: 'Encuentro en la Escuela',
    description: 'Ir a la reunión a la Escuela a las 3:30pm',
    priority: 'medio',
    done: false
  },
  {
    id: 3,
    title: 'Almorzar con Juan',
    description: 'Concurrir al restaurante a las 12:30pm',
    priority: 'low',
    done: false
  }
]

export const remindersMock = [
  {
    id: 1,
    title: 'Lavar el auto',
    description: 'Llevar el auto a lavar',
    time: new Date('2023-01-25T16:30:00'),
    notifications: true
  },
  {
    id: 2,
    title: 'Reunión Escolar',
    description: 'Asistir a la reunión de padres en la Escuela',
    time: new Date('2023-01-25T11:45:00'),
    notifications: true
  }
]
