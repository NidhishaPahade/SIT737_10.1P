const project = 'your-project-id';
const metricType = 'custom.googleapis.com/my_metric';
const resource = {
  type: 'global',
  labels: {
    project_id: project,
  },
};
const metricValue = {
  doubleValue: 3.14,
};

const request = {
  name: metricType,
  metric: {
    type: metricType,
    labels: {
      environment: 'production',
    },
  },
  resource: resource,
  value: metricValue,
};

metricServiceClient.createTimeSeries(request);
