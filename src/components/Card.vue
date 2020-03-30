<template>
  <div>
    <!-- <div class="task-info" v-if="showTaskInfo"> -->
    <!-- <div class="tasks-count">
        <p v-if="taskIndex != null">
          СОБЫТИЙ: {{ tasks[taskIndex].title.length }}
        </p>
        <p v-else>Добавьте события</p>
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
      <div
        class="tasks"
        v-for="i in tasks[taskIndex].title.length"
        style="display: block;"
        :key="i"
      >
        <input
          type="text"
          v-model="tasks[taskIndex].title[i - 1]"
          class="border-bottom_display"
          style=""
        />
        <div>
          <textarea
            v-model="tasks[taskIndex].about[i - 1]"
            class="task-info_about border-bottom_display"
            style=""
          ></textarea>
        </div>
        <div class="task-group__btn">
          <button
            class="btn task-btn"
            style="color:black;"
            @click="deleteInfoAboutTask(i)"
          >
            <i class="material-icons">
              clear
            </i>
          </button>
        </div>
      </div>
      <div class="editTask">
      </div>
      <div
        class=""
        style="display: flex;
    justify-content: flex-end;padding: 5px;"
      >
        <button
          class="btn"
          @click="(showTaskInfo = !showTaskInfo), deleteEmptyTask()"
        >
          Сохранить
        </button>
    </div>-->
    <span>{{message}}</span>
    <div v-for="(i,j) in getQuests" :key="j">
      {{i}}
      <button @click="deleteQu(j)">testVuex</button>
    </div>
    <button @click="addQ()">click</button>
  </div>
</template>
<script>
// import mapGetters from 'vuex'
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: {
    message: {
      type: String
    }
  },
  data: () => ({
    quests: "hello"
  }),
  // data:{
  //   // quests:getQuests
  // },
  methods: {
    ...mapMutations(["deleteQ",'addQ']),
    change() {
      this.$emit("MessChange", this.message);
      // console.log(this.message)
    },
    deleteQu(id) {
      // console.log(typeof id);
      this.deleteQ(id);
      // this.$store.commit('deleteQ',id)
      // this.$store.mutations.deleteQ(id)
      // this.$store.dispatch('deleteQ')
      // delete
      // this.gem.splice(this.gem.length-1,1)
      // console.log(typeof this.gem);
    }
  },
  computed: {
    ...mapGetters(["getQuests"])
    // gem(){
    //   // console.log(this.$store);
    //   return this.$store.getters.getQuests
    // }
    // getQuests(){
    //   this.quests=this.$store.getters.getQuests
    // }
  }
};
</script>