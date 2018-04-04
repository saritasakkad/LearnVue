Vue.component('task', {
 
    template:'<li><slot></slot></li>'

    // <slot></slot> permet d'aficher les meme task mais les diférent txte dans le meme task

});

new Vue({

    el: '#root'
});