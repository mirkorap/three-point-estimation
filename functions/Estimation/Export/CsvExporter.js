const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const { parse } = require('json2csv');

exports.exportEstimations = functions.https.onRequest(async (req, res) => cors(req, res, () => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: `Il metodo ${req.method} non è consentito`,
    });
  }

  const fields = [
    'task',
    'optimalEstimation',
    'probableEstimation',
    'pessimisticEstimation',
    'estimatedTime',
    'standardDeviation',
  ];
  const delimiter = ',';
  const options = { fields, delimiter };
  const csv = parse(req.body, options);

  res.setHeader('Content-disposition', 'attachment; filename=estimations.csv');
  res.set('Content-Type', 'text/csv');
  return res.status(200).send(csv);
}));
