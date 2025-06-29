"use client";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import useAxiosPublic from "./useAxiosPublic";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  const fetchProducts = useCallback(() => {
    setLoading(true);
    setError(null);

    axiosPublic
      .get("/shop/products")
      .then((res) => {
        setProducts(res.data.data || []);
      })
      .catch((err) => {
        setError(err.message || "Error fetching Products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [axiosPublic]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}
