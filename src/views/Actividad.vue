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
      titulo_reprobado: 'VUELVA A INTENTARLO.',
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
          texto: '¿Qué tipo de trabajo predomina en la economía campesina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trabajo empresarial y corporativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trabajo mecanizado y automatizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajo familiar y comunitario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Trabajo tercerizado por grandes empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué norma regula la contabilidad de microempresas en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 2420 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Código de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley de Agricultura Familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué se considera un activo en una unidad campesina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Herramientas, tierra y ganado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las deudas con proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los gastos en alimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La inversión en transporte público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de las siguientes opciones es un pasivo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Préstamo bancario para compra de maquinaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Venta de productos en la feria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ahorros guardados para fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cosecha de frijol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cómo se calcula el patrimonio en una unidad campesina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suma de ingresos y egresos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Activos menos pasivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos más gastos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ingresos multiplicados por producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es un informe contable en el contexto campesino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documento para registrar solo ingresos mensuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Resumen de ingresos, costos y gastos de la unidad productiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registro de deudas e inversiones bancarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contrato de compra de insumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un ingreso para una unidad campesina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venta de productos agrícolas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pago de servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra de semillas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reparación de herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es un costo indirecto en la producción campesina?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reparación de la bomba de agua usada en varios cultivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Compra de semillas de maíz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pago al jornalero en la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compra de concentrado para pollos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes acciones representa un gasto en una unidad campesina?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compra de abono para el cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pago de energía eléctrica de la finca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Venta de productos artesanales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compra de alimentos para animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las mujeres desempeñan un papel importante en la comercialización de productos campesinos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las unidades campesinas están obligadas a pagar impuestos desde el inicio de sus actividades.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Llevar registros contables ayuda a tomar mejores decisiones económicas en la unidad campesina.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los costos son gastos generales no relacionados directamente con la producción.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un informe contable puede ayudar a acceder a créditos y apoyos gubernamentales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
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
