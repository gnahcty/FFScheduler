// 電影資訊-文字區塊
//這裡是電影資訊的文字區塊，包含電影名稱、導演、獎項、影展、上映年份、片長、分級、簡介等資訊。
<template>
  <div class="flex flex-col gap-6">
    <!-- title & dir -->
    <div class="order-[1] flex flex-col gap-3">
      <div class="flex w-full items-center justify-between">
        <!-- film title -->
        <div class="flex flex-shrink flex-col overflow-clip">
          <p class="truncate text-3xl font-bold">拍血少年</p>
          <p class="truncate text-3xl font-bold">All you need is blood</p>
        </div>
        <!-- film title -->

        <!-- like btn  -->
        <div class="ml-3 w-8 lg:hidden">
          <span class="pi pi-heart text-3xl text-gray-400 hover:text-primary-500"></span>
        </div>
        <!-- like btn  -->
      </div>

      <!-- director -->
      <p>庫柏羅伯茲 Cooper ROBERTS</p>
      <!-- director -->
    </div>
    <!-- title & dir -->

    <!-- awards & specs -->
    <div class="order-[3] flex flex-col gap-2 lg:order-[2]">
      <!-- awards -->
      <div class="flex flex-col font-semibold text-yellow-700">
        <span>2023 西班牙Sitges 奇幻影展</span>
        <span>2023 葡萄牙波多奇幻影展</span>
        <span>2023 美國FilmQuest 奇幻影展</span>
        <span>2023 英國里茲影展</span>
      </div>
      <!-- awards -->

      <!-- specs -->
      <span> 美國 | 2023 | DCP | 彩色 | 101 分 | 18+</span>
      <!-- specs -->
    </div>
    <!-- awards & specs -->

    <!-- 簡介 -->
    <p class="order-[2] lg:order-[3]">
      小鎮少年巴奇有著藝術名導夢，鎮日拉著瘖啞好友在倉庫拍片，期待能創作出衝擊影展的曠世傑作。某天，一顆不祥隕石從天而降，內藏的異菌竟將巴奇的父親變成了活屍。強忍著悲痛、震驚與自己的恐血症，巴奇決定把握這千年一遇的機會，嘗試在原本企劃的文學電影中大添Ｂ級活屍元素。當臨時湊合的兩光班底接連淪為活屍，巴奇的巨作是否能有殺青的一天？
      導演左手描繪拍片狂、電影癡的浪漫血淚，右手刻劃藝文電影產業的冰冷現實，讓昆汀塔倫提諾的血腥美學與妙趣對白、大衛柯能堡的肉體變異和詭譎恐怖，在狀況百出的片場中碰撞出腦洞大開的火花。放肆玩出一部真正嘔心瀝「血」的活屍喜劇之餘，逆境求生的拍片精神及跨越生死的非凡情誼，更是意外催淚。
      「疼痛是暫時的，但電影是永遠的！」
    </p>
    <!-- 簡介 -->
  </div>
</template>
