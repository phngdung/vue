<template>
  <el-table :data="boys" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="Name" width="180"> </el-table-column>
    <el-table-column prop="age" label="Age"> </el-table-column>
    <el-table-column prop="city" label="City"> </el-table-column>
    <el-table-column prop="height" label="Height"> </el-table-column>
    <el-table-column prop="weight" label="Weight"> </el-table-column>
    <el-table-column prop="hobbit" label="Hobbit"> </el-table-column>
    <el-table-column prop="hairColor" label="Hair Color"> </el-table-column>
    <el-table-column prop="skill" label="Skill"> </el-table-column>
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
    ...mapState(["boys"]),
  },
  mounted() {
    axios
      .get("http://localhost:3000/boys")
      .then((data) => {
        this.boys = data.data;
        // console.log('boys',this.boys);
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
