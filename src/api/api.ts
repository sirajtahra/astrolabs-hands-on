function fakePromise(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

const fetchUser = () => fakePromise({ name: "John Doe" });

export { fetchUser };
