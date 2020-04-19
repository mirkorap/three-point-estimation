const EstimationCalculator = {
  calculateEstimatedTime({ optimalEstimation, probableEstimation, pessimisticEstimation }) {
    const estimatedTime = (optimalEstimation + (probableEstimation * 4) + pessimisticEstimation) / 6;

    return estimatedTime.toFixed(1);
  },
  calculateStandardDeviation({ pessimisticEstimation, optimalEstimation }) {
    const standardDeviation = (pessimisticEstimation - optimalEstimation) / 6;

    return standardDeviation.toFixed(1);
  },
};

export default EstimationCalculator;
