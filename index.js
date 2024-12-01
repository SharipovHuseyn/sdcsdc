const val = document.querySelectorAll('.val')
const tes = document.querySelector('.tes')
const winHeader = document.querySelector('.win')

const win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

var count = 0
let winX = []
let win0 = []

for(let i = 0; i < val.length; i++){

    val[i].addEventListener('click', ()=>{

        function showWin(win){
            winHeader.textContent =  win + ' выграл!'
            tes. textContent = 'Игра окончено'
            for(let g = 0; g < val.length; g++){
                val[g].disabled = true
            }
        }

        function showDraw(){
            winHeader.textContent = 'Ничья!'
            tes. textContent = 'Игра окончено'
        }

        if(count % 2 == 1){
            val[i].textContent = 'X'
            tes.textContent = 'Ход нулья "0"'
        }else if(count % 2 == 0){
            val[i].textContent = '0'
            tes.textContent = 'Ход икса "X"'
        }
        
        count += 1
        val[i].disabled = true

        if(val[i].textContent == 'X'){
            winX.push(val[i].id)
        }else if(val[i].textContent == '0'){
            win0.push(val[i].id)
        }

        winX.sort()
        win0.sort()
        winX = winX.map(Number)
        win0 = win0.map(Number)

        if(count >= 5){
            for(let i = 0; i < win.length; i++){
                for(let j = 0; j < win[i].length; j++){
                    
                    if(win[i].every(value => winX.includes(value))){
                        showWin('X')
                        
                    }else if(win[i].every(value => win0.includes(value))){
                        showWin('0')
                    }else if(count == 9){
                        showDraw()
                    }
                }
            }
        }
    })
}
