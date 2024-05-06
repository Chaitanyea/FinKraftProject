import transactionModel from '../models/transactionModel.js';
import csvtojson from 'csvtojson';

const importFile = async(req, res) => {
    try{
        csvtojson().fromFile(req.file.path)
        .then((res) => {
            console.log(res);
        });
        res.status(200).send({status:200, message: 'File uploaded successfully'});
    }
    catch(err){
        res.status(400).send({status:400, message: err.message});
    }
}

export default importFile;