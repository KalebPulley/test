//return data
function returnData(req, res){
    const data = "I know Orian Pulley"
    res.send(data);
}
module.exports = {
    returnData,
};