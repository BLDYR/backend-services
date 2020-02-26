import { pcBuildsApi } from '@apis';

const pcBuildsController = {
  getMultiple: (req, res) => {
    pcBuildsApi.getMultiple().then((apiRes) => {
      res.json({ ...apiRes.data });
    }).catch((err) => { console.log('API Gateway request error: ', err) });
  },
  get: (req, res) => {
    pcBuildsApi.get(req.params.id).then((apiRes) => {
      res.json({ ...apiRes.data });
    }).catch((err) => { console.log('API Gateway request error: ', err) });
  },
};

export default pcBuildsController;
