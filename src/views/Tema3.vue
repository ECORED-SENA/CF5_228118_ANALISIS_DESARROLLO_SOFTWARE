<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Trazabilidad

    .row.bg18.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center.bg19.brad.mb-5(data-aos="flip-down")           
              .col-lg-3.p-0.d-none.d-lg-block  
                img.img-t(src='@/assets/curso/temas/66.png', alt='')       
              .col-lg-9
                .py-3.text-white
                  p(data-aos="fade-down") Es uno de los temas trascendentales en el proceso de desarrollo de software, porque permite hacer un seguimiento riguroso al proyecto desde la idea básica hasta los entregables. Los modelos de trazabilidad facilitan que los desarrolladores realicen una correcta evaluación del costo e impacto de las posibles modificaciones en los modelos y código del software, ayudando a enlazar o relacionar los requisitos con otros elementos del ciclo de vida, principalmente, casos de prueba y código. 

                  p(data-aos="fade-down").mb-0 En la opinión de Hernández et al (2015), hay que tener en cuenta que el código que se implementa debe ser consecuente con los requisitos, se puede estimar con precisión el esfuerzo que lleva implementar una petición de cambio sobre un requisito. Hay que tener en cuenta que la trazabilidad debe ser bidireccional, de requisitos a código y código a requisitos. Para este fin, se utiliza una matriz de trazabilidad de requerimientos, lo cual asegura un total cumplimiento del proyecto. 

            h5.t2(data-aos="fade-down") Para elaborar esta matriz, hay que tener como insumo fundamental los requisitos de software, entre ellos encontramos: 

            .row.justify-content-center.mb-4    
              .col-lg-9.my-3(data-aos="fade-left")
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
                  div(titulo="Requisitos del negocio")
                    p Están asociados a objetivos de negocio y del proyecto.      
                  div(titulo="Requisitos de los interesados <i>stakeholders</i>")
                    p Pueden ser puntuales, impactando sobre otras áreas de la organización. 
                  div(titulo="Requisitos de soluciones")
                    p Pueden ser funcionales o no funcionales, tecnológicos, de cumplimiento de estándares, de apoyo y capacitación, de calidad o de presentación de informes.      
                  div(titulo="Requisitos de transición")
                    p Representan la transferencia del producto a la parte operativa, es decir, se trata de informar y proveer del material necesario al personal que tenga que trabajar el producto final.                      
              .col-lg-3.my-3.mov
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')

            h5.t2(data-aos="fade-down") Entonces, ¿cuál es la finalidad de elaborar una matriz de trazabilidad? 

            .row.justify-content-center.mb-4           
              .col-lg-4.my-3
                .bg10.brad.p-5.h-100.text-white.text-center
                  img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')
                  h5(data-aos="fade-up") Primero
                  p(data-aos="fade-down").mb-0 Ayuda a determinar las mejoras que se puede hacer en los procesos estimados, basándose en las mejores prácticas CMMI.	
              .col-lg-4.my-3
                .bg10.brad.p-5.h-100.text-white.text-center
                  img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/69.png', alt='')
                  h5(data-aos="fade-up") Segundo
                  p(data-aos="fade-down").mb-0 Para informar a las partes interesadas #[b stakeholders] sobre cómo van los procesos.  	 
              .col-lg-4.my-3
                .bg10.brad.p-5.h-100.text-white.text-center
                  img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/70.png', alt='')
                  h5(data-aos="fade-up") Tercero
                  p(data-aos="fade-down").mb-0 Para cumplir con los requisitos contractuales. 

            h5.t2(data-aos="fade-down") ¿Y cómo elaboramos una matriz de trazabilidad?  

            .row.justify-content-center.align-items-center
              .col-lg-8.my-3 
                p(data-aos="fade-down") Tradicionalmente, se puede hacer manualmente con lápiz y papel o en una hoja de cálculo, aquí se relacionan los requisitos y los objetivos que se plantearon, adicionalmente, se acompaña de unos campos que aportan información y dan coherencia a esta relación.      
                .bg15.brad.px-4.mb-4(data-aos="fade-up")
                  .row.justify-content-center.align-items-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/72.png', alt='')       
                    .col.my-3  
                      p(data-aos="fade-down").mb-0 Hoy en día existen programas de herramientas de gestión que ayudan para este fin, como Redmine, Trac o similar, aunque hay un gran abanico y de uso libre en el mercado. 

                p(data-aos="fade-down") A continuación, analicemos un ejemplo de matriz de trazabilidad.       
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/71.png', alt='')                                           	

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      h5 Tabla 1.
      span Lista de chequeo Módulo de registro de usuarios
    .tabla-a.color-acento-contenido(data-aos="fade-down")
      table
        thead.bgh
          tr
            th(style="width: 60px") Ítem
            th Requisitos 
            th Tipo
            th Prioridad 
            th Estado 
            th Objetivo 
            th Funcionalidad
            th Entrega            
        tbody.bgb  
          tr
            td.text-center 1
            td 
              p.mb-0 El sistema recoge los siguientes datos:
              p.mb-0 Nombre 
              p.mb-0 Apellido 
              p.mb-0 Cédula 
              p.mb-0 Correo electrónico
              p.mb-0 Dirección 
              p.mb-0 Teléfono  
            td.text-center Venta  
            td.text-center Alta 
            td.text-center Activo  
            td Obtener datos del usuario. 
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar              
            td.text-center Entregado   
          tr
            td.text-center 2
            td Los datos serán registrados por un usuario registrado en el sistema.
            td.text-center Venta  
            td.text-center Media 
            td.text-center Activo 
            td Garantizar la seguridad de la información.  
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar            
            td.text-center Pendiente   
          tr
            td.text-center 3
            td El sistema recogerá los datos que el cliente va a adquirir con su código de barras. 
            td.text-center Venta  
            td.text-center Alta 
            td.text-center Activo 
            td Mejorar el control de existencias de productos . 
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar           
            td.text-center Entregado  
          tr
            td.text-center 4
            td El sistema validará que los datos sean correctamente ingresados. 
            td.text-center Venta  
            td.text-center Baja 
            td.text-center Activo 
            td Validaciones  
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar          
            td.text-center Pendiente   
          tr
            td.text-center 5
            td El sistema será capaz de generar la factura con los datos, ingresado haciendo la búsqueda en la base de datos. 
            td.text-center Facturación  
            td.text-center Alta 
            td.text-center Activo 
            td Agilizar el sistema de facturación. 
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar        
            td.text-center Pendiente   
          tr
            td.text-center 6
            td El sistema será capaz de atender un número limitado de consultas o peticiones. 
            td.text-center Venta  
            td.text-center Alta 
            td.text-center Activo 
            td Control de sentencias SQL. 
            td 
              p.mb-0 Registrar 
              p.mb-0 Modificar 
              p.mb-0 Eliminar
            td.text-center Pendiente 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
