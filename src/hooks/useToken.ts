import useLocaleStorage from "./useLocalStorage";

function useToken() {
  const [value] = useLocaleStorage<string>("token");
  return value;
}

export default useToken;
