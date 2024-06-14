import { useToast } from 'primevue/usetoast'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/listStore'
import { api } from '@/utils/axios.js'
import { format, parseISO } from 'date-fns'

export default function useAxios () {
  const toast = useToast()
  const { currentCategory } = storeToRefs(useListStore())

  // 通知
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }



  const getCategoryList = async () => {
    try {
      const { data } = await api.get('film/categories')
      return data.result
    } catch (error) {
      console.log(`error in getting categories: ${error}`)
      notify('error', '錯誤', '無法取得影展單元資料')
    }
  }

  const getFilmsByCategory = async (category) => {
    try {
      const { data } = await api.get(`film/films/${category}`)
      if (!data || !data.result) throw new Error('no data')
      currentCategory.value = data.result.map((film) => film._id)
      return data.result
    } catch (error) {
      console.log(`error in getting films: ${error}`)
      notify('error', '錯誤', `無法取得${category}資料`)
    }
  }

  const getFilmById = async (id) => {
    try {
      const { data } = await api.get(`film/${id}`)
      return data.result
    } catch (error) {
      console.log(`error in getting films: ${error}`)
      notify('error', '錯誤', `無法取得電影資料`)
    }
  }

  const getScreeningsByFilmId = async (id) => {
    try {
      const { data } = await api.get(`screening/${id}`)
      if (!data || !data.result) throw new Error('此id查無場次')
      const screenings = data.result.map((screening) => {
        return {
          ...screening,
          date: format(parseISO(screening.time), 'MM.dd EEE.'),
          time: format(parseISO(screening.time), 'HH:mm'),
          place: screening.QASessions ? `${screening.place} ▲` : screening.place,
        }
      })
      return screenings
    } catch (error) {
      console.log(`error in getting screenings: ${error}`)
      notify('error', '錯誤', `無法取得場次資料`)
    }
  }

  const getScreeningsByDate = async (date) => {
    try {
      const { data } = await api.get(`screening/date/${date}`)
      if (!data || !data.result) {
        notify('info', '此日期無場次')
        return []
      }
      return data.result
    } catch (error) {
      console.log(`error in getting screenings for ${date}: ${error}`)
      notify('error', '錯誤', `無法取得場次資料`)
    }
  }

  const getFFDateRange = async () => {
    try {
      const { data } = await api.get('screening/FFDate')
      if (!data || !data.result) throw new Error('no data')
      return data.result
    } catch (error) {
      console.log(`error in getting festival date range: ${error}`)
      notify('error', '錯誤', `無法取得影展日期資料`)
    }
  }



  return { getCategoryList, getFilmsByCategory, getFilmById, getScreeningsByFilmId, getScreeningsByDate, getFFDateRange }
}

