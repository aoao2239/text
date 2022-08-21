<template>
  <div class="top_container">
    <!-- 登录中间的盒子 -->
    <div class="container">
      <!-- 盒子左侧图片 -->
      <div class="left_box">
        <img src="../assets/imgs/undraw_profile_data_re_v81r1.png" />
      </div>
      <!-- 盒子右侧表单 -->
      <div class="right_box">
        <!-- 标题 -->
        <div class="title">用户资料完善</div>
        <div class="right_box_img">
          <!-- 暂未完成图片上传功能 -->
          <input type="file" id="file" style="width: 0px" />
          <label for="file">
            <img src="../assets/imgs/PhotoProfile.png" />
          </label>
        </div>

        <!-- 登录表单 -->
        <div class="form_container">
          <el-form
            ref="userMsgFormRef"
            :model="userMsgForm"
            label-width="120px"
            class="userMsg_form"
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
            <!-- 生日 -->
            <el-form-item prop="birthday">
              生日
              <el-input
                v-model="birthday"
                type="date"
                size="large"
                placeholder=" 生日"
              />
            </el-form-item>
            <!-- 手机号码 -->
            <el-form-item prop="phone">
              手机号码
              <el-input size="large" v-model="phone" />
            </el-form-item>
            <!-- 性别 -->
            <el-form-item prop="sex">
              性别(用下拉框)
              <el-select v-model="sex">
                <el-option value="男" selected>男</el-option>
                <el-option value="女">女</el-option>
              </el-select>
            </el-form-item>

            <!-- 提交用户信息 -->
            <el-form-item>
              <el-button type="primary" color="#1E1E1E" @click="toHome"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { ref } from "vue";

const userImg = ref("");
const username = ref("");
const birthday = ref("");
const email = ref("");
const phone = ref("");
const sex = ref("");

export default defineComponent({
  setup() {
    return {
      userImg,
      username,
      birthday,
      email,
      phone,
      sex,
    };
  },
  methods: {
    toHome() {
      this.$router.replace("/home");
    },
  },
});
</script>

<style lang='scss' scoped>
.el-form {
  .right_box_img {
    width: 160px;
    border-radius: 50%;
    border: 1px solid #fff;
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