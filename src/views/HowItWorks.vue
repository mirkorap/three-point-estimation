<template>
  <div class="mt-5">
    <v-row>
      <v-col class="d-flex justify-center"
             cols="12">
        <h1 class="display-1">
          Three-point Estimation
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-10 body-1"
             cols="12">
        <p>
          Developers have to estimate the amount of time required to complete their features. This
          is at the same time a simple and a frightening task because the business depends on them.
          There is no ultimate way to make correct estimation every time, but it is possible to aim
          for a good evaluation. But first, what is an estimate in the software development
          environment?
        </p>
        <p>
          In some cases it is a commitment, you must achieve it! You have to be absolutely certain
          (100%) to commit yourself into a deadline. Other people will make plan based on your
          commitments so you definitely don’t want to miss them.
        </p>
        <p>
          In other cases an estimate is… an estimate! It is a guess, you do not promise anything
          and you do not commit yourself. If you already had to quantify the time a development task
          will take you certainly know how difficult it is. Most of the time there are too many
          variables in play to make a proper estimation. And most of all an estimate is not a
          number, it is a probability distribution!
        </p>
        <p>
          The <strong>Three-point Estimation</strong> technique is used in management and
          information systems applications for the construction of an approximate probability
          distribution representing the outcome of future events, based on very limited information.
          When estimating a task 3 numbers must be provided:
        </p>
        <ul>
          <li>
            <strong>Optimistic Estimation (O)</strong>:
            Everything goes as planned, nothing as come into the way.
          </li>
          <li>
            <strong>Probable Estimation (N)</strong>:
            The value with the highest probability.
          </li>
          <li>
            <strong>Pessimistic Estimation (P)</strong>:
            Everything goes wrong.
          </li>
        </ul>
        <p class="mt-3">
          With these 3 values it’s possible to describe the probability distribution of the task
          with the following formula: <code>µ = (O + 4N + P) / 6</code>
        </p>
        <p>
          µ gives us the expected duration of the task, but this is just an average based on some
          coefficients and cannot be used as a deadline, it is a <strong>hint</strong>.
          Moreover the pessimistic estimate high value increase this average.
        </p>
        <p>
          So we need to calculate the <strong>standard deviation</strong> of the task.
          It is a measure to specify how uncertain the task is and the formula to use is:
          <code>σ = (P – O) / 6</code>
        </p>
        <p>
          For example, imagine that you have as a task: "Create an authentication system that allows
          users to sign in on the site". Based on this task you define 3 estimations:
        </p>
        <ul>
          <li>
            <strong>Optimistic Estimation (O)</strong>: 3 days
          </li>
          <li>
            <strong>Probable Estimation (N)</strong>: 7 days
          </li>
          <li>
            <strong>Pessimistic Estimation (P)</strong>: 12 days
          </li>
        </ul>
        <p class="mt-3">
          Now, with these 3 values, we can calculate the probability distribution:
          <code>µ = (3 + (4 * 7) + 12) / 6 = 7.2 (days)</code>
        </p>
        <p>
          So we probably need about 7 days to complete this task. But this is not enough, we
          need
          to calculate the standard deviation to know how many days (±) our estimation is wrong:
          <code>σ = (12 – 3) / 6 = 1.5 (days)</code>
        </p>
        <p>
          Ultimately, we need from 5.7 to 8.7 (days) to complete the task.
        </p>
        <p>
          Professionals developers provide practical estimates, do not make promise they can’t keep
          and commitments that can’t be meet. An estimate is a probability and not a deadline!
        </p>
        <p class="body-2">
          <i>
            Source:
            <a href="https://codingjourneyman.com/2014/10/06/the-clean-coder-estimation/"
               target="_blank"
               title="Clean Coder Estimation">
              Clean Coder Estimation
            </a>
          </i>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'HowItWorks',
  };
</script>

<style scoped>

</style>
