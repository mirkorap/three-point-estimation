<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="items"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="updatePageCount($event)">
      <template #item.actions="{ item }">
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template #body.append>
        <tr :class="{'v-data-table__mobile-table-row': $vuetify.breakpoint.xsOnly}">
          <td :class="{'v-data-table__mobile-row': $vuetify.breakpoint.xsOnly}">
            <strong>Totals</strong>
          </td>
          <td
              v-for="header in headers.slice(1, -1)"
              :key="header.value"
              :class="{'v-data-table__mobile-row': $vuetify.breakpoint.xsOnly}">
            <div v-show="$vuetify.breakpoint.xsOnly"
                 class="v-data-table__mobile-row__header">
              {{ header.text }}
            </div>
            <div :class="{'v-data-table__mobile-row__cell': $vuetify.breakpoint.xsOnly}">
              {{ totals[header.value] }}
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
    <div :class="['text-center', 'pt-2', {'d-none': !pageCount}]">
      <v-pagination
          v-model="page"
          :length="pageCount">
      </v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EstimationTable',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: 'Task',
            sortable: true,
            value: 'task',
          },
          {
            text: 'Optimal Estimation (O)',
            sortable: true,
            value: 'optimalEstimation',
          },
          {
            text: 'Probable Estimation (N)',
            sortable: true,
            value: 'probableEstimation',
          },
          {
            text: 'Pessimistic Estimation (P)',
            sortable: true,
            value: 'pessimisticEstimation',
          },
          {
            text: 'Estimated Time (µ)',
            sortable: true,
            value: 'estimatedTime',
          },
          {
            text: 'Standard Deviation (σ)',
            sortable: true,
            value: 'standardDeviation',
          },
          {
            text: 'Actions',
            sortable: false,
            value: 'actions',
          },
        ],
      };
    },
    computed: {
      totals() {
        const initialValue = {
          optimalEstimation: 0,
          probableEstimation: 0,
          pessimisticEstimation: 0,
          estimatedTime: 0,
          standardDeviation: 0,
        };

        return this.items.reduce((carry, item) => ({
          optimalEstimation: carry.optimalEstimation + Number(item.optimalEstimation),
          probableEstimation: carry.probableEstimation + Number(item.probableEstimation),
          pessimisticEstimation: carry.pessimisticEstimation + Number(item.pessimisticEstimation),
          estimatedTime: carry.estimatedTime + Number(item.estimatedTime),
          standardDeviation: carry.standardDeviation + Number(item.standardDeviation),
        }), initialValue);
      },
    },
    methods: {
      deleteItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      },
      updatePageCount($event) {
        this.pageCount = $event;
      },
    },
  };
</script>

<style scoped>

</style>
