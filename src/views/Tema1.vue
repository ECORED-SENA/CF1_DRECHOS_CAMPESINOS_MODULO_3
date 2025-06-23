<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La economía campesina: el trabajo como motor de vida

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La economía campesina constituye más que un modelo productivo: representa una forma de vida que sostiene la alimentación y la permanencia de las comunidades rurales. En este apartado se explica qué implica este tipo de economía, cuáles son sus rasgos distintivos y se destaca el papel crucial que desempeñan las mujeres en su desarrollo. A través de situaciones concretas, se reconoce el trabajo familiar y colectivo como el verdadero impulso que dinamiza el crecimiento rural.

    .titulo-tres.mt-5: h3 Definición

    p.mt-4 Este sistema se organiza desde lo comunitario, priorizando la subsistencia y el bienestar compartido.

    .row.bg-4
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-11
              .row.align-items-center.bg-6.p-4
                .col-lg-8

                  ul.lista-ul--color.bg-7.mt-2.px-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 La economía campesina es un sistema económico fundamentado en el trabajo familiar y colectivo.

                  ul.lista-ul--color.bg-7.mt-2.px-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Se distingue por su tendencia a la autosuficiencia, equilibrando la producción para el consumo interno con la comercialización de excedentes.

                  ul.lista-ul--color.bg-7.mt-2.px-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Se distingue por su tendencia a la autosuficiencia, equilibrando la producción para el consumo interno con la comercialización de excedentes.

                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 286px").m-auto



          .titulo-tres.mt-5: h3 Características principales

          p.mt-4 A continuación, se expone las principales características del modelo productivo familiar y de pequeña escala, destacando su base en el trabajo colectivo, la diversificación de actividades, la valorización de saberes tradicionales, el vínculo estrecho con el territorio y el aprovechamiento eficiente de recursos en contextos de baja inversión.

          .row.mt-2
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.bg-6.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img3.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: black !important") Caracterización de la agricultura campesina, familiar y comunitaria
              p.text-small.mb-0 Lo invitamos a ver el video de la UPRA sobre la caracterización y tipologías de la agricultura campesina, familiar y comunitaria, en el cual se explican los principales hallazgos de este estudio y su importancia para la formulación de políticas públicas rurales. 
    
            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                span.text-white Enlace web
                i.fas.fa-link.text-white

    .titulo-tres.mt-5: h3 Papel de las mujeres en la economía campesina

    p.mt-4 Las mujeres desempeñan un rol central en todas las etapas del proceso productivo y en la sostenibilidad del entorno rural.

    .row.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 295px").m-auto

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema1/img5.svg", alt="alt", style="width: 92px").m-auto
          p.text-center.mb-0 Participan activamente en la producción agrícola, el cuidado de los animales y la transformación de productos.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema1/img5.svg", alt="alt", style="width: 92px").m-auto
          p.text-center.mb-0 Son esenciales en la administración del hogar y en la gestión de ingresos que fortalecen la economía familiar.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema1/img5.svg", alt="alt", style="width: 92px").m-auto
          p.text-center.mb-0 Muchas lideran procesos de comercialización en ferias, mercados locales y redes de intercambio solidario.
                  
    .row.mt-4.align-items-center
      .col-lg-8 
        .row.bg-8.p-4
          p  Lo invitamos a leer la cartilla #[b “Sembradoras de vida y resistencia”], una publicación de la Alianza por la Soberanía Alimentaria de los Pueblos de América Latina y el Caribe, también a conocer esta #[b guía feminista sobre el derecho a la alimentación y la nutrición de las mujeres rurales, publicada por FIAN International.] 

          .row.align-items-center
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Sembradoras de vida y resistencia.

            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Cocinemos agendas políticas 

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 504px").m-auto

    .titulo-tres.mt-5: h3 La importancia del trabajo en la vida campesina

    p.mt-4 El trabajo en el contexto rural no solo es fuente de ingreso y alimentación, sino también un elemento clave en la organización social y en la relación con el entorno natural.

    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b El trabajo como base de la vida rural

                    p El trabajo cotidiano en el campo asegura la subsistencia, mantiene vivas las tradiciones y favorece la autonomía comunitaria.

                    ul.lista-ul--color
                      li.d-flex
                        i.icono-img2
                        .contenido
                          p.mb-0 #[b Sustento diario:] el trabajo agrícola es la principal fuente de alimentos y recursos para las familias campesinas.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Identidad cultural:] el vínculo con la tierra se transmite entre generaciones, consolidando la cultura y el sentido de pertenencia.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Economía de autosuficiencia:] la producción de alimentos, la cría de animales y la elaboración de productos artesanales garantizan la autonomía de las comunidades.


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b El trabajo y la organización social

                    p El trabajo colectivo fortalece las redes comunitarias, promueve la equidad en las tareas y refuerza los vínculos de solidaridad.

                    ul.lista-ul--color
                      li.d-flex
                        i.icono-img2
                        .contenido
                          p.mb-0 #[b Cooperación comunitaria:] muchas labores se realizan de forma colectiva, como las mingas o faenas, fortaleciendo los lazos entre familias.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Distribución de roles:] hombres, mujeres y jóvenes participan en distintas tareas, reconociendo saberes y capacidades.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Apoyo mutuo:] en épocas de cosecha, siembra o construcción, el trabajo solidario es fundamental para el bienestar general.


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img10.png', alt='')

                
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b El trabajo y la sostenibilidad

                    p La labor campesina está íntimamente relacionada con el cuidado del ambiente y la adaptación a los desafíos del clima.

                    ul.lista-ul--color
                      li.d-flex
                        i.icono-img2
                        .contenido
                          p.mb-0 #[b Cuidado de la tierra:] se basa en el respeto por la naturaleza y el uso responsable de los recursos.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Producción a pequeña escala:] fomenta prácticas más sostenibles y con menor impacto ambiental.

                      li.d-flex
                        i.icono-img2 
                        .contenido
                          p.mb-0 #[b Adaptación al cambio:] las comunidades desarrollan técnicas para enfrentar condiciones climáticas adversas y mantener su productividad.


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img11.png', alt='')

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-9(data-aos="fade-right")
          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema1/img12.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
          .col-lg
            p Lo invitamos a consultar la cartilla “La economía del trabajo”, una publicación de la Universidad Nacional de Quilmes que aborda el papel de la economía popular como base material de fuerzas sociales que buscan seguridad en su supervivencia. 

            .row
              .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Enlace web.] La economía del trabajo

    .titulo-tres.mt-5: h3 La contribución de las mujeres a la economía campesina

    .row.align-items-center.mt-4
      .col-lg-7
        p A continuación, se aborda la valiosa contribución de las mujeres a la economía campesina, destacando su papel en la producción agrícola, la transformación de productos, la comercialización local y la gestión comunitaria.

        .row.align-items-center.bg-3.p-4
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema1/img14.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p(style="color:black")
              b ¿Sabías qué?

            p Lo invitamos a escuchar el siguiente Pódcast:

            TarjetaAudio.color-acento-botones.mb-3.bg-10.p-3(
              texto="La contribución de las mujeres a la economía campesina "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img13.png', alt='', style="width: 504px").m-auto  

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
