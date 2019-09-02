module.exports = {
    getHouses: (req, res, next) => {
        req.app.get('db').get_houses()
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'WHY'}, console.log(err)))
    },

    addHouse: (req, res, next) => {
        const { name, address, city, state, zip, img, mortgage, rent } = req.body;

        req.app.get('db').create_house([name, address, city, state, zip, img, mortgage, rent])
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'CMON'}, console.log(err)))
    },

    deleteHouse: (req, res, next) => {
        const { params } = req;
        req.app.get('db').delete_house(params.id)
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'OH NO'}, console.log(err)))
    }
}