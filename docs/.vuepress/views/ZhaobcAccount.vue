<template>
  <blog-account
    :nickname="nickname"
    :avatar="avatar"
    :bio="bio"
    :title="title"
    :group="group"
    :address="address"
    :tags="tags"
    :teams="teams"
  ></blog-account>
</template>

<script>
import BlogAccount from '@/components/blog/Account';

export default {
  components: {
    BlogAccount,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  data() {
    return {
      nickname: 'ZhaoBin',
      avatar: '',
      bio: '个人简介',
      title: '程序员',
      group: '搬砖公司',
      address: '山东 济南',
      tags: [],
      teams: [],
    };
  },
};
</script>
