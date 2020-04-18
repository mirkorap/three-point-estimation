<template>
  <v-data-table
      :headers="headers"
      :items="items">
    <template #item.actions="{ item }">
      <v-icon @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template #body.append>
      <tr>
        <td><strong>Totals</strong></td>
        <td>{{ totals.optimalEstimation }}</td>
        <td>{{ totals.probableEstimation }}</td>
        <td>{{ totals.pessimisticEstimation }}</td>
        <td>{{ totals.estimatedTime }}</td>
        <td>{{ totals.standardDeviation }}</td>
      </tr>
    </template>
  </v-data-table>
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
    },
  };
</script>

<style scoped>

</style>
