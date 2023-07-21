var __QUIZ = {
    'campaign': '?utm_source=schluetersche.de&utm_medium=charakter-quiz&utm_campaign=onlinemarketing-persönlichkeit',
	'intro' : {
		'title' : '나에게 딱! 맞는 봄알람 책 찾기',
		'text' : '나에게 딱! 맞는 봄알람 책 찾기',
		'image' : ''
    },
    'questionnaire': {
        'currentQuestion': 0,
        'numberOfQuestions': 12,
        'questions': {
            '1': {
                'question': '나는 책을?',
                'image': 'https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': '틈틈이 읽는 편',
                        'score': [1, 0, 0, 0, 0]
                    },
                    '2': {
                        'text': '각잡고 읽는 편',
                        'score': [0, 1, 0, 0, 0]
                    },
                    '3': {
                        'text': 'Eine professionelle Internetpräsenz aufbauen',
                        'score': [0, 0, 0, 1, 0]
                    },
                    '4': {
                        'text': 'Qualifizierte Mitarbeiter finden',
                        'score': [0, 0, 0, 0, 1]
                    },
                    '5': {
                        'text': 'Online-Vertrieb aufbauen',
                        'score': [0, 0, 1, 0, 0]
                    }
                }
            },
            '2': {
                'question': 'Mit welcher Maßnahme wollen Sie Ihre Erfolgsbasis sichern?',
                'image': 'https://images.unsplash.com/photo-1488903809927-48c9b4e43700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80',
                'choices': {
                    '1': {
                        'text': 'Marktentwicklung und Trends beobachten',
                        'score': [0, 0, 1, 0, 0]
                    },
                    '2': {
                        'text': 'Kundenbedürfnisse verstehen',
                        'score': [0, 1, 0, 0, 0]
                    },
                    '3': {
                        'text': 'Im Internet auf mich aufmerksam machen',
                        'score': [0, 0, 0, 1, 0]
                    },
                    '4': {
                        'text': 'Mehr Umsatz und Aufträge mit Bestandskunden erzielen',
                        'score': [1, 0, 0, 0, 0]
                    }
                }
            },
            '3': {
                'question': 'Wenn Sie sich für eine Maßnahme entscheiden müssten…',
                'image': 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'Zufriedenheit eigener Kunden messen',
                        'score': [0, 1, 0, 0, 0]
                    },
                    '2': {
                        'text': 'Die Entwicklung von Konkurrenten im Auge behalten',
                        'score': [0, 0, 1, 0, 0]
                    },
                    '3': {
                        'text': 'Um die Sicherheit meiner IT und Daten kümmern',
                        'score': [0, 0, 0, 0, 1]
                    }
                }
            },
            '4': {
                'question': 'Wo sehen Sie für sich selbst wichtiges Optimierungspotential?',
                'image': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'Mehr Kontaktanlässe schaffen und Angebote platzieren',
                        'score': [1, 0, 0, 0, 0]
                    },
                    '2': {
                        'text': 'Empfehlungsmarketing meiner Kunden aktivieren',
                        'score': [0, 0, 0, 1, 0]
                    },
                    '3': {
                        'text': 'Besser mit Regulierungen und Gesetzgebung umgehen',
                        'score': [0, 0, 0, 0, 1]
                    }
                }
            }
        }
    },
    'results': {
        'numberOfTypes': 16,
        'questionScore': [],
        'finalScore': [0, 0, 0, 0, 0],
        'types': {
            '1': {
                'name': 'Der Umatzorientierte',
                'text': 'Sie wollen den Umsatz Ihres Unternehmens steigern. Dabei setzen Sie auf Bestandskunden, aber auch auf Neukunden. Sie wollen Kontaktanlässe schaffen, um bestehenden oder potentiellen Kunden Ihr Angebot zu präsentieren.',
                'href': 'types/der_umsatzorientierte.html'
            },
            '2': {
                'name': 'Der Kundenorientierte',
                'text': 'Kundenzufriedenheit ist Ihnen wichtig. Sie wollen die Interessen der Kunden genau kennen, verstehen und die Zufriedenheit messen. In ihrem Auftreten setzen Sie auf Vertrauen und Zuverlässigkeit.',
                'href': 'types/der_kundenorientierte.html'
            },
            '3': {
                'name': 'Der Online-Verkäufer',
                'text': 'Sie wissen, wie der Markt funktioniert. Sie wollen über Trends und Entwicklungen informiert sein und haben Ihre Konkurrenten stets im Blick. Online ist Ihre Stärke.',
                'href': 'types/der_online-verkaeufer.html'
            },
            '4': {
                'name': 'Der digitale Werber',
                'text': 'Sie wollen gesehen werden. Die Online-Präsenz ist Ihr Aushängeschild. Sie wissen, worauf es im Internet ankommt und nutzen die Technologie zu ihrem Vorteil.',
                'href': 'types/der_digitale_werber.html'
            },
            '5': {
                'name': 'Der Sicherheitsbewusste',
                'text': 'Sie verstehen Sicherheit als vertrauensbildende Maßnahme. Dabei haben Sie die Sicherheit Ihres Unternehmens und der Mitarbeiter genauso im Blick wie die Sicherheit der Kunden.',
                'href': 'types/der_sicherheitsbewusste.html'
            }
        }

    }
};

