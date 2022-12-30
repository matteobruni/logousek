import activityController from '../../../backend/controllers/activity-controller'

export default async function handler (
  req,
  res
) {
  await activityController.addScore(req, res)
}
