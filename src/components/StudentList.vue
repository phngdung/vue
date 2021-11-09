<template>
  <el-table :data="students" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="Name" width="180"> </el-table-column>
    <el-table-column prop="age" label="Age"> </el-table-column>
    <el-table-column prop="city" label="City"> </el-table-column>
    <el-table-column prop="height" label="Height"> </el-table-column>
    <el-table-column prop="weight" label="Weight"> </el-table-column>
    <el-table-column prop="classSt" label="Class"> </el-table-column>
    <el-table-column prop="math" label="Math"> </el-table-column>
    <el-table-column prop="literature" label="Literature"> </el-table-column>
    <el-table-column prop="english" label="English"> </el-table-column>
    <el-table-column fixed="right" label="Operations" width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">
          <router-link
            :to="{
              name: 'student.index',
              params: { id: students[scope.$index].id },
            }"
            >Edit</router-link
          >
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import students from "../mock/student";
import { mapState } from 'vuex'
export default {
  name: "Student-list",
  data() {
    return {
  
    };
  },
  computed: {
    ...mapState(["students"]),
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