function QUIZElement(id) {
	return document.getElementById(id);
}

function QUIZDoSomething(question, choice) {
	if(QUIZElement('quiz_next').disabled) {
		QUIZElement('quiz_next').disabled = false;
	}

	__QUIZ.results.questionScore = __QUIZ.questionnaire.questions[question].choices[choice].score;
}

function QUIZNext() {
	if(__QUIZ.questionnaire.currentQuestion === __QUIZ.questionnaire.numberOfQuestions) {
		var characterType = __QUIZ.results.finalScore.indexOf(Math.max(...__QUIZ.results.finalScore)) + 1;
		//window.location.href = __QUIZ.results.types[characterType].href + __QUIZ.campaign;
		var resultHTML = '<h3>' + __QUIZ.results.types[characterType].name + '</h3>' + '<p>' + __QUIZ.results.types[characterType].text + '</p>';
		QUIZElement('quiz_result').innerHTML = resultHTML;
	}
	else {
		for(var i = 0; i < __QUIZ.results.questionScore.length; i++) {
			__QUIZ.results.finalScore[i] += __QUIZ.results.questionScore[i];
		}
		__QUIZ.questionnaire.currentQuestion += 1;
		QUIZShowChoices();
		QUIZElement('quiz_next').disabled = true;
	}
}

function QUIZShowChoices() {
	var question = __QUIZ.questionnaire.currentQuestion;
	var choices = '';
	var choice = 1;

	if(question != 0) {
		QUIZElement('quiz_text').innerText = '';
		QUIZElement('quiz_image').src = __QUIZ.questionnaire.questions[question].image;
		QUIZElement('quiz_question').innerText = __QUIZ.questionnaire.questions[question].question;
		QUIZElement('quiz_progress').innerText = 'Frage ' + __QUIZ.questionnaire.currentQuestion + ' von ' + __QUIZ.questionnaire.numberOfQuestions;

		do {
			choices += '<li><label><input type="radio" name="block" onclick="QUIZDoSomething(' + question + ', ' + choice + ')"><span>' + __QUIZ.questionnaire.questions[question].choices[choice].text + '</span></label></li>';
			choice++;
		} while(typeof __QUIZ.questionnaire.questions[question].choices[choice] != 'undefined')

			QUIZElement('quiz_choices').innerHTML = choices;

		if(question < __QUIZ.questionnaire.numberOfQuestions) {
			QUIZElement('quiz_next').innerText = 'Weiter';
		}
		else {
			QUIZElement('quiz_next').innerText = 'Zum Ergebnis';
		}
	}
	else {
		QUIZElement('quiz_image').src = __QUIZ.intro.image;
		QUIZElement('quiz_question').innerText = __QUIZ.intro.title;
		QUIZElement('quiz_text').innerText = __QUIZ.intro.text;
		QUIZElement('quiz_next').innerText = 'Los geht\'s!';
	}
}

QUIZShowChoices();


