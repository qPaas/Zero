<template>
  <div class="common-form">
    <form-page
      :module="module"
      :app="app"
      :form="form"
      :node="node"
      :edit="edit"
      :spaceId="spaceId"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { FormPage, ComponentxPlugin } from '@qycloud/lego';
import SlaveViewShow from './SlaveViewShow.vue';

Vue.use(ComponentxPlugin);


export default {
  name: 'CommonForm',
  components: {
    FormPage,
  },
  xComponents: {
    slave: SlaveViewShow,
  },
  data() {
    return {
      app: 'GeZhongZiDuanZhuCong',
      module: 'information',
      form: '123',
      node: '',
      edit: '1',
      spaceId: 'preCeShiQiYe',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.common-form {
  width: 100%;
  height: 100%;
}
</style>
