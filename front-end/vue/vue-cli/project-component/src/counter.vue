<template>
    <div class="counter">
        <div>
            <span>{{ counter }}</span>
        </div>
        <div>
            <button @click="add"> + </button>        
            <button @click="remove"> - </button>        
        </div>
    </div>
</template>

<script>
export default {
    data:()=>{
        return{
            counter: 0
        }
    },
    methods:{
        add(){
            this.counter++
        },
        remove(){
            this.counter--
        }
    }
}
</script>

<style scoped>
    .counter{
        display:flex;
    }

    span{
        width: 50px;
        border-bottom: 1px solid green;
        font-weight: bold;
        font-size: 2rem;
        color: green;
        margin: 10px;
    }
    
    button{
        width:50px;
        height: 50px;
        border: 1px solid transparent;
        border-radius: 50%;
        background-color: green;
        border-color: green;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        margin: 10px 20px;
        outline: none;
    }
</style>
