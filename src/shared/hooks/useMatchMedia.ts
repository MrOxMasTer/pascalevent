"use client";

import { useCallback, useLayoutEffect, useState } from "react";

interface devicesType {
  [key: string]: string;
}

const devices: devicesType = {
  isMobileS: "320px",
  isMobileM: "375px",
  isMobileL: "425px",
  isTablet: "768px",
  isLaptop: "1024px",
  isLaptopL: "1440px",
  is4K: "2560px",
};

interface queryType {
  [key: string]: string;
}

interface stateType {
  [key: string]: boolean;
}

const createCustomMql = (query?: queryType) => {
  if (query) {
    let result: MediaQueryList[] = [];

    for (const key in query) {
      const media = query[key];
      result = [...result, window.matchMedia(media)];
    }

    return result;
  }

  return [];
};

const keys = Object.keys(devices);

function toObject(keys: string[], values: boolean[]) {
  const result: stateType = {};

  for (var i = 0; i < keys.length; i++) result[keys[i]] = values[i];
  return result;
}

export const useMatchMedia = (query?: queryType) => {
  const [state, setState] = useState<stateType>({});

  const createObject = useCallback(
    (query?: queryType) => {
      const mql = keys.map((key) =>
        window.matchMedia(`(min-width: ${devices[key]})`)
      );
      const cmql = createCustomMql(query);
      const allMql = [...mql, ...cmql];
      const matchedQuery = allMql.map((mql) => mql.matches);
      const keysCmql = Object.keys(cmql);

      const object: stateType = toObject([...keys, ...keysCmql], matchedQuery);

      return object;
    },
    [query]
  );

  useLayoutEffect(() => {
    const object = createObject(query);

    setState(object);
  }, []);

  return state;
};
