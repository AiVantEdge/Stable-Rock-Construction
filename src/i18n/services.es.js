/* Spanish service content. Only translated text lives here; it is merged over the
   English base (services.js) so image paths, focus, and zoom are never duplicated. */
import { SERVICE_CONTENT } from '../data/services.js';

function mergeDeep(base, over) {
  if (over === null || typeof over !== 'object' || Array.isArray(over)) return over;
  const out = { ...base };
  for (const k in over) {
    out[k] = (base && typeof base[k] === 'object' && !Array.isArray(base[k]) && base[k] !== null)
      ? mergeDeep(base[k], over[k]) : over[k];
  }
  return out;
}

const ES = {
  roofing: {
    label: 'Techos', crumb: 'Techos', h1: ['Techos en Miami', 'y los Cayos'], answerEyebrow: 'Respuesta Directa',
    answer: 'La mayoría de los techos planos del sur de Florida se reemplazan a los 15 a 20 años.',
    paras: [
      'Si el suyo tiene agua estancada, ampollas o filtraciones en las uniones, una reparación le da una temporada. Un sistema nuevo le da décadas. Inspeccionamos gratis y le decimos cuál necesita de verdad. Sin tácticas de miedo.',
      'Cada techo que construimos se revisa igual que nuestro dueño revisa el trabajo de otros contratistas, porque ese también es su oficio.',
    ],
    scope: ['Sistemas planos y de baja pendiente', 'Remoción total y retecho', 'Torch-down (bitumen modificado)', 'Techos de metal', 'Recubrimientos reflectivos', 'Reparación de filtraciones'],
    steps: [
      ['Inspección gratis', 'Nos subimos al techo, fotografiamos lo que encontramos y le decimos con claridad qué necesita.'],
      ['Alcance y precio por escrito', 'Un estimado, detallado, con el sistema y la garantía especificados.'],
      ['Permiso y programación', 'Sacamos el permiso y le damos la fecha del equipo por escrito.'],
      ['Instalación e inspección', 'Construido como un inspector espera verlo, y al final lo recorremos con usted.'],
    ],
    beforeAfter: {
      title: 'De teja a metal de costura alzada, el mismo techo.',
      caption: 'Retecho en Hialeah. Se quitó la teja vieja, se reclavó y se secó la cubierta, y se colocaron paneles de metal nuevos. Arrastre para comparar.',
      beforeAlt: 'Techo de teja roja desgastado antes del reemplazo en Miami-Dade',
      afterAlt: 'Techo nuevo de metal de costura alzada después del reemplazo en Miami-Dade',
    },
    beforeAfterWide: {
      caption: 'La misma casa desde el aire: teja fallada y sección plana parchada, luego un sistema de metal continuo. Arrastre para comparar.',
      beforeAlt: 'Vista aérea de un techo de teja fallado, pelado hasta el fieltro antes del reemplazo',
      afterAlt: 'Vista aérea del techo de metal de costura alzada terminado en la misma casa',
    },
    heroAlt: 'Techo de metal de costura alzada en una casa moderna frente al mar en Miami al atardecer',
    close: '¿Quiere saber qué necesita realmente su techo?', closeCta: 'Solicite una inspección gratis',
    faqs: [
      ['¿Cuánto dura un techo plano en el sur de Florida?', 'La mayoría de los sistemas planos y de baja pendiente duran de 15 a 25 años. El sol, el calor y el agua estancada son lo que los desgasta, así que un techo torch-down o de bitumen modificado queda en el rango bajo y uno de metal en el alto. Le decimos con honestidad en qué punto está el suyo.'],
      ['¿Necesito permiso para reemplazar mi techo en Miami-Dade?', 'Sí. Todo retecho en Miami-Dade requiere permiso y pasa por inspecciones, y los materiales deben tener un Notice of Acceptance (NOA) de Miami-Dade y cumplir el código de la Zona de Huracanes de Alta Velocidad (HVHZ). Nosotros sacamos el permiso y manejamos las inspecciones por usted.'],
      ['¿Qué es la regla del 25% del techo en Florida?', 'Según el Código de Construcción de Florida, si se repara o reemplaza más del 25% de un techo en 12 meses, esa sección generalmente debe llevarse al código actual en lugar de solo parcharse. Le avisamos por adelantado si su reparación cruza esa línea.'],
      ['¿Cuánto tarda un retecho?', 'Un retecho típico de casa unifamiliar toma de unos días a unas dos semanas, según el tamaño, el sistema y el clima. Le damos la fecha del equipo y el cronograma por escrito antes de empezar.'],
      ['¿Un techo nuevo baja mi seguro o me ayuda a tener cobertura?', 'Con frecuencia, sí. La edad del techo y una inspección de mitigación de viento son dos de los factores que más miran las aseguradoras en el sur de Florida, y un techo nuevo a código suele ayudar con ambos. Construimos según lo que busca esa inspección.'],
      ['¿Cuánto cuesta un techo nuevo en el sur de Florida?', 'Depende del tamaño, del sistema (plano/torch-down, metal o teja), de la forma y el acceso del techo, y del estado de la cubierta una vez que la abrimos. El metal cuesta más al inicio que un sistema plano, pero dura mucho más. En vez de adivinar, inspeccionamos gratis y le damos un precio por escrito y detallado.'],
      ['¿La aseguradora puede cancelarme solo porque el techo es viejo?', 'En Florida, por lo general no pueden negar ni no-renovar solo por la edad si el techo tiene menos de 15 años. A los 15+ años (o tras una inspección de 4 puntos fallada, normalmente cerca de los 20) sí pueden exigir reemplazo o negar cobertura. Una inspección de mitigación de viento suele ser lo que mantiene asegurable un techo viejo pero sano, y construimos y documentamos para eso.'],
      ['¿Un NOA de Miami-Dade es lo mismo que Florida Product Approval?', 'No, y confundirlos hace fallar los permisos. En la Zona de Huracanes de Alta Velocidad (Miami-Dade y Broward) los productos de techo deben tener un Notice of Acceptance (NOA) de Miami-Dade, más estricto que la aprobación estatal. Aquí solo instalamos sistemas conformes a NOA.'],
    ],
  },
  plumbing: {
    label: 'Plomería', crumb: 'Plomería', h1: ['Plomería que', 'paga una sola vez'], answerEyebrow: 'Respuesta Directa',
    answer: 'Si sus tuberías son de acero galvanizado o hierro fundido, está a tiempo prestado.',
    paras: [
      'Muchas casas antiguas del sur de Florida se construyeron con tubería que se oxida por dentro. Lo nota como agua marrón, poca presión o una fuga bajo la losa que aparece como un punto tibio en el piso. Primero pasamos cámara por la línea y luego le decimos si es reparación o un cambio completo de tubería.',
      'Como también tenemos la licencia general, abrimos la pared, hacemos el trabajo y la cerramos de nuevo. No lo dejamos contratando a otro para parchar el drywall.',
    ],
    scope: ['Recambio completo de tubería en PEX o cobre', 'Detección de fugas en losa y pared', 'Limpieza de drenajes e inspección con cámara', 'Reemplazo de calentadores, con tanque o sin tanque', 'Reemplazo de llaves y válvulas', 'Rough-in completo para obra nueva y remodelaciones'],
    steps: [
      ['Diagnóstico gratis', 'Encontramos el origen real en vez de adivinar por el síntoma.'],
      ['Alcance y precio por escrito', 'Reparación o recambio, cotizados de las dos formas cuando ambas son opciones honestas.'],
      ['Permiso y plan de corte', 'Programamos alrededor del corte de agua y le decimos por cuánto tiempo.'],
      ['Trabajo y cierre', 'Probado, inspeccionado, drywall cerrado y pintado donde abrimos.'],
    ],
    beforeAfter: {
      title: 'Los acabados nuevos son la parte fácil.',
      caption: 'Antes de que existiera el lado terminado, la pared detrás de ese lavamanos se re-tuberió y se corrieron los drenajes de nuevo. Esa es la parte que nadie ve y la razón por la que sigue seca en cinco años. Arrastre para comparar.',
      beforeAlt: 'Baño anticuado con encimeras de travertino y lavamanos empotrados antes del recambio de tubería',
      afterAlt: 'Baño terminado con mueble nuevo, cuarcita en losa y lavamanos de sobreponer después del recambio',
    },
    beforeAfterWide: {
      title: 'Cada pieza se movió.',
      caption: 'La vieja bañera empotrada, el inodoro y el bidé salieron y nada volvió al mismo lugar. Eso significa nuevas líneas de suministro, nuevos drenajes y una nueva ventilación, todo inspeccionado antes de poner la baldosa. Arrastre para comparar.',
      beforeAlt: 'Baño anticuado con bañera empotrada, inodoro y bidé sobre piso de travertino',
      afterAlt: 'Baño remodelado con bañera exenta, ducha de vidrio y nuevas ubicaciones de las piezas',
    },
    heroAlt: 'Baño principal terminado con piezas nuevas en una casa del sur de Florida',
    close: '¿Perdiendo presión o viendo agua marrón?', closeCta: 'Solicite un diagnóstico gratis',
    faqs: [
      ['¿Cómo sé si mi casa en Miami necesita cambio de tubería?', 'Si su casa todavía tiene líneas de acero galvanizado o hierro fundido (común en casas anteriores a mediados de los años 70), está a tiempo prestado. Agua marrón u oxidada, poca presión y fugas de pinchazo o bajo la losa son las señales típicas. Primero pasamos cámara y le decimos con honestidad si es una reparación o un recambio completo.'],
      ['¿PEX o cobre para el recambio?', 'Ambos son buenos. El PEX es flexible, más rápido de instalar y más económico; el cobre es probado y muy duradero. Le explicamos cuál conviene a su casa y su presupuesto en vez de empujarle uno.'],
      ['¿Cómo sé si tengo una fuga bajo la losa?', 'Puntos tibios en el piso, el sonido de agua corriendo con todo cerrado, un salto inexplicable en la factura del agua o grietas nuevas en la losa. Usamos detección de fugas para ubicarla antes de abrir nada.'],
      ['¿Cuánto dura la tubería de hierro fundido?', 'Las líneas de drenaje de hierro fundido duran unos 50 años, y muchas casas antiguas de Miami están en ese punto o pasadas. Se oxida por dentro y empieza a taparse, así que detectarlo temprano le evita una reparación costosa.'],
      ['¿Necesito permiso para re-tuberiar o mover plomería?', 'Sí. Los recambios y cualquier reubicación de líneas de suministro o drenaje se permiten e inspeccionan. Como también tenemos la licencia general, abrimos la pared, hacemos el trabajo, pasamos la inspección y la cerramos de nuevo.'],
      ['¿Cuánto cuesta un recambio completo de tubería?', 'Depende del tamaño de la casa, la cantidad de baños, si usamos PEX o cobre, y qué tan accesibles están las líneas. Pasamos cámara al sistema y le damos un precio por escrito, y cuando una reparación es una opción honesta la cotizamos de las dos formas. El único número exacto es un diagnóstico gratis.'],
      ['¿Mi seguro cubre el reemplazo de tubería de hierro fundido o polibutileno?', 'Por lo general no por sí solo: la mayoría de las pólizas excluyen la corrosión gradual, así que una línea de hierro fundido fallando suele ser de su bolsillo. El polibutileno es el problema opuesto: muchas aseguradoras de Florida ahora niegan o no-renuevan la cobertura hasta que se reemplace. Documentamos el trabajo para que actualice su póliza.'],
      ['¿Cómo sé si tengo tubería de polibutileno?', 'El polibutileno suele ser tubería flexible gris (a veces azul) instalada aproximadamente entre 1978 y 1995. Falla desde adentro y es una razón común por la que las aseguradoras de Florida exigen un recambio. Si no está seguro, lo identificamos durante un diagnóstico gratis.'],
    ],
  },
  hvac: {
    label: 'Mecánica y A/C', crumb: 'Mecánica y A/C', h1: ['A/C a la medida', 'del calor de Florida'], answerEyebrow: 'Respuesta Directa',
    answer: 'Un equipo barato y sobredimensionado enfría la casa y nunca la seca.',
    paras: [
      'Aquí la humedad es el problema real. Un sistema demasiado grande se prende y apaga, deja el aire húmedo y se daña antes. Hacemos el cálculo de carga para su casa en vez de igualar el tonelaje que había antes.',
      'Si los ductos tienen fugas hacia el ático, también se lo decimos. Un equipo nuevo sobre ductos malos es dinero que no recupera.',
    ],
    scope: ['Instalaciones y reemplazos de A/C', 'Cálculos de carga Manual J', 'Reparación, sellado y reemplazo de ductos', 'Mini-splits y ampliaciones', 'Sistemas mecánicos para obra nueva', 'Mantenimiento y reparaciones'],
    steps: [
      ['Evaluación gratis', 'Medimos la casa, revisamos los ductos y vemos qué está haciendo realmente el sistema actual.'],
      ['Alcance y precio por escrito', 'Equipo, tonelaje, SEER y garantía en lenguaje claro.'],
      ['Permiso y programación', 'Trabajo permitido, programado para que no pase la noche sin aire.'],
      ['Instalación y puesta en marcha', 'Cargado, balanceado, probado e inspeccionado antes de darlo por terminado.'],
    ],
    heroAlt: 'Unidad condensadora nueva instalada junto a una casa moderna frente al mar en Miami',
    close: '¿Su A/C corre sin parar y sigue húmedo?', closeCta: 'Solicite una evaluación gratis',
    faqs: [
      ['¿Qué tamaño de A/C necesito de verdad en Miami?', 'Lo correcto es un cálculo de carga Manual J para su casa específica, no solo igualar el tonelaje que había antes. Un equipo sobredimensionado se prende y apaga, nunca saca la humedad y se daña temprano, que es el error más común que nos llaman a arreglar aquí.'],
      ['¿Por qué mi casa sigue húmeda con el A/C prendido?', 'Casi siempre es un sistema sobredimensionado o que se prende y apaga, o ductos con fuga hacia el ático. En el sur de Florida, controlar la humedad importa tanto como la temperatura, así que dimensionamos y sellamos para las dos cosas.'],
      ['¿Cuánto dura un sistema de A/C en Florida?', 'De 10 a 15 años. Nuestros sistemas corren casi todo el año y el aire salino del mar es duro con los serpentines, así que los equipos en Florida se desgastan más rápido que el promedio nacional. El mantenimiento regular lo alarga.'],
      ['¿Necesito permiso para reemplazar mi A/C?', 'Sí. Los cambios de A/C se permiten e inspeccionan en Miami-Dade, y los trabajos mecánicos más grandes también requieren un Notice of Commencement registrado. Nosotros manejamos el papeleo y la programación para que no pase la noche sin aire.'],
      ['¿Vale la pena un A/C nuevo si mis ductos están malos?', 'Por sí solo, no. Un equipo nuevo y eficiente sobre ductos con fugas es dinero que no recupera. Revisamos los ductos como parte de la evaluación y le decimos si sellarlos o reemplazarlos es la mejor inversión.'],
      ['¿Qué tamaño de A/C necesito de verdad para mi casa?', 'El tamaño correcto sale de un cálculo de carga Manual J, no de una adivinanza por los pies cuadrados. En Florida solemos calcular alrededor de 400 a 500 pies cuadrados por tonelada, pero el aislamiento, las ventanas, la altura del techo y la exposición al sol lo cambian. Si un contratista da el tonelaje sin medir, está adivinando.'],
      ['¿El ventilador del termostato debe estar en ON o en AUTO?', 'En AUTO, casi siempre. En ON el ventilador corre todo el tiempo y vuelve a meter humedad a la casa, por eso se siente húmedo. En AUTO el ventilador solo corre mientras enfría, así el sistema de verdad saca la humedad, algo clave en el sur de Florida.'],
      ['¿Cómo protejo mi A/C del aire salino cerca de la costa?', 'Enjuague el serpentín exterior con agua dulce con regularidad (cada par de semanas si está a pocas millas del agua), considere serpentines con recubrimiento en un equipo nuevo y coloque el condensador fuera del rocío salino cuando se pueda. La corrosión por sal es la razón principal por la que los equipos costeros mueren temprano, así que lo planificamos.'],
    ],
  },
  general: {
    label: 'Construcción General', crumb: 'Construcción General', h1: ['Obra nueva', 'y ampliaciones'], answerEyebrow: 'Respuesta Directa',
    answer: 'El permiso suele ser la parte larga, no la construcción.',
    paras: [
      'Las ampliaciones, el trabajo estructural y la obra nueva en el sur de Florida viven o mueren por los planos, los avisos de inicio y las inspecciones. Nosotros manejamos ese papeleo y mantenemos los oficios avanzando detrás, porque nosotros somos los oficios.',
      'Una sola licencia cubre la estructura, el techo, la plomería y la mecánica. Por eso nuestros cronogramas se sostienen cuando otros esperan a un subcontratista.',
    ],
    scope: ['Construcción residencial desde cero', 'Ampliaciones y segundos pisos', 'Reparación estructural y reencuadre', 'Concreto, bloque y vigas de amarre', 'Gestión de permisos e inspecciones', 'Gerencia completa de proyecto'],
    steps: [
      ['Visita y alcance', 'Vemos lo que tiene, lo que quiere y lo que el código permite.'],
      ['Planos y permiso', 'Dibujos, radicación y el aviso de inicio (Notice of Commencement) manejados por usted.'],
      ['Construcción', 'Nuestros propios equipos en estructura, techo, plomería y mecánica, en secuencia.'],
      ['Inspecciones y cierre', 'Cada inspección programada, aprobada y documentada.'],
    ],
    heroAlt: 'Estructura de acero levantándose en una casa de obra nueva frente al mar en el sur de Florida',
    close: '¿Pensando en una ampliación o una obra nueva?', closeCta: 'Solicite una visita gratis',
    faqs: [
      ['¿Cuánto tarda un permiso de construcción en Miami-Dade?', 'Varía mucho según el alcance, desde unas semanas para un trabajo simple hasta un par de meses para una obra nueva o una ampliación grande. El permiso suele ser la parte larga, no la construcción, y por eso manejamos ese papeleo nosotros mismos.'],
      ['¿Necesito un Notice of Commencement?', 'Para la mayoría de los trabajos de construcción sobre $2,500, la ley de Florida exige un Notice of Commencement registrado antes de empezar (aplica un umbral más alto para el trabajo de A/C). Nosotros lo preparamos y lo manejamos por usted.'],
      ['¿Un solo contratista con licencia puede manejar toda la obra?', 'Sí. Tenemos certificaciones en construcción general, techos, plomería y mecánica, así que la estructura, el techo, la plomería y el A/C son todos internos bajo una sola licencia. Por eso los cronogramas se sostienen en vez de estancarse esperando a un subcontratista.'],
      ['¿Qué cambia construir en la HVHZ?', 'Miami-Dade y Broward están en la Zona de Huracanes de Alta Velocidad, así que los productos y ensamblajes deben tener un Notice of Acceptance (NOA) y cumplir estándares de viento más estrictos. Construimos según eso desde los planos, para que pase la inspección a la primera.'],
      ['¿Cuánto cuesta una ampliación u obra nueva?', 'Depende por completo del tamaño, los acabados y las condiciones del terreno, así que cualquier número sin una visita es una adivinanza. Hacemos una visita gratis y le damos un precio por escrito y detallado.'],
      ['¿Qué pasa si construyo sin permiso en Florida?', 'El trabajo sin permiso sigue a la casa. Puede generar multas de code-enforcement, complicar o frenar una venta, y darle a la aseguradora una razón para negar un reclamo, y el condado puede hacerle abrir el trabajo terminado para inspeccionarlo después. Nosotros permitimos todo para que quede limpio en la reventa.'],
      ['¿Debo sacar mi propio permiso de owner-builder?', 'En Florida se puede, pero para algo más que un trabajo pequeño es arriesgado: usted asume la responsabilidad, las inspecciones y la exposición a gravámenes. Para una ampliación o una obra nueva, tener un contratista con licencia como responsable lo protege. Con gusto le explicamos dónde está esa línea en su proyecto.'],
      ['¿Cómo verifico que un contratista tenga licencia?', 'Busque el número de licencia en MyFloridaLicense.com — debe ser una licencia estatal Certified (desde julio de 2025 se eliminaron las licencias locales "registered"). Las nuestras son Certified del Estado de Florida: general CGC1521744, techos CCC1332548, plomería CFC1433873 y mecánica CMC1251627.'],
    ],
  },
  windows: {
    label: 'Ventanas y Puertas de Impacto', crumb: 'Ventanas y Puertas de Impacto', h1: ['Ventanas y puertas', 'de impacto'], answerEyebrow: 'Respuesta Directa',
    answer: 'El vidrio de impacto suele pagar parte de sí mismo a través del seguro.',
    paras: [
      'Las ventanas y puertas certificadas significan que deja de poner paneles, la casa queda más silenciosa y fresca, y la mayoría de las aseguradoras le dan crédito por la mitigación de viento. Pídanos el formulario cuando termine el trabajo.',
      '¿Va a retechar? Haga las ventanas al mismo tiempo. Un permiso, un equipo, una factura, y las aberturas se intervienen una sola vez.',
    ],
    scope: ['Ventanas certificadas de impacto', 'Puertas corredizas y francesas de impacto', 'Puertas de entrada principal', 'Instalaciones de marco completo y retrofit', 'Documentación de mitigación de viento', 'Productos y permisos conformes a NOA'],
    steps: [
      ['Medición gratis', 'Cada abertura medida y fotografiada, con las medidas confirmadas antes de ordenar.'],
      ['Alcance y precio por escrito', 'Producto, NOA, tipo de vidrio y tiempo de entrega por escrito.'],
      ['Permiso y entrega', 'Permitimos, ordenamos y programamos la instalación para cuando lleguen las unidades.'],
      ['Instalación e inspección', 'Colocadas, ancladas, selladas, inspeccionadas y su formulario de mitigación en mano.'],
    ],
    heroAlt: 'Casa moderna frente al mar en el sur de Florida con vidrio de impacto de piso a techo al atardecer',
    close: '¿Cansado de poner paneles cada temporada?', closeCta: 'Solicite una medición gratis',
    faqs: [
      ['¿Las ventanas de impacto realmente bajan mi seguro?', 'Por lo general, sí. Las ventanas y puertas certificadas de impacto califican para créditos de mitigación de viento con la mayoría de las aseguradoras de Florida. Al terminar el trabajo le entregamos la documentación de mitigación para dársela a su aseguradora y reclamarlo.'],
      ['¿Ventanas de impacto o paneles de huracán?', 'El vidrio de impacto protege la abertura todo el tiempo, sin nada que instalar; mantiene la casa más silenciosa y fresca, y suele ganar el crédito de seguro más grande. Los paneles cuestan menos al inicio, pero hay que ponerlos antes de cada tormenta.'],
      ['¿Las ventanas de impacto necesitan permiso y NOA?', 'Sí. Las ventanas y puertas de impacto se permiten e inspeccionan, y los productos deben tener un Notice of Acceptance (NOA) de Miami-Dade para la HVHZ. Manejamos el permiso e instalamos solo productos conformes a NOA.'],
      ['¿Cuánto cuestan las ventanas de impacto?', 'Depende del número de aberturas, los tamaños y si es instalación de marco completo o retrofit, así que primero medimos. Ponemos el producto, el tipo de vidrio, el NOA y el precio por escrito antes de ordenar nada.'],
      ['¿Cuánto tarda la instalación?', 'Una vez que llegan las unidades, la mayoría de las casas se instalan en pocos días. La parte más larga es el tiempo de fabricación de las unidades, alrededor del cual programamos para que la instalación ocurra cuando de verdad lleguen.'],
      ['¿Hay algún subsidio para ventanas de impacto en Florida?', 'Sí — el programa My Safe Florida Home ofrece subsidios de contrapartida (comúnmente hasta $10,000) para mejoras de mitigación de viento como ventanas y puertas de impacto en viviendas elegibles con homestead. Requiere primero una inspección gratis de mitigación de viento y aprobación antes de empezar, y los fondos se agotan rápido. Le indicamos la solicitud vigente.'],
      ['¿Tengo que reemplazar TODAS mis ventanas para el descuento del seguro?', 'Por lo general sí. Las aseguradoras dan el crédito de mitigación por protección completa de las aberturas: cada ventana y puerta exterior. Un trabajo parcial casi nunca califica, así que planificamos toda la envolvente y le damos la documentación para su aseguradora.'],
      ['¿Ventanas de impacto o paneles de huracán?', 'El vidrio de impacto protege la abertura todo el tiempo, sin nada que instalar; mantiene la casa más silenciosa y fresca, y suele ganar el crédito de seguro más grande. Los paneles cuestan menos al inicio, pero hay que ponerlos antes de cada tormenta. Para la mayoría que se queda en su casa, el impacto gana en pocos años.'],
    ],
  },
  remodels: {
    label: 'Remodelaciones', crumb: 'Remodelaciones', h1: ['Remodelación de', 'cocinas y baños'], answerEyebrow: 'Respuesta Directa',
    answer: 'La mayoría de las demoras en remodelación son los cambios de oficio, no la baldosa.',
    paras: [
      'Una cocina toca plomería, electricidad, gabinetes y acabados. Cuando cuatro empresas manejan cuatro partes, cada demora es culpa de otro. Las nuestras son todas internas, así que el cronograma es uno solo.',
      '¿Va a hacer cocina y baño? Hágalos juntos. Plomería, baldosa y mano de obra compartidas bajan todo el costo.',
    ],
    scope: ['Remodelación completa de cocinas', 'Remodelación de baños', 'Gabinetes y encimeras', 'Baldosa, pisos y acabados', 'Rough-in de plomería y electricidad', 'Cambios de distribución y remoción de muros'],
    steps: [
      ['Recorrido y presupuesto', 'Hablamos de lo que quiere y de lo que honestamente cuesta antes de los planos.'],
      ['Alcance, selecciones y precio', 'Piezas y acabados escogidos, luego un número detallado.'],
      ['Permiso y demolición', 'Permitido, aislado con protección de polvo y demolido en una fecha que conoce por adelantado.'],
      ['Construcción y lista de detalles', 'Un equipo a través de rough-in, baldosa y acabado, y luego un recorrido con usted.'],
    ],
    beforeAfter: {
      title: 'El mismo baño. La misma huella.',
      caption: 'Encimeras de travertino, lavamanos empotrados y gabinetes de constructor afuera. Cuarcita en losa, lavamanos de sobreponer, mueble de madera y ducha de vidrio adentro. Sin mover muros, un equipo a través de plomería, baldosa y acabado. Arrastre para comparar.',
      beforeAlt: 'Baño principal anticuado con encimeras de travertino, lavamanos empotrados y gabinetes blancos',
      afterAlt: 'Baño principal remodelado con mueble de cuarcita, lavamanos de sobreponer, madera y ducha de vidrio',
    },
    beforeAfterWide: {
      title: 'De beige de constructor a un spa.',
      caption: 'La plataforma de bañera en travertino y la baldosa anticuada desaparecieron. Una bañera exenta, una ducha completa de vidrio con nicho y un mueble en losa en su lugar. La misma habitación, una casa completamente distinta. Arrastre para comparar.',
      beforeAlt: 'Baño principal anticuado con plataforma de bañera en travertino, persianas y baldosa beige',
      afterAlt: 'Baño principal terminado con bañera exenta, ducha de vidrio y mueble de cuarcita',
    },
    heroAlt: 'Remodelación de cocina blanca terminada con vista al mar en el sur de Florida',
    close: '¿Listo para planear una cocina o un baño?', closeCta: 'Solicite un recorrido gratis',
    faqs: [
      ['¿Cuánto tarda la remodelación de una cocina?', 'La mayoría de las remodelaciones de cocina toman de 4 a 8 semanas según el alcance, las selecciones y si se mueven muros o plomería. Como nuestros oficios son internos, es un solo cronograma en vez de esperar a que empresas separadas se pasen el trabajo.'],
      ['¿Necesito permiso para remodelar un baño?', 'Si va a mover plomería o electricidad, cambiar la distribución o tocar estructura, sí. Un refresco cosmético igual muchas veces no lo necesita, y le decimos cuál es su proyecto antes de empezar.'],
      ['¿Cuánto cuesta una remodelación en Miami?', 'Se reduce al tamaño, los acabados y cuánto se mueve de verdad. Hablamos de lo que quiere y lo que honestamente cuesta antes de los planos, y luego le damos un número detallado para que no haya sorpresas a mitad del proyecto.'],
      ['¿Puedo hacer cocina y baño al mismo tiempo?', 'Sí, y normalmente ahorra dinero. Plomería, baldosa y mano de obra compartidas entre los dos proyectos bajan todo el costo, y un solo equipo hace ambos en vez de movilizarse dos veces.'],
      ['¿Mueven plomería y electricidad, o solo acabados?', 'Hacemos todo internamente. El rough-in de plomería y electricidad, la baldosa, los gabinetes y los acabados son un solo equipo bajo una licencia, así que nadie se echa la culpa cuando falla un cambio de oficio.'],
      ['¿Cuánto cuesta remodelar una cocina o un baño en Miami?', 'Depende del tamaño, de cuánto se mueve (muros, plomería, electricidad) y de los acabados que elija. Un refresco cosmético y una remodelación total son números muy distintos. Hablamos de lo que quiere y lo que honestamente cuesta antes de los planos, y luego le damos un precio detallado, sin sorpresas a mitad del proyecto.'],
      ['¿Necesito permiso para remodelar la cocina o el baño?', 'Si mueve plomería o electricidad, cambia la distribución o toca estructura, sí. Un refresco cosmético igual (gabinetes, encimeras, pintura) muchas veces no. Hacerlo sin permiso puede significar multas y problemas en la reventa, así que le decimos cuál es su caso y manejamos el permiso si hace falta.'],
      ['¿Pueden remodelar a código de huracán y poner ventanas de impacto a la vez?', 'Sí, y muchas veces es lo más inteligente. Como tenemos licencias de techos, mecánica, plomería y general, podemos llevar la remodelación al código costero actual y añadir ventanas de impacto o un A/C nuevo en el mismo proyecto: un equipo, un juego de permisos, un cronograma.'],
    ],
  },
};

export const SERVICE_CONTENT_ES = Object.fromEntries(
  Object.entries(SERVICE_CONTENT).map(([k, base]) => [k, mergeDeep(base, ES[k])])
);
