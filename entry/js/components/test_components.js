export function square(x) {
	return x * x;
}

export function cube(x) {
	return x * x * x;
}

// from jk-m utilities/helper
export function getParentNode(element, selector) {
	if (!element) {
		return;
	}
	for (; element && element !== document; element = element.parentNode) {
		if (element.matches(selector)) {
			return element;
		}
	}
	return null;
}

export function getOffsetTop(element) {
	if (!element) {
		return false;
	}
	var offsetTop = 0;
	do {
		if (!isNaN(element.offsetTop)) {
			offsetTop += element.offsetTop;
		}
	} while ((element = element.offsetParent));
	return offsetTop;
}

export function getScrolled() {
	return (window.pageYOffset || document.documentElement.scrollTop) - (window.clientTop || 0);
}
