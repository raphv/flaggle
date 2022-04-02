const PAIRS = 3,
	DEFAULT_FLAG = document.getElementById('flag-[LINE]-0').src,
	DEFAULT_TOOLTIP = document.getElementById('pair-[LINE]-0').title,
	FLAGS = ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'EU', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'],
	COUNTRY_NAMES = {'AC': 'Ascension Island', 'AD': 'Andorra', 'AE': 'United Arab Emirates', 'AF': 'Afghanistan', 'AG': 'Antigua & Barbuda', 'AI': 'Anguilla', 'AL': 'Albania', 'AM': 'Armenia', 'AO': 'Angola', 'AQ': 'Antarctica', 'AR': 'Argentina', 'AS': 'American Samoa', 'AT': 'Austria', 'AU': 'Australia', 'AW': 'Aruba', 'AX': 'Åland Islands', 'AZ': 'Azerbaijan', 'BA': 'Bosnia & Herzegovina', 'BB': 'Barbados', 'BD': 'Bangladesh', 'BE': 'Belgium', 'BF': 'Burkina Faso', 'BG': 'Bulgaria', 'BH': 'Bahrain', 'BI': 'Burundi', 'BJ': 'Benin', 'BL': 'St. Barthélemy', 'BM': 'Bermuda', 'BN': 'Brunei', 'BO': 'Bolivia', 'BQ': 'Caribbean Netherlands', 'BR': 'Brazil', 'BS': 'Bahamas', 'BT': 'Bhutan', 'BV': 'Bouvet Island', 'BW': 'Botswana', 'BY': 'Belarus', 'BZ': 'Belize', 'CA': 'Canada', 'CC': 'Cocos (Keeling) Islands', 'CD': 'Congo - Kinshasa', 'CF': 'Central African Republic', 'CG': 'Congo - Brazzaville', 'CH': 'Switzerland', 'CI': 'Côte d’Ivoire', 'CK': 'Cook Islands', 'CL': 'Chile', 'CM': 'Cameroon', 'CN': 'China', 'CO': 'Colombia', 'CP': 'Clipperton Island', 'CR': 'Costa Rica', 'CU': 'Cuba', 'CV': 'Cape Verde', 'CW': 'Curaçao', 'CX': 'Christmas Island', 'CY': 'Cyprus', 'CZ': 'Czechia', 'DE': 'Germany', 'DG': 'Diego Garcia', 'DJ': 'Djibouti', 'DK': 'Denmark', 'DM': 'Dominica', 'DO': 'Dominican Republic', 'DZ': 'Algeria', 'EA': 'Ceuta & Melilla', 'EC': 'Ecuador', 'EE': 'Estonia', 'EG': 'Egypt', 'EH': 'Western Sahara', 'ER': 'Eritrea', 'ES': 'Spain', 'ET': 'Ethiopia', 'EU': 'European Union', 'FI': 'Finland', 'FJ': 'Fiji', 'FK': 'Falkland Islands', 'FM': 'Micronesia', 'FO': 'Faroe Islands', 'FR': 'France', 'GA': 'Gabon', 'GB': 'United Kingdom', 'GD': 'Grenada', 'GE': 'Georgia', 'GF': 'French Guiana', 'GG': 'Guernsey', 'GH': 'Ghana', 'GI': 'Gibraltar', 'GL': 'Greenland', 'GM': 'Gambia', 'GN': 'Guinea', 'GP': 'Guadeloupe', 'GQ': 'Equatorial Guinea', 'GR': 'Greece', 'GS': 'South Georgia & South Sandwich Islands', 'GT': 'Guatemala', 'GU': 'Guam', 'GW': 'Guinea-Bissau', 'GY': 'Guyana', 'HK': 'Hong Kong SAR China', 'HM': 'Heard & McDonald Islands', 'HN': 'Honduras', 'HR': 'Croatia', 'HT': 'Haiti', 'HU': 'Hungary', 'IC': 'Canary Islands', 'ID': 'Indonesia', 'IE': 'Ireland', 'IL': 'Israel', 'IM': 'Isle of Man', 'IN': 'India', 'IO': 'British Indian Ocean Territory', 'IQ': 'Iraq', 'IR': 'Iran', 'IS': 'Iceland', 'IT': 'Italy', 'JE': 'Jersey', 'JM': 'Jamaica', 'JO': 'Jordan', 'JP': 'Japan', 'KE': 'Kenya', 'KG': 'Kyrgyzstan', 'KH': 'Cambodia', 'KI': 'Kiribati', 'KM': 'Comoros', 'KN': 'St. Kitts & Nevis', 'KP': 'North Korea', 'KR': 'South Korea', 'KW': 'Kuwait', 'KY': 'Cayman Islands', 'KZ': 'Kazakhstan', 'LA': 'Laos', 'LB': 'Lebanon', 'LC': 'St. Lucia', 'LI': 'Liechtenstein', 'LK': 'Sri Lanka', 'LR': 'Liberia', 'LS': 'Lesotho', 'LT': 'Lithuania', 'LU': 'Luxembourg', 'LV': 'Latvia', 'LY': 'Libya', 'MA': 'Morocco', 'MC': 'Monaco', 'MD': 'Moldova', 'ME': 'Montenegro', 'MF': 'St. Martin', 'MG': 'Madagascar', 'MH': 'Marshall Islands', 'MK': 'North Macedonia', 'ML': 'Mali', 'MM': 'Myanmar (Burma)', 'MN': 'Mongolia', 'MO': 'Macao SAR China', 'MP': 'Northern Mariana Islands', 'MQ': 'Martinique', 'MR': 'Mauritania', 'MS': 'Montserrat', 'MT': 'Malta', 'MU': 'Mauritius', 'MV': 'Maldives', 'MW': 'Malawi', 'MX': 'Mexico', 'MY': 'Malaysia', 'MZ': 'Mozambique', 'NA': 'Namibia', 'NC': 'New Caledonia', 'NE': 'Niger', 'NF': 'Norfolk Island', 'NG': 'Nigeria', 'NI': 'Nicaragua', 'NL': 'Netherlands', 'NO': 'Norway', 'NP': 'Nepal', 'NR': 'Nauru', 'NU': 'Niue', 'NZ': 'New Zealand', 'OM': 'Oman', 'PA': 'Panama', 'PE': 'Peru', 'PF': 'French Polynesia', 'PG': 'Papua New Guinea', 'PH': 'Philippines', 'PK': 'Pakistan', 'PL': 'Poland', 'PM': 'St. Pierre & Miquelon', 'PN': 'Pitcairn Islands', 'PR': 'Puerto Rico', 'PS': 'Palestinian Territories', 'PT': 'Portugal', 'PW': 'Palau', 'PY': 'Paraguay', 'QA': 'Qatar', 'RE': 'Réunion', 'RO': 'Romania', 'RS': 'Serbia', 'RU': 'Russia', 'RW': 'Rwanda', 'SA': 'Saudi Arabia', 'SB': 'Solomon Islands', 'SC': 'Seychelles', 'SD': 'Sudan', 'SE': 'Sweden', 'SG': 'Singapore', 'SH': 'St. Helena', 'SI': 'Slovenia', 'SJ': 'Svalbard & Jan Mayen', 'SK': 'Slovakia', 'SL': 'Sierra Leone', 'SM': 'San Marino', 'SN': 'Senegal', 'SO': 'Somalia', 'SR': 'Suriname', 'SS': 'South Sudan', 'ST': 'São Tomé & Príncipe', 'SV': 'El Salvador', 'SX': 'Sint Maarten', 'SY': 'Syria', 'SZ': 'Eswatini', 'TA': 'Tristan da Cunha', 'TC': 'Turks & Caicos Islands', 'TD': 'Chad', 'TF': 'French Southern Territories', 'TG': 'Togo', 'TH': 'Thailand', 'TJ': 'Tajikistan', 'TK': 'Tokelau', 'TL': 'Timor-Leste', 'TM': 'Turkmenistan', 'TN': 'Tunisia', 'TO': 'Tonga', 'TR': 'Turkey', 'TT': 'Trinidad & Tobago', 'TV': 'Tuvalu', 'TW': 'Taiwan', 'TZ': 'Tanzania', 'UA': 'Ukraine', 'UG': 'Uganda', 'UM': 'U.S. Outlying Islands', 'UN': 'United Nations', 'US': 'United States', 'UY': 'Uruguay', 'UZ': 'Uzbekistan', 'VA': 'Vatican City', 'VC': 'St. Vincent & Grenadines', 'VE': 'Venezuela', 'VG': 'British Virgin Islands', 'VI': 'U.S. Virgin Islands', 'VN': 'Vietnam', 'VU': 'Vanuatu', 'WF': 'Wallis & Futuna', 'WS': 'Samoa', 'XK': 'Kosovo', 'YE': 'Yemen', 'YT': 'Mayotte', 'ZA': 'South Africa', 'ZM': 'Zambia', 'ZW': 'Zimbabwe'},
	BASE_LETTER_CLASS = document.getElementById('letter-[LINE]-0').className,
	BASE_PAIR_CLASS = document.getElementById('pair-[LINE]-0').className,
	CLASS_STATUS = [
		' bg-dark text-light', ' bg-warning text-dark', ' bg-success text-light', ' bg-primary text-light',
	],
	SQUARE_STATUS = [ '⬛', '🟨', '🟩', '🟦' ],
	MAIN_SECTION = document.querySelector('main'),
	LINE_TEMPLATE = MAIN_SECTION.innerHTML,
	WORD_LIST = ["RETAIL", "LAVISH", "LIMPID"],
	ONE_DAY = 1000*60*60*24,
	START_DAY = 19083, // 1 April 2022
	CURRENT_DAY = Math.floor(Date.now()/ONE_DAY-START_DAY),
	WORD_TO_GUESS = WORD_LIST[CURRENT_DAY % WORD_LIST.length],
	COPY_TOAST = new bootstrap.Toast(document.getElementById('copy-toast'));

