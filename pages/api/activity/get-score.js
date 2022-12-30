import activityController from '../../../backend/controllers/activity-controller'

export default async function handler (
  req,
  res
) {
  activityController.getUserScore(req, res)
}
