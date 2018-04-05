Vue.component('modal', {


    template: `
    
    <div class="modal is-active"> <!-- a la suiste de 'modal' on ajoute  'is-active' qui permet de le voire...  -->

    <div class="modal-background"></div>

      <div class="modal-content">

        <div class="box">

          <slot></slot>

        </div>
      
      </div>

    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>   <!--  @click="$emit('close')" -->

  </div>
    
    `

});

new Vue({

    el: '#root',

    data: {

        showModal: false

    }
});