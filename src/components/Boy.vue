<template>
  <div class="edit-form">
    <el-form
      label-width="80px"
      :label-position="position"
      :model="boy"
      :ref="boy"
      :rules="rules"
    >
      <el-form-item label="Name" prop="name">
        <el-input placeholder="Please input" v-model="boy.name"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input placeholder="Please input" v-model="boy.age"></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input placeholder="Please input" v-model="boy.city"></el-input>
      </el-form-item>
      <el-form-item label="Height" prop="height">
        <el-input placeholder="Please input" v-model="boy.height"></el-input>
      </el-form-item>
      <el-form-item label="Weight" prop="weight">
        <el-input placeholder="Please input" v-model="boy.weight"></el-input>
      </el-form-item>
      <el-form-item label="Hobbit" prop="hobbit">
        <el-input placeholder="Please input" v-model="boy.hobbit"></el-input>
      </el-form-item>
      <el-form-item label="Hair Color" prop="hairColor">
        <el-input placeholder="Please input" v-model="boy.hairColor"></el-input>
      </el-form-item>
      <el-form-item label="Skill" prop="skill">
        <el-input placeholder="Please input" v-model="boy.skill"></el-input>
      </el-form-item>

      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('boy')">{{
          type == "add" ? "Add" : "Update"
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../store";
import axios from "axios";
export default {
  name: "Boy",
  data() {
    return {
      boy: {
        name: "",
        age: "",
      },
      position: "top",
      rules: {
        boy: {
          name: {
            required: true,
            message: "This field is required !",
            trigger: "blur",
          },
        },
      },
    };
  },
  computed: {
    // ...mapState(["boys"]),
    type() {
      if (this.$route.name == "boy.add") return "add";
      else if (this.$route.name == "boy.index") return "update";
    },
  },
  methods: {
    submitForm(formName) {
      if (this.type == "update") {
        const id = this.$route.params.id;
        this.boy.age = parseInt(this.boy.age);
        this.boy.height = parseFloat(this.boy.height);
        this.boy.weight = parseFloat(this.boy.weight);
        console.log(this.boy);
        axios.put("http://localhost:3000/boys/" + id, this.boy).catch((err) => {
          console.log(err);
        });
        this.$router.push({ name: "boy.list" });
      } else if (this.type == "add") {
        const id = this.$route.params.id;
        this.boy.age = parseInt(this.boy.age);
        this.boy.height = parseFloat(this.boy.height);
        this.boy.weight = parseFloat(this.boy.weight);
        console.log(this.boy);
        axios
          .post("http://localhost:3000/friends/add", this.boy)
          .catch((err) => {
            console.log(err);
          });
        this.$router.push({ name: "boy.list" });
      }
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
