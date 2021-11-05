import { type } from "os";
import React, { useState, useRef } from "react";

interface Person {
  firstname: string;
  lastname: string;
  age?: number;
}

interface Props {
  text: string;
  number?: number;
  boolean?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLDivElement>) => void;
  obj: Person;
}

export type { Person, Props };
