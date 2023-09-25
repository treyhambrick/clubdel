<template>
    <div>
        <div class="picker">
            <P>
                <h1>Pick your dates </h1>
                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email"> 
                <BR/><BR/>
                <button type="submit" @click="submit">
                    Submit Reservation Request
                </button>  <BR/><BR/>
                        
            </P>
        </div>
    </div>

</template>

<script>
    import { ref, onMounted } from 'vue';
    const date = ref();
    //const screenWidth = ""; 
    
    onMounted(() => {
    //screenWidth = ref(screen.width) <= 760; 
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    //screenWidth.value = ref(screen.width) <= 760;
    date.value = [startDate, endDate];
    })
</script>

<style>
  .picker {
    float: center;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
    text-align: center;
  }

</style>
<!---template>
    <div v-if=!screenWidth>
        <div class="pickerMoble">
            <P>
                <h1>Pick your dates </h1>
                <VueDatePicker v-model="date" class="pic" range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email"> 
                <BR/><BR/>
                <button type="submit" @click="submit">
                    Submit Reservation Request
                </button>
                                 
            </P>
        </div>
    </div>
    <div v-else>
        <div class="pickerMoble">
            <P>
                <h1>Pick your dates </h1>
                <VueDatePicker v-model="date" class="pic" range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email"> 
                <BR/><BR/>
                <button type="submit" @click="submit">
                    Submit Reservation Request
                </button>
                
            </P>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
const date = ref();
const screenWidth = ref(screen.width) <= 760;
//const screenHeight = ref(screen.height)
// For demo purposes assign range from the current date
onMounted(() => {
const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
//screenWidth = ref(screen.width) <= 760;
date.value = [startDate, endDate];
})
</script>

<style>
  .pickerMoble {
    float: center;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
    xxwidth: 280px;
    text-align: center;
  }

  .picker {
    float: center;
    margin-right: 39%;
    margin-left: 39%;
    position: relative;
    xxwidth: 280px;
    text-align: center;
  }

  .picx {
    width: 280px;
  }

</style--->