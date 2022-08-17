/* ## 3. feladat
- A `solutions/app3.js` fájlban dolgozz!
- Mentsd el külön `a`, `b` és `c` nevű változókba az alábbi tömb első, harmadik és ötödik indexű elemét!
```javascript 
		const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny']; */

const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny'];

const [, a, , b, , c] = names;

export {
	a,
	b,
	c
};