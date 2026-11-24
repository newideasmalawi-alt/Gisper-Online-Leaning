const $ = (selector) => document.querySelector(selector);
const subjects = {
  English: { icon: '📘', description: 'Grammar, vocabulary, reading and writing skills.', notes: [
    ['Parts of speech', 'Identify nouns, pronouns, verbs, adjectives, adverbs, prepositions and conjunctions.', 'A noun names a person, place, animal or thing. A verb tells an action or state. An adjective describes a noun; an adverb often describes a verb.', 'The careful pupil reads quietly. Careful describes pupil; quietly describes reads.', 'Do not call every word ending in -ly an adverb; check what it describes.', 'In a sentence, underline the naming word and circle the action word.', 'Read the whole sentence before choosing a word class.'],
    ['Nouns, pronouns and plurals', 'Use nouns and pronouns clearly and form common plurals.', 'A pronoun replaces a noun. Most nouns add -s or -es for a plural; some have special forms.', 'Amina has a book. She reads it. One child, two children.', 'Use a pronoun only when its meaning is clear.', 'Write one sentence with a noun and replace it with a pronoun.', 'Check irregular plurals instead of adding -s automatically.'],
    ['Verbs and tenses', 'Recognise verbs and use present, past and future forms.', 'Tense shows when an action happens. Use a time clue such as yesterday, today or tomorrow.', 'Today I walk to school. Yesterday I walked. Tomorrow I will walk.', 'Keep the tense consistent unless the time changes.', 'Change “We play outside” to past tense.', 'Look for time words before selecting a verb form.'],
    ['Agreement and sentence building', 'Match a subject and verb and write complete sentences.', 'A singular subject usually takes a singular present-tense verb; a plural subject takes a plural verb.', 'The girl sings. The girls sing.', 'Do not let a nearby plural noun distract you from the subject.', 'Correct: “The boys walks to class.”', 'Find the subject first, then check its verb.'],
    ['Punctuation and composition', 'Use capital letters and punctuation and plan a short piece of writing.', 'Begin sentences and proper names with capital letters. Use a full stop for a statement, a question mark for a question and a comma to separate items.', 'On Monday, Tiwonge visited Lilongwe.', 'Do not join several ideas with commas alone.', 'Write a short paragraph about a school day and check its capitals and full stops.', 'Plan a beginning, middle and ending; reread for spelling.']
  ]},
  Chichewa: { icon: '🗣️', description: 'Chichewa reading, grammar, vocabulary and writing practice.', notes: [
    ['Mitundu ya mawu', 'Kuzindikira maina, mawu osonyeza zochita ndi mawu ofotokoza.', 'Dzina limatchula munthu, malo, nyama kapena chinthu. Mawu osonyeza zochita amasonyeza zomwe zikuchitika. Werengani chiganizo chonse kuti mumvetse ntchito ya mawu.', 'Mwana akuwerenga buku. “Mwana” ndi dzina; “akuwerenga” ikusonyeza chochita.', 'Musamasankhe mtundu wa mawu potengera maonekedwe ake okha.', 'Lembani maina awiri ndi mawu awiri osonyeza zochita.', 'Yang’anani tanthauzo la mawu m’chiganizo.'],
    ['Kapangidwe ka ziganizo', 'Kuwerenga ndi kulemba ziganizo zomveka.', 'Chiganizo chimapereka ganizo lomveka. Mawu ayenera kukonzedwa kuti owerenga amvetse amene akuchita ndi zomwe akuchita.', 'Mwana akusewera pabwalo.', 'Musasiyire chiganizo chosamalizidwa.', 'Konzani mawu awa kuti apange chiganizo: “akumwa / madzi / mtsikana”.', 'Werengani chiganizo chanu mokweza kuti muone ngati chikumveka.'],
    ['Kalembedwe ndi zizindikiro', 'Kugwiritsa ntchito zilembo zazikulu ndi zizindikiro zopumira.', 'Yambani chiganizo ndi chilembo chachikulu ndipo malizitsani ndi chizindikiro choyenera. Funso limafuna chizindikiro cha funso.', 'Kodi mwafika? Inde, tafika.', 'Musaiwale chizindikiro kumapeto kwa chiganizo.', 'Lembani chiganizo chimodzi chofunsa funso.', 'Yang’ananinso zilembo ndi zizindikiro musanapereke ntchito.'],
    ['Kuwerenga ndi kumvetsa', 'Kupeza mfundo ndi tanthauzo m’ndime yaifupi.', 'Werengani ndime mosamala. Mafunso a ndani, kuti, liti ndi chifukwa chiyani amakuthandizani kupeza mfundo.', '“Luka anabzala mtengo pabwalo.” Ndani anabzala? Luka.', 'Musayankhe pogwiritsa ntchito zomwe mukudziwa kunja kwa ndime ngati funso likufuna mfundo ya m’ndime.', 'Werengani ndimeyi ndi kufotokoza amene anachita chiyani.', 'Bwererani ku ndime kuti mutsimikizire yankho lanu.'],
    ['Miyambi ndi kulemba', 'Kufotokoza tanthauzo la mwambi ndi kulemba ndime yosavuta.', 'Mwambi umapereka nzeru kapena chenjezo. Pofotokoza, nenani uthenga wake m’mawu anu ndipo perekani chitsanzo choyenera.', '“Manja awiri amathandizana” amatikumbutsa kufunika kogwirizana.', 'Musangosintha mawu a mwambi; fotokozani uthenga wake.', 'Lembani ndime ya ziganizo zitatu yokhudza kuthandizana.', 'Yambani ndi ganizo lalikulu ndipo gwiritsani ntchito ziganizo zomveka.']
  ]},
  Mathematics: { icon: '➗', description: 'Number skills, operations, measurement and problem-solving.', notes: [
    ['Whole numbers and place value', 'Read numbers and identify the value of a digit.', 'A digit’s place gives its value. In 352, 3 means 300, 5 means 50 and 2 means 2.', 'In 4,218, the 2 has a value of 200.', 'Do not confuse a digit with its place value.', 'Write 630 in expanded form.', 'Line up place values when calculating.'],
    ['Addition and subtraction', 'Add and subtract whole numbers accurately.', 'Estimate first. Regroup when a place value is too small to subtract or has a total of ten or more.', '48 + 27 = 75; 75 − 27 = 48.', 'Keep digits in the correct columns.', 'Calculate 156 + 38 and check by subtraction.', 'Use the inverse operation to check your answer.'],
    ['Multiplication and division', 'Use multiplication facts and relate multiplication to division.', 'Multiplication combines equal groups. Division shares equally or finds the number of groups.', '4 × 6 = 24, so 24 ÷ 6 = 4.', 'Check division by multiplying the quotient by the divisor.', 'Share 35 oranges equally among 5 children.', 'Write the operation before solving a word problem.'],
    ['Fractions and measurement', 'Recognise simple fractions and use standard units.', 'A fraction names equal parts of a whole. Use appropriate units for length, mass, capacity and time.', 'One half is written 1/2; 100 centimetres make 1 metre.', 'The parts of a fraction must refer to equal parts.', 'Which is longer: 1 metre or 80 centimetres?', 'Include the unit with measurement answers.'],
    ['Shapes and word problems', 'Name common shapes and solve simple problems.', 'A square has four equal sides. A rectangle has four right angles. Read a word problem and identify the known values and the question.', 'A rectangle has length 5 cm and width 3 cm; its perimeter is 16 cm.', 'Perimeter is distance around a shape, not the space inside it.', 'Draw a rectangle and label its sides.', 'Estimate whether your answer is reasonable.']
  ]}
};

