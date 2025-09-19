import * as React from "react";
import {Input} from "../ui/input";
import {Search} from "lucide-react";
import {Button} from "../ui/button";

const SearchBar = ({...props}) => {
  return (
    <div {...props}>
      <div className="relative w-full">
        <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          className="pl-8"
          placeholder="Search guides, e.g. 'Aeropress 15g'"
        />
      </div>
      <Button className="sm:w-40">Search</Button>
    </div>
  );
};

export default SearchBar;
