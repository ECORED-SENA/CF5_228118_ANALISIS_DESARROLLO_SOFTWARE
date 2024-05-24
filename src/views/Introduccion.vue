<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12    
            .row.justify-content-center.align-items-center.bg1.brad(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/2.svg', alt='')       
              .col.my-3
                p(data-aos="fade-down").mb-0 ¿Sabías que la falta de calidad de los sistemas que se desarrollan es uno de los mayores contribuyentes a las llamadas crisis del #[i software]?  

            .row.justify-content-center.align-items-center        
              .col-lg-8.my-3
                .bg2.brad.p-4
                  p(data-aos="fade-down").mb-0 Actualmente, el desarrollo del #[i software] ha tenido un crecimiento muy importante y su implementación en diferentes áreas y productos ha crecido a pasos agigantados; por este motivo, en este componente se profundiza en la creación y correcto uso de los instrumentos que permiten la descripción de las características y las funcionalidades de un sistema, verificando el estado de los procesos e identificando si los requisitos que se esperan obtener son los adecuados, lo cual facilita una correcta trazabilidad y se logra una óptima toma de decisiones.
                .row.justify-content-center.align-items-center        
                  .col-lg-auto.my-3                  
                    img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt='')         
                  .col.my-3
                    p(data-aos="fade-down") Para lograrlo, estudiaremos qué es el informe de análisis y qué son las fuentes de información, para continuar con los instrumentos de medición o verificación, donde encontramos la lista de chequeo y el cálculo de métricas de #[i software], y finalizaremos con la trazabilidad, uno de los temas trascendentales en el proceso de desarrollo de #[i software], porque permite hacer un seguimiento riguroso al proyecto, desde la idea básica hasta los entregables.

                    h5(data-aos="fade-down") #[mark.t1.px-2 Bienvenido.]      

              .col-lg-4.my-3
                img.img-a.img-t(src='@/assets/curso/temas/4.svg', alt='')         

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
