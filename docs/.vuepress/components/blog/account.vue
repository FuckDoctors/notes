<template>
  <div class="account-wrapper">
    <a-affix :offset-top="60">
      <a-card :bordered="false" class="account">
        <div class="account-avatar-holder">
          <div class="avatar">
            <img :src="avatar" :alt="nickname" />
          </div>
          <div class="nickname">{{ nickname }}</div>
          <div v-if="bio" class="bio">{{ bio }}</div>
        </div>

        <div class="detail">
          <p v-if="title">
            <i class="title"></i>
            {{ title }}
          </p>
          <p v-if="group">
            <i class="group"></i>
            {{ group }}
          </p>
          <p v-if="address">
            <i class="address"></i>
            {{ address }}
          </p>
        </div>

        <template v-if="tags && tags.length > 0">
          <a-divider />
          <div class="tags">
            <div class="tag-title">标签</div>
            <div class="tag-list">
              <template v-for="tag in tags">
                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                  <a-tag>{{ `${tag.slice(0, 20)}...` }}</a-tag>
                </a-tooltip>
                <a-tag v-else :key="tag">{{ tag }}</a-tag>
              </template>
            </div>
          </div>
        </template>

        <template v-if="teams && teams.length > 0">
          <a-divider :dashed="true" />
          <div class="teams-container">
            <div class="team-title">团队</div>
            <div class="teams">
              <a-row>
                <a-col v-for="(team, index) in teams" :key="index" :span="12">
                  <a v-if="team.link" :href="team.link">
                    <a-avatar
                      v-if="team.avatar"
                      size="small"
                      :src="team.avatar"
                      class="no-zoom"
                    ></a-avatar>
                    <span class="team">{{ team.name }}</span>
                  </a>
                  <div v-else class="no-link">
                    <a-avatar
                      v-if="team.avatar"
                      size="small"
                      :src="team.avatar"
                    ></a-avatar>
                    <span class="team">{{ team.name }}</span>
                  </div>
                </a-col>
              </a-row>
            </div>
          </div>
        </template>
      </a-card>
    </a-affix>
  </div>
</template>

<script>
import {
  Card,
  Divider,
  Tooltip,
  Tag,
  Row,
  Col,
  Avatar,
  Affix,
} from 'ant-design-vue';

export default {
  // name: 'BlogAccount',
  components: {
    ACard: Card,
    ADivider: Divider,
    ATooltip: Tooltip,
    ATag: Tag,
    ARow: Row,
    ACol: Col,
    AAvatar: Avatar,
    AAffix: Affix,
  },
  props: {
    avatar: {
      required: true,
      default: '/account/avatar/avatar2.jpg',
      type: String,
    },
    nickname: {
      required: true,
      default: 'ZhaoBin',
      type: String,
    },
    bio: {
      default: '这人很懒，什么也没留。',
      type: String,
    },
    title: {
      default: null,
      type: String,
    },
    group: {
      default: null,
      type: String,
    },
    address: {
      default: null,
      type: String,
    },
    tags: {
      required: false,
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      default: () => [],
    },
    teams: {
      required: false,
      type: Array,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      default: () => [],
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      validator: (value) => {
        if (value) {
          let valid = true;
          for (const team of value) {
            ['name'].forEach((item) => {
              if (
                team[item] === undefined ||
                team[item] === null ||
                team[item] === ''
              ) {
                valid = false;
                return;
              }
            });
            if (!valid) {
              return false;
            }
          }
        }
        return true;
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.account-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;
}
.account {
  .account-avatar-holder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .nickname {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url('/account/icons.svg');
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .team-container {
    .teams {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;

        .team {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }

        &:hover {
          span {
            color: #1890ff;
          }
        }
      }

      .no-link {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;

        .team {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
      }
    }
  }

  .tag-title,
  .team-title {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
