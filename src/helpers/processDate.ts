export const processDate = (fecha: string | Date): string => {
  const currentDate: Date = new Date() // Fecha actual

  const publishDate: Date = new Date(fecha) // Fecha de publicación obtenida de la API
  const diferenceInMilisecons: number = currentDate.getTime() - publishDate.getTime() // Diferencia en milisegundos

  // Calculamos las diferencias en años, meses, semanas, días y horas
  const seconds: number = Math.floor(diferenceInMilisecons / 1000)
  const minutes: number = Math.floor(seconds / 60)
  const hours: number = Math.floor(minutes / 60)
  const days: number = Math.floor(hours / 24)
  const weeks: number = Math.floor(days / 7)
  const months: number = Math.floor(days / 30)
  const years: number = Math.floor(days / 365)

  // Devolvemos la representación de tiempo relativa
  if (years > 0) {
    return `Hace ${years} año${years > 1 ? 's' : ''}`
  } else if (months > 0) {
    return `Hace ${months} mes${months > 1 ? 'es' : ''}`
  } else if (weeks > 0) {
    return `Hace ${weeks} semana${weeks > 1 ? 's' : ''}`
  } else if (days > 0) {
    return `Hace ${days} día${days > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `Hace ${hours} hora${hours > 1 ? 's' : ''}`
  } else if (minutes > 0) {
    return `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
  } else {
    return `Hace ${seconds} segundo${seconds !== 1 ? 's' : ''}`
  }
}
