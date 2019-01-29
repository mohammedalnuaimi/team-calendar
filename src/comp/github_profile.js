const Card = (props) => {
    return (
        <div style= {{margin: '1me'}}>
            <img width= "75" src={props.avatar} />
            <div> 
                <div>{props.name}</div>
                <div> Mew </div>
             </div>
      	</div>
    );
};


let data = [{
avatar: "https://avatars0.githubusercontent.com/u/1?v=4",
name:"someomeelse",
company: "DAZN"
},
{
avatar: "https://avatars0.githubusercontent.com/u/2?v=4",
name:"someone",
company: "Googlw"
}
]

const CardList = (props) => {
    return (
      <div>
         {props.cards.map(card => <Card {...card} /> )}
      </div>
    );
}

ReactDOM.render(<CardList cards={props.data}/>, mountNode);