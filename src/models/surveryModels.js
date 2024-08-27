const PrismaClient = require("@prisma/client");

const prisma = new PrismaClient;

class surveyModel {

    static async getAllSurveys(){
        return await prisma.Survey.findMany();
    }

    static async getSurveyById(id){
        return await prisma.Survey.findUnique({where : {id} });
    }

    static async createSurvey(data){
        return await prisma.Survey.create(data);
    }

    static async updateSurvey(id, data) {
        return await prisma.Survey.update({ where: { id }, data });
      }
    
      static async deleteSurvey(id) {
        return await prisma.Survey.delete({ where: { id } });
      }

}

module.exports = surveyModel;

