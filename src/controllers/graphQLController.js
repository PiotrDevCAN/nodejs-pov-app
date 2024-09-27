const { fetchLaunchData } = require('../services/graphqlMyClient');

const getData = async (req, res) => {
    // const userId = req.params.id;
    try {
        // const data = await fetchLaunchData(userId);
        const data = await fetchLaunchData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

// module.exports = { getUserData };

module.exports = {
    main: (req, res) => {
        getData(req, res);
    }
};