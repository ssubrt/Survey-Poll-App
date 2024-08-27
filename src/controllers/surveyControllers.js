const surveyModel = require("../models/surveryModels");


class surveyController {
    async getAllSurveys(req,res){
        try{
             const response = await surveyModel.find();
             res.status(200).json(response);

        }
        catch(err){
            res.status(500).json({message : err.message});

        }

    }


    async getSurveyById(req,res){
        try{

            const response  = await surveyModel.findById(req.params.id);
            if(survey==null){
                return res.status(404).json({message: "Survey Not Exist"});
            }

            res.status(200).json(response);

        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }

    async createSurvey(req,res){
        const survey = new surveyModel(req.body);
        try{
            const response = await survey.save();
            res.status(201).json(response);

        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }

    async updateSurvey(req,res){
        try{
            const response = await surveyModel.updateOne({ _id: req.params.id },req.body);
            res.status(201).json(response);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }

    async deleteSurvey(req,res){
        try{
            const response  = await surveyModel.delete({ _id: req.params.id });
            res.status(200).json(response);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }


}

module.exports = new surveyController