<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Registros contables de ingresos, costos y gastos en el contexto campesino

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-17(data-aos="fade-right")
          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema4/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
          .col-lg
            p Saber cuánto dinero entra, cuánto se invierte en producción y cuánto se gasta en el día a día es vital para entender la verdadera situación económica. Esta sección enseña, de manera muy práctica, cómo llevar un registro básico de los ingresos, los costos y los gastos, utilizando ejemplos que reflejan el trabajo campesino cotidiano. Con este conocimiento, se facilita la planificación y se protegen los resultados del esfuerzo familiar.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  ¿Qué son los ingresos en una unidad campesina? 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los #[b ingresos] son todo el dinero o beneficios que una familia campesina recibe gracias a su trabajo en la #[b tierra], en la #[b cría de animales] o en la #[b transformación de productos]. Representan los frutos del esfuerzo diario y permiten cubrir necesidades básicas, reinvertir en la finca y mejorar la calidad de vida familiar. Los ingresos son #[b todo lo que entra a la casa o a la finca] como resultado del trabajo campesino.

    .titulo-tres.mt-5: h3 ¿De dónde pueden venir los ingresos?

    p.mt-4 Los ingresos pueden tener múltiples fuentes. No provienen únicamente de la venta de cultivos. A continuación, se presentan las más comunes:

    .row.bg-13
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema4/img3.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img4.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Venta de productos agrícolas	

                    p.text-center.mb-0 Ingreso por vender cultivos como papa, plátano, yuca, fríjol, café o cacao.
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img5.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Venta de productos pecuarios	

                    p.text-center.mb-0 Dinero por vender animales como gallinas, cerdos, vacas, ovejas o cabras.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img6.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Transformación de productos	

                    p.text-center.mb-0 Ingreso adicional por procesar productos, como hacer arepas o tamales.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img7.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Servicios rurales	
	
                    p.text-center.mb-0 Pago recibido por alquilar caballos, carretas o maquinaria agrícola.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img8.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Apoyos o subsidios

                    p.text-center.mb-0 Incentivos de programas gubernamentales o de asociaciones campesinas.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img9.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Arrendamiento de tierras	

                    p.text-center.mb-0 Ingreso por alquilar parte de la parcela a otros campesinos.


    .titulo-tres.m-neg: h3 ¿Por qué es importante llevar el registro de los ingresos?

    p.mt-4 Registrar los ingresos permite:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img10.png', alt='', style="width: 400px").m-auto

      .col-lg-5
        .row.p-4.bg-2

          ul.lista-ul--color.mt-2.px-4
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Saber cuánto dinero se genera realmente.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Evitar la pérdida de control sobre el dinero que entra.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Planificar gastos productivos y familiares.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Ahorrar para épocas difíciles o emergencias.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Demostrar capacidad económica al solicitar un crédito.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Identificar actividades más rentables.



      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img11.png', alt='', style="width: 317px").m-auto

    .titulo-tres.mt-5: h3 Ejemplo de cálculo del patrimonio

    p.mt-4 Supongamos que, en el mes de abril, Don Pedro, un campesino, tuvo los siguientes ingresos:

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img12.png', alt='', style="width: 295px").m-auto
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3. 
          span Registro mensual de ingresos – Abril
        
        .table-responsive
          table.table.table-bordered.tabla-compacta
            thead 
              tr
                th Fecha
                th Concepto
                th Monto recibido 
            tbody
              tr(style="background-color: #F6F6F6 !important")
                td.text-center 2 de abril
                td Venta de 15 arrobas de café
                td.text-end $1.200.000

              tr
                td.text-center 8 de abril
                td Venta de 10 gallinas
                td.text-end $500.000

              tr(style="background-color: #F6F6F6 !important")
                td.text-center 15 de abril
                td Venta de 5 kilos de queso casero
                td.text-end $150.000

              tr
                td.text-center 20 de abril
                td Subsidio de programa agrícola
                td.text-end $300.000

              tr(style="background-color: #F6F6F6 !important")
                td.text-center 28 de abril
                td Alquiler de una parcela pequeña
                td.text-end $200.000

              tr
                td.text-center #[b Total]
                td
                td.text-end #[b $2.350.000]

    p.mt-4 Con esta información, Don Pedro puede #[b planear sus gastos], decidir cuánto invertir en semillas nuevas, cuánto ahorrar y cuánto destinar a otras necesidades.

    .titulo-tres.mt-5: h3 Recomendación práctica

    p.mt-4 Llevar un cuaderno sencillo o una libreta para anotar #[b ingresos y gastos], indicando:

    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj3(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img13.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Fecha.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj3(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img14.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Motivo.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj3(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img15.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Monto recibido.

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img16.png', alt='', style="width: 295px").m-auto

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 ¿Qué son los costos en una unidad campesina? 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando una familia campesina siembra, cría animales o transforma productos para vender, necesita realizar diversos #[b gastos necesarios para que el trabajo en la finca funcione]. A estos gastos se les llama costos.
        br
        br
        | En palabras simples: los #[b costos] son todo el #[b dinero que se invierte antes de cosechar o vender]. Sin esos gastos previos, no habría productos disponibles para el mercado.

    .titulo-tres.mt-5: h3 ¿Por qué es importante conocer bien los costos?

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img18.png', alt='', style="width: 295px").m-auto

      .col-lg-5
        .row.bg-12
          p Conocer bien los costos permite:

          ul.lista-ul--color.mt-2.px-4
            li.d-flex.align-items-start.p-1.bg-11
              span.icono-img
              p.mb-0 Calcular el precio de venta adecuado para los productos.

            li.d-flex.align-items-start.p-1.bg-11
              span.icono-img
              p.mb-0 Evaluar si la actividad es rentable o si necesita ajustes.

            li.d-flex.align-items-start.p-1.bg-11
              span.icono-img
              p.mb-0 Planificar mejor las compras de insumos para próximas producciones.

            li.d-flex.align-items-start.p-1.bg-11
              span.icono-img
              p.mb-0 Evitar deudas innecesarias y organizar mejor el dinero.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img19.png', alt='', style="width: 375px").m-auto


    .row.align-items-center.justify-content-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img20.png', alt='', style="width: 400px").m-auto

      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj2(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img21.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Costos directos

          p.text-center Son los que se pueden identificar fácilmente con un cultivo o producto específico.

          p.text-center #[b Ejemplo.] Compra de semillas, concentrado para pollos, pago a jornalero.

      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj2(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img22.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Costos indirectos	

          p.text-center Son gastos que apoyan varias actividades al mismo tiempo; No se asocian con un solo producto.

          p.text-center #[b Ejemplo.]  Electricidad de la finca, reparación de bomba de agua, compra de herramientas.


    .titulo-tres.mt-5: h3 Ejemplo: costos en la producción de maíz

    p.mt-4 Don Luis decide sembrar una hectárea de maíz. Estos son los gastos que realiza:

    .row.mt-4.align-items-center.justify-content-center
      
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4. 
          span Costos en la producción de maíz
        
        .table-responsive
          table.table.table-bordered.tabla-compacta
            thead 
              tr
                th Concepto
                th Tipo de costo
                th Valor 
            tbody
              tr(style="background-color: #F6F6F6 !important")
                td Compra de semillas de maíz
                td Costo directo

                td.text-end $200.000


              tr
                td Compra de fertilizante

                td Costo directo

                td.text-end $150.000


              tr(style="background-color: #F6F6F6 !important")
                td Alquiler de tractor

                td Costo directo

                td.text-end $250.000


              tr
                td Mano de obra para siembra

                td Costo directo

                td.text-end $100.000

              tr(style="background-color: #F6F6F6 !important")
                td Reparación del sistema de riego

                td Costo indirecto

                td.text-end $50.000



              tr
                td.text-center #[b Total de costos]
                td
                td.text-end #[b $750.000]

            
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img23.png', alt='', style="width: 295px").m-auto

    p.mt-4 Con estos datos, Don Luis sabe que debe vender su cosecha por más de $750.000 si quiere cubrir sus costos y generar una ganancia.

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img24.png', alt='', style="width: 500px").m-auto

      .col-lg-7
        .row.bg-11.p-3
          p Errores comunes que deben evitarse: 

          ul.lista-ul--color.mt-2.px-4
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 No registrar pequeños gastos, como abono o gasolina. Todos los gastos cuentan.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Olvidar los costos indirectos, como transporte o mantenimiento.

            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 No considerar el valor del trabajo familiar, que también debe ser calculado como parte del costo.


    .titulo-tres.mt-5: h3 Recomendación práctica

    p.mt-4 Llevar un cuaderno sencillo para anotar todos los costos, dividido por tipo de actividad si se cultivan o crían varios productos.

    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img25.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Fecha.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img26.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Qué se compró o pagó.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img27.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Para qué actividad se usó.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj4(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img28.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Cuánto se gastó.

    p.mt-4 Este registro permite conocer el costo #[b real de producir] y #[b mejorar las decisiones económicas] en la finca.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3  ¿Qué son los gastos en una unidad campesina?

    .row.align-items-center
      .col-lg-7
        p En la vida campesina, no todo el dinero que se utiliza está directamente ligado a sembrar, criar o producir. Existen otros pagos que se hacen para que la finca funcione bien y la familia pueda vivir con dignidad. Estos se llaman #[b gastos operativos o administrativos].

        .row.mt-4.p-2.bg-11
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema4/img29.svg", alt="", style="width: 79px").m-auto
          .col-lg-10
            p En palabras sencillas: los #[b gastos] son pagos necesarios para el #[b buen funcionamiento de la unidad campesina], pero #[b no están directamente ligados] a un cultivo o a una cría de animales.

        p.mt-4
          b ¿Cómo diferenciar costos y gastos?

        p Es fundamental distinguir entre costos y gastos al analizar las finanzas de una actividad económica, especialmente en contextos productivos como la agricultura o la ganadería. La diferencia principal radica en su relación con el proceso productivo.

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img30.png', alt='', style="width: 500px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img31.png', alt='', style="width: 400px").m-auto
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj5(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img32.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Costo

          p.text-center Se vincula directamente con el proceso de producción, como la siembra, cría o cosecha. Representa los desembolsos necesarios para generar un bien o servicio. 
	
          p.text-center.mb-3 #[b Ejemplo:] compra de semillas de maíz para sembrar.

      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad.h-tarj5(data-aos="flip-left")
          .mb-3
            figure
              img(src="@/assets/curso/tema4/img33.svg", alt="alt", style="width: 92px").m-auto
          p.text-center
            b Gasto

          p.text-center Corresponde a pagos que permiten el funcionamiento general del negocio, sin una relación directa con un producto específico. 

          p.text-center #[b Ejemplo: ] pago del servicio de energía eléctrica.
      
    p.mt-4 Ejemplos de gastos en una unidad campesina son: 

    .row.bg-13
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img35.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Servicios públicos	

                    p.text-center.mb-0 Pago de agua, luz o teléfono de la finca.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img36.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Transporte general	


                    p.text-center.mb-0 Dinero gastado para ir a ferias o mercados.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img37.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Papelería y administración	

                    p.text-center.mb-0 Compra de cuadernos o lápices para llevar registros.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img38.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Mantenimiento de instalaciones	

                    p.text-center.mb-0 Reparación del galpón de pollos o bodega de herramientas.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img39.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Alimentación y viático

                    p.text-center.mb-0 Comidas y hospedaje durante viajes de venta.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema4/img40.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Impuestos o tasas	

                    p.text-center.mb-0 Pago de impuestos municipales o registro en Cámara de Comercio.

              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema4/img34.png", alt="alt", style="width: 305px").m-auto

    .titulo-tres.m-neg: h3 ¿Por qué es importante registrar los gastos?


    .row.align-items-center.mt-4.justify-content-center
      .col-lg-7
        p.mt-4 Registrar los gastos es fundamental porque permite:
        .row.p-2.bg-6

          

          ul.lista-ul--color.mt-2.px-4
            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Llevar control del dinero y prevenir desequilibrios financieros.


            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Evitar confusiones al distinguir claramente entre costos y gastos reales.


            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Planificar de forma más precisa el presupuesto familiar y productivo.


            li.d-flex.align-items-start.p-1.bg-7
              span.icono-img
              p.mb-0 Comprender con claridad el estado financiero del negocio campesino.

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img41.png', alt='', style="width: 500px").m-auto

    .titulo-tres.mt-5: h3 Ejemplo de registro de gastos

    p.mt-4 Durante el mes de mayo, Don José y su familia llevaron un registro detallado de sus gastos. Esto les ayudó a identificar en qué se utilizó el dinero, detectar oportunidades de ahorro y organizar mejor los meses siguientes.

    .row.mt-4.align-items-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5. 
          span Registro de gastos – Familia de Don José (mayo)
        
        .tabla-a.ajuste___tabla.mb-5.mt-4(data-aos="zoom-in")
          table
            thead
              tr
                th Fecha
                th Concepto
                th Monto gastado
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start 5 de mayo

                td.text-start Pago de electricidad de la finca

                td.text-end $50.000

              tr
                td.text-start 10 de mayo

                td.text-start Transporte a feria campesina

                td.text-end $30.000


              tr(style="background-color: #F6F6F6")
                td.text-start 15 de mayo

                td.text-start Compra de papelería (cuadernos)
                td.text-end $10.000


              tr
                td.text-start 20 de mayo

                td.text-start Reparación de la cerca del corral

                td.text-end $40.000

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Total]
                td
                td.text-end #[b $130.000]

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img42.png', alt='', style="width: 480px").m-auto

    p.mt-4 Al llevar el registro de los gastos, es fundamental evitar equivocaciones que afectan el control del dinero y la toma de decisiones. Algunos de los más frecuentes son:

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img43.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.p-2.bg-8
          .col-lg-6.p-3
            .row.align-items-center.p-2.bg-23
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img44.svg", alt="", style="width: 49px").m-auto
              .col-lg-10
                p.mb-0 
                  b No anotar pequeños gastos 
                p Se subestima el impacto acumulado.

          .col-lg-6.p-3
            .row.align-items-center.p-2.bg-23
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img44.svg", alt="", style="width: 49px").m-auto
              .col-lg-10
                p.mb-0 
                  b Confundir gastos con costos

                p Se distorsiona el análisis financiero.

          .col-lg-6.p-3
            .row.align-items-center.p-2.bg-23
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img44.svg", alt="", style="width: 49px").m-auto
              .col-lg-10
                p.mb-0 
                  b Gastar más de lo que se ingresa

                p Se generan desequilibrios y posibles deudas.

        .row.mt-4.align-items-center.bg-9.p-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema4/img45.svg", alt="", style="width: 112px").m-auto

          .col-lg-10
            p.mb-0 
              b Consejo práctico
            p Así como se lleva un cuaderno para registrar los ingresos y otro para los costos, es recomendable tener un cuaderno exclusivo para anotar los gastos. Organizar estos tres elementos —ingresos, costos y gastos— es como sembrar orden en la finca: rinde frutos en forma de tranquilidad económica y una mejor proyección para la familia.



</template>

<script>
export default {
  name: 'Tema4',
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
