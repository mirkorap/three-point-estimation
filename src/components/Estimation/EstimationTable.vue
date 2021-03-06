<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="elevation-1"
        hide-default-footer
        @page-count="updatePageCount($event)">
      <template #item.actions="{ item }">
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template #body.append>
        <tr :class="{'v-data-table__mobile-table-row': $vuetify.breakpoint.xsOnly}">
          <td
              v-for="header in headers"
              :key="header.value"
              :class="{'v-data-table__mobile-row': $vuetify.breakpoint.xsOnly}">
            <div
                v-show="$vuetify.breakpoint.xsOnly"
                class="v-data-table__mobile-row__header">
              {{ header.text }}
            </div>
            <div :class="{'v-data-table__mobile-row__cell': $vuetify.breakpoint.xsOnly}">
              <template v-if="header.value !== 'actions'">
                <strong>{{ totals[header.value] }}</strong>
              </template>
              <template v-else>
                <v-btn
                    icon
                    small
                    title="Export estimations"
                    @click="exportEstimations()">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </template>
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
  import FileDownloader from '@/modules/File/FileDownloader';

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
          task: 'Totals',
          optimalEstimation: 0,
          probableEstimation: 0,
          pessimisticEstimation: 0,
          estimatedTime: 0,
          standardDeviation: 0,
        };

        return this.items.reduce((carry, item) => ({
          task: 'Totals',
          optimalEstimation: carry.optimalEstimation + item.optimalEstimation,
          probableEstimation: carry.probableEstimation + item.probableEstimation,
          pessimisticEstimation: carry.pessimisticEstimation + item.pessimisticEstimation,
          estimatedTime: carry.estimatedTime + item.estimatedTime,
          standardDeviation: carry.standardDeviation + item.standardDeviation,
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
      async exportEstimations() {
        const url = `${process.env.VUE_APP_CLOUD_FUNCTIONS_URL}/exportEstimations`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([...this.items, this.totals]),
        });

        const content = await response.text();

        FileDownloader.download('estimations.csv', content);
      },
    },
  };
</script>

<style lang="scss">
  @import '~vuetify/src/styles/styles.sass';

  .v-data-table__empty-wrapper td {
    color: map-get($shades, 'black');
  }
</style>
