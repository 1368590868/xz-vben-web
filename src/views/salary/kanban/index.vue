<template>
  <PageWrapper contentBackground contentClass="p-4">
    <div class="pt-8">
      <div
        class="py-4 mb-6 text-2xl font-semibold tracking-wider text-center text-red-700 bg-red-50 rounded"
        >重要提示：职工薪资待遇有变动请在职工薪资中设置！！！</div
      >
      <div class="flex flex-wrap gap-6 justify-center lg:flex-nowrap">
        <div
          class="bg-white rounded-lg shadow p-0 pb-6 flex-1 min-w-[320px] max-w-[800px] flex flex-col relative"
        >
          <div class="py-4 pl-8 text-lg font-semibold text-gray-800 bg-gray-200 rounded-t-lg"
            >待办事项</div
          >
          <ul class="flex-1 px-8 m-0 mb-9 list-none">
            <li
              v-for="(item, idx) in leftPageList"
              :key="idx + (leftCurrent - 1) * pageSize"
              class="flex items-center py-4 text-base border-b border-gray-100"
            >
              <span
                class="inline-block mr-4 w-8 h-8 text-lg font-bold leading-8 text-center text-blue-600 bg-gray-200 rounded-full"
                >{{
                  idx + 1 + (leftCurrent - 1) * pageSize < 10
                    ? '0' + (idx + 1 + (leftCurrent - 1) * pageSize)
                    : idx + 1 + (leftCurrent - 1) * pageSize
                }}</span
              >
              <div class="flex-1 min-w-0">
                <div class="mb-1 font-medium text-gray-900 truncate">{{ item.title }}</div>
                <div class="text-xs text-gray-400"
                  >提交人: {{ item.user }} &nbsp; 提交时间：{{ item.time }}</div
                >
              </div>
              <button
                class="px-4 py-1.5 ml-4 text-base font-medium text-white bg-blue-600 rounded border-none transition cursor-pointer hover:bg-blue-800"
                >去处理</button
              >
            </li>
          </ul>
          <div class="flex absolute right-0 bottom-0 justify-end pr-8 my-4 w-full">
            <Pagination
              :current="leftCurrent"
              :page-size="pageSize"
              :total="leftList.length"
              @change="(page) => (leftCurrent = page)"
              simple
            />
          </div>
        </div>
        <div
          class="bg-white rounded-lg shadow p-0 pb-6 flex-1 min-w-[320px] max-w-[800px] flex flex-col relative"
        >
          <div class="py-4 pl-8 text-lg font-semibold text-gray-800 bg-gray-200 rounded-t-lg"
            >人事变动提醒</div
          >
          <ul class="flex-1 px-8 m-0 mb-9 list-none">
            <li
              v-for="(item, idx) in rightPageList"
              :key="idx + (rightCurrent - 1) * pageSize"
              class="flex items-center py-4 text-base border-b border-gray-100"
            >
              <span
                class="inline-block mr-4 w-8 h-8 text-lg font-bold leading-8 text-center text-blue-600 bg-gray-200 rounded-full"
                >{{
                  idx + 1 + (rightCurrent - 1) * pageSize < 10
                    ? '0' + (idx + 1 + (rightCurrent - 1) * pageSize)
                    : idx + 1 + (rightCurrent - 1) * pageSize
                }}</span
              >
              <div class="flex-1 min-w-0">
                <div class="mb-1 font-medium text-gray-900 truncate">{{ item.title }}</div>
                <div class="text-xs text-gray-400">变动时间：{{ item.time }}</div>
              </div>
            </li>
          </ul>
          <div class="flex absolute right-0 bottom-0 justify-end pr-8 my-4 w-full">
            <Pagination
              :current="rightCurrent"
              :page-size="pageSize"
              :total="rightList.length"
              @change="(page) => (rightCurrent = page)"
              simple
            />
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref, computed } from 'vue';
  import { Pagination } from 'ant-design-vue';
  const pageSize = 5;
  const leftCurrent = ref(1);
  const rightCurrent = ref(1);
  const leftList = ref([
    {
      title: '2025年04月北京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年04月南京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年03月北京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年03月南京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年03月南京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年03月南京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
    {
      title: '2025年03月南京行深软件科技公司工资表审核',
      user: '黄代丽',
      time: '2025-05-06 18:30:23',
    },
  ]);
  const rightList = ref([
    { title: '新员工入职：XX员工2025年5月1日入职', time: '2025-05-06 18:30:23' },
    { title: '新员工入职：XX员工2025年5月1日入职', time: '2025-05-06 18:30:23' },
    { title: '新员工入职：XX员工2025年5月1日入职', time: '2025-05-06 18:30:23' },
    { title: '新员工入职：XX员工2025年5月1日入职', time: '2025-05-06 18:30:23' },
    { title: '新员工入职：XX员工2025年5月1日入职', time: '2025-05-06 18:30:23' },
  ]);
  const leftPageList = computed(() =>
    leftList.value.slice((leftCurrent.value - 1) * pageSize, leftCurrent.value * pageSize),
  );
  const rightPageList = computed(() =>
    rightList.value.slice((rightCurrent.value - 1) * pageSize, rightCurrent.value * pageSize),
  );
</script>
