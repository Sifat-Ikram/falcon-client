"use client";
import { useState, useEffect, useCallback } from "react";
import useAxiosPublic from "./useAxiosPublic";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  const fetchCategories = useCallback(() => {
    setLoading(true);
    setError(null);

    axiosPublic
      .get("/categories")
      .then((res) => setCategories(res.data.data || []))
      .catch((err) => setError(err.message || "Error fetching Categories"))
      .finally(() => setLoading(false));
  }, [axiosPublic]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error, refetch: fetchCategories };
}
