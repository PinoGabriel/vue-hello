
  const { createApp } = Vue

  createApp({
    data() {
      return {
        name: prompt("Scrivi il tuo nome"),
        surname: prompt("Scrivi il tuo cognome"),
        image: `https://unsplash.it/600/300?image=171`,
        classColor: "red"
      }
    },
    methods: {
        btnClick: function(){
            this.classColor = "blue"
        }
    }
  }).mount('#app')