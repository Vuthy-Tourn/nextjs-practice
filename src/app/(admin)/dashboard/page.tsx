"use client";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type Movie = {
  id: number;
  title: string;
  year: string;
};
const columns: TableColumn<Movie>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    omit:true
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data: Movie[] = [
  { id: 1, title: "Beetlejuice", year: "1988" },
  { id: 2, title: "Ghostbusters", year: "1984" },
  { id: 3, title: "The Matrix", year: "1999" },
  { id: 4, title: "Inception", year: "2010" },
  { id: 5, title: "Back to the Future", year: "1985" },
  { id: 6, title: "The Shawshank Redemption", year: "1994" },
  { id: 7, title: "The Godfather", year: "1972" },
  { id: 8, title: "Pulp Fiction", year: "1994" },
  { id: 9, title: "Jurassic Park", year: "1993" },
  { id: 10, title: "The Dark Knight", year: "2008" },
  { id: 11, title: "Forrest Gump", year: "1994" },
  { id: 12, title: "The Lion King", year: "1994" },
  { id: 13, title: "Titanic", year: "1997" },
  { id: 14, title: "Fight Club", year: "1999" },
  { id: 15, title: "Avatar", year: "2009" },
  { id: 16, title: "Gladiator", year: "2000" },
  { id: 17, title: "Toy Story", year: "1995" },
  { id: 18, title: "The Avengers", year: "2012" },
  { id: 19, title: "Frozen", year: "2013" },
  { id: 20, title: "Interstellar", year: "2014" },
];



// A super simple expandable component.
const ExpandedComponent = ({ data }: { data: Movie }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default function AdminDashboard() {
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState("");
 // Handle search
    useEffect(() => {
        const filtered = data.filter((data) =>
            `${data.title}`.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMovies(filtered);
    },[search, data]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mt-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DataTable
        title="Movie List"
        columns={columns}
        data={filteredMovies}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
      />
    </div>
  );
}
