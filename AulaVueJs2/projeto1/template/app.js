new Vue({
    el: '#app',
    data: {
        gameStart: true,
        monsterLife: 100,
        playerLife: 100,
        mensagensLog: [],
        win: false
    },
    methods: {
        startGame() {
            this.gameStart = !this.gameStart;
        },
        endGame() {
            this.gameStart = !this.gameStart;
            this.reset();
        },
        monsterAtk() {
            if (this.monsterLife > 0) {
                const atk = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
                this.playerLife = this.playerLife - atk;
                const log = `Monstro atingiu o jogador Com ${atk}`;
                this.mensagensLog.push(log);
            }
        },
        playerAtk() {
            const atk = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
            this.monsterLife = this.monsterLife - atk;
            this.monsterLife < 0 ? this.monsterLife = 0 : this.monsterLife
            const log = `Jogador atingiu o Monstro Com ${atk}`;
            this.mensagensLog.push(log);
            this.monsterAtk();
        },
        playerSpecialAtk() {
            const atk = Math.floor(Math.random() * (18 - 8 + 1)) + 8;
            this.monsterLife = this.monsterLife - atk;
            this.monsterLife < 0 ? this.monsterLife = 0 : this.monsterLife
            const log = `Jogador atingiu o Monstro Com ${atk}`;
            this.mensagensLog.push(log);
            this.monsterAtk();
        },
        heal() {
            const heal = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            this.playerLife = this.playerLife + heal;
            this.playerLife > 100 ? this.playerLife = 100 : this.playerLife
            const log = `Jogador se curou Com ${heal}`;
            this.mensagensLog.push(log);
            this.monsterAtk();
        },
        reset() {
            this.playerLife = 100;
            this.monsterLife = 100;
            this.mensagensLog = []
        }
    },
    computed: {
        barraMonstro() {
            return {
                width: `${this.monsterLife}%`
            }
        },
        barraJogador() {
            return {
                width: `${this.playerLife}%`
            }
        },
        runnningGame() {
            return this.playerLife <= 0 || this.monsterLife <= 0;
        },
        classeMensagem(index) {
            console.lo
            if (index % 2 != 0) {
                return player
            }
            else {
                return "monster"
            }
        }
    },
    watch: {
        monsterLife: function (life) {
            life > 0 ? this.win = false : this.win = true
        }
    }
})