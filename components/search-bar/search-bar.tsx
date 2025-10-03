"use client";
import * as React from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {Input} from "../ui/input";
import {Search} from "lucide-react";
import {Button} from "../ui/button";
import Form from "next/form";
import SearchButton from "../search-button/search-button";

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
    <Form
      action={"/search"}
      className="relative w-full grid md:grid-cols-6 gap-5">
      <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 size-4 text-muted-foreground" />
      <Input
        name="query"
        className="pl-8 md:col-span-5"
        placeholder="Search guides, e.g. 'Aeropress 15g'"
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchButton />
    </Form>
  );
};

export default SearchBar;
