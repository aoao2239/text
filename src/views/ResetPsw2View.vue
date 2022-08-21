<template>
  <div class="top_container">
    <!-- 登录中间的盒子 -->
    <div class="container">
      <!-- 盒子左侧图片 -->
      <div class="left_box">
        <img src="../assets/imgs/undraw_my_password_re_ydq71.png" />
      </div>
      <!-- 盒子右侧表单 -->
      <div class="right_box">
        <!-- 标题 -->
        <div class="title">重置密码</div>

        <!-- 登录表单 -->
        <div class="form_container">
          <el-form
            ref="reset2FormRef"
            :model="reset2Form"
            label-width="120px"
            class="reset2_form"
          >
            <el-form-item prop="password">
              密码
              <el-input
                v-model="password"
                size="large"
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item prop="password2">
              重复密码
              <el-input
                v-model="password2"
                size="large"
                placeholder="请再次输入密码"
              />
            </el-form-item>
            <el-form-item><div class="pswSafety">密码强度</div> </el-form-item>

            <el-form-item>
              <el-button type="primary" color="#1E1E1E" @click="toLogin"
                >重置密码</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="no-underline">
          你已有账号?&ensp;
          <router-link to="login" class="no-underline">用户登录</router-link
          >&emsp; 建立新账号?&ensp;<router-link
            to="register"
            class="no-underline"
            >用户注册</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { ref } from "vue";

const password = ref("");
const password2 = ref("");

export default defineComponent({
  setup() {
    return {
      password,
      password2,
    };
  },
  methods: {
    toLogin() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //点击重置密码,去登录
      this.$router.replace("/login");
    },
  },
});
</script>

<style lang='scss' scoped>
.el-form {
  .pswSafety {
    font-size: 20px;
  }
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