<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="title"
    @ok="handleSubmit"
    :keyboard="true"
    :maskClosable="false"
  >
    <div>
      <BasicForm @register="registerFrom" />
    </div>
  </BasicModal>
</template>

<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { formSchema } from './customer.data';
  import { ref, unref } from 'vue';
  import { save, update } from '../../../api/salary/customer';
  import { message } from 'ant-design-vue';

  const [registerFrom, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    colon: true,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { span: 24 },
    actionColOptions: {
      span: 23,
    },
  });
  const title = ref('添加客户');
  const isUpdate = ref(false);
  const id = ref(null);
  const emits = defineEmits(['success', 'register']);
  const [register, { setModalProps, closeModal }] = useModalInner((data) => {
    id.value = data.id;
    isUpdate.value = data.isUpdate;
    title.value = isUpdate.value ? '编辑客户' : '添加客户';
    resetFields();
    setModalProps({ confirmLoading: false });
    setFieldsValue(data);
  });

  //   提交
  const handleSubmit = async () => {
    try {
      setModalProps({ confirmLoading: true });
      const values = await validate();
      if (!isUpdate.value) {
        values.orderNum = Number(values.orderNum);
        await save(values);
        message.success('添加成功');
      } else {
        await update({ ...values, id: unref(id) });
        message.success('修改成功');
      }
      closeModal();
      emits('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  };
</script>

<style scoped></style>
../../../api/salary/customer
