<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cómo elaborar e interpretar informes contables y financieros campesinos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Registrar los movimientos económicos es solo una parte del camino; también es necesario saber cómo resumir esa información y, sobre todo, interpretarla para tomar decisiones acertadas. En esta sección se enseña cómo elaborar un informe contable sencillo y cómo leer sus resultados para mejorar la producción, corregir errores y fortalecer la unidad campesina con cada ciclo productivo.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 ¿Qué es un informe contable?

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-17(data-aos="fade-right")
          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema5/img2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
          .col-lg
            p Un informe contable campesino es un documento sencillo donde se registra todo lo que ocurre con el dinero en la finca o unidad productiva: lo que entra (ingresos) y lo que sale (costos y gastos). Es comparable al control de la economía familiar, pero enfocado en la actividad agrícola. En palabras simples, es como un espejo que refleja la situación económica de la finca.

      .col-lg-2.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema5/img3.png', alt='', style="width: 190px").m-auto


    .titulo-tres.mt-5: h3 ¿Para qué sirve?

    p.mt-4 Antes de empezar a registrar cifras, es importante comprender por qué vale la pena dedicar tiempo a elaborar un informe contable. Este documento no solo permite tener una visión clara del estado financiero, sino que también se convierte en una herramienta clave para tomar decisiones que pueden marcar la diferencia entre avanzar o estancarse.

    .row.mt-4.align-items-center
      .col-lg-7
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="Claridad	")
            p Claridad

            p Permite saber con precisión cómo está funcionando el negocio.

          .tarjeta.clr-paleYellow.p-4(titulo="Planificación	")
            p Planificación	

            p Ayuda a decidir sobre nuevas siembras, compras o mejoras en la producción.

          .tarjeta.clr-paleYellow.p-4(titulo="Acceso a apoyos		")
            p Acceso a apoyos	

            p Facilita la presentación de información ante bancos, cooperativas o programas de crédito.

          .tarjeta.clr-paleYellow.p-4(titulo="Crecimiento		")
            p Crecimiento	

            p Permite organizar mejor el trabajo y alcanzar mayor rendimiento económico.


      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema5/img4.png', alt='', style="width: 500px").m-auto
  


    .titulo-tres.mt-5: h3 ¿Qué debe incluir un informe contable campesino?

    p.mt-4 Un buen informe contable debe registrar de manera clara y ordenada los siguientes componentes:

    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema5/img5.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.align-items-center
          .col-lg-8
            .row.p-1.bg-3
              ul.lista-ul--color.mt-2.px-3
                li.d-flex.align-items-start.p-1.bg-7
                  span.icono-img
                  p.mb-0 #[b Resumen de ingresos:] dinero recibido por ventas, arriendos o apoyos.

                li.d-flex.align-items-start.p-1.bg-7
                  span.icono-img
                  p.mb-0 #[b Resumen de costos:] gastos directos de producción (semillas, abonos, mano de obra).

                li.d-flex.align-items-start.p-1.bg-7
                  span.icono-img
                  p.mb-0 #[b Resumen de gastos:] gastos indirectos (servicios, transporte, reparaciones).

                li.d-flex.align-items-start.p-1.bg-7
                  span.icono-img
                  p.mb-0 #[b Resultado final:] diferencia entre ingresos y egresos, que indica ganancia o pérdida.

          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema5/img6.png', alt='', style="width: 295px").m-auto

          
        .row.mt-4.align-items-center.p-2.bg-21
          .col-lg-2.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema5/img7.svg', alt='', style="width: 85px").m-auto
          .col-lg-10
            p.mb-0
              b Fórmula básica:
            p Ganancia o pérdida = Total ingresos − (Total costos + Total gastos)


    .titulo-tres.mt-5: h3 ¿Cada cuánto se debe hacer un informe contable?

    p.mt-4 La elaboración del informe contable no debe verse como una tarea puntual, sino como una actividad periódica. Su frecuencia dependerá del tipo de actividad productiva y del objetivo de análisis:

    .row.mt-4.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema5/img8.png', alt='', style="width: 610px").m-auto
      .col-lg-6
        .row.p-4.bg-3
          ul.lista-ul--color.mt-2.px-3
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 #[b Don Jaime]  cultiva papa y desea solicitar un crédito. Le piden su informe financiero anual.


            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 #[b Doña Carmen]  cría gallinas y quiere participar en una feria. Necesita presentar un resumen financiero.


            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 El grupo #[b “Manos a la Tierra”] recibió apoyo estatal y debe justificar el uso de los recursos.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6. 
          span Unidad productiva: finca el buen sembrador. Enero – Junio

        .tabla-a.ajuste___tabla.mb-5.mt-4(data-aos="zoom-in")
          table
            thead
              tr
                th Concepto
                th Monto
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start #[b Ingresos]
                td.text-end 
              tr
                td.text-start Venta de yuca
                td.text-end $2.000.000
              tr(style="background-color: #F6F6F6")
                td.text-start Venta de miel de abejas
                td.text-end $800.000
              tr
                td.text-start Apoyo programa de abejas
                td.text-end $400.000
              tr(style="background-color: #F6F6F6")
                td.text-start.fw-bold Total ingresos
                td.text-end.fw-bold $3.200.000

              tr
                td.text-start #[b costos?]
                td.text-end 
              tr(style="background-color: #F6F6F6")
                td.text-start Compra de semillas
                td.text-end $300.000
              tr
                td.text-start Compra de abono
                td.text-end $200.000
              tr(style="background-color: #F6F6F6")
                td.text-start Alimentación de abejas
                td.text-end $100.000
              tr
                td.text-start Pago a ayudantes
                td.text-end $400.000
              tr(style="background-color: #F6F6F6")
                td.text-start.fw-bold Total costos
                td.text-end.fw-bold $1.000.000

              tr
                td.text-start #[b Gastos]
                td.text-end 
              tr(style="background-color: #F6F6F6")
                td.text-start Pago de agua de la finca
                td.text-end $80.000
              tr
                td.text-start Transporte a feria agrícola
                td.text-end $120.000
              tr(style="background-color: #F6F6F6")
                td.text-start Reparación de tanque de agua
                td.text-end $50.000
              tr
                td.text-start.fw-bold Total gastos
                td.text-end.fw-bold $250.000

              tr(style="background-color: #F6F6F6")
                td.text-start.fw-bold Resultado final
                td.text-end 
              tr
                td.text-start Ganancia obtenida
                td.text-end.fw-bold $1.950.000

      .col-lg-4
        .row.p-4.bg-21
          p.mb-0.fw-bold Cálculo:
          p 3.200.000 − (1.000.000 + 250.000) = 1.950.000

        .row.p-2.bg-11.mt-4
          p Consejos prácticos
          ul.lista-ul--color.mt-2.px-3
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 No es necesario ser contador para elaborar un buen informe.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Lo esencial es la organización: anotar diariamente los movimientos económicos.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 La constancia, la honestidad y el orden son claves para que el informe sea útil.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Un informe contable claro es como sembrar una buena semilla: da frutos en forma de tranquilidad y crecimiento.



    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 ¿Qué se necesita para hacer un informe contable o balance de la economía campesina?

    p No se necesita ser contador ni tener una computadora para llevar un informe contable. Con un cuaderno, un lápiz y organización, cualquier campesino puede construir su propio registro económico de manera sencilla y útil. A continuación, se presentan los pasos fundamentales para elaborar un informe contable campesino:


    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-24")
      .row(titulo="Paso 1.  Anotar todos los ingresos")

        p.mb-0.px-5 Registrar cada entrada de dinero, sea por ventas o apoyos, es el primer paso. Es importante incluir siempre:
        p.mb-0.px-5 Fecha
        p.mb-0.px-5 Concepto (qué se vendió o de dónde proviene el dinero)
        p.mb-0.px-5 Monto recibido

        .row.mt-4.align-items-center.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 7. 
              span Ejemplo de registro de ingresos

            .tabla-a.ajuste___tabla.mb-5.mt-4(data-aos="zoom-in")
              table
                thead
                  tr
                    th Fecha
                    th Concepto
                    th Monto recibido
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start 3 de enero

                    td.text-start Venta de plátano

                    td.text-end $500.000

                  tr(style="background-color: white")
                    td.text-start 7 de enero

                    td.text-start Venta de leche

                    td.text-end $200.000

                  tr(style="background-color: #F6F6F6")
                    td.text-start 12 de enero
                    td.text-start Subsidio programa agrícola
                    td.text-end $300.000
        

      div(titulo="Paso 2.  Anotar todos los costos")

        p.px-5 Se deben registrar todos los gastos directamente relacionados con la producción, como:

        ul.lista-ul--color.mt-2.px-5
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Semillas

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Abonos

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Herramientas

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Mano de obra

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Insumos para animales

        .row.mt-4.align-items-center.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 8. 
              span Ejemplo de registro de costos:

            .tabla-a.ajuste___tabla.mb-5.mt-4(data-aos="zoom-in")
              table
                thead
                  tr
                    th Fecha
                    th Concepto
                    th Monto recibido
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start 2 de enero

                    td.text-start Compra de abono orgánico

                    td.text-end $100.000

                  tr(style="background-color: white")
                    td.text-start 5 de enero

                    td.text-start Compra de alimento para vacas

                    td.text-end $80.000

                  tr(style="background-color: #F6F6F6")
                    td.text-start 10 de enero
                    td.text-start Pago de jornalero
                    td.text-end $150.000

      div(titulo="Paso 3. Anotar todos los gastos")

        p.px-5 Aquí se registran pagos que no van directo a la producción, pero que son necesarios para el funcionamiento de la finca:

        ul.lista-ul--color.mt-2.px-5
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Servicios públicos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Transporte.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Papelería.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Reparaciones o mantenimiento.


        .row.mt-4.align-items-center.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 8. 
              span Ejemplo de registro de costos:

            .tabla-a.ajuste___tabla.mb-2.mt-4
              table
                thead
                  tr
                    th Fecha
                    th Concepto
                    th Monto recibido
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start 8 de enero

                    td.text-start Pago de energía eléctrica

                    td.text-end $40.000

                  tr(style="background-color: white")
                    td.text-start 15 de enero

                    td.text-start Transporte a feria campesina

                    td.text-end $30.000


      div(titulo="Paso 4. Sumar todo")
        p.px-5 Una vez anotados todos los ingresos, costos y gastos, se deben hacer las sumas por separado:

        p.px-5.mb-0 #[b Total ingresos] = suma de todo el dinero que entró.
        p.px-5 #[b Total costos + Total gastos] = suma de todo lo que se gastó.

      div(titulo="Paso 5. Calcular el resultado")

        p.px-5.mb-0 Usando una fórmula sencilla, se determina si hubo ganancia o pérdida:
        p.px-5.mb-0 Ganancia o pérdida = Total ingresos − (Total costos + Total gastos)
        p.px-5.mb-0 Ejemplo de informe contable sencillo
        p.px-5 Don Anselmo llevó su registro del mes de enero. Estos son los totales:

        .row.mt-4.align-items-center.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 10. 
              span Costos totales 

            .tabla-a.ajuste___tabla.mb-5.mt-4
              table
                thead
                  tr
                    th Concepto
                    th Valor
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Total ingresos
                    td.text-end $1.000.000

                  tr(style="background-color: white")
                    td.text-start Total costos
                    td.text-end $330.000

                  tr(style="background-color: #F6F6F6")
                    td.text-start Total gastos
                    td.text-end $70.000
        
          
        p.mt-4.px-5.mb-0.fw-bold Cálculo del resultado:
        p.px-5 1.000.000 − (330.000 + 70.000) = 600.000

        p.px-5.mb-0.fw-bold Resultado final:
        p.px-5 Don Anselmo obtuvo una ganancia de $600.000 en el mes de enero.

    .titulo-tres.mt-5: h3 Consejos prácticos para elaborar un buen informe

    p.mt-4 Elaborar un informe contable campesino no requiere conocimientos avanzados, sino constancia, orden y claridad. A continuación, se presentan recomendaciones clave para hacerlo bien:


    .row.mt-4.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema5/img9.png', alt='', style="width: 610px").m-auto
      .col-lg-6
        .row.p-4.bg-6
          ul.lista-ul--color.mt-2.px-3
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Utilizar un cuaderno dividido en secciones: Ingresos, Costos y Gastos.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Registrar los movimientos económicos diariamente, con datos claros y completos.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Guardar recibos o comprobantes de compras importantes, para respaldar la información.


    .row.mt-4.align-items-center
      .col-lg-6
        .row.p-4.bg-17
          ul.lista-ul--color.mt-2.px-3
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Utilizar un cuaderno dividido en secciones: Ingresos, Costos y Gastos.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Registrar los movimientos económicos diariamente, con datos claros y completos.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Guardar recibos o comprobantes de compras importantes, para respaldar la información.

      .col-lg-6
        figure
          img(src='@/assets/curso/tema5/img10.png', alt='', style="width: 610px").m-auto


    p.mt-4 Un informe contable claro y bien llevado se convierte en una herramienta poderosa para fortalecer el bienestar y el crecimiento de la unidad productiva campesina.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 ¿Cómo interpretar los resultados para tomar decisiones?

    .row.align-items-center
      .col-lg-7
        p El informe contable no termina al realizar las sumas. Lo verdaderamente importante es interpretarlo, es decir, transformar los datos en decisiones útiles. No se trata solo de saber cuánto dinero hay, sino de entender lo que esos números revelan sobre el manejo de la finca.

        .row.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-23(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/img11.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p.fw-bold En palabras simples:

                p Interpretar es comprender cómo está la salud económica de la unidad productiva.

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema5/img12.png', alt='', style="width: 480px").m-auto


    .titulo-tres.mt-5: h3  Preguntas clave para reflexionar al interpretar el informe

    p.mt-4 Al revisar el informe contable, es útil hacerse las siguientes preguntas:

    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema5/img13.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b ¿Estoy ganando o perdiendo dinero?

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema5/img14.png", alt="alt", style="width: 92px").m-auto
          p.text-center
            b ¿Qué cultivos o actividades resultaron más rentables?

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema5/img15.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b ¿En qué rubros estoy gastando más de la cuenta?

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema5/img16.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b ¿Qué debo mejorar o cambiar para el próximo ciclo?



    .titulo-tres.mt-5: h3 Aspectos a analizar en el informe contable

    p.mt-4 A continuación, se resume los elementos que deben evaluarse al interpretar el informe:

    .row.bg-13
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema5/img17.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema5/img18.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Ganancia o pérdida

                    p.text-center.mb-0 Comparar los ingresos con los costos y gastos. Si sobra dinero, hubo ganancia; si falta, hubo pérdida.
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema5/img19.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Actividad más rentable	

                    p.text-center.mb-0 Identificar qué producto o actividad genera mayor ingreso con menor inversión.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema5/img20.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Gasto más alto

                    p.text-center.mb-0 Ver en qué se está destinando más dinero (transporte, insumos, mano de obra, etc.).


                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema5/img21.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Relación ingresos vs. egresos


                    p.text-center.mb-0 Evaluar si los ingresos crecen o si los costos y gastos están consumiendo las ganancias.


    .titulo-tres.m-neg: h3 Ejemplo de interpretación

    p.mt-4 Don Manuel llevó el control contable de su finca durante tres meses. Estos fueron sus resultados:

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 11. 
          span Ejemplo de interpretación

        .tabla-a.ajuste___tabla.mb-5.mt-4(data-aos="zoom-in")
          table
            thead
              tr
                th Concepto
                th Monto
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start Total ingresos

                td.text-end $2.500.000

              tr
                td.text-start Total costos

                td.text-end $1.500.000

              tr(style="background-color: #F6F6F6")
                td.text-start Total gastos

                td.text-end $400.000

              tr
                td.text-start Ganancia
                td.text-end $600.000

      .col-lg-4.d-flex.flex-column.justify-content-end.mt-4
        .row.p-4.bg-21
          p.mb-0.fw-bold Cálculo:
          p 3.200.000 − (1.000.000 + 250.000) = 1.950.000



    .titulo-tres.m-neg: h3 Interpretación sencilla

    p.mt-4 Don Manuel obtuvo una ganancia de $600.000. Sin embargo, considera que el margen fue bajo en relación con el esfuerzo invertido. Al analizar el informe, detecta que gastó más de $200.000 en transporte. Como medida, decide coordinar viajes compartidos con otros campesinos para reducir este gasto en el próximo ciclo. Las decisiones que pueden tomarse tras la interpretación son: 

    .row.bg-5.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Invertir en lo más rentable	

                    p Aumentar la producción de las actividades que dejan mayores ganancias (por ejemplo, cría de gallinas).


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema5/img22.png', alt='')


                
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Reducir gastos innecesarios	

                    p Disminuir egresos en rubros como transporte, servicios o compras poco útiles.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema5/img23.png', alt='')


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Buscar mejores precios de venta	

                    p Explorar nuevos mercados o mejorar la calidad del producto para aumentar ingresos.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema5/img24.png', alt='')


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Ahorrar parte de la ganancia	

                    p Destinar un porcentaje a un fondo para emergencias o inversiones futuras (herramientas, galpones, etc.).

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema5/img25.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Planificar el siguiente ciclo	

                    p Definir qué sembrar, cuánto invertir y qué esperar ganar, con base en los datos registrados.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema5/img26.png', alt='')


    .row.mt-4.align-items-center.bg-9.p-2
      .col-lg-2.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema4/img45.svg", alt="", style="width: 112px").m-auto

      .col-lg-10
        p.mb-0 
          b Consejo final

        p Interpretar el informe contable no es complicado. Basta con leer con atención, comparar los ingresos con los egresos y pensar en formas de mejorar. Un campesino que interpreta sus números no solo cultiva la tierra: también cultiva su futuro con sabiduría.




</template>

<script>
export default {
  name: 'Tema5',
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
