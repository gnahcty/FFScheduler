import { computed } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { useUserList } from '@/stores/filmStore.js'

export default function useScreeningManagement (id) {
  const { films } = useUserList()
  const confirm = useConfirm()
  const toast = useToast()
  const film = computed(() => films.find((film) => film.filmId === id))

  /******** export computed  **********/

  // 該電影是否已鎖定場次
  const isLocked = computed(() => film.value.times.some((screening) => screening.locked))
  const isDanger = computed(() => film.value.times.some((screening) => screening.danger))

  // 該電影剩餘場次數
  const remainingScreening = computed(() =>
    film.value.times.filter((screening) => !screening.deleted)
  )

  /******** export computed  **********/

  /******** internal use only ********/

  // 通知
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }

  // 例外處理
  const handleException = (action) => {
    try {
      action()
    } catch (error) {
      console.log(error)
      notify('error', 'Error Occurred', error.message)
    }
  }

  /**
   * 更新電影狀態
   * @param {Object} newFilmObject
   */
  const updateFilmStatus = (newFilmObject) => {
    handleException(() => {
      let targetFilm = films.find((film) => film.filmId === newFilmObject.filmId)
      if (targetFilm) {
        targetFilm = newFilmObject
      }
    })
  }

  /******** internal use only ********/

  /******** export functions ********/

  // 長按鎖定/解鎖場次
  const lockScreeningToggle = (screening) => {
    const action = screening.locked ? unlockScreening : lockScreening
    handleException(() => action(screening))
    updateFilmStatus(film.value)
  }

  // 點擊刪除/復原場次
  const deleteScreeningToggle = (screening, confirmDelete = false) => {
    if (screening.locked) {
      handleException(() => unlockScreening(screening))
    } else if (screening.deleted) {
      handleException(() => reviveScreening(screening))
    } else {
      handleException(() => deleteScreening(screening, confirmDelete))
    }
    updateFilmStatus(film)
  }

  // 鎖定場次
  const lockScreening = (thisScreening) => {
    confirm.require({
      message: '鎖定後，此電影其他場次將被刪除，確定要鎖定嗎？',
      header: '鎖定場次',
      rejectClass: 'p-button-text',
      acceptClass: 'p-button-success p-button-text',
      accept: () => {
        // 鎖定此場次
        thisScreening.locked = true
        thisScreening.deleted = false
        // 刪除其他場次
        film.value.times.forEach((screening) => {
          if (screening !== thisScreening) {
            screening.deleted = true
            screening.locked = false
          }
        })
        notify('success', '已鎖定')
      },
      reject: () => notify('error', '已取消')
    })
  }

  // 解除鎖定已鎖定場次
  const unlockScreening = (thisScreening) => {
    confirm.require({
      message: '解除鎖定後，此電影其他場次將被復原，確定要解除鎖定嗎？',
      header: '解除鎖定',
      rejectClass: 'p-button-text',
      acceptClass: 'p-button-danger p-button-text',
      accept: () => {
        // 解除此場次鎖定狀態
        thisScreening.locked = false
        // 復原已刪除場次
        film.value.times.forEach((screening) => (screening.deleted = false))
        // 跳通知
        notify('success', '已解除鎖定')
      },
      reject: () => notify('error', '已取消')
    })
  }

  // 刪除場次
  const deleteScreening = (thisScreening, confirmDelete = false) => {
    if (confirmDelete) {
      confirm.require({
        message: '確定要刪除此場次嗎？（可於收藏清單中復原）',
        header: '刪除場次',
        rejectClass: 'p-button-text',
        acceptClass: 'p-button-success p-button-text',
        accept: () => {
          // 刪除此場次
          thisScreening.deleted = true
          // 跳通知
          notify('success', '已刪除')
        },
        reject: () => notify('error', '已取消')
      })
    } else {
      // 刪除此場次
      thisScreening.deleted = true
      // 跳通知
      notify('success', '已刪除')
    }
  }

  // 復原已刪除場次
  const reviveScreening = (thisScreening) => {
    // 若該電影有場次已鎖定，則解除鎖定並通知
    for (const screening of film.value.times) {
      if (screening.locked) {
        screening.locked = false
        notify('success', '場次已解除鎖定')
      }
    }
    // 復原該場次
    thisScreening.deleted = false

    notify('success', '場次已復原')
  }

  /******** export functions ********/

  /******** export styles ********/
  const BtnStyle = (screening) => {
    return computed(() => {
      const bg = screening.locked ? 'bg-stone-200' : ''
      const text = screening.locked
        ? 'text-stone-900'
        : screening.deleted
          ? 'text-stone-600'
          : remainingScreening.value.length <= 2
            ? 'text-orange-500'
            : 'text-white'
      const ring = screening.deleted
        ? 'border border-stone-600'
        : screening.danger
          ? 'border border-red-600 ring-1 ring-inset ring-red-700'
          : 'border'
      return `${bg} ${text} ${ring}`
    })
  }

  /******** export styles ********/

  return {
    film,
    isLocked,
    isDanger,
    remainingScreening,
    deleteScreeningToggle,
    lockScreeningToggle,
    BtnStyle
  }
}
