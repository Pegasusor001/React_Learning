import { type } from "os";

// see hoe setCount is typed.
interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export type { Props };
