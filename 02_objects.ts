type Params = {
  first: number;
  second: number;
};

const addTwoNumbers = (params: Params): number => {
  return params.first + params.second;
};

interface IParams {
  first: number;
  second: number;
}

const addTwoNumbers2 = (params: IParams): number =>
  params.first + params.second;
