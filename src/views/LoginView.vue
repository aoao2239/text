<template>
  <div class="top_container">
    <!-- 登录中间的盒子 -->
    <div class="container">
      <!-- 盒子左侧图片 -->
      <div class="left_box">
        <img src="../assets/imgs/undraw_login_re_4vu2.png" />
      </div>
      <!-- 盒子右侧表单 -->
      <div class="right_box">
        <!-- 标题 -->
        <div class="title">欢迎登录创思设备管理系统</div>

        <!-- 登录表单 -->
        <div class="form_container">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            label-width="120px"
            class="login_form"
          >
            <!-- 邮箱 -->
            <el-form-item prop="email">
              邮箱
              <el-input v-model="email" size="large" placeholder="请输入邮箱" />
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              密码
              <el-input
                type="password"
                size="large"
                show-password
                placeholder="请输入密码"
                v-model="password"
              >
                <template #suffix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="font-size: 20px" prop="rememberMe">
              <el-checkbox
                v-model="rememberMe"
                size="large"
                label="记住我"
              ></el-checkbox>
              <router-link to="resetPsw" class="no-underline toright">
                忘记密码</router-link
              >
            </el-form-item>
            <!-- 登录 -->
            <el-form-item>
              <el-button type="primary" color="#1E1E1E" @click="toUserMsg"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="no-underline">
          你还没有账号?
          <router-link to="register" class="no-underline"
            >注册账号?</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const rememberMe = ref("");
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      rememberMe,
    };
  },
  methods: {
    toUserMsg() {
      axios
        .post("login", { email: this.email, password: this.password })
        .then((res) => {
          console.log(res.data);
          if (res.data.meta.status === 1) {
            alert(res.data.meta.msg);

            this.$router.replace("/userMsg");
          }
          if (res.data.meta.status === 0) {
            //账号密码错误

            alert(res.data.meta.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      //点击登录,去完善用户信息
    },
  },
});
</script>

<style lang='scss' scoped>
.el-form {
  /* vue3中的样式穿透 */
  ::v-deep(.el-form-item__content) {
    font-size: 24px;
    margin-left: 0px !important;
  }

  .el-input {
    ::v-deep(.el-input__icon) {
      font-size: 1em;
    }
  }
}
</style>