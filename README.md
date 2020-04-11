# Answer to [StackOverflow Question][q]


I know the title is really bad, but I'm just now sure how to explain the situation. Feel free to suggest a better title and I'll change it.

So I just starting to get into testing for the first time, and I'm using Jest. was doing okay till I ran into a construction like this
```
function f(n) {
	let g;
	if (n === 1) {
		g = () => console.log(`ok`);
	} else {
		g = () => {throw `not okay`;};
	}

	someEvent.listen(async () => {
		g();
	});
}
```
I'm stuck on how to test that, when I put in something other than 1 to `f`, it will throw `not okay`. From what I gather, just the simplest `expect(...).toBe(...)` will work if the callback to the event isn't async, but I haven't been able to figure out how to do it with it being async.

[q]: https://stackoverflow.com/questions/61151892/how-to-test-this-specific-situation-in-jest 