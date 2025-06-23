<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center 
            .col-lg-9
              p La economía campesina constituye un pilar fundamental para la soberanía alimentaria y el equilibrio territorial en Colombia. A través del trabajo colectivo, el arraigo al territorio y el uso de saberes tradicionales, las comunidades rurales han sostenido prácticas productivas resilientes, orientadas a garantizar el sustento familiar y la preservación del entorno. Reconocer este modelo económico como legítimo y valioso permite construir rutas de desarrollo que respondan a su realidad.
              .row.justify-content-center.mt-4
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                    .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/intro/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                    .col-lg
                      figure.d-lg-block.d-none
                        img(src="@/assets/curso/intro/img2.png", alt="", style="width: 90px")
                      p.mt-4 Este componente formativo busca fortalecer las capacidades de los campesinos en el ámbito contable y financiero, a partir de herramientas prácticas que les permitan organizar sus actividades económicas. Se abordan aspectos clave como la identificación de activos, pasivos y patrimonio, el registro de ingresos, costos y gastos, y la elaboración de informes contables útiles para la toma de decisiones. Todo ello bajo un enfoque claro, contextualizado y respetuoso de las dinámicas comunitarias.

            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/intro/img3.png', alt='', style="width: 296px").m-auto

          .row.mt-4.align-items-center.bg-3
            .col-lg-2.d-lg-block.d-none
              figure
                img(src="@/assets/curso/intro/img4.svg", alt="", style="width: 90px").m-auto

            .col-lg-10
              p.p-4 A lo largo del módulo, se promueve el uso de la contabilidad no como un requisito burocrático, sino como una estrategia de planificación, organización y proyección del trabajo campesino. Desde el reconocimiento de la legislación vigente hasta la interpretación de resultados económicos, este recurso busca empoderar a las familias rurales para mejorar su bienestar, acceder a nuevas oportunidades y consolidar su autonomía productiva.
            
</template>

<script>
export default {
  name: 'Introduccion',
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
