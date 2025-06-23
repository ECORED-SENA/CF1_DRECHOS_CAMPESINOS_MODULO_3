<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Contabilidad y gestión financiera en unidades campesinas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos fundamentales sobre la economía campesina, los registros contables y la normativa contable y tributaria aplicables a las unidades productivas rurales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales objetivos de la economía campesina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la seguridad alimentaria y la sostenibilidad comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acumular riqueza y expandirse internacionalmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maximizar las ganancias individuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el trabajo familiar en el campo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Opción a)\tTrabajo empresarial y corporativo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trabajo mecanizado y automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trabajo familiar y comunitario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Trabajo tercerizado por grandes empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Opción a)\tLey 100 de 1993.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 2420 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Código de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley de Agricultura Familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Opción a)\tHerramientas, tierra y ganado.\tx',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las deudas con proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los gastos en alimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La inversión en transporte público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Opción a)\tPréstamo bancario para compra de maquinaria.\tx',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venta de productos en la feria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ahorros guardados para fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cosecha de frijol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Opción a)\tSuma de ingresos y egresos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activos menos pasivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Costos más gastos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ingresos multiplicados por producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Opción a)\tDocumento para registrar solo ingresos mensuales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Resumen de ingresos, costos y gastos de la unidad productiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registro de deudas e inversiones bancarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contrato de compra de insumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Opción a)\tVenta de productos agrícolas.\tx',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pago de servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compra de semillas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reparación de herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Opción a)\tReparación de la bomba de agua usada en varios cultivos.\tx',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compra de semillas de maíz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pago al jornalero en la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra de concentrado para pollos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Opción a)\tCompra de abono para el cultivo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pago de energía eléctrica de la finca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Venta de productos artesanales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra de alimentos para animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Opción a)\tFalso',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Opción a)\tFalso\tx',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Opción a)\tFalso',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Opción a)\tFalso\tx',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Opción a)\tFalso',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
