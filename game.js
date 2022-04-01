const PAIRS = 3,
	DEFAULT_FLAG = document.getElementById('flag-[LINE]-0').src,
	FLAGS = ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'EU', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'],
	BASE_LETTER_CLASS = document.getElementById('letter-[LINE]-0').className,
	BASE_PAIR_CLASS = document.getElementById('pair-[LINE]-0').className,
	CLASS_STATUS = [
		' bg-dark text-light', ' bg-warning text-dark', ' bg-success text-light', ' bg-primary text-light',
	],
	MAIN_SECTION = document.querySelector('main'),
	LINE_TEMPLATE = MAIN_SECTION.innerHTML,
	WORD_LIST = ["RETAIL", "LAVISH", "TALCUM", "CONGER", "LIMPID", "IMPAIR", "SACRUM", "VAGINA", "SNUGLY", "MUSING", "ETCHER", "SEPTUM", "BODEGA", "SICKLY", "TOROID", "PRIMAL", "CORSET", "COCKER", "LINGER", "THATCH", "SCREAM", "DECADE", "CAPSID", "PSEUDO", "TRIODE", "SESAME", "REPAIR", "LIAISE", "INKPAD", "PECKER", "CYSTIC", "RESIST", "METRIC", "ERASER", "GLAZER", "GRUMPY", "PSALMS", "INNING", "NITRIC", "THRUST", "FILIAL", "VIROID", "MAMMAL", "MYTHIC", "MAGPIE", "PLASMA", "TAMELY", "TOILER", "UNDOER", "PACKER", "BENGAL", "HUGGER", "STEAMY", "TOMCAT", "VULVAL", "FINELY", "PEBBLY", "TRICKY", "UNFREE", "TAMPER", "FOSSIL", "TALKER", "KICKER", "MENIAL", "STROKE", "ASSIST", "SERENE", "CAUSAL", "CHEEKY", "SIESTA", "UNMASK", "UNSEAL", "UNDOCK", "SEPTET", "COSTLY", "KISSER", "BAZAAR", "FOLKSY", "BIGAMY", "NOETIC", "BENIGN", "REPEAL", "FINISH", "PRAISE", "STALLS", "CYGNET", "PRIMER", "THUSLY", "RUSHER", "MOUSSE", "BREACH", "UNBOLT", "REVERE", "ASTHMA", "LANCET", "MOSAIC", "CINEMA", "NAPKIN", "SECURE", "ROAMER", "TWITCH", "SNARLY", "MOSTLY", "PLYERS", "GIVING", "BYPASS", "FINGER", "CAESAR", "SHEATH", "THREAT", "BIKINI", "UNCLAD", "SISTER", "CANOPY", "ASSESS", "DOMAIN", "BALSAM", "TALKIE", "VELCRO", "CRUNCH", "YEARLY", "BOVINE", "SANELY", "UNBELT", "CANING", "NOUGHT", "GLIDER", "PLACER", "BONITO", "FRISKY", "AMPERE", "MASSES", "DETAIL", "VENOUS", "SIGNAL", "SKATER", "MASTER", "GRADER", "UNPLUG", "STASIS", "SILICA", "STRUCK", "LAMELY", "PESTER", "ATTACK", "NEARBY", "IMPEDE", "TABLET", "THROAT", "SYRUPY", "DESIRE", "UNSEAT", "COPTIC", "ARMPIT", "VELVET", "CLIMAX", "DETAIN", "ROARER", "CYPRUS", "LINGAM", "EUROPE", "GUITAR", "LITHIC", "CREEPY", "VITALS", "UNEASE", "INVEST", "CANINE", "ASTRAL", "SALIVA", "INCOME", "COITUS", "BREATH", "SAVING", "MANURE", "ERSATZ", "SMUGLY", "PATTER", "VINOUS", "RETAKE", "RESEAT", "CRATER", "SMILER", "ACCUSE", "UNREAL", "CANCER", "NAUGHT", "FOREST", "RUBBER", "SHADES", "STROBE", "RULING", "ARREST", "SLALOM", "LAGUNA", "BECOME", "SOMALI", "CHALKY", "MANGER", "MANILA", "PLIERS", "PASTIS", "GRAMMA", "GUINEA", "STRONG", "SOVIET", "PARSER", "RENEGE", "TRADER", "HUGELY", "MATTER", "LUSTER", "COSINE", "RECAST", "SARONG", "INGEST", "NARWAL", "NOUGAT", "PLINTH", "MOVING", "MEMOIR", "ALPACA", "DEBASE", "STREAM", "FRIDGE", "GHETTO", "BASKET", "RESEAL", "SAGELY", "ISOMER", "DECODE", "CRINGE", "ALCOVE", "HUNGER", "CREEPS", "ARCANE", "TACKER", "SNEAKY", "SHAMMY", "RECOPY", "VENEER", "FRACAS", "GRASSY", "THRONG", "FISCAL", "MAJORS", "NUTMEG", "TAUGHT", "VAINLY", "SLIMLY", "JOKING", "ALUMNA", "MUSKET", "BANISH", "BANANA", "STAIRS", "LIVING", "STAGER", "BAKING", "BOOMER", "GLASSY", "RECODE", "PRUNER", "PERUSE", "GRATER", "FILTER", "SETTER", "GASKET", "FINEST", "FOLIUM", "IDIOCY", "MAKING", "BADGER", "GENOME", "EARWAX", "MERELY", "LINING", "SOUGHT", "MEASLY", "SALTER", "AILING", "SHIRAZ", "CRITIC", "GRIMLY", "PEPSIN", "PAPERS", "ARMLET", "MAILER", "THROES", "BEMUSE", "ROCOCO", "LABIAL", "TATTER", "AWNING", "LUNACY", "SCRUBS", "CHEESY", "MUCOUS", "SILVER", "FILING", "TORERO", "BATHER", "LUSTRE", "SKILLY", "ROCKET", "DOCKER", "UNLIVE", "FISHER", "CRISIS", "CREAMY", "LIBIDO", "CACKLY", "ALBEDO", "JOINER", "YEMENI", "CHILLI", "NEATLY", "TRAUMA", "SIMMER", "ATOMIC", "NONFAT", "PLUNGE", "BEATER", "REGIME", "RESIGN", "UNREAD", "MALIGN", "BEGGAR", "PAMPER", "FREELY", "SHINER", "CRUMMY", "DODGER", "STATUS", "CASEIN", "SODOMY", "VALUER", "FOETID", "STRUNG", "PHARMA", "SNITCH", "PRIEST", "BALTIC", "SALINA", "NANISM", "OMERTA", "MUSEUM", "TRACER", "MUSTER", "AFLAME", "CLUNKY", "VALUES", "PANZER", "BONOBO", "COLUMN", "MANUAL", "THIRST", "SITCOM", "IMMUNE", "SACHET", "SITTER", "PRESTO", "PENCIL", "REVISE", "NAUSEA", "RECOIL", "NAMELY", "DEALER", "SKETCH", "BACKER", "GRISLY", "ADVISE", "DORSUM", "VENULA", "EASING", "PARSEC", "REMAKE", "BRAZIL", "TAKING", "CHROME", "VANISH", "CAMPUS", "JOVIAL", "SEVERE", "LATTER", "INSIDE", "FRAMER", "BASALT", "ADAGIO", "SLEEVE", "CLERIC", "REPEAT", "CHEESE", "COSILY", "STARVE", "DEARLY", "UNVEIL", "CLARET", "AUGUST", "ARCADE", "PACKET", "ROBBER", "GREASE", "TOMATO", "FRESCO", "UNSAID", "BYROAD", "CLUMSY", "SLEUTH", "FRUGAL", "SLATER", "CUBISM", "MASKER", "SKIMPY", "BEARER", "COMPLY", "PASCAL", "LACING", "FRAISE", "CAVIAR", "SCALER", "REALLY", "FIASCO", "RETAIN", "ALLUDE", "MANAGE", "REGRET", "INTAKE", "TOSSER", "MYSTIC", "CYPHER", "SHEARS", "ECLAIR", "VESTAL", "ATTACH", "CHARGE", "SEPTIC", "DEBRIS", "RECUSE", "PAVING", "PAGING", "VIKING", "MONGER", "JOGGER", "STREET", "BETTER", "NUGGET", "UNCASE", "LYCHEE", "CAVEAT", "STICKY", "BREAST", "HUBRIS", "CUTLET", "MEAGER", "CARESS", "CUSTOM", "MUSLIM", "LIMPER", "INMOST", "FIGURE", "CHIRPY", "GLITCH", "DECAMP", "FIESTA", "ATTAIN", "BELUGA", "FIDGET", "NEPALI", "SALINE", "COUSIN", "SEROUS", "PELVIS", "REMOVE", "UNCOIL", "ALLURE", "STINGY", "SLIDER", "GREASY", "CHILLY", "BOILER", "COCAIN", "INLAID", "INSANE", "MOCKER", "SOCIAL", "HUMANE", "GRUNGE", "GRIEVE", "MUSLIN", "SILAGE", "COARSE", "SCUMMY", "SECRET", "DEADLY", "MESCAL", "SINGER", "DOSAGE", "TRAGIC", "LAUNCH", "RUBRIC", "TARSUS", "PRESET", "CONFER", "CITRIC", "REITER", "SEALER", "COMMIT", "COBALT", "ROCKER", "CITRUS", "PROMPT", "SHINTO", "VICUNA", "BLEACH", "CREASE", "FOETAL", "SHARPY", "RUINER", "SLICER", "STINKY", "NEARLY", "THRONE", "UNMADE", "REFINE", "ARNICA", "GENIAL", "CHASER", "UNKEPT", "ALBINO", "UNMAKE", "NAILER", "DECKER", "DORSAL", "BEFORE", "GYPSUM", "GATHER", "DEVISE", "MUTTER", "GNARLY", "GLADLY", "FIBRIL", "RUDELY", "SHARER", "KIMONO", "THINLY", "PREACH", "RENAME", "ITALIC", "RELIVE", "CLASSY", "DOGLEG", "CHUMMY", "DEGREE", "SOCKET", "ARCHER", "LAGGER", "LITMUS", "SIMPLY", "DOCKET", "KELVIN", "PANINI", "CAREER", "DESIST", "REREAD", "INSIST", "REGAIN", "REJOIN", "PLEASE", "KINGLY", "ACIDIC", "BOREAL", "BRUNCH", "LASTLY", "COGNAC", "GUTTER", "REVEAL", "SCALAR", "ACROSS", "ROMPER", "LITTER", "DECIDE", "JESTER", "CLERGY", "BYPATH", "ASSIGN", "UNLIKE", "FRINGE", "MANIAC", "CLINIC", "BIGGER", "PASHTO", "UNPACK", "RESIDE", "NEARER", "DEFINE", "VULVAR", "EUNUCH", "RECIPE", "TASTER", "PEPLUM", "GENIUS", "LIKELY", "LISTER", "LIMPET", "UNPAID", "SLEEPY", "RELISH", "REVAMP", "DESIGN", "SHIMMY", "IDLING", "DEARTH", "NETHER", "BASSET", "CHUNKY", "CLEAVE", "SMIDGE", "UNDONE", "SIGNET", "ACETIC", "SEESAW", "CLAUSE", "PARSEE", "REMAIN", "BLAZER", "SHAGGY", "LUGGER", "GAMELY", "CYCLIC", "CASING", "STEELY", "LINEAR", "PEPTIC", "PELVIC", "UNREST", "SAVAGE", "PLACID", "THINGS", "SOLVER", "BIKERS", "ESCAPE", "DOGGIE", "BRIDAL", "UNLASH", "ROMANI", "TOILET", "LATHER", "STARCH", "ROVING", "LASHER", "UNRULY", "BRIDGE", "VASTLY", "MAINLY", "SOCCER", "BOTHER", "ROSTER", "REVIVE", "MORULA", "NIACIN", "INROAD", "REGGAE", "MAGNET", "INSTAL", "SINGLY", "DECREE", "COSMIC", "FOETUS", "MUGGER", "COUGAR", "VEGGIE", "DENIAL", "CIPHER", "SNATCH", "TRAGUS", "CAMPER", "READER", "AFRESH", "LACUNA", "CREAKY", "CASKET", "EASTER", "DOINGS", "SACRAL", "SEPSIS", "BOTTOM", "ETHNIC", "STATIC", "THREAD", "INVADE", "SORELY", "CONGEE", "FITTER", "MOTHER", "LANCER", "LIVELY", "VACUUM", "CASINO", "DETACH", "GADGET", "SEARCH", "PLATER", "ALMOST", "BRACES", "RUSTIC", "VASSAL", "VESICA", "INSTIL", "VIBRIO", "EASILY", "CUBIST", "FREAKY", "CORONA", "THESIS", "LIKING", "CUTTER", "BARELY", "PACING", "BOUNCY", "MOROSE", "FRILLS", "STRESS", "GINGER", "MASTIC", "MUESLI", "LIGNIN", "PRAXIS", "STITCH", "BOTFLY", "SAMOSA", "STATIN", "SONATA", "CHINTZ", "NUDGER", "THIEVE", "SIGNER", "IMPALA", "CRISPY", "FOSTER", "UNEASY"],
	ONE_DAY = 1000*60*60*24,
	START_DAY = 19083, // 1 April 2022
	CURRENT_DAY = Math.floor(Date.now()/ONE_DAY-START_DAY),
	WORD_TO_GUESS = WORD_LIST[CURRENT_DAY];

