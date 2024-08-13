export const formatCurrency = amount => {
  return new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD"
  }).format(amount)
}