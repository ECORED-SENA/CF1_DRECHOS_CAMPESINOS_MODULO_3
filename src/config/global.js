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
      termino: 'Ingreso',
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
        'http://biblioteca.municipios.unq.edu.ar/modules/mislibros/archivos/La_economia_del_traba.pdf',
    },
    {
      referencia:
        'UPRAColombia. (2024). <em>Caracterización y tipologías de la agricultura campesina, familiar y comunitaria</em> [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=9hgCFR98d7Y"',
    },
    {
      referencia:
        'Blake, L. , Chohan, J., y Escobar, M. P. (2023). Agro-extractivism and neoliberal conservation: Campesino abandonment in the Boyacá páramos, Colombia. <em>Journal of Rural Studies</em>.',
      link: '',
    },
    {
      referencia:
        'Chohan, J. (2024). The corporate food regime in conflict zones: Armed violence and agriculture in the Zona de Reserva Campesina-Valle del Río Cimitarra, Colombia. <em>Geoforum</em>.',
      link: '',
    },
    {
      referencia:
        'Chohan, J., Téllez, J., Eisler, M., et al. (2023). Agropastoralism and re-peasantisation: The importance of mobility and social networks in the páramos of Boyacá, Colombia. <em>Agriculture and Human Values</em>.',
      link: '',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2015). <em>Derechos de los campesinos colombianos</em>. Delegada para Asuntos Agrarios y Tierras.',
      link: 'https://www.defensoria.gov.co"',
    },
    {
      referencia:
        'Fraser, N. (2023). <em>Capitalismo caníbal</em> (1.ª ed.). Ciudad Autónoma de Buenos Aires: Siglo Veintiuno Editores.',
      link: '',
    },
    {
      referencia:
        'HLPE. (2017). <em>La nutrición y los sistemas alimentarios</em>. Grupo de alto nivel de expertos en seguridad alimentaria y nutrición del Comité de Seguridad Alimentaria Mundial.',
      link: '',
    },
    {
      referencia:
        'La Vía Campesina. (2021). <em>El caminar del feminismo campesino y popular en La Vía Campesina</em>.',
      link: '',
    },
    {
      referencia:
        'Marcha Mundial de Mujeres. (2023). <em>La economía feminista como herramienta política de la Marcha Mundial de las Mujeres</em>.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, F. , Erazo, V., y Rendón, J. A. (2025). <em>Documento de preparación: Visita temática sobre mujeres campesinas y populares</em>. CampeSENA - Full Popular y Proyecto de caracterización economía campesina y popular. Documento de trabajo no publicado.',
      link: '',
    },
    {
      referencia:
        'Rosset, P. (s.f.). <em>Metodología “de campesino a campesino”</em>. Propuesta para el SENA.',
      link: '',
    },
    {
      referencia:
        'Sembradoras de Vida y Resistencia. (2024). <em>Cartilla de la Escuela Feminista de la Alianza por la Soberanía Alimentaria de los Pueblos de América Latina y el Caribe</em>.',
      link: '',
    },
    {
      referencia:
        'SENA. (2024). <em>Caracterización de la población de la economía campesina: Departamento de Boyacá</em>. Servicio Nacional de Aprendizaje - SENA, Dirección de Promoción y Relaciones Corporativas.',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2025). <em>Agricultura campesina: una promesa para el futuro</em>.',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2025). <em>Hambre Cero: el campo</em>. Documento de trabajo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Catalina Córdova ',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia	',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo	Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
