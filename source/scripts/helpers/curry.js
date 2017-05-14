export default function curry(f) {
	return (...a) => (...b) => f(...a, ...b);
}
