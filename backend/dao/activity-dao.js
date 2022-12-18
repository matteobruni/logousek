import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (callback) => {
    try{
      const result = await callback();
      await prisma.$disconnect();
      return result
    } catch(e){
      console.log("e", e)
      await prisma.$disconnect();
      process.exit(1);
    }
};

const addScoreLogic = async (newItem) => {
  await prisma.score.create({
    data: newItem,
  });
};

const getUserScoreLogic = async ({ userId }) => {
  console.log(
    (await prisma.score.aggregate({
      _sum: {
        points: true,
      },
      where: {
        userId,
      },
    }))["_sum"].points,
    "test"
  );
  return (await prisma.score.aggregate({
    _sum: {
      points: true,
    },
    where: {
      userId,
    },
  }))["_sum"].points
};

const addScore = async (dtoIn) => {
  return await main(() => addScoreLogic(dtoIn));
};

const getUserScore = async (dtoIn) => {
  return await main(() => getUserScoreLogic(dtoIn));
};

const activityDao = { addScore, getUserScore };
export default activityDao;
