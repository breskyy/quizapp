import type { Question } from "@/types/quiz"

// First set of questions (first half of the original questions)
export const quizSet1: Question[] = [
  {
    question:
      "Do hemodializy stosuje się cewniki jedno lub dwukanałowe wprowadzone do dużych naczyń żylnych. Zabezpieczenie cewników polega na:",
    options: [
      "zamknięciu jałowym korkiem kanału cewnika.",
      "założeniu jałowego opatrunku wokół wkłucia, wypełnieniu kanału cewnika heparyną i zamknięciu jałowym korkiem.",
      "założeniu opatrunku i zamknięciu cewnika.",
      "założeniu jałowego opatrunku i zamknięciu cewnika.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Który związek jest antagonistą heparyny?",
    options: ["naloxon", "polstygmina", "siarczan protaminy", "siarczan magnezu"],
    correctAnswer: 2,
  },
  {
    question: "Wyjaśnij pojęcie premedykacji:",
    options: [
      "farmakologiczne przygotowanie chorego do znieczulenia i operacji",
      "farmakologiczne leczenie po zabiegu operacyjnym",
      "leczenie antybiotykami zgodnie z antybiogramem",
      "przygotowanie pacjenta do założenia stymulatora serca",
    ],
    correctAnswer: 0,
  },
  {
    question: "Celem premedykacji jest:",
    options: [
      "mniejszenie lęku chorego, uspokojenie chorego, spowodowanie niepamięci zdarzeń związanych z operacją",
      "ułatwienie wprowadzenia do znieczulenia, zmniejszenie zapotrzebowania na leki anestetyczne, zniesienie bólu przed operacją",
      "zmniejszenie wydzielania śliny i soku żołądkowego, alkalizacja soku żołądkowego",
      "wszystkie są prawidłowe",
    ],
    correctAnswer: 3,
  },
  {
    question: "Do oceny świadomości chorego używa się skali:",
    options: ["Guedela", "VAS", "ASA", "Glasgow"],
    correctAnswer: 3,
  },
  {
    question: "Fiolka zawiera 20 ml Kalium Chloratum o stężeniu 15% w 2 ml. Ile to jest?",
    options: ["6 mg", "60 mg", "300 mg", "3 g"],
    correctAnswer: 2,
  },
  {
    question: "Lekiem obniżającym ciśnienie krwi jest:",
    options: ["dopamina", "dobutamina", "levonor", "ebrantil"],
    correctAnswer: 3,
  },
  {
    question: "Celem analgezji z wyprzedzeniem jest:",
    options: [
      "poprawa jakości analgezji pooperacyjnej",
      "efekt nasenny",
      "efekt uspokajający",
      "zastąpienie premedykacji",
    ],
    correctAnswer: 0,
  },
  {
    question: "Reanimacja to:",
    options: [
      "zespół czynności, które doprowadziły do przywrócenia krążenia krwi i oddychania",
      "zespół czynności, które doprowadziły do powrotu krążenia, oddychania, czynności układu nerwowego, świadomości",
      "zespół czynności, które doprowadziły do powrotu krążenia",
      "B i C są prawidłowe",
    ],
    correctAnswer: 3,
  },
  {
    question: "Kardiowersja służy do leczenia:",
    options: [
      "migotania komór",
      "migotania i trzepotania przedsionków",
      "rozkojarzenia elektromagnetycznego (PEA)",
      "wszystkie prawidłowe",
    ],
    correctAnswer: 1,
  },
  {
    question: "Pierwszego w Polsce znieczulenia za pomocą eteru dokonano w:",
    options: ["1966", "1847", "1946", "1918"],
    correctAnswer: 1,
  },
  {
    question: "Zastawka Rubena w resuscytatorze jest zastawką:",
    options: ["objętościową", "przepływową", "zwrotną", "bezzwrotną"],
    correctAnswer: 3,
  },
  {
    question: "Klasyfikacja Mallamatiego służy do oceny:",
    options: [
      "kwalifikacji chorego do zabiegu operacyjnego",
      "drożności cewnika założonego do żyły podobojczykowej",
      "oceny drożności górnych dróg oddechowych",
      "oceny drożności dolnych dróg oddechowych",
    ],
    correctAnswer: 2,
  },
  {
    question: "Krem EMLA stosuje się do znieczulenia:",
    options: ["skóry", "podpajęczynówkowego", "zewnątrzoponowego", "doszpikowego"],
    correctAnswer: 0,
  },
  {
    question:
      "Wykonanie próby kalorycznej, będącej jednym z obowiązkowych badań odruchów pniowych u potencjalnych dawców narządowych polega na:",
    options: [
      "podaniu do przewodu nosowego 20 ml ciepłej wody i obserwacji reakcji gałek ocznych",
      "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji reakcji gałek ocznych",
      "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji reakcji odruchu wyprostnego kończyn dolnych",
      "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji odruchu wymiotnego",
    ],
    correctAnswer: 1,
  },
  {
    question: "Jaką maksymalną ilość punktów wg. skali Aldrete'a może otrzymać pacjent opuszczający salę wybudzeń?",
    options: ["8 punktów", "10 punktów", "12 punktów", "15 punktów"],
    correctAnswer: 1,
  },
  {
    question: "Rurka Combitube to:",
    options: [
      "połączenie dwóch rurek, z których jedna nie ma otworu końcowego, lecz jest wyposażona w boczne otwory, przez które prowadzona jest wentylacja",
      "ustno-gardłowa",
      "maska krtaniowa",
      "rurka donosowa",
    ],
    correctAnswer: 0,
  },
  {
    question: "Która z wymienionych metod jest właściwa do określania natężenia bólu pooperacyjnego?",
    options: [
      "opisanie przez pacjenta bólu słowami",
      "zastosowanie skali analogowej (liniowej)",
      "zastosowanie skali punktowej (0-10)",
      "wszystkie powyższe",
    ],
    correctAnswer: 3,
  },
  {
    question: "Przeciwwskazania do znieczulenia przewodowego to:",
    options: [
      "brak zgody pacjenta",
      "wiek powyżej 60 lat",
      "spadek saturacji poniżej 90%",
      "wszystkie powyższe są prawidłowe",
    ],
    correctAnswer: 0,
  },
  {
    question: "Sekwencja RKO oddechów do uciśnięć klatki piersiowej u osoby dorosłej to:",
    options: ["15:2", "30:2", "15:1", "5:5"],
    correctAnswer: 1,
  },
  // Dodane nowe pytania
  {
    question: "Tzw. szpilkowate źrenice charakterystyczne są:",
    options: ["zatrucia amfetaminą", "śmierci klinicznej", "zatrucia opiatami", "krwiaka śródczaszkowego"],
    correctAnswer: 2,
  },
  {
    question: "Duszność jest objawem:",
    options: [
      "chorób układu oddechowego",
      "zaburzeń metabolicznych",
      "chorób układu krążenia",
      "wszystkich wymienionych",
    ],
    correctAnswer: 3,
  },
  {
    question: "Poznawanie wewnętrznych stanów i procesów zachodzących w kontaktującej się z nami osoby to:",
    options: ["asertywność", "empatia", "wizualizacja", "inteligencja"],
    correctAnswer: 1,
  },
  {
    question: "W celu zbadania dołu pachowego prawego należy użyć dłoni:",
    options: ["lewej ułożonej płasko", "lewej tworzącej budkę", "prawej ułożonej płasko", "prawej tworzącej budkę"],
    correctAnswer: 0,
  },
  {
    question: "Celem lekkiej palpacji jest:",
    options: [
      "ocena ruchów robaczkowych jelit, wykrycie guzów jamy brzusznej",
      "ocena napięcia mięśni przedniej ściany brzucha, wstępną lokalizację powiększonych narządów lub guzów brzucha",
      "ustalenie granic powiększonych narządów, ocena szmeru żylnego",
      "wszystkie wymienione",
    ],
    correctAnswer: 1,
  },
]

// Second set of questions (second half of the original questions)
export const quizSet2: Question[] = [
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Prowadząc żywienie pozajelitowe nie powinno się podawać do żył obwodowych roztworów o osmolarności większej niż:",
    options: ["1200 mOsm/l", "1000 mOsm/l", "900 mOsm/l", "800 mOsm/l"],
    correctAnswer: 2,
  },
  {
    question: "Do środków osoczozastępczych nie zalicza się:",
    options: ["20% Manitol", "Dextran 40,000 70,000", "20% albuminy", "10% HAES"],
    correctAnswer: 0,
  },
  {
    question: 'Odruch "oczu lalki", występujący u pacjenta pozostającego w śpiączce, świadczy o uszkodzeniu:',
    options: ["móżdżku", "nerwu okoruchowego", "nerwu odwodzącego", "pnia mózgu"],
    correctAnswer: 3,
  },
  {
    question: "Przy migotaniu komór najważniejsza jest:",
    options: [
      "wczesna defibrylacja",
      "uciskanie klatki piersiowej",
      "adrenalina podana dożylnie",
      "adrenalina podana dotchawiczo, atropina podana dożylnie",
    ],
    correctAnswer: 0,
  },
  {
    question: "Kontrola skuteczności prowadzenia sztucznej wentylacji nie obejmuje:",
    options: [
      "diurezy godzinowej",
      "zabarwienia płytek paznokciowych",
      "osłuchania klatki piersiowej",
      "prawidłowej wartości ciśnienia tętniczego i tętna",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Standard podstawowy monitorowania stanu klinicznego chorego podczas zabiegu operacyjnego i znieczulenia ogólnego obejmuje:",
    options: [
      "pomiar temperatury ciała, RR, tętno, nie rzadziej niż co 5 minut, stężenia tlenu w mieszaninie oddechowej, liczby oddechów, saturacji, EKG, stopnia zwiotczenia i głębokości znieczulenia",
      "pomiar głębokości znieczulenia, EKG, co 15-30 minut",
      "obserwacji zabarwienia powłok skórnych, EKG, oddechów, diurezy godzinowej co 5-10 minut",
      "wszystkie powyższe są prawidłowe",
    ],
    correctAnswer: 0,
  },
  {
    question: "Pobierając krew na gazometrię należy pamiętać aby:",
    options: [
      "strzykawka była przepłukana roztworem glukozy",
      "strzykawka była pozbawiona pęcherzyków powietrza",
      "próbka powinna być po pobraniu przechowywana w temperaturze pokojowej",
      "pacjent nie powinien przyjmować wcześniej płynów",
    ],
    correctAnswer: 1,
  },
  {
    question: "Przed podłączeniem 20% Manitolu należy sprawdzić dodatkowo:",
    options: ["temperaturę otoczenia", "poziom płytek krwi", "tętno i RR", "klarowność płynu"],
    correctAnswer: 3,
  },
  {
    question: "Manewr Esmarcha polega na:",
    options: [
      "odgięciu głowy w tył, wysunięciu żuchwy do przodu, tak aby zęby pacjenta znalazły się przed zębami górnymi",
      "ułożeniu pacjenta z głową w dół z przechyleniem na prawą stronę",
      "odgięciu głowy w tył, wysunięciu żuchwy do tyłu, tak aby zęby pacjenta znalazły się pod zębami górnymi",
      "odgięciu kończyn górnych w górę nad głowę chorego",
    ],
    correctAnswer: 0,
  },
  {
    question: "Koniuszek serca najdokładniej osłuchamy za pomocą:",
    options: ["lejka", "membrany", "oglądania", "badania palpacyjnego"],
    correctAnswer: 1,
  },
  {
    question: "W którym miejscu można osłuchać zastawkę aortalną?",
    options: [
      "nie można jej osłuchać",
      "gdziekolwiek w okolicy serca",
      "w 2 przestrzeni międzyżebrowej po prawej stronie mostka",
      "w 2 przestrzeni międzyżebrowej po lewej stronie mostka",
    ],
    correctAnswer: 2,
  },
  {
    question: "Przyjmowanie pozycji siedzącej przez pacjenta jest typowe dla:",
    options: ["ataku astmy oskrzelowej", "obrzęku płuc", "wysięku w jamie opłucnej", "prawidłowe A i B"],
    correctAnswer: 3,
  },
  {
    question: "Na co zwracasz uwagę badając palpacyjnie klatkę piersiową?",
    options: ["zgrubienia", "drżenie głosowe", "tkliwość", "wszystkie z wymienionych"],
    correctAnswer: 3,
  },
  {
    question: "Śledziona jest wyczuwalna:",
    options: ["zawsze", "kiedy jest powiększona", "w wieku dziecięcym", "w gorączce"],
    correctAnswer: 1,
  },
  {
    question: "Badanie fizykalne jamy brzusznej wykonujemy w następującej kolejności:",
    options: [
      "oglądanie, osłuchiwanie, palpacja, opukiwanie",
      "palpacja, osłuchiwanie, opukiwanie, oglądanie",
      "oglądanie, osłuchiwanie, opukiwanie, palpacja",
      "osłuchiwanie, palpacja, opukiwanie, oglądanie",
    ],
    correctAnswer: 0,
  },
  {
    question: "Objaw Blumberga jest objawem:",
    options: [
      "rozlanych zmian zapalnych jamy brzusznej (wyrostek robaczkowy)",
      "przekrwienia narządów klatki piersiowej",
      "przepełnienia pęcherza moczowego",
      "rwy kulszowej",
    ],
    correctAnswer: 0,
  },
  {
    question: "W prawym górnym kwadrancie brzucha znajduje się:",
    options: [
      "wątroba, pęcherzyk żółciowy, odźwiernik, dwunastnica, głowa trzustki, górny brzeg prawej nerki",
      "wątroba, pęcherzyk żółciowy, żołądek, trzon trzustki, nerka",
      "wątroba, pęcherzyk żółciowy, esica, jajniki, jajowód",
      "górny brzeg prawej nerki, wyrostek robaczkowy, prawy jajnik",
    ],
    correctAnswer: 0,
  },
  {
    question: "Badanie piersi przez kobietę najlepiej jest przeprowadzać:",
    options: [
      "co dwa miesiące podczas miesiączki",
      "co miesiąc ok tygodnia po rozpoczęciu menstruacji",
      "podczas jajeczkowania",
      "w każdym czasie cyklu",
    ],
    correctAnswer: 1,
  },
  {
    question: "Mankiet uszczelniający rurkę intubacyjną NIE służy do:",
    options: [
      "stabilizacji rurki",
      "zapewnienia wymiany gazowej wyłącznie przez światło rurki intubacyjnej",
      "uszczelnienia przestrzeni pomiędzy rurką a ścianą tchawicy",
      "zapobiegania treści żołądkowej, krwi i śluzu",
    ],
    correctAnswer: 0,
  },
  {
    question: "ARDS - zespół niewydolności oddechowej dorosłych jest wynikiem:",
    options: [
      "procesu zapalnego, uszkodzenia tkanki płucnej",
      "nagromadzenia się płynu obrzękowego",
      "obrzęku płuc",
      "niewydolności krążenia",
    ],
    correctAnswer: 0,
  },
]

// Combined set of all questions
export const allQuestions: Question[] = [...quizSet1, ...quizSet2]

// Export a function to get questions by set
export function getQuestionsBySet(setId: string): Question[] {
  switch (setId) {
    case "set1":
      return quizSet1
    case "set2":
      return quizSet2
    case "all":
    default:
      return allQuestions
  }
}