let current_line = -1,
	current_letter = 0,
	hint_level = 0;

function addLine() {
   current_line++;
   current_letter = 0;
   MAIN_SECTION.innerHTML += LINE_TEMPLATE.replaceAll('[LINE]', current_line);
}

function resetRow() {
	Array.from(document.querySelectorAll('tr.bg-warning')).forEach(function(tr) {
		tr.className = '';
	})
}

function enableCheck() {
	if (current_letter >= 2*PAIRS) {
		document.getElementById('check-button').disabled = false;
	}
}

function addLetter(letter) {
	document.getElementById(`letter-${current_line}-${current_letter}`).textContent = letter;
	if (current_letter % 2) {
		checkFlag();
	} else {
		current_letter++;
	}
}

function checkFlag() {
	resetRow();
	let first_letter = 2*Math.floor(current_letter/2),
		second_letter = first_letter+1,
		first_div = document.getElementById(`letter-${current_line}-${first_letter}`),
		second_div = document.getElementById(`letter-${current_line}-${second_letter}`),
		pair = first_div.textContent + second_div.textContent;
	if (FLAGS.indexOf(pair) == -1) {
		let pair_div = document.getElementById(`pair-${current_line}-${first_letter/2}`);
		pair_div.className = BASE_PAIR_CLASS + ' bg-danger';
		first_div.textContent = '_';
		second_div.textContent = '_';
		current_letter = first_letter;
		window.setTimeout(function() {
			pair_div.className = BASE_PAIR_CLASS;
		},500);
	} else {
		document.getElementById(`flag-${current_line}-${first_letter/2}`).src = `twemoji/${pair}.svg`;
		current_letter++;
		enableCheck();
	}
}

