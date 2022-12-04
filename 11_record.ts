interface ICache {
  [id: string]: string;
}

type CacheType = {
  [id: string]: string;
};

const createCache = () => {
  const cache: Record<string, string> = {};
  // const cache:{ [id:number]: string }

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string): void => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

const cache = createCache();
cache.add("one", "one");
cache.remove("one");
