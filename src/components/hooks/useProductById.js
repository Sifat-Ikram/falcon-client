"use client";
import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

export function useProductById(productName, refreshTrigger = 0) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!productName) return;
    setLoading(true);
    axiosPublic
      .get(`/product/${productName}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => setError(err.message || "Error fetching product"))
      .finally(() => setLoading(false));
  }, [productName, refreshTrigger, axiosPublic]);

  return { product, loading, error };
}
