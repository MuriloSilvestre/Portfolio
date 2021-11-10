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

<style>
    .counter{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }

    .counter span{
        font-weight: bold;
        font-size: 2rem;
        color: green;
    }
    
    .counter button{
        background-color: green;
        border-color: green;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        margin: 10px 20px;
        outline: none;
    }
</style>
