<template>
  <div class="container">
    <div class="content-table">
      <!-- <div class='table__navigation'>
        <i class="material-icons">
          keyboard_arrow_left
        </i>
        <div>Календарь</div>
        <i class="material-icons">
          keyboard_arrow_right
        </i>
      </div> -->
      <div class="table__navigation">
        <span>{{ getTime() }}</span>
        <!-- <div>{{ getTime() }}</div> -->
        <!-- <div class="navigation-config"> -->
        <div class="navigation__config">
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <span class="config_attribute" @click="configDateAtributte(`day`)">{{
            configDate.day + 1
          }}</span>
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <!-- new Date(y, m, 0).getDate() -->
          <span
            class="config_attribute"
            @click="configDateAtributte(`month`)"
            >{{ configDate.month + 1 }}</span
          >
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <span class="config_attribute" @click="configDateAtributte(`year`)">{{
            configDate.year
          }}</span>
          <button class="btn">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn color-config" @click="setTheme()">
            <i class="material-icons">
              brightness_4
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn color-config" @click="setCustomTheme()">
            <i class="material-icons">
              <i class="material-icons">
                color_lens
              </i>
            </i>
          </button>
        </div>
        <div class="picker-container" v-if="theme.showColorPicker">
          <color-picker
            :color="color"
            :sucker-hide="false"
            :sucker-canvas="suckerCanvas"
            :sucker-area="suckerArea"
            @changeColor="changeColor"
            @openSucker="openSucker"
          />
        </div>
        {{ color }}
        <!-- </div> -->
      </div>

      <table class="table">
        <thead class="">
          <tr>
            <th
              v-for="(days, i) in weekdays"
              :key="i"
              @click="test(i)"
              class="days__headers"
              :class="{ 'total-theme': theme.editTheme }"
            >
              {{ days }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 6" :key="n">
            <td
              v-for="(k, i) in 7"
              :key="i"
              class="table-td"
              :class="{ 'total-theme__td': theme.editTheme }"
            >
              <!-- <div>{{ i }}:{{ n }}</div> -->
              <div v-for=""></div>
              <div class="td-task">
                <div v-for="j in 2" :key="j" class="task-config">
                  Hello{{ j }}
                </div>
              </div>
            </td>
          </tr>


          <!-- <div v-for="j in 42">{{j}}</div> -->
          <!-- <tr v-for="i in fortd">
            <td v-for="j in fortd+1">{{j}}{{i}}</td>
          </tr> -->
          <!-- <tr v-for="(i,key) in fortd" :key="key">
            {{i}}
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import colorPicker from "@caohenghu/vue-colorpicker";
export default {
  name: "HelloWorld",
  components: {
    colorPicker
  },
  beforeCreate() {
    this.date = new Date().getTime();
  },
  created() {
    this.intervalId = setInterval(() => (this.date = Date.now()), 10);
    console.log("hi");
    //проще поставить Воскресенье первым столбцом
    console.log(new Date(2020, 2, 1).getDay(), "hete");
    if (this.weekdays[new Date(2020, 2, 1).getDay() + 6] == "Вс")
      console.log(this.weekdays[6], "this.h");
    else
      console.log(
        this.weekdays[new Date().getDay() - 1],
        "Выводит текущий день недели"
      );

    ///
    let days = new Date(
      this.configDate.year,
      this.configDate.month + 1,
      0
    ).getDate(); //нашёл!
    console.log(days, "days"); //всего дней в месяце
    console.log(
      this.weekdays[
        new Date(
          this.configDate.year,
          this.configDate.month,
          days - days
        ).getDay()
      ],
      "день недели последний в месяце"
    );


    // console.log(this.calendarDay);
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
  props: {
    msg: String
  },
  data: () => ({
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    date: new Date().getTime(),
    configDate: {
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    },

    color: "#59c7f9",
    suckerCanvas: null,
    suckerArea: [],
    isSucking: false,
    theme: {
      editTheme: false,
      editCustomColor: null,
      showColorPicker: false
      // :class="`picker-container__color_custom`:theme.editCustomColor"
    },
    table: [6][7],
    taskColors: [
      "#232EFF",
      "#BA5AFF",
      "#FF0080",
      "#FF5500",
      "#FF9000",
      "#FFD900",
      "#3AE2CE",
      "#00FFA9",
      "#E6FAFF"
    ],
    calendarDay: [],
    forHelp:'',
  }),
  methods: {
    test(e) {
      console.log(e);
    },
    getTime() {
      return new Date(this.date).toLocaleTimeString();
    },
    setTheme() {
      console.log("Test");
      this.theme.editTheme = !this.theme.editTheme;
    },
    changeColor(color) {
      // const {
      //   rgba: { r, g, b, a }
      // } = color;
      // console.log(color);
      console.log(color.hex);
      this.color = `${color}`;
      this.theme.editCustomColor = color.hex;
      // this.color = `rgba(${(r, g, b, a)})`;
      // console.log(this.color);
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    },
    setCustomTheme() {
      this.theme.showColorPicker = !this.theme.showColorPicker;
      console.log(this.theme.showColorPicker);
    },
    configMonthAttribute(param) {
      if (param == "-") {
        if (this.configDate.month == 0) {
          this.configDate.year -= 1;
          this.configDate.month = 11;
          this.configDate.day = 0;
        } else this.configDate.month += 1;
      } else {
        if (this.configDate.month == 11) {
          this.configDate.year += 1;
          this.configDate.month = 0;
          this.configDate.day = 0;
        } else {
        }
      }
    },
    configYearAttribute(param) {
      if (param == "-") {
        this.configDate.year -= 1;
        this.configDate.month = 11;
        this.configDate.day = 0;
      } else {
        if (this.configDate.month == 11) {
          this.configDate.year += 1;
          this.configDate.month = 0;
          this.configDate.day = 0;
        }
      }
    },

    getDayOfMonth(dayOfWeek) {
      return "hello";
      //Нужно сравнить индекст столбца с номером дня недели первого дня месяца если они совпдаают то вернуть
      //       let days = new Date(
      //   this.configDate.year,
      //   this.configDate.month + 1,
      //   0
      // ).getDate(); //нашёл!
      //   let firstDay = this.weekdays[
      //     new Date(
      //       this.configDate.year,
      //       this.configDate.month,
      //       days - days
      //     ).getDay()
      //   ];
      //   console.log(dayOfWeek);
      //   let lastDay = this.weekdays[
      //     new Date(this.configDate.year, this.configDate.month, days - 1).getDay()
      //   ];

      // console.log(this.weekdays[new Date().getDay()]);
      // if (this.weekdays[dayOfWeek] == "Вс") {
      //   // console.log('hih');
      //   // return '1'
      // } else {
      //   // console.log('hih');
      //   // return this.weekdays[da]
      // }
      // else console.log(this.weekdays[new Date().getDay() - 1],'Выводит текущий день недели');

      // // let dayOfMonth = dayOfWeek
      // // if (this.weekdays[new Date().getDay()] == "Вс")
      // //   console.log(this.weekdays[6]);
      // // else console.log(this.weekdays[new Date().getDay() - 1]);

      // // ///
      //         let firstDay= this.weekdays[
      //     new Date(
      //       this.configDate.year,
      //       this.configDate.month,
      //       days - days
      //     ).getDay()
      //   ]

      //   let lastDay= this.weekdays[
      //     new Date(
      //       this.configDate.year,
      //       this.configDate.month,
      //       days - 1
      //     ).getDay()
      //   ]
      // console.log(this.weekdays[dayOfWeek],'this.weekdays[dayOfWeek]');
      // console.log(firstDay,'firstDay');
      // let days = new Date(
      //   this.configDate.year,
      //   this.configDate.month + 1,
      //   0
      // ).getDate(); //нашёл!

      // console.log(this.configDate.year, "year");
      // console.log(this.configDate.month, "month");
      // console.log(days);
      // console.log(

      // if(this.weekdays[dayOfWeek]==firstDay){
      //   console.log('SUCCESS');
      //   console.log(firstDay,'firstDay');
      //   console.log(this.weekdays[dayOfWeek],'this.weekdays[dayOfWeek]');
      //   return firstDay
      // }
      // else{
      //   console.log('not success');
      // }
      //Мы должны получить первый день недели, проверить с тем что вернёт функция
      // let getDayOfMonth = this.weekdays[
      //   new Date(
      //     this.configDate.year,
      //     this.configDate.month,
      //     days - days
      //   ).getDay()
      // ]
      // console.log(getDayOfMonth,'getDayOfMonth');
      //   "день недели последний в месяце"
      // );

      // if(getDayOfMonth=='Вс'){

      // }
      // this.weekdays[new Date().getDay()] == "Вс"
      // return dayOfMonth;
    }
    // configDateAtributte(param){
    //   console.log(param);
    //   if(param=='day'){

    //   }
    //   else if(param=='month'){
    //     if(this.configDate.month==11){
    //       this.configDate.year+=1
    //       this.configDate.month=0
    //       this.configDate.day=0
    //     }
    //     else{
    //       this.configDate.month+=1
    //     }
    //     console.log(this.configDate.month);
    //   }
    //   else if(param=='year'){
    //     this.configDate.year+=1
    //     console.log(this.configDate.year);
    //   }
    // }
  },
  computed: {
    fortd(){
    for (let i = 0; i < 42; i++) {
      this.calendarDay.push(i);
    }
    console.log(this.calendarDay.length/7);
      return  this.calendarDay.length/7
    }
    // getCustomTheme(){
    //   this.showColorPicker=!this.showColorPicker
    // },
  }
};
</script>
<style scoped>
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
.content-table {
  max-width: 1400px;
  width: 100%;
  /* display: flex;
    flex-direction: column; */
}
.table {
  width: 100%;
}
table td {
  /* height: 125px; */

  background-color: antiquewhite;
  border: 2px solid azure;
  text-align: center;
  vertical-align: middle;

  /* display: flex;
    flex-direction: column;
    justify-content: center; */
}
.td-task {
  height: 95px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.table__td {
  /* width:500px; */
  max-width: 100%;
  height: 20px;
  background-color: antiquewhite;
}
.table__navigation {
  display: flex;
  align-items: center;
}
.days__headers {
  background-color: #438cf5;
  color: azure;
  height: 40px;
  vertical-align: middle;
}
.navigation__config {
  padding: 12px 12px 6px 12px;
  display: flex;
  align-items: center;
}
.navigation__config * {
  /* margin:15px; */
}
.container {
  display: flex;
  justify-content: center;
  /* margin-top: 50px; */
}
.material-icons {
  font-size: 30px;
}
.config_attribute {
  margin: 0px 26px;
}
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.task-config {
}

.total-theme {
  background-color: black;
  /* color:white; */
}
.total-theme__td {
  background-color: grey;
}
.picker-container {
  position: absolute;
  top: 50px;
  right: 40%;
}
/* .picker-container__color_custom{
  display:none;
} */
/*dark mode*/
</style>
