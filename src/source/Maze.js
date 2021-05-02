import React, {useState} from 'react';
import './maze.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

function generateInitialGrid(START_X, START_Y, END_X, END_Y) {
    let temp = [];
    let height=60,width=30;
    for(let i=0;i<width;i++){
        for(let j=0;j<height;j++){
            if(i === START_X && j === START_Y){temp.push({'className':'square','backgroundColor':'green','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})}
            else if(i === END_X && j === END_Y){temp.push({'className':'square','backgroundColor':'red','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})}
            else{temp.push({'className':'square','backgroundColor':'LightGray','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})}}}
    return temp
    }   


function Maze() {

    const [updateStart,setUpdateStart] = useState(false)
    const [updateEnd,setUpdateEnd] = useState(false)
    const [START_X,setSTART_X] = useState(0)
    const [START_Y,setSTART_Y] = useState(0)
    const [END_X,setEND_X] = useState(20)
    const [END_Y,setEND_Y] = useState(50)
    const [grids,setGrid] = useState(generateInitialGrid(START_X, START_Y, END_X, END_Y));
    
    
    const _onMouseClick = (e) => {
        console.log(updateStart,updateEnd)
        console.log(e.target.id.split('_')[0],e.target.id.split('_')[1])
        if(updateStart){
            setSTART_X(parseInt(e.target.id.split('_')[0]));
            setSTART_Y(parseInt(e.target.id.split('_')[1]));
            setGrid(generateInitialGrid(parseInt(e.target.id.split('_')[0]), parseInt(e.target.id.split('_')[1]), END_X, END_Y));
            setUpdateStart(false);
        }
        if(updateEnd){
            setEND_X(parseInt(e.target.id.split('_')[0]));
            setEND_Y(parseInt(e.target.id.split('_')[1]));
            setGrid(generateInitialGrid(START_X, START_Y, parseInt(e.target.id.split('_')[0]), parseInt(e.target.id.split('_')[1])));
            setUpdateEnd(false);
        }
    }

    const updateStartPos = () => {setUpdateStart(true);}

    const updateEndPos = () => {setUpdateEnd(true);}

    const updateGrid = async(i,j,color,fill) => {
        await timeout(0.001);
        setGrid(grids => {return grids.map((grid) => {
            if(grid.width === i && grid.height === j && grid.backgroundColor != 'green'){
                grid.backgroundColor = color;
                grid.animation = fill;
            }
            return grid;
        })});}
    
    const getDistance = (a,b,c,d) => {return Math.sqrt(Math.pow(Math.abs(a-c),2) + Math.pow(Math.abs(b-d),2))}

    const EuclideanShortestPath = () => {
        let start_x = START_X, start_y = START_Y, end_x = END_X, end_y = END_Y
        let score = Number.MAX_VALUE
        while(start_x != end_x || start_y != end_y){
            let temp_x = 0, temp_y = 0
            if(start_x < 0 || start_x > 30 || start_y < 0 || start_y > 60){return}
            if(getDistance(start_x,start_y,end_x,end_y) < score){
                score = getDistance(start_x,start_y,end_x,end_y)
                temp_x = start_x
                temp_y = start_y
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x,start_y,'red','fillSquareRejectedPath')
            }
            if(start_x+1 < 30 && getDistance(start_x+1,start_y,end_x,end_y) < score){
                score = getDistance(start_x+1,start_y,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y,'red','fillSquareRejectedPath')
            }
            if(start_x-1 >= 0 && getDistance(start_x-1,start_y,end_x,end_y) < score){
                score = getDistance(start_x-1,start_y,end_x,end_y)
                temp_x = start_x-1
                temp_y = start_y
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x-1,start_y,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < 60 &&getDistance(start_x,start_y+1,end_x,end_y) < score){
                score = getDistance(start_x,start_y+1,end_x,end_y)
                temp_x = start_x
                temp_y = start_y+1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x,start_y+1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && getDistance(start_x,start_y-1,end_x,end_y) < score){
                score = getDistance(start_x,start_y-1,end_x,end_y)
                temp_x = start_x
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear','fillSquareRejectedPath')
            }
            else{ 
                updateGrid(start_x,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && start_x-1 >= 0 && getDistance(start_x-1,start_y-1,end_x,end_y) < score){
                score = getDistance(start_x-1,start_y-1,end_x,end_y)
                temp_x = start_x-1
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear','fillSquareRejectedPath')
            }
            else{
                updateGrid(start_x-1,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < 60 && start_x+1 < 30 && getDistance(start_x+1,start_y+1,end_x,end_y) < score){
                score = getDistance(start_x+1,start_y+1,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y+1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y+1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && start_x+1 < 30 && getDistance(start_x+1,start_y-1,end_x,end_y) < score){
                score = getDistance(start_x+1,start_y-1,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < 60 && start_x-1 >= 0 && getDistance(start_x-1,start_y+1,end_x,end_y) < score){
                score = getDistance(start_x-1,start_y+1,end_x,end_y)
                temp_x = start_x-1
                temp_y = start_y+1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x-1,start_y+1,'red','fillSquareRejectedPath')
            }
            start_x = temp_x
            start_y = temp_y
            updateGrid(start_x,start_y,'green','fillSquareMainPath')
            
        }
    };
    
    return (
            <div className = 'maze' onClick={_onMouseClick}>
            <nav class="navbar navbar-light bg-light">
            <span class="navbar-text">
                Euclidean shortest path visulization
            </span>
            <button type="button" className="btn btn-outline-success btn-sm" onClick={updateStartPos}>Change Start</button>
            <button type="button" className="btn btn-outline-warning btn-sm" onClick={updateEndPos}>Change Stop</button>
            <button type="button" className="btn btn-outline-dark" id='button' onClick={EuclideanShortestPath}>Find the shortest path</button>
            </nav>
            <div className='grid'>
            {grids.map((grid) => (
            <div className={grid.className} id={grid.id}  style={{backgroundColor: `${grid.backgroundColor}`, '--x' : `${22*(grid.height+1)}px`,'--y': `${22*(grid.width+1)}px`, 'animation':`${grid.animation}  5s linear`}}></div>
            ))}
            </div>
            <div className='footer'>
            <span class="navbar-text">
                Created By : Rishabh Sinha
            </span>
            <LinkedInIcon className='icon' onClick={() => window.open('https://www.linkedin.com/in/rishabh-sinha-99a706164/')}/>
            <InstagramIcon className='icon' onClick={() => window.open('https://www.instagram.com/rishabh_s1nha/')}/>
            <GitHubIcon className='icon' onClick={() => window.open('https://github.com/RishabhSinha07')}/>
            </div>
            </div>
            
    );
}


export default Maze;

