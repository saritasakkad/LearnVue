<template>
  
    <div>

        <h2>Akkad the: {{ Boss }}</h2>

        <p>

            <button @click="Boss += 1">Big</button>

        </p>


        <h1>Vue Ajax Requests With Axios</h1>

            <span>
                Vue ne fournit aucune fonctionnalité AJAX spécifique de la boîte. Au lieu de cela, 
                vous disposez de l'ensemble du spectre de la communauté JavaScript. Peut-être que vous 
                utilisez déjà jQuery? Si oui, $ .ajax fera l'affaire. Vous voulez une option native? 
                Considérez l'API de récupération (n'oubliez pas d'inclure un polyfill pour les anciens 
                navigateurs). Ou, peut-être une bibliothèque à usage général fera l'affaire? Dans 
                cette leçon, nous allons passer en revue Axios: une API de requêtes HTTP propre et
                simple que vous pouvez intégrer dans n'importe quel projet en quelques secondes.
                
            </span>

          <h3>Voir tuto: https://www.youtube.com/watch?v=ZPtmvV9Xk60&list=PL3VM-unCzF8iRyPotjFsgy7EfuCITvr_3&index=18</h3>


    </div>

</template>


<script>
    
    export default {

        data() {
            return { Boss: 0 };
        }
    }

</script>
