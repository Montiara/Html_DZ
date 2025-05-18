const getElement = (selector) => {
    return document.querySelector(selector);
}

//const startGame = () => {
//    console.log("Start");
//}

//const stopGame = () => {
//    console.log("Stop");
//}

//const switchPlayer = (firstPlayer = true) => {
//    console.log("Player switched");
//}

function name(params) {
    
}

class Cell {
    element = null;
    className = 'tic-tac-toe__cell';
    activeClassName = 'tic-tac-toe__cell--empty';
    handler = null;
    handlerContext = null;
    handlerArgs = [];
    click = console.log.bind(this);

    constructor() {
        this.click = this.click.bind(this);
    }

    _click() {
        if (this.handler === null) return;
        if (this.handlerContext === null) this.handler(...this.handlerArgs);
        else this.handler.call(this.handlerContext, ...this.handlerArgs)
    }

    setHandler(newHandler, context, ...args) {
        if (typeof newHandler !== 'function') return;
        this.handler = newHandler;
        if (typeof context === 'object') this.handlerContext = context;
        else this.handlerContext = null;
        this.handlerArgs = args;
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add(this.className);
    }

    activate() {
        if (this.element === null) return;
        console.dir(classList);
        this.element.addEventListener('click', this.click)
        //добавить слушатель клика
        if (this.element.classList.contain(this.activeClassName)) return;
        this.element.classList.add(this.activeClassName);
    }

    deactivate() {
        if (this.element === null) return;
        if (!this.element.classList.contain(this.activeClassName)) return;
        this.element.classList.add(this.activeClassName);
        this.element.removeEventListener('click', this.click)
        //удалить слушатель клика
        this.element.classList.remove(this.activeClassName);
    }

    fill(content) {
        if (this.element === null) return;
        if (typeof content !== 'string') return;
        this.element.innerHTML = content;
    }
    
    free() {
        if (this.element === null) return;
        if (typeof content !== 'string') return;
        this.element.innerHTML = '';
    }

    publish() {
        if (this.element === null) return;
        if (container instanceof HTMLelement) {
            container.append(this.element);
        }

    }

    unpublish() {
        if (this.element instanceof HTMLElement)
            this.element.remove()
    }

    removeWinClass() {

    }

    addWinClass() {
        
    }
}

const cell = new Cell();
cell.create();
cell.activate();
cell.publish(getElement('#tic-tac-toe__field'));
cell.setHandler()

//cell = {
//    element: DOMElement
//}

class Field {
    containerEl = getElement("#tic-tac-toe_field")
    cells = [[],[],[]]

    constructor(handler,context, ...args) {
        this.cells.forEach((line) => {
            for (let i=0;i<3;++i){
                const Cell = new Cell(... args)
                cell.create()
                cell.publish(this.containerEl)
                cell.setHandler(handler,context, ...args)
                cell.activate
                line.push(cell)
            }
        })
    }

    get size() {
        return this.cells.length
    }

    deactivate() {
        this.cells.forEach((line) => {
            line.forEach((cell) => {
                if (cell instanceof Cell) cell.deactivate()
            })
        })
    }

    setListernes() {
        console.log("Listerners");
    }
    fill() {
        console.log("fill");
    }
    reset() {
        console.log("reset");
    }

    clear(){
        this.cellls.forEach((cell) =>{
            cell.free()
            cell.removeWinClass()
            cell.unpublish()
        })
    }
}

//const Field = new Field(console.log,null,'hello in cell')

class Game {
    containerEl = getElement("#tic-tac-toe")
    buttonEl = getElement("#tic-tac-toe_btn")
    isActive = false
    Field = null
    winCombination = []
    activePlayerId = -1
    players = [
    {
        name: "Cross",
        filled: [],
        img: '<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-467.000000, -1039.000000)" fill="#000000"> <path d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>'
    },
    {
        name: "Circle",
        filled: [],
        img: '<svg fill="#000000" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-448" y="-320" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <path d="M32.142,56.043c6.179,-0.06 12.297,-2.62 16.696,-6.967c5.225,-5.163 7.916,-12.803 6.978,-20.096c-1.609,-12.499 -11.883,-20.98 -23.828,-20.98c-9.075,0 -17.896,5.677 -21.765,13.909c-2.961,6.303 -2.967,13.911 0,20.225c3.842,8.174 12.517,13.821 21.61,13.909c0.103,0 0.206,0 0.309,0Zm-0.283,-4.004c-9.23,-0.089 -17.841,-7.227 -19.553,-16.378c-1.208,-6.452 1.071,-13.433 5.818,-18.015c5.543,-5.35 14.253,-7.142 21.496,-4.11c6.481,2.714 11.331,9.014 12.225,15.955c0.766,5.949 -1.369,12.185 -5.565,16.48c-3.68,3.767 -8.841,6.017 -14.164,6.068c-0.085,0 -0.171,0 -0.257,0Z" style="fill-rule:nonzero;"></path> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>'
    }
    ]

    constructor() {
        this.Field = new Field(this.turn, this)
        this.player.switchPlayer
    }

    get activePlayer(){
        return this.activePlayerId !== -1
    }

    startGame() {
        console.log("Start");
        if (this.field instanceof Field) this.field.clear
        console.log(this);
    }
    stopGame() {
        console.log("Stop");
    }
    switchPlayer(firstPlayer = true) {
        console.log("Player switched");
        this.activePlayer = (this.activePlayerId + 1) % this.players.length
    }
    updateWithCombination() {
        this.winCombination = [[],[],[],[],[]]

        this.field.cells.forEach((line,lineId) => {
            this.winCombination[0] = line[0]
            this.winCombination[1] = line[1]
            this.winCombination[2] = line[2]
            this.winCombination[3] = line[lineId]
            this.winCombination[4] = line[line.length - lineId - 1]
        })

        this.winCombination = [
            ...this.winCombination,
            ...this.field.cells
        ]
    }
    isActivePlayerWinner() {
        if (this.activePlayer.filled.length < this.filled.size) return false
        let isWinner = false
        this.winCombination.forEach((combination) => {
            combination.forEach((cell) => {
                if (this.activePlayer.filled.includes(cell)) ++matches
                else return
            })
            if (matches === combination.length) {
                isWinner = true
                return
            }
        })
        return isWinner
    }
    turn(cell) {
        cell.fill(this.activePlayer)
    }
}

const Game = new Game()

Game.startGame;

//bruh

//utils

const setListernes = () => {

}