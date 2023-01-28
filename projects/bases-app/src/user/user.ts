import {storage} from "../lib/storage";

export const saveUsername = (username: string) => {
	storage.save({key: "username", value: username});
};

export const getUsername = () => {
	return storage.get("username");
};
