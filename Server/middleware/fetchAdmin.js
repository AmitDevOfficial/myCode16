const fetchAdmin = async (req, res, next) => {
    try {

        const userId = req.user;

        if (!userId) {
            return res.status(403).json({ error: "Forbidden Error" });
        }
        
        res.status(200).json(userId);
        next()
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = fetchAdmin;
