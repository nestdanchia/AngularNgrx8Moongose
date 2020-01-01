module.exports = (app, ruta) => {

    const customers=[
        {     id:'1',
            name:'Berries',
            done:true
        },
        {    
            id:'2',
            name:'Sharifa',
            done:true
        },
        {      id:'3',
            name:'Apples',
            done:true
        },
        {     id:'4',
            name:'Bananas',
            done:true
        },
    ]
    app.get(`${ruta}`, (req, res) =>  res.json(customers));




}