// Original starter practice bank. These questions are written for this site and are not represented as official PSLC questions.
const rawQuestions = {
  English: [
    ['Which word is a noun in “The farmer planted maize.”', 'farmer', ['planted','the','quickly'], 'Farmer names a person.'],
    ['Choose the pronoun: “Lina said she was ready.”', 'she', ['Lina','said','ready'], 'She replaces or refers to a person’s name.'],
    ['Which word is the verb in “The birds sing.”', 'sing', ['birds','the','bright'], 'Sing tells the action.'],
    ['Choose the adjective: “We saw a tall tree.”', 'tall', ['saw','we','tree'], 'Tall describes the tree.'],
    ['Which word is an adverb in “The baby slept peacefully.”', 'peacefully', ['baby','slept','the'], 'Peacefully describes how the baby slept.'],
    ['Choose the preposition: “The ball is under the desk.”', 'under', ['ball','desk','is'], 'Under shows the relationship between the ball and desk.'],
    ['Which conjunction joins the words in “Tea and bread are ready.”', 'and', ['tea','bread','ready'], 'And joins words or ideas.'],
    ['Choose the correct article: “I ate ___ orange.”', 'an', ['a','thee','no article'], 'Use an before a vowel sound.'],
    ['Choose the correct verb: “The children ___ to school every day.”', 'walk', ['walks','walking','walked yesterday'], 'Children is plural, so use walk in the simple present.'],
    ['Which sentence is punctuated correctly?', 'Where is my ruler?', ['where is my ruler.','Where is my ruler.','where is my ruler?'], 'A question begins with a capital and ends with a question mark.'],
    ['Choose a synonym for “glad”.', 'happy', ['angry','empty','late'], 'Glad and happy have similar meanings.'],
    ['Choose an antonym for “early”.', 'late', ['soon','first','quick'], 'Late is the opposite of early.'],
    ['Choose the past tense of “play”.', 'played', ['plays','playing','will play'], 'The regular past tense adds -ed.'],
    ['Choose the correct plural of “box”.', 'boxes', ['boxs','boxies','box'], 'Add -es to nouns ending in x.'],
    ['Which is a complete sentence?', 'The girl opened the door.', ['Because the rain was heavy.','Running down the road.','After lunch.'], 'A complete sentence expresses a complete thought.'],
    ['Choose the correctly capitalised name.', 'Lake Malawi', ['lake malawi','Lake malawi','lake Malawi'], 'Names of specific places use capital letters.'],
    ['Choose the correct verb: “Yesterday, we ___ a story.”', 'read', ['reads','reading','will reads'], 'Read is the past form in this sentence; the time word is yesterday.'],
    ['Which word is a pronoun in “They helped us.”', 'They', ['helped','us? no','helped us'], 'They is a subject pronoun.'],
    ['Choose the correct possessive: “This is ___ book.” (Martha)', 'Martha’s', ['Marthas','Marthas’','Martha'], 'An apostrophe and s show singular possession.'],
    ['Which punctuation mark ends a statement?', 'Full stop (.)', ['Question mark (?)','Comma (,)','Apostrophe (’)' ], 'A statement usually ends with a full stop.'],
    ['Choose the correct comparative form of “small”.', 'smaller', ['more small','smallest','smallly'], 'Many short adjectives use -er for comparison.'],
    ['Choose the correct verb: “My brother and I ___ friends.”', 'are', ['is','am','be'], 'A compound subject joined by and takes are here.'],
    ['Which word is a proper noun?', 'Blantyre', ['city','school','river'], 'Blantyre is the name of a specific place.'],
    ['Choose the correct spelling.', 'because', ['becos','becouse','becaus'], 'Because is spelled b-e-c-a-u-s-e.'],
    ['Which sentence is a command?', 'Please close the window.', ['The window is open.','Is the window open?','The window was open.'], 'A command gives an instruction.'],
    ['Choose the correct contraction for “do not”.', 'don’t', ['doesn’t','didn’t','wont'], 'Do not contracts to don’t.'],
    ['Choose the correct word: “There are ___ books on the table.”', 'many', ['much','anyone','every'], 'Many is used with countable plural nouns.'],
    ['Which word is the subject in “A clever fox crossed the path.”', 'fox', ['clever','crossed','path'], 'The fox is the one doing the action.'],
    ['Choose the correct sentence.', 'She has two pencils.', ['She have two pencils.','She having two pencils.','She are two pencils.'], 'She takes has in the simple present.'],
    ['Choose the correct question word: “___ is your birthday?”', 'When', ['Who','Where','Which'], 'When asks about time.'],
    ['Which word has the opposite meaning to “careful”?', 'careless', ['helpful','useful','hopeful'], 'Careless means not careful.'],
    ['Choose the correctly punctuated list.', 'We need pens, books and rulers.', ['We need pens books and rulers','we need pens, books and rulers.','We need pens; books and rulers?'], 'Commas separate items in a list.'],
    ['Choose the future form: “Tomorrow, I ___ my aunt.”', 'will visit', ['visited','visits','visiting'], 'Will visit indicates a future action.'],
    ['Which word is an adjective in “The ripe mango fell.”', 'ripe', ['mango','fell','the'], 'Ripe describes the mango.'],
    ['Choose the correct plural of “child”.', 'children', ['childs','childes','childrens'], 'Children is the irregular plural.'],
    ['Choose the correct verb: “Neither the teacher nor the pupils ___ late.”', 'were', ['was','is','be'], 'With nor, the verb agrees with the nearer plural subject pupils.'],
    ['What does “enormous” mean?', 'very large', ['very quiet','very small','very tired'], 'Enormous means very large.'],
    ['Choose the correct homophone: “I can ___ the bell.”', 'hear', ['here','hair','heir'], 'Hear means to listen with the ears.'],
    ['Which sentence uses a comma correctly?', 'After school, we went home.', ['After, school we went home.','After school we, went home.','After school we went, home.'], 'A comma can follow an introductory phrase.'],
    ['Choose the correct verb form: “She ___ her homework now.”', 'is doing', ['do','does yesterday','are doing'], 'Is doing describes an action happening now.'],
    ['Which is an imperative verb in “Write your name neatly.”', 'Write', ['your','name','neatly'], 'Write gives a direct instruction.'],
    ['Choose the correct possessive pronoun: “That bag is ___.”', 'mine', ['my','me','I'], 'Mine is a possessive pronoun that stands alone.'],
    ['Which word is a conjunction in “I stayed inside because it rained.”', 'because', ['stayed','inside','rained'], 'Because connects the reason to the main idea.'],
    ['Choose the correct sentence in the past tense.', 'They visited the farm.', ['They visit the farm yesterday.','They visits the farm.','They will visited the farm.'], 'Visited is the past tense of visit.'],
    ['What is the plural of “leaf”?', 'leaves', ['leafs only','leavs','leafes'], 'Many nouns ending in f change to ves.'],
    ['Choose the correct punctuation for direct speech.', 'Mia said, “I am ready.”', ['Mia said “I am ready.','Mia said, I am ready.','Mia said “I am ready”.'], 'Quotation marks show the exact words spoken.'],
    ['Which word is an adverb in “Kondwani answered politely.”', 'politely', ['Kondwani','answered','the'], 'Politely explains how Kondwani answered.'],
    ['Choose the correct form: “There ___ a book and two pens.”', 'is', ['are','were','be'], 'The subject nearest the verb is singular book.'],
    ['Choose the best topic sentence for a paragraph about keeping clean.', 'Keeping clean helps us stay healthy.', ['My shoes are brown.','Yesterday was Tuesday.','A bird can fly.'], 'A topic sentence introduces the paragraph’s main idea.'],
    ['Which ending is suitable for a friendly letter?', 'Your friend,', ['Dear friend,','Once upon a time,','Question:'], 'Your friend is a suitable friendly-letter closing.']
  ],
  Chichewa: [
    ['Mawu oti “mwana” amatchula chiyani?', 'Munthu', ['Chochita','Mtundu','Nthawi'], '“Mwana” ndi dzina la munthu.'],
    ['M’chiganizo “Amai akuphika nsima”, mawu osonyeza chochita ndi ati?', 'akuphika', ['Amai','nsima','ndi'], '“Akuphika” akusonyeza chochita.'],
    ['Kodi chiganizo chimayamba ndi chiyani?', 'Chilembo chachikulu', ['Chizindikiro cha funso','Comma','Nambala nthawi zonse'], 'Chiganizo chimayamba ndi chilembo chachikulu.'],
    ['Ndi chizindikiro chiti chomwe chimamaliza funso?', '?', ['. ', ',', '! nthawi zonse'], 'Funso limathera ndi chizindikiro cha funso.'],
    ['Mawu oti “buku” ali mu kuchuluka kotani?', 'Limodzi', ['Awiri','Ambiri nthawi zonse','Palibe'], '“Buku” limatchula chinthu chimodzi.'],
    ['M’chiganizo “Mbalame ikuuluka”, dzina ndi liti?', 'Mbalame', ['ikuuluka','ndi','mwachangu'], 'Mbalame ndi dzina la nyama.'],
    ['Mawu oti “akuthamanga” akusonyeza chiyani?', 'Chochita', ['Malo','Dzina la munthu','Chizindikiro'], 'Akuthamanga akusonyeza chochita.'],
    ['Sankhani chiganizo cholembedwa bwino.', 'Mwana akuwerenga buku.', ['mwana akuwerenga buku','Mwana akuwerenga buku','Mwana akuwerenga buku,'], 'Chiganizo chimayamba ndi chilembo chachikulu ndi kutha ndi chizindikiro.'],
    ['Mawu oti “pamwamba” angasonyeze chiyani m’chiganizo?', 'Malo kapena malo ake', ['Dzina la munthu','Nthawi zonse chochita','Chiwerengero'], 'Mawuwa angasonyeze malo malinga ndi chiganizo.'],
    ['Kodi “Kodi mwafika?” ndi chiganizo chotani?', 'Funso', ['Lamulo','Nkhani yosimba','Dzina'], 'Chizindikiro cha ? chimasonyeza funso.'],
    ['Sankhani mawu omwe akutanthauza munthu amene amaphunzitsa.', 'Mphunzitsi', ['Tebulo','Kuthamanga','Lero'], 'Mphunzitsi ndi munthu amene amaphunzitsa.'],
    ['Kodi mawu oti “ana” akutanthauza chiyani?', 'Ana ambiri', ['Mwana mmodzi','Sukulu','Zochita'], '“Ana” ndi kuchuluka kwa mwana.'],
    ['M’mwambi, cholinga chachikulu nthawi zambiri ndi chiyani?', 'Kupereka nzeru kapena uphungu', ['Kutchula masiku','Kuwerenga manambala','Kupereka dzina la munthu'], 'Miyambi imapereka nzeru kapena uphungu.'],
    ['Kodi muyenera kuchita chiyani kuti mumvetse ndime?', 'Kuwerenga mosamala ndi kuyang’ana mfundo', ['Kungoyang’ana mutu','Kudumpha mawu onse','Kuyankha osawerenga'], 'Kuwerenga mosamala kumathandiza kupeza mfundo.'],
    ['Mawu oti “Luka anabzala mtengo” akuyankha funso liti pa “Ndani anabzala?”', 'Luka', ['mtengo','dzulo','pabwalo'], 'Luka ndi amene anachita zochitazo.'],
    ['Chiganizo choyenera chimafunika chiyani?', 'Ganizo lomveka', ['Mawu osagwirizana','Zizindikiro zambiri zokha','Nambala yokha'], 'Chiganizo chimafotokoza ganizo lomveka.'],
    ['Sankhani chizindikiro choyenera kumapeto kwa mawu ofunsa.', '?', ['.',';',':'], 'Funso limatha ndi ?.'],
    ['Mawu oti “sukulu” amatchula chiyani?', 'Malo', ['Chochita','Mtundu wa mawu okha','Nthawi'], 'Sukulu ndi malo ophunzirira.'],
    ['Mawu oti “kuthandizana” akugwirizana ndi lingaliro liti?', 'Kugwirira ntchito limodzi', ['Kugona','Kulemba nambala','Kuthawa'], 'Kuthandizana ndi kugwirira ntchito limodzi.'],
    ['Kodi ndime yabwino imakhala ndi chiyani?', 'Ziganizo zogwirizana pa mutu', ['Mawu osagwirizana','Mafunso okha','Maina okha'], 'Ziganizo za ndime zimafotokoza mutu umodzi.'],
    ['Mawu oti “madzi” amatchula chiyani?', 'Chinthu', ['Malo okha','Munthu','Chochita'], 'Madzi ndi chinthu.'],
    ['M’chiganizo “Atsikana akuimba”, ndani akuimba?', 'Atsikana', ['akuimba','nyimbo','palibe'], 'Atsikana ndi amene akuchita.'],
    ['Kodi kalata yoyenera imayamba ndi chiyani?', 'Moni kapena mawu oyenera kwa wolandira', ['Mathero okha','Yankho la funso','Mndandanda wa manambala'], 'Kalata imayamba ndi moni woyenera.'],
    ['Sankhani mawu oyenera kuti mumalize: “Ine ___ kusukulu.”', 'ndikupita', ['ndi tebulo','dzulo lero','buku'], '“Ndikupita” imakwaniritsa ganizo la chiganizo.'],
    ['Chizindikiro cha comma (,) chimathandiza chiyani?', 'Kusiyanitsa mbali za chiganizo kapena zinthu pa mndandanda', ['Kumaliza funso nthawi zonse','Kuyamba dzina','Kusonyeza nambala'], 'Comma imasiyanitsa zinthu kapena mbali zina za mawu.'],
    ['Mawu oti “mwamsanga” angafotokoze chiyani?', 'Mmene chochita chikuchitikira', ['Dzina la sukulu','Munthu yekha','Chizindikiro cha funso'], 'Angafotokoze mmene chochita chikuchitikira.'],
    ['Kodi muyenera kuchita chiyani mukapeza mawu osadziwika m’ndime?', 'Kuyang’ana mawu oyandikana nawo ndi tanthauzo la ndime', ['Kusiya kuwerenga','Kungoganiza popanda umboni','Kusintha ndime'], 'Mfundo za m’ndime zimathandiza kumvetsa mawu.'],
    ['Sankhani mawu a moni oyenera m’kalata.', 'Wokondedwa bambo,', ['Pomaliza,','Chifukwa chake,','Kodi?'], 'Wokondedwa bambo ndi moni woyenera kwa wolandira.'],
    ['Kodi mutu wa nkhani umathandiza chiyani?', 'Kudziwitsa zomwe nkhani ikufotokoza', ['Kumaliza nkhani','Kuwonetsa mayankho onse','Kuwerengera mawu'], 'Mutu umasonyeza nkhani yake.'],
    ['Mawu oti “mphunzitsi” amachokera ku gawo liti la mawu?', 'Dzina', ['Chizindikiro','Comma','Funso'], 'Mphunzitsi ndi dzina la munthu.'],
    ['Sankhani chiganizo chofunsa bwino.', 'Kodi mwawerenga bukuli?', ['Mwadya chakudya.','Bwerani kuno.','Bukuli lili patebulo.'], 'Chiganizo chimafunsa ndipo chili ndi ?.'],
    ['Kodi “Bwerani kuno.” ndi chiganizo chotani?', 'Lamulo kapena pempho', ['Funso','Dzina','Mwambi'], 'Mawu akupempha munthu kuti achitepo kanthu.'],
    ['Pofotokoza mwambi, muyenera kuchita chiyani?', 'Kufotokoza uthenga wake m’mawu anu', ['Kungobwereza mawu ake','Kulemba dzina lokha','Kusiya yankho lopanda tanthauzo'], 'Kufotokoza uthenga kumasonyeza kuti mwamvetsa.'],
    ['Ndi chiyani chomwe chimathandiza kuti ziganizo zigwirizane m’ndime?', 'Kukhala pa mutu umodzi', ['Kusakaniza mitu yosiyana','Kusiya mipata yonse','Kugwiritsa ntchito mafunso okha'], 'Ziganizo ziyenera kuthandiza kufotokoza mutu wa ndime.'],
    ['Sankhani mawu oyenera: “Ana ___ m’kalasi.”', 'akuphunzira', ['tebulo','pamwamba pa','dzulo ndi'], 'Akuphunzira ndi chochita chomwe chikugwirizana ndi ana.'],
    ['Kodi chilembo chachikulu chimagwiritsidwa ntchito pati?', 'Kumayambiriro kwa chiganizo ndi pa maina apadera', ['Pambuyo pa comma iliyonse','Pa mawu onse','Pamapeto pa chiganizo'], 'Chiganizo ndi maina apadera zimayamba ndi chilembo chachikulu.'],
    ['Nkhani yabwino imafunika kukhala ndi chiyani?', 'Malingaliro omveka ndi dongosolo', ['Mawu obwerezabwereza okha','Zizindikiro zopanda mawu','Mayina osagwirizana'], 'Dongosolo limathandiza owerenga kutsatira nkhani.'],
    ['Mawu oti “pabwalo” amasonyeza chiyani m’chiganizo?', 'Malo', ['Chochita','Munthu','Chiwerengero'], 'Pabwalo akusonyeza malo.'],
    ['Kodi yankho la funso la kumvetsa nkhani liyenera kuchokera kuti?', 'M’ndime kapena umboni wake', ['M’ndime ina iliyonse','M’maganizo okha','M’mawu a funso lokha'], 'Gwiritsani ntchito umboni wa m’ndime.'],
    ['Sankhani mawu oyenera kumapeto kwa kalata yaubwenzi.', 'Mnzako,', ['Wokondedwa mnzanga,','Mutu wa nkhani','Kodi muli bwanji?'], '“Mnzako” ndi mawu oyenera omaliza kalata yaubwenzi.'],
    ['Kodi kulemba molondola kumaphatikizapo chiyani?', 'Kuyang’ana kalembedwe ndi zizindikiro', ['Kulemba mwachangu kokha','Kusiya kuwerenga','Kuchotsa mitu'], 'Kuwunikanso kumathandiza kukonza zolakwika.'],
    ['Mawu oti “tsopano” akusonyeza nthawi yanji?', 'Nthawi ino', ['Nthawi yakale yokha','Malo','Munthu'], 'Tsopano amatanthauza nthawi yomwe ilipo.'],
    ['Mawu oti “dzulo” akusonyeza nthawi yanji?', 'Nthawi yapita', ['Nthawi yamtsogolo','Malo','Chiwerengero'], 'Dzulo limatanthauza tsiku lapita.'],
    ['Sankhani chiganizo choyenera pa nkhani ya ukhondo.', 'Timasamba m’manja tisanadye.', ['Mtengo ndi wobiriwira.','Ndili ndi pensulo.','Mbalame ili pamwamba.'], 'Chiganizo chikusonyeza mchitidwe wa ukhondo.'],
    ['Mawu ati angayambitse funso lofuna kudziwa malo?', 'Kuti', ['Liti','Ndani','Chifukwa'], 'Kuti amafunsa za malo.'],
    ['Mawu ati angayambitse funso lofuna kudziwa nthawi?', 'Liti', ['Kuti','Ndani','Chiyani'], 'Liti amafunsa za nthawi.'],
    ['Kodi chifukwa chiyani munthu amagwiritsa ntchito mutu m’kalata?', 'Kudziwitsa cholinga kapena mutu wa kalatayo', ['Kumaliza moni','Kuchotsa wolandira','Kulemba tsiku lokha'], 'Mutu umathandiza wolandira kudziwa nkhani ya kalata.'],
    ['Mukawerenga yankho lanu, muyenera kuyang’ana chiyani?', 'Kuti likuyankha funso ndi kulembedwa bwino', ['Kuti ndi lalitali kwambiri','Kuti lili ndi mafunso ambiri','Kuti lilibe zizindikiro'], 'Yankho liyenera kufotokoza funso ndi kugwiritsa ntchito kalembedwe koyenera.'],
    ['Mawu oti “mgwirizano” akutanthauza chiyani?', 'Kugwirizana ndi kuthandizana', ['Kukangana nthawi zonse','Kugona','Kuthamanga'], 'Mgwirizano umatanthauza kukhala pamodzi mogwirizana.'],
    ['Kodi chiganizo chimalizidwa ndi chiyani?', 'Chizindikiro choyenera monga full stop kapena funso', ['Chilembo chachikulu','Dzina lokha','Comma nthawi zonse'], 'Gwiritsani ntchito chizindikiro chogwirizana ndi tanthauzo la chiganizo.']
  ],
  Mathematics: []
};
// Add a varied, deterministic arithmetic practice bank for number fluency.
for (let i = 1; i <= 50; i++) {
  const a = i + 12, b = (i % 9) + 2, answer = a + b;
  rawQuestions.Mathematics.push([`Calculate ${a} + ${b}.`, String(answer), [String(answer + 1), String(answer - 1), String(answer + 10)], `Adding ${b} to ${a} gives ${answer}.`]);
}
const questionBank = Object.fromEntries(Object.entries(rawQuestions).map(([subject, items]) => [subject, items.map((item, index) => ({ id: `${subject}-${index}`, topic: 'Core practice', prompt: item[0], answer: item[1], distractors: item[2], explanation: item[3] }))]));
const practicals = {
 English: ['Write five nouns you can see in your classroom.','Write three sentences about your school using correct capital letters and full stops.','Change “The child walks home” to the past tense.','Write the plural forms of book, box, child, leaf and bus.','Correct this sentence: “the girls is playing outside”.','Write a friendly letter to a cousin describing your school.','Read a short story and write its main idea and two supporting details.','Write a sentence using an adjective and underline it.','Write a sentence with an adverb and explain what it describes.','Make a list of five words and write a synonym for each.','Write antonyms for noisy, early, strong, empty and kind.','Write four questions using who, what, where and when.','Write a short paragraph about keeping the environment clean.','Add punctuation: “where are you going asked mother”.','Write three sentences using prepositions of place.','Write a short composition about a memorable day.','Make a shopping list with commas between the items.','Write two sentences in the present and change them to the past.','Describe a person using four suitable adjectives.','Write instructions for washing your hands.'],
 Chichewa: ['Lembani maina asanu a zinthu za m’kalasi mwanu.','Lembani ziganizo zitatu zokhudza sukulu yanu ndi zizindikiro zoyenera.','Konzani chiganizo ichi: “mwana akusewera pabwalo”.','Lembani mawu asanu osonyeza zochita zomwe mumachita tsiku lililonse.','Werengani ndime ya Chichewa ndipo lembani ganizo lake lalikulu.','Lembani kalata yaubwenzi kwa mnzanu wokhala kutali.','Fotokozani uthenga wa mwambi umodzi womwe mumadziwa.','Lembani ziganizo zitatu zokhudza ukhondo.','Konzani mawu kuti apange chiganizo chomveka: “nsima / akudya / ana”.','Lembani mafunso atatu pogwiritsa ntchito ndani, kuti ndi liti.','Lembani ndime ya ziganizo zinayi yokhudza banja lanu.','Pezani dzina ndi mawu osonyeza chochita m’chiganizo chomwe mwalemba.','Lembani zinthu zinayi zomwe zimathandiza anthu kuthandizana.','Fotokozani mawu awiri atsopano omwe mwapeza m’ndime.','Lembani moni ndi mawu omaliza a kalata yovomerezeka kwa mphunzitsi.','Konzani zolakwika za chilembo chachikulu ndi zizindikiro m’ndime yanu.','Lembani chiganizo chimodzi chofunsa ndi chimodzi choyankha.','Fotokozani chifukwa chake kuwerenga kumathandiza ophunzira.','Lembani mutu woyenera wa nkhani ya ukhondo.','Lembani nkhani yaifupi yokhudza kuthandizana.'],
 Mathematics: ['Calculate 247 + 158 and check your answer using subtraction.','Calculate 500 − 276. Show your regrouping.','Write 3,406 in expanded form.','Find 8 × 7 and write a related division fact.','Share 48 oranges equally among 6 learners.','Which is greater: 3/4 or 1/2? Explain with a drawing.','Convert 2 metres to centimetres.','A rectangle is 8 cm long and 3 cm wide. Find its perimeter.','A learner buys a book for 750 kwacha and pays 1,000 kwacha. Find the change.','A bus leaves at 08:15 and arrives at 09:00. How long is the journey?','Write the next three numbers: 5, 10, 15, __, __, __.','Round 368 to the nearest ten.','Draw and name a shape with four equal sides.','There are 6 baskets with 9 mangoes each. How many mangoes are there?','A bottle holds 1 litre. How many millilitres is that?','Find 25% of 100 using a drawing or counters.','Arrange 405, 450 and 54 from smallest to largest.','A farmer plants 7 rows of 8 seedlings. How many seedlings?','A 30 cm ribbon is cut into 5 equal lengths. How long is each?','Write a word problem that uses subtraction and solve it.']
};
// The included question bank is a starter collection (50 per subject), not the requested 500 per subject.
// This is surfaced in the interface instead of claiming syllabus coverage that the repository cannot substantiate.
const state = { active: [], answers: {}, timerId: null, secondsLeft: 1800, submitted: false, practicalShown: [] };
const storageKey = 'gisper-learning-progress-v1';
function readHistory() { try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; } }
function saveHistory(history) { try { localStorage.setItem(storageKey, JSON.stringify(history.slice(-50))); } catch { /* Local progress is optional if browser storage is disabled. */ } }
function shuffle(items) { const result = [...items]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char])); }
const navs = document.querySelectorAll('.nav');
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.toggle('show', page.id === id));
  navs.forEach(button => button.classList.toggle('active', button.dataset.page === id));
  const title = ({ dashboard:'Dashboard', subjects:'Subjects', notes:'Study Notes', quiz:'Quiz Practice', practical:'Practical Activities' })[id] || 'Dashboard';
  $('#page-title').textContent = title;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
