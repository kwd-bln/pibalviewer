export default interface IPibalDataList {
  list: PibalInfo[]
}

export type PibalInfo = {
  id: number
  date: Date
  timePeriod: string
  infoList: WindInfo[]
}

export type WindInfo = {
  hours: number
  minutes: number
  winds: Wind[]
  visible: boolean
}

export type YMD = {
  year: number,
  month: number,
  day: number
}

export type Wind = {
  alt: number,
  deg: number,
  spd: number
}
