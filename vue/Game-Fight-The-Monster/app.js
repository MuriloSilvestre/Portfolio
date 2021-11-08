new Vue({
    el: '#app',
   data: {
       Start: false,
       PlayerLive: 100,
       MonsterLive: 100,
       PlayerAtack: 0,
       MonsterAtack: 0
   },
   methods: {
    letsStart(){
        this.Start = true;
    },
    
    giveUP(){
        this.Start= false
        this.PlayerLive = 100;
        this.MonsterLive = 100;
    },

    attack(){
        this.MonsterLive =- Math.floor(Math.random() * (5 - 3) + 3);
        this.PlayerLive =- this.MonsterAtack + Math.floor(Math.random() * (5 - 4) + 4);
    },
    
    especialAttack(){
        this.MonsterLive =- Math.floor(Math.random() * (5 - 4) + 4);
        this.PlayerLive =- Math.floor(Math.random() * (5 - 4) + 4);
    },
    
    heal(){
        this.PlayerLive =+ this.PlayerLive + Math.floor(Math.random() * (5 - 4) + 4);
        this.PlayerLive =- Math.floor(Math.random() * (5 - 4) + 4);
    },
   }
})