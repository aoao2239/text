<template>
  <div class="top_container">
    <!-- 注册中间的盒子 -->
    <div class="container">
      <!-- 盒子左侧图片 -->
      <div class="left_box">
        <img src="../assets/imgs/undraw_login_re_4vu2.png" />
      </div>
      <!-- 盒子右侧表单 -->
      <div class="right_box">
        <!-- 标题 -->
        <div class="title">欢迎注册创思设备管理系统</div>

        <!-- 登录表单 -->
        <div class="form_container">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            label-width="120px"
            class="login_form"
          >
            <!-- 姓名 -->
            <el-form-item prop="username">
              姓名
              <el-input
                v-model="username"
                size="large"
                placeholder="请输入姓名"
              />
            </el-form-item>
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
            <el-form-item><div class="pswSafety">密码强度</div> </el-form-item>
            <el-form-item>
              <el-checkbox
                v-model="userAgreement"
                size="large"
                label="我已阅读用户协议并同意"
              ></el-checkbox>
            </el-form-item>
            <!-- 登录 -->
            <el-form-item>
              <el-button
                type="primary"
                color="#1E1E1E"
                @click="$router.replace('/login')"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="no-underline">
          你已有平台账号?
          <router-link to="login" class="no-underline">用户登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
const username = ref("");
const email = ref("");
const password = ref("");

export default defineComponent({
  setup() {
    return {
      username,
      email,
      password,
    };
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
    font-size: 24px !important;
    margin-left: 0px !important;
  }

  .el-input {
    ::v-deep(.el-input__icon) {
      font-size: 1em;
    }
  }
}
</style>