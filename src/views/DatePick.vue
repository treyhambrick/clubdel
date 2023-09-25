<template>
    <div>
        <div class="picker">
            <P ref="p">
                <h1>Pick your dates </h1>
                <form v-on:submit.prevent="onSubmit" class="form">
                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email"> 
                <BR/><BR/>
                <button @click="sendReservation()"  >
                    Submit Reservation Request
                </button>  <BR/><BR/>
             
                {{ status }} 
                </form>        
            </P>
        </div>
    </div>

</template>


<script>
    import { ref,  } from 'vue';
  
    export default {

        setup() {
            const date = ref();
            let count = ref(0);
            const status = ref();
            const email = ref();
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];   
            
            const sendReservation = () => {
                status.value = ''
                if (email.value){
                   status.value = 'Submit Reservation from email = ' + email.value
                  //if (count.value) {
                   count.value++
                   status.value = status.value + ' times= ' + count.value  
                }                
            }

        return {date , email ,startDate , endDate, sendReservation, count, status }
        }
    }
 
    
</script>


//        email: "email",
//count: 1,
            //status.value = 'Submit Reservation from email = ' 
            ///p.value.textContent = 'xxx';
//email.value = 'eee';
//const status = computed (() => {
//   return  email.value
// })
//console.log('Submit Reservation');
//count.value++;


<!---script setup>
    import { ref, onMounted } from 'vue';
    const date = ref();
    const email = ref();
    
    email.value = 'eee';
    onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];    
    })
</script--->