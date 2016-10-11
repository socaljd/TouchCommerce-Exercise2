function validateForm() {
	var valid = true;
	var el, error_div, error_span1, error_span2;

	el = document.getElementById('full_name');
	error_div = el.parentElement.children[3];
	error_span1 = el.parentElement.children[4].children[0];
	if (el.value === null || el.value === '') {
		valid = false;
		el.className = el.className.indexOf('error') === -1 ? 'error' : '';
		if (el.className.indexOf('error') === -1) {
			el.className = el.className+' error';
		}
		if (error_div.className.indexOf('hide') > -1) {
			error_div.className = error_div.className.replace('hide', '');
		}
		if (error_span1.className.indexOf('hide') > -1) {
			error_span1.className = error_span1.className.replace('hide', '');
		}
	} else {
		el.className = '';
		if (error_div.className.indexOf('hide') === -1) {
			error_div.className = error_div.className+' hide';
		}
		if (error_span1.className.indexOf('hide') === -1) {
			error_span1.className = error_span1.className+' hide';
		}
	}

	el = document.getElementById('mobile');
	error_div = el.parentElement.children[3];
	error_span1 = el.parentElement.children[4].children[0];
	error_span2 = el.parentElement.children[4].children[1];
	if (el.value === null || el.value === '') {
		valid = false;
		el.className = el.className.indexOf('error') === -1 ? 'error' : '';
		if (el.className.indexOf('error') === -1) {
			el.className = el.className+' error';
		}
		if (error_div.className.indexOf('hide') > -1) {
			error_div.className = error_div.className.replace('hide', '');
		}
		if (error_span1.className.indexOf('hide') > -1) {
			error_span1.className = error_span1.className.replace('hide', '');
		}
		if (error_span2.className.indexOf('hide') === -1) {
			error_span2.className = error_span2.className+' hide';
		}
	} else if (!el.value.match(/^\d{3}-\d{3}-\d{4}$/)) {
		valid = false;
		el.className = el.className.indexOf('error') === -1 ? 'error' : '';
		if (el.className.indexOf('error') === -1) {
			el.className = el.className+' error';
		}
		if (error_div.className.indexOf('hide') > -1) {
			error_div.className = error_div.className.replace('hide', '');
		}
		if (error_span1.className.indexOf('hide') === -1) {
			error_span1.className = error_span1.className+' hide';
		}
		if (error_span2.className.indexOf('hide') > -1) {
			error_span2.className = error_span2.className.replace('hide', '');
		}
	} else {
		el.className = '';
		if (error_div.className.indexOf('hide') === -1) {
			error_div.className = error_div.className+' hide';
		}
		if (error_span1.className.indexOf('hide') === -1) {
			error_span1.className = error_span1.className+' hide';
		}
		if (error_span2.className.indexOf('hide') === -1) {
			error_span2.className = error_span2.className+' hide';
		}
	}

	el = document.getElementById('state');
	error_div = el.parentElement.children[2];
	error_span1 = el.parentElement.children[3].children[0];
	if (el.value === null || el.value === '') {
		valid = false;
		el.className = el.className.indexOf('error') === -1 ? 'error' : '';
		if (el.className.indexOf('error') === -1) {
			el.className = el.className+' error';
		}
		if (error_div.className.indexOf('hide') > -1) {
			error_div.className = error_div.className.replace('hide', '');
		}
		if (error_span1.className.indexOf('hide') > -1) {
			error_span1.className = error_span1.className.replace('hide', '');
		}
	} else {
		el.className = '';
		if (error_div.className.indexOf('hide') === -1) {
			error_div.className = error_div.className+' hide';
		}
		if (error_span1.className.indexOf('hide') === -1) {
			error_span1.className = error_span1.className+' hide';
		}
	}
	if (el.value == 'CA') {
		el = document.getElementById('purchased_in_ca');
		error_div = el.parentElement.children[2];
		error_span1 = el.parentElement.children[3].children[0];
		if (el.value == null || el.value == '') {
			valid = false;
			el.className = el.className.indexOf('error') === -1 ? 'error' : '';
			if (el.className.indexOf('error') === -1) {
				el.className = el.className+' error';
			}
			if (error_div.className.indexOf('hide') > -1) {
				error_div.className = error_div.className.replace('hide', '');
			}
			if (error_span1.className.indexOf('hide') > -1) {
				error_span1.className = error_span1.className.replace('hide', '');
			}
		} else {
			el.className = '';
			if (error_div.className.indexOf('hide') === -1) {
				error_div.className = error_div.className+' hide';
			}
			if (error_span1.className.indexOf('hide') === -1) {
				error_span1.className = error_span1.className+' hide';
			}
		}
	}

	el = document.getElementById('question');
	error_div = el.parentElement.children[2];
	error_span1 = el.parentElement.children[3].children[0];
	if (el.value === null || el.value === '') {
		valid = false;
		el.className = el.className.indexOf('error') === -1 ? 'error' : '';
		if (el.className.indexOf('error') === -1) {
			el.className = el.className+' error';
		}
		if (error_div.className.indexOf('hide') > -1) {
			error_div.className = error_div.className.replace('hide', '');
		}
		if (error_span1.className.indexOf('hide') > -1) {
			error_span1.className = error_span1.className.replace('hide', '');
		}
	} else {
		el.className = '';
		if (error_div.className.indexOf('hide') === -1) {
			error_div.className = error_div.className+' hide';
		}
		if (error_span1.className.indexOf('hide') === -1) {
			error_span1.className = error_span1.className+' hide';
		}
	}

	if (valid) {
		el = document.getElementById('content');
		el.innerHTML = '<h4>Congratulations!! You have reached the chat agent.</h4>';
	}
}

function togglePurchaseField() {
	var state = document.getElementById('state');
	var container = document.getElementById('purchased_in_ca_container');
	if (state.value === 'CA') {
		if (state.className.indexOf('error') > -1) {
			state.className = state.className.replace('error', '');
		}
		if (state.nextSibling.nextSibling.className.indexOf('hide') === -1) {
			state.nextSibling.nextSibling.className = state.nextSibling.nextSibling.className+' hide';
		}
		container.className = container.className.replace(/hide/g, '');
	} else {
		container.className = container.className+' hide';
	}
}
