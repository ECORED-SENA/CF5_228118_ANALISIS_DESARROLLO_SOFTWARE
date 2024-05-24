export default {
  global: {
    componenteFormativo: 'Validación de documentos ',
    descripcionCurso:
      'La validación de documentos son aquellos instrumentos que permiten verificar el estado de un proceso específico de manera detallada. Son tomados como punto de referencia para tener una acertada toma de decisiones dentro del proceso que se ejecutará o el sistema que se está diseñando.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: 'Informe de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Proceso de búsqueda de la información, evaluación y síntesis de las fuentes',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instrumentos de medición o verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lista de chequeo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cálculo de métricas de <i>software</i>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Trazabilidad ',
      referencia:
        'Datko, C., & Carllinni, Y. (2014). Derivación de requisitos y construcción de trazabilidad entre artefactos del proceso de desarrollo. In XLIII Jornadas Argentinas de Informática e Investigación Operativa (43JAIIO)-XVII Concurso de Trabajos Estudiantiles (EST).',
      tipo: 'Otro',
      link:
        'https://webcache.googleusercontent.com/search?q=cache:sfsgC82GPXMJ:https://43jaiio.sadio.org.ar/proceedings/EST/3_759-2539-1-DR.pdf+&cd=1&hl=es&ct=clnk&gl=co',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad de expansión',
      significado:
        'el grado con que se pueden aumentar el diseño arquitectónico, de datos o procedimental.',
    },
    {
      termino: 'Complexión',
      significado:
        'el grado con que sé a logrado la implementación total de una función.',
    },
    {
      termino: 'Concisión',
      significado:
        'lo compacto que resulta ser el programa en términos de líneas de código.',
    },
    {
      termino: 'Consistencia',
      significado:
        'el uso de un diseño uniforme y de técnicas de documentación, a través del proyecto de desarrollo del <i>software.</i>',
    },
    {
      termino: 'Eficiencia de ejecución',
      significado: 'el rendimiento del funcionamiento de un programa.',
    },
    {
      termino: 'Estandarización de comunicaciones',
      significado:
        'el nivel de empleo de estándares de interfaces, protocolos y anchos de banda.',
    },
    {
      termino: 'Estandarización de datos',
      significado:
        'el empleo de estructuras y tipos de datos estándares a lo largo del programa.',
    },
    {
      termino: 'Exactitud',
      significado: 'la exactitud de los cálculos y del control.',
    },
    {
      termino: 'Facilidad de auditoría',
      significado:
        'la facilidad con la que se puede justificar el cumplimiento de los estándares.',
    },
    {
      termino: 'Formación',
      significado:
        'el grado en que el <i>software</i> ayuda a los nuevos usuarios a manejar el sistema.',
    },
    {
      termino: 'Generalidad',
      significado:
        'la extensión de aplicación potencial de los componentes del programa.',
    },
    {
      termino: 'Independencia del <i>hardware</i>',
      significado:
        'el grado con que se desacopla el <i>software</i> del <i>hardware</i> donde opera.',
    },
    {
      termino: 'Instrumentación',
      significado:
        'el grado con que el programa vigila su propio funcionamiento e identifica los errores que suceden.',
    },
    {
      termino: 'Modularidad',
      significado: 'la independencia funcional de componentes de programa.',
    },
    {
      termino: 'Operatividad',
      significado: 'la facilidad de operación de un programa.',
    },
    {
      termino: 'Tolerancia al error',
      significado: 'el deterioro causado cuando un programa descubre un error.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'la capacidad de alcanzar una representación del diseño o un componente real del programa, hasta los requisitos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta-Hoyos, L. E. (1972). Guía práctica para la investigación y redacción de informes (Vol. 146). Editorial Paidós. ',
    },
    {
      referencia:
        'Ayabaca, L. P., & Bernal, S. M. (2017). Verificación y Validación de <i>Software</i> <i>Software</i> Verification and Validation. Revista Killkana Técnica. Vol, 1(3). ',
    },
    {
      referencia:
        'Bichachi, D. S. (2004). El uso de las listas de chequeo (CHECK-LIST) como herramienta para controlar la calidad de las leyes. Recuperado de:',
      link: 'https://claudiabernazza.ar/ssgp/html/pdf/check_list.pdf',
    },
    {
      referencia:
        'Botta, M., de Roig, N. F., & Izaguirre, I. (2002). Tesis, monografías e informes: nuevas normas y técnicas de investigación y redacción. Biblos. ',
    },
    {
      referencia:
        'Dorrego, E. (1994). Modelo para la producción y evaluación formativa de medios instruccionales, aplicado al video y al <i>software</i>. Revista de Tecnología Educativa, 12(3), 313-327. ',
    },
    {
      referencia:
        'Espinoza Freire, E. E. (2018). Las variables y su operacionalización en la investigación educativa. Parte I. Conrado, 14, 39-49. ',
    },
    {
      referencia:
        'Espinoza Montes, C. (2010). Metodología de investigación tecnológica. ',
    },
    {
      referencia:
        'Hernandez, F., Roldán, M. L., Vegetti, M. M., Gonnet, S. M., & Leone, H. P. (2015). TracEDaaS: Captura y Trazabilidad de Artefactos del Proceso de Diseño. ',
    },
    {
      referencia:
        'López Bartolomé, C. (2014). El desarrollo de <i>software</i> Open Source analizado desde dentro (Bachelor&#39;s thesis). ',
    },
    {
      referencia:
        'Pájaro, D. (2002). La formulación de hipótesis. Cinta de Moebio. Revista de Epistemología de Ciencias Sociales, (15). ',
    },
    {
      referencia:
        'Pereira, B., Ayaach, F., Quintero, H., Granadillo, I., & Bustamante, J. (2012). Métricas de calidad de <i>software</i>. Calidad Del <i>Software</i>. ',
    },
    {
      referencia:
        'Perez Quintero, C. I. (2019). Implementación del modelo Mccall para medir la calidad del <i>software</i> Siplan (Doctoral dissertation). ',
    },
    {
      referencia:
        'Romero Alvarado, W. A. (2018). Los instrumentos de verificación y su incidencia en el control de los procesos productivos de la paletera Armijos. ',
    },
    {
      referencia:
        'Tabares, M. S., Barrera, A. F., Arroyave, J. D., & Pineda, J. D. (2007). Un método para la trazabilidad de requisitos en el proceso unificado de desarrollo. Revista EIA, (8), 69-82. ',
    },
    {
      referencia:
        'Torres, M., Salazar, F. G., & Paz, K. (2019). Métodos de recolección de datos para una investigación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Fernando Meneses Calvache',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
