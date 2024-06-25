// https://github.com/yuanfux/zero-width-lib/blob/master/src/zero-width-lib.js

const zeroWidthNonJoiner = '‌';
const zeroWidthJoiner = '‍';
const zeroWidthSpace = '​';
const zeroWidthNoBreakSpace = '﻿';
const leftToRightMark = '‎';
const rightToLeftMark = '‏';

const zeroWidthDict = {
	leftToRightMark,
	rightToLeftMark,
	zeroWidthNonJoiner,
	zeroWidthJoiner,
	zeroWidthNoBreakSpace,
	zeroWidthSpace
};

const Quinary2ZeroMap = Object.keys(zeroWidthDict).map(key => zeroWidthDict[key]);
const Zero2QuinaryMap = 
	Quinary2ZeroMap.reduce((acc, cur, index) => {
		acc[cur] = '' + index;
		return acc;
	}, {});

function t2z(t: string) {
	let z = '';
	for (let i = 0 ; i < t.length ; i++) {
		const base10 = t.codePointAt(i);
		const base5 = base10.toString(5);
		let zero = '';
		for (let j = 0 ; j < base5.length ; j++) {
			zero += Quinary2ZeroMap[+base5.charAt(j)];
		}
		i = base10 < 0x10000 ? i : i + 1;
		z += i === t.length - 1 ? zero : zero + zeroWidthSpace;
	}
	return z;
}

function z2t(z: string) {
	let t = '';
	if (z.length === 0) {
		return t;
	}
	const chars = z.split(zeroWidthSpace);
	for (let i = 0 ; i < chars.length ; i++) {
		let base5 = '';
		for (let j = 0 ; j < chars[i].length ; j++) {
			base5 += Zero2QuinaryMap[chars[i].charAt(j)];
		}
		t += String.fromCodePoint(parseInt(base5, 5));
	}
	return t;
}

export function encode(vis: string, hid: string) {
	let e = '';
	const hid2z = t2z(hid);
	if (vis.length === 0) {
		return hid2z;
	}
	let isAdded = false;
	for (const ch of vis) {
		e += ch;
		if (!isAdded) {
			e += hid2z;
			isAdded = true;
		}
	}
	return e;
}

export function extract(t) {
	let vis = '';
	let hid = '';
	for (const ch of t) {
		if (Zero2QuinaryMap[ch]) {
			hid += ch;
		} else {
			vis += ch;
		}
	}
	return { vis, hid }
}

export function decode(text: string) {
    const extractText = extract(text)
    const visible = extractText.vis
    const hidden = z2t(extractText.hid)
	return { visible, hidden }
}

