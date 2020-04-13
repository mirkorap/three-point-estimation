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
      <v-col cols="12"
             md="4">
        <v-text-field
            v-model="optimalEstimation"
            :rules="estimationRules"
            label="Optimal estimation (hours)"
            required>
        </v-text-field>
      </v-col>

      <v-col cols="12"
             md="4">
        <v-text-field
            v-model="probableEstimation"
            :rules="estimationRules"
            label="Probable estimation (hours)"
            required>
        </v-text-field>
      </v-col>

      <v-col cols="12"
             md="4">
        <v-text-field
            v-model="pessimisticEstimation"
            :rules="estimationRules"
            label="Pessimistic estimation (hours)"
            required>
        </v-text-field>
      </v-col>
    </v-row>

    <v-btn
        :disabled="!valid"
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
    computed: {
      // TODO: move these computed properties into service class
      estimatedTime() {
        const value = (
          Number(this.optimalEstimation)
          + (Number(this.probableEstimation) * 4)
          + Number(this.pessimisticEstimation)
        ) / 6;

        return Number(value).toFixed(1);
      },
      standardDeviation() {
        const value = (Number(this.pessimisticEstimation) - Number(this.optimalEstimation)) / 6;

        return Number(value).toFixed(1);
      },
    },
    methods: {
      submit() {
        const newEstimation = {
          task: this.task,
          optimalEstimation: this.optimalEstimation,
          probableEstimation: this.probableEstimation,
          pessimisticEstimation: this.pessimisticEstimation,
          estimatedTime: this.estimatedTime,
          standardDeviation: this.standardDeviation,
        };

        this.$emit('newEstimation', newEstimation);
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
