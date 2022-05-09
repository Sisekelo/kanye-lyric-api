// getLyrics function for post tea route
const getLyrics = (req, res, next) => {
    res.json({message: `Path param is ${req.params("keyword")}`}); // dummy function for now
};

module.exports = {getLyrics}; //export only the above function
