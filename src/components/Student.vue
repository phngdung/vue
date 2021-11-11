<template>
  <div class="edit-form">
    <el-form
      label-width="80px"
      :label-position="position"
      :model="student"
      :ref="student"
      :rules="rules"
    >
      <el-form-item label="Name" prop="name">
        <el-input placeholder="Please input" v-model="student.name"></el-input>
      </el-form-item>
      <el-form-item label="Class" prop="classSt">
        <el-input
          placeholder="Please input"
          v-model="student.classSt"
        ></el-input>
      </el-form-item>
      <el-form-item label="Math" prop="math">
        <el-input placeholder="Please input" v-model="student.math"></el-input>
      </el-form-item>
      <el-form-item label="English" prop="english">
        <el-input
          placeholder="Please input"
          v-model="student.english"
        ></el-input>
      </el-form-item>
      <el-form-item label="Literature" prop="literature">
        <el-input
          placeholder="Please input"
          v-model="student.literature"
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('student')"
          >Update</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../store";
export default {
  name: "Student",
  data() {
    return {
      student: {
        name: "",
        classSt: "",
        math: 0,
        english: 0,
        literature: 0,
        id: "",
      },
      position: "top",
      rules: {
        student: {
          name: {
            required: true,
            message: "This field is required !",
            trigger: "blur",
          },
          classSt: {
            required: true,
            message: "This field is required !",
            trigger: "blur",
          },
          math: {
            required: true,
            message: "This field is required and must be in range of [0;10] !",
            trigger: "blur",
            min: 0,
            max: 10,
          },
          english: {
            required: true,
            message: "This field is required and must be in range of [0;10] !",
            trigger: "blur",
            min: 0,
            max: 10,
          },
          literature: {
            required: true,
            message: "This field is required and must be in range of [0;10] !",
            trigger: "blur",
            min: 0,
            max: 10,
          },
        },
      },
    };
  },
  mounted: function () {
    const id = this.$route.params.id;
    const student = this.students.find((val) => val.id === id);
    if (student) {
      this.student = {
        math: student.math,
        english: student.english,
        literature: student.literature,
        name: student.name,
        classSt: student.classSt,
        id: student.id,
      };
    }
  },
  computed: {
    ...mapState(["students"]),
  },
  methods: {
    submitForm(formName) {
      this.student.math = parseFloat(this.student.math);
      this.student.english = parseFloat(this.student.english);
      this.student.literature = parseFloat(this.student.literature);
      store.commit("editStudent", { ...this.student });
      this.$router.push({ name: "student.list" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.edit-form {
  max-width: 960px;
  margin: 0px auto;
}
</style>
