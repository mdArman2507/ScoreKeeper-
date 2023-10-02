var score=0;
var wicket=0;
let hit=0;
let ballWiseRes=[];
let inputRef=React.createRef();


function addScore(num){
    hit=num;
    renderRoot();
}
function wicketDown(){
    hit="Out";
    renderRoot();
}

function handleSubmit(event){
    event.preventDefault();
    
    if(hit=="Out"){
        wicket+=1;
    }
    else
    {
        score+=hit;
    }
    ballWiseRes.unshift(
        <span>{`${hit==0?".":hit},${inputRef.current.value}`}</span>
    );
    hit=0;
    inputRef.current.value="";
    renderRoot();

}

const Form=()=>(
    <form onSubmit={handleSubmit}>
        <input value={hit}/>
        <input placeholder="Add a comment" ref={inputRef}/>
        <button>Submit</button>
    </form>
)

const ScoreButtons=()=>(
    <div>
        <button onClick={()=>addScore(0)}>0</button>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={wicketDown}>wicket</button>
    </div>
)

const App=()=>(
    <>
    <h1>SCORE KEEPER APP</h1>
    <h2>Score {score} / {wicket}</h2>
    <ScoreButtons/>
    <br/> <br/>
    <Form/>
    <hr/>
    <div>
        {ballWiseRes.map((res,index)=>(
            <p key={index+1}>
                {res}
            </p>
        ))}
    </div>
    </>
)
const rootElement=ReactDOM.createRoot(document.getElementById("root"));
function renderRoot(){
    rootElement.render(<App/>);
}

renderRoot();