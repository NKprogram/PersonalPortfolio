<template> 
  <div>
    <!-- The background. -->
    <ConnectTheDots />
    <!--the Navigation bar-->
    <NavBar/>
     <!-- <IntroSection/> -->
    
    
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import ConnectTheDots from '@/components/ConnectTheDots.vue'
//import components asynchronously
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
//const IntroSection = defineAsyncComponent(()=>import('@/components/IntroSection.vue'));
</script>

