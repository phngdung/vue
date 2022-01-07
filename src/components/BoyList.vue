<template>
  <div>
    <el-button type="primary" @click="add">Add</el-button>
    <el-button type="primary" @click="exportExcel">Export</el-button>
    <el-table
      :data="boys"
      border
      style="width: 100%"
      height="1000"
      ref="dataTable"
    >
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
      <el-table-column
        prop="age"
        label="Age"
        :filters="this.ageList"
        filter-placement="bottom-end"
        :filter-method="filterAge"
        sortable
      >
        <template slot-scope="scope">
          <div>{{ scope.row.age }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="city"
        label="City"
        :filters="this.cityList"
        filter-placement="bottom-end"
        :filter-method="filterCity"
      >
        <template slot-scope="scope">
          <div>{{ scope.row.city }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="height" label="Height" sortable>
        <template slot-scope="scope">
          <div>{{ scope.row.height }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="Weight" sortable>
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
      <el-table-column fixed="right" label="Operations" width="80">
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
      <el-table-column fixed="right" label="Operations" width="80">
        <template slot-scope="scope">
          <el-button type="primary" @click="deleteBoy(boys[scope.$index].id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
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
      ageList: [],
      cityList: [],
      filterList: [],
    };
  },
  computed: {
    //...mapState(["boys"]),
  },
  mounted() {
    axios
      .get("http://localhost:3000/friends", {
        headers: {
          token: this.$cookies.get("token"),
        },
      })
      .then((data) => {
        console.log(data);
        this.boys = [...data.data];
        this.boys.forEach((boy) => {
          if (!this.ageList.find((b) => b == boy.age)) {
            this.ageList.push(boy.age);
          }
        });
        this.ageList = this.ageList.map((o) => ({
          value: o,
          text: "" + o,
        }));
        this.boys.forEach((boy) => {
          if (!this.cityList.find((b) => b === boy.city)) {
            this.cityList.push(boy.city);
          }
        });
        this.cityList = this.cityList.map((o) => ({
          value: o,
          text: "" + o,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteBoy(id) {
      axios
        .get("http://localhost:3000/friends/delete/" + id, this.boy, {
          headers: {
            token: this.$cookies.get("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.go();
    },
    add() {
      this.$router.push({ name: "boy.add" });
    },
    filterAge(value, row) {
      return row.age === value;
    },
    filterCity(value, row) {
      return row.city === value;
    },
    exportExcel() {
      axios({
        method: "POST",
        url: "http://localhost:3000/boys/export",
        responseType: "blob",
        data: this.$refs.dataTable.tableData,
      })
        .then((response) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(new Blob([response.data]));
          const filename = `boys_` + new Date().toJSON().slice(0, 10) + `.xlsx`;
          link.setAttribute("download", filename);
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    },
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