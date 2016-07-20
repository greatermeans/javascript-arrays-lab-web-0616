const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
	kittens.push(name);
}

function destructivelyPrependKitten(name) {
	kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
	kittens.pop();
}

function destructivelyRemoveFirstKitten() {
	kittens.shift();
}

function appendKitten(argument) {
	var newkittens = [...kittens,argument];
	return newkittens;
}

function prependKitten(argument) {
	var newkittens = [argument,...kittens];
	return newkittens;
}

function removeFirstKitten() {
	var newkittens = kittens.slice(1);
	return newkittens;
}

function removeLastKitten() {
	var newkittens = kittens.slice(0, kittens.length - 1);
	return newkittens
}