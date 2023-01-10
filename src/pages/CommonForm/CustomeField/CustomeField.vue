
<script>
import { FieldBox } from '@qycloud/lego';
import CustomeCoordinate from './CustomeCoordinate.vue';

export default {
  name: 'MyName',
  extends: FieldBox,
  components: {
    CustomeCoordinate,
  },
  methods: {
    renderFieldComponent() {
      if (this.id === 'shuzizyh') {
        return CustomeCoordinate;
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
