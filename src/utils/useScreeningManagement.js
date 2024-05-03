import { computed } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

export default function useScreeningManagement(filmModel) {
  const confirm = useConfirm()
  const toast = useToast()

  /******** export computed  **********/

  // 該電影是否已鎖定場次
  const isLocked = computed(() => filmModel.value.times.some((screening) => screening.locked))

  // 該電影剩餘場次數
  const remainingScreening = computed(
    () => filmModel.value.times.filter((screening) => !screening.deleted).length
  )

  /******** export computed  **********/

  /******** internal use only ********/

  // 通知
  const notify = (severity, summary, detail = '', life = 3000) => {
    toast.add({ severity, summary, detail, life })
  }

  // 例外處理
  const handleException = (action) => {
    try {
      action()
    } catch (error) {
      notify('error', 'Error Occurred', error.message)
    }
  }

  /******** internal use only ********/

  /******** export functions ********/

  // 長按鎖定/解鎖場次
  const toggleScreeningLock = (screening) => {
    const action = screening.locked ? unlockScreening : lockScreening
    handleException(() => action(screening))
  }

  // 點擊刪除/復原場次
  const manageScreeningStatus = (screening) => {
    if (screening.locked) {
      handleException(() => unlockScreening(screening))
    } else if (screening.deleted) {
      handleException(() => reviveScreening(screening))
    } else {
      handleException(() => deleteScreening(screening))
    }
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
        // 刪除其他場次
        filmModel.value.times.forEach((screening) => {
          if (screening !== thisScreening) screening.deleted = true
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
        filmModel.value.times.forEach((screening) => (screening.deleted = false))
        // 跳通知
        notify('success', '已解除鎖定')
      },
      reject: () => notify('error')
    })
  }

  // 刪除場次
  const deleteScreening = (thisScreening) => {
    // 刪除此場次
    thisScreening.deleted = true
    // 跳通知
    notify('success', '已刪除')
  }

  // 復原已刪除場次
  const reviveScreening = (thisScreening) => {
    // 若該電影有場次已鎖定，則解除鎖定並通知
    for (const screening of filmModel.value.times) {
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

  const fieldsetStyle = computed(() => ({
    legendTitle: {
      class: `${isLocked.value ? 'text-grey-900' : remainingScreening.value > 2 ? 'text-emerald-500' : 'text-orange-500'}`
    },
    togglerIcon: {
      class: `${isLocked.value ? 'text-grey-900' : remainingScreening.value > 2 ? 'text-emerald-500' : 'text-orange-500'}`
    },
    toggleableContent: {
      class: `${isLocked.value ? 'ring-black' : remainingScreening.value > 2 ? 'ring-emerald-500' : 'ring-orange-400'}`
    }
  }))

  const fieldsetRingColor = computed(() => ({
    'ring-black': isLocked.value,
    'ring-emerald-500': !isLocked.value && remainingScreening.value > 2,
    'ring-orange-400': !isLocked.value && remainingScreening.value <= 2
  }))

  // prettier-ignore
  const BtnStyle = (screening) => {
    const bgColor = screening.locked ? 'bg-gray-800' : 'bg-transparent';

    const shadow = (!screening.locked && !screening.deleted) ? 'shadow-lg' : '';

    const textColor = screening.locked ? 'text-gray-100' :
                      screening.deleted ? 'text-gray-400' :
                      screening.danger ? 'text-red-800' : 'text-primary-500';

    const borderColor = screening.deleted ? 'border-gray-200' :
                        screening.danger ? 'border-red-200 ring ring-offset-0 ring-red-300' :
                        screening.locked ? 'border-gray-800' : 'border-primary-500';

    return `${bgColor} ${borderColor} ${textColor} ${shadow}`;
  }

  /******** export styles ********/

  return {
    filmModel,
    isLocked,
    remainingScreening,
    manageScreeningStatus,
    toggleScreeningLock,
    fieldsetRingColor,
    fieldsetStyle,
    BtnStyle
  }
}
