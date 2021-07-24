import React, {useState} from 'react';
import './maze.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { red } from '@material-ui/core/colors';
import { event } from 'jquery';

const width = 30;
const height = 60;


function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

function matchlist(list,target){
    if(! list)return false;
    for(var i=0;i<list.length;i++){
        if(list[i].x == target[0] && list[i].y == target[1]){
            return true;
        }
    }
    return false;
}

function findInList(list,target){
    if(! list)return false;
    for(var i=0;i<list.length;i++){
        if(list[i][0] == target[0] && list[i][1] == target[1]){
            return true;
        }
    }
    return false;
}

function generateInitialGrid(START_X, START_Y, END_X, END_Y,Walls) {
    let temp = [];
    for(let i=0;i<width;i++){
        for(let j=0;j<height;j++){
            if(i === START_X && j === START_Y){
                temp.push({'className':'square','backgroundColor':'green','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})
            }
            else if(i === END_X && j === END_Y){
                temp.push({'className':'square','backgroundColor':'red','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})
            }
            else if(matchlist(Walls,[i,j])){
                temp.push({'className':'square','backgroundColor':'black','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})
            }
            else{
                temp.push({'className':'square','backgroundColor':'LightGray','width':i,'height':j,'animation':'linear','id':`${i}_${j}`})}}
            }
    return temp
}   


function Maze() {

    const [updateStart,setUpdateStart] = useState(false)
    const [updateEnd,setUpdateEnd] = useState(false)
    const [updateWalls,setUpdateWalls] = useState(false)
    const [START_X,setSTART_X] = useState(0)
    const [START_Y,setSTART_Y] = useState(0)
    const [END_X,setEND_X] = useState(20)
    const [END_Y,setEND_Y] = useState(50)
    const [Walls,setWalls] = useState([])
    const [grids,setGrid] = useState(generateInitialGrid(START_X, START_Y, END_X, END_Y,Walls));

    
    document.addEventListener('mousedown', () => {
            let temp = []
            document.onmousemove = (e) => {
                if(updateWalls && !isNaN(parseInt(e.target.id.split('_')[0])) && !isNaN(parseInt(e.target.id.split('_')[1]))){
                    console.log(Walls);
                    temp.push({'x':parseInt(e.target.id.split('_')[0]),'y':parseInt(e.target.id.split('_')[1])});
                    setGrid(generateInitialGrid(START_X, START_Y, END_X,END_Y,Walls.concat(temp)));
                    setWalls(Walls.concat(temp));
                    console.log(Walls);
                };
        };   
    })
    
    document.addEventListener("mouseup",() => {
        document.onmousemove = null;
    })
    
    const _onMouseClick = (e) => {
        if(updateStart){
            console.log(Walls.length)
            setSTART_X(parseInt(e.target.id.split('_')[0]));
            setSTART_Y(parseInt(e.target.id.split('_')[1]));
            setGrid(generateInitialGrid(parseInt(e.target.id.split('_')[0]), parseInt(e.target.id.split('_')[1]), END_X, END_Y,Walls));
            setUpdateStart(false);
            
        }
        if(updateEnd){
            console.log(Walls.length)
            setEND_X(parseInt(e.target.id.split('_')[0]));
            setEND_Y(parseInt(e.target.id.split('_')[1]));
            setGrid(generateInitialGrid(START_X,START_Y,parseInt(e.target.id.split('_')[0]), parseInt(e.target.id.split('_')[1]),Walls));
            setUpdateEnd(false);
            
        }
    }

    const updateStartPos = () => {
        setUpdateWalls(false);
        setUpdateStart(true);
    }

    const updateEndPos = () => {
        setUpdateWalls(false);
        setUpdateEnd(true);
    }

    const addBrick = () => {
        setUpdateWalls(true);
    }

    const updateGrid = async(i,j,color,fill) => {
        await timeout(0.001);
        //document.getElementById(`${i}_${j}`).style.backgroundColor = "blue";
        setGrid(grids => {return grids.map((grid) => {
            if(grid.width === i && grid.height === j && grid.backgroundColor !== 'green' && ! matchlist(Walls,[i,j])){
                grid.backgroundColor = color;
                grid.animation = fill;
            }
            return grid;
        })});
    }
    
    const getDistance = (a,b,c,d) => {return Math.sqrt(Math.pow(Math.abs(a-c),2) + Math.pow(Math.abs(b-d),2))}

    const EuclideanShortestPath = () => {
        let start_x = START_X, start_y = START_Y, end_x = END_X, end_y = END_Y
        while(start_x !== end_x || start_y !== end_y){
            let temp_x = 0, temp_y = 0, score = Number.MAX_VALUE
            if(start_x < 0 || start_x > width || start_y < 0 || start_y > height){return}
            if(start_x+1 < width && getDistance(start_x+1,start_y,end_x,end_y ) < score && ! matchlist(Walls,[start_x+1,start_y])){
                score = getDistance(start_x+1,start_y,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y,'red','fillSquareRejectedPath')
            }
            if(start_x-1 >= 0 && getDistance(start_x-1,start_y,end_x,end_y) < score && ! matchlist(Walls,[start_x-1,start_y])){
                score = getDistance(start_x-1,start_y,end_x,end_y)
                temp_x = start_x-1
                temp_y = start_y
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x-1,start_y,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < height &&getDistance(start_x,start_y+1,end_x,end_y) < score && ! matchlist(Walls,[start_x,start_y+1])){
                score = getDistance(start_x,start_y+1,end_x,end_y)
                temp_x = start_x
                temp_y = start_y+1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x,start_y+1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && getDistance(start_x,start_y-1,end_x,end_y) < score && ! matchlist(Walls,[start_x,start_y-1])){
                score = getDistance(start_x,start_y-1,end_x,end_y)
                temp_x = start_x
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear','fillSquareRejectedPath')
            }
            else{ 
                updateGrid(start_x,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && start_x-1 >= 0 && getDistance(start_x-1,start_y-1,end_x,end_y) < score && ! matchlist(Walls,[start_x-1,start_y-1])){
                score = getDistance(start_x-1,start_y-1,end_x,end_y)
                temp_x = start_x-1
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear','fillSquareRejectedPath')
            }
            else{
                updateGrid(start_x-1,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < height && start_x+1 < width && getDistance(start_x+1,start_y+1,end_x,end_y) < score && ! matchlist(Walls,[start_x+1,start_y+1])){
                score = getDistance(start_x+1,start_y+1,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y+1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y+1,'red','fillSquareRejectedPath')
            }
            if(start_y-1 >= 0 && start_x+1 < width && getDistance(start_x+1,start_y-1,end_x,end_y) < score && ! matchlist(Walls,[start_x+1,start_y-1])){
                score = getDistance(start_x+1,start_y-1,end_x,end_y)
                temp_x = start_x+1
                temp_y = start_y-1
                updateGrid(temp_x,temp_y,'#003399','linear')
            }
            else{
                updateGrid(start_x+1,start_y-1,'red','fillSquareRejectedPath')
            }
            if(start_y+1 < height && start_x-1 >= 0 && getDistance(start_x-1,start_y+1,end_x,end_y) < score && ! matchlist(Walls,[start_x-1,start_y+1])){
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
            console.log(score)
            updateGrid(start_x,start_y,'green','fillSquareMainPath')
            
        }
    };

    const positionIsValid = (pos) => {
        if (pos[0] < 0 || pos[0] > width || pos[1] < 0 || pos[1] > height || matchlist(Walls,[pos[0],pos[1]])){
            return false;
        }
        return true;
    }

    const backTrace = (track,child) => {
        console.log(child)
        updateGrid(parseInt(child[0]),parseInt(child[1]),'green','fillSquareMainPath')
        let keys = Object.keys(track);
        keys.forEach(element => {
            if(findInList(track[element],child)){
                backTrace(track,[element.split(',')[0],element.split(',')[1]])
                return
            } 
        });
        return
    }

    const BFS = () => {
        let startX = START_X, startY = START_Y, endX = END_X, endY = END_Y;
        let queue = [], seen = [], track = {}
        let current = null;

        queue.push([startX,startY]);
        seen.push([startX,startY]);

        while(queue.length > 0){  
            current = queue.shift()
            if(positionIsValid(current)){
                updateGrid(current[0],current[1],'#003399','linear')

                if(current[0] == endX && current[1] == endY){
                    backTrace(track,current);
                    return []
                }
                
                if(positionIsValid([current[0]+1,current[1]]) && ! findInList(seen,[current[0]+1,current[1]]) && ! findInList(queue,[current[0]+1,current[1]])){
                    queue.push([current[0]+1,current[1]]);
                    seen.push([current[0]+1,current[1]]);
                    if(!track[current]){
                        track[current] = []
                    }
                    track[current].push([current[0]+1,current[1]]);
                }
                
                if(positionIsValid([current[0]-1,current[1]]) && ! findInList(seen,[current[0]-1,current[1]]) && ! findInList(queue,[current[0]-1,current[1]])){
                    queue.push([current[0]-1,current[1]]);
                    seen.push([current[0]-1,current[1]]);
                    if(!track[current]){
                        track[current] = []
                    }
                    track[current].push([current[0]-1,current[1]]);
                }
                
                if(positionIsValid([current[0],current[1]+1]) && ! findInList(seen,[current[0],current[1]+1]) && ! findInList(queue,[current[0],current[1]+1])){
                    queue.push([current[0],current[1]+1]);
                    seen.push([current[0],current[1]+1]);
                    if(!track[current]){
                        track[current] = []
                    }
                    track[current].push([current[0],current[1]+1]);
                }
                
                if(positionIsValid([current[0],current[1]-1]) && ! findInList(seen,[current[0],current[1]-1]) && ! findInList(queue,[current[0],current[1]-1])){
                    queue.push([current[0],current[1]-1]);
                    seen.push([current[0],current[1]-1]);
                    if(!track[current]){
                        track[current] = []
                    }
                    track[current].push([current[0],current[1]-1]);
                }
            }
        }
        return []
    }
    
    const clearWalls = () => {
        setWalls([]);
        setGrid(generateInitialGrid(START_X, START_Y, END_X,END_Y,[]));
    }
    
    return (
            <div className = 'maze' onClick={_onMouseClick}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-text">
            Searching path visulization 
            </span>
            <div className='width'></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <button type="button" className="btn btn-outline-success btn-sm mr-2" onClick={updateStartPos}>Change Start</button>
            </li>
            <li className="nav-item active">
            <button type="button" className="btn btn-outline-danger btn-sm mr-2" onClick={updateEndPos}>Change Stop</button>
            </li>
            <li className="nav-item active">
            <button type="button" className="btn btn-outline-warning btn-sm mr-2" onClick={addBrick}>Add bricks</button>
            </li>
            <li className="nav-item active">
            <button type="button" className="btn btn-dark btn-sm mr-2" id='button' onClick={EuclideanShortestPath}>Euclidean distance</button>
            </li>
            <li className="nav-item active">
            <button type="button" className="btn btn-dark btn-sm mr-2" id='button' onClick={BFS}>BFS</button>
            </li>
            <li className="nav-item active">
            <button type="button" className="btn btn-info btn-sm mr-2" onClick={clearWalls}>Clear Walls</button>
            </li>
            </ul>
            </div>
            </nav>
            <div className='grid'>
            {grids.map((grid) => (
            <div className={grid.className} id={grid.id}  style={{backgroundColor: `${grid.backgroundColor}`, '--x' : `${20*(grid.height+1)}px`,'--y': `${20*(grid.width+1)}px`, 'animation':`${grid.animation}  5s linear`}}></div>
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




