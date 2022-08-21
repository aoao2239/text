<template>
  <div class="contioner">
    <div class="home_container">
      <!-- 头部 -->
      <nav>
        <!-- logo图标 -->
        <div class="header_logo" />
        <!-- 导航栏的导航条 -->
        <ul class="header_nav">
          <li index="1">首页</li>
          <li index="2">岗位展示</li>
          <li index="3">工作分类</li>
          <li index="4">关于创思</li>
          <li @click="$router.replace('/login')">登录</li>
          <li>
            <el-button class="post-jobs" type="primary" color="#1E1E1E"
              >发布岗位</el-button
            >
          </li>
        </ul>
      </nav>
      <!-- 主体部位 -->
      <main>
        <div class="navBar">
          <div class="in_navBar">
            <p class="font48">269+ 岗位需求</p>
            <p class="font56">预祝你在创思信息找到心仪工作</p>
            <p class="font24 p_discribe">
              创思信息以&ldquo;工匠精神&rdquo;推动产业互联网升级&comma;推动政府事务单位业务处理自动化&comma;助力工业4.0转型升级！
            </p>
            <el-button class="font16" type="primary" color="#1E1E1E"
              >查看岗位</el-button
            >
          </div>
        </div>
        <!-- 找工作分区 -->
        <div class="search_job">
          <div class="nav_job">
            <button>请输入岗位关键字</button>
            <button>位置</button>
            <select>
              <option>分类</option>
            </select>
            <select>
              <option>选择岗位信息</option>
            </select>
            <button class="job_btn">找工作</button>
          </div>
          <div class="nav_job">
            <label>最近搜索热词:</label>
            <button class="job_btn job_btn_height">java工程师</button>
            <button class="job_btn job_btn_height">web后端工程师</button>
            <button class="job_btn job_btn_height">UI/UX</button>
            <button class="job_btn job_btn_height">行政管理</button>
          </div>
        </div>

        <!-- 竞争优势 -->
        <div class="competitive">
          <div class="left_box">
            <div class="mini_box_group">
              <div class="mini_box left_top_box">
                <div class="mini_box_logo" />
                <p class="mini_box_title">应用开发</p>
                <p class="mini_box_context">
                  按照“平台+应用”的研发模式，形成了“智慧政务”、“智慧企业系列解决方案
                </p>
              </div>

              <div class="mini_box right_top_box">
                <div class="mini_box_logo" />
                <p class="mini_box_title">核心平台</p>
                <p class="mini_box_context">
                  按照“平台+拥有大数据、云计算、移动互联网、人工智能、云移动设备的核心技术平台
                </p>
              </div>
              <div class="mini_box left_bottom_box">
                <div class="mini_box_logo" />
                <p class="mini_box_title">智慧系统</p>
                <p class="mini_box_context">
                  国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商
                </p>
              </div>
              <div class="mini_box right_bottom_box">
                <div class="mini_box_logo" />
                <p class="mini_box_title">IT运维</p>
                <p class="mini_box_context">
                  按照“平台+提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案
                </p>
              </div>
            </div>
          </div>
          <div class="right_box">
            <div class="right_box_group">
              <p class="right_box_title font56">创思竞争优势</p>
              <p class="right_box_context font16">
                创思信息科技发展有限公司成立于2000年，是国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商，主要致力于为政企客户、社会团体和个人提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案。
                创思信息注重跟踪最新技术发展趋势，在大数据、云计算、移动互联网、人工智能、云移动设备等领域都已创建了多个具有自主知识产权且处于国内领先地位的核心技术平台。
              </p>
            </div>
          </div>
        </div>
        <!-- 团队建设 -->
        <div class="competitive team_build">
          <div class="right_box">
            <div class="right_box_group">
              <p class="right_box_title font56">创思团队建设</p>
              <p class="right_box_context font16">
                获得工信部计算机系统集成壹级资质，通过ISO020000
                IT服务管理体系认证，通过软件能力成熟度模型CMMI
                5级认证，通过ISO27001信息安全管理系统认证，通过ISO14001国际环境管理系统认证，通过ITSS信息技术服务运行维护标准认证，获得专利技术1200余项，自有知识产权框架平台8个，获得软件著作权2500多个。创思信息现有员工530余人，其中：博士生100余人，研究生200余人，专业技术人才230余人。公司总部位于湖南长沙，下设杭州分公司、北京分公司、广州分公司、海口分公司、西安分公司、湘潭分公司及办事处。
              </p>
            </div>
          </div>

          <div class="left_box">
            <div class="mini_box_group">
              <div class="mini_box left_top_box">
                <div class="mini_box_logo">
                  <img src="../assets/imgs/home/Naver_Line_Webtoon_logo1.png" />
                </div>
                <p class="mini_box_title">人才培养</p>
                <p class="mini_box_context">
                  创思信息在湖南、广东设有自己的培训学校，员工可带薪报名参与。公司每年人才培养资金高达1.4个亿。
                </p>
              </div>

              <div class="mini_box right_top_box">
                <div class="mini_box_logo">
                  <img src="../assets/imgs/home/Dribbble_logo_perple1.png" />
                </div>
                <p class="mini_box_title">团建活动</p>
                <p class="mini_box_context">
                  团建活动有周末团建、下午茶、月团建、大团建、生日派对、一年一个大旅游团建。
                </p>
              </div>
              <div class="mini_box left_bottom_box">
                <div class="mini_box_logo">
                  <img src="../assets/imgs/home/shopee-logo-404821.png" />
                </div>
                <p class="mini_box_title">职级晋升</p>
                <p class="mini_box_context">
                  完备的职级晋升机制，公开透明，能力优先，以技术和资质为基础，为员工安排公平公开的职级晋升线路。
                </p>
              </div>
              <div class="mini_box right_bottom_box">
                <div class="mini_box_logo">
                  <img
                    src="../assets/imgs/home/tokopedia-logo-40654CCDD6-seeklogo1.png"
                  />
                </div>

                <p class="mini_box_title">项目奖金</p>
                <p class="mini_box_context">
                  按照“平台+创思80%以上的项目为自研自维护项目，项目开发及运维，提供丰厚的项目奖金，保证团队稳定。
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 平台找工作 -->
        <div class="show_job">
          <div class="show_job_box">
            <p class="box_title">你是不是想在创思找工作?</p>
            <p class="box_context font20">
              我们在线上为您安排了200多个工作岗位，欢迎你咨询！您可查询本网，可快速了解现有岗位情况。
            </p>
            <el-button class="show-jobs" type="primary" color="#1E1E1E"
              >岗位展示</el-button
            >
          </div>
          <div class="show_job_box">
            <p class="box_title">你是不是想在平台发布工作？</p>
            <p class="box_context">
              人力资源部、部门经理、项目经理，都可以在此平台发布工作了哦，欢迎试用！
            </p>
            <el-button class="post-jobs" type="primary" color="#1E1E1E"
              >发布工作</el-button
            >
          </div>
        </div>
      </main>
      <!-- 尾部 -->
      <footer>
        <dl>
          <dt><img src="../assets/logo.png" /></dt>
          <dd>祝你的工作能被项目组认同</dd>
          <dd>chances@gmail.com</dd>
          <dd>400-669-0559</dd>
          <dd>欢迎来电咨询</dd>
        </dl>
        <dl class="right_box">
          <dt>站内导航</dt>
          <dd>关于创思</dd>
          <dd>常见问题</dd>
          <dd>岗位展示</dd>
          <dd>薪资说明</dd>
        </dl>

        <dl class="right_box">
          <dt>工作分类</dt>
          <dd>java工程师</dd>
          <dd>UI/UX工程师</dd>
          <dd>Web工程师</dd>
          <dd>行政管理</dd>
        </dl>
        <dl class="right_box">
          <dt>信息提交</dt>
          <dd>
            <input placeholder="邮箱" type="text" />
            <button>提交</button>
          </dd>
        </dl>
      </footer>
    </div>
  </div>
