import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

import { useToast } from 'primevue/usetoast'
import { apiAuth } from '@/utils/axios.js'
import { useUserStore } from './userStore'


export const useListStore = defineStore('list', () => {

  const toast = useToast()
  const currentCategory = ref([])
  const userList = reactive([])
  const user = useUserStore()

  // 通知
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  };


  /**
 *
 * @param {string} filmId
 * @param {number} direction
 * @returns {string} -prev/next film id
 */
  const nextIdInCategory = (id, dir) => {
    const index = currentCategory.value.indexOf(id)
    if (index !== -1) {
      const newIndex = (index + dir + currentCategory.value.length) % currentCategory.value.length
      return currentCategory.value[newIndex]
    }
    return ''
  }

  const getList = async () => {
    try {
      if (user.token === '') return
      const { data } = await apiAuth.get('/list')
      userList.splice(0, userList.length, ...data.result)
    } catch (error) {
      console.error(error)
      user.token = ''
      notify('error', '請重新登入')
    }
  }

  const listByFilm = computed(() => {
    return Object.values(
      userList.reduce((acc, item) => {
        const film = item.screening.film;
        if (!acc[film._id]) {
          acc[film._id] = {
            CName: film.CName,
            EName: film.EName,
            _id: film._id,
            screenings: []
          };
        }
        acc[film._id].screenings.push({
          list_id: item._id,
          screening_id: item.screening._id,
          place: item.screening.place,
          time: item.screening.time,
          endTime: item.screening.endTime,
          QASessions: item.screening.QASessions,
          clash: item.clash,
          locked: item.locked,
          hidden: item.hidden
        });
        return acc;
      }, {})
    );
  })






  return {
    userList,
    currentCategory,
    nextIdInCategory,
    getList,
    listByFilm
  }
})