function resetLine() {
	resetRow();
	for (let i = 0; i < 2*PAIRS; i++) {
		document.getElementById(`letter-${current_line}-${i}`).textContent = '_';
	}
	for (let i = 0; i < PAIRS; i++) {
		document.getElementById(`flag-${current_line}-${i}`).src = DEFAULT_FLAG;
	}
	current_letter = 0;
}

function splitWord(word) {
	let res = [];
	for (let i = 0, l = word.length; i < l/2; i++) {
		res.push(word.substr(2*i,2));
	}
	return res;
}

function giveHint() {
	document.getElementById('hint-button').blur();
	if (hint_level < 2*PAIRS) {
		resetRow();
		hint_level++;
		resetLine();
		for (let i=0; i<hint_level; i++) {
			addLetter(WORD_TO_GUESS[i]);
			document.getElementById(`letter-${current_line}-${i}`).className = BASE_LETTER_CLASS + CLASS_STATUS[3];
			if (i%2) {
					document.getElementById(`pair-${current_line}-${Math.floor(i/2)}`).className = BASE_PAIR_CLASS + CLASS_STATUS[3];
			}
		}
		current_letter = hint_level;
	}
	if (hint_level >= 2*PAIRS) {
		document.getElementById('hint-button').disabled = true;
	}
}

