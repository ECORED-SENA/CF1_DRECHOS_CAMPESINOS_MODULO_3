export default {
  global: {
    Name: 'Reconocimiento financiero y contable en contextos campesinos',
    Description:
      'Este componente formativo promueve el fortalecimiento de capacidades contables y financieras en contextos campesinos, abordando el reconocimiento de activos, pasivos, ingresos, costos y patrimonio. También orienta sobre normas contables y tributarias, elaboración de informes económicos y toma de decisiones con base en registros sencillos, prácticos y contextualizados para fomentar la sostenibilidad de las unidades productivas rurales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La economía campesina: el trabajo como motor de vida',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Normas contables y tributarias aplicables a las unidades campesinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Principales normas contables aplicables a unidades campesinas',
            hash: 't_2_2',
          },
          {
            numero: '2.2',
            titulo: 'Aspectos tributarios básicos para unidades campesinas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Obligaciones legales según el tamaño y tipo de actividad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Registros contables de activos, pasivos y patrimonio en el contexto campesino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Qué son los activos en una unidad campesina?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '¿Qué son los pasivos en una unidad campesina?',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '¿Qué es el patrimonio en una unidad campesina?',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Registros contables de ingresos, costos y gastos en el contexto campesino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Qué son los ingresos en una unidad campesina?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '¿Qué son los costos en una unidad campesina?',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '¿Qué son los gastos en una unidad campesina?',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Cómo elaborar e interpretar informes contables y financieros campesinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '¿Qué es un informe contable?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              '¿Qué se necesita para hacer un informe contable o balance de la economía campesina?',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: '¿Cómo interpretar los resultados para tomar decisiones?',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El campesinado',
      referencia:
        'González, D. (2018). .El campesinado y el arte de la agricultura. Un manifiesto chayanoviano de Jan Douwe van der Ploeg.',
      tipo: 'Articulo',
      link:
        'https://www.researchgate.net/publication/329861429_El_campesinado_y_el_arte_de_la_agricultura_Un_manifiesto_chayanoviano_de_Jan_Douwe_van_der_Ploeg',
    },
    {
      tema: 'Reforma agraria',
      referencia:
        'Jorge Eduardo Londoño Ulloa. (2024). Profesor Jan Douwe Van Der Ploeg - Podcast con Fundamento [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=BAOLNAu_OYA&amp;ab_channel=JorgeEduardoLondo%C3%B1oUlloa',
    },
    {
      tema: 'CampeSENA',
      referencia:
        'Jorge Eduardo Londoño Ulloa. (2024). La visita del profesor Jan Douwe van der Ploeg.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=CP3E0yVTGds&amp;ab_channel=JorgeEduardoLondo%C3%B1oUlloa',
    },
    {
      tema: 'Reforma Agraria y la soberanía alimentaria',
      referencia:
        'Jorge Eduardo Londoño Ulloa. (2024). Estrategia CampeSENA, su aporte a la Reforma Agraria y la soberanía alimentaria [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Nky7NZlN6v4&amp;ab_channel=JorgeEduardoLondo%C3%B1oUlloa',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'bien o recurso que posee una unidad productiva y que contribuye a la generación de ingresos.',
    },
    {
      termino: 'Costo',
      significado:
        'gasto necesario para la producción de bienes o servicios, directamente relacionado con la actividad productiva.',
    },
    {
      termino: 'Gasto',
      significado:
        'salida de dinero destinada al funcionamiento general de la unidad productiva, sin relación directa con la producción.',
    },
    {
      termino: 'Informe contable',
      significado:
        'documento que resume los ingresos, costos y gastos de una unidad productiva durante un período determinado.',
    },
    {
      termino: 'Ingreso:',
      significado:
        'dinero o beneficios recibidos como resultado del trabajo productivo realizado en el campo.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación o deuda que una unidad productiva debe pagar en determinado momento.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'valor neto resultante de restar los pasivos a los activos de una unidad productiva.',
    },
    {
      termino: 'Registro contable',
      significado:
        'anotación sistemática de las transacciones económicas que realiza una unidad productiva.',
    },
    {
      termino: 'RUT (Registro Único Tributario)',
      significado:
        'documento emitido por la DIAN que identifica a los contribuyentes y sus obligaciones tributarias.',
    },
    {
      termino: 'Unidad campesina',
      significado:
        'forma de organización económica en el campo basada en el trabajo familiar y comunitario.',
    },
  ],
  referencias: [
    {
      referencia:
        'FIAN International. (2020). <em>Cocinemos agendas políticas</em>.',
      link: 'https://www.fian.org/files/files/ES-TheCommonPot-21-WEB.pdf',
    },
    {
      referencia:
        'FIAN International. (2024). <em>Sembradoras de vida y resistencia</em>.',
      link:
        'https://fian.org/files/is/htdocs/wp11102127_GNIAANVR7U/www/files/cartilla%20fian%20maqueta%20final%20-%20EBOOK-ES_compressed.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2018). <em>Declaración sobre los derechos de los campesinos y de otras personas que trabajan en las zonas rurales</em>. Consejo de Derechos Humanos.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2017). <em>Resolución 464 de 2017</em>. Diario Oficial. ',
      link:
        'https://www.suin-juriscol.gov.co/clp/contenidos.dll/Resolucion/30051441?fn=document-frame.htm$f=templates$3.0"',
    },
    {
      referencia:
        'Universidad Nacional de Quilmes. (s. f.). <em>La economía del trabajo</em>. ',
      link:
        'http://biblioteca.municipios.unq.edu.ar/modules/mislibros/archivos/La_economia_del_traba.pdf"',
    },
    {
      referencia:
        'UPRAColombia. (2024). <em>Caracterización y tipologías de la agricultura campesina, familiar y comunitaria</em> [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=9hgCFR98d7Y"',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
