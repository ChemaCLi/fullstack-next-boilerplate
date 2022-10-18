export const toReadableDate = dateString => {
  return new Intl.DateTimeFormat('es-MX', { dateStyle: "medium" })
    .format(new Date(dateString))
}
