
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Prima esercitazione di Vue',
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