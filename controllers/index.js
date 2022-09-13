//return data
function returnData(req, res){
    const data = "this is for testing purposses right now."
    res.send(data);
}
module.exports = {
    returnData,
};
