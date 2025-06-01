var config = {
    style: 'mapbox://styles/lgarsando/cmauyel4b003601sc6qx5cds5',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibGdhcnNhbmRvIiwiYSI6ImNtYW1xYWg3czA5b3MybXF3c2ZiYnNvcjcifQ.HoUdBNnW1MC4ZgZhlZrbFg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tradiciones vivas: un paseo por el patrimonio cultural inmaterial valenciano',
    subtitle: 'Desliza el ratón para avanzar en la narración interactiva',
    byline: 'Diseño y textos: Laura Garsando',
    footer: 'Fuente: Generalitat Valenciana. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La importancia del patrimonio inmaterial',
            image: 'https://ich.unesco.org/img/photo/thumb/05108-HUG.jpg',
            description: 'El patrimonio cultural inmaterial valenciano es rico y diverso. Constituye el alma viva de las tradiciones, que pasan de generación en generación, y se expresa en fiestas, música, gastronomía, lengua y saberes populares transmitidos oralmente. Este legado no tangible tiene un gran valor para la identidad colectiva valenciana, especialmente si contribuyen a difundir la lengua propia. Las administraciones tienen la capacidad legal de declarar como bien de interés cultural (BIC) aquellos que, por sus características singulares y relevancia para el patrimonio cultural, son objeto de las especiales medidas de protección, divulgación y fomento. Actualmente, la Generalitat registra 45 BIC inmateriales, aunque la lista está en constante actualización. Destacan las Fallas, la cabalgata de los Reyes Magos de Alcoy, el Sexenni de Morella o el Tribunal de las Aguas de València. <br><br><b> Foto:</b> Muixerangas durante las Fiestas de la Mare de Deu de la Salut d’Algemesí (Unesco).',
            location: {
                center: [-0.39281, 39.47211],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'center',
            hidden: false,
            title: '¿Cómo se reparten estos BIC en el territorio?',
            iframe: 'https://flo.uri.sh/visualisation/23347420/embed',
            description: 'El patrimonio inmaterial valenciano está repartido, aunque de forma desigual, de manera que algunas zonas y comarcas tienen más densidad. La provincia de Valencia es claramente la que más peso tiene y concentra la mitad de los BIC inmateriales, sobre todo en la capital (morado oscuro) y alrededores, como Torrent y Paterna. El resto de manifestaciones culturales se distribuyen entre Castellón y Alicante, pero es en las comarcas del sud donde se ve una presencia dominante, especialmente en Alcoy, Elche y Orihuela). Otro de los puntos clave está en el norte, donde destaca el peso del interior: el Alcalatén, el Alto Palancia y els Ports. Pero la mayoría de municipios aparecen pintados muy claros, lo que indica que no tienen declarado ningún BIC inmaterial.<br><br><b>Gráfico hecho con Flourish</b>',
            location: {
                center: [-0.39281, 39.47211],
                zoom: 8,
                pitch: 44.48,
                bearing: -70.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Fiestas populares, religión y expresiones artísticas',
            iframe: 'https://flo.uri.sh/visualisation/23357244/embed',
            description: 'El análisis por categorías refleja el peso de las celebraciones festivas en el patrimonio inmaterial valenciano, así como la fuerte influencia de la religión en las tradiciones populares. La riqueza cultural en la Comunitat Valenciana se manifiesta en múltiples formas: procesiones, celebraciones populares, instituciones centenarias, música tradicional, gastronomía, danzas…<br><br><b>Gráfico hecho con Flourish</b>',
            location: {
                center: [-0.39281, 39.47211],
                zoom: 9.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'El protagonismo de las Fallas',
            iframe: 'https://flo.uri.sh/visualisation/23346869/embed',
            description: 'Las Fallas son una de las expresiones culturales más emblemáticas y reconocidas del patrimonio inmaterial valenciano, que se celebran en marzo. Más allá de la espectacularidad visual, esta fiesta popular integra valores como la sátira, la creatividad artística, la participación comunitaria y la transmisión de tradiciones a través de generaciones. Aunque las Fallas de València son internacionalmente famosas y han sido declaradas Patrimonio Inmaterial de la Humanidad por la Unesco, lo cierto es que numerosos municipios de la Comunitat Valenciana celebran sus propias versiones, con identidad y elementos característicos. La Generalitat reconoce hasta cinco fiestas josefinas más en provincia de Valencia, fuera de la capital: Gandia, Alzira, Torrent, Xàtiva o Sueca han desarrollado una tradición fallera única que se adapta a sus contextos locales, pero comparte el mismo espíritu. Esta diversidad demuestra que las Fallas no son un fenómeno aislado, sino una manifestación cultural extendida y viva en todo el territorio.<br><br><b>Gráfico hecho con Flourish</b>',
            location: {
                center: [-0.39281, 39.47211],
                zoom: 8,
                pitch: 7.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'La Romeria de les Canyes y la procesión de las Gaiatas de Castellón de la Plana',
            iframe: 'https://www.youtube.com/embed/Slc_dNM4TWs?si=PznpqkdR6qfsHb9P',
            description: 'Son dos de los eventos más emblemáticos de las Fiestas de la Magdalena de Castellón de la Plana, que conmemoran el origen de la ciudad. Ambas tradiciones reflejan el fuerte vínculo entre historia, devoción e identidad colectiva del pueblo de Castellón. <br><br>La romería, una peregrinación tradicional a la ermita de la Magdalena, recuerda el recorrido fundacional que realizaron los y las castellonenses hasta el lugar donde se asentó inicialmente el núcleo poblacional. Los inicios se remontan a 1375, cuando surge como procesión penitencial medieval asociada a periodos de carestía, enfermedades o sequía. En 1750 se recuperó con un sentido cívico y conmemorativo del traslado de la población. Los participantes en la romería portan la característica caña alta adornada con una cinta de seda verde, símbolo de los antiguos pobladores. <br><br> Por su parte, la procesión de las Gaiatas es un desfile nocturno en el que las 19 comisiones de la ciudad exhiben estos monumentos luminosos, que simbolizan las antiguas farolas que guiaban a los peregrinos en su camino. Las gaiatas, cuyo concepto se definió en 1945 como "un esclat de llum sense foc ni fum" (una explosión de luz sin fuego ni humo), son el elemento distintivo de las Fiestas de la Magdalena.<br><br><b>Fuente:</b> Ayuntamiento de Castellón de la Plana',
            location: {
                center: [-0.0058212, 40.0346435],
                zoom: 11.5,
                pitch: 46.50,
                bearing: -71
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Tamborada de la Rompida de la Hora de l’Alcora',
            iframe: 'https://www.youtube.com/embed/wOS6qGgLgqg?si=yLKCZ0_uKSDYInpd',
            description: 'La Rompida de la Hora de l’Alcora es una sobrecogedora tradición que se celebra cada Viernes Santo a las 12:00 h, cuando más de mil tambores y bombos rompen el silencio en la plaza de España para expresar el dolor colectivo por la muerte de Cristo. Este acto, que une a todas las cofradías del municipio, comienza con cuatro toques simbólicos dados por una personalidad invitada, tras los cuales estalla un estruendo que envuelve a vecinos y visitantes en una intensa experiencia sonora y emocional. La celebración continúa con una procesión hasta la Iglesia y culmina con una nueva rompida iniciada por el párroco. Desde su origen en 1991, la Rompida se ha convertido en uno de los momentos más intensos de la Semana Santa valenciana.<br><br><b>Reportaje:</b> CastellónPlaza',
            location: {
                center: [-0.2142146, 40.0746619],
                zoom: 12.5,
                pitch: 62,
                bearing: -49.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'La paella valenciana',
            iframe: 'https://www.youtube.com/embed/8RqtpXqPItA?si=2Ax8Wtfu_4Zsal8y',
            description: 'Es el plato más icónico e internacional de la gastronomía valenciana, símbolo de reunión familiar y celebraciones. Su preparación es todo un ritual social, donde el cocinero conversa con los comensales mientras prepara la receta. Aunque existen variaciones, la paella tradicional lleva pollo, conejo y verduras locales, incluyendo ingredientes únicos como el garrofón o la tabella ―un tipo de alubia blanca―. El arroz debe ser de València con Denominación de Origen. Tradicionalmente se cocina con fuego de leña, aunque se puede adaptar a cualquier cocina. Acompañarla con vino valenciano, mistela y coca completa esta experiencia única. ¡Un viaje gastronómico a la Comunitat Valenciana que te transporta a través de los sentidos!<br><br><b>Fuente:</b> Turisme Comunitat Valenciana',
            location: {
                center: [-0.323522528248168, 39.476533469877232],
                zoom: 12.5,
                pitch: 77.8,
                bearing: -87.59
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'El toque manual de campanas en el Micalet',
            iframe: 'https://www.youtube.com/embed/ysbWmo3lgII',
            description: 'Los toques manuales de campanas en la Comunitat Valenciana forman parte esencial del paisaje sonoro y cultural de diversas localidades, entre las que está València, con su mítica torre del Micalet. Estos sonidos, profundamente enraizados en la tradición, han servido históricamente como medio de comunicación comunitaria, marcando el tiempo, anunciando fiestas o lutos, y reforzando la identidad local. El toque más específico de las grandes fiestas valencianas es el volteo de la campana mayor, alternado y combinado con los “trancs” ―acordes al unísono de las demás campanas de la torre―, con el contratiempo rítmico del repique del tiple o campana más aguda. Aunque la mecanización provocó la pérdida de muchos toques tradicionales, algunos campanarios mantuvieron viva la tradición. Hoy, gracias a la labor de nuevos grupos de campaneros, esta manifestación cultural ha resurgido y es considerada un modelo de patrimonio inmaterial digno de especial protección.<br><br><b>Fuente:</b> Ministerio de Cultura',
            location: {
                center: [-0.3756225, 39.4753165],
                zoom: 16.5,
                pitch: 25.63,
                bearing: -84.92
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'El belén de Tirisiti de Alcoy',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Betlem_de_Tirisiti.jpg/800px-Betlem_de_Tirisiti.jpg',
            description: 'El Belén de Tirisiti es un montaje teatral con títeres de palo que se realiza en la ciudad de Alcoy durante la época navideña. El origen de esta tradición daya de finales del siglo XIX. Como en otras poblaciones valencianas, al llegar la Navidad también se exponían belenes en barracones de ferias, al menos a partir de la década de 1870, en plena industrialización. Alcoy, de hecho, fue la primera ciudad valenciana donde triunfó la revolución. Actualmente, el Belén de Tirisiti es propiedad del pueblo, se custodia en el Ayuntamiento y está representado por la compañía de teatro La Dependent. <br><br>Consta de 2 actos diferenciados con una duración aproximada de 30 minutos. En cada parte la narradora cuenta la historia e interactúa con los personajes de la obra y con el público. También reproduce el mismo texto de los personajes para que el público pueda entenderlos, ya que utilizan lengüeta para hablar. Durante la obra se interpretan diferentes villancicos populares y música hecha específicamente para esta representación como <i>Barrabàs</i> o <i>A la run run</i>.<br><br> <b>Fuente:</b> Web de Tirisiti',
            location: {
                center: [-0.4739173, 38.69816],
                zoom: 14.5,
                pitch: 21.5,
                bearing: -12.94
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Las Fogueres de Sant Joan de Alicante',
            iframe: 'https://www.youtube.com/embed/oCEcl4_f2Lo?si=H86Siy68rmTeNNbq',
            description: 'Son las fiestas oficiales de la ciudad de Alicante y se celebran del 20 al 24 de junio. Tienen su origen en las celebraciones precristianas que se realizaban en torno al solsticio de verano, y que una vez asimiladas al culto cristiano, se celebraron en toda Europa en honor de san Juan Bautista. En Alicante, las primeras noticias que se tienen de estas celebraciones son del siglo XIX. Encontramos sus raíces en una antigua costumbre de quemar objetos no deseados durante el solsticio de verano, pero en la actualidad se han convertido en una fiesta popular con una fuerte carga cultural y artística, similar a las Fallas. Es una explosión de alegría, color, música y fuegos artificiales para celebrar la llegada de la estación estival. La fiesta incluye la creación de monumentos de arte efímero, mascletás, la ofrenda de flores a la Virgen del Remedio y la famosa noche de la Cremà, cuando las hogueras son quemadas.<br><br><b>Fuente:</b> Hogueras.com',
            location: {
                center: [-0.4881708, 38.3436365],
                zoom: 14.5,
                pitch: 40.44,
                bearing: 46.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
