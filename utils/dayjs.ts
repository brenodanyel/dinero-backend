import Dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'

Dayjs.locale(ptBR)
Dayjs.extend(relativeTime)

export const dayjs = Dayjs
