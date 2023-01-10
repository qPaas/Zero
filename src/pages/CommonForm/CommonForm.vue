<template>
  <div class="common-form">
    <form-page
      :module="module"
      :app="app"
      :form="form"
      :node="node"
      :edit="edit"
      :spaceId="spaceId"
      :extendParams="extendParams"
      @form-action="onFormAction"
      @slave-form-action="onSlaveFormAction"
    />
  </div>
</template>

<script>
import { FormPage } from '@qycloud/lego';

export default {
  name: 'CommonForm',
  components: {
    FormPage,
  },
  data() {
    return {
      app: 'ZhuCongBiao',
      module: 'information',
      form: '',
      node: '',
      edit: '1',
      spaceId: 'preCeShiQiYe',
      extendParams: {
        slaveCustomeOptions: [
          {
            slaveTableId: 'zhucongbiaoziyingyon',
            options: {
              sort: [
                {
                  field: 'bianhaoshujuyuan',
                  type: 'desc',
                },
              ],
            },
          },
        ],
      },
    };
  },
  methods: {
    onSlaveFormAction(ctx, {
      formData, validate, next, slaveCtx, serviceId,
    }) {
      validate().then((result) => {
        if (result) {
          next();
        } else {
          console.log(result, '从表验证失败');
        }
      });
      console.log(formData, slaveCtx, serviceId);
    },
    onFormAction(ctx, {
      action, formData, validate, next,
    }) {
      // return;
      if (
        [
          'CANCEL',
          'DATAFLOW_CANCEL',
          'WORKFLOW_CANCEL',
          'SAVE_WORKFLOW',
        ].indexOf(action) > -1
      ) {
        return next();
      }
      return validate().then((result) => {
        if (result) {
          return next();
        }
        return '';
      });
    },
  },
};
</script>

<style lang="scss">
.common-form {
  width: 100%;
  height: 100%;
}
</style>
