<template> 
  <Gallery />
  
  <div v-if="!isMobile()">
      mobile device
  </div>
  <div v-else>
      not mobile device
  </div>

</template>


<script>

import Gallery from '@/components/Gallery.vue';

export default {
  name: 'home',
  components: {
    Gallery,
  },
  methods: {   
    isMobilex() {     
      if (screen.width <= 760) 
         {return true} 
      else 
         {return false}   
      }, 
    }, 
    created(){ 
      this.isMobilex() 
    },
    setup(){
      const isMobile = () => screen.width <= 760
      return {isMobile}
    }
};
</script>
