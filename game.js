const GUESSES = 6,
	PAIRS = 3,
	DEFAULT_FLAG = document.getElementById('flag-0-0').src,
	FLAGS = ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'EU', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'],
	WORD_TO_GUESS = "HUMMUS",
	CLASS_STATUS = [
		'bg-dark text-light', 'bg-warning text-dark', 'bg-success text-light'
	]

let current_line = 0,
	current_letter = 0,
	checked_lines = [];

for (let i = 0; i < GUESSES; i++) {
	checked_lines.push(0);
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

function checkFlag() {
	resetRow();
	let first_letter = 2*Math.floor(current_letter/2),
		second_letter = first_letter+1,
		first_div = document.getElementById(`letter-${current_line}-${first_letter}`),
		second_div = document.getElementById(`letter-${current_line}-${second_letter}`),
		pair = first_div.textContent + second_div.textContent;
	if (FLAGS.indexOf(pair) == -1) {
		let pair_div = document.getElementById(`pair-${current_line}-${first_letter/2}`);
		pair_div.className += ' bg-danger';
		first_div.textContent = '_';
		second_div.textContent = '_';
		current_letter = first_letter;
		window.setTimeout(function() {
			pair_div.className = pair_div.className.replace(' bg-danger','');
		},500);
	} else {
		document.getElementById(`flag-${current_line}-${first_letter/2}`).src = `twemoji/${pair}.svg`;
		current_letter++;
		enableCheck();
	}
}

function resetLine() {
	if (!checked_lines[current_line]) {
		resetRow();
		for (let i = 0; i < 2*PAIRS; i++) {
			document.getElementById(`letter-${current_line}-${i}`).textContent = '_';
		}
		for (let i = 0; i < PAIRS; i++) {
			document.getElementById(`flag-${current_line}-${i}`).src = DEFAULT_FLAG;
		}
		current_letter = 0;
	}
}

function splitWord(word) {
	let res = [];
	for (let i = 0, l = word.length; i < l/2; i++) {
		res.push(word.substr(2*i,2));
	}
	return res;
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
		}
	}
	for (let i = 0; i < 2*PAIRS; i++) {
		let pos_in_word = check_word.indexOf(guess[i]);
		if (letter_statuses[i] !== 2 && pos_in_word !== -1) {
			check_word = check_word.substr(0,pos_in_word) + '_' + check_word.substr(pos_in_word+1);
			letter_statuses[i] = 1;
		}
	}
	for (let i = 0; i < 2*PAIRS; i++) {
		document.getElementById(`letter-${current_line}-${i}`).className += ' ' + CLASS_STATUS[letter_statuses[i]];
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
		}
	}
	for (let i = 0; i < PAIRS; i++) {
		let pos_in_word = check_pairs.indexOf(guess_pairs[i]);
		if (pair_statuses[i] !== 2 && pos_in_word !== -1) {
			check_pairs[pos_in_word] = '_';
			pair_statuses[i] = 1;
		}
	}
	for (let i = 0; i < PAIRS; i++) {
		document.getElementById(`pair-${current_line}-${i}`).className += ' ' + CLASS_STATUS[pair_statuses[i]];
	}
	checked_lines[current_line] = 1;
	document.getElementById('check-button').disabled = true;
	if (current_line < GUESSES - 1) {
		current_line++;
		current_letter = 0;
	} else {
		document.getElementById('reset-button').disabled = true;
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
			if (current_letter && !checked_lines[current_line]) {
				current_letter--;
				document.getElementById(`letter-${current_line}-${current_letter}`).textContent = '_';
				document.getElementById(`flag-${current_line}-${Math.floor(current_letter/2)}`).src = DEFAULT_FLAG;
			}
			break;
		default:
			if (/^[a-zA-Z]$/.test(e.key)) {
				let letter = e.key.toUpperCase()
				if (current_letter < 2*PAIRS) {
					document.getElementById(`letter-${current_line}-${current_letter}`).textContent = letter;
					if (current_letter % 2) {
						checkFlag();
					}
					else {
						document.getElementById(`flagrow-${letter}`).className = 'bg-warning';
						current_letter++;
					}
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
