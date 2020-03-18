
const port = 80;

const pokemon = require("json-pokemon");

const cors = require("cors");
App.use(cors());

App.use(Express.json());

// App.use("/", Express.static("client/build"));

App.get("/name/:name", (req,res)=>{
    let result = {"error": "Invalid"};
    let pokemonNames = req.params.name;

    pokemon.forEach((value) =>{

        let pokemonName = pokemonNames;
        if (value.name == pokemonNames){
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    } else{
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.listen(port,()=>{
    console.log("Server is up, up, up.");
});