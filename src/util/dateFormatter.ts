export const formatDateDifference = (date: Date) => {
  const diff = Date.now() - date.getTime()
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))
  if (days === 0) {
    return 'criado hoje'
  } else if (days === 1) {
    return 'criado há 1 dia'
  } else {
    return `criado há ${days} dias`
  }
}
