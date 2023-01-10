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
import CustomeField from './CustomeField/CustomeField.vue';

Vue.use(ComponentxPlugin);


export default {
  name: 'CommonForm',
  components: {
    FormPage,
  },
  xComponents: {
    'field-field-box': CustomeField, // form老设计器
    'FieldBox': CustomeField, // form新设计器
  },
  data() {
    return {
      app: 'ZhuCongBiao',
      module: 'dataflow',
      form: '278919',
      node: '',
      edit: '1',
      spaceId: 'preCeShiQiYe',
    };
  },
  methods: {

  },
};
</script>

<style lang="scss">
.common-form {
    width: 100%;
    height: 100%;
}
</style>
