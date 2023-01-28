import {storage} from "../lib/storage";
import {saveUsername, getUsername} from "../user/user";

jest.mock("../lib/storage");
// Para poder usar el mock de storage en el test por typescript
const storageMock = storage as jest.Mocked<typeof storage>;

describe("first example", () => {
	test("examples with mocks", () => {
		const myMock = jest.fn();

		// console.log(myMock);
		myMock();
		myMock();
		myMock();

		// expect(myMock).toHaveBeenCalled();
		expect(myMock).toHaveBeenCalledTimes(3);
	});

	test("examples with mocks return value", () => {
		const myMocks = jest.fn();

		myMocks
			.mockReturnValueOnce(true)
			.mockReturnValueOnce("Hello")
			.mockReturnValue(5);

		const result1 = myMocks();
		const result2 = myMocks();
		const result3 = myMocks();

		expect(result1).toBe(true);
		expect(result2).toBe("Hello");
		expect(result3).toBe(5);
	});

	test("example with implementarion storage.save", () => {
		// console.log('storage', storage);
		saveUsername("Humberto");
		expect(storage.save).toHaveBeenCalled();
		expect(storage.save).toHaveBeenCalledTimes(1);
		expect(storage.save).toHaveBeenCalledWith({
			key: "username",
			value: "Humberto",
		});
  });
  
  test('example with implementation storage.get', () => {

    // Mockear la respuesta del metodo storage.get(username)
    const username = "Humberto";
    storageMock.get.mockReturnValueOnce(username);
    const result = getUsername();

    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith("username")
    expect(result).toBe(username)
   
  })

});
