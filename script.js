const main = document.querySelector(".main")
let lvl = document.querySelector(".spanLvl")
let score = document.querySelector(".scor")
let scor = 0
let lvl1
let speed = 1000
const nextEl = document.querySelector(".nextelement")
const colors = ["yellow","lightblue","purple","red","blue","orange"]
let color = colors[getRandomNumber(0,4)]
let tableForNextEl = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

let table =[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
tableBoxs()
function tableBoxsForNextEl(){
    let tableInnerBoxs = ""
    for(let y = 0;y<tableForNextEl.length;y++){
        for(let x = 0;x<tableForNextEl[y].length;x++){
            if(tableForNextEl[y][x] === 1){
                tableInnerBoxs += '<div class="nextactiv"></div>'
            }else{
                tableInnerBoxs += '<div class="nextBox"></div>'
            }
        }
    }
    nextEl.innerHTML = tableInnerBoxs
}
tableBoxsForNextEl()
//table
function tableBoxs(){
    let tableInnerBoxs = ""
    for(let y = 0;y<table.length;y++){
        for(let x = 0;x<table[y].length;x++){
            if(table[y][x] === 1){
                tableInnerBoxs += '<div class="box activ"></div>'
            }else if(table[y][x] === 2){
                tableInnerBoxs += '<div class="box fixed"></div>'
            }else{
                tableInnerBoxs += '<div class="box"></div>'
            }  
        }
    }
    main.innerHTML = tableInnerBoxs
    let activeColor = document.querySelectorAll(".activ")
    for(el of activeColor){
        el.style.backgroundColor = color
    }
}
//move down
function moveDown(){
    if(ifElCanMoveDown()){
        for(let y = table.length -1;y>= 0;y--){
            for(let x = 0;x<table[y].length;x++){
                if(table[y][x] === 1){
                    table[y+1][x] = 1
                    table[y][x] = 0
                }
            }
        }
    }else{
        fixed()
    }
}
//fixed
function fixed(){
    for(let y = 0;y<table.length;y++){
        for(let x = 0;x<table[y].length;x++){
            if(table[y][x] === 1){
                table[y][x] =2
            }
        }
        if(table[y][0] === 2 && table[y][1] === 2 && table[y][2] === 2 &&table[y][3] === 2 &&table[y][4] === 2 &&table[y][5] === 2 &&table[y][6] === 2 &&table[y][7] === 2 &&table[y][8] === 2 &&table[y][9] === 2){
            scor += 10
            lvl1 = Math.round(scor/100)
            lvl.textContent = lvl1
            if(lvl1 === 1){
                clearInterval(int)
                speed = 700
                int = setInterval(start,speed)
            }
            if(lvl1 === 2){
                clearInterval(int)
                speed = 500
                int = setInterval(start,speed)
            }
            score.textContent = scor
            for(let i = y;y > 0;y--){
                table[y] = table[y-1]
            }
            tableBoxs()
        }
    }

    for(let i = 2;i<table[0].length-2;i++){
        if(table[0][i] === 2){
            table =[
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
            ]
            scor = 0
            score.textContent = scor
            lvl1 = 0
            lvl.textContent = lvl1
            alert("Game over")
            clearInterval(int)
            speed = 1000
            int = setInterval(start,speed)
        }
    }
    color = colors[getRandomNumber(0,5)]
    activElement = arrForElements[randomForNext]
    randomForNext = getRandomNumber(0,6)
    nextElBox = arrForNextElements[randomForNext]()
    tableBoxsForNextEl()
    activElement()
}

let arrForNextElements = [
    function cube(){
        tableForNextEl[0] = [0,1,1,0]
        tableForNextEl[1] = [0,1,1,0]
    },
    function line(){
        tableForNextEl[0] = [1,1,1,1]
        tableForNextEl[1] = [0,0,0,0]
    },
    function t(){
        tableForNextEl[0] = [0,1,0,0]
        tableForNextEl[1] = [1,1,1,0]
    },
    function L(){
        tableForNextEl[0] = [0,1,0,0]
        tableForNextEl[1] = [0,1,1,1]
    },
    function z(){
        tableForNextEl[0] = [1,1,0,0]
        tableForNextEl[1] = [0,1,1,0]
    },
    function z1(){
        tableForNextEl[0] = [0,1,1,0]
        tableForNextEl[1] = [1,1,0,0]
    },
    function L1(){
        tableForNextEl[0] = [0,0,0,1]
        tableForNextEl[1] = [0,1,1,1]
    }
]

let arrForElements = [
    function cube(){
        table[0] = [0,0,0,0,1,1,0,0,0,0]
        table[1] = [0,0,0,0,1,1,0,0,0,0]
    },
    function line(){
        table[0] = [0,0,0,1,1,1,1,0,0,0]
    },
    function t(){
        table[0] = [0,0,0,0,1,0,0,0,0,0]
        table[1] = [0,0,0,1,1,1,0,0,0,0]
    },
    function L(){
        table[0] = [0,0,0,1,0,0,0,0,0,0]
        table[1] = [0,0,0,1,1,1,0,0,0,0]
    },
    function z(){
        table[0] = [0,0,0,1,1,0,0,0,0,0]
        table[1] = [0,0,0,0,1,1,0,0,0,0]
    },
    function z1(){
        table[0] = [0,0,0,0,1,1,0,0,0,0]
        table[1] = [0,0,0,1,1,0,0,0,0,0]
    },
    function L1(){
        table[0] = [0,0,0,0,0,1,0,0,0,0]
        table[1] = [0,0,0,1,1,1,0,0,0,0]
    }
]



function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }
//can El Move Down?
function ifElCanMoveDown(){
    for(let y = 0;y<table.length;y++){
        for(let x = 0;x<table[y].length;x++){
            if(table[y][x] === 1){
                if(y === table.length - 1 || table[y + 1][x] === 2){
                    return false
                }
            }
        }
    }
    return true
}
//keybord
document.onkeydown = function(element){
    if(element.keyCode === 37){
        moveLeft()
    }else if(element.keyCode === 39){
        moveRigth()
    }else if(element.keyCode === 40){
        moveDown()
    }else if(element.keyCode === 38){
        let t1 = "t1"
        let t2 = "t2"
        let t3 = "t3"
        let line1 = "line1"
        let TS = "TS"
        let ZS = "ZS"
        let J = "J"
        let J1 = "J1"
        let J2 = "j2"
        let L2 = "L2"
        let L3 = "L3"
        let L4 = "L4"
        if(activElement === arrForElements[2]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y === 0){
                            table[y][x] = 0
                            table[y + 1][x - 1] = 0
                            table[y][x + 1] = 1
                            table[y + 2][x + 1] = 1
                            tableBoxs()
                            activElement = t1
                            z = 5
                            break
                        }
                        if(table[y][x+1] !== 2 && table[y - 1][x+1] !== 2){
                            table[y][x +1] = 1
                            table[y - 1][x +1] = 1
                            table[y + 1][x] = 0
                            table[y + 1][x - 1] = 0
                            tableBoxs()
                            activElement = t1
                            z = 5
                            break
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === t1){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(x === 1){
                            table[y][x - 1] = 1
                            table[y][x + 1] = 1
                            table[y + 1][x - 1] = 0
                            table[y + 2][x] = 0
                            activElement = t2
                            z = 5
                            break
                        }
                        if(table[y][x-1] !==2 && table[y][x-2] !== 2){
                            table[y][x - 2] = 1
                            table[y][x - 1] = 1
                            table[y + 1][x - 1] = 1
                            table[y + 2][x] = 0
                            table[y + 1][x] = 0
                            tableBoxs()
                            activElement = t2
                            z = 5
                            break
                        }
                            z = 5
                            break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === t2){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y === 18 && table[y+1][x] !== 2){
                            table[y - 1][x] = 1
                            table[y + 1][x] = 1
                            table[y][x + 2] = 0
                            table[y + 1][x + 1] = 0
                        tableBoxs()
                        activElement = t3
                        z = 5
                        break
                        }
                        if(table[y+1][x] !== 2 && table[y+2][x] !==2){
                            table[y][x + 1] = 0
                            table[y][x + 2] = 0
                            table[y + 1][x] = 1
                            table[y + 2][x] = 1
                            tableBoxs()
                            activElement = t3
                            z = 5
                            break
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === t3){
                let z = 0
                for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(x === 8 && table[y + 2][x+1] !== 2){
                        table[y + 2][x] = 0
                        table[y + 1][x - 1] = 1
                        tableBoxs()
                        activElement = arrForElements[2]
                        z = 5
                        break  
                        }
                        if(table[y + 2][x+1] !== 2 && table[y+2][x+2] !== 2){
                            table[y][x] = 0
                            table[y + 1][x] = 0
                            table[y + 2][x + 1] = 1
                            table[y + 2][x + 2] = 1
                            tableBoxs()
                            activElement = arrForElements[2]
                            z = 5
                            break
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === arrForElements[1]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y === 19 && table[y-1][x] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y-2][x] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-3][x] === 0 && table[y-3][x+1] === 0 && table[y-3][x+2] === 0 || 
                            table[y+1][x] ===  2 && table[y-1][x] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y-2][x] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-3][x] === 0 && table[y-3][x+1] === 0 && table[y-3][x+2] === 0 || 
                            table[y+1][x+1] === 2 && table[y-1][x] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y-2][x] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-3][x] === 0 && table[y-3][x+1] === 0 && table[y-3][x+2] === 0 ||
                            table[y+1][x+2] === 2 && table[y-1][x] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y-2][x] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-3][x] === 0 && table[y-3][x+1] === 0 && table[y-3][x+2] === 0
                            
                            ){
                            table[y][x] = 0
                            table[y][x+1] = 0
                            table[y][x+3] = 0
                            table[y-1][x+2] = 1
                            table[y-2][x+2] = 1
                            table[y-3][x+2] = 1
                            tableBoxs()
                            activElement = line1
                            z = 5
                        }else if(y === 18 && table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y-1][x] === 0 && table[y-1][x+1] === 0 &&  table[y-1][x+2] === 0 && table[y-1][x+3] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-2][x+3] === 0 ||
                            table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+2] === 2 && table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y-1][x] === 0 && table[y-1][x+1] === 0 &&  table[y-1][x+2] === 0 && table[y-1][x+3] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-2][x+3] === 0 ||
                            table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+1] === 2 && table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y-1][x] === 0 && table[y-1][x+1] === 0 &&  table[y-1][x+2] === 0 && table[y-1][x+3] === 0 && table[y-2][x+1] === 0 && table[y-2][x+2] === 0 && table[y-2][x+3] === 0
                        ){
                            table[y][x] = 0
                            table[y][x+1] = 0
                            table[y][x+3] = 0
                            table[y+1][x+2] = 1
                            table[y-1][x+2] = 1
                            table[y-2][x+2] = 1
                            tableBoxs()
                            activElement = line1
                            z = 5
                            break
                        }else if(table[y-1][x + 3] === 0 && table[y-1][x+2] === 0 && table[y+1][x] === 0 && table[y+2][x] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+2] === 0){
                            table[y][x] = 0
                            table[y][x+1] = 0
                            table[y][x+3] = 0
                            table[y-1][x+2] = 1
                            table[y+1][x+2] = 1
                            table[y+2][x+2] = 1
                            tableBoxs()
                            activElement = line1
                            z = 5
                            break
                        }
                         z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === line1){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y +1][x-1] === 0 && table[y +1][x+1] === 0 && table[y +1][x + 2] === 0 && table[y + 2][x+1] === 0 && table[y + 2][x+2] === 0 && table[y + 3][x+1] === 0 && table[y + 3][x + 2] === 0){
                            table[y][x] = 0
                            table[y+1][x+1] = 1
                            table[y +1][x+2] = 1
                            table[y +1][x-1] = 1
                            table[y+2][x] = 0
                            table[y+3][x] = 0
                            tableBoxs()
                            activElement = arrForElements[1]
                            z = 5
                            break
                        }else if(x === 0 && table[y +1][x+1] === 0 && table[y + 1][x + 2] === 0 && table[y +1][x + 3] === 0 && table[y + 2][x +1 ] === 0 && table[y + 2][x + 2] === 0 && table[y + 2][x + 3] === 0 && table[y + 3][x +1 ] === 0 && table[y + 3][x + 2] === 0 && table[y + 3][x + 3] === 0 ||
                             table[y][x-1] === 2 && table[y +1][x+1] === 0 && table[y + 1][x + 2] === 0 && table[y +1][x + 3] === 0 && table[y + 2][x +1 ] === 0 && table[y + 2][x + 2] === 0 && table[y + 2][x + 3] === 0 && table[y + 3][x +1 ] === 0 && table[y + 3][x + 2] === 0 && table[y + 3][x + 3] === 0 ||
                             table[y + 1][x-1]=== 2 && table[y +1][x+1] === 0 && table[y + 1][x + 2] === 0 && table[y +1][x + 3] === 0 && table[y + 2][x +1 ] === 0 && table[y + 2][x + 2] === 0 && table[y + 2][x + 3] === 0 && table[y + 3][x +1 ] === 0 && table[y + 3][x + 2] === 0 && table[y + 3][x + 3] === 0
                             ){
                            table[y][x] = 0
                            table[y+1][x+1] = 1
                            table[y +1][x+2] = 1
                            table[y +1][x+3] = 1
                            table[y+2][x] = 0
                            table[y+3][x] = 0
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[1]
                            z = 5
                            break
                        }else if(x === 8 && table[y + 1][x +1]=== 0 && table[y + 2][x +1]=== 0 && table[y + 3][x +1]=== 0 && table[y + 1][x  -1]=== 0 && table[y + 1][x - 2]=== 0 && table[y][x - 1]=== 0 ||
                                table[y+3][x+1] === 0 && table[y + 3][x + 2]=== 2 && table[y + 1][x +1]=== 0 && table[y + 2][x +1]=== 0 && table[y + 3][x +1]=== 0 && table[y + 1][x  -1]=== 0 && table[y + 1][x - 2]=== 0 && table[y][x - 1]=== 0 ||
                                table[y+2][x+1] === 0 && table[y + 2][x + 2]=== 2 && table[y + 1][x +1]=== 0 && table[y + 2][x +1]=== 0 && table[y + 3][x +1]=== 0 && table[y + 1][x  -1]=== 0 && table[y + 1][x - 2]=== 0 && table[y][x - 1]=== 0 ||
                                table[y+1][x+1] === 0 && table[y + 3][x + 2]=== 2 && table[y + 1][x +1]=== 0 && table[y + 2][x +1]=== 0 && table[y + 3][x +1]=== 0 && table[y + 1][x  -1]=== 0 && table[y + 1][x - 2]=== 0 && table[y][x - 1]=== 0 ||
                                table[y][x + 1] === 0 && table[y][x + 2]=== 2 && table[y + 1][x +1]=== 0 && table[y + 2][x +1]=== 0 && table[y + 3][x +1]=== 0 && table[y + 1][x  -1]=== 0 && table[y + 1][x - 2]=== 0 && table[y][x - 1]=== 0
                            ){
                            table[y][x] = 0
                            table[y +1][x+1] = 1
                            table[y +1][x-2] = 1
                            table[y +1][x-1] = 1
                            table[y+2][x] = 0
                            table[y+3][x] = 0
                            tableBoxs()
                            activElement = arrForElements[1]
                            z = 5
                        }else if(x === 9 && table[y][x - 1] === 0 && table[y][x - 2] === 0 && table[y][x - 3] === 0 && table[y + 1][x - 1] === 0 && table[y+1][x - 2] === 0 && table[y + 1][x - 3] === 0 && table[y+2][x - 1] === 0 && table[y+2][x - 2] === 0 && table[y+2][x - 3] === 0 ||
                            table[y + 3][x + 1] === 2 && table[y][x - 1] === 0 && table[y][x - 2] === 0 && table[y][x - 3] === 0 && table[y + 1][x - 1] === 0 && table[y+1][x - 2] === 0 && table[y + 1][x - 3] === 0 && table[y+2][x - 1] === 0 && table[y+2][x - 2] === 0 && table[y+2][x - 3] === 0 ||
                            table[y + 2][x + 1] === 2 && table[y][x - 1] === 0 && table[y][x - 2] === 0 && table[y][x - 3] === 0 && table[y + 1][x - 1] === 0 && table[y+1][x - 2] === 0 && table[y + 1][x - 3] === 0 && table[y+2][x - 1] === 0 && table[y+2][x - 2] === 0 && table[y+2][x - 3] === 0 ||
                            table[y + 1][x + 1] === 2 && table[y][x - 1] === 0 && table[y][x - 2] === 0 && table[y][x - 3] === 0 && table[y + 1][x - 1] === 0 && table[y+1][x - 2] === 0 && table[y + 1][x - 3] === 0 && table[y+2][x - 1] === 0 && table[y+2][x - 2] === 0 && table[y+2][x - 3] === 0 ||
                            table[y][x + 1] === 2 && table[y][x - 1] === 0 && table[y][x - 2] === 0 && table[y][x - 3] === 0 && table[y + 1][x - 1] === 0 && table[y+1][x - 2] === 0 && table[y + 1][x - 3] === 0 && table[y+2][x - 1] === 0 && table[y+2][x - 2] === 0 && table[y+2][x - 3] === 0
                            ){
                             // clearInterval(int)
                             table[y][x] = 0
                             table[y +1][x] = 0
                             table[y +3][x] = 0
                             table[y +2][x-1] = 1
                             table[y+2][x -2] = 1
                             table[y+2][x -3] = 1
                             tableBoxs()
                             // int = setInterval(start,1000)
                             activElement = arrForElements[1]
                             z = 5
                        }
                         z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
            
        }else if(activElement === arrForElements[5]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if( y === 0 && table[y][x -1] === 0 && table[y + 1][x+1] === 0 && table[y + 2][x] === 0 ||
                            table[y-1][x] === 2 && table[y][x -1] === 0 && table[y + 1][x+1] === 0 && table[y + 2][x] === 0
                            ){
                        // clearInterval(int)
                        table[y][x-1] = 1
                        table[y][x +1] = 0
                        table[y][x] = 0
                        table[y+2][x] = 1
                        tableBoxs()
                        // int = setInterval(start,1000)
                        activElement = TS
                        z = 5 
                        break
                        }else if(y !== 18 &&table[y - 1][x] === 0 && table[y -1][x+1] === 0 && table[y +2][x-1] === 0 && table[y +2][x] === 0 && table[y+1][x+1] === 0){
                            // clearInterval(int)
                            table[y -1][x] = 1
                            table[y-1][x-1] = 0
                            table[y+1][x] = 0
                            table[y+1][x-1] = 0
                            table[y+1][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = TS
                            z = 5
                            break                         
                        }else if(y === 18 && table[y - 1][x] === 0 && table[y - 1][x +1] === 0 && table[y + 1][x + 1] === 0){
                            table[y -1][x] = 1
                            table[y+1][x+1] = 1
                            table[y+1][x] = 0
                            table[y+1][x-1] = 0
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = TS
                            z = 5
                            break 
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === TS){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y][x-1] === 0 && table[y + 1][x -1] === 0 && table[y+2 ][x] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+2][x +1] = 0
                            table[y+2][x] = 1
                            table[y+2][x-1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[5]
                            z = 5
                            break
                        }else if(table[y][x-1] === 2 && table[y + 2][x] === 0 &&  table[y+1][x+2] === 0 && table[y +2][x+1] === 2  ||
                            x === 0 && table[y + 2][x] === 0 &&  table[y+1][x+2] === 0 && table[y +2][x+2] === 0
                         ){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x] = 0
                            table[y+2][x] = 1
                            table[y+1][x+2] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[5] 
                            z = 5
                            break
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === arrForElements[4]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y === 0 && table[y][x +2] === 0 && table[y +2][x +2] === 0 && table[y +2][x +1] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y][x + 1] = 0
                            table[y][x + 2] = 1
                            table[y+2][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = ZS 
                            z = 5
                            break
                        }else if(y === 18 && table[y+1][x] === 0 && table[y - 1][x] === 0 && table[y -1][x +1] === 0 || 
                                table[y+2][x+1] === 2 && table[y+1][x] === 0 && table[y - 1][x] === 0 && table[y -1][x +1] === 0 ||
                                table[y+2][x+2] === 2 && table[y+1][x] === 0 && table[y - 1][x] === 0 && table[y -1][x +1] === 0
                            ){
                            // clearInterval(int)
                            table[y +1][x] = 1
                            table[y+1][x + 1] = 0
                            table[y+1][x + 2] = 0
                            table[y-1][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = ZS 
                            z = 5
                            break                               
                        }else if(table[y-1][x] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y+2][x+1] === 0 && table[y+2][x+2] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x + 2] = 0
                            table[y-1][x + 2] = 1
                            table[y][x+2] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = ZS 
                            z = 5
                            break   
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === ZS){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(x===1 &&  table[y][x-1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+1] === 0  && table[y+2][x] === 0 ||
                            table[y+1][x-2] === 2 && table[y][x-1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+1] === 0  && table[y+2][x] === 0 ||
                            table[y][x-2] === 2 && table[y][x-1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+1] === 0  && table[y+2][x] === 0
                            ){
                            // clearInterval(int)
                            table[y][x-1] = 1
                            table[y+1][x-1] = 0
                            table[y+2][x - 1] = 0
                            table[y+1][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[4]
                            z = 5
                            break  
                        }else if(x === 9 && table[y][x-2] === 0 && table[y][x-1] === 0 && table[y+2][x] ===0 ||
                                table[y + 1][x+1] === 2 && table[y][x-2] === 0 && table[y][x-1] === 0 && table[y+2][x] ===0||
                                table[y+2][x+1] && table[y][x-2] === 0 && table[y][x-1] === 0 && table[y+2][x] ===0
                            ){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x-2] = 1
                            table[y+1][x] = 0
                            table[y+2][x] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[4]
                            z = 5
                            break  
                        }else if(table[y][x-1] === 0 && table[y + 1][x-2] === 0 && table[y + 2][x] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x] = 0
                            table[y+1][x-2] = 1
                            table[y+2][x] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = arrForElements[4]
                            z = 5
                            break 
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === arrForElements[3]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y !== 18 && table[y+2][x] === 0 && table[y+2][x+1] === 0 && table[y][x+1] === 0 && table[y][x +2]===0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+2][x] = 1
                            table[y+2][x +1] = 1
                            table[y+1][x] = 0
                            table[y][x+1] = 1
                            table[y+1][x+2] = 0
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = J
                            z = 5
                            break  
                        }else if (y === 18 && table[y][x+1] === 0 && table[y][x+2] === 0 && table[y-1][x+1] === 0 && table[y-1][x+1] === 0 || 
                                table[y+2][x] === 2 &&  table[y][x+1] === 0 && table[y][x+2] === 0 && table[y-1][x+1] === 0 && table[y-1][x+1] === 0 ||
                                table[y+2][x+1] === 2 && table[y][x+1] === 0 && table[y][x+2] === 0 && table[y-1][x+1] === 0 && table[y-1][x+1] === 0 || 
                                table[y+2][x+2] === 2 && table[y][x+1] === 0 && table[y][x+2] === 0 && table[y-1][x+1] === 0 && table[y-1][x+1] === 0
                            ){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x + 2] = 0
                            table[y][x +1] = 1
                            table[y-1][x+1] = 0
                            table[y-1][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = J
                            z = 5
                            break  
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === J){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y+1][x-1] = 1
                            table[y+1][x +1] = 1
                            table[y+2][x-1] = 0
                            table[y+2][x] = 0
                            table[y+2][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = J1
                            z = 5
                            break  
                        }else if(x === 9 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+2][x-2] === 0 || 
                                table[y+1][x+1] === 2 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+2][x-2] === 0 || 
                                table[y+2][x+1] === 2 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+2][x-2] === 0                            
                            ){
                             // clearInterval(int)
                             table[y][x] = 0
                             table[y+1][x-1] = 1
                             table[y+1][x -2] = 1
                             table[y+2][x-1] = 0
                             tableBoxs()
                             // int = setInterval(start,1000)
                             activElement = J1
                             z = 5
                             break  
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === J1){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y+1][x] === 0 && table[y+1][x+1] === 0 && table[y-1][x+1] === 0 && table[y-1][x+2] === 0){
                            // clearInterval(int)
                            table[y][x] = 0
                            table[y][x+2] = 0
                            table[y+1][x +2] = 0
                            table[y-1][x+1] = 1
                            table[y-1][x+2] = 1
                            table[y+1][x+1] = 1
                            tableBoxs()
                            // int = setInterval(start,1000)
                            activElement = J2
                            z = 5
                            break  
                        } 
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === J2){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y !== 0 && table[y-1][x] !==2 && table[y-1][x+1] !== 2 &&  table[y][x-1] === 0 && table[y-1][x-1] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0){
                            table[y][x] = 0
                            table[y][x+1] = 0
                            table[y+2][x] = 0
                            table[y][x-1] = 1
                            table[y+1][x-1] = 1
                            table[y+1][x+1] = 1
                            tableBoxs()
                            activElement = arrForElements[3]
                            z = 5
                            break  
                        }else if(x === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+2] === 0 || 
                                table[y][x-1] === 2 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+2] === 0 ||
                                table[y+1][x-1] ===2 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 && table[y+1][x+2] === 0 && table[y+2][x+2] === 0
                            ){
                             // clearInterval(int)
                             table[y][x+1] = 0
                             table[y+2][x] = 0
                             table[y+1][x+1] =1
                             table[y+1][x+2] = 1
                             tableBoxs()
                             // int = setInterval(start,1000)
                             activElement = arrForElements[3]
                             z = 5
                             break  
                        }else if(y === 0 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 ||
                                table[y-1][x] === 2 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0 ||
                                table[y-1][x+1] === 2 && table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y+1][x+1] === 0 && table[y+2][x+1] === 0
                            ){
                                // clearInterval(int)
                             table[y][x] = 0
                             table[y][x+1] = 0
                             table[y+2][x] = 0
                             table[y][x-1] = 1
                             table[y+1][x-1] = 1
                             table[y+1][x+1] = 1
                             tableBoxs()
                             // int = setInterval(start,1000)
                             activElement = arrForElements[3]
                             z = 5
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === arrForElements[6]){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(y === 18 && table[y-1][x] === 0 && table[y][x-1] === 0 && table[y-1][x-1] === 0 && table[y-1][x-2] === 0 ||
                            table[y+2][x-1] === 2 && table[y-1][x] === 0 && table[y][x-1] === 0 && table[y-1][x-1] === 0 && table[y-1][x-2] === 0 ||
                            table[y+2][x-2] === 2 && table[y-1][x] === 0 && table[y][x-1] === 0 && table[y-1][x-1] === 0 && table[y-1][x-2] === 0
                            ){
                            table[y][x] = 0
                            table[y+1][x-2] = 0
                            table[y+1][x] = 0
                            table[y][x-1] = 1
                            table[y-1][x-1] = 1
                            table[y-1][x-2] = 1
                            tableBoxs()
                            activElement = L2
                            z = 5
                            break 
                        }else if(table[y][x-2] === 0 && table[y][x-1] === 0 && table[y+2][x-2] === 0 && table[y][x-1] === 0){
                            table[y][x] = 0
                            table[y][x-1] = 1
                            table[y][x-2] = 1
                            table[y+1][x-2] = 0
                            table[y+1][x] = 0
                            table[y+2][x-1] = 1
                            tableBoxs()
                            activElement = L2
                            z = 5
                            break  
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === L2){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y+1][x] === 0 && table[y+1][x+2] === 0 && table[y+2][x] === 0 && table[y+2][x+2] === 0){
                            table[y][x] = 0
                            table[y][x+1] = 0
                            table[y+1][x] = 1
                            table[y+1][x+2] = 1
                            table[y+2][x] = 1
                            table[y+2][x+1] = 0
                            tableBoxs()
                            activElement = L3
                            z = 5
                            break 
                        }else if ( x === 8 && table[y][x-1] === 0 && table[y+1][x] === 0 && table[y+1][x-1] === 0 && table[y+2][x-1] === 0 ||
                                table[y+1][x+2] === 2 && table[y][x-1] === 0 && table[y+1][x] === 0 && table[y+1][x-1] === 0 && table[y+2][x-1] === 0 ||
                                table[y+2][x+2] === 2 && table[y][x-1] === 0 && table[y+1][x] === 0 && table[y+1][x-1] === 0 && table[y+2][x-1] === 0
                            ){
                                table[y][x] = 0
                                table[y][x+1] = 0
                                table[y+1][x] = 1
                                table[y+1][x-1] = 1
                                table[y+2][x+1] = 0
                                table[y+2][x-1] = 1
                                tableBoxs()
                                activElement = L3
                                z = 5
                                break  
                            }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === L3){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y-1][x+1] === 0 && table[y-1][x+2] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0){
                            table[y][x] = 0
                            table[y][x+2] = 0
                            table[y-1][x+1] = 1
                            table[y+1][x] = 0
                            table[y+1][x+1] = 1
                            table[y+1][x+2] = 1
                            tableBoxs()
                            activElement = L4
                            z = 5
                            break 
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }else if(activElement === L4){
            let z = 0
            for(let y = 0;y<table.length;y++){
                for(let x = 0;x<table[y].length;x++){
                    if(table[y][x] === 1){
                        if(table[y][x-1] === 0 && table[y+1][x-1] === 0 && table[y][x+1] === 0 && table[y+1][x+1] === 0){
                            table[y][x] = 0
                            table[y][x+1] = 1
                            table[y+1][x-1] = 1
                            table[y+1][x+1] = 1
                            table[y+2][x] = 0
                            table[y+2][x+1] = 0
                            tableBoxs()
                            activElement = arrForElements[6]
                            z = 5
                            break 
                        }if(x === 0 && table[y+2][x+2] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0 && table[y][x+2] === 0 || 
                            table[y][x-1] === 2 && table[y+2][x+2] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0 && table[y][x+2] === 0 ||
                            table[y+1][x-1] === 2 && table[y+2][x+2] === 0 && table[y+1][x+1] === 0 && table[y+1][x+2] === 0 && table[y][x+2] === 0
                            ){
                            table[y][x] = 0
                            table[y+1][x+1] = 1
                            table[y+1][x+2] = 1
                            table[y][x+2] = 1
                            table[y+2][x] = 0
                            table[y+2][x+1] = 0
                            tableBoxs()
                            activElement = arrForElements[6]
                            z = 5
                            break 
                        }
                        z = 5
                        break
                    }
                }
                if(z === 5){
                    break
                }
            }
        }
    }
    tableBoxs()
}
//can move left?

