<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="12">
          <estimation-form></estimation-form>
        </v-col>
      </v-row>
    </v-card-title>
    <estimation-table></estimation-table>
  </v-card>
</template>

<script>
  import EstimationForm from '@/components/Estimation/EstimationForm.vue';
  import EstimationTable from '@/components/Estimation/EstimationTable.vue';

  export default {
    name: 'Estimation',
    components: {
      EstimationForm,
      EstimationTable,
    },
  };
</script>

<style scoped>

</style>
