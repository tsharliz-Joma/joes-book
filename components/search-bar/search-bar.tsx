"use client";
import * as React from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {Input} from "../ui/input";
import {Search} from "lucide-react";
import {Button} from "../ui/button";

const SearchBar = ({...props}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = (searchValue: string) => {
    // Create a new URLSearchParams object from the current search parameters
    const params = new URLSearchParams(searchParams);
    // Check if the searchValue is not empty
    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div {...props}>
      <div className="relative w-full">
        <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          className="pl-8"
          placeholder="Search guides, e.g. 'Aeropress 15g'"
          onChange={(event) => handleSearch(event.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <Button className="sm:w-40">Search</Button>
    </div>
  );
};

export default SearchBar;