function ifElCanMoveLeft(){
    for(let y = 0;y<table.length;y++){
        for(let x = 0;x<table[y].length;x++){
            if(table[y][x] === 1){
                if(x === 0 || table[y][x - 1] === 2){
                    return false
                }
            }
        }
    }
    return true
}

//moving left

function moveLeft(){
    if(ifElCanMoveLeft()){
        for(let y = table.length -1;y>= 0;y--){
            for(let x = 0;x<table[y].length;x++){
                if(table[y][x] === 1){
                    table[y][x - 1] = 1
                    table[y][x] = 0
                }
            }
        }
    }
}

//can move rigth?

function ifElCanMoveRigth(){
    for(let y = 0;y<table.length;y++){
        for(let x = 0;x<table[y].length;x++){
            if(table[y][x] === 1){
                if(x === table[y].length - 1 || table[y][x + 1] ===2){
                    return false
                }
            }
        }
    }
    return true
}

//moving rigth 

function moveRigth(){
    if(ifElCanMoveRigth()){
        for(let y = table.length -1;y>= 0;y--){
            for(let x = 9;x>=0;x--){
                if(table[y][x] === 1){
                    table[y][x + 1] = 1
                    table[y][x] = 0
                }
            }
        }
    }
}

function start(){
    moveDown()
    tableBoxs()
}

let int = setInterval(start,speed)
let randomForNext = getRandomNumber(0,6)
let activElement = arrForElements[randomForNext]
randomForNext = getRandomNumber(0,6)
arrForNextElements[randomForNext]()
tableBoxsForNextEl()
activElement()
tableBoxs()

