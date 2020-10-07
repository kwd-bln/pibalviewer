import { DateInfo, WindInfo, Wind } from "./../states/IPibalDataList"

type WindApi = {
	height: number,
	degree: number,
	speed: number
}

type ApiData = {
	hours: number
	minutes: number
	winds: WindApi[]
}

type ApiDateAndTiming = {
	date: string
	timing: string
}

export function authorize(user: string, pass: string): Promise<{token?: string, error?: string}> {
  const body = JSON.stringify({postUser: user, postPass: pass})

  return fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/authenticate", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers:{
      'content-type': 'application/json; charset=UTF-8'
    },
    body})
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        localStorage.setItem("auth_token", json.token)
        return { token: json.token }
      }
      return { error: 'such user is not exist'}
    })
    .catch(error => {
      return { error }
    })
}

export function fetchDetes(token: string): Promise<{dateList?: DateInfo[], error?: string}> {
  return fetch('https://oval-silicon-280513.an.r.appspot.com/api/v1/dates', {
    headers: { 
      'x-access-token': token,
      mode: "cors",
      cache: "no-cache" }
  }).then(res => res.json())
  .then(obj => {
    const apiDateList: ApiDateAndTiming[] = obj.data
    let dateList: DateInfo[] = apiDateList.map((apiDate, index) => {
      return {
        id: index,
        date: getDateFrom(apiDate.date),
        timePeriod: apiDate.timing
      }
    })
    dateList.sort((a, b) => b.date.getTime() - a.date.getTime())
    return { dateList }
  })
  .catch(error => {
    return { error }
  })
}

export function fetchWindInfo(token: string, date: Date, timePeriod: string): Promise<{windInfoList?: WindInfo[], error?: string}> {
  const yyyymmdd = getYYYYMMDD(date)
  return fetch(`https://oval-silicon-280513.an.r.appspot.com/api/v1/${yyyymmdd}/${timePeriod}`, {
		headers: { 
      'x-access-token': token,
      mode: "cors",
      cache: "no-cache" }
  })
  .then(res => res.json())
  .then(obj => {
    if (obj.data.length) {
      const windInfoList: WindInfo[] = []
      const infos: ApiData[] = obj.data[0].infos
      infos.forEach(info => {
				const hours = info.hours
				const minutes = info.minutes
				const winds: Wind[] = info.winds.map(w => {
					return {
						alt: w.height,
						deg: w.degree,
						spd: w.speed
					}
				}).sort((wa, wb) => { return wa.alt > wb.alt ? 1 : -1 })
				windInfoList.push({
					hours: hours,
					minutes: minutes,
					winds: winds,
					visible: true
				})
      })
      return { windInfoList }
    }
    return { error: 'no such data' }
  })
  .catch(error => {
    return { error }
  })
}

function getYYYYMMDD(date: Date):string {
	const y = date.getFullYear().toString()
	const m = ("00" + date.getMonth()).slice(-2)
	const d = ("00" + date.getDate()).slice(-2)
  const result = y + m + d
  return result
}

function getDateFrom(yyyymmdd: string): Date {
	const year = Number(yyyymmdd.slice(0, 4))
	const month = Number(yyyymmdd.slice(4, 6))
	const day = Number(yyyymmdd.slice(6))
	return new Date(year, month, day)
}