let current_line = -1,
	current_letter = 0,
	hint_level = 0,
	score_keeper = [ `WF🇼🇫la🇱🇦gs🇬🇸 #${1+CURRENT_DAY}` ];

function addLine() {
	current_line++;
	let newline = document.createElement('div');
	newline.innerHTML = LINE_TEMPLATE.replaceAll('[LINE]', current_line);
	MAIN_SECTION.appendChild(newline);
	for (let i = 0; i < PAIRS; i++) {
		new bootstrap.Tooltip(
			document.getElementById(`pair-${current_line}-${i}`)
		);
	}
	showHints();
}

function resetRow() {
	Array.from(document.querySelectorAll('tr.bg-warning')).forEach(function(tr) {
		tr.className = '';
	});
	if (current_letter % 2) {
		let highlight_letter = document.getElementById(`letter-${current_line}-${current_letter-1}`).textContent;
		document.getElementById(`flagrow-${highlight_letter}`).className = 'bg-warning';
	}
}

function updateTooltip(element_id, text) {
	let element = document.getElementById(element_id);
	element.title = text;
	element.setAttribute('data-bs-original-title', text);
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
	resetRow();
}

function checkFlag() {
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
		updateTooltip(`pair-${current_line}-${first_letter/2}`,`${pair}: ${COUNTRY_NAMES[pair]}`);
		current_letter++;
		enableCheck();
	}
}

