export async function get({ params }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	return {
		staus: 200,
		body: pokemon,
	};
}
