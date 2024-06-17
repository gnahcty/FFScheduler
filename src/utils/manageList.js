import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { apiAuth } from '@/utils/axios.js'
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'
import { useListStore } from '@/stores/listStore.js'
import { useRouter } from 'vue-router'


export const manageList = (listID) => {
  const user = useUserStore()
  const toast = useToast()
  const confirm = useConfirm()
  const router = useRouter()
  const list = useListStore()



  /*** internal use functions ***/
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }

  const checkLogin = () => {
    if (!user.isLoggedIn) {
      notify('error', '請先登入')
      router.push('/login')
    }
    return user.isLoggedIn
  }

  // api call前檢查登入狀態、call後重新取得片單、處理錯誤
  const handleAPI = async (action) => {
    try {
      if (!checkLogin()) return
      await action()
      list.getList()
    } catch (error) {
      console.log(error)
      notify('error', '錯誤', error.message)
    }
  }

  const hideScreening = async (listID) => {
    await handleAPI(async () => await apiAuth.post('/list/hide', { id: listID }))
    notify('success', '場次已刪除')
  }

  const unhideScreening = async (listID) => {
    await handleAPI(async () => await apiAuth.post('/list/unhide', { id: listID }))
    notify('success', '場次已復原')
  }

  const lockScreening = (listID) => {
    confirm.require({
      message: '鎖定後，此電影其他場次將被刪除，確定要鎖定嗎？',
      header: '鎖定場次',
      rejectClass: 'p-button-text',
      acceptClass: 'p-button-success p-button-text',
      accept: async () => {
        await handleAPI(async () => await apiAuth.post('/list/lock', { id: listID, filmID: targetFilmID.value }))
        notify('success', '已鎖定')
      },
      reject: () => notify('error', '已取消')
    })
  }

  const unlockScreening = (listID) => {
    confirm.require({
      message: '解除鎖定後，此電影其他場次將被復原，確定要解除鎖定嗎？',
      header: '解除鎖定',
      rejectClass: 'p-button-text',
      acceptClass: 'p-button-danger p-button-text',
      accept: async () => {
        await handleAPI(async () => await apiAuth.post('/list/unlock', { id: listID, filmID: targetFilmID.value }))
        notify('success', '已解除鎖定')
      },
      reject: () => notify('error', '已取消')
    })
  }

  /*** internal use functions ***/

  const targetList = computed(() =>
    list.userList.find((list) => list._id === listID)
  )

  const listByFilm = computed(() => list.userList.filter((likedItem) => likedItem.screening.film._id === targetFilmID.value && !likedItem.hidden))

  const remainingScreening = computed(() => listByFilm.value.length)

  const targetFilmID = computed(() => targetList.value.screening.film._id)

  const filmLocked = computed(() => listByFilm.value.some((likedItem) => likedItem.screening.locked))

  const filmClashed = computed(() => listByFilm.value.some((likedItem) => likedItem.screening.clash > 0))




  const lock = (listID) => {
    if (targetList.value.locked) {
      unlockScreening(listID)
    } else {
      lockScreening(listID)
    }
  }

  const hide = (listID) => {
    if (targetList.value.locked) {
      unlockScreening(listID)
    }
    if (targetList.value.hidden) {
      unhideScreening(listID)
    } else {
      hideScreening(listID)
    }
  }

  const chipStyle = (listID) => computed(() => {
    const targetList = list.userList.find((list) => list._id === listID)

    const bg = targetList.locked ? 'bg-stone-200' : ''
    const text = targetList.locked
      ? 'text-stone-900'
      : targetList.hidden
        ? 'text-stone-600'
        : remainingScreening.value.length <= 2
          ? 'text-orange-500'
          : 'text-white'
    const ring = targetList.hidden
      ? 'border border-stone-600'
      : targetList.clash > 0
        ? 'border border-red-600 ring-1 ring-inset ring-red-700'
        : 'border'
    return `${bg} ${text} ${ring}`
  })




  return { targetList, listByFilm, targetFilmID, filmLocked, filmClashed, remainingScreening, lock, hide, chipStyle }
}



