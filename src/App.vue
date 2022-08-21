<template>
  <!-- 展示路由 -->
  <router-view />
</template>

<style lang="scss">
.font48 {
  font-size: 48px;
}
.font56 {
  font-size: 56px;
}
.font24 {
  font-size: 24px;
}
.font16 {
  font-size: 16px;
}
.font14 {
  font-size: 14px;
}
.font36 {
  font-size: 36px;
}
* {
  margin: 0;
  padding: 0;
  font-size: 24px;
}

.no-underline {
  text-decoration: none;
  font-size: 20px;
}

.top_container {
  height: 100vh;
  width: 100%;
  background-color: #e6e6fa;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  /*登录注册界面通用布局*/
  .container {
    background-color: rgba(154, 154, 235, 0.5);
    width: 1440px;
    height: 1024px;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 5px 20px 2px rgba(255, 255, 255, 0.1);

    .left_box {
      width: 720px;
      display: flex;
      align-items: center;
      text-align: center;

      img {
        margin: 0 auto;
      }
    }

    .right_box {
      width: 720px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* 侧轴剧中 */
      align-items: center;
      position: relative;
      .title {
        font-size: 32px;
        margin: 20px auto 20px auto;
        text-align: center;
        display: block;
      }
      /*表单*/

      .form_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .el-form {
          width: 446px;
          margin: 20px auto 20px auto;

          /* vue3中的样式穿透 */
          ::v-deep(.el-form-item__content) {
            font-size: 24px;
            margin-left: 0px !important;
          }
          .toright {
            position: absolute;
            right: 0;
          }

          .el-input {
            height: 50px;
            margin-top: 10px;
            font-size: 24px;

            ::v-deep(.el-input__icon) {
              font-size: 1em;
            }
          }
        }

        .el-button {
          width: 446px;
          height: 50px;
          ::v-deep {
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>

<!-- #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} -->