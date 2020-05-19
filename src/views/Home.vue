<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="articles-control">
        <div class="search-bar">
          <el-input
            :placeholder="$t('search')"
            v-model="searchValue"
          ></el-input>
          <el-tooltip
            effect="dark"
            content="Click to change article view"
            placement="top-start"
          >
            <el-button
              @click="changeView"
              type="primary"
              :icon="viewMode ? 'el-icon-s-grid' : 'el-icon-tickets'"
              circle
            ></el-button>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView
        v-for="item in articles"
        v-bind:key="item.id"
        :item="item"
        :search="searchValue"
        :viewMode="viewMode"
      ></ArticleView>
    </div>
    <div v-else>
      {{ $t("empty-page") }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ArticleView from "../components/ArticleView.vue";
// npm i vuex-class
// "noImplicitAny": false,
const Articles = namespace('Articles');

@Component({
  name: "Home",
  components: {
    ArticleView
  }
})
export default class Home extends Vue {
  @Articles.State articles: any;
  @Articles.Action fetchTickets: any;

  searchValue: string = "";
  viewMode: boolean = true;

  changeView() {
    this.viewMode = !this.viewMode;
  }
  created() {
    this.fetchTickets();
    // this.content = this.$route.params.item;
  }
}
</script>
<style lang="scss" scoped>
.articles-control {
  .el-input {
    display: inline-block;
    width: 250px;
    margin: 0 5px 0 0;
    @media(max-width: 768px) {
      display: block;
      margin: 0 0 10px 0;
    }
  }
}
.block-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