function checkLine() {
	let check_word = WORD_TO_GUESS,
	    guess = '',
		letter_statuses = [];
	for (let i = 0; i < 2*PAIRS; i++) {
		guess += document.getElementById(`letter-${current_line}-${i}`).textContent;
		letter_statuses.push(0);
	}
	for (let i = 0; i < 2*PAIRS; i++) {
		if (guess[i] === WORD_TO_GUESS[i]) {
			letter_statuses[i] = 2;
			check_word = check_word.substr(0,i) + '_' + check_word.substr(i+1);
			if (hint_level > i) {
				letter_statuses[i] = 3;
			}
		}
	}
	for (let i = 0; i < 2*PAIRS; i++) {
		let pos_in_word = check_word.indexOf(guess[i]);
		if (!letter_statuses[i] && pos_in_word !== -1) {
			check_word = check_word.substr(0,pos_in_word) + '_' + check_word.substr(pos_in_word+1);
			letter_statuses[i] = 1;
		}
	}
	for (let i = 0; i < 2*PAIRS; i++) {
		document.getElementById(`letter-${current_line}-${i}`).className = BASE_LETTER_CLASS + CLASS_STATUS[letter_statuses[i]];
	}
	let check_pairs = splitWord(WORD_TO_GUESS),
	    guess_pairs = splitWord(guess),
		pair_statuses = [];
	for (let i = 0; i < PAIRS; i++) {
		pair_statuses.push(0);
	}
	for (let i = 0; i < PAIRS; i++) {
		if(check_pairs[i] === guess_pairs[i]) {
			check_pairs[i] = '_';
			pair_statuses[i] = 2;
			if (hint_level > 2*i+1) {
				pair_statuses[i] = 3;
			}
		}
	}
	for (let i = 0; i < PAIRS; i++) {
		let pos_in_word = check_pairs.indexOf(guess_pairs[i]);
		if (!pair_statuses[i] && pos_in_word !== -1) {
			check_pairs[pos_in_word] = '_';
			pair_statuses[i] = 1;
		}
	}
	for (let i = 0; i < PAIRS; i++) {
		document.getElementById(`pair-${current_line}-${i}`).className = BASE_PAIR_CLASS + CLASS_STATUS[pair_statuses[i]];
	}
	addLine();
	document.getElementById('check-button').disabled = true;
}

