import sampleData from './sample-data';

export const getMultiple = (req, res) => {
  res.json({ builds: sampleData });
};

export const get = (req, res) => {
  const buildId = parseInt(req.params.id, 10);
  const build = sampleData.find(sample => (sample.id === buildId));

  if (!build) {
    res.json({ message: 'Build not found.' });
  } else {
    res.json({ build });
  }
};
