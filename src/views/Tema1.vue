<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Informe de análisis
      
    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center.bg4.brad(data-aos="flip-down")           
              .col-lg-3.p-0.d-none.d-lg-block  
                img.img-t(src='@/assets/curso/temas/6.png', alt='')       
              .col-lg-9
                p(data-aos="fade-down").py-3.mb-0.text-white Dorrego (1994), define que el informe de análisis son documentos en los cuales se plasma una serie de procesos, de acuerdo con los requerimientos y objetivos a alcanzar, también conocidos como #[i reporting] y su fin es realizar un análisis exhaustivo del sistema que se desea desarrollar y el rendimiento de los procesos, logrando influir directamente en la toma de decisiones.  

            p.t2(data-aos="fade-down").pt-5 A continuación, en el siguiente video, se presentan algunos aspectos a tener en cuenta para el desarrollo de un informe de análisis.
            .row.justify-content-center.align-items-center.mb-5          
              .col-lg-12(data-aos="fade-left")     
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/szn9a9nezBI?si=nPt4xtJV1XqcGZAK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
                figcaption Video. Informe de análisis

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Proceso de búsqueda de la información, evaluación y síntesis de las fuentes          

    .row.bg5.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center        
              .col-lg-2.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='') 
              .col-lg-10.my-3
                p(data-aos="fade-down") Al momento de realizar un informe, el principal elemento de trabajo es la información que tenemos o hemos recolectado para tal fin.

                h5.t2(data-aos="fade-down") Esta información debe ser:              
                .row    
                  .col-lg-3.my-1.col-md-6
                    .bg6.text-white.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/10.png', alt='')       
                        .col.my-2.j2
                          p.mb-0 Confiable      
                  .col-lg-3.my-1.col-md-6
                    .bg6.text-white.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/10.png', alt='')       
                        .col.my-2.j2
                          p.mb-0 Objetiva 
                  .col-lg-3.my-1.col-md-6
                    .bg6.text-white.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/10.png', alt='')       
                        .col.my-2.j2
                          p.mb-0 Precisa      
                  .col-lg-3.my-1.col-md-6
                    .bg6.text-white.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/10.png', alt='')       
                        .col.my-2.j2
                          p.mb-0 Actualizada

            .bg7.brad.p-4.mb-5(data-aos="fade-up")
              p(data-aos="fade-down").mb-0.t3 Aquí se busca evaluar la calidad de las fuentes como son seguimientos, pruebas, historias de usuario, listas de chequeo, y en este caso específico, el informe de requerimientos de #[i software]. 

            p(data-aos="fade-down").mb-5 Comencemos hablando de las fuentes de información, las cuales son todos aquellos medios de los cuales procede la información, que satisfacen las necesidades de conocimiento de una situación o problema presentado, que posteriormente será utilizado para lograr los objetivos esperados.               
            .row.justify-content-center.align-items-center.mb-4        
              .col-lg-8.my-3
                .row.justify-content-center.align-items-center(data-aos="flip-down")           
                  .col-lg-auto.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')       
                  .col.my-3
                    h5.t2(data-aos="fade-down") De acuerdo a su origen se clasifican en: fuentes primarias y fuentes secundarias.
                    h5.t2(data-aos="fade-down") Según Torres et al, (2019):
                .row.justify-content-center       
                  .col-lg-6.my-3
                    .bg8.brad.p-3.j.h-100(data-aos="fade-left")
                      p(data-aos="fade-down").mb-0 Las fuentes primarias, son aquellas en las que los datos provienen directamente del objeto de estudio.

                  .col-lg-6.my-3
                    .bg8.brad.p-3.j.h-100(data-aos="fade-right")
                      p(data-aos="fade-down").mb-0 Las fuentes secundarias son aquellas que parten de datos preelaborados, como pueden ser datos obtenidos de otros proyectos, de Internet, de medios de comunicación. 

              .col-lg-4.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')       
            h5.t2(data-aos="fade-down") A su vez, las fuentes primarias pueden subdividirse en:              

            .row.justify-content-center.mb-4
              .col-lg-3.my-3.mov
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')      
              .col-lg-9.my-3(data-aos="fade-left")
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
                  div(titulo="Observación directa")
                    p Cuando el investigador toma directamente los datos de la población, sin necesidad de cuestionarios o entrevistadores. Por ejemplo, cuando un profesor realiza un estudio sobre el avance de sus estudiantes en una materia.
                  div(titulo="De la naturaleza, artificiales y mixtos")
                    p Cuando los datos no son obtenidos directamente, sino por medio de un cuestionario, lista de chequeo u otra fuente.

            .bg7.brad.p-4.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center(data-aos="flip-down")           
                .col-lg-auto.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')       
                .col.my-3
                  h5(data-aos="fade-down") #[mark.t4.px-2 Tenga en cuenta:]      
                  p(data-aos="fade-down").text-white.mb-0 Las fuentes primarias se adquieren por medio de una investigación directa al objeto de estudio, por métodos establecidos con anticipación. Para reunir datos primarios, lo ideal es recurrir a un plan.         
    p(data-aos="fade-down") Ahora, las fuentes secundarias, para ser utilizadas, deben ser detalladas con cuatro preguntas básicas:
    .row.justify-content-center.mb-4           
      .col-lg-3.my-3
        .bg10.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')
          p(data-aos="fade-down").mb-0 ¿Es pertinente? 
      .col-lg-3.my-3
        .bg10.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')
          p(data-aos="fade-down").mb-0 ¿Es obsoleta?  
      .col-lg-3.my-3
        .bg10.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')
          p(data-aos="fade-down").mb-0 ¿Es fidedigna? 
      .col-lg-3.my-3
        .bg10.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')
          p(data-aos="fade-down").mb-0 ¿Es digna de confianza?   

    p(data-aos="fade-down") En el siguiente esquema, se resume de forma general, la forma en que se estructuran los sistemas de información.      

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Sistemas de información 
    .bgfig1.p-5.mb-5(data-aos="zoom-in") 
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='Imagen que presenta que los sistemas de información tienen fuentes de información: primaria con observación directa e indirecta u secundaria, donde se tiene que validar si es: pertinente, obsoleta, fidedigna o digna de confianza.')          

    h5.t2(data-aos="fade-down") Teniendo en cuenta la información anterior, debemos tener presente que un informe se debe estructurar de la siguiente manera:   
    .row.justify-content-center.mb-4           
      .col-lg-6.my-3(data-aos="fade-down")
        .bg1.brad.p-4.h-100.j 
          ol.lista-ol--cuadro.fa-ul.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span a
              span #[b Resumen] de no más de 200 palabras describiendo los objetivos y motivación del trabajo.  
      .col-lg-6.my-3(data-aos="fade-up")
        .bg1.brad.p-4.h-100 
          ol.lista-ol--cuadro.fa-ul.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span b
              span #[b Introducción:] una introducción no debe contener más de 2 páginas, se debe detallar el ámbito, objetivos y resultados del trabajo, este debe contener: (Acosta Hoyos, 1972)
    .row.bg11.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/21.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.mb-5(columnas="col-lg-6")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')
                h5 Contexto
                p.mb-0 Descripción del ámbito del trabajo y definiciones generales, longitud máxima de 200 palabras.  

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')
                h5 Motivación
                p.mb-0 Por qué es relevante dicho trabajo (usar referencias).

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/25.png' alt='')
                h5 Tema del documento
                p.mb-0 Sobre qué parte específica del trabajo trata este documento.  

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/26.png' alt='')
                h5 Objetivo
                p.mb-0 Cuál es el objetivo de este documento. 

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')
                h5 Metodología
                p.mb-0 Breve resumen del procedimiento seguido para elaborar el trabajo.   

    .row.justify-content-center.mb-4           
      .col-lg-6.my-3(data-aos="fade-down")
        .bg1.brad.p-4.h-100.j 
          ol.lista-ol--cuadro.fa-ul.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span c
              span #[b Contenido:] tantas secciones como hagan falta para explicar los contenidos técnicos del trabajo. Se puede ilustrar con imágenes y esquemas si es considerado necesario.   
      .col-lg-6.my-3(data-aos="fade-up") 
        img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')

    h5.t2(data-aos="fade-down") Uno de los componentes medulares del contenido es la redacción, aquí debemos tener en cuenta:

    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Ordena las ideas")
            p Lo importante es tener claro qué es lo que se quiere expresar y cómo se quiere decir, antes de iniciar a escribir. Para ello, elabora un esquema con las principales ideas.  
          div(titulo="Usar frases cortas")
            p Al momento de plasmar nuestras ideas, debemos ser directos y concisos, así logramos que los lectores entiendan el mensaje.  
          div(titulo="Adjetivos")
            p Cuando se usan bien enriquecen el texto y ayudan a describir, de manera óptima, una idea. Se recomienda no excederse en ellos para no saturar el texto.   

    .row.justify-content-center    
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Revisar el texto")
            p Es recomendable leer el texto varias veces, porque al hacerlo de manera constante, podemos corregir errores y enriquecer el documento. Se recomienda estar actualizado en cuanto al lenguaje técnico. 
          div(titulo="No escribir como se habla")
            p La elaboración de la redacción difiere mucho del lenguaje hablado, por lo cual no debemos seguir el patrón de una conversación; cuando estamos redactando debemos estructurar el texto de la siguiente manera: sujeto, predicado y complementos, expresando de manera concreta la idea principal.  
          div(titulo="Usar puntos y comas")
            p Es indispensable para expresarnos de manera correcta, dando fluidez al discurso escrito, permitiendo que el lector pueda disfrutar y comprender el texto.       
          div(titulo="Conclusiones y resultados")
            p Las conclusiones de un informe son el producto de la investigación y el análisis del tema que se trató. Aquí se exponen los resultados obtenidos; esta debe tener unas características, como son:  
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-code.color1
                | Un resumen del texto que aporta una perspectiva general del contenido. 
              li 
                i.fas.fa-code.color1
                | Debe ser reflexiva sobre el tema tratado. 
              li 
                i.fas.fa-code.color1
                | Debe expresar de manera clara los resultados obtenidos en la investigación.
              li 
                i.fas.fa-code.color1
                | Se debe utilizar un lenguaje formal. 
              li 
                i.fas.fa-code.color1
                | Hay que evitar redundancias. 
              li 
                i.fas.fa-code.color1
                | Los resultados deben ser explícitos y concretos.             
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')       

    .row.justify-content-center.mb-4           
      .col-lg-6.my-3(data-aos="fade-down")
        .bg7.brad.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center(data-aos="flip-down")           
            .col-lg-auto.my-3
              img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')       
            .col.my-3
              h5(data-aos="fade-down") #[mark.t4.px-2 Nota:]      
              p(data-aos="fade-down").text-white.mb-0 En las conclusiones debemos argumentar cómo hemos cubierto nuestros objetivos. 
      .col-lg-6.my-3(data-aos="fade-up")
        .bg1.brad.p-4.h-100 
          ol.lista-ol--cuadro.fa-ul.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span d
              span #[b Metodología:]  es la descripción del proceso seguido para la elaboración del trabajo, es decir, se explica el diseño de la investigación, como: hipótesis, variables, tipo de estudio, diseño utilizado, instrumentos de recolección de información, muestreo y procedimientos.  

    p(data-aos="fade-down") Acosta Hoyos (1972), afirma que la metodología de investigación tecnológica nos brinda las pautas para resolver problemas de la realidad y tiene base empírica, porque aplica los conocimientos teóricos de la ciencia a la práctica, adoptando el método experimental en la solución de los problemas en forma sistémica.    

    .row.bg12.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12    
            .row.justify-content-center.mb-5(data-aos="flip-down")
              .col-lg-10.my-3
                .bg1.brad.h-100.p-4.j
                  p(data-aos="fade-down").mb-0 El tipo de investigación es tecnológico, porque busca resolver un problema práctico para satisfacer las necesidades de una solución de #[i software]. 
              .col-lg-2.my-3
                img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')     

            h5(data-aos="fade-down") #[mark.t4.px-2 Hipótesis]      
            h5.t2.mb-5(data-aos="fade-down") Según Pájaro (2002), se tienen dos grandes vías a partir de las cuales se descubren hipótesis y por lo tanto, se formulan o redactan:     

            .row.justify-content-center.mb-5    
              .col-lg-4.my-1.col-md-6(data-aos="fade-left")
                .bg6.text-white.brad.h-100.px-2
                  .row(data-aos="flip-down")           
                    .col-auto.my-2
                      img.img-t(src='@/assets/curso/temas/33.png', alt='')       
                    .col.my-2.j2
                      p.mb-0 A partir de la razón (razonando).      
              .col-lg-4.my-1.col-md-6(data-aos="fade-right")
                .bg6.text-white.brad.h-100.px-2
                  .row(data-aos="flip-down")           
                    .col-auto.my-2
                      img.img-t(src='@/assets/curso/temas/34.png', alt='')       
                    .col.my-2.j2
                      p.mb-0 A partir de la experiencia, usando la inducción.  

            p(data-aos="fade-down") En ambos casos, es importante recalcar que el programador ha tenido una etapa previa de observación y acumulación de datos relacionados con el problema que está investigando; por lo que la tradición científica permite desprender al menos tres procedimientos que llevan a la formulación de hipótesis, los cuales son:          

    .row.justify-content-center.text-center.mb-4           
      .col-lg-4.my-3(data-aos="fade-left")
        .bg13.p-4.brad.h-100.text-white
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src='@/assets/curso/temas/35.png' alt='')
          p.mb-0 #[b.t5 a)] La información respecto a la observación de un fenómeno es tan clara que conduce fácilmente a una hipótesis.    
      .col-lg-4.my-3(data-aos="fade-down")
        .bg13.p-4.brad.h-100.text-white
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src='@/assets/curso/temas/36.png' alt='')
          p.mb-0 #[b.t5 b)] El programador tiene una serie de convicciones o prejuicios filosóficos, producto de una gran experiencia en torno al problema que aborda, lo cual lo conduce fácilmente a una hipótesis.    
      .col-lg-4.my-3(data-aos="fade-right")
        .bg13.p-4.brad.h-100.text-white
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src='@/assets/curso/temas/37.png' alt='')
          p.mb-0 #[b.t5 c)] Una analogía, con relación al problema de interés podrá conducir a la hipótesis buscada.    

    .row.justify-content-center.align-items-center         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')        

      .col-lg-8.my-3
        .bloque-texto-d.color-secundario.p-4(data-aos="fade-left")
          .bloque-texto-d__texto
            i.fas.fa-quote-left
            p.mb-0 Las variables son factores que intervienen tanto como causa o como resultado dentro del proceso o fenómeno de la realidad formando parte esencial de la estructura del tema, Las variables intervienen como causa o como efecto en el proceso investigativo, estas quedan identificadas desde el momento en que se define el problema.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Espinoza Montez 2018) 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