document.addEventListener('keyup', function(e) {
	switch (e.key) {
		case 'Enter':
			if (current_letter >= 2*PAIRS) {
				checkLine();
			}
			break;
		case 'Backspace':
			if (current_letter) {
				current_letter--;
				document.getElementById(`letter-${current_line}-${current_letter}`).textContent = '_';
				document.getElementById(`flag-${current_line}-${Math.floor(current_letter/2)}`).src = DEFAULT_FLAG;
			}
			break;
		default:
			if (/^[a-zA-Z]$/.test(e.key)) {
				let letter = e.key.toUpperCase()
				if (current_letter < 2*PAIRS) {
					if (!(current_letter % 2)) {
						document.getElementById(`flagrow-${letter}`).className = 'bg-warning';
					}
					addLetter(letter);
				}
			}
	}
});


Array.from(document.querySelectorAll('a.flagboard-link')).forEach(function(a) {
	a.addEventListener('click', function(e) {
		e.preventDefault();
		resetRow();
		if (current_letter < 2*PAIRS && !(current_letter%2)) {
			let letters = a.getAttribute('data-letters');
			document.getElementById(`letter-${current_line}-${current_letter}`).textContent = letters[0];
			document.getElementById(`letter-${current_line}-${1+current_letter}`).textContent = letters[1];
			document.getElementById(`flag-${current_line}-${current_letter/2}`).src = `twemoji/${letters}.svg`;
			current_letter += 2;
			enableCheck();
		}
	});
});

document.getElementById('check-button').addEventListener('click', checkLine);
document.getElementById('reset-button').addEventListener('click', resetLine);
document.getElementById('hint-button').addEventListener('click', giveHint);

MAIN_SECTION.innerHTML = '';

addLine();
