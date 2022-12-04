type TryCatch = "fail" | "success";

const tryCatchDemo = (state: TryCatch) => {
  try {
    if (state === "fail") {
      throw new Error("Error!");
    }
  } catch (e) {
    // return (e as Error).message;
    if (e instanceof Error) {
      return e.message;
    }
    return "Error";
  }
};
