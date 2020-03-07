<template>
  <div class="container">
    <!-- {{taskIndex}} -->
    <!-- {{getOneTask}} -->
    <!-- {{new Date().getMonth()}} -->
    <div class="zaglushka" v-if="showTaskInfo" @click="showTaskInfo=!showTaskInfo,deleteLastTask()">    </div>
      <div class="task-info" v-if="showTaskInfo">
        <div class="tasks-count">
          <!-- {{getTaskInfo()}} -->
          <p v-if="taskIndex!=null">СОБЫТИЙ:  {{tasks[taskIndex].title.length}}</p>
          <p v-else>Добавьте события</p>
                    <!-- {{taskIndex}} -->
          <div>
            <button class="btn task-btn" @click="addNewTask()">
              <i class="material-icons">
                add
              </i>
            </button>
            <button class="btn task-btn" @click="deleteAll(taskIndex)">
              <i class="material-icons">
                delete
              </i>
            </button>
          </div>
        </div>
        <div class="tasks" v-for="i in tasks[taskIndex].title.length" style='display: block;'>
          <input type="text" v-model="tasks[taskIndex].title[i-1]" class="border-bottom_display"  style=''>
  <div>
    <!-- {{getOneTask.about[i-1]}} -->
          <textarea v-model="tasks[taskIndex].about[i-1]" class="task-info_about border-bottom_display" style=''></textarea>
  </div>
            <!-- Описание:{{getOneTask.about[i-1]}}fasd fsdafs df sdf sad fsdfsdafsd afsdafsdaf asdfs daf sdfsd fsa dfsdfsdafsd afsdafsda -->
          
          <!-- <input :placeholder="getOneTask.about[i-1]"> -->
          <!-- <p style="">Описание:<input :value="getOneTask.about[i-1]+'fasdfsdafsdfsdfsadfsdfsdafsdafsdafsdafasdfsdafsdfsdfsadfsdfsdafsdafsdafsda'"></p> -->
          <div class="task-group__btn">
            <!-- <button class="btn task-btn" style="color:black;">
              <i class="material-icons">
                edit
              </i>
            </button> -->
            <button class="btn task-btn" style="color:black;">
              <i class="material-icons">
                clear
              </i>
            </button>
          </div>
        </div>
        <div class="editTask">
          <!-- <input type="text"> -->Установить задачу до
        <input type="text" name="" v-model='tasks[taskIndex].date' style='
  padding: 4px 12px;
  box-sizing: border-box;
  border:none;'>
        </div>
        <div class="" style='display: flex;
    justify-content: flex-end;padding: 5px;'
    >     
          <button class="btn" @click="showTaskInfo=!showTaskInfo,deleteEmptyTask()">Сохранить</button>
        </div>
      </div>

    <div class="content-table">
      <!-- {{ initDate }}{{tasks[taskIndex]}}{{tasks}} -->
      {{tasks}}
      <div class="table__navigation">
        <span>{{ getTime() }}</span>
        <!-- <div>{{ getTime() }}</div> -->
        <!-- <div class="navigation-config"> -->
        <div class="navigation__config">
          <button class="btn" @click="minusDay()">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <span class="config_attribute" @click="configDateAtributte(`day`)">{{
            configDate.day + 1
          }}</span>
          <button class="btn" @click="plusDay()">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn" @click="minusMonth()">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <!-- new Date(y, m, 0).getDate() -->
          <span class="config_attribute">{{ configDate.month + 1 }}</span>
          <button class="btn" @click="plusMonth()">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div class="navigation__config">
          <button class="btn" @click="minusYear()">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <span class="config_attribute">{{ configDate.year }}</span>
          <button class="btn" @click="plusYear()">
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
      </div>
      <div class="table" style="">
        <div class="th-weekdays" style="    display: flex;">
          <div
            v-for="(days, i) in weekdays"
            :key="i"
            @click="test(i)"
            class="days__headers"
            :class="{ 'total-theme': theme.editTheme }"
          >
            {{ days }}
          </div>
        </div>
        <div class="days-container">
          <!-- {{calendarDay}} -->
          <div
            @click="testing(j)"
            v-for="j in calendarDay"
            class="days__headers"
            :class="{ 'total-theme__td': theme.editTheme}"
          >
            <p :v-model="j">{{ j }}</p>
            <!-- <p ></p> -->
          </div>
        </div>
      </div>
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
    
    // console.log(this.configDate.day,'month')
    this.initDayInTable();
    // this.fortd()

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
      new Date(
        this.configDate.year,
        this.configDate.month,
        days - days
      ).getDay(),
      "день недели первый в этом месяце"
    );
    this.setLimit();
  },
  mounted() {
    this.FUCKYOU();
    this.fillTable();
    console.log(this.initDate.firstDayOfMonth);
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
      showColorPicker: false,
      markDay:false,
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
    // calendarDay: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],
    calendarDay: [],
    forHelp: "",
    initDate: {
      firstDayOfMonth: "",
      daysOfMonth: ""
    },
    dayLimit: "",
    tasks: {
      '7.3.2020':{
        title: ['Title1','Title2'],
        about: ['Gigiena','Work'],
        date: "10.03.2020",
      },
      '14.3.2020':{
        title: ['Title3','Title4'],
        about: ['Gigiena1','Work2'],
        date: "14.03.2020",
      }
    },
    taskInfoEvent:{
      deleteAll:false,
      deleteOne:false,
      addNew:false,
      editTask:false,
      toSave:false,
    },
    taskIndex:null,
    getOneTask:{},
    showTaskInfo:false,
  }),
  methods: {
    addNewTask(){
      this.tasks[this.taskIndex].title.push('')
      this.tasks[this.taskIndex].about.push('')
      // this.tasks[this.taskIndex].title.push('hi')
    },
    deleteAll(param){
      // console.log(param,'PARAM')
     delete this.tasks[param]
    //  console.log(this.tasks[param],'THISs')
     this.showTaskInfo=false
    },
    deleteInfoAboutTask(){

    },
    testing(j) {
      // console.log(j, "jjjjjjjjjj");
      if(j>0){
        console.log();
      this.showTaskInfo=!this.showTaskInfo
      // console.log(j+`.${this.configDate.month}`+`.${this.configDate.year}`);
      this.getTaskInfo(j+`.${this.configDate.month+1}`+`.${this.configDate.year}`)
      }
      else 
        alert('Ну не надо туда клацать))')
    },
    getTaskInfo(param){
      this.taskIndex=param
      console.log(typeof this.tasks[param],'this.tasks[param]');
      if(this.tasks[param]==undefined){
        console.log('ZAS');
      this.tasks[param]={title: [],
        about: [],
        date: "",}
        this.taskInfoEvent.toSave=true
        return
      }
      console.log('HEREHERE');
      this.taskInfoEvent.toSave=false
      // console.log(this.tasks,'this.tasks');
      // this.getOneTask=JSON.parse(JSON.stringify(this.tasks[param]));
      // this.getOneTask.title[1]='Am'
    },
    deleteEmptyTask(){
            for (let i = 0; i < this.tasks[this.taskIndex].title.length; i++) {
        if(this.tasks[this.taskIndex].title[i]==''||this.tasks[this.taskIndex].about[i]==''){
          this.tasks[this.taskIndex].title.pop()
          this.tasks[this.taskIndex].about.pop()
          alert('Опишите задачу полностью')
        }
        
      }
      // this.tasks[this.taskIndex].title.push('hi')
      // this.tasks[this.taskIndex].about.push('hi')
      // for (let i = 0; i < this.tasks[this.taskIndex].title.length; i++) {
      //   // const element = array[i];
      //   if(this.tasks[this.taskIndex].title[i]==''){
          
      //     this.tasks[this.taskIndex].title.pop()
      //     break
      //   }
        
      // }
      // for (let i = 0; i < this.tasks[this.taskIndex].about.length; i++) {
      //   // const element = array[i];
      //   if(this.tasks[this.taskIndex].about[i]==''){
          
      //     this.tasks[this.taskIndex].about.pop()
      //     alert('Опишите задачу')
      //     return
      //   }
        
      // }
      // console.log(this.tasks[this.taskIndex].title.length,
      // 'this.tasks[this.taskIndex].title[0]');
      // if(this.tasks[this.taskIndex].title.length==0 || this.tasks[this.taskIndex].about.length==0){
      //   alert('Задайте название и описание задачи')
      //   delete this.tasks[this.taskIndex]
      // }
      
    },
    deleteLastTask(){
      if(this.taskInfoEvent.toSave==true){
        delete this.tasks[this.taskIndex]
        console.log(this.tasks);
                console.log('NU I')
        this.taskInfoEvent.toSave=false
      }
    },
    saveTask(){

      //       if(this.taskInfoEvent.toSave==true)
      //   return
      // else delete this.tasks[param]
    },
    setLimit() {
      this.dayLimit = this.initDate.daysOfMonth;
      console.log(this.dayLimit, "this.dayLimit");
    },
    FUCKYOU() {
      for (let i = 1; i <= 42; i++) {
        this.calendarDay.push(i);
        console.log(this.calendarDay[i]);
      }
    },
    fillTable() {
      console.log("HELLO");
      this.calendarDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
      22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
      console.log(this.initDate.firstDayOfMonth, 'v-model="calendarDay"');
      for (let i = 0; i < this.calendarDay.length; i++) {
        if (i <= this.initDate.firstDayOfMonth - 1) {
          this.calendarDay[i] = 0;
          continue;
        }

        if (i > this.dayLimit + this.initDate.firstDayOfMonth - 1) {
          this.calendarDay[i] = 0;
          continue;
        } else {
          this.calendarDay[i] -= this.initDate.firstDayOfMonth;
          continue;
        }
      }
    },
    initDayInTable() {
      this.initDate.daysOfMonth = new Date(
        this.configDate.year,
        this.configDate.month + 1,
        0
      ).getDate();
      console.log(this.initDate.daysOfMonth, "this.initDate.daysOfMonth");

      this.initDate.firstDayOfMonth = new Date(
        this.configDate.year,
        this.configDate.month,
        this.initDate.daysOfMonth - this.initDate.daysOfMonth
      ).getDay();
      console.log(this.firstDayOfMonth, "this.firstDayOfMonth"); //день недели первого дня месяца
    },
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
      console.log(color.hex);
      this.color = `${color}`;
      this.theme.editCustomColor = color.hex;
    },
    openSucker(isOpen) {
      if (isOpen) {
      } else {
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
    },

    ////////Здесь начинается улыбка
    plusDay() {
      if (this.configDate.day == this.initDate.daysOfMonth) {
        this.plusMonth();
      } else this.configDate.day++;

      this.initDayInTable();
      this.fillTable();
    },
    minusDay() {
      if (this.configDate.day == 0) {
        this.minusMonth();
      } else this.configDate.day--;

      this.initDayInTable();
      this.fillTable();
    },
    plusMonth() {
      if (this.configDate.month == 11) {
        this.configDate.year += 1;
        this.configDate.month = 0;
        this.configDate.day = 0;
      } else this.configDate.month++;

      this.initDayInTable();
      this.fillTable();
    },
    minusMonth() {
      if (this.configDate.month == 0) {
        this.configDate.year -= 1;
        this.configDate.month = 11;
        this.configDate.day = 0;
      } else this.configDate.month--;

      this.initDayInTable();
      this.fillTable();
    },
    plusYear() {
      this.configDate.year++;
      this.initDayInTable();
      this.fillTable();
    },
    minusYear() {
      this.configDate.year--;
      this.initDayInTable();
      this.fillTable();
    }
  },
  computed: {
    getDayOfWeek() {
      this.firstDayOfMonth = new Date(
        this.configDate.year,
        this.configDate.month,
        this.initDate.daysOfMonth - this.initDate.daysOfMonth
      ).getDay();
      return this.firstDayOfMonth;
    },

  }
};
</script>
<style lang="scss" scoped>
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
}
.table {
  display: flex;
  flex-direction: column;
  width: 1400px;
  /* width: 100%; */
}
table td {
  /* height: 125px; */

  background-color: antiquewhite;
  border: 2px solid azure;
  text-align: center;
  vertical-align: middle;
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
.days-container {
  display: flex;
  flex-wrap: wrap;
}
.days__headers {
  background-color: #438cf5;
  color: azure;
  height: 40px;
  vertical-align: middle;
  width: 190px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid azure;
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
  /*height: -webkit-fill-available;background-color:black;ПОлная заливка фона */

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
.zaglushka {
  width: 100%;
  position: absolute;
  height: -webkit-fill-available;
  background-color: gray;
  display: flex;
  opacity:0.6;
  justify-content: center;
  align-items: center;
}
.task-info {
  width: 400px;
  /* height: 500px; */
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
      position: absolute;
      &_about{
  padding: 4px 12px;
  margin: 8px 0;
  box-sizing: border-box;resize:none;width: 100%;
    height: 50px;
      }
}
.tasks-count {
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  background-color: #438cf5;
  border-radius: 5px;
  justify-content: space-between;
}
.task-btn {
  background-color: transparent;
}
.tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #438cf5;
  padding: 10px;
}
.mark-day{
  background-color:rgb(61, 0, 117);
}
.task-group__btn{
      display: flex;
    justify-content: flex-end;
}
.border-bottom_display{
  padding: 4px 12px;
  box-sizing: border-box;
  border-top:none;border-right:none;border-left:none;
}
/* .picker-container__color_custom{
  display:none;
} */
/*dark mode*/
</style>
