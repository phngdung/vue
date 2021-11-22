<template>
  <el-table :data="boys" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="80">
      <template slot-scope="scope">
        <div>{{ scope.row.id }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" width="180">
      <template slot-scope="scope">
        <div>{{ scope.row.name }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="age" label="Age">
      <template slot-scope="scope">
        <div>{{ scope.row.age }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="city" label="City">
      <template slot-scope="scope">
        <div>{{ scope.row.city }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="height" label="Height">
      <template slot-scope="scope">
        <div>{{ scope.row.height }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="weight" label="Weight">
      <template slot-scope="scope">
        <div>{{ scope.row.weight }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="hobbit" label="Hobbit">
      <template slot-scope="scope">
        <div>{{ scope.row.hobbit }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="hairColor" label="Hair Color">
      <template slot-scope="scope">
        <div>{{ scope.row.hairColor }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="skill" label="Skill">
      <template slot-scope="scope">
        <div>{{ scope.row.skill }}</div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">
          <router-link
            :to="{
              name: 'boy.index',
              params: { id: boys[scope.$index].id },
            }"
            >Edit</router-link
          >
        </el-button>
      </template>
    </el-table-column>
    <!-- <template>
      <ul v-for="boy in boys" :key="boy.id">
          <el-table-column prop="name" label="name" width="180">{{boy.title}}</el-table-column>
      </ul>
    </template> -->
  </el-table>
</template>

<script>
// import boys from "../mock/boy";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Boy-list",
  data() {
    return {
      boys: [],
    };
  },
  computed: {
    //...mapState(["boys"]),
  },
  mounted() {
    axios
      .get("http://localhost:3000/boys")
      .then((data) => {
        this.boys = [...data.data];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>