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
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Student",
  data() {
    return {
      student: {
        name: "",
        classSt: "",
        math: "",
        english: "",
        literature: "",
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
      this.student = { ...student };
    }
  },
  computed: {
    ...mapState(["students"]),
  },
  methods: {
    submitForm(formName) {
      console.log('formname', this.student)
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
