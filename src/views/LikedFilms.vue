// 收藏清單頁面
<template>
  <div class="py-14">
    <!-- 收藏清單header -->
    <LikedPageHeader></LikedPageHeader>
    <!-- 收藏清單header -->

    <div class="pt-4">
      <div v-for="(film, i) in films" :key="film.filmId">
        <!-- 收藏清單 -->
        <LikedList v-model:filmModel="films[i]"></LikedList>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const films = reactive([
  {
    CName: '奔向彩虹 ',
    EName: 'The Love Affair of Rainbow',
    filmId: '3800',
    times: [
      {
        time: '04.13(六) 10:20',
        place: '信義威秀11廳',
        locked: true,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 15:20',
        place: '信義威秀11廳',
        locked: false,
        deleted: true,
        danger: true
      },
      {
        time: '04.21(日) 19:50',
        place: '信義威秀11廳',
        locked: false,
        deleted: true,
        danger: false
      }
    ]
  },
  {
    CName: '阿達一族 ',
    EName: 'The Addams Family',
    filmId: '3803',
    times: [
      {
        time: '04.14(日) 18:40',
        place: 'MUVIE TITAN',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 21:40',
        place: '信義威秀11廳',
        locked: true,
        deleted: false,
        danger: true
      },
      {
        time: '04.19(五) 10:20',
        place: '信義威秀11廳',
        locked: false,
        deleted: true,
        danger: false
      }
    ]
  },
  {
    CName: '無限泡湯兩分鐘 ',
    EName: 'River',
    filmId: '3774',
    times: [
      {
        time: '04.14(日) 12:30',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.15(一) 14:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: true
      },
      {
        time: '04.16(二) 19:30',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 10:40',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: true
      },
      {
        time: '04.18(四) 10:40',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '沙漠大冒險 ',
    EName: 'Sand Land',
    filmId: '3777',
    times: [
      {
        time: '04.13(六) 14:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.16(二) 12:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 13:00',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.19(五) 19:40',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: true
      }
    ]
  },
  {
    CName: '邪厄恩典 ',
    EName: 'Raging Grace',
    filmId: '3790',
    times: [
      {
        time: '04.13(六) 12:30',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 17:20',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '絕 ‧ 種 ',
    EName: 'The Seeding',
    filmId: '3784',
    times: [
      {
        time: '04.14(日) 17:00',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: true
      },
      {
        time: '04.18(四) 19:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.19(五) 17:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '作家不跳舞： 等待貝克特 ',
    EName: 'Dance First',
    filmId: '3807',
    times: [
      {
        time: '04.12(五) 19:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.14(日) 10:20',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: true
      },
      {
        time: '04.18(四) 17:30',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '未來的我們在昨日相愛 ',
    EName: 'Embryo Larva Butterfly',
    filmId: '3770',
    times: [
      {
        time: '04.13(六) 17:10',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.15(一) 17:00',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 19:40',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '掏心戀習生 ',
    EName: 'With Love and a Major Organ',
    filmId: '3778',
    times: [
      {
        time: '04.12(五) 21:40',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.16(二) 17:10',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.21(日) 15:10',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '拍血少年 ',
    EName: 'All You Need Is Blood',
    filmId: '3795',
    times: [
      {
        time: '04.12(五) 14:50',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.14(日) 14:50',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 15:20',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.21(日) 21:40',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '新．里見八犬傳 ',
    EName: 'The Legend of Eight Samurai',
    filmId: '3798',
    times: [
      {
        time: '04.14(日) 19:00',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.15(一) 16:10',
        place: 'MUVIE TITAN',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.17(三) 21:00',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 21:10',
        place: 'MUVIE TITAN',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  },
  {
    CName: '荒蕪之地．應許之心 ',
    EName: 'The Promised Land',
    filmId: '3782',

    times: [
      {
        time: '04.14(日) 19:10',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.15(一) 16:30',
        place: '信義威秀11廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.18(四) 12:40',
        place: '信義威秀10廳',
        locked: false,
        deleted: false,
        danger: false
      },
      {
        time: '04.21(日) 16:00',
        place: 'MUVIE TITAN',
        locked: false,
        deleted: false,
        danger: false
      }
    ]
  }
])
</script>