function resetLine() {
	for (let i = 0; i < 2*PAIRS; i++) {
		document.getElementById(`letter-${current_line}-${i}`).textContent = '_';
	}
	for (let i = 0; i < PAIRS; i++) {
		document.getElementById(`flag-${current_line}-${i}`).src = DEFAULT_FLAG;
		updateTooltip(`pair-${current_line}-${i}`,DEFAULT_TOOLTIP);
	}
	current_letter = 0;
	resetRow();
}

function splitWord(word) {
	let res = [];
	for (let i = 0, l = word.length; i < l/2; i++) {
		res.push(word.substr(2*i,2));
	}
	return res;
}

function showHints() {
	resetLine();
	for (let i=0; i<hint_level; i++) {
		addLetter(WORD_TO_GUESS[i]);
		document.getElementById(`letter-${current_line}-${i}`).className = BASE_LETTER_CLASS + CLASS_STATUS[3];
		if (i%2) {
			document.getElementById(`pair-${current_line}-${Math.floor(i/2)}`).className = BASE_PAIR_CLASS + CLASS_STATUS[3];
		}
	}
	current_letter = hint_level;
	resetRow();
}

function giveHint() {
	document.getElementById('hint-button').blur();
	if (hint_level < 2*PAIRS) {
		hint_level++;
		document.getElementById('hint-level').textContent = 1+hint_level;
		showHints();
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
	score_keeper.push(letter_statuses.map(function(s, i) {
		return SQUARE_STATUS[s] + (
			i%2 ? (pair_statuses[(i-1)/2] > 1 ? '🏁' : '🏴')  :''
		);
	}).join(''));
	document.getElementById('share-button').disabled = false;
	document.getElementById('check-button').disabled = true;
}

function shareProgress() {
	navigator.clipboard.writeText(
		score_keeper.concat('https://raphv.github.io/flaggle/').join('\n')
		);
	COPY_TOAST.show();
}

function backspace() {
	if (current_letter) {
		current_letter--;
		document.getElementById(`letter-${current_line}-${current_letter}`).textContent = '_';
		document.getElementById(`flag-${current_line}-${Math.floor(current_letter/2)}`).src = DEFAULT_FLAG;
		resetRow();
	}
}

document.addEventListener('keyup', function(e) {
	switch (e.key) {
		case 'Enter':
			if (current_letter >= 2*PAIRS) {
				checkLine();
			}
			break;
		case 'Backspace':
			backspace();
			break;
		default:
			if (/^[a-zA-Z]$/.test(e.key)) {
				let letter = e.key.toUpperCase();
				if (current_letter < 2*PAIRS) {
					addLetter(letter);
				}
			}
	}
});

let flagboard_rows = '';

for (let i = 0; i < 26; i++) {
	let first_letter = String.fromCharCode(65+i);
	flagboard_rows += `<tr id="flagrow-${first_letter}"><th scope="row" class="flagboard-letter" id="rowhead-${first_letter}">${first_letter}</th>`;
	for (let j = 0; j < 26; j++) {
		let second_letter = String.fromCharCode(65+j),
			pair = first_letter + second_letter;
		if (FLAGS.indexOf(pair) == -1) {
			flagboard_rows += `<td class="flagboard-empty"><img src="twemoji/forbidden.svg" alt="Invalid flag" width="16"></td>`;
		} else {
			let country_name = COUNTRY_NAMES[pair];
			flagboard_rows += `<td class="flagboard-cell" id="flagcell-${pair}" data-letters="${pair}">
                <a href="#" class="flagboard-link" id="flaglink-${pair}" data-letters="${pair}" title="${country_name}">
                    <img id="flagimg-${pair}" data-letters="${pair}" src="twemoji/${pair}.svg" alt="${pair} (${country_name})" width="22">
                </a>
            </td>`;
		}
	}
	flagboard_rows += `<th scope="row" class="flagboard-letter" id="rowhead-${first_letter}">${first_letter}</th></tr>`;
}

document.getElementById('flagboard-body').innerHTML = flagboard_rows;

Array.from(document.querySelectorAll('a.flagboard-link')).forEach(function(a) {
	a.addEventListener('click', function(e) {
		e.preventDefault();
		if (current_letter < 2*PAIRS && !(current_letter%2)) {
			let letters = a.getAttribute('data-letters');
			document.getElementById(`letter-${current_line}-${current_letter}`).textContent = letters[0];
			document.getElementById(`letter-${current_line}-${1+current_letter}`).textContent = letters[1];
			document.getElementById(`flag-${current_line}-${current_letter/2}`).src = `twemoji/${letters}.svg`;
			updateTooltip(`pair-${current_line}-${current_letter/2}`,`${letters}: ${COUNTRY_NAMES[letters]}`);
			current_letter += 2;
			enableCheck();
		}
		resetRow();
	});
});


Array.from(document.querySelectorAll('button.keyboard-letter')).forEach(function(btn) {
	let letter= btn.textContent;
	btn.id = `key-${letter}`;
	btn.addEventListener('click', function() {
		if (current_letter < 2*PAIRS) {
			addLetter(letter);
		}
	});
});

document.getElementById('check-button').addEventListener('click', checkLine);
document.getElementById('reset-button').addEventListener('click', resetLine);
document.getElementById('hint-button').addEventListener('click', giveHint);
document.getElementById('share-button').addEventListener('click', shareProgress);
document.getElementById('backspace-button').addEventListener('click', backspace);

MAIN_SECTION.innerHTML = '';

addLine();
