<template>
  
    <div>

        <h2>Akkad the: {{ Boss }}</h2>

        <p>

            <button @click="Boss += 1">Big</button>

        </p>

    </div>

</template>


<script>
    
    export default {

        data() {
            return { Boss: 0 };
        }
    }

</script>
