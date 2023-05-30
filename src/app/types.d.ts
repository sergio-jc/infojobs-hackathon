export interface Offer {
  id: string
  title: string
  province: string
  experienceMin: string
  link: string
  logo: string
  author: string
  teleworking?: string
  published?: string | Date
  contractType?: string
  workDay?: string
  description?: string
  salary?: string
}