navs.forEach(button => button.addEventListener('click', () => showPage(button.dataset.page)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showPage(button.dataset.go)));
function renderCards() {
  const html = Object.entries(subjects).map(([name, data]) => `<article class="subject-card searchable"><div class="emoji">${data.icon}</div><h3>${name}</h3><p>${data.description}</p><p class="bank-note">${questionBank[name].length} starter practice questions · 10 quiz selections</p><button class="primary" data-notes="${name}">Study notes</button><button class="secondary" data-quiz="${name}">Start a quiz</button></article>`).join('');
  $('#subject-cards').innerHTML = html; $('#all-subjects').innerHTML = html;
  document.querySelectorAll('[data-notes]').forEach(button => button.addEventListener('click', () => { $('#notes-subject').value = button.dataset.notes; renderNotes(); showPage('notes'); }));
  document.querySelectorAll('[data-quiz]').forEach(button => button.addEventListener('click', () => { $('#quiz-subject').value = button.dataset.quiz; showPage('quiz'); }));
}
const optionHTML = Object.keys(subjects).map(name => `<option value="${name}">${name}</option>`).join('');
['notes-subject','quiz-subject','practical-subject'].forEach(id => { $(`#${id}`).innerHTML = optionHTML; });
$('#quiz-number').innerHTML = Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">Quiz ${i + 1}</option>`).join('');
function renderNotes() {
  const name = $('#notes-subject').value;
  const topics = subjects[name].notes;
  $('#notes-content').innerHTML = `<p class="source-note">Learner-friendly starter notes. No official syllabus or textbooks were supplied with this project; please review subject content with a qualified teacher.</p>${topics.map(([title, objective, explanation, example, mistake, practice, tip], index) => `<details class="topic" ${index === 0 ? 'open' : ''}><summary>${escapeHTML(title)}</summary><div class="topic-body"><h4>Learning objectives</h4><p>${escapeHTML(objective)}</p><h4>Explanation and rule</h4><p>${escapeHTML(explanation)}</p><h4>Example</h4><p>${escapeHTML(example)}</p><h4>Common mistake</h4><p>${escapeHTML(mistake)}</p><h4>Try it</h4><p>${escapeHTML(practice)}</p><p class="exam-tip"><b>Exam tip:</b> ${escapeHTML(tip)}</p></div></details>`).join('')}`;
}
$('#notes-subject').addEventListener('change', renderNotes);
function stopTimer() { if (state.timerId) clearInterval(state.timerId); state.timerId = null; }
function startTimer() {
  stopTimer(); state.secondsLeft = 1800;
  state.timerId = setInterval(() => { state.secondsLeft--; const display = $('#quiz-timer'); if (display) display.textContent = `Time left: ${Math.floor(state.secondsLeft / 60)}:${String(state.secondsLeft % 60).padStart(2, '0')}`; if (state.secondsLeft <= 0) submitQuiz(true); }, 1000);
}
function beginQuiz() {
  const name = $('#quiz-subject').value;
  state.active = shuffle(questionBank[name]).slice(0, 50).map(item => ({ ...item, options: shuffle([item.answer, ...item.distractors]) }));
  state.answers = {}; state.submitted = false;
  if ($('#timer-toggle').checked) startTimer(); else stopTimer();
  renderQuiz();
}
function renderQuiz() {
  const box = $('#quiz-box');
  if (!state.active.length) return;
  const answered = Object.keys(state.answers).length;
  const timer = $('#timer-toggle').checked ? '<span id="quiz-timer" class="timer"></span>' : '';
  box.innerHTML = `<div class="quiz-progress-row"><span>Answered ${answered} of ${state.active.length}</span>${timer}</div><div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${state.active.length}" aria-valuenow="${answered}"><span style="width:${answered / state.active.length * 100}%"></span></div>${state.active.map((item, index) => `<fieldset class="question ${state.submitted ? 'review-question' : ''}"><legend><b>${index + 1}.</b> ${escapeHTML(item.prompt)}</legend><div class="answers">${item.options.map(option => { const chosen = state.answers[item.id] === option; let resultClass = ''; if (state.submitted && option === item.answer) resultClass = 'correct'; else if (state.submitted && chosen) resultClass = 'incorrect'; return `<label class="answer-option ${resultClass}"><input type="radio" name="q-${item.id}" value="${escapeHTML(option)}" ${chosen ? 'checked' : ''} ${state.submitted ? 'disabled' : ''}><span>${escapeHTML(option)}</span></label>`; }).join('')}</div>${state.submitted ? `<p class="answer-explanation"><b>${state.answers[item.id] === item.answer ? 'Correct.' : `Correct answer: ${escapeHTML(item.answer)}.`}</b> ${escapeHTML(item.explanation)}</p>` : ''}</fieldset>`).join('')}${state.submitted ? `<div class="result-summary"><h3>Score: ${scoreQuiz()} / ${state.active.length} (${Math.round(scoreQuiz() / state.active.length * 100)}%)</h3><p>Review the answers and explanations above. Your result is saved on this device.</p><button id="restart-quiz" class="primary">Try another quiz</button></div>` : '<button id="submit-quiz" class="primary">Submit answers</button>'}`;
  if (!state.submitted) {
    box.querySelectorAll('input[type="radio"]').forEach(input => input.addEventListener('change', event => { const item = state.active.find(question => question.id === event.target.name.slice(2)); state.answers[item.id] = event.target.value; renderQuiz(); }));
    $('#submit-quiz').addEventListener('click', () => submitQuiz(false));
    const timerDisplay = $('#quiz-timer'); if (timerDisplay && state.timerId) timerDisplay.textContent = `Time left: ${Math.floor(state.secondsLeft / 60)}:${String(state.secondsLeft % 60).padStart(2, '0')}`;
  } else $('#restart-quiz').addEventListener('click', beginQuiz);
}
function scoreQuiz() { return state.active.reduce((score, item) => score + (state.answers[item.id] === item.answer ? 1 : 0), 0); }
function submitQuiz(timedOut) {
  if (!state.active.length || state.submitted) return;
  state.submitted = true; stopTimer();
  const record = { subject: $('#quiz-subject').value, quiz: Number($('#quiz-number').value), score: scoreQuiz(), total: state.active.length, date: new Date().toISOString(), timedOut };
  const history = readHistory(); history.push(record); saveHistory(history); renderDashboard(); renderQuiz();
}
$('#start-quiz').addEventListener('click', beginQuiz);
$('#practical-subject').addEventListener('change', renderPractical);
function renderPractical() {
  const subject = $('#practical-subject').value;
  const items = shuffle(practicals[subject]); state.practicalShown = items;
  $('#practical-list').innerHTML = `<p class="source-note">Original PSLC-style practice activities · not official past-paper questions.</p><h3>${subject}: practice activities</h3><ol>${items.map(item => `<li class="task">${escapeHTML(item)}</li>`).join('')}</ol><button id="refresh-practical" class="secondary">Show a new random order</button>`;
  $('#refresh-practical').addEventListener('click', renderPractical);
}
function renderDashboard() {
  const history = readHistory().slice().reverse();
  const scores = history.map(item => Math.round(item.score / item.total * 100));
  $('#stat-completed').textContent = history.length;
  $('#stat-average').textContent = scores.length ? `${Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)}%` : '—';
  $('#stat-best').textContent = scores.length ? `${Math.max(...scores)}%` : '—';
  $('#recent-history').innerHTML = history.length ? history.slice(0, 5).map(item => `<div class="history-item"><span><b>${escapeHTML(item.subject)}</b> · Quiz ${item.quiz}<small>${new Date(item.date).toLocaleDateString()}</small></span><b>${item.score}/${item.total} (${Math.round(item.score / item.total * 100)}%)</b></div>`).join('') : '<p class="muted">Completed quiz scores will appear here on this device.</p>';
}
$('#learning-search').addEventListener('input', event => {
  const query = event.target.value.trim().toLocaleLowerCase();
  if (!query) { document.querySelectorAll('.searchable').forEach(card => card.classList.remove('search-hidden')); return; }
  showPage('subjects');
  document.querySelectorAll('#all-subjects .searchable').forEach(card => card.classList.toggle('search-hidden', !card.textContent.toLocaleLowerCase().includes(query)));
  document.querySelectorAll('#all-subjects .search-result').forEach(result => result.remove());
  const notesMatches = Object.entries(subjects).flatMap(([name, data]) => data.notes.filter(topic => topic.join(' ').toLocaleLowerCase().includes(query)).map(topic => ({ name, title: topic[0] })));
  if (notesMatches.length) $('#all-subjects').insertAdjacentHTML('beforeend', `<div class="search-result"><h3>Matching note topics</h3>${notesMatches.map(match => `<button class="text-button" data-search-note="${escapeHTML(match.name)}">${escapeHTML(match.name)} — ${escapeHTML(match.title)}</button>`).join('')}</div>`);
  document.querySelectorAll('[data-search-note]').forEach(button => button.addEventListener('click', () => { $('#notes-subject').value = button.dataset.searchNote; renderNotes(); showPage('notes'); }));
});
renderCards(); renderNotes(); renderPractical(); renderDashboard();
