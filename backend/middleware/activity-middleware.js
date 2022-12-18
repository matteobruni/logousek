import activityDao from "../dao/activity-dao";

const addScore = async (dtoIn, res) => {
  const addedScrore = await activityDao.addScore({
    userId: dtoIn.userId,
    points: dtoIn.score,
  });

  res.status(200).send({message: "Vytvořeno"})
};

const getUserScore = async (dtoIn, res) => {
    const score = await activityDao.getUserScore({
      userId: dtoIn.userId
    });

    console.log("score", score)
  
    res.status(200).send({score: score})
  };

const activityMiddleware = { addScore, getUserScore };
export default activityMiddleware;
