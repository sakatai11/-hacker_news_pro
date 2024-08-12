"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent } from "react";
import { Route } from "next";

const KeyWord = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q")?.toString();
    if (q) {
      params.set("q", q);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  return (
    <Box sx={{ marginTop: 6 , maxWidth: "520px" , width: "100%" , marginX: "auto" }}>
      <form onSubmit={handleSubmit} className="flex items-center gap-6">
        <TextField
          id="standard-basic" 
          name="q"
          label="Search" 
          variant="standard"  
          margin="dense"
          size="small"
          defaultValue={searchParams.get("q")?.toString()}
          fullWidth
          />
        <Button type="submit" variant="outlined">
          <SearchIcon />
        </Button>
      </form>
    </Box>
  );
}

export default KeyWord;