interface Data {
	key: string;
	value: string;
}

export const storage = {
	save({key, value}: Data) {
		return localStorage.setItem(key, value);
	},

	get(key: string) {
		return localStorage.getItem(key);
	},
};
