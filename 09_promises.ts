interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const url = "https://swapi.py4e.com/api/people/1";

const fetchLuke = async (): Promise<LukeSkywalker> => {
  const res = await fetch(url);
  const data: LukeSkywalker = await res.json();

  return data;
};

const fetchLuke2 = async (): Promise<LukeSkywalker> => {
  const res = await fetch(url);
  const data = await res.json();

  return data as LukeSkywalker;
};
