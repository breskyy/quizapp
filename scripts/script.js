// Lista pytań (dodano dodatkowe 5 pytań)
const questions = [
    {
        "question": "Do hemodializy stosuje się cewniki jedno lub dwukanałowe wprowadzone do dużych naczyń żylnych. Zabezpieczenie cewników polega na:",
        "options": [
            "zamknięciu jałowym korkiem kanału cewnika.",
            "założeniu jałowego opatrunku wokół wkłucia, wypełnieniu kanału cewnika heparyną i zamknięciu jałowym korkiem.",
            "założeniu opatrunku i zamknięciu cewnika.",
            "założeniu jałowego opatrunku i zamknięciu cewnika."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Który związek jest antagonistą heparyny?",
        "options": [
            "naloxon",
            "polstygmina",
            "siarczan protaminy",
            "siarczan magnezu"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Wyjaśnij pojęcie premedykacji:",
        "options": [
            "farmakologiczne przygotowanie chorego do znieczulenia i operacji",
            "farmakologiczne leczenie po zabiegu operacyjnym",
            "leczenie antybiotykami zgodnie z antybiogramem",
            "przygotowanie pacjenta do założenia stymulatora serca"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Celem premedykacji jest:",
        "options": [
            "mniejszenie lęku chorego, uspokojenie chorego, spowodowanie niepamięci zdarzeń związanych z operacją",
            "ułatwienie wprowadzenia do znieczulenia, zmniejszenie zapotrzebowania na leki anestetyczne, zniesienie bólu przed operacją",
            "zmniejszenie wydzielania śliny i soku żołądkowego, alkalizacja soku żołądkowego",
            "wszystkie są prawidłowe"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Do oceny świadomości chorego używa się skali:",
        "options": [
            "Guedela",
            "VAS",
            "ASA",
            "Glasgow"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Fiolka zawiera 20 ml Kalium Chloratum o stężeniu 15% w 2 ml. Ile to jest?",
        "options": [
            "6 mg",
            "60 mg",
            "300 mg",
            "3 g"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Lekiem obniżającym ciśnienie krwi jest:",
        "options": [
            "dopamina",
            "dobutamina",
            "levonor",
            "ebrantil"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Celem analgezji z wyprzedzeniem jest:",
        "options": [
            "poprawa jakości analgezji pooperacyjnej",
            "efekt nasenny",
            "efekt uspokajający",
            "zastąpienie premedykacji"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Reanimacja to:",
        "options": [
            "zespół czynności, które doprowadziły do przywrócenia krążenia krwi i oddychania",
            "zespół czynności, które doprowadziły do powrotu krążenia, oddychania, czynności układu nerwowego, świadomości",
            "zespół czynności, które doprowadziły do powrotu krążenia",
            "B i C są prawidłowe"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Kardiowersja służy do leczenia:",
        "options": [
            "migotania komór",
            "migotania i trzepotania przedsionków",
            "rozkojarzenia elektromagnetycznego (PEA)",
            "wszystkie prawidłowe"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Pierwszego w Polsce znieczulenia za pomocą eteru dokonano w:",
        "options": [
            "1966",
            "1847",
            "1946",
            "1918"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Zastawka Rubena w resuscytatorze jest zastawką:",
        "options": [
            "objętościową",
            "przepływową",
            "zwrotną",
            "bezzwrotną"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Klasyfikacja Mallamatiego służy do oceny:",
        "options": [
            "kwalifikacji chorego do zabiegu operacyjnego",
            "drożności cewnika założonego do żyły podobojczykowej",
            "oceny drożności górnych dróg oddechowych",
            "oceny drożności dolnych dróg oddechowych"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Krem EMLA stosuje się do znieczulenia:",
        "options": [
            "skóry",
            "podpajęczynówkowego",
            "zewnątrzoponowego",
            "doszpikowego"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Wykonanie próby kalorycznej, będącej jednym z obowiązkowych badań odruchów pniowych u potencjalnych dawców narządowych polega na:",
        "options": [
            "podaniu do przewodu nosowego 20 ml ciepłej wody i obserwacji reakcji gałek ocznych",
            "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji reakcji gałek ocznych",
            "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji reakcji odruchu wyprostnego kończyn dolnych",
            "podaniu do przewodu słuchowego zewnętrznego 20 ml lodowatej wody i obserwacji odruchu wymiotnego"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Jaką maksymalną ilość punktów wg. skali Aldrete’a może otrzymać pacjent opuszczający salę wybudzeń?",
        "options": [
            "8 punktów",
            "10 punktów",
            "12 punktów",
            "15 punktów"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Rurka Combitube to:",
        "options": [
            "połączenie dwóch rurek, z których jedna nie ma otworu końcowego, lecz jest wyposażona w boczne otwory, przez które prowadzona jest wentylacja",
            "ustno-gardłowa",
            "maska krtaniowa",
            "rurka donosowa"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Która z wymienionych metod jest właściwa do określania natężenia bólu pooperacyjnego?",
        "options": [
            "opisanie przez pacjenta bólu słowami",
            "zastosowanie skali analogowej (liniowej)",
            "zastosowanie skali punktowej (0-10)",
            "wszystkie powyższe"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Przeciwwskazania do znieczulenia przewodowego to:",
        "options": [
            "brak zgody pacjenta",
            "wiek powyżej 60 lat",
            "spadek saturacji poniżej 90%",
            "wszystkie powyższe są prawidłowe"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Sekwencja RKO oddechów do uciśnięć klatki piersiowej u osoby dorosłej to:",
        "options": [
            "15:2",
            "30:2",
            "15:1",
            "5:5"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Znieczulenie całkowicie wziewne to:",
        "options": [
            "VIMA (Volatile Induction and Maintenance Anaesthesia)",
            "SIMV (Synchronized Intermittent Mandatory Ventilation)",
            "TIVA (Total Intravenous Anaesthesia)",
            "PCV (Pressure Controlled Ventilation)"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Prowadząc żywienie pozajelitowe nie powinno się podawać do żył obwodowych roztworów o osmolarności większej niż:",
        "options": [
            "1200 mOsm/l",
            "1000 mOsm/l",
            "900 mOsm/l",
            "800 mOsm/l"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Do środków osoczozastępczych nie zalicza się:",
        "options": [
            "20% Manitol",
            "Dextran 40,000 70,000",
            "20% albuminy",
            "10% HAES"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Odruch „oczu lalki”, występujący niekiedy u pacjenta pozostającego w śpiączce, świadczy o uszkodzeniu:",
        "options": [
            "móżdżku",
            "nerwu okoruchowego",
            "nerwu odwodzącego",
            "pnia mózgu"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Przy migotaniu komór najważniejsza jest:",
        "options": [
            "wczesna defibrylacja",
            "uciskanie klatki piersiowej",
            "adrenalina podana dożylnie",
            "adrenalina podana dotchawiczo, atropina podana dożylnie"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Kontrola skuteczności prowadzenia sztucznej wentylacji nie obejmuje:",
        "options": [
            "diurezy godzinowej",
            "zabarwienia płytek paznokciowych",
            "osłuchania klatki piersiowej",
            "prawidłowej wartości ciśnienia tętniczego i tętna"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Standard podstawowy monitorowania stanu klinicznego chorego podczas zabiegu operacyjnego i znieczulenia ogólnego obejmuje:",
        "options": [
            "pomiar temperatury ciała, RR, tętno, nie rzadziej niż co 5 minut, stężenia tlenu w mieszaninie oddechowej, liczby oddechów, saturacji, EKG, stopnia zwiotczenia i głębokości znieczulenia",
            "pomiar głębokości znieczulenia, EKG, co 15-30 minut",
            "obserwacji zabarwienia powłok skórnych, EKG, oddechów, diurezy godzinowej co 5-10 minut",
            "wszystkie powyższe są prawidłowe"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Pobierając krew na gazometrię należy pamiętać aby:",
        "options": [
            "strzykawka była przepłukana roztworem glukozy",
            "strzykawka była pozbawiona pęcherzyków powietrza",
            "próbka powinna być po pobraniu przechowywana w temperaturze pokojowej",
            "pacjent nie powinien przyjmować wcześniej płynów"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Przed podłączeniem 20% Manitolu należy sprawdzić dodatkowo:",
        "options": [
            "temperaturę otoczenia",
            "poziom płytek krwi",
            "tętno i RR",
            "klarowność płynu"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Manewr Esmarcha polega na:",
        "options": [
            "odgięciu głowy w tył, wysunięciu żuchwy do przodu, tak aby zęby pacjenta znalazły się przed zębami górnymi",
            "ułożeniu pacjenta z głową w dół z przechyleniem na prawą stronę",
            "odgięciu głowy w tył, wysunięciu żuchwy do tyłu, tak aby zęby pacjenta znalazły się pod zębami górnymi",
            "odgięciu kończyn górnych w górę nad głowę chorego"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Koniuszek serca najdokładniej osłuchamy za pomocą:",
        "options": [
            "lejka",
            "membrany",
            "oglądania",
            "badania palpacyjnego"
        ],
        "correctAnswer": 1
    },
    {
        "question": "W którym miejscu można osłuchać zastawkę aortalną?",
        "options": [
            "nie można jej osłuchać",
            "gdziekolwiek w okolicy serca",
            "w 2 przestrzeni międzyżebrowej po prawej stronie mostka",
            "w 2 przestrzeni międzyżebrowej po lewej stronie mostka"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Przyjmowanie pozycji siedzącej przez pacjenta jest typowe dla:",
        "options": [
            "ataku astmy oskrzelowej",
            "obrzęku płuc",
            "wysięku w jamie opłucnej",
            "prawidłowe A i B"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Na co zwracasz uwagę badając palpacyjnie klatkę piersiową?",
        "options": [
            "zgrubienia",
            "drżenie głosowe",
            "tkliwość",
            "wszystkie z wymienionych"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Śledziona jest wyczuwalna:",
        "options": [
            "zawsze",
            "kiedy jest powiększona",
            "w wieku dziecięcym",
            "w gorączce"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Badanie fizykalne jamy brzusznej wykonujemy w następującej kolejności:",
        "options": [
            "oglądanie, osłuchiwanie, palpacja, opukiwanie",
            "palpacja, osłuchiwanie, opukiwanie, oglądanie",
            "oglądanie, osłuchiwanie, opukiwanie, palpacja",
            "osłuchiwanie, palpacja, opukiwanie, oglądanie"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Objaw Blumberga jest objawem:",
        "options": [
            "rozlanych zmian zapalnych jamy brzusznej (wyrostek robaczkowy)",
            "przekrwienia narządów klatki piersiowej",
            "przepełnienia pęcherza moczowego",
            "rwy kulszowej"
        ],
        "correctAnswer": 0
    },
    {
        "question": "W prawym górnym kwadrancie brzucha znajduje się:",
        "options": [
            "wątroba, pęcherzyk żółciowy, odźwiernik, dwunastnica, głowa trzustki, górny brzeg prawej nerki",
            "wątroba, pęcherzyk żółciowy, żołądek, trzon trzustki, nerka",
            "wątroba, pęcherzyk żółciowy, esica, jajniki, jajowód",
            "górny brzeg prawej nerki, wyrostek robaczkowy, prawy jajnik"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Badanie piersi przez kobietę najlepiej jest przeprowadzać:",
        "options": [
            "co dwa miesiące podczas miesiączki",
            "co miesiąc ok tygodnia po rozpoczęciu menstruacji",
            "podczas jajeczkowania",
            "w każdym czasie cyklu"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Zastawkę trójdzielną osłuchuje się w punkcie:",
        "options": [
            "Erba, tj. III lewe międzyżebrze przy mostku",
            "V lewe międzyżebrze tuż przy mostku i lewej krawędzi dolnej części mostka",
            "V lewe międzyżebrze 1 cm do wewnątrz od linii środkowoobojczykowej",
            "II prawe międzyżebrze przy mostku"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Próba Allena wykonywana jest dla oceny:",
        "options": [
            "drożności tętnicy podkolanowej i grzbietowej stopy",
            "drożności tętnicy łokciowej i promieniowej",
            "sprawności zastawek żył łączących",
            "drożności żył odpiszczelowej i odstrzałkowej"
        ],
        "correctAnswer": 1
    },
    {
        "question": "W badaniu gruczołów piersiowych metoda „kwadrantów” jest to:",
        "options": [
            "metoda palpacji tkanki gruczołowej piersi",
            "metoda inspekcji wzrokowej gruczołów piersiowych",
            "metoda opisu umiejscowienia wykrytych zmian podczas badania gruczołów piersiowych",
            "metoda oceny brodawek piersiowych"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Dodatni objaw Goldflama polega na odczuciu:",
        "options": [
            "tępego krótkiego nacisku",
            "bólu",
            "drżenia, wibracji",
            "objawów kolki nerkowej"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Rozkurczowe szmery są zawsze:",
        "options": [
            "fizjologiczne",
            "patologiczne",
            "fizjologiczne i patologiczne",
            "żadne z powyższych"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Prawidłowe wypełnienie kapilarne wynosi:",
        "options": [
            "1-3 sek.",
            "3-5 sek.",
            "3-6 sek.",
            "0,5 sek."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Który parametr nie jest brany pod uwagę w ocenie czerniaka:",
        "options": [
            "asymetria",
            "tony serca i szmer",
            "kolor",
            "średnica"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Pacjent ma na skórze czerwoną, płaską 3 mm zmianę, możesz ją określić jako:",
        "options": [
            "krosta",
            "grudka",
            "plamka",
            "pęcherzyk"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Pacjent ma ropień przy podstawie zęba żuchwy. Które węzły chłonne będą powiększone?",
        "options": [
            "pachowe",
            "potyliczne",
            "podbródkowe",
            "zauszne"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Skutkiem niezstąpienia jąder może być rak jądra. Jakie znasz inne powikłania powyższego stanu?",
        "options": [
            "nietrzymanie moczu",
            "zaburzenia erekcji",
            "homoseksualizm",
            "niepłodność"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Konfrontacja jest techniką stosowaną w wywiadzie, jest stosowana w celu:",
        "options": [
            "rozzłoszczenia pacjenta",
            "wyjaśnienia sprzecznych informacji",
            "upewnienia się, że rodzina odwiedza pacjenta",
            "rozpoznania preferencji seksualnych pacjenta"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Jaka jest różnica między delirium a demencją?",
        "options": [
            "demencja może się cofnąć",
            "delirium występuje tylko u osób starszych",
            "demencja występuje tylko u osób starszych",
            "delirium jest stanem ostrym, który zwykle się cofa, demencja jest powolnym postępującym pogorszeniem funkcji psychicznych"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Pacjentowi polecono stać ze stopami złączonymi i zamkniętymi oczami przez 20-30 sekund. Badanie to umożliwia dokonanie oceny następującej części mózgu:",
        "options": [
            "kory mózgowej",
            "móżdżku",
            "pnia mózgu, głębokich odruchów ścięgnistych",
            "mostu"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Cechą zamienną padaczki są napady drgawkowe, które są:",
        "options": [
            "uwarunkowane tylko genetycznie",
            "wynikiem prawidłowego funkcjonowania mózgu, ale w okresie zwiększonego stresu",
            "wyrazem zakłócenia prawidłowej czynności mózgu, powstającej w wyniku wyładowania patologicznego komórek nerwowych",
            "wynikiem uszkodzenia mózgu pochodzenia tylko metabolicznego"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Układ nerwowy dzielimy na układ:",
        "options": [
            "somatyczny i autonomiczny",
            "ośrodkowy i obwodowy",
            "współczulny i przywspółczulny",
            "ośrodkowy i współczulny"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Afazja ruchowa to:",
        "options": [
            "upośledzenie rozumienia mowy przy zachowanej zdolności mówienia",
            "utrata zdolności właściwego określenia pokazywanych przedmiotów",
            "całkowite upośledzenie zdolności mówienia przy zachowanym zrozumieniu",
            "czysta ślepota słowna przy zachowanej ostrości wzroku"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Oftalmoskop to przyrząd służący do badania:",
        "options": [
            "dna oka",
            "ucha środkowego",
            "spojówek",
            "wielkości źrenic"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Badaniem fizykalnym możemy zbadać tylko zatoki:",
        "options": [
            "szczękowe i sitowe",
            "czołowe i sitowe",
            "szczękowe i czołowe",
            "klinowe"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Termin anizokoria oznacza:",
        "options": [
            "nierówność źrenic",
            "określenie wielkości źrenic",
            "oczopląs wzrokowo-ruchowy",
            "odruch źrenic na światło"
        ],
        "correctAnswer": 0
    },
    {
        "question": "W czasie badania układu oddechowego opukujemy:",
        "options": [
            "okolicę przeponową",
            "żebra",
            "przestrzenie międzyżebrowe",
            "mostek"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Chłodna i szorstka skóra, włosy suche i łamliwe mogą być objawami:",
        "options": [
            "nadczynności tarczycy",
            "nadczynności gruczołów przytarczycznych",
            "niedoczynności tarczycy",
            "niedoczynności gruczołów przytarczycznych"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Badając skórę w sekwencji „oglądanie” nie przywiązujemy uwagi do:",
        "options": [
            "kolorytu",
            "zarysu",
            "temperatury",
            "wilgotności"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Który objaw jest typowy dla zapalenia gruczołu krokowego:",
        "options": [
            "wielomocz",
            "zaczerwienienie",
            "częstomocz",
            "krwiomocz"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Do nieinwazyjnych metod diagnostyki jajników zaliczamy:",
        "options": [
            "USG",
            "biopsję",
            "laparoskopię",
            "laparotomię"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Wskaż grupę węzłów chłonnych nie mających znaczenia w ocenie palpacyjnej gruczołu sutkowego:",
        "options": [
            "pachowe",
            "szyjne",
            "pachwinowe",
            "podobojczykowe"
        ],
        "correctAnswer": 2
    },
    {
        "question": "W którym miejscu można osłuchać zastawkę mitralną?",
        "options": [
            "w 2 przestrzeni międzyżebrowej po stronie prawej mostka",
            "w 5 przestrzeni międzyżebrowej w linii środkowo-obojczykowej lewej",
            "w 5 przestrzeni międzyżebrowej w linii przymostkowej lewej",
            "w punkcie Erba"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Powiększenie średnicy uderzenia koniuszkowego powyżej 2,5 cm świadczy o:",
        "options": [
            "przeroście komory prawej",
            "wzmożonym ciśnieniu krwi na obwodzie (nadciśnienie tętnicze)",
            "zaburzeniach rytmu",
            "zaburzeniach przewodnictwa"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Badanie kontrastowe naczyń wieńcowych nazywamy:",
        "options": [
            "wentrykulografia",
            "scyntygrafia",
            "koronarografia",
            "flebografia"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Objaw Blumberga – tzw. bolesności odbitej polega na:",
        "options": [
            "wystąpieniu bólu w czasie opukiwania okolicy lędźwiowej",
            "wystąpieniu ostrego i silniejszego bólu po zwolnieniu ucisku niż przy samym ucisku",
            "pojawieniu się silnego skurczu mięśni prawego uda",
            "wybadaniu opukiwaniem guza jamy brzusznej"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Nagły bardzo silny ból w okolicy lędźwiowej, promieniujący wzdłuż wewnętrznej części ud może świadczyć o:",
        "options": [
            "zapaleniu wyrostka robaczkowego",
            "niedrożności porażennej jelit",
            "napadzie kolki nerkowej",
            "perforacji żołądka"
        ],
        "correctAnswer": 2
    },
    {
        "question": "W celu oceny aktywności perystaltycznej jelit:",
        "options": [
            "osłuchujemy każdy kwadrant jamy brzusznej przez 5 minut",
            "osłuchujemy każdy kwadrant jamy brzusznej przez 30 sekund",
            "wykonujemy palpację płytką",
            "badamy wykorzystując palpację głęboką"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Chory z objawami ostrego brzucha powinien być transportowany w pozycji:",
        "options": [
            "na wznak",
            "Trendelenburga",
            "na boku lub w pozycji Fowlera z podkurczonymi nogami",
            "bezpiecznej"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Źródło krwawienia u pacjenta wymiotującego krwią w postaci „fusów kawy” znajduje się najprawdopodobniej w:",
        "options": [
            "przełyku (żylaki przełyku)",
            "żołądku",
            "jelicie grubym",
            "odbytnicy"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Komunikacja niewerbalna, czyli tzw. „mowa ciała” to:",
        "options": [
            "wygląd zewnętrzny człowieka, jego schludność i dobre wychowanie",
            "wygląd zewnętrzny człowieka, jego schludność i dobre wychowanie",
            "trudna do kontrolowania komunikacja bezsłowna oparta na przekazach w gestach, pozach, mimice i innych zewnętrznie obserwowalnych formach reakcji organizmu",
            "głęboko ukryte myśli i pragnienia człowieka"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Ważnymi cechami dobrego nadawcy jest:",
        "options": [
            "wyraźna artykulacja, dobra dykcja, bogate słownictwo",
            "nienaganny wygląd zewnętrzny, kultura osobista, wszechstronne zainteresowania",
            "umiejętność przeforsowania swojego punktu widzenia w rozmowie",
            "umiejętność słuchania, panowanie nad emocjami, nie przerywanie, dostosowanie słownictwa do rozmówcy, rekapitulowanie, parafrazowanie wypowiedzi interlokutora"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aktywne słuchanie to:",
        "options": [
            "budowanie takiego nastawienia w rozmowie, które jest istotne dla sytuacji słuchającego a nie nadawcy",
            "dobre przygotowanie merytoryczne i wysłuchiwanie rozmówcy w skupieniu",
            "utrzymywanie odpowiedniego kontaktu wzrokowego, koncentracji uwagi, świadomość pozycji ciała i gestykulacji, okazywanie empatycznego zrozumienia, przyjęcie akceptującej postawy wobec rozmówcy",
            "całkowite nastawienie kontaktu na odbiorcę pozbawione elementów aktywności słuchającego, które mogłyby zakłócić słuchanie"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Do osiągnięcia dobrego kontaktu i uzyskania porozumienia zwłaszcza w sytuacjach konfliktowych jest:",
        "options": [
            "umiejętność wykazania swojej racji za wszelką cenę",
            "skuteczne słuchanie",
            "zachowanie asertywne",
            "partnerski styl prowadzenia rozmowy"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Diagnoza pielęgniarska to:",
        "options": [
            "rozpoznanie stanu biologiczno-społecznego pacjenta",
            "wywiad pielęgniarski z podopiecznym i jego rodziną",
            "wnioski z danych o pacjencie wykazujące stan bio-psycho-społeczny człowieka",
            "rozpoznanie potrzeb bio-psycho-społecznych pacjenta"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Pomiar ciśnienia tętniczego winien być wykonany:",
        "options": [
            "po kilku minutach odpoczynku pacjenta",
            "standardowo w pozycji siedzącej lub leżącej chorego",
            "w warunkach spokoju",
            "wszystkie z powyższych"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Prawidłowy układ krzywizny kręgosłupa u człowieka dorosłego to:",
        "options": [
            "kifoza szyjna, lordoza piersiowa, kifoza lędźwiowa",
            "lordoza szyjna, kifoza piersiowa, lordoza lędźwiowa",
            "lordoza szyjna, lordoza piersiowa, kifoza lędźwiowa",
            "kifoza szyjna, lordoza piersiowa, kifoza lędźwiowa"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Najważniejszym objawem pozwalającym stwierdzić zatrzymanie krążenia jest:",
        "options": [
            "zwężenie źrenic",
            "poszerzenie źrenic",
            "utrata przytomności",
            "brak tętna na dużych naczyniach"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Najczęstszą przyczyną niedrożności dróg oddechowych u chorego nieprzytomnego jest:",
        "options": [
            "zapadanie się języka",
            "zaleganie wydzieliny",
            "skurcz mięśni oddechowych",
            "ciało obce"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Prawidłowa częstość akcji serca u dorosłego człowieka w spoczynku wynosi:",
        "options": [
            "40-50 uderzeń na minutę",
            "50-60 uderzeń na minutę",
            "60-90 uderzeń na minutę",
            "80-100 uderzeń na minutę"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Chory z podejrzeniem kardiogennego obrzęku płuc powinien być transportowany w pozycji:",
        "options": [
            "na wznak",
            "na boku",
            "siedzącej",
            "Trendelenburga"
        ],
        "correctAnswer": 2
    },
    {
        "question": "W trakcie badania skóry stwierdzasz zanokcicę, tzn.:",
        "options": [
            "grzbietową część paliczka dalszego zaokrągloną i bulwiastą, zwiększoną wypukłość płytki paznokciowej (pałeczkowatość)",
            "obrąbki paznokciowe zaczerwienione, obrzmiałe, tkliwe",
            "tzw. paznokcie Terry’ego – białawe z dystalną obwódką czerwono-brązową",
            "płytki paznokcia niebolesne, oddzielające się od podłoża"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Zaburzenia świadomości w kolejności wzrastającej to:",
        "options": [
            "znużenie, senność, przedsenność, coma",
            "półśpiączka, coma, odmóżdżenie, odkorowanie",
            "przedsenność, senność, półśpiączka, coma",
            "coma, półśpiączka, senność, odkorowanie"
        ],
        "correctAnswer": 2
    },
    {
        "question": "ABC reanimacji oznacza:",
        "options": [
            "odessanie, zaintubowanie, wentylowanie",
            "uderzenie przedsercowe, masaż serca",
            "udrożnienie dróg oddechowych, sztuczne oddychanie, krążenie",
            "zabezpieczenie miejsca wypadku, wentylowanie, masaż serca"
        ],
        "correctAnswer": 2
    },
    {
        "question": "W którym miejscu można osłuchać zastawkę płucną?",
        "options": [
            "nie można jej osłuchać",
            "gdziekolwiek w okolicy serca",
            "w 2 przestrzeni międzyżebrowej po prawej stronie mostka",
            "w 2 przestrzeni międzyżebrowej po lewej stronie mostka"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Wskaż nieprawidłowe twierdzenie dotyczące zatok i oczu:",
        "options": [
            "przy bakteryjnym zapaleniu zatok, podczas testu pochylenia pacjent odczuwa ból",
            "palpacyjnie można zbadać tylko zatokę szczękową i czołową",
            "badając ruchy gałek ocznych prosimy pacjenta o skierowanie oczu w kierunkach wskazanych przez literę H",
            "prawidłową reakcję źrenic na ostre światło jest zwężenie źrenicy oświetlanej i rozszerzenie źrenicy, na którą nie jest skierowany strumień światła"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Skala Glasgow służy do oceny:",
        "options": [
            "napięcia mięśniowego",
            "równowagi ciała",
            "napięcia tętna",
            "stanu neurologicznego świadomości (przytomności)"
        ],
        "correctAnswer": 3
    },
    {
        "question": "W stawie kolanowym można wykonać następujące ruchy:",
        "options": [
            "pronacji i supinacji",
            "odwodzenia i przywodzenia",
            "rotacji zewnętrznej i wewnętrznej",
            "zginania i prostowania"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Zbieranie wywiadu ma na celu:",
        "options": [
            "dokładne poznanie chorego",
            "zapoznanie pacjenta z personelem",
            "uzyskanie informacji, na podstawie których można postawić wstępną diagnozę",
            "uzupełnienie dokumentacji medycznej"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Wymień kolejne etapy przeprowadzenia wywiadu:",
        "options": [
            "przywitanie, przygotowanie środowiska, rozmowa z pacjentem",
            "przegląd dokumentacji, przygotowanie środowiska, przywitanie, postawienie wstępnej diagnozy, rozmowa z pacjentem",
            "przegląd dokumentacji, przygotowanie środowiska, przywitanie, rozmowa z pacjentem, postawienie wstępnej diagnozy",
            "przegląd dokumentacji, postawienie wstępnej diagnozy"
        ],
        "correctAnswer": 2
    },
    {
        "question": "OLD CARD służy do:",
        "options": [
            "dokładnego przedstawienia się osoby przeprowadzającej wywiad",
            "jasnego i dokładnego określenia wszystkich cech głównej dolegliwości pacjenta",
            "określenia przebiegu choroby pacjenta",
            "schematycznego przedstawienia więzi rodzinnych pacjenta"
        ],
        "correctAnswer": 1
    },
    {
        "question": "W przypadku przeprowadzania wywiadu z gadatliwym pacjentem:",
        "options": [
            "pozwalamy na wygadanie się pacjenta",
            "informujemy, że mamy ograniczony czas na rozmowę z pacjentem",
            "przerywamy i zadajemy celowe pytania",
            "rezygnujemy z przeprowadzenia wywiadu"
        ],
        "correctAnswer": 2
    },
    {
        "question": "W skład kompleksowego wywiadu zdrowotnego wchodzi:",
        "options": [
            "wywiad społeczny, wywiad rodzinny, wywiad pod kątem występowania dolegliwości ze strony poszczególnych narządów i układów",
            "wywiad pod kątem występowania dolegliwości ze strony poszczególnych narządów i układów, wywiad psycho-socjalny, wywiad społeczny",
            "wywiad pod kątem występowania dolegliwości ze strony poszczególnych narządów i układów, wywiad rodzinny, wywiad psycho-socjalny",
            "treści zawarte w wywiadzie zależą od osoby przeprowadzającej wywiad"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Tkliwość, zgrubienia, ruchomość klatki piersiowej i drżenie głosowe można zbadać:",
        "options": [
            "oglądając klatkę piersiową",
            "badając palpacyjnie klatkę piersiową",
            "opukując klatkę piersiową",
            "osłuchując klatkę piersiową"
        ],
        "correctAnswer": 1
    },
    {
        "question": "W ocenie stanu psychicznego do funkcji poznawczych nie należy:",
        "options": [
            "orientacja co do miejsca, czasu, osoby",
            "postrzeganie, złudzenia, omamy, nieprzyjemne, niezwykłe myśli",
            "skupienie uwagi (zdolność powtarzania serii liczb w kolejności i wspak)",
            "pamięć dawna (data urodzin, rocznice, nazwa swojej szkoły)"
        ],
        "correctAnswer": 1
    },
    {
        "question": "W badaniu piersi techniką palpacyjną oceniamy:",
        "options": [
            "konsystencję, zwiększone ocieplenie, tkliwość guzków, obecność wydzieliny",
            "symetrię, barwę, wielkość, zgrubienia, kurczenia skóry, dołeczki",
            "obrzęk, wygląd otoczki i sutków, obecność wydzieliny",
            "wygląd otoczki i sutków, barwę, symetrię"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Wybierz zachowania ułatwiające prowadzenie wywiadu:",
        "options": [
            "normalizacja uczuć",
            "stosowanie zwrotów wyrażających empatię",
            "patrzenie na problemy chorego z własnej perspektywy",
            "wszystkie"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Jednym z objawów niewydolności krążenia tętniczego obwodowego jest:",
        "options": [
            "obrzęk często znaczny",
            "tętno osłabione lub brak",
            "temperatura podwyższona",
            "żadne z powyższych"
        ],
        "correctAnswer": 1
    }
];

        let currentQuestionIndex = 0;
        let userAnswers = [];
        let drawnQuestions = [];

        function drawQuestions(numberOfQuestions) {
            const shuffled = [...questions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numberOfQuestions);
        }

        function showQuestion(questionIndex) {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '';

            const questionData = drawnQuestions[questionIndex];
            const questionElement = document.createElement('h2');
            questionElement.textContent = `Pytanie nr ${questionIndex + 1}: ${questionData.question}`;
            quizContainer.appendChild(questionElement);

            questionData.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
            questionData.options.forEach((option, index) => {
                const optionElement = document.createElement('div');

                const radioButton = document.createElement('input');
                radioButton.type = 'radio';
                radioButton.name = 'answer';
                radioButton.value = index;
                radioButton.id = `option${index}`;
                const radioButton = document.createElement('input');
                radioButton.type = 'radio';
                radioButton.name = 'answer';
                radioButton.value = index;
                radioButton.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;
                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionElement.appendChild(radioButton);
                optionElement.appendChild(label);
                optionElement.appendChild(radioButton);
                optionElement.appendChild(label);

                quizContainer.appendChild(optionElement);
            });
        }
                quizContainer.appendChild(optionElement);
            });
        }

        document.getElementById('next-question-btn').addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (selectedOption) {
                userAnswers.push(parseInt(selectedOption.value));
                currentQuestionIndex++;

                if (currentQuestionIndex < drawnQuestions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    showResults();
                }
            } else {
                alert('Proszę wybrać odpowiedź!');
            }
        });

        function showResults() {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '<h2 style="text-align: center;">Wynik</h2>';
            let correctAnswersCount = 0;

            drawnQuestions.forEach((question, index) => {
                const resultElement = document.createElement('div');
                resultElement.innerHTML = `<strong>Pytanie nr ${index + 1}:</strong> ${question.question}<br>`;

                question.options.forEach((option, i) => {
                    const isCorrect = i === question.correctAnswer;
                    const userAnswer = userAnswers[index] === i;
                    let optionText = `${i + 1}: ${option}`;
                question.options.forEach((option, i) => {
                    const isCorrect = i === question.correctAnswer;
                    const userAnswer = userAnswers[index] === i;
                    let optionText = `${i + 1}: ${option}`;

                    const optionSpan = document.createElement('span');
                    optionSpan.textContent = optionText;
                    const optionSpan = document.createElement('span');
                    optionSpan.textContent = optionText;

                    if (userAnswer && isCorrect) {
                        optionSpan.classList.add('correct');
                        correctAnswersCount++;
                    } else if (userAnswer) {
                        optionSpan.classList.add('incorrect');
                    }
                    if (userAnswer && isCorrect) {
                        optionSpan.classList.add('correct');
                        correctAnswersCount++;
                    } else if (userAnswer) {
                        optionSpan.classList.add('incorrect');
                    }

                    if (isCorrect) {
                        optionSpan.classList.add('correct');
                    }
                    if (isCorrect) {
                        optionSpan.classList.add('correct');
                    }

                    resultElement.appendChild(optionSpan);
                    resultElement.innerHTML += '<br>';
                });
                    resultElement.appendChild(optionSpan);
                    resultElement.innerHTML += '<br>';
                });

                quizContainer.appendChild(resultElement);
            });
                quizContainer.appendChild(resultElement);
            });

            const resultContainer = document.createElement('div');
            resultContainer.classList.add('result-container');
            const scorePercentage = (correctAnswersCount / drawnQuestions.length) * 100;
            resultContainer.innerHTML = `Twój wynik: ${correctAnswersCount}/${drawnQuestions.length} (${scorePercentage.toFixed(2)}%)`;
            quizContainer.appendChild(resultContainer);

            const retryButton = document.createElement('button');
            retryButton.textContent = "Spróbuj jeszcze raz";
            retryButton.addEventListener('click', resetQuiz);

            const backButton = document.createElement('button');
            backButton.textContent = "Powrót do menu";
            backButton.addEventListener('click', resetToMenu);

            quizContainer.appendChild(retryButton);
            quizContainer.appendChild(backButton);

            document.getElementById('next-question-btn').style.display = "none";
        }

        function showReview() {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '';
            let currentPage = 0;
            const questionsPerPage = 10;

            function displayPage(page) {
                quizContainer.innerHTML = '';
                const startIndex = page * questionsPerPage;
                const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

                for (let i = startIndex; i < endIndex; i++) {
                    const questionElement = document.createElement('h3');
                    questionElement.textContent = `Pytanie nr ${i + 1}: ${questions[i].question}`;
                    quizContainer.appendChild(questionElement);

                    questions[i].options.forEach((option, index) => {
                        const answerElement = document.createElement('div');
                        const isCorrect = index === questions[i].correctAnswer;
                        answerElement.textContent = `${index + 1}: ${option}`;
                        if (isCorrect) {
                            answerElement.classList.add('correct');
                        }
                        quizContainer.appendChild(answerElement);
                    });
                }

                const paginationContainer = document.createElement('div');
                paginationContainer.id = "pagination";

                const prevButton = document.createElement('button');
                prevButton.textContent = "<< Poprzednia strona";
                prevButton.disabled = page === 0;
                prevButton.addEventListener('click', () => {
                    if (page > 0) {
                        displayPage(page - 1);
                    }
                });

                const nextButton = document.createElement('button');
                nextButton.textContent = "Następna strona >>";
                nextButton.disabled = endIndex >= questions.length;
                nextButton.addEventListener('click', () => {
                    if (endIndex < questions.length) {
                        displayPage(page + 1);
                    }
                });

                paginationContainer.appendChild(prevButton);
                paginationContainer.appendChild(nextButton);
                quizContainer.appendChild(paginationContainer);

                const backButton = document.createElement('button');
                backButton.textContent = "Powrót do menu";
                backButton.addEventListener('click', resetToMenu);
                quizContainer.appendChild(backButton);
            }

            displayPage(currentPage);
        }

        function resetQuiz() {
            const numQuestions = parseInt(document.getElementById('numQuestions').value);

            if (numQuestions > 0 && numQuestions <= questions.length) {
                drawnQuestions = drawQuestions(numQuestions);
                currentQuestionIndex = 0;
                userAnswers = [];
                showQuestion(currentQuestionIndex);
                document.getElementById('next-question-btn').style.display = 'block';
            } else {
                alert(`Wybierz liczbę pytań od 1 do ${questions.length}`);
            }
        }

        function resetToMenu() {
            currentQuestionIndex = 0;
            userAnswers = [];
            drawnQuestions = [];

            document.getElementById('menu').style.display = 'block';
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('next-question-btn').style.display = 'none';
        }

        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            const numQuestions = parseInt(document.getElementById('numQuestions').value);

            if (numQuestions > 0 && numQuestions <= questions.length) {
                drawnQuestions = drawQuestions(numQuestions);
                currentQuestionIndex = 0;
                userAnswers = [];

                document.getElementById('menu').style.display = 'none';
                document.getElementById('quiz-container').style.display = 'block';
                document.getElementById('next-question-btn').style.display = 'block';

                showQuestion(currentQuestionIndex);
            } else {
                alert(`Wybierz liczbę pytań od 1 do ${questions.length}`);
            }
        });

        document.getElementById('review-questions-btn').addEventListener('click', () => {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';

            showReview();
        });