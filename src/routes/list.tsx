import { ReactNode } from "react";

interface ListItemProps {
  value: number;
}

interface NumberListProps {
  numbers: number[];
}

const ListItem = (props: ListItemProps) => {
  return <li>{props.value}</li>;
};

const NumberList = (props: NumberListProps) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => {
    return <ListItem key={index} value={number} />;
  });

  return <ul>{listItems}</ul>;
};

export default NumberList;
