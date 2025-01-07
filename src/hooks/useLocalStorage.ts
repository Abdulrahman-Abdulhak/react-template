import { useCallback, useEffect, useState } from "react";
import { mergeObjects } from "../utils";

const getItem = <T>(
  key: string,
  deserializer: (text: string) => T = JSON.parse
) => {
  const item = localStorage.getItem(key);

  if (item === null || item === undefined) return null;
  return deserializer(item);
};
const setItem = <T>(
  key: string,
  value: T,
  serializer: (val: T) => string = JSON.stringify
) => {
  localStorage.setItem(key, serializer(value));
};
const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

type Options<T> = {
  initialValue?: T;
  useInitialValue?: boolean;
  serializer?: (val: T) => string;
  deserializer?: (text: string) => T;
};

const defaultOptions: Options<any> = {
  initialValue: null,
  useInitialValue: false,
  serializer: JSON.stringify,
  deserializer: JSON.parse,
};

function useLocaleStorage<T>(
  key: string,
  options: Options<T> = defaultOptions
) {
  //* Initialization & Configurations
  const decidedOptions = mergeObjects(defaultOptions, options);

  const initialStoredValue = getItem<T>(key);
  const hadStoredValue = initialStoredValue !== null;
  const initialValue = hadStoredValue
    ? initialStoredValue
    : (decidedOptions.initialValue as T | null);

  if (
    !hadStoredValue &&
    decidedOptions.useInitialValue &&
    initialValue != null
  ) {
    setItem(key, initialValue);
  }

  //* Actual hook implementation.
  const [value, setValue] = useState<T | null>(initialValue);

  const setStoredValue = useCallback((value: T) => {
    //? to render update immediately.
    setValue(value);

    //? store and notify EventListeners
    setItem(key, value, JSON.stringify);
  }, []);

  const removeStoredValue = useCallback(() => {
    removeItem(key);

    if (decidedOptions.useInitialValue && decidedOptions.initialValue != null) {
      setStoredValue(decidedOptions.initialValue);
    }
  }, []);

  // TODO: update to useEventListener
  // TODO: update state only when the value for {key} changes.
  useEffect(() => {
    const storageHandler = () => {
      const newValue = getItem<T>(key);
      setValue(newValue);
    };

    window.addEventListener("storage", storageHandler);
    return () => window.removeEventListener("storage", storageHandler);
  }, [key, setValue]);

  return [value, setStoredValue, removeStoredValue];
}

export default useLocaleStorage;
