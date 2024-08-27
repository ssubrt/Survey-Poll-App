const express = require("express");
const surveyControllers = require("../controllers/surveyControllers");


const app = express();

const router = express.Router();

const surveyController = new surveyControllers();

router.get('/',surveyController.getAllSurveys);
router.post('/:id',surveyController.getSurveyById);
router.post('/', surveyController.createSurvey);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);

module.exports = router;