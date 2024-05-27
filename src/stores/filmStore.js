import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { getFilmById } from '@/utils/temp_data'

export const useUserList = defineStore('films', () => {
  const films = reactive([
    {
      CName: '奔向彩虹',
      EName: 'The Love Affair of Rainbow',
      filmId: '3800',
      length: '113',
      times: [
        {
          time: '04.13 (六) 10:20',
          place: '信義威秀11廳',
          locked: true,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 15:20',
          place: '信義威秀11廳',
          locked: false,
          deleted: true,
          danger: true
        },
        {
          time: '04.21 (日) 19:50',
          place: '信義威秀11廳',
          locked: false,
          deleted: true,
          danger: false
        }
      ]
    },
    {
      CName: '阿達一族',
      EName: 'The Addams Family',
      filmId: '3803',
      length: '113',
      times: [
        {
          time: '04.14 (日) 18:40',
          place: 'MUVIE TITAN',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 21:40',
          place: '信義威秀11廳',
          locked: true,
          deleted: false,
          danger: true
        },
        {
          time: '04.19 (五) 10:20',
          place: '信義威秀11廳',
          locked: false,
          deleted: true,
          danger: false
        }
      ]
    },
    {
      CName: '無限泡湯兩分鐘',
      EName: 'River',
      filmId: '3774',
      length: '113',
      times: [
        {
          time: '04.14 (日) 12:30',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.15 (一) 14:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: true
        },
        {
          time: '04.16 (二) 19:30',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 10:40',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: true
        },
        {
          time: '04.18 (四) 10:40',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '沙漠大冒險',
      EName: 'Sand Land',
      filmId: '3777',
      length: '96',
      times: [
        {
          time: '04.13 (六) 14:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.16 (二) 12:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 13:00',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.19 (五) 19:40',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: true
        }
      ]
    },
    {
      CName: '邪厄恩典',
      EName: 'Raging Grace',
      filmId: '3790',
      length: '120',
      times: [
        {
          time: '04.13 (六) 12:30',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 17:20',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '絕 ‧ 種',
      EName: 'The Seeding',
      filmId: '3784',
      length: '113',
      times: [
        {
          time: '04.14 (日) 17:00',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: true
        },
        {
          time: '04.18 (四) 19:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.19 (五) 17:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '作家不跳舞： 等待貝克特',
      EName: 'Dance First',
      filmId: '3807',
      length: '113',
      times: [
        {
          time: '04.12 (五) 19:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.14 (日) 10:20',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: true
        },
        {
          time: '04.18 (四) 17:30',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '未來的我們在昨日相愛',
      EName: 'Embryo Larva Butterfly',
      filmId: '3770',
      length: '113',
      times: [
        {
          time: '04.13 (六) 17:10',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.15 (一) 17:00',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 19:40',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '掏心戀習生',
      EName: 'With Love and a Major Organ',
      filmId: '3778',
      length: '113',
      times: [
        {
          time: '04.12 (五) 21:40',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.16 (二) 17:10',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.21 (日) 15:10',
          place: '信義威秀10廳',
          locked: false,
          deleted: true,
          danger: false
        }
      ]
    },
    {
      CName: '拍血少年',
      EName: 'All You Need Is Blood',
      filmId: '3795',
      length: '160',
      times: [
        {
          time: '04.12 (五) 14:50',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.14 (日) 14:50',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 15:20',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.21 (日) 21:40',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '新．里見八犬傳',
      EName: 'The Legend of Eight Samurai',
      filmId: '3798',
      length: '113',
      times: [
        {
          time: '04.14 (日) 19:00',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.15 (一) 16:10',
          place: 'MUVIE TITAN',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.17 (三) 21:00',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 21:10',
          place: 'MUVIE TITAN',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    },
    {
      CName: '荒蕪之地．應許之心',
      EName: 'The Promised Land',
      filmId: '3782',
      length: '113',
      times: [
        {
          time: '04.14 (日) 19:10',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.15 (一) 16:30',
          place: '信義威秀11廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.18 (四) 12:40',
          place: '信義威秀10廳',
          locked: false,
          deleted: false,
          danger: false
        },
        {
          time: '04.21 (日) 16:00',
          place: 'MUVIE TITAN',
          locked: false,
          deleted: false,
          danger: false
        }
      ]
    }
  ])

  /**
   * 收藏場次
   * @param {Object} screening
   * @param {string} filmId
   */
  const likeScreeningToggle = (screening, id) => {
    const targetFilm = films.find((film) => film.filmId === id)
    if (targetFilm) {
      const targetScreeningIdx = targetFilm.times.findIndex(
        (screen) => screen.time === screening.time && screen.place === screening.place
      )
      if (targetScreeningIdx === -1) {
        targetFilm.times.push(screening)
      } else {
        targetFilm.times.splice(targetScreeningIdx, 1)
      }
    } else {
      const film = getFilmById(id)
      film.times.map((screening) => {
        screening.danger = false
        screening.locked = false
        screening.deleted = false
      })
      films.push()
    }
  }

  /**
   * 是否已收藏該場次
   * @param {string} time
   * @param {string} filmId
   * @returns {boolean}
   */
  const isLiked = (time, id) => {
    const film = films.find((film) => film.filmId === id)
    if (film) {
      return film.times.some((screening) => screening.time === time)
    }
    return false
  }

  const filmsOfTheDay = (date) =>
    computed(() =>
      films.filter((film) => film.times.some((screening) => screening.time.includes(date)))
    )
  const screeningsOfTheDay = (date) =>
    computed(() => {
      const result = reactive([])
      films.map((film) => {
        film.times.map((screening) => {
          if (screening.time.includes(date)) {
            result.push({
              CName: film.CName,
              EName: film.EName,
              filmId: film.filmId,
              length: film.length,
              times: screening
            })
          }
        })
      })

      return result
    })

  const deleteScreeningOfTheDay = (date) => {
    films.map((film) => {
      film.times.map((screening) => {
        if (screening.time.includes(date)) {
          screening.deleted = true
        }
      })
    })
  }

  return {
    isLiked,
    films,
    likeScreeningToggle,
    filmsOfTheDay,
    screeningsOfTheDay,
    deleteScreeningOfTheDay
  }
})
