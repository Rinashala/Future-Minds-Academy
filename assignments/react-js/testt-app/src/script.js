//JSX
// const app = <div>
//     <h1>Hello from {name}</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// </div>;
// // const emri = React.createElement('h1', null, 'Lina Demiri');
// // const emri = <h1>Lina Demri</h1>
// //krijohet nje here
// const root = document.getElementById('root');
// //thirret vetem njehere
// ReactDOM.render(app, root)
// // ReactDOM.render(emri, root)

const games = [
    {
        name: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Adventure'
    },
    {
        name: 'Minecraft',
        genre: 'Sandbox'
    },
    {
        name: 'Overwatch',
        genre: 'Shooter'
    },
    {
        name: 'Elden Ring',
        genre: 'RPG'
    }
];

const GameRow = ({ game, genre }) => {
    return <li className="GameRow">{game} - {genre}</li>
}

const GameList = ({ games }) => {
    const gameSort = games.sort((a, b) => a.name.localeCompare(b.name));

    return <div className="GameList">
        <h3 className="GameList_name">games</h3>

        <ol className="GameList_List">
            {
                games.map(game => <GameRow game={game.name} genre={game.genre}></GameRow>)

            }
        </ol>
    </div>
}

const root = document.getElementById('root');

ReactDOM.render(<GameList games={games} />, root);

