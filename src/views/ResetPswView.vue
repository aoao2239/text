<template>
  <div class="top_container">
    <!-- 登录中间的盒子 -->
    <div class="container">
      <!-- 盒子左侧图片 -->
      <div class="left_box">
        <img src="../assets/imgs/undraw_forgot_password_re_hxwm1.png" />
      </div>
      <!-- 盒子右侧表单 -->
      <div class="right_box">
        <!-- 标题 -->
        <div class="title">重置密码</div>

        <!-- 登录表单 -->
        <div class="form_container">
          <el-form
            ref="resetFormRef"
            :model="resetForm"
            label-width="120px"
            class="reset_form"
          >
            <el-form-item prop="email">
              邮箱
              <el-input v-model="email" size="large" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" color="#1E1E1E" @click="toReset"
                >发送</el-button
              >
            </el-form-item>

            <!-- 登录 -->
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

const email = ref("");

export default defineComponent({
  setup() {
    return {
      email,
    };
  },
  methods: {
    toReset() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址去登录
      this.$router.replace("/resetPsw2");
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