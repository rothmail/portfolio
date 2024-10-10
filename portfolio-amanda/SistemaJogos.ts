let rl = require("readline-sync")
class Jogo {
    public titulo:string
    protected genero:string
    protected classificacao:number
    constructor(titulo:string,genero:string,classificacao:number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        
    }
    get():void{
        console.log(`|| Título do jogo: ${this.titulo}|| Gênero: ${this.genero}\n|| Classificação: ${this.classificacao} anos.`)
    }
}

class jogoEletronico extends Jogo{
    private plataforma:string
    super(titulo:string, genero:string, classificacao:number,plataforma:string) {
    }
    public geteletronico():void{
        console.log(`|| Título: ${this.titulo}\n|| Gênero: ${this.genero}\n|| Classificação: ${this.classificacao}\n|| Platamorma: ${this.plataforma}`)
    }
}
class jogoTabauleiro extends Jogo{
    private numeroJogadores: number
    super(titulo:string, genero:string, classificacao:number,numeroJogadores:number){
    }
    public gettabuleiro():void{
        console.log(`|| Título: ${this.titulo}\n|| Gênero: ${this.genero}\n|| Classificação: ${this.classificacao}\n|| Quantidade de jogadores: ${this.numeroJogadores}`)
    }
}

class bibliotecaDeJogos {
    jogos: Jogo[]
    addJogo(jogo):void{
    this.jogos.push(jogo)
}
rmJogo(jogo):void{
    this.getJogos()
    let nomeremovido = rl.question('A remoção de qual jogo é desejada?')
    this.jogos = this.jogos.filter(jogo => jogo.titulo !== nomeremovido)
}
getJogos():void{
    for(let jogo of this.jogos){
        jogo.get()
        }
    }
}