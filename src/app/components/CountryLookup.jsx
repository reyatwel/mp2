"use client";

import { useState } from "react";

export default function CountryLookup() {
    const [country, setCountry] = useState("Philippines");

  return (
    <div>
      {country}
    </div>
  )
}
