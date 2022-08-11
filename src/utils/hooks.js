import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
  // importe no seu componente como [valor, setValor] = useLocalStorage( "CHAVE", "VALOR");
  // quando você usar esse custom hook, a CHAVE pode ser declarada de forma fixa ou variável (.env);
}

function useConsole(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);

  // custom hook para console.log hehehehe
}

function useAxios() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // different!
  const [controller, setController] = useState();

  const axiosFunction = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => () => controller && controller.abort(), [controller]);

  return [response, error, loading, axiosFunction];
}
export { useConsole, useLocalStorage, useAxios };
