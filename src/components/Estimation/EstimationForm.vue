<template>
  <v-form v-model="valid">
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="task"
            :rules="taskRules"
            :counter="30"
            label="Task"
            required>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          md="4">
        <v-text-field
            v-model="optimalEstimation"
            :rules="estimationRules"
            label="Optimal estimation (days)"
            required>
        </v-text-field>
      </v-col>

      <v-col
          cols="12"
          md="4">
        <v-text-field
            v-model="probableEstimation"
            :rules="estimationRules"
            label="Probable estimation (days)"
            required>
        </v-text-field>
      </v-col>

      <v-col
          cols="12"
          md="4">
        <v-text-field
            v-model="pessimisticEstimation"
            :rules="estimationRules"
            label="Pessimistic estimation (days)"
            required>
        </v-text-field>
      </v-col>
    </v-row>

    <v-btn
        :disabled="!valid"
        :class="{'v-btn--block': $vuetify.breakpoint.xsOnly}"
        color="success"
        @click="submit">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'EstimationForm',
    data() {
      return {
        valid: false,
        task: '',
        optimalEstimation: '',
        probableEstimation: '',
        pessimisticEstimation: '',
        taskRules: [
          (v) => !!v || 'This field is required',
          (v) => v.length <= 30 || 'This field must be less than 30 characters',
        ],
        estimationRules: [
          (v) => !!v || 'This field is required',
          (v) => !Number.isNaN(Number(v)) || 'This field must be a numeric value',
          (v) => Number(v) > 0 || 'Value must be greater than zero',
        ],
      };
    },
    methods: {
      submit() {
        const newEstimation = {
          task: this.task,
          optimalEstimation: Number(this.optimalEstimation),
          probableEstimation: Number(this.probableEstimation),
          pessimisticEstimation: Number(this.pessimisticEstimation),
        };

        this.$emit('new-estimation', newEstimation);
        this.resetFields();
      },
      resetFields() {
        this.valid = false;
        this.task = '';
        this.optimalEstimation = '';
        this.probableEstimation = '';
        this.pessimisticEstimation = '';
      },
    },
  };
</script>

<style scoped>

</style>
