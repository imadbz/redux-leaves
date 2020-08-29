export type Unpacked<IsArrayT> = IsArrayT extends (infer U)[] ? U : unknown;