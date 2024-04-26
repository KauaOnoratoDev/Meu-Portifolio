type Qualifications = {
  name: string
  qualification: string
  date: string[]
  certificateLink: string
  id: number
  status: boolean
}

export const QualificationsModels: Qualifications[] = [
  {
    id: 1,
    name: 'EBAC',
    qualification: 'Certificado em Full-Stack Python',
    date: ['Março 2023', 'Present'],
    certificateLink: '#',
    status: false
  }
]
