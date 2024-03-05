import data from "./user.json";

const fakePromise = <T>(data: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

const fetchUser = () => fakePromise(data);

export { fetchUser };
