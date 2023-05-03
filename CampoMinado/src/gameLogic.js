const createBoard  = (rows,columns) =>{
    return Array(rows).fill(0).map((_,row) => { // aula 74
        return Array(columns).fill(0).map(((_,column) =>{
            return {
                row,
                column,
                opend: false,
                flagged:false,
                mined: false,
                exploded: false,
                nearMines:0
            }
        }))
    }) 
}

const spredMines = (board,minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted= 0;

    while(minesPlanted < minesAmount){
        const rowSel = parseInt(Math.random()*rows,10)
        const columSel = parseInt(Math.random()*columns,10)
        
        if(!board[rowSel][columSel].mined ){
            board[rowSel][columSel] = true
            minesPlanted++
        }
    }
}

const createMineBoard = (rows,columns,minesAmount) =>{
    const board = createBoard(rows,columns)
    spredMines(board,minesAmount)
    return board
}

const cloneBoard = board =>{
    return board.map(rows.map(filed => {
        return {...filed}
    }))
}

const getNeighbors = (board,row,column) =>{
    const neighbors = []
    const rows = [row -1,row,row+1]
    const columns = [column -1,column,column+1]
    rows.forEach(c=>{
        const diferent = r !== row || c !==column
        const validRow = r>= 0 && r < board.length
        const validColumn = c>=0 && c< board[0].length

        if(diferent && validRow && validColumn){
            neighbors.push(board[r][c])
        }   
    })

    return neighbors
}

const safeNeighborhood = (board,row,column) =>{
    const safes = (result,neightbor) => result && !neightbor.mined
    return getNeighbors(board,row,column).reduce(safes,true)
}

const openField = (board,row,column) =>{
    const field = board[row][column]

    if(!field.opened){
        field.opend = true
        if(field.mined){
            field.exploded = true
        }else if(safeNeighborhood(board,row,column)){
            getNeighbors(board,row,column).forEach(n => openField(board,n.row,n,column))
        }else{
            const neighbors = getNeighbors(board,row,column)
            field.nearMines = neighbors.filter(n =>n.mined).length
        }
    }
}

const fields = board =>[].concat(...board)
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0 
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opned)
const wonGame = board => fields(board).filter(pendding).length === 0 

const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)
export {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines
}