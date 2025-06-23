<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Registros contables de activos, pasivos y patrimonio en el contexto campesino

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Registrar correctamente lo que se tiene (activos), lo que se debe (pasivos) y lo que se ha logrado construir (patrimonio) es fundamental para llevar una administración organizada. Esta sección explica de manera sencilla cómo reconocer y registrar estos elementos dentro de la unidad campesina, mostrando que llevar cuentas claras no es difícil y que es una herramienta poderosa para crecer económicamente. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  ¿Qué son los activos en una unidad campesina?

    p Los #[b activos] son todos los #[b bienes y recursos] que ayudan a producir o generar ingresos. Tienen valor económico y forman parte del trabajo cotidiano en la unidad productiva. No se limitan a objetos grandes como tierras o maquinaria; también incluyen insumos, herramientas y dinero disponible. Los ejemplos comunes de activos campesinos son: 

    .row.bg-18
      .col-12
        .p-5
          .row.justify-content-center.mb-4
            .col-lg-10
              ImagenInfografica.color-acento-botones.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img2.png', alt='', style='')

                .tarjeta.color-acento-botones.p-4(x="11%" y="26.8%" numero="+" style='border-radius: 10px; background-color: #FFCC00')
                  p.mb-0.text-center Ahorros destinados a la compra de insumos o mejoras de la finca.

                .tarjeta.color-acento-botones.p-4(x="31.3%" y="58.4%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  p.mb-0.text-center Corrales, invernaderos, tanques de agua, gallineros.

                .tarjeta.color-acento-botones.p-4(x="36.4%" y="82%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  p.mb-0.text-center Vacas, gallinas, cerdos, ovejas, caballos, etc.

                .tarjeta.color-acento-botones.p-4(x="48.4%" y="69%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  p.mb-0.text-center Semillas guardadas, bultos de maíz, café, frijol, etc.

                .tarjeta.color-acento-botones.p-4(x="72.4%" y="86.5%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  p.mb-0.text-center Azadones, machetes, palas, carretillas, bombas de fumigación.

                .tarjeta.color-acento-botones.p-4(x="81.4%" y="66.5%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  p.mb-0.text-center Parcelas donde se cultiva maíz, papa, yuca, café, entre otros.
          
    .titulo-tres: h3 Clasificación de activos según su duración

    p.mt-4 Los activos de una unidad campesina pueden clasificarse en dos grandes grupos, dependiendo del tiempo que permanecen en uso dentro del proceso productivo:

    .row.mt-4.justify-content-center.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 400px").m-auto
      .col-lg-6
        .row.bg-6.p-5.align-items-center
          p
            b Activos de largo plazo

          p Son bienes que tienen una vida útil prolongada y se utilizan durante varios ciclos productivos.

          p #[b Ejemplo.] Tierra, corral, invernadero, carreta, sistema de riego, molino. 

    .row.mt-4.justify-content-center.align-items-center
      .col-lg-6
        .row.bg-8.p-5.align-items-center
          p
            b Activos de corto plazo

          p Son bienes que se consumen o agotan en un solo ciclo productivo o en un corto período de tiempo.


          p #[b Ejemplo.] Semillas, fertilizantes, alimento para animales, insumos médicos para ganado.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 400px").m-auto

    .row.bg-19
      .col-12
        .p-5 
          .row.align-items-center.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 295px").m-auto
                .col-lg-7
                  p Esta clasificación #[b facilita la planificación y el control de los recursos], ya que permite:

                  ul.lista-ul--color.mt-2.px-4
                    li.d-flex.align-items-start.p-1.bg-6
                      span.icono-img
                      p.mb-0 Saber qué elementos se deben reponer frecuentemente.

                    li.d-flex.align-items-start.p-1.bg-6
                      span.icono-img
                      p.mb-0 Identificar las inversiones que se mantienen en el tiempo.

                    li.d-flex.align-items-start.p-1.bg-6
                      span.icono-img
                      p.mb-0 Calcular con mayor precisión los costos de producción por ciclo.

          separador
          #t_3_2.titulo-segundo.color-acento-contenido
            h2 3.2  ¿Qué son los pasivos en una unidad campesina?         

          p Así como los activos representan todo lo que se tiene para trabajar y producir, los #[b pasivos] representan #[b todo lo que se debe]. En otras palabras, son las #[b deudas] o #[b compromisos financieros] que la unidad campesina ha adquirido y que debe pagar en algún momento.

          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-20(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema3/img6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg
                  p.p-4 Los pasivos pueden surgir cuando se requiere apoyo económico para mejorar la producción. Por ejemplo, si una familia campesina solicita un préstamo para comprar un motor de agua, esa deuda se convierte en un pasivo. También se consideran pasivos los pagos pendientes a proveedores de insumos como semillas o fertilizantes, así como el dinero adeudado por el arriendo de parcelas o el alquiler de maquinaria agrícola.

          .titulo-tres.mt-5: h3 Ejemplos comunes de pasivos en una unidad campesina

          p.mt-4 Las unidades campesinas pueden enfrentarse a diversos tipos de deudas en el desarrollo de sus actividades productivas. Estos pasivos son comunes y necesarios en muchos casos para acceder a recursos o servicios que permiten mejorar la producción. A continuación, se presentan ejemplos típicos de pasivos que pueden encontrarse en este contexto:

          .row.bg-13
            .col-12 
              .p-5 
                .carousel-bg
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-3.d-none.d-lg-block
                      figure(data-aos="zoom-in")
                        img(src="@/assets/curso/tema3/img7.png", alt="alt", style="width: 305px").m-auto
                    .col-lg-8
                      SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                        .tarjeta.tarjeta--slyder.p-5
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src="@/assets/curso/tema3/img8.svg", alt='', style="width: 90px").m-auto
                          p.text-center
                            b Préstamo bancario	Crédito
                          p.text-center.mb-0 solicitado para comprar ganado, maquinaria o herramientas agrícolas.

                        .tarjeta.tarjeta--slyder.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src="@/assets/curso/tema3/img9.svg", alt='', style="width: 90px").m-auto
                          p.text-center
                            b Deuda con proveedores	
                          p.text-center.mb-0 Compra de insumos a crédito, como semillas, fertilizantes o plaguicidas.

                        .tarjeta.tarjeta--slyder.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src="@/assets/curso/tema3/img10.svg", alt='', style="width: 90px").m-auto
                          p.text-center
                            b Pago pendiente de servicios	
                          p.text-center.mb-0 Facturas de agua, electricidad o servicios técnicos agrícolas sin pagar.

                        .tarjeta.tarjeta--slyder.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src="@/assets/curso/tema3/img11.svg", alt='', style="width: 90px").m-auto
                          p.text-center
                            b Crédito con cooperativas	
                          p.text-center.mb-0 Financiamiento recibido de asociaciones campesinas o cooperativas locales.

    .titulo-tres.m-neg: h3 Clasificación de los pasivos

    p.mt-4 Los pasivos pueden clasificarse según el tiempo que se tiene para saldarlos:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-4.p-4
        .row.p-4.bg-6
          figure
            img(src="@/assets/curso/tema3/img12.svg", alt="", style="width: 100px")

          p
            b Corto plazo
          p Deudas que deben pagarse en menos de un año. Ejemplo: crédito para abono que se paga tras la cosecha.

      .col-lg-4.p-4
        .row.p-4.bg-6
          figure
            img(src="@/assets/curso/tema3/img12.svg", alt="", style="width: 100px")

          p
            b Largo plazo

          p Deudas con un período de pago mayor a un año. Ejemplo: préstamo para construir un galpón o mejorar el sistema de riego.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='', style="width: 317px")


    .titulo-tres.mt-4: h3 Importancia de conocer los pasivos

    p.mt-4 Es fundamental que la unidad campesina tenga claridad sobre cuánto debe, a quién le debe y en qué fechas debe pagar. Esto permite una mejor planificación financiera, evita retrasos en los pagos y reduce el riesgo de #[b sobreendeudamiento].

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img15.png', alt='', style="width: 317px").m-auto

      .col-lg-4.p-1
        .row.p-5.bg-9

          p
            b Endeudarse con responsabilidad

          p El endeudamiento puede ser positivo si se maneja con cuidado y con el objetivo de mejorar la producción y el bienestar familiar. Es crucial no comprometerse más allá de la capacidad real de pago.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img16.png', alt='', style="width: 317px").m-auto

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  ¿Qué es el patrimonio en una unidad campesina? 

    p El #[b patrimonio] en una unidad campesina es todo lo que le queda a la familia #[b después de restar lo que se debe (pasivos) de lo que se tiene (activos)]. En otras palabras, representa la #[b riqueza neta] que ha logrado construir la familia con su trabajo, y refleja el valor real de su unidad productiva.

    .row.mt-4.align-items-center
      .col-lg-6.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img17.png', alt='', style="width: 610px").m-auto
      .col-lg-6
        .row.bg-17.p-4
          figure
            img(src="@/assets/curso/tema3/img18.svg", alt="", style="width: 100px")

          p.mt-4 Este valor incluye bienes como la tierra, herramientas, animales, cultivos y dinero en efectivo, restando las deudas pendientes. Conocer el patrimonio es fundamental porque permite saber si la unidad campesina está #[b creciendo, se mantiene estable o enfrenta dificultades económicas].

    .titulo-tres.mt-5: h3 Ejemplo de cálculo del patrimonio

    p.mt-4 A continuación, se presenta un ejemplo práctico que ilustra cómo calcular el patrimonio en una unidad campesina:

    .row.mt-4.align-items-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1. 
          span Activos de la familia campesina

        figure.mt-4
          img(src='@/assets/curso/tema3/img19.svg', alt='', style="width: 505px")

      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2. 
          span Pasivos de la familia campesina

        figure.mt-4
          img(src='@/assets/curso/tema3/img20.svg', alt='', style="width: 505px")

    .row.mt-4.justify-content-center
      .col-lg-8
        .row.align-items-center.bg-21.p-4
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img21.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            p 
              b Cálculo del patrimonio final:
            p $30 millones (activos) − $5 millones (pasivos) = #[b $25 millones de patrimonio].


    .titulo-tres.mt-5: h3 ¿Por qué es importante conocer el patrimonio?

    p.mt-4 Conocer el patrimonio permite a las unidades campesinas:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img22.png', alt='', style="width: 400px").m-auto

      .col-lg-5
        .row.p-2.bg-6

          ul.lista-ul--color.mt-2.px-4
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Tomar decisiones informadas sobre nuevas inversiones.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Solicitar créditos con mayor respaldo financiero.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Planificar la herencia para futuras generaciones.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Evaluar el progreso económico de un año a otro.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Fortalecer la seguridad familiar ante imprevistos.


      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img23.png', alt='', style="width: 317px").m-auto

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
