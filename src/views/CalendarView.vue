<template>
  <div class="h-screen w-full px-5 py-20 lg:flex lg:px-20">
    <div class="h-full w-full">
      <!-- title -->
      <div class="mb-5 flex flex-1 items-stretch justify-center lg:justify-start">
        <div class="text-3xl font-bold">影展場次</div>
      </div>
      <!-- title -->

      <!--for PC  -->
      <div class="hidden h-full w-full items-center justify-between gap-10 lg:flex">
        <FullCalendar />
        <HorizontalSchedule :films="films" />
      </div>
      <!--for PC  -->

      <!-- for pad and mobile -->
      <div class="flex h-full flex-col items-center lg:hidden">
        <Splitter :gutterSize="40" layout="vertical" class="h-full w-full">
          <SplitterPanel class="flex items-center justify-center overflow-clip">
            <FullCalendar />
          </SplitterPanel>
          <SplitterPanel class="overflow-y-auto border-x-2 lg:hidden">
            <VerticalSchedule :films="films"></VerticalSchedule>
          </SplitterPanel>
        </Splitter>
      </div>
      <!-- for pad and mobile -->
    </div>
  </div>
</template>

<script setup>
const films = [
  {
    CName: "奔向彩虹 ",
    EName: "The Love Affair of Rainbow",
    filmId: "3800",
    photos: {
      photos0:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_376d7092e9f239c175f81062cb60bd08.jpeg",
    },
    length: "86 分",
    description:
      "富家公子羅敬晨最難忘的春日午後，是在山林采風時邂逅愛花如癡的溪畔女子張曉虹。宛若在虛假塵世尋見完美真實，兩人一見如故。一是不願接班的時裝巨擘之子，一是心繫自然的鄉村 果農之女，縱使男方家長冷言相逼，兩人也決心共結連理。曉虹堅定陪伴敬晨步上作家之路，但大姑的到訪，卻為樸實的生活埋下不安的種子。<br>改編自瓊瑤短篇小說〈五朵玫瑰〉，畫家出身的directors高山嵐亦親自擔任美術指導，夢幻唯美的暈染構圖頗有其畫作的神韻，攝影師林鴻鐘特異大膽的運鏡同樣極具先鋒性。永遠的女神林青霞從淸新純 樸到都會時尚，變換多種風格造型，攜手文藝小生秦祥林共譜浪漫脫俗戀曲，搭襯鳳飛飛深情獻唱的主題樂曲，在繁華都會與絕美山林間，深問一句「我是誰」。<br>「聽說在那片山裡，有一塊很好很好的地，有很好很好的水源，可以變成一個最好最好的花園。」",
    directors: [
      {
        "director name": "高山嵐 KAO San Lan",
      },
    ],
    times: [
      { time: "04.13  〈六〉 10:20", place: "信義威秀11廳" },
      { time: "04.18  〈四〉 15:20", place: "信義威秀11廳" },
      { time: "04.21  〈日〉 19:50", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "阿達一族 ",
    EName: "The Addams Family",
    filmId: "3803",
    category: "影迷許願池",
    photos: {
      photos0: "https://img.youtube.com/vi/2NfCJPNEg4E/maxresdefault.jpg",
    },
    length: "100 分",
    description:
      "熱情如火與冷靜理性的暗黑絕配高魔子和愛妻魔帝女，與酷愛謀殺遊戲的一對兒女星期三和帕斯理，過著異於常人、恐怖又溫馨的生活。某天，陌生男子突然造訪，自稱是高魔子那失蹤多 年的哥哥肥斯特，一連串光怪陸離的謎樣事件就此爆發！<br>Netflix 於 2022 年推出的大熱門影集《星期三》，原為〈紐約客〉雜誌的連載漫畫，多次被翻拍成影集、電影、動畫。其中最受到好評的，當屬directors巴瑞索納費德 1991 年的電影版本《阿達一族》 ，率領一時之選的演員陣容如高魔子勞爾朱利亞、魔帝女安潔莉卡休士頓、年僅十歲便撐起全家的星期三克莉絲汀娜蕾茜等，奠定了三十年屹立不搖的經典地位與形象。你內心的暗黑欲望蠢蠢欲動、 想成為「阿達」一族嗎？跨越世代的超級扮裝場，奇幻影展限定登場！<br>「那些女童軍餅乾是用真的女童軍做的嗎？」",
    directors: [
      {
        "director name": "巴瑞索納費德 Barry SONNENFELD",
      },
    ],
    times: [
      { time: "04.14  〈日〉 18:40", place: "MUVIE TITAN" },
      { time: "04.18  〈四〉 21:40", place: "信義威秀11廳" },
      { time: "04.19  〈五〉 10:20", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "無限泡湯兩分鐘 ",
    EName: "River",
    filmId: "3774",
    photos: {
      photos0: "https://img.youtube.com/vi/WmQ_gOjm3uk/maxresdefault.jpg",
    },
    region: "日本 | 2023 | DCP | 彩色",
    length: "86 分",
    description:
      "倒完又斟滿的酒瓶、無限增生的雜炊飯、重複下筆又消失的小說段落⋯⋯，倚著潺潺流水的京都貴船百年旅館，突如其來迎接不斷重複的兩分鐘！無止盡的時間迴圈，不只衝擊住客，也讓員 工們手忙腳亂，眾人循線逐題破解試圖逃出生天，越破解卻越難以理解，難道眞有河神以愛之名，讓時光在此佇留？<br>directors山口淳太繼口碑爆棚的首作《超越無限兩分鐘》後，再度與《春宵苦短，少女前進吧！》編劇上田誠合作，找回舞台劇人馬繼續無限迴圈。延續前作無限可能的世界，以別具創意的劇本讓《無限 泡湯兩分鐘》晉升《超越無限兩分鐘》2.0，瘋狂奇想與荒誕幽默也隨之升級，毫無懸念入選各大奇幻影展，更在日本TAMA 電影獎與《蒼鷺與少年》齊名，一同拿下頒發給劇組全體工作人員的特別獎 。<br>「下一個兩分鐘我們約會吧！」",
    directors: [
      {
        "director name": "山口淳太 YAMAGUCHI Junta",
      },
    ],
    times: [
      { time: "04.14  〈日〉 12:30", place: "信義威秀10廳" },
      { time: "04.15  〈一〉 14:30", place: "信義威秀11廳" },
      { time: "04.16  〈二〉 19:30", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 10:40", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 10:40", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "沙漠大冒險 ",
    EName: "Sand Land",
    filmId: "3777",
    category: "東瀛狂想",
    photos: {
      photos0: "https://img.youtube.com/vi/-lLvznTdsPM/maxresdefault.jpg",
    },
    length: "106 分",
    description:
      "塵土飛揚，豔陽高照，瀕臨毀滅的沙漠世界水源不足，倖存的人民和妖怪都喊渴叫苦。小鎮保安官來到妖怪巢穴尋求幫助，用電動玩具收買了惡魔王子，還帶上見識淵博的老小偷妖怪，三 人為了找尋傳說的夢幻之泉開車上路。沒想到探險旅途危機四伏，也意外發現過往戰爭的眞相並不單純。他們究竟能否發現水源，以及旱災背後的陰謀企圖？<br>甫推出便話題不斷，週邊、電玩、劇集火速延燒，由萬代南夢宮日昇、神風、ANIMA 動畫製作夢幻聯手，將漫畫大師鳥山明「傳說中的名作」搬上大銀幕！獨特完整的世界觀、精密前衛的機械甲、活 躍迷人的眾角色，打造別具風格的末日冒險。分鏡畫稿筆觸完美融入空間場景，打鬥臨場速度感更添爆發力，幽默輕巧敘事兼具關照環境及貪婪人性，層次飽滿不愧被稱之為壓倒性完成品。<br>沒想到能拍成電影，簡直像做夢一樣。────鳥山明",
    directors: [
      {
        "director name": "横嶋俊久 YOKOSHIMA Toshihisa",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38542_de6a54467588def2916d84a7564246f7.jpg",
        "director description":
          "1980年生，日本動畫directors、表演指導。曾拍攝多部廣告、MV、片頭動畫，2009年執導首部動畫短片《Amanatsu》便入選國際影展，2017年《Cocolors》獲加拿大奇幻影展最佳動畫短片及日本文化廳媒體藝術祭動畫優秀獎。《沙漠大冒險》為其首部動畫長片，並將於2024年推出同名動畫劇集。",
      },
    ],
    times: [
      { time: "04.13  〈六〉 14:30", place: "信義威秀11廳" },
      { time: "04.16  〈二〉 12:30", place: "信義威秀11廳" },
      { time: "04.18  〈四〉 13:00", place: "信義威秀11廳" },
      { time: "04.19  〈五〉 19:40", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "邪厄恩典 ",
    EName: "Raging Grace",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3790?search_year=2024&search_category=FFF&ghff_id=645",
    filmId: "3790",
    category: "就在驚夜",
    photos: {
      photos0: "https://img.youtube.com/vi/Us2mgS0sQ8A/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_e6c5470c88272de28752417c93929836.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_6418fa128a72ea1e5db6392ceba8419b.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_f27364202d9de5bf7eb5a509892c38f3.jpeg",
      photos4:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_a2fe34f62768bd327b2e3d341dc6da5d.jpeg",
    },
    region: "英國",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "100 分",
    rating: "12+",
    note: "",
    awards: [
      "2023 SXSW 影展評審團大獎、雷鳥新星獎",
      "2023 瑞士紐沙特奇幻影展觀眾票選、國際影評人、青年評審團獎",
      "2023 西班牙Sitges 奇幻影展",
      "2023 加拿大奇幻影展",
    ],
    description:
      "來自菲律賓的喬伊是個家事淸潔工，沒有簽證只能偷帶著女兒在倫敦各處打黑工。從新雇主凱瑟琳手上獲得郊區豪宅工作，陰森宅邸裡僅住著她與臥病昏迷的老叔叔。凱瑟琳餵藥不假他人 之手，喬伊只需簡單看護、居家打掃，薪資不差還包住宿，唯一條件是要即刻上工。喬伊將女兒偷渡進屋，調皮的女兒卻不理會警告到處溜達。眼看她誤打誤撞，即將掀開潘朵拉的盒子⋯⋯。<br>英國菲裔新秀directors從自身移民族群視角出發，將對外籍移工處境的批判藏在邪惡驚悚的暗黑哥德美學之中，尤其劇中菲籍女主角雖深受迫害，卻非消極受害之姿，恐怖類型也因此提升至更高格局。既 有童話故事《藍鬍子》般的神祕張力，陰森壓迫的氛圍營造更是不在話下。難以預料的角色關係與劇情發展百轉千迴，螳螂捕蟬卻非黃雀在後，不到最後，不知誰死誰手。<br>精彩融合哥德驚悚與社會批判，令人毛骨悚然的首部作品！────〈視與聽〉雜誌",
    directors: [
      {
        "director name": "派瑞斯札西拉 Paris ZARCILLA",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_31637_067bf67b0904ba24b44cabacddb05965.jpg",
        "director description":
          "菲律賓裔英國directors、編劇，作品橫跨影視產業。曾以短片《Feel Flows》和《Pommel》入選多個國際影展，2023年首部劇情長片《邪厄恩典》更在SXSW影展獲得評審團大獎和代表最佳首作的雷鳥新星獎，並於各大奇幻影展廣獲好評。",
      },
    ],
    times: [
      { time: "04.13  〈六〉 12:30", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 17:20", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "絕 ‧ 種 ",
    EName: "The Seeding",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3784?search_year=2024&search_category=FFF&ghff_id=646",
    filmId: "3784",
    category: "午夜特快車",
    photos: {
      photos0: "https://img.youtube.com/vi/YpsfhxCchcw/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_a3d7deb4977afb3a34546b41c773ecf6.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_66efa5f746116bd8e48a5c7e2e0a256f.jpeg",
    },
    region: "美國",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "100 分",
    rating: "15+",
    note: "",
    awards: [
      "2024 法國Gérardmer 奇幻影展青少年評審團獎",
      "2023 西班牙Sitges 奇幻影展最佳女演員",
      "2023 翠貝卡影展",
      "2023 德國奇幻影展",
      "2023 富川奇幻影展",
    ],
    description:
      "炎日當頭，男人隻身跋涉沙漠，拍下日蝕美景的瞬間也落入黑暗，遭宣稱走失的少年引入險境。夜幕降臨，男人進入荒漠間的低谷，神祕女子與她的小屋橫空現身。日出之際，男人發現自 己已身陷囹圄，崖上的邪魔青年們視他為玩物，如甕中捉鱉。在世界盡頭的困獸之鬥，一條即將降世的繼起生命，能否替他換來一線生機？<br>宛如上世紀經典《沙丘之女》的新番，將同樣被地平線切割為兩面的平行世界，搬移至沙漠。上方是野性大發的青年環伺，底下是走投無路的深淵牢籠，進退維谷。捕捉後末日的震懾餘燼，提取人性 中的原始邪惡。萬物不僅有靈更有邪氣，精神折磨加乘肉體侵害，在荒蕪中的峽谷間，隨一次次滿月推進的軌跡，上演末世求生的亙古寓言。<br>劃破焦土的駭人哭喊，鑽入五感神經的驚悚寓言。",
    directors: [
      {
        "director name": "巴納比克雷 Barnaby CLAY",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38547_f4988f0219e592b105d9087b5ded926d.jpg",
        "director description":
          "1973年生於英國。倫敦電影學校畢業後，開始執導廣告、MV，合作過的音樂人包括大衛鮑伊、Yeah Yeah Yeahs。影像創作內容以驚悚恐怖類型為主，2007年以短片《Finkle’s Odyssey 》於國際影展嶄露頭角，曾執導音樂紀錄片《搖滾快門》。《絕 ‧ 種》為其首部劇情長片。",
      },
    ],
    times: [
      { time: "04.14  〈日〉 17:00", place: "信義威秀11廳" },
      { time: "04.18  〈四〉 19:30", place: "信義威秀11廳" },
      { time: "04.19  〈五〉 17:30", place: "信義威秀11廳" },
    ],
  },
  {
    CName: "作家不跳舞： 等待貝克特 ",
    EName: "Dance First",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3807?search_year=2024&search_category=FFF&ghff_id=641",
    filmId: "3807",
    category: "當代奇幻",
    photos: {
      photos0: "https://img.youtube.com/vi/tI2blxkIPwA/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_307bd894dee72db53bf35e0f95a2b9da.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_e7139c6660e3068b51df6ff3e309174a.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_d95c6b0acc7979e029c00ebcb1f7ebd4.jpeg",
    },
    region: "英國",
    year: "2023",
    規格: "DCP",
    color: "彩色+黑白",
    length: "100 分",
    rating: "6+",
    note: "",
    awards: [
      "2023 聖塞巴斯汀影展",
      "2023 波蘭Camerimage電影攝影影展",
      "2023 都靈影展",
      "2023 聖保羅影展",
    ],
    description:
      "掌聲乍響，卻褪盡榮光，諾貝爾文學獎得主貝克特的登台彷如一齣荒誕戲碼，非比尋常。到底是實至名歸還是災難現場？這是一場作家與作家的自我對話。貝克特的往日生活就像一張悲喜 交織的網，有影響至深的母親、有二戰並肩的同志、有相扶隱居的妻子，更有以文相知的情婦。生活喜樂在何方？童年的風箏畢生難忘。<br>《愛的萬物論》directors詹姆士馬許再以影像立傳，這回將鏡頭轉向愛爾蘭文學巨匠山繆貝克特的傳奇人生。愛爾蘭資深男演員蓋布瑞拜恩一人分飾兩角，在片中極致演繹貝克特的自我詰問，更聯手《正 常人》搶眼新星菲恩奧沙，分章節共塑貝克特的多階段人生。從年輕氣盛的孤傲理想，到洗盡鉛華的內斂深沉，平穩運鏡典雅別緻，心緒輾轉引人深思。<br>狄狄和戈戈在等待果陀，貝克特在等待什麼？",
    directors: [
      {
        "director name": "詹姆士馬許 James MARSH",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_12934_663503bb9e1f72cd87cf9fc6ef27ea69.jpg",
        "director description":
          "1963年生於英國，directors、製片，作品橫跨劇情、紀錄及影集。2008年以《偷天鋼索人》獲奧斯卡最佳紀錄片，2014年《愛的萬物論》獲奧斯卡最佳男主角和英國金像獎最佳影片。作品尚有《盜王之王》、《獨帆之聲》，以及影集《罪夜之奔》等。",
      },
    ],
    times: [
      { time: "04.12  〈五〉 19:30", place: "信義威秀11廳" },
      { time: "04.14  〈日〉 10:20", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 17:30", place: "信義威秀10廳" },
    ],
  },
  {
    CName: "未來的我們在昨日相愛 ",
    EName: "Embryo Larva Butterfly",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3770?search_year=2024&search_category=FFF&ghff_id=642",
    filmId: "3770",
    category: "非一般愛情",
    photos: {
      photos0: "https://img.youtube.com/vi/liEJ7ahg85A/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_3f602dbf4c6f33c99f78d9a2a885f5af.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_4d47cca804ad803cfc2381f86b2d6d1b.jpeg",
    },
    region: "希臘、賽普勒斯",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "92 分",
    rating: "15+",
    note: "",
    awards: [
      "2023 鐵薩隆尼基影展觀眾票選、ERT原創音樂獎",
      "2023 西班牙Sitges 奇幻影展",
      "2023 卡羅維瓦利影展",
      "2023 阿德萊德影展",
      "2023 西班牙希洪影展",
      "2023 日內瓦影展",
    ],
    description:
      "胚胎、幼蟲、蝴蝶，是昆蟲的生命週期，也是線性時間的排序。然而在這個非線性時空隨機暴走的世界，一切雖已注定，卻仍教人措手不及。昨天生在未來，今天造訪過去，每天睜眼醒來 ，皆擺渡在時間的虛海裡。離婚是未來，幸福是過去，悲傷是此刻，一對時空旅人夫妻日日以此不斷自問，只因腹中的孩子不曾在未來出現，讓他們焦慮自疑⋯⋯。<br>賽普勒斯籍編導挑戰敘事常規，大膽將線性時間剪碎，裁成立體方正的十日碎片，邀請觀眾沉浸一段預知又未知的奇異旅程。以詩意柔和的攝影基調，再現彷如義大利名家波提切利的畫作美學，更在 戲劇高點大膽調度異色剪輯，極具視覺衝擊。在風格遊走間，展現科技與自然的矛盾，探問代理孕母的現代課題，也思辯生命的因果起滅。<br>失去，負疚，與渴望，是記憶開始的地方。────凱羅斯帕帕瓦西利烏",
    directors: [
      {
        "director name": "凱羅斯帕帕瓦西利烏 Kyros PAPAVASSILIOU",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38538_db2845363cb1fe24c62080c4c849f5e3.jpg",
        "director description":
          "1972年生於賽普勒斯，directors、編劇。2007年以短片《In the Name of the Sparrow》入選坎城影展短片競賽。首部劇情長片《Impressions of a Drowned Man》入選2015年鹿特丹影展。除了電影製作，他也參與編作劇場的編導工作，並曾出版詩集。《未來的我們在昨日相愛》為其最新長片作品。",
      },
    ],
    times: [
      { time: "04.13  〈六〉 17:10", place: "信義威秀10廳" },
      { time: "04.15  〈一〉 17:00", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 19:40", place: "信義威秀10廳" },
    ],
  },
  {
    CName: "掏心戀習生 ",
    EName: "With Love and a Major Organ",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3778?search_year=2024&search_category=FFF&ghff_id=642",
    filmId: "3778",
    category: "非一般愛情",
    photos: {
      photos0: "https://img.youtube.com/vi/odGy4uxvZxI/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_36baabe1af27e294a0268c2b436e8244.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_f784051cff52ab0e508e3952d8fb34d7.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_a2e5735d1b5e02a9a4127033b9c93d6d.jpeg",
    },
    region: "加拿大",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "91 分",
    rating: "12+",
    note: "",
    awards: [
      "2023 多倫多 Reelworld 影展最佳劇情長片、演員、攝影",
      "2023 SXSW 影展",
      "2023 富川奇幻影展",
      "2023 加拿大奇幻影展",
    ],
    description:
      "我們的心是什麼做的？在提倡壓抑情緒、大數據掌握生活的近未來世界裡，承載情感的心臟是可以被取出的物件。鬼靈精怪的安娜貝卻感到格格不入：她熱愛藝術，也追隨她活蹦亂跳的心 。當遇到令她一見傾心的男子，頓時戀愛腦爆炸，愛與痛交織，悲與喜碰撞，甜蜜地負荷著愛情的重量。然而他卻無動於衷，她決定要把心掏出來送給他。<br>改編自同名舞台劇，新銳directors金歐布萊特首執導筒，以風格化的影像和配樂，帶來一齣節奏明快、清新浪漫的魔幻寫實輕喜劇。一來一往對白充滿幽默機智，以及對科技冷漠社會的批判嘲諷，更巧妙 將「心」具象化，描摹愛情甜而不膩。無論科技再怎麼進步，人類走的情感路永遠在重複，即便把心交付出去無比危險，墜入情網的我們還是義無反顧。<br>如查理考夫曼和尤格藍西莫的完美合體。────Film Inquiry 網站",
    directors: [
      {
        "director name": "金歐布萊特 金歐布萊特",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38543_8b9ff6eea759421cfa71d25125f08517.jpg",
        "director description":
          "加拿大／英國／菲律賓directors。原於加拿大攻讀生物及建築學位，2007年移居倫敦後從MV和廣告開始directors生涯。執導之短片《Dragonfly》、《Edward's Turmoil》、《Albatross》、《The Purple Plain》皆入選倫敦影展。《掏心戀習生》為其首部劇情長片。",
      },
    ],
    times: [
      { time: "04.12  〈五〉 21:40", place: "信義威秀11廳" },
      { time: "04.16  〈二〉 17:10", place: "信義威秀11廳" },
      { time: "04.21  〈日〉 15:10", place: "信義威秀10廳" },
    ],
  },
  {
    CName: "拍血少年 ",
    EName: "All You Need Is Blood",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3795?search_year=2024&search_category=FFF&ghff_id=643",
    filmId: "3795",
    category: "喜劇后里穴",
    photos: {
      photos0: "https://img.youtube.com/vi/krAlbxYVJyE/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_db22fe0ddf62a3ed50a77650eb330440.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_b88b78092600efb856a7f8d0b15e74b3.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_5ab543fc510369c5f45327899b9875ac.jpeg",
    },
    region: "美國",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "101 分",
    rating: "18+",
    note: "",
    awards: [
      "2023 西班牙Sitges 奇幻影展",
      "2023 葡萄牙波多奇幻影展",
      "2023 美國FilmQuest 奇幻影展",
      "2023 英國里茲影展",
    ],
    description:
      "小鎮少年巴奇有著藝術名導夢，鎮日拉著瘖啞好友在倉庫拍片，期待能創作出衝擊影展的曠世傑作。某天，一顆不祥隕石從天而降，內藏的異菌竟將巴奇的父親變成了活屍。強忍著悲痛、 震驚與自己的恐血症，巴奇決定把握這千年一遇的機會，嘗試在原本企劃的文學電影中大添Ｂ級活屍元素。當臨時湊合的兩光班底接連淪為活屍，巴奇的巨作是否能有殺青的一天？<br>directors左手描繪拍片狂、電影癡的浪漫血淚，右手刻劃藝文電影產業的冰冷現實，讓昆汀塔倫提諾的血腥美學與妙趣對白、大衛柯能堡的肉體變異和詭譎恐怖，在狀況百出的片場中碰撞出腦洞大開的火 花。放肆玩出一部真正嘔心瀝「血」的活屍喜劇之餘，逆境求生的拍片精神及跨越生死的非凡情誼，更是意外催淚。<br>「疼痛是暫時的，但電影是永遠的！」",
    directors: [
      {
        "director name": "庫柏羅伯茲 Cooper ROBERTS",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38553_16e76a80eb8f6ea7139125803f0ba6c3.jpg",
        "director description":
          "以拍攝廣告與MV見長，MV合導作品《Joal Compass: Back to Me》於2014年獲SXSW影展評審團大獎，《The Dead Weather: I Feel Love, Every Million Miles》獲2016年葛萊美獎最佳MV獎入圍肯定。2023年執導、編劇並剪輯的首部劇情長片《拍血少年》即入選Sitges奇幻影展午夜超限單元。",
      },
    ],
    times: [
      { time: "04.12  〈五〉 14:50", place: "信義威秀11廳" },
      { time: "04.14  〈日〉 14:50", place: "信義威秀11廳" },
      { time: "04.18  〈四〉 15:20", place: "信義威秀10廳" },
      { time: "04.21  〈日〉 21:40", place: "信義威秀10廳" },
    ],
  },
  {
    CName: "新．里見八犬傳 ",
    EName: "The Legend of Eight Samurai",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3798?search_year=2024&search_category=FFF&ghff_id=647",
    filmId: "3798",
    category: "影迷許願池",
    photos: {
      photos0: "https://img.youtube.com/vi/mmNwuXnsS4k/hqdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_17b9baf0664d9eabe33f63620b11ccf3.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_8411289f7bff8b54db11ab000166b31a.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_b2f2b5bb8f6d6d47e06a87097639e511.jpeg",
    },
    region: "日本",
    year: "1983",
    規格: "DCP",
    color: "彩色",
    length: "136 分",
    rating: "12+",
    note: "▲影片非英語發音且無英文字幕",
    awards:
      "1985 日本電影金像獎最佳directors、男主角、女配角提名 1985 法國 Avoriaz 奇幻影展",
    description:
      "煙硝四起，館山城主里見家遭仇家攻陷，幾乎滅族，唯獨靜姬公主倖存，仇家誓言斬草除根。公主獨自逃亡，為孤兒親兵衛所救，而身懷神珠、散落各處的八名將士們也一一聚首。世紀之 仇重啟，百年傳說成真，舉世生靈塗炭、怪物肆虐之時，親兵衛與靜姬的愛情正悄悄萌芽。<br>1983 年於日本上映造成轟動、創下影史票房紀錄的《新．里見八犬傳》，改編自日本作家鎌田敏夫的同名神怪小說。由《水手服與機關槍》聲名大噪的藥師丸博子，聯手影帝真田廣之共譜百年宿命的青春愛戀，名導深作欣二的劃時代經典雜揉東方傳奇、西方美學，古裝奇幻混搭西洋搖滾，破天荒邀請美國歌手約翰班諾演唱主題曲〈Satomi Hakken Den〉。如今以4K修復之姿世紀回歸大銀幕，前衛風格與華麗視覺重磅再現！<br>忠犬降妖伏魔、真愛領路前行，華麗之役即刻開戰。",
    directors: [
      {
        "director name": "深作欣二 FUKASAKU Kinji",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_5700_7c5ac2b2d3166d44063d288946ee8349.jpg",
        "director description":
          "1930年生，東映電影公司出身。以動作、暴力、血腥題材見長，又以極道故事為人所知。1982年以《愛之物語》橫掃國內四座最佳directors獎，代表作包括《大逃殺》系列，在拍攝《大逃殺2：決戰天堂》期間與世長辭，享壽七十三歲。",
      },
    ],
    times: [
      { time: "04.14  〈日〉 19:00", place: "信義威秀10廳" },
      { time: "04.15  〈一〉 16:10", place: "MUVIE TITAN" },
      { time: "04.17  〈三〉 21:00", place: "信義威秀10廳" },
      { time: "04.18  〈四〉 21:10", place: "MUVIE TITAN" },
    ],
  },
  {
    CName: "荒蕪之地．應許之心 ",
    EName: "The Promised Land",
    link:
      "https://www.goldenhorse.org.tw/film/programme/films/detail/3782?search_year=2024&search_category=FFF&ghff_id=642",
    filmId: "3782",
    category: "非一般愛情",
    photos: {
      photos0: "https://img.youtube.com/vi/qJSMWrnRRGw/maxresdefault.jpg",
      photos1:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_b08a4f40187bbadbb361aeb406152055.jpeg",
      photos2:
        " https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_3cd2ee785c286c141baf2b734ccf47bc.jpeg",
      photos3:
        "https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_a072f35bdfbe1830768c504964d35460.jpeg",
    },
    region: "丹麥、瑞典、德國",
    year: "2023",
    規格: "DCP",
    color: "彩色",
    length: "122 分",
    rating: "15+",
    note: "",
    awards: [
      "2024 哥特堡影展觀眾票選、影評人費比西獎",
      "2024 丹麥羅伯獎最佳影片、改編劇本、男主角、男配角、攝影、藝術指導等九項大獎",
      "2023 威尼斯影展天主敎文化獎榮譽提及",
      "2023 歐洲電影獎最佳男演員、攝影、服裝設計",
      "2023 多倫多影展",
      "2023 聖塞巴斯汀影展",
    ],
    description:
      "1755 年，杳無人煙的丹麥荒原迎來了新的開拓者。出身低賤的退伍軍官獨排眾議，自請開墾荒地，只為換得畢生渴求的榮譽頭銜。他雇用一對逃奴夫妻充當勞力，卻惹毛蠻橫自大的年輕地主，捲入宮廷內外的權謀角力。儘管拓荒之路困難重重，軍官不惜賭上所有。而那顆剛毅卻貧瘠的心，也因環繞在身旁的虔誠神父、羅姆女孩、堅韌女僕，與被囚困的貴族女子而慢慢解凍，開出向生 之花。<br>改編自作家伊達傑森的小說，《皇家風流史》丹麥directors尼克萊阿瑟與邁茲米克森再攜手，以優美運鏡、磅礡配樂，在北歐的遼闊地景上，寫就一齣開墾拓荒的宏大史詩，也溫柔描繪曠野中的孤獨與浪 漫。有著對複雜人性的細膩刻劃，亦探究了人與自然、權力、命運的關係，追問混沌人生的終極意義。當一切只剩下荒蕪，唯有愛能帶來救贖。<br>若我們除了野心與欲望之外一無所有，那它們必定以失敗收場。────尼克萊阿瑟<br> ",
    directors: [
      {
        "director name": "尼克萊阿瑟 Nikolaj ARCEL",
        "director photo":
          "https://storage.googleapis.com/tghff_outland/image/person/ghff/person_38545_541071b572e0248b1b49ee9783d70bb1.jpg",
        "director description":
          "1972年生於丹麥，編劇、directors。2011年以編劇作品《龍紋身的女孩》入圍英國金像獎最佳改編劇本，2012年以編導作品《皇家風流史》獲柏林影展最佳劇本，並於隔年提名奧斯卡金像獎最佳外語片。《荒蕪之地．應許之心》為其最新作品。",
      },
    ],
    times: [
      { time: "04.14  〈日〉 19:10", place: "信義威秀11廳" },
      { time: "04.15  〈一〉 16:30", place: "信義威秀11廳" },
      { time: "04.18  〈四〉 12:40", place: "信義威秀10廳" },
      { time: "04.21  〈日〉 16:00", place: "MUVIE TITAN" },
    ],
  },
];
</script>
