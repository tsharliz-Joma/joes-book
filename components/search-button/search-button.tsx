import * as React from "react";
import {Button} from "../ui/button";
import {useFormStatus} from "react-dom";

const SearchButton = () => {
  const status = useFormStatus();
  return (
    <Button type="submit" className="sm:w-40">
      {status.pending ? `Searching...` : "Search"}
    </Button>
  );
};

export default SearchButton