</template>

<script >
import { ref } from 'vue'

const activeIndex1 = ref('1');
export default {
  setup() {
    return {
      activeIndex1
    }
  },


}
</script>

<style lang="scss" scoped>
.contioner {
  display: flex;
  color: #fff;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  /* 侧轴剧中 */
  align-items: center;
  position: relative;
  font-size: 24px;
}

.home_container {
  background-color: #e6e6fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 侧轴剧中 */
  align-items: center;
  position: relative;
  /*
  box-sizing: border-box;*/

  nav {
    background-color: #2a2ad1;
    height: 95px;
    width: 1440px;
    position: fixed;
    top: 0;
    z-index: 111;
    box-sizing: border-box;
    padding-right: 65px;
    .el-button {
      font-size: 20px;
      ::v-deep() {
        padding: 1.5em 2em !important;
      }
    }
    /*logo图标*/
    .header_logo {
      float: left;
      width: 340px;
      height: 95px;
      background-image: url("../assets/logo.png");
      background-repeat: no-repeat;
      background-position-x: 65px;
    }

    /*导航栏的导航条ul*/
    ul.header_nav {
      float: right;
      li {
        float: left;
        font-size: 24px;
        color: #fff;
        padding: 0 25px;
        list-style: none;
        line-height: 95px;
        background-color: #2a2ad1;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 侧轴剧中 */
    align-items: center;
    width: 1440px;
    overflow: hidden;
    .navBar {
      width: 100%;
      height: 772px;
      background-image: url("../assets/imgs/home/Navbar.png");
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* 侧轴剧中 */
      align-items: center;
      .in_navBar {
        padding: auto;
        width: 1302px;
        p {
          margin: 1em 0 0 0;
        }
        .p_discribe {
          width: 528px;
          margin-bottom: 60px;
        }
        .el-button {
          ::v-deep {
            font-size: 16px;
          }
        }
      }
    }
    .search_job {
      height: 150px;
      width: 1440px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /* 侧轴剧中 */
      align-items: center;
      overflow: hidden;
      margin: 40px auto;

      button,
      select {
        padding: 0.5em 1em !important;
        background-color: #fff;
        border: 1px solid rgba(154, 154, 235, 0.5);
        border-radius: 8px;
        margin: auto 15px;
      }
      .job_btn {
        background-color: #2a2ad1;
        color: #fff;
      }
      .job_btn_height {
        padding: 0 1em !important;
      }
    }
    /*竞争优势start*/
    /*左右两栏布局*/
    .competitive {
      height: 946px;
      width: 100%;
      display: flex;
      background-image: url("../assets/imgs/home/PopularCategory.png");
      .left_box {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .right_box {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .right_box_title {
          line-height: 56px;
          width: 417px;
          height: 70px;
        }
        .right_box_context {
          margin-top: 2em;
          width: 575px;
          height: 253px;
          line-height: 28px;
        }
      }
    }
    /*四个小盒子的布局*/
    .mini_box {
      width: 305px;
      height: 193px;
      border-radius: 7px;
      background-color: rgba(23, 23, 93);
      display: inline-block;
      margin-right: 30px;
      position: relative;

      .mini_box_logo {
        width: 34px;
        height: 34px;
        border: 9px solid;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: 0;
        border-radius: 50%;
        position: absolute;
        left: 12px;
        top: 20px;
      }
      .mini_box_title {
        font-size: 20px;
        position: absolute;
        left: 31px;
        top: 84px;
      }
      .mini_box_context {
        width: 211px;
        font-size: 14px;
        position: absolute;
        left: 31px;
        top: 114px;
        text-align: left;
      }
    }

    /*小盒子的logo设计背景图片引入*/
    .competitive {
      .left_top_box {
        margin-top: 55px;
        .mini_box_logo {
          background-image: url("../assets/imgs/home/carbon_application-web.png");
        }
      }

      .right_top_box {
        position: relative;
        top: 55px;
        .mini_box_logo {
          background-image: url("../assets/imgs/home/nimbus_marketing.png");
        }
      }

      .left_bottom_box {
        margin-top: 55px;
        .mini_box_logo {
          background-image: url("../assets/imgs/home/bi_code-slash.png");
        }
      }

      .right_bottom_box {
        position: relative;
        top: 55px;
        .mini_box_logo {
          background-image: url("../assets/imgs/home/arcticons_tagwriter.png");
        }
      }
    }

    /*四个小盒子的布局end*/

    /*竞争优势end*/

    /*团队建设*/
    .team_build {
      background-image: none;
      color: #000000;
      height: 496px;
      .mini_box_group {
        position: relative;
        top: -55px;
      }
      .mini_box {
        background-color: #fff;
        box-shadow: #000000;
        .mini_box_logo {
          width: 55px;
          height: 55px;
          background-image: none;
          background-color: #fff;
          border: #fff;
        }
      }

      .left_top_box {
        background-color: #2a2ad1;
        .mini_box_logo {
          background: none;
        }
      }
    }
    /*团队建设end*/

    /*平台找工作*/
    .show_job {
      height: 1122px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      /* 侧轴剧中 */
      align-items: center;
      background-image: url("../assets/imgs/home/Looking.png");
      .show_job_box {
        width: 558px;
        .box_title {
          font-size: 36px;
          line-height: 70px;
          margin-bottom: 20px;
        }
        .box_context {
          font-size: 20px;
          line-height: 24px;
          height: 70px;
        }
        .el-button {
          font-size: 20px;
          margin-top: 32px;
          ::v-deep() {
            padding: 1.5em 1em !important;
          }
        }
      }
    }
  }

  footer {
    margin-top: 500px;
    height: 904px;
    width: 100%;
    background-image: url("../assets/imgs/home/Footer.png");
    display: flex;
    justify-content: space-around;
    align-items: center;

    dt {
      font-size: 32px;
      margin-bottom: 1em;
    }
    dd {
      font-size: 24px;
      margin: 24px auto;

      input {
        width: 226px;
        height: 50px;
      }
      button {
        height: 50px;
        width: 122px;
        background-color: #4d4ddb;
        color: #fff;
        border-radius: 4px;
      }
    }
    .right_box {
      height: 256px;
    }
  }
}
</style>