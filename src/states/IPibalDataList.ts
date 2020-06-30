
export interface DateInfo {
  id: number
  date: Date
  timePeriod: string
}

export interface PibalDataInfo {
  id: number
  date: Date
  timePeriod: string
  windInfoList: WindInfo[]
}

export type WindInfo = {
  hours: number
  minutes: number
  winds: Wind[]
  visible: boolean
}

export type Wind = {
  alt: number,
  deg: number,
  spd: number